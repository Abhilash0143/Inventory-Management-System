<script setup lang="ts">
import { computed, ref } from "vue";
import { useStockCount } from "@/composables/useStockCount";

// PrimeVue
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";

import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps<{ reportId: string; summary: any }>();
const emit = defineEmits(["refresh"]);

const api = useStockCount();
const toast = useToast();
const confirm = useConfirm();

const err = ref<string | null>(null);
const busyConfirm = ref(false);

// which room is expanded (for showing lines)
const expandedRoomId = ref<string | null>(null);

const report = computed(() => props.summary?.report || {});
const roomsRaw = computed<any[]>(() => props.summary?.rooms || []);
const linesRaw = computed<any[]>(() => props.summary?.lines || []);
const lockedRaw = computed<any[]>(() => props.summary?.lockedBoxes || []);

// -------------------------
// Reset dialog state
// -------------------------
const resetDialogVisible = ref(false);
const resetBusy = ref(false);
const selectedResetRoomId = ref<string | null>(null);

const expandedLockedBoxes = computed(() => {
  const rid = expandedRoomId.value;
  if (!rid) return [];

  return lockedRaw.value
    .filter((x: any) => String(x.room_id ?? x.roomId ?? "") === String(rid))
    .map((x: any) => String(x.box_id ?? x.boxId ?? ""))
    .filter(Boolean);
});


function toastSuccess(detail: string) {
  toast.add({ severity: "success", summary: "Success", detail, life: 2500 });
}
function toastError(detail: string) {
  toast.add({ severity: "error", summary: "Error", detail, life: 3500 });
}

function getNum(v: any) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function isOnlyLockedRoom(r: any) {
  const unlockedTotal = getNum(r?.unlockedTotal ?? r?.unlocked_total ?? r?.unlockedCount ?? r?.unlocked_count);
  const lockedTotal = getNum(r?.lockedTotal ?? r?.locked_total ?? r?.lockedCount ?? r?.locked_count);

  if (r?.enabled === false) return true;
  return unlockedTotal === 0 && lockedTotal > 0;
}

function normalizedStatus(r: any) {
  const raw = String(r?.phase2Status ?? r?.phase2_status ?? r?.status ?? "Pending");
  if (isOnlyLockedRoom(r)) return "Completed";
  return raw;
}

function statusBadgeClass(status: string) {
  const s = String(status || "").toLowerCase();
  if (s.includes("complete") || s.includes("done")) return "bg-green-50 text-green-700 border-green-200";
  if (s.includes("progress") || s.includes("active")) return "bg-orange-50 text-orange-700 border-orange-200";
  if (s.includes("notstarted") || s.includes("pending")) return "bg-gray-50 text-gray-700 border-gray-200";
  return "bg-gray-50 text-gray-700 border-gray-200";
}

const rooms = computed(() => {
  return roomsRaw.value.map((r: any) => {
    const unlockedScanned = getNum(
      r.unlockedTotal ??
      r.unlocked_total ??
      r.unlockedCount ??
      r.unlocked_count ??
      r.unlockedBoxes ??
      r.unlocked_boxes ??
      r.boxesUnlocked ??
      r.boxes_unlocked
    );

    const lockedScanned = getNum(
      r.lockedTotal ??
      r.locked_total ??
      r.lockedCount ??
      r.locked_count ??
      r.lockedBoxes ??
      r.locked_boxes ??
      r.boxesLocked ??
      r.boxes_locked
    );

    return {
      roomId: String(r.roomId ?? r.id ?? r.room_id ?? ""),
      name: r.name ?? r.roomName ?? r.room_name ?? "Room",
      phase2Status: normalizedStatus(r),
      lockedScanned,
      unlockedScanned,
      totalScanned: lockedScanned + unlockedScanned,
    };
  });
});

const totalRooms = computed(() => rooms.value.length);
const completedRooms = computed(() =>
  rooms.value.filter((r: any) => String(r?.phase2Status || "").toLowerCase().includes("complete")).length
);

// Dropdown options
const resetRoomOptions = computed(() =>
  rooms.value
    .filter((r) => !!r.roomId)
    .map((r) => ({
      label: r.name,
      value: r.roomId,
      // extra info if you want to show later
      meta: r,
    }))
);

// Lines grouped by expanded room
const expandedLines = computed(() => {
  const rid = expandedRoomId.value;
  if (!rid) return [];
  return (linesRaw.value || []).filter(
    (l: any) => String(l?.room_id ?? l?.roomId ?? l?.room_id_fk ?? "") === String(rid)
  );
});

