<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStockCount } from "@/composables/useStockCount";
import { useStockCountStore } from "@/stores/stockcount_store";
import Phase2BoxCount from "@/components/Phase2BoxCount.vue";
import { useConfirm } from "primevue/useconfirm";

// PrimeVue
import Toast from "primevue/toast";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const route = useRoute();
const router = useRouter();
const api = useStockCount();
const store = useStockCountStore();

const reportId = computed(() => String(route.params.reportId ?? ""));
const roomId = computed(() => String(route.query.roomId ?? ""));

const loading = ref(false);
const err = ref<string | null>(null);
const resetBusy = ref(false);

// ======================================================
// ✅ BULLETPROOF FIX: reserve space for sticky footer on ALL mobiles
// - measures footer height accurately
// - responds to visualViewport changes (keyboard / address bar)
// - responds to footer content changes (ResizeObserver + watch)
// - uses CSS variables to avoid style collisions
// ======================================================
const vvBottom = ref(0);
const footerEl = ref<HTMLElement | null>(null);
const footerH = ref(0);

const ongoingBoxId = ref("");

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

function measureFooter() {
  footerH.value = footerEl.value?.getBoundingClientRect().height ?? 0;
}

let ro: ResizeObserver | null = null;
let raf = 0;

function scheduleMeasure() {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    updateVVBottom();
    measureFooter();
  });
}

const rootStyle = computed(() => ({
  "--footer-h": `${footerH.value}px`,
  "--vv-bottom": `${vvBottom.value}px`,
} as Record<string, string>));

const mainStyle = computed(() => ({
  paddingBottom: `calc(var(--footer-h) + var(--vv-bottom) + env(safe-area-inset-bottom, 0px))`,
}));

const footerStyle = computed(() => ({
  paddingBottom: `calc(var(--vv-bottom) + env(safe-area-inset-bottom, 0px))`,
}));

onMounted(async () => {
  scheduleMeasure();

  window.addEventListener("resize", scheduleMeasure);
  window.addEventListener("orientationchange", scheduleMeasure);
  window.addEventListener("pageshow", scheduleMeasure);

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", scheduleMeasure);
    window.visualViewport.addEventListener("scroll", scheduleMeasure);
  }

  if (typeof ResizeObserver !== "undefined") {
    ro = new ResizeObserver(() => scheduleMeasure());
    if (footerEl.value) ro.observe(footerEl.value);
  }

  // Fonts can change layout after first render on some devices
  // @ts-ignore
  if (document.fonts?.ready) {
    // @ts-ignore
    document.fonts.ready.then(() => scheduleMeasure());
  }

  await nextTick();
  scheduleMeasure();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", scheduleMeasure);
  window.removeEventListener("orientationchange", scheduleMeasure);
  window.removeEventListener("pageshow", scheduleMeasure);

  if (window.visualViewport) {
    window.visualViewport.removeEventListener("resize", scheduleMeasure);
    window.visualViewport.removeEventListener("scroll", scheduleMeasure);
  }

  if (ro) {
    ro.disconnect();
    ro = null;
  }
  cancelAnimationFrame(raf);
});

// re-measure when footer content can change
watch(
  () => store.selectedRoom,
  async () => {
    await nextTick();
    scheduleMeasure();
  },
  { deep: true }
);

watch(
  () => loading.value,
  async () => {
    await nextTick();
    scheduleMeasure();
  }
);
// ======================================================

// Remaining boxes dialog
const remainingDialogVisible = ref(false);
const remainingDialogTitle = ref("Boxes Remaining");
const remainingDialogMsg = ref("");
const remainingBoxes = ref<string[]>([]);
const remainingBusy = ref(false);

function getNum(v: any) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function normalizeRooms(raw: any[]) {
  return (raw || []).map((r: any) => ({
    roomId: String(r.roomId ?? r.id ?? r.room_id ?? ""),
    name: r.name ?? r.roomName ?? r.room_name ?? "Room",
    phase2Status: r.phase2Status ?? r.phase2_status ?? r.status ?? "Pending",
    unlockedTotal: getNum(r.unlockedTotal ?? r.unlocked_total),
    lockedTotal: getNum(r.lockedTotal ?? r.locked_total),
    unlockedCompleted: getNum(r.unlockedCompleted ?? r.unlocked_completed),
    enabled: r.enabled ?? true,
  }));
}

