<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useConfirm } from "primevue/useconfirm";
import ConfirmDialog from "primevue/confirmdialog";

import { useStockCount } from "@/composables/useStockCount";
import { useStockCountStore } from "@/stores/stockcount_store";

const route = useRoute();
const router = useRouter();
const api = useStockCount();
const store = useStockCountStore();
const confirm = useConfirm();

const reportId = computed(() => String(route.params.reportId ?? ""));
const roomId = computed(() => String(route.query.roomId ?? ""));

const loading = ref(false);
const busy = ref(false);
const resetting = ref(false);
const finishing = ref(false);

const scan1 = ref("");
const scan2 = ref("");
const errorMsg = ref("");
const infoMsg = ref("");

const step = ref<"scan1" | "scan2">("scan1");

const scan1El = ref<HTMLInputElement | null>(null);
const scan2El = ref<HTMLInputElement | null>(null);

const verifiedSet = ref<Set<string>>(new Set());
const scannedCount = computed(() => verifiedSet.value.size);

const firstValidated = ref(false);

const canFinish = computed(() => scannedCount.value > 0 && !busy.value && !loading.value && !!selectedRoom.value);


// Toast
const toastMsg = ref("");
let toastTimer: any = null;

function showToast(msg: string, ms = 1400) {
  toastMsg.value = msg;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (toastMsg.value = ""), ms);
}

// Vibrate
function vibrate(pattern: number | number[] = [300, 200, 320]) {
  try {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(pattern);
    }
  } catch {
    // ignore
  }
}

function cleanScan(v: string) {
  return String(v ?? "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")      // zero-width chars
    .replace(/[‐-‒–—−]/g, "-")                 // normalize hyphens
    .replace(/[\r\n]+/g, "")
    .trim();
}


function setError(msg: string) {
  errorMsg.value = msg;
  infoMsg.value = "";

  // ✅ also show toast so user always sees it
  showToast(msg, 1800);

  vibrate();
}


function setInfo(msg: string) {
  infoMsg.value = msg;
  errorMsg.value = "";
}

function clearMessages() {
  errorMsg.value = "";
  infoMsg.value = "";
}

function clearBothAndFocus(msg?: string) {
  if (msg) setError(msg);
  scan1.value = "";
  scan2.value = "";
  firstValidated.value = false;
  step.value = "scan1";
  focusScan1();
}

async function focusScan1() {
  await nextTick();
  if (!loading.value && selectedRoom.value) {
    scan1El.value?.focus();
  }
}

async function focusScan2() {
  await nextTick();
  scan2El.value?.focus();
}

function resetFlow() {
  scan1.value = "";
  scan2.value = "";
  firstValidated.value = false;
  step.value = "scan1";
  focusScan1();
}

function storageKey() {
  return `phase1_verified:${reportId.value}:${roomId.value}`;
}

function loadVerifiedFromStorage() {
  try {
    const raw = localStorage.getItem(storageKey());
    const arr = raw ? (JSON.parse(raw) as string[]) : [];
    verifiedSet.value = new Set(arr.map((x) => cleanScan(x)).filter(Boolean));
  } catch {
    verifiedSet.value = new Set();
  }
}

function saveVerifiedToStorage() {
  try {
    localStorage.setItem(storageKey(), JSON.stringify(Array.from(verifiedSet.value)));
  } catch {
    // ignore
  }
}

function clearVerifiedStorage() {
  verifiedSet.value = new Set();
  try {
    localStorage.removeItem(storageKey());
  } catch {
    // ignore
  }
}

function markVerified(boxId: string) {
  verifiedSet.value.add(boxId);
  saveVerifiedToStorage();
}

function normalizeRooms(rooms: any[]) {
  return rooms.map((r) => ({
    roomId: String(r.roomId ?? r.id ?? r.room_id ?? ""),
    name: r.name ?? r.roomName ?? r.room_name ?? "Room",
    phase1Status: r.phase1Status ?? r.phase1_status ?? "NotStarted",
  }));
}

