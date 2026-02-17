<script setup lang="ts">
import { ref, watch, nextTick } from "vue";

type Stage = "EMPTY" | "DONE";

const props = defineProps<{
  title: string;
  firstLabel: string;
  confirmLabel: string;
  firstPlaceholder?: string;
  confirmPlaceholder?: string;
  disabled?: boolean;
  modelValue?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", v: string): void;
  (e: "confirm", v: string): void;
  (e: "mismatch", payload: { title: string; message: string }): void; // ✅ add this
}>();

const first = ref("");
const second = ref("");
const firstLocked = ref(false);
const stage = ref<Stage>("EMPTY");

const firstEl = ref<HTMLInputElement | null>(null);
const secondEl = ref<HTMLInputElement | null>(null);

function goConfirm() {
  if (props.disabled) return;
  const v = first.value.trim();
  if (!v) return;
  firstLocked.value = true;
  nextTick(() => secondEl.value?.focus());
}

function verify() {
  if (props.disabled) return;
  const a = first.value.trim();
  const b = second.value.trim();
  if (!a || !b) return;

  if (a !== b) {
    // ✅ tell parent to show toast/popup
    emit("mismatch", {
      title: "Mismatch",
      message: `${props.title} mismatch. Try again.`,
    });

    // reset UI (same as before)
    first.value = "";
    second.value = "";
    firstLocked.value = false;
    stage.value = "EMPTY";
    nextTick(() => firstEl.value?.focus());
    return;
  }

  stage.value = "DONE";
  emit("update:modelValue", a);
  emit("confirm", a);
}

watch(
  () => props.modelValue,
  (v) => {
    if (v) {
      first.value = v;
      second.value = v;
      firstLocked.value = true;
      stage.value = "DONE";
    }
  },
  { immediate: true }
);

defineExpose({
  focus: () => nextTick(() => firstEl.value?.focus()),
  reset: () => {
    first.value = "";
    second.value = "";
    firstLocked.value = false;
    stage.value = "EMPTY";
  },
});
</script>

<template>
  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="text-lg font-semibold">{{ title }}</div>

    <div class="mt-5 space-y-4">
      <div>
        <div class="text-xs font-medium text-gray-500 mb-2">{{ firstLabel }}</div>
        <input
          ref="firstEl"
          v-model="first"
          :disabled="disabled || firstLocked || stage === 'DONE'"
          class="w-full border border-gray-300 px-4 py-4 text-center text-base rounded-xl outline-none bg-white disabled:bg-gray-100 focus:ring-2 focus:ring-black"
          :placeholder="firstPlaceholder || 'Scan'"
          @keydown.enter.prevent="goConfirm"
        />
      </div>

      <div>
        <div class="text-xs font-medium text-gray-500 mb-2">{{ confirmLabel }}</div>
        <input
          ref="secondEl"
          v-model="second"
          :disabled="disabled || stage === 'DONE' || !firstLocked"
          class="w-full border border-gray-300 px-4 py-4 text-center text-base rounded-xl outline-none bg-white disabled:bg-gray-100 focus:ring-2 focus:ring-black"
          :placeholder="confirmPlaceholder || 'Scan Again to Confirm'"
          @keydown.enter.prevent="verify"
        />
      </div>

      <div
        v-if="stage === 'DONE'"
        class="text-xs text-green-700 bg-green-50 border border-green-200 rounded-xl px-3 py-2"
      >
        Confirmed.
      </div>
    </div>
  </div>
</template>