function isCompleteRoom(r: any) {
  const status = String(r?.phase2Status || "").toLowerCase();
  if (r?.enabled === false) return true;
  return status.includes("complete");
}

function allRoomsCompleted(rooms: any[]) {
  const list = rooms || [];
  if (!list.length) return false;
  return list.every(isCompleteRoom);
}

function extractPendingBoxes(d: any): string[] {
  const list =
    d?.meta?.pendingBoxes ??
    d?.pendingBoxes ??
    d?.pending_boxes ??
    d?.meta?.pending_boxes ??
    d?.meta?.pendingBoxIds ??
    d?.pendingBoxIds ??
    [];
  return Array.isArray(list) ? list.map(String) : [];
}

async function init() {
  loading.value = true;
  err.value = null;
  try {
    const rep = await api.getReport(reportId.value);
    store.setReport(rep);

    const resp = await api.phase2Rooms(reportId.value);
    const rooms = normalizeRooms(resp?.rooms || resp || []);
    store.setRooms(rooms);

    const room = rooms.find((x: any) => String(x.roomId) === roomId.value);
    store.selectRoom(room || null);
  } catch (e: any) {
    err.value =
      e?.response?.data?.error ||
      e?.response?.data?.message ||
      e?.message ||
      "Failed to load";
  } finally {
    loading.value = false;
    await nextTick();
    scheduleMeasure();
  }
}

async function refresh() {
  const resp = await api.phase2Rooms(reportId.value);
  const rooms = normalizeRooms(resp?.rooms || resp || []);
  store.setRooms(rooms);

  const room = rooms.find((x: any) => String(x.roomId) === roomId.value);
  store.selectRoom(room || null);

  await maybeAutoCompleteRoom(room, rooms);

  await nextTick();
  scheduleMeasure();
}

async function maybeAutoCompleteRoom(room: any, roomsFromFetch?: any[]) {
  if (!room?.roomId) return;
  if (room.enabled === false) return;

  const status = String(room.phase2Status || "").toLowerCase();
  if (status.includes("complete")) return;

  const remaining = Math.max(
    getNum(room.unlockedTotal) - getNum(room.unlockedCompleted),
    0
  );
  if (remaining !== 0) return;

  try {
    await api.phase2CompleteRoom(reportId.value, { roomId: room.roomId });

    toast.add({
      severity: "success",
      summary: "Completed",
      detail: "Stockroom completed ✅",
      life: 2000,
    });

    const resp2 = await api.phase2Rooms(reportId.value);
    const rooms2 = normalizeRooms(resp2?.rooms || resp2 || []);
    store.setRooms(rooms2);

    if (allRoomsCompleted(rooms2)) {
      await router.push(`/stock-count/${reportId.value}/summary`);
    } else {
      await router.push(`/stock-count/${reportId.value}/phase2`);
    }
  } catch {
    // ignore
  }
}

const phase2Ref = ref<InstanceType<typeof Phase2BoxCount> | null>(null);

const canCompleteBox = computed(() => {
  return !!ongoingBoxId.value && !inputsDisabled.value;
  // inputsDisabled already includes loading/resetBusy/completed/remaining==0
});


const footerStats = computed(() => {
  const r: any = store.selectedRoom;
  if (!r) return null;

  const toCount = getNum(r.unlockedTotal);
  const done = getNum(r.unlockedCompleted);
  const remaining = Math.max(toCount - done, 0);

  return {
    toCount,
    done,
    remaining,
    enabled: r.enabled !== false,
    name: r.name,
    phase2Status: String(r.phase2Status || ""),
    roomId: String(r.roomId || ""),
  };
});

const inputsDisabled = computed(() => {
  const s = footerStats.value;
  if (!s) return true;

  const completed = s.phase2Status.toLowerCase().includes("complete");
  return (
    !s.enabled ||
    completed ||
    loading.value ||
    resetBusy.value ||
    s.remaining === 0
  );
});

