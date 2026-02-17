<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStockCount } from "@/composables/useStockCount";
import { useStockCountStore } from "@/stores/stockcount_store";
import { useAuthStore } from "@/stores/auth";

const route = useRoute();
const router = useRouter();

const reportId = computed(() => String(route.params.reportId ?? ""));
const api = useStockCount();

const store = useStockCountStore();
const auth = useAuthStore();

const myUserId = computed(() => String(auth.user?.id ?? ""));

const loading = ref(false);
const err = ref<string | null>(null);
const goLoading = ref<string | null>(null);

function dotClass(status?: string) {
  const s = String(status || "");
  if (s === "Completed") return "bg-green-500";
  if (s === "InProgress") return "bg-orange-500";
  return "bg-gray-400";
}

function statusLabel(status?: string) {
  const s = String(status || "");
  if (s === "Completed") return "Completed";
  if (s === "InProgress") return "In Progress";
  return "Not Started";
}

function normalizeRooms(rooms: any[]) {
  const me = myUserId.value;

  return (rooms || []).map((r: any) => {
    const roomId = String(r.roomId ?? r.id ?? r.room_id ?? "");
    const name = r.name ?? r.roomName ?? r.room_name ?? "Room";
    const phase1Status = r.phase1Status ?? r.phase1_status ?? "NotStarted";

    const owner =
      r.phase1_owner != null
        ? String(r.phase1_owner)
        : r.phase1Owner != null
          ? String(r.phase1Owner)
          : "";

    // ✅ locked if owned by someone else
    const locked = !!owner && !!me && owner !== me;

    return {
      roomId,
      name,
      phase1Status,
      phase1Owner: owner || null,
      locked,
    };
  });
}

function fallbackRooms() {
  return [
    { roomId: "1", name: "Stockroom 1", phase1Status: "NotStarted", locked: false },
    { roomId: "2", name: "Stockroom 2", phase1Status: "NotStarted", locked: false },
  ];
}

async function init() {
  loading.value = true;
  err.value = null;
  try {
    // ensure auth is loaded (if you don't already do this globally)
    if (!auth.user) auth.loadFromStorage();

    const rep = await api.getReport(reportId.value);
    store.setReport(rep);

    await refreshRooms();
  } catch (e: any) {
    const d = e?.response?.data;
    err.value = d?.message || d?.error || e?.message || "Failed to load rooms";
  } finally {
    loading.value = false;
  }
}

async function refreshRooms() {
  const res = await api.getRooms(reportId.value);
  const rawRooms = res?.rooms || res || [];
  const rooms = normalizeRooms(rawRooms);
  store.setRooms(rooms.length ? rooms : fallbackRooms());
}

// ✅ pre-claim BEFORE navigation so the lock error stays on this page
async function openRoom(room: any) {
  const rid = String(room?.roomId || "");
  if (!rid) return;

  // if locked by someone else, do nothing
  if (room?.locked) return;

  err.value = null;
  goLoading.value = rid;

  try {
    // claim/lock now
    await api.phase1Start(reportId.value, rid);

    store.selectRoom(room);

    await router.push({
      path: `/stock-count/${reportId.value}/phase1/scan`,
      query: { roomId: rid },
    });
  } catch (e: any) {
    const d = e?.response?.data;
    err.value = d?.message || d?.error || "Room locked by another user";
    await refreshRooms(); // refresh so it becomes disabled immediately
  } finally {
    goLoading.value = null;
  }
}

onMounted(init);
</script>

<template>
  <div class="p-4 space-y-4 text-black">
    <div class="flex items-center justify-between">
      <div>
        <div class="text-lg font-semibold">Phase 1</div>
        <div class="text-sm text-gray-600">Select a room to start scanning</div>
      </div>

      <div class="flex items-center gap-3">
        <NuxtLink to="/stock-count" class="underline text-sm">Back</NuxtLink>
      </div>
    </div>

    <div v-if="loading" class="p-6 rounded-2xl bg-white border border-gray-200">
      Loading...
    </div>

    <div
      v-else-if="err"
      class="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm"
    >
      {{ err }}
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <button
        v-for="room in store.rooms"
        :key="room.roomId"
        type="button"
        @click="openRoom(room)"
        :disabled="room.locked || goLoading === String(room.roomId)"
        class="block w-full text-left p-5 rounded-2xl bg-white border border-gray-200 shadow-sm transition
               hover:shadow-md hover:border-gray-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <div class="text-base font-semibold text-gray-900">
              {{ room.name }}
            </div>

            <div class="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <span class="inline-flex h-2.5 w-2.5 rounded-full" :class="dotClass(room.phase1Status)"></span>
              <span>{{ statusLabel(room.phase1Status) }}</span>

              <span v-if="room.locked" class="ml-2 text-xs font-semibold text-red-600">
                Locked
              </span>
            </div>
          </div>

          <div class="text-gray-400 flex items-center">
            <span v-if="goLoading === String(room.roomId)" class="text-sm">...</span>
            <i v-else class="pi pi-angle-right text-lg"></i>
          </div>
        </div>

        <div class="mt-4 text-xs text-gray-500">
          <span v-if="room.locked">In progress by another user.</span>
          <span v-else>Tap to continue scanning for this room.</span>
        </div>
      </button>
    </div>
  </div>
</template>
