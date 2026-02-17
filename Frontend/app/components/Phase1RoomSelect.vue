<script setup lang="ts">
import { useStockCount } from "@/composables/useStockCount";

const props = defineProps<{
  reportId: string;
  rooms: any[];
  selectedRoom: any;
}>();

const emit = defineEmits(["select", "refresh"]);
const api = useStockCount();
const err = ref<string | null>(null);
const busy = ref<string | null>(null);

async function start(room: any) {
  err.value = null;
  busy.value = room.roomId;
  try {
    await api.phase1Start(props.reportId, String(room.roomId));
    emit("select", room);
    emit("refresh");
  } catch (e: any) {
    err.value = e?.response?.data?.message || "Cannot start room";
  } finally {
    busy.value = null;
  }
}

function pick(room: any) {
  emit("select", room);
}
</script>

<template>
  <div class="border rounded p-4 space-y-3 text-black">
    <div class="font-semibold">Rooms</div>
    <div v-if="err" class="text-sm text-red-600">{{ err }}</div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div
        v-for="r in rooms"
        :key="r.roomId"
        class="border rounded p-3 flex items-center justify-between"
        :class="selectedRoom?.roomId === r.roomId ? 'bg-gray-50' : ''"
      >
        <div>
          <div class="font-medium">{{ r.name }}</div>
          <div class="text-xs text-gray-500">
            P1: {{ r.phase1Status }} <span v-if="r.phase1Owner">| owner: {{ r.phase1Owner }}</span>
          </div>
        </div>

        <div class="flex gap-2">
          <button class="border rounded px-3 py-1" @click="pick(r)">Select</button>
          <button class="border rounded px-3 py-1" @click="start(r)" :disabled="busy === r.roomId">
            {{ busy === r.roomId ? "..." : "Start/Continue" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
