<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStockCount } from "@/composables/useStockCount";
import { useStockCountStore } from "@/stores/stockcount_store";

const route = useRoute();
const router = useRouter();

const reportId = computed(() => String(route.params.reportId ?? ""));
const api = useStockCount();
const store = useStockCountStore();

const loading = ref(false);
const err = ref<string | null>(null);
const rooms = ref<any[]>([]);
const goLoading = ref<string | null>(null);

function statusBadgeClass(status: string) {
  const s = String(status || "").toLowerCase();
  if (s.includes("complete") || s.includes("done"))
    return "bg-green-50 text-green-700 ring-green-200";
  if (s.includes("progress") || s.includes("active"))
    return "bg-amber-50 text-amber-800 ring-amber-200";
  return "bg-gray-50 text-gray-700 ring-gray-200";
}

function isRoomCompleted(r: any) {
  const s = String(r?.phase2Status || "").toLowerCase();
  return s.includes("complete") || s.includes("done");
}

function maybeGoSummary(list: any[]) {
  if (!list?.length) return;
  if (list.every(isRoomCompleted)) {
    router.replace(`/stock-count/${reportId.value}/summary`);
  }
}

function getNum(v: any) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function normalizeRooms(raw: any[]) {
  return (raw || []).map((r: any) => {
    const roomId = String(r.roomId ?? r.id ?? r.room_id ?? "");
    const name = r.name ?? r.roomName ?? r.room_name ?? "Room";

    const unlockedTotal = getNum(
      r.unlockedTotal ?? r.unlocked_total ?? r.unlockedCount ?? r.unlocked_count
    );
    const lockedTotal = getNum(
      r.lockedTotal ?? r.locked_total ?? r.lockedCount ?? r.locked_count
    );

    const unlockedCompleted = getNum(
      r.unlockedCompleted ?? r.unlocked_completed ?? r.unlockedDone ?? r.unlocked_done
    );

    const onlyLockedFlag = Boolean(r.onlyLocked ?? r.only_locked ?? r.disabled ?? r.isDisabled);
    const onlyLocked = onlyLockedFlag || (unlockedTotal === 0 && lockedTotal > 0);

    const phase2StatusRaw = String(r.phase2Status ?? r.phase2_status ?? r.status ?? "Pending");

    // ✅ If not completed but some work is done → In Progress
    const lower = phase2StatusRaw.toLowerCase();
    const completed = lower.includes("complete") || lower.includes("done");

    const phase2Status = onlyLocked
      ? "Completed"
      : completed
        ? phase2StatusRaw
        : unlockedCompleted > 0
          ? "In Progress"
          : "Pending";

    return { roomId, name, phase2Status, onlyLocked, unlockedTotal, lockedTotal, unlockedCompleted };
  });
}


async function init() {
  loading.value = true;
  err.value = null;
  try {
    const rep = await api.getReport(reportId.value);
    store.setReport(rep);

    const resp = await api.phase2Rooms(reportId.value);
    const list = normalizeRooms(resp?.rooms || resp || []);
    rooms.value = list;
    store.setRooms(list);

    maybeGoSummary(list);
  } catch (e: any) {
    err.value = e?.response?.data?.error || e?.response?.data?.message || e?.message || "Failed to load";
  } finally {
    loading.value = false;
  }
}

async function refresh() {
  err.value = null;
  try {
    const resp = await api.phase2Rooms(reportId.value);
    const list = normalizeRooms(resp?.rooms || resp || []);
    rooms.value = list;
    store.setRooms(list);
    maybeGoSummary(list);
  } catch (e: any) {
    err.value = e?.response?.data?.error || e?.response?.data?.message || e?.message || "Refresh failed";
  }
}

async function openRoom(r: any) {
  if (r?.onlyLocked) return;
  const id = String(r?.roomId ?? "");
  if (!id) return;

  goLoading.value = id;
  try {
    store.selectRoom(r);
    await router.push(`/stock-count/${reportId.value}/phase2/box-count?roomId=${encodeURIComponent(id)}`);
  } finally {
    goLoading.value = null;
  }
}

onMounted(init);
</script>

