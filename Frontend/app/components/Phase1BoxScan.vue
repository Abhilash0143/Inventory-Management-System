<script setup lang="ts">
import { useStockCount } from "@/composables/useStockCount";

const props = defineProps<{ reportId: string; room: { roomId: string; name: string } }>();
const emit = defineEmits(["refresh"]);
const api = useStockCount();

const boxId = ref("");
const message = ref<string | null>(null);
const err = ref<string | null>(null);
const busy = ref(false);

async function scan() {
  err.value = null;
  message.value = null;
  const b = boxId.value.trim();
  if (!b) return;

  busy.value = true;
  try {
    const res = await api.phase1Scan(props.reportId, props.room.roomId, b);
    message.value = res?.message || `Scanned ${b}`;
    boxId.value = "";
    emit("refresh");
  } catch (e: any) {
    err.value = e?.response?.data?.message || "Scan failed";
  } finally {
    busy.value = false;
  }
}

async function completeRoom() {
  err.value = null;
  busy.value = true;
  try {
    const res = await api.phase1Complete(props.reportId, props.room.roomId);
    message.value = res?.message || "Room completed";
    emit("refresh");
  } catch (e: any) {
    err.value = e?.response?.data?.message || "Cannot complete";
  } finally {
    busy.value = false;
  }
}

async function resetRoom() {
  err.value = null;
  busy.value = true;
  try {
    const res = await api.phase1Reset(props.reportId, props.room.roomId);
    message.value = res?.message || "Room reset";
    emit("refresh");
  } catch (e: any) {
    err.value = e?.response?.data?.message || "Cannot reset";
  } finally {
    busy.value = false;
  }
}
</script>

<template>
  <div class="border rounded p-4 space-y-3 text-black">
    <div class="font-semibold">Room: {{ room.name }}</div>

    <div class="flex gap-2">
      <input
        v-model="boxId"
        class="border rounded px-3 py-2 flex-1"
        placeholder="Scan box id (twice to verify)"
        @keyup.enter="scan"
      />
      <button class="border rounded px-4 py-2" :disabled="busy" @click="scan">Scan</button>
    </div>

    <div class="flex gap-2">
      <button class="border rounded px-3 py-2" :disabled="busy" @click="completeRoom">Complete Room</button>
      <button class="border rounded px-3 py-2" :disabled="busy" @click="resetRoom">Reset Room</button>
    </div>

    <div v-if="message" class="text-sm text-green-700">{{ message }}</div>
    <div v-if="err" class="text-sm text-red-600">{{ err }}</div>
  </div>
</template>
