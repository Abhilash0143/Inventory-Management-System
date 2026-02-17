<script setup lang="ts">
const props = defineProps<{ rooms: any[]; selectedRoom: any }>();
const emit = defineEmits(["select", "refresh"]);

function pick(r: any) {
  if (r.enabled === false) return;
  emit("select", r);
}
</script>

<template>
  <div class="border rounded p-4 space-y-3">
    <div class="font-semibold">Phase 2 Rooms</div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div
        v-for="r in rooms"
        :key="r.roomId"
        class="border rounded p-3 flex items-center justify-between"
        :class="[
          r.enabled === false ? 'opacity-50' : '',
          selectedRoom?.roomId === r.roomId ? 'bg-gray-50' : ''
        ]"
      >
        <div>
          <div class="font-medium">{{ r.name }}</div>
          <div class="text-xs text-gray-500">
            enabled: {{ r.enabled }} |
            unlocked: {{ r.unlockedCompleted }}/{{ r.unlockedTotal }} |
            locked: {{ r.lockedTotal }}
          </div>
        </div>

        <button class="border rounded px-3 py-1" @click="pick(r)" :disabled="r.enabled === false">
          Select
        </button>
      </div>
    </div>
  </div>
</template>