const selectedRoom = computed(() => store.selectedRoom as any | null);
const selectedRoomId = computed(() => {
  const r = selectedRoom.value;
  return r ? String(r.roomId ?? r.id ?? "") : "";
});

async function refreshRooms() {
  const res = await api.getRooms(reportId.value);
  const rawRooms = res?.rooms || res || [];
  const rooms = normalizeRooms(rawRooms);
  store.setRooms(rooms);

  const room = rooms.find((r: any) => String(r.roomId) === roomId.value);
  if (room) store.selectRoom(room);

  return rooms;
}

async function doScan(boxId: string) {
  if (!selectedRoom.value) throw new Error("Room not selected");
  return await api.phase1Scan(reportId.value, selectedRoomId.value, boxId);
}

// ✅ Must match backend exactly
const LOCKED_PREFIXES = new Set(["PML", "CML"]);
const UNLOCKED_PREFIXES = new Set(["PSN", "CSN"]);
const ALLOWED_PREFIXES = new Set([...LOCKED_PREFIXES, ...UNLOCKED_PREFIXES]);

function prefixOfLocal(boxId: string) {
  const s = cleanScan(boxId).toUpperCase();
  const head = s.split("-")[0] || "";
  return head.slice(0, 3);
}

function ensureAllowedPrefixLocal(boxId: string) {
  const b = cleanScan(boxId).toUpperCase();
  if (!b) throw new Error("boxId required");
  const p = prefixOfLocal(b);
  if (!ALLOWED_PREFIXES.has(p)) throw new Error(`Invalid box: ${p}`);
  return { b, p };
}

async function submitFirst() {
  clearMessages();
  if (busy.value) return;

  const raw = cleanScan(scan1.value);
  if (!raw) return;

  busy.value = true;
  try {
    const { b } = ensureAllowedPrefixLocal(raw);

    // local duplicate on this device
    if (verifiedSet.value.has(b)) {
      clearBothAndFocus("Duplicate box.");
      return;
    }

    // ✅ check report-wide duplicate early (different room)
    await api.phase1CheckBox(reportId.value, selectedRoomId.value, b);

    // ✅ FIRST SERVER SCAN (sets ScannedOnce)
    const res1 = await doScan(b);

    const status1 = String(res1?.status ?? "").toLowerCase();
    const msg1 = String(res1?.message ?? "");
    if (status1 !== "scannedonce" && status1 !== "verified") {
      clearBothAndFocus(msg1 || "Scan failed");
      return;
    }

    // ✅ move to scan2
    scan1.value = b;
    scan2.value = "";
    firstValidated.value = true;
    step.value = "scan2";

    // ✅ focus scan2 reliably
    await nextTick();
    requestAnimationFrame(() => {
      scan2El.value?.focus();
    });
  } catch (e: any) {
    clearBothAndFocus(
      e?.response?.data?.message ||
        e?.response?.data?.error ||
        e?.message ||
        "Invalid box"
    );
  } finally {
    busy.value = false;
  }
}



async function submitSecond() {
  clearMessages();
  if (busy.value) return;

  if (step.value !== "scan2" || !firstValidated.value) {
    step.value = "scan1";
    focusScan1();
    return;
  }

  const v1 = cleanScan(scan1.value).toUpperCase();
  const v2 = cleanScan(scan2.value).toUpperCase();

  if (!v1) return clearBothAndFocus("Scan box first.");
  if (!v2) return;

  if (v2 !== v1) return clearBothAndFocus("Not matching.");

  if (verifiedSet.value.has(v1)) return clearBothAndFocus("Duplicate box.");

  busy.value = true;
  try {
    // ✅ SECOND SERVER SCAN (should become Verified)
    const res2 = await doScan(v1);

    const status2 = String(res2?.status ?? "").toLowerCase();

    if (status2 !== "verified") {
      // If backend still says ScannedOnce, user needs one more scan2
      clearBothAndFocus("Not verified yet. Scan again.");
      return;
    }

    // ✅ success
    markVerified(v1);
    showToast(`Box ID: ${v1} saved ✅`);
    resetFlow();
  } catch (e: any) {
    clearBothAndFocus(
      e?.response?.data?.message ||
      e?.response?.data?.error ||
      e?.message ||
      "Scan failed"
    );
  } finally {
    busy.value = false;
  }
}


