<script setup lang="ts">
import { ref, watch, nextTick } from "vue";

type Mode = "SKU" | "SERIAL";

const props = defineProps<{
  mode: Mode;
  disabled?: boolean;
  value: string;
}>();

const emit = defineEmits<{
  (e: "update:value", v: string): void;
  (e: "enter"): void;
}>();

const inputEl = ref<HTMLInputElement | null>(null);

watch(
  () => props.mode,
  async () => {
    await nextTick();
    inputEl.value?.focus();
    inputEl.value?.select?.();
  },
  { immediate: true }
);

defineExpose({
  focus: async () => {
    await nextTick();
    inputEl.value?.focus();
    inputEl.value?.select?.();
  },
});
</script>

<template>
  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="mt-5">
      <div class="text-xs font-medium text-gray-500 mb-2">
        {{ mode === "SKU" ? "Product SKU" : "Serial Number" }}
      </div>

      <input
        ref="inputEl"
        :value="value"
        @input="emit('update:value', ($event.target as HTMLInputElement).value)"
        :disabled="disabled"
        class="w-full border border-gray-300 px-4 py-4 text-center text-base rounded-xl outline-none bg-white disabled:bg-gray-100 focus:ring-2 focus:ring-black"
        :placeholder="mode === 'SKU' ? 'Scan SKU' : 'Scan Serial'"
        @keydown.enter.prevent="emit('enter')"
      />
    </div>
  </div>
</template>
