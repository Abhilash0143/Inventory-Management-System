<script setup lang="ts">
const props = defineProps<{
  outer: string;
  inner: string;
  sku: string;
  items: Array<{ serial: string }>;
}>();

const emit = defineEmits<{
  (e: "confirm"): void;
}>();
</script>

<template>
  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="text-lg font-semibold">Review & Confirm</div>

    <div class="mt-4 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm">
      <div class="flex justify-between">
        <span class="text-gray-600">Outer</span>
        <span class="font-semibold">{{ outer }}</span>
      </div>
      <div class="flex justify-between mt-1">
        <span class="text-gray-600">Inner</span>
        <span class="font-semibold">{{ inner }}</span>
      </div>
      <div class="flex justify-between mt-1">
        <span class="text-gray-600">SKU</span>
        <span class="font-semibold">{{ sku || "—" }}</span>
      </div>
    </div>

    <div class="mt-4 rounded-xl border border-gray-200 overflow-hidden">
      <div class="px-4 py-3 bg-white border-b border-gray-200 flex items-center justify-between">
        <div class="text-sm font-semibold text-gray-800">Serial Numbers</div>
      </div>

      <div class="max-h-[45vh] overflow-auto divide-y divide-gray-200 bg-white">
        <div v-for="(item, idx) in items" :key="item.serial + idx" class="px-4 py-3 flex items-start gap-3">
          <div class="w-8 text-sm font-semibold text-gray-500">{{ idx + 1 }}</div>
          <div class="flex-1 font-mono text-base font-semibold text-gray-900 break-all">
            {{ item.serial }}
          </div>
        </div>

        <div v-if="items.length === 0" class="px-4 py-10 text-center text-sm text-gray-400">
          Nothing scanned.
        </div>
      </div>
    </div>

    <button
      class="mt-5 w-full h-12 rounded-xl bg-green-600 text-white text-sm font-semibold hover:opacity-90"
      @click="emit('confirm')"
    >
      Confirm & Save
    </button>
  </div>
</template>