// ✅ Reset using PrimeVue ConfirmDialog
function resetRoom() {
  clearMessages();
  if (!selectedRoom.value) return setError("Room not selected");

  confirm.require({
    header: "Confirm Reset",
    message: "Reset this room? All Phase 1 scans for this room will be cleared.",
    icon: "pi pi-exclamation-triangle",
    acceptLabel: "Yes, Reset",
    rejectLabel: "Cancel",
    acceptClass: "p-button-danger",
    rejectClass: "p-button-secondary",
    accept: async () => {
      resetting.value = true;
      try {
        await api.phase1Reset(reportId.value, selectedRoomId.value);
        clearVerifiedStorage();
        resetFlow();
        await refreshRooms();
        showToast("Room reset successfully ✅");
        await router.push(`/stock-count/${reportId.value}/phase1`);
      } catch (e: any) {
        setError(
          e?.response?.data?.error ||
          e?.response?.data?.message ||
          "Reset failed"
        );
      } finally {
        resetting.value = false;
      }
    },
  });
}

function finishRoom() {
  clearMessages();
  if (!selectedRoom.value) return setError("Room not selected");

  // ✅ NEW: block finishing if nothing verified
  if (scannedCount.value === 0) {
    return setError("Scan and verify at least one box before finishing.");
  }

  confirm.require({
    header: "Finish Room",
    message: "Mark this room completed?",
    icon: "pi pi-check-circle",
    acceptLabel: "Yes, Finish",
    rejectLabel: "Cancel",
    acceptClass: "p-button-success",
    rejectClass: "p-button-secondary",
    accept: async () => {
      finishing.value = true;
      try {
        await api.phase1Complete(reportId.value, selectedRoomId.value);

        const rooms = await refreshRooms();
        const allDone =
          rooms.length > 0 &&
          rooms.every((r: any) => {
            const s = String(r.phase1Status ?? "").toLowerCase();
            return s === "completed" || s === "complete" || s === "done";
          });

        if (allDone) {
          await router.push(`/stock-count/${reportId.value}/phase2`);
        } else {
          setInfo("Room completed. Finish remaining rooms to start Phase 2.");
          await router.push(`/stock-count/${reportId.value}/phase1`);
        }
      } catch (e: any) {
        setError(
          e?.response?.data?.error ||
          e?.response?.data?.message ||
          "Finish failed"
        );
      } finally {
        finishing.value = false;
      }
    },
  });
}

// ---------------------------
// ✅ VisualViewport footer fix
// keeps footer ABOVE Android Chrome bottom bar + keyboard
// ---------------------------
const vvBottom = ref(0);

function updateVVBottom() {
  try {
    const vv = window.visualViewport;
    if (!vv) {
      vvBottom.value = 0;
      return;
    }
    const covered = Math.max(0, window.innerHeight - (vv.height + vv.offsetTop));
    vvBottom.value = Math.round(covered);
  } catch {
    vvBottom.value = 0;
  }
}

onMounted(() => {
  updateVVBottom();
  window.addEventListener("resize", updateVVBottom);

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", updateVVBottom);
    window.visualViewport.addEventListener("scroll", updateVVBottom);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateVVBottom);

  if (window.visualViewport) {
    window.visualViewport.removeEventListener("resize", updateVVBottom);
    window.visualViewport.removeEventListener("scroll", updateVVBottom);
  }
});

const footerStyle = computed(() => ({
  bottom: `${vvBottom.value}px`,
}));

const contentPaddingStyle = computed(() => ({
  paddingBottom: `${vvBottom.value + 110}px`, // footer height + breathing room
}));