<template>
  <div class="min-h-[100dvh] bg-gradient-to-b from-gray-50 to-white text-gray-900">
    <div class="mx-auto w-full max-w-md">
      <!-- Sticky Header (mobile-first) -->
      <header class="sticky top-0 z-20 backdrop-blur bg-white/80 border-b border-gray-200">
        <div class="px-4 pt-4 pb-3">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <div class="h-9 w-9 rounded-2xl bg-gray-900 text-white grid place-items-center shadow-sm">
                  <!-- box icon -->
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 8.5l-9 5-9-5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M3 8.5V16a2 2 0 0 0 1 1.73l7 3.89a2 2 0 0 0 2 0l7-3.89A2 2 0 0 0 21 16V8.5"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 3l9 5-9 5-9-5 9-5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>

                <div class="min-w-0">
                  <div class="text-base font-semibold leading-tight">Phase 2</div>
                  <div class="text-xs text-gray-500 truncate">
                    {{ store.currentReport?.name || "Stock Count" }}
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2">

              <NuxtLink to="/stock-count"
                class="h-10 px-3 inline-flex items-center rounded-2xl bg-white border border-gray-200 shadow-sm text-sm font-semibold text-gray-800 active:scale-[0.98]">
                Back
              </NuxtLink>
            </div>
          </div>

          <!-- Sub info strip -->
          <div class="mt-3 flex items-center justify-between text-xs text-gray-600">
            <div class="inline-flex items-center gap-2">
            </div>
          </div>
        </div>
      </header>

      <main class="px-4 pt-4 pb-10">
        <!-- Loading skeleton -->
        <div v-if="loading" class="space-y-3">
          <div v-for="i in 4" :key="i" class="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
            <div class="flex items-center justify-between gap-3">
              <div class="min-w-0 flex-1">
                <div class="h-4 w-40 bg-gray-100 rounded-lg animate-pulse"></div>
                <div class="mt-2 h-3 w-28 bg-gray-100 rounded-lg animate-pulse"></div>
                <div class="mt-3 h-3 w-56 bg-gray-100 rounded-lg animate-pulse"></div>
              </div>
              <div class="h-10 w-24 bg-gray-100 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </div>

        <!-- Error -->
        <div v-else-if="err" class="rounded-3xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 shadow-sm">
          <div class="flex items-start gap-3">
            <div class="h-9 w-9 rounded-2xl bg-red-600 text-white grid place-items-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 9v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <path d="M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <path d="M10.3 3.6h3.4a2 2 0 0 1 1.7 1l7 12.1a2 2 0 0 1-1.7 3H3a2 2 0 0 1-1.7-3l7-12.1a2 2 0 0 1 1.7-1Z"
                  stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="min-w-0">
              <div class="font-semibold">Something went wrong</div>
              <div class="mt-1 text-red-700/90">{{ err }}</div>

              <button class="mt-3 h-10 px-4 rounded-2xl bg-red-600 text-white font-semibold active:scale-[0.98]"
                @click="refresh">
                Try again
              </button>
            </div>
          </div>
        </div>

        <!-- Rooms -->
        <div v-else class="space-y-3">
          <div v-for="r in rooms" :key="r.roomId" class="rounded-3xl border bg-white p-4 shadow-sm"
            :class="r.onlyLocked ? 'border-gray-200 opacity-70' : 'border-gray-200'">
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0 flex-1">
                <div class="flex items-start justify-between gap-2">
                  <div class="min-w-0">
                    <div class="text-sm font-semibold truncate">{{ r.name }}</div>

                    <div class="mt-2 flex flex-wrap items-center gap-2">
                      <span
                        class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ring-1 ring-inset"
                        :class="statusBadgeClass(r.phase2Status)">
                        {{ r.phase2Status }}
                      </span>

                      <span v-if="r.onlyLocked" class="text-xs text-gray-500">
                        Locked only
                      </span>
                    </div>
                  </div>
                </div>

                <!-- counts row -->
                <div class="mt-3 flex items-center gap-2 text-xs text-gray-600 tabular-nums">
                  <span class="inline-flex items-center gap-1.5 px-2 py-1 rounded-xl bg-gray-50 border border-gray-200">
                    <span class="h-2 w-2 rounded-full bg-gray-900/70"></span>
                    Unlocked: <b class="font-semibold text-gray-900">{{ r.unlockedTotal }}</b>
                  </span>
                  <span class="inline-flex items-center gap-1.5 px-2 py-1 rounded-xl bg-gray-50 border border-gray-200">
                    <span class="h-2 w-2 rounded-full bg-gray-500"></span>
                    Locked: <b class="font-semibold text-gray-900">{{ r.lockedTotal }}</b>
                  </span>
                </div>
              </div>

              <button v-if="!isRoomCompleted(r)"
                class="shrink-0 h-11 px-4 rounded-2xl text-sm font-semibold shadow-sm active:scale-[0.98] disabled:opacity-60"
                @click="openRoom(r)" :disabled="goLoading === r.roomId || r.onlyLocked" :class="r.onlyLocked
                  ? 'bg-gray-100 text-gray-500 border border-gray-200'
                  : 'bg-gray-900 text-white'">
                <span v-if="goLoading === r.roomId" class="inline-flex items-center gap-2">
                  <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12a9 9 0 1 1-9-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  Loading
                </span>
                <span v-else>Continue</span>
              </button>

            </div>

            <!-- locked hint -->
            <div v-if="r.onlyLocked" class="mt-3 text-[11px] text-gray-500">
              This room has no unlocked boxes to count in Phase 2.
            </div>
          </div>

          <!-- Empty state -->
          <div v-if="!rooms.length" class="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <div class="mx-auto h-12 w-12 rounded-3xl bg-gray-900 text-white grid place-items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 8.5l-9 5-9-5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M3 8.5V16a2 2 0 0 0 1 1.73l7 3.89a2 2 0 0 0 2 0l7-3.89A2 2 0 0 0 21 16V8.5"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="mt-3 font-semibold">No rooms found</div>
            <div class="mt-1 text-sm text-gray-600">
              Pull refresh with the button above, or go back and try again.
            </div>
            <button class="mt-4 h-11 px-5 rounded-2xl bg-gray-900 text-white font-semibold active:scale-[0.98]"
              @click="refresh">
              Refresh
            </button>
          </div>
          <!-- ✅ Bottom Action Bar -->
          <div class="fixed inset-x-0 bottom-0 z-40 bg-white border-t border-gray-200">
            <div class="max-w-md mx-auto px-4 py-3 flex items-center gap-3">

              <!-- Reset Box Button -->
              <NuxtLink :to="`/stock-count/${reportId}/reset-box?returnTo=phase2`" class="flex-1 h-12 rounded-2xl bg-white border border-red-600 text-red-600 text-sm font-semibold
             flex items-center justify-center shadow-sm active:scale-[0.98]">
                Reset Box
              </NuxtLink>

            </div>
          </div>

        </div>
      </main>
    </div>
  </div>
</template>