async function openRemainingBoxes() {
  const s = footerStats.value;
  if (!s?.roomId) return;

  remainingDialogVisible.value = true;
  remainingDialogTitle.value = "Boxes Remaining";
  remainingDialogMsg.value = "Loading…";
  remainingBoxes.value = [];
  remainingBusy.value = true;

  try {
    await api.phase2CompleteRoom(reportId.value, { roomId: s.roomId });

    remainingDialogMsg.value = "No remaining boxes 🎉";
    remainingBoxes.value = [];

    await refresh();
  } catch (e: any) {
    const d = e?.response?.data || {};
    const msgText = String(d?.message || d?.error || e?.message || "");

    const list = extractPendingBoxes(d);

    if (list.length > 0) {
      remainingDialogMsg.value = "Please complete these boxes:";
      remainingBoxes.value = list;
    } else if (msgText.toLowerCase().includes("5+")) {
      remainingDialogMsg.value =
        "5+ boxes are still pending. Please complete remaining boxes.";
      remainingBoxes.value = [];
    } else {
      remainingDialogMsg.value = msgText || "Unable to load remaining boxes.";
      remainingBoxes.value = [];
    }
  } finally {
    remainingBusy.value = false;
    await nextTick();
    scheduleMeasure();
  }
}

function confirmResetOngoingBox() {
  const s = footerStats.value;
  const boxId = ongoingBoxId.value?.trim();

  if (!s?.roomId) return;

  if (!boxId) {
    toast.add({
      severity: "warn",
      summary: "No active box",
      detail: "Scan a box and start counting first.",
      life: 2500,
    });
    return;
  }

  confirm.require({
    header: "Reset ongoing box?",
    message: `Reset box "${boxId}"? This will clear its Phase 2 count lines.`,
    icon: "pi pi-exclamation-triangle",
    acceptLabel: "Reset",
    rejectLabel: "Cancel",
    acceptClass: "p-button-danger",
    rejectClass: "p-button-secondary",
    accept: async () => {
      resetBusy.value = true;
      err.value = null;

      try {
        await api.phase2ResetBox(reportId.value, { boxId });

        toast.add({
          severity: "success",
          summary: "Reset",
          detail: "Ongoing box reset.",
          life: 2000,
        });

        ongoingBoxId.value = ""; // clear current
        await refresh();
      } catch (e: any) {
        const m =
          e?.response?.data?.error ||
          e?.response?.data?.message ||
          e?.message ||
          "Reset failed";

        err.value = m;
        toast.add({ severity: "error", summary: "Error", detail: m, life: 3000 });
      } finally {
        resetBusy.value = false;
        await nextTick();
        scheduleMeasure();
      }
    },
  });
}


onMounted(init);
</script>

<template>
  <div class="h-[100vh] h-[100dvh] overflow-hidden bg-gradient-to-b from-gray-50 to-white text-gray-900 flex flex-col"
    :style="rootStyle">

    <Toast />

    <!-- Header -->
    <header class="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
      <div class="mx-auto w-full max-w-md px-4 pt-4 pb-3">
        <div class="flex items-start justify-between gap-3">
          <NuxtLink :to="`/stock-count/${reportId}/phase2`"
            class="inline-flex items-center gap-2 text-sm font-semibold text-gray-800">
            <span class="h-9 w-9 grid place-items-center rounded-2xl border border-gray-200 bg-white shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
            Rooms
          </NuxtLink>

          <div class="min-w-0 text-right">
            <div class="text-xs p-2 text-gray-500 truncate">
              {{ store.currentReport?.name || "Stock Count" }}
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main -->
    <main class="flex-1 min-h-0 overflow-y-auto mx-auto w-full max-w-md px-4 pt-4 pb-4" :style="mainStyle">

      <div v-if="loading" class="space-y-3">
        <div class="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
          <div class="h-4 w-40 rounded-lg bg-gray-100 animate-pulse"></div>
          <div class="mt-3 h-3 w-64 rounded-lg bg-gray-100 animate-pulse"></div>
          <div class="mt-4 h-10 w-full rounded-2xl bg-gray-100 animate-pulse"></div>
        </div>
      </div>

      <div v-else-if="err" class="rounded-3xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 shadow-sm">
        <div class="font-semibold">Something went wrong</div>
        <div class="mt-1">{{ err }}</div>

        <button class="mt-3 h-11 px-5 rounded-2xl bg-red-600 text-white font-semibold active:scale-[0.98]"
          @click="refresh">
          Try again
        </button>
      </div>

      <div v-else-if="!store.selectedRoom"
        class="rounded-3xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">
        Room not found.
      </div>

      <div v-else class="mt-1">
        <Phase2BoxCount ref="phase2Ref" :reportId="reportId" :room="store.selectedRoom" :disabled="inputsDisabled"
          @refresh="refresh" @ongoingBox="(id: string) => (ongoingBoxId = id)" />


      </div>
    </main>

    <!-- Sticky footer -->
    <footer
  ref="footerEl"
  class="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur border-t border-gray-200"
  :style="footerStyle"