const expandedBoxTotals = computed(() => {
  const rid = expandedRoomId.value;
  if (!rid) return [];

  // only lines for expanded room
  const roomLines = (linesRaw.value || []).filter(
    (l: any) => String(l?.room_id ?? l?.roomId ?? l?.room_id_fk ?? "") === String(rid)
  );

  // group by box_id and sum qty
  const map = new Map<string, number>();

  for (const l of roomLines) {
    const box = String(l?.box_id ?? l?.boxId ?? "").trim();
    if (!box) continue;

    const q = Number(l?.qty ?? l?.quantity ?? 0);
    map.set(box, (map.get(box) || 0) + (Number.isFinite(q) ? q : 0));
  }

  // convert to array
  return Array.from(map.entries())
    .map(([boxId, totalQty]) => ({ boxId, totalQty }))
    .sort((a, b) => a.boxId.localeCompare(b.boxId));
});

function toggleRoom(roomId: string) {
  expandedRoomId.value = expandedRoomId.value === roomId ? null : roomId;
}

// -------------------------
// Confirm report -> dashboard
// -------------------------
function confirmReport() {
  err.value = null;

  confirm.require({
    header: "Confirm report?",
    message: `Confirm "${report.value?.name || "Stock Count"}"?`,
    icon: "pi pi-check-circle",
    acceptLabel: "Confirm",
    rejectLabel: "Cancel",
    acceptClass: "p-button-success",
    rejectClass: "p-button-secondary",
    accept: async () => {
      busyConfirm.value = true;
      try {
        const res = await api.confirmReport(props.reportId);
        toastSuccess(res?.message || "Report confirmed");
        emit("refresh");
        await router.push("/stock-count");
      } catch (e: any) {
        const m =
          e?.response?.data?.message ||
          e?.response?.data?.error ||
          e?.message ||
          "Confirm failed";
        err.value = m;
        toastError(m);
      } finally {
        busyConfirm.value = false;
      }
    },
  });
}

// -------------------------
// Reset dialog flow
// -------------------------
function openResetDialog() {
  err.value = null;
  // default selection: expanded room if any, else first room
  selectedResetRoomId.value =
    expandedRoomId.value ||
    resetRoomOptions.value?.[0]?.value ||
    null;

  resetDialogVisible.value = true;
}

async function doResetFromDialog() {
  err.value = null;

  const rid = String(selectedResetRoomId.value || "");
  if (!rid) {
    const m = "Please select a stockroom.";
    err.value = m;
    toastError(m);
    return;
  }

  resetBusy.value = true;
  try {
    const res = await api.summaryResetRoom(props.reportId, { roomId: rid });
    toastSuccess(res?.message || "Room reset");
    resetDialogVisible.value = false;

    emit("refresh");

    // ✅ go back to Phase 2 rooms page
    await router.push(`/stock-count/${props.reportId}/phase2`);
  } catch (e: any) {
    const m =
      e?.response?.data?.message ||
      e?.response?.data?.error ||
      e?.message ||
      "Reset failed";
    err.value = m;
    toastError(m);
  } finally {
    resetBusy.value = false;
  }
}
</script>