// Init
async function init() {
  loading.value = true;
  try {
    loadVerifiedFromStorage();
    await refreshRooms();

    if (selectedRoom.value) {
      await api.phase1Start(reportId.value, selectedRoomId.value);
    }

    resetFlow();
    await nextTick();
    focusScan1();
  } catch (e: any) {
    setError(
      e?.response?.data?.error ||
      e?.response?.data?.message ||
      "Failed to load room"
    );
  } finally {
    loading.value = false;
    await nextTick();
    focusScan1();
  }
}

onMounted(init);
</script>

<template>
  <div class="min-h-[100dvh] bg-gray-50 text-black">

    <!-- Top minimal bar -->
    <div class="max-w-md mx-auto px-4 pt-4">
      <div class="flex items-center justify-between">
        <NuxtLink :to="`/stock-count/${reportId}/phase1`" class="text-sm font-medium text-gray-700">
          ← Back
        </NuxtLink>

        <div class="text-sm font-semibold text-gray-900 truncate max-w-[70%] text-right">
          {{ selectedRoom?.name || "Room" }}
        </div>
      </div>
    </div>

    <!-- Toast -->
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-3">
      <div v-if="toastMsg" class="fixed left-1/2 -translate-x-1/2
               top-[calc(env(safe-area-inset-top)+16px)]
               z-[9999]
               px-4 py-3 rounded-2xl shadow-lg border border-gray-200
               bg-black/90 text-white text-sm font-semibold backdrop-blur">
        {{ toastMsg }}
      </div>
    </Transition>

    <!-- Centered content -->
    <div class="max-w-md mx-auto px-4" :style="contentPaddingStyle">
      <div class="min-h-[calc(100dvh-160px)] flex items-center justify-center">
        <div class="w-full space-y-3">
          <!-- Messages -->
          <div v-if="errorMsg" class="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm">
            {{ errorMsg }}
          </div>
          <div v-else-if="infoMsg" class="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 text-sm">
            {{ infoMsg }}
          </div>

          <!-- Main card -->
          <div class="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-4">
            <!-- Counter -->
            <div class="flex justify-between items-center">
              <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Total Scanned
              </div>

              <div
                class="px-4 py-2 rounded-xl border border-blue-200 bg-blue-50 text-blue-900 font-bold text-lg tabular-nums shadow-sm">
                {{ scannedCount }}
              </div>
            </div>

            <input ref="scan1El" v-model="scan1" class="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-white text-base
                     focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:bg-gray-100" placeholder="Scan box"
              :disabled="loading || busy || resetting || finishing || step !== 'scan1' || !selectedRoom"
              @focus="clearMessages" @keyup.enter.prevent="submitFirst" inputmode="text" autocomplete="off" />

            <input ref="scan2El" v-model="scan2" class="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-white text-base
                     focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:bg-gray-100" placeholder="Scan again"
              :disabled="loading || busy || resetting || finishing || step !== 'scan2' || !selectedRoom || !firstValidated"
              @focus="clearMessages" @keyup.enter.prevent="submitSecond" inputmode="text" autocomplete="off" />
          </div>

          <div v-if="!loading && !selectedRoom"
            class="p-4 rounded-2xl bg-white border border-gray-200 text-sm text-gray-700 shadow-sm">
            Room not found.
          </div>
        </div>
      </div>
    </div>

    <!-- ✅ Footer that sticks ABOVE Chrome bottom bar + keyboard -->
    <div class="fixed left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-200 z-50" :style="footerStyle">
      <div class="max-w-md mx-auto px-4 py-3">
        <div class="grid grid-cols-2 gap-3">
          <button class="h-11 rounded-2xl bg-white border border-gray-300 text-gray-900 text-sm font-semibold
                   disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99]"
            :disabled="loading || busy || resetting || finishing || !selectedRoom" @click="resetRoom">
            {{ resetting ? "Resetting..." : "Reset" }}
          </button>

          <button class="h-11 rounded-2xl bg-blue-600 text-white text-sm font-semibold
                   disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99]"
            :disabled="loading || busy || resetting || finishing || !selectedRoom || scannedCount === 0" @click="finishRoom">
            {{ finishing ? "Finishing..." : "Finish" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