>
  <div class="mx-auto w-full max-w-md px-4 py-3">
    <div class="rounded-3xl border border-gray-200 bg-white shadow-sm p-3">
      <div v-if="footerStats" class="space-y-3">
        <div class="flex items-center justify-between gap-3">
          <div class="min-w-0">
            <div class="text-sm font-semibold truncate">{{ footerStats.name }}</div>
            <div class="text-xs text-gray-500">
              {{
                footerStats.enabled
                  ? footerStats.phase2Status.toLowerCase().includes("complete")
                    ? "Completed ✅"
                    : "Active"
                  : "Locked-only (auto completed)"
              }}
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 shrink-0">
            <!-- ✅ Reset (white bg, red border, red text) -->
            <Button
              label="Reset"
              :loading="resetBusy"
              :disabled="!footerStats?.enabled || !ongoingBoxId || inputsDisabled"
              class="!rounded-2xl !bg-white !border !border-red-500 !text-red-600 hover:!bg-red-50"
              @click="confirmResetOngoingBox"
            />
            
            <!-- ✅ Complete Box (green) -->
            <Button
              label="Complete Box"
              :disabled="inputsDisabled || !ongoingBoxId"
              class="!rounded-2xl !bg-green-600 !border-green-600 !text-white hover:!bg-green-700"
              @click="phase2Ref?.completeCurrentBox()"
            />

            
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2 text-center">
          <div class="p-2 rounded-2xl bg-gray-50 border border-gray-200">
            <div class="text-[10px] uppercase tracking-wide text-gray-500">Total</div>
            <div class="text-lg font-bold tabular-nums">{{ footerStats.toCount }}</div>
          </div>

          <button
            type="button"
            class="p-2 rounded-2xl bg-gray-50 border border-gray-200 active:scale-[0.99]"
            @click="openRemainingBoxes"
          >
            <div class="text-[10px] uppercase tracking-wide text-gray-500">To count</div>
            <div class="text-lg font-bold tabular-nums">{{ footerStats.remaining }}</div>
          </button>

          <div class="p-2 rounded-2xl bg-gray-50 border border-gray-200">
            <div class="text-[10px] uppercase tracking-wide text-gray-500">Done</div>
            <div class="text-lg font-bold tabular-nums">{{ footerStats.done }}</div>
          </div>
        </div>
      </div>

      <div v-else class="text-sm text-gray-600">Loading totals…</div>
    </div>
  </div>
</footer>


    <!-- Remaining boxes dialog -->
    <Dialog v-model:visible="remainingDialogVisible" modal header="Boxes Remaining"
      :style="{ width: 'min(92vw, 420px)' }" :breakpoints="{ '640px': '92vw' }">
      <div class="space-y-3">
        <div class="text-sm text-gray-700">
          {{ remainingDialogMsg }}
        </div>

        <div v-if="remainingBusy" class="text-sm text-gray-500">Loading…</div>

        <ul v-else-if="remainingBoxes.length" class="space-y-2">
          <li v-for="b in remainingBoxes" :key="b"
            class="px-3 py-2 rounded-2xl bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-900">
            {{ b }}
          </li>
        </ul>
      </div>

      <template #footer>
        <Button label="OK" class="!rounded-2xl" @click="remainingDialogVisible = false" />
      </template>
    </Dialog>
  </div>
</template>
