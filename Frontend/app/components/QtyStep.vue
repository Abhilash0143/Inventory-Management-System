<script setup lang="ts">
import Slider from "primevue/slider";

const props = defineProps<{
  qty: number;
  max: number;
  disabled?: boolean;

  embedded?: boolean;      // ✅ removes outer card
  showConfirm?: boolean;   // ✅ show/hide confirm button
}>();

const emit = defineEmits<{
  (e: "update:qty", v: number): void;
  (e: "confirm"): void;
}>();

function inc() {
  if (props.disabled) return;
  emit("update:qty", Math.min(props.max, (props.qty ?? 0) + 1));
}
function dec() {
  if (props.disabled) return;
  emit("update:qty", Math.max(0, (props.qty ?? 0) - 1));
}
</script>

<template>
  <div :class="embedded ? '' : 'bg-white border border-gray-200 rounded-2xl shadow-sm p-6'">
    <div v-if="!embedded" class="text-lg font-semibold">Quantity</div>

    <div :class="embedded ? 'border border-gray-200 rounded-2xl px-4 py-4 bg-gray-50' : 'mt-5 border border-gray-200 rounded-2xl px-4 py-4 bg-gray-50'">
      <div class="flex items-center justify-between mb-3">
        <div class="text-sm text-gray-600">Qty</div>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="w-10 h-10 rounded-xl border border-gray-200 bg-white text-lg font-semibold active:scale-[0.98] disabled:opacity-60"
            :disabled="disabled || qty <= 0"
            @click="dec"
          >
            −
          </button>

          <div class="min-w-[64px] text-center text-base font-semibold px-3 py-2 rounded-xl bg-white border border-gray-200">
            {{ qty }}
          </div>

          <button
            type="button"
            class="w-10 h-10 rounded-xl border border-gray-200 bg-white text-lg font-semibold active:scale-[0.98] disabled:opacity-60"
            :disabled="disabled || qty >= max"
            @click="inc"
          >
            +
          </button>
        </div>
      </div>

      <Slider
        :modelValue="qty"
        :disabled="disabled"
        @update:modelValue="(v:any)=>emit('update:qty', v)"
        :min="0"
        :max="max"
        :step="1"
        class="w-full"
      />

      <div class="flex justify-between text-[11px] text-gray-400 mt-2">
        <span>0</span>
        <span>{{ max }}</span>
      </div>

      <button
  v-if="showConfirm"
  class="mt-3 w-full h-10 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:opacity-90 disabled:opacity-60"
  :disabled="disabled"
  @click="emit('confirm')"
>
  Confirm Quantity
</button>

    </div>
  </div>
</template>