<template>
  <div class="min-h-[100dvh] bg-gray-50 text-black">
    <div class="max-w-md mx-auto px-4 py-4 pb-28 space-y-4">
      <!-- Header -->
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <div class="text-lg font-semibold text-gray-900">Summary</div>
          <div class="text-xs text-gray-500 truncate">
            {{ report?.name || "Stock Count" }} • Report ID: {{ reportId }}
          </div>
        </div>
      </div>

      <!-- Top stats -->
      <div class="grid grid-cols-2 gap-2">
        <div class="p-3 rounded-2xl bg-white border border-gray-200 shadow-sm">
          <div class="text-[11px] uppercase tracking-wide text-gray-500">Stockrooms</div>
          <div class="text-xl font-bold tabular-nums text-gray-900">{{ totalRooms }}</div>
        </div>

        <div class="p-3 rounded-2xl bg-white border border-gray-200 shadow-sm">
          <div class="text-[11px] uppercase tracking-wide text-gray-500">Completed</div>
          <div class="text-xl font-bold tabular-nums text-gray-900">{{ completedRooms }}</div>
        </div>
      </div>

      <!-- Stockrooms list -->
      <div class="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
          <div class="font-semibold text-gray-900">Stockrooms</div>
          <div class="text-xs text-gray-500">
            Tap a stockroom to view box lines
          </div>
        </div>

        <div v-if="rooms.length" class="divide-y divide-gray-100">
          <div v-for="r in rooms" :key="r.roomId">
            <button class="w-full px-4 py-3 flex items-center justify-between gap-3 text-left hover:bg-gray-50"
              @click="toggleRoom(r.roomId)">
              <div class="min-w-0">
                <div class="text-sm font-semibold text-gray-900 truncate">
                  {{ r.name }}
                </div>

                <div class="mt-1 flex flex-wrap items-center gap-2">
                  <span class="inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-semibold"
                    :class="statusBadgeClass(r.phase2Status)">
                    {{ r.phase2Status }}
                  </span>

                  <span class="text-xs text-gray-500">
                    Locked:
                    <span class="font-semibold text-gray-700">{{ r.lockedScanned }}</span>
                    • Unlocked:
                    <span class="font-semibold text-gray-700">{{ r.unlockedScanned }}</span>
                    • Total:
                    <span class="font-semibold text-gray-700">{{ r.totalScanned }}</span>
                  </span>
                </div>
              </div>

              <div class="shrink-0 text-gray-500">
                <svg v-if="expandedRoomId === r.roomId" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6 15l6-6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
            </button>

            <!-- Expanded lines -->
            <!-- Expanded -->
            <div v-if="expandedRoomId === r.roomId" class="px-4 pb-4">
              <div class="mt-2 rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden">
                <div class="px-3 py-2 border-b border-gray-200 flex items-center justify-between">
                  <div class="text-xs font-semibold text-gray-700">Stockroom details</div>

                </div>

                <!-- ✅ Scroll container (fixed height) -->
                <div class="max-h-[320px] overflow-auto">
                  <!-- ✅ SKU Lines Table -->
                  <!-- ✅ Box totals (Box ID + Total Qty) -->
                  <div class="px-3 pt-3">
                    <div v-if="expandedBoxTotals.length"
                      class="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                      <table class="w-full text-sm">
                        <thead class="bg-gray-50 sticky top-0 z-10">
                          <tr class="text-left text-xs text-gray-500">
                            <th class="px-3 py-2 font-semibold">Box</th>
                            <th class="px-3 py-2 font-semibold text-right">Total Qty</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr v-for="row in expandedBoxTotals" :key="row.boxId" class="bg-white">
                            <td class="px-3 py-2 font-semibold text-gray-900">
                              {{ row.boxId }}
                            </td>
                            <td class="px-3 py-2 text-right font-semibold text-gray-900 tabular-nums">
                              {{ row.totalQty }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div v-else class="text-sm text-gray-600">
                      No unlocked box lines in this stockroom.
                    </div>
                  </div>


                  <!-- ✅ Locked Boxes (ALWAYS visible even if no lines) -->
                  <div class="px-3 pb-3 mt-4">
                    <div class="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                      <div class="px-3 py-2 border-b border-gray-200 flex items-center justify-between">
                        <div class="text-xs font-semibold text-gray-700">Locked boxes</div>
                        <div class="text-xs text-gray-500">Count: {{ expandedLockedBoxes.length }}</div>
                      </div>

                      <div v-if="expandedLockedBoxes.length" class="p-3 flex flex-wrap gap-2">
                        <span v-for="b in expandedLockedBoxes" :key="b" class="px-3 py-1 rounded-full bg-gray-50 border border-gray-200
                     text-xs font-semibold text-gray-800">
                          {{ b }}
                        </span>
                      </div>

                      <div v-else class="px-3 py-3 text-sm text-gray-600">
                        No locked boxes for this stockroom.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="err" class="mt-3 text-sm text-red-600 font-medium">
                {{ err }}
              </div>
            </div>

          </div>
        </div>

        <div v-else class="px-4 py-6 text-sm text-gray-600 text-center">
          No stockrooms in summary.
        </div>
      </div>
    </div>

    <!-- Bottom action bar -->
    <div class="fixed inset-x-0 bottom-0 z-40 bg-white border-t border-gray-200">
      <div class="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
        <!-- Confirm full width -->
        <button class="flex-1 h-12 rounded-2xl bg-gray-900 text-white text-sm font-semibold
                 disabled:opacity-60 disabled:cursor-not-allowed" :disabled="busyConfirm" @click="confirmReport">
          {{ busyConfirm ? "Confirming..." : "Confirm Report" }}
        </button>

        <!-- Reset opens dialog -->
        <button class="h-12 px-4 rounded-2xl bg-white border border-gray-300 text-gray-900
                 text-sm font-semibold shadow-sm
                 disabled:opacity-60 disabled:cursor-not-allowed" :disabled="resetBusy" @click="openResetDialog"
          title="Reset a stockroom">
          {{ resetBusy ? "…" : "Reset" }}
        </button>
      </div>
    </div>

    <!-- ✅ Reset dialog -->
    <Dialog v-model:visible="resetDialogVisible" modal header="Reset stockroom" :style="{ width: 'min(92vw, 420px)' }"
      :breakpoints="{ '640px': '92vw' }">
      <div class="space-y-3">
        <div class="text-sm text-gray-700">
          Select a stockroom to reset Phase 2. This will reopen Phase 2 for that room.
        </div>

        <Dropdown v-model="selectedResetRoomId" :options="resetRoomOptions" optionLabel="label" optionValue="value"
          placeholder="Select stockroom" class="w-full" :disabled="resetBusy" />

        <div v-if="err" class="text-sm text-red-600 font-medium">
          {{ err }}
        </div>
      </div>

      <template #footer>
        <div class="flex items-center justify-end gap-2">
          <Button label="Cancel" class="p-button-text" :disabled="resetBusy" @click="resetDialogVisible = false" />
          <Button label="Reset" class="p-button-danger" :loading="resetBusy" @click="doResetFromDialog" />
        </div>
      </template>
    </Dialog>
  </div>
</template>
