<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from "vue";
import { useStockCount } from "@/composables/useStockCount";
import skuData from "../../data/sku.json";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import QtyStep from "@/components/QtyStep.vue";

const confirm = useConfirm();
const toast = useToast();
const qtyMax = computed(() => 100); // ✅ change as needed

const allowedSkuPrefixes = new Set(
  (skuData.skus || []).map((s: string) => String(s).toUpperCase())
);

const props = defineProps<{
  reportId: string;
  room: { roomId: string; name: string };
  disabled?: boolean; // ✅ NEW
}>();

const emit = defineEmits(["refresh", "ongoingBox"]);
const api = useStockCount();

const boxId = ref("");
const sku = ref("");
const qty = ref<number | null>(null);

const claimedBox = ref<string | null>(null);
const msg = ref<string | null>(null);
const err = ref<string | null>(null);
const busy = ref(false);

const boxQtyTotal = ref(0);

// input state machine
type Step = "box" | "sku" | "qty";
const step = ref<Step>("box");

const boxInputEl = ref<HTMLInputElement | null>(null);
const skuInputEl = ref<HTMLInputElement | null>(null);
const qtyInputEl = ref<HTMLInputElement | null>(null);

function vibrate(pattern: number | number[] = [300, 200, 320]) {
  try {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(pattern);
    }
  } catch {
    // ignore
  }
}

function scrollIntoSafeView(el?: HTMLElement | null) {
  const target = el ?? (document.activeElement as HTMLElement | null);
  if (!target) return;

  requestAnimationFrame(() => {
    target.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  });
}


function setError(message: string) {
  err.value = message;
  msg.value = null;
  vibrate(); // 🔴 vibrate on error
}


function clean(v: string) {
  return String(v ?? "").replace(/[\r\n]+/g, "").trim().toUpperCase();
}

function isAllowedSku(inputSku: string) {
  const v = clean(inputSku);
  return Array.from(allowedSkuPrefixes).some((prefix) => v.startsWith(prefix));
}

function clearMessages() {
  msg.value = null;
  err.value = null;
}

async function focusBox() {
  await nextTick();
  boxInputEl.value?.focus();
}
async function focusSku() {
  await nextTick();
  skuInputEl.value?.focus();
}
async function focusQty() {
  await nextTick();
  qtyInputEl.value?.focus();
}

// ✅ One source of truth for disabling interactions
const inputsLocked = computed(() => !!props.disabled || busy.value);

const boxDisabled = computed(
  () => inputsLocked.value || !!claimedBox.value || step.value !== "box"
);
const skuDisabled = computed(
  () => inputsLocked.value || !claimedBox.value || step.value !== "sku"
);
const qtyDisabled = computed(
  () => inputsLocked.value || !claimedBox.value || step.value !== "qty"
);

function resetLineInputs() {
  sku.value = "";
  qty.value = null;
  step.value = "sku";
}

// ENTER on Box -> claim -> enable SKU + focus SKU
async function claimOnEnter() {
  clearMessages();
  if (inputsLocked.value) return; // ✅ guard
  if (busy.value) return;

  const b = clean(boxId.value);
  if (!b) return;

  let shouldFocusSku = false;
  let shouldFocusBox = false;

  busy.value = true;
  try {
    const res = await api.phase2ClaimBox(props.reportId, {
      roomId: props.room.roomId,
      boxId: b,
    });

    // ✅ soft-error response
    if (res?.error || res?.message?.toLowerCase?.().includes("not found")) {
      setError(res.error || res.message || "Claim failed");
      boxId.value = "";
      claimedBox.value = null;
      emit("ongoingBox", "");
      step.value = "box";
      shouldFocusBox = true;
      return;
    }

    // ✅ locked box
    if (res?.skippedLocked) {
      toast.add({
  severity: "warn",
  summary: "Locked",
  detail: "Locked box",
  life: 1500,
});

      boxId.value = "";
      claimedBox.value = null;
      emit("ongoingBox", "");
      emit("refresh");
      step.value = "box";
      shouldFocusBox = true;
      return;
    }

    // ✅ success → move to SKU
    claimedBox.value = b;
    emit("ongoingBox", b);
    boxQtyTotal.value = 0;
    sku.value = "";
    qty.value = null;

    emit("refresh");
    step.value = "sku";
    await nextTick();
scrollIntoSafeView(skuInputEl.value);

    shouldFocusSku = true;
  } catch (e: any) {
    const d = e?.response?.data;
    setError(d?.message || d?.error || "Claim failed");

    boxId.value = "";
    claimedBox.value = null;
    emit("ongoingBox", "");
    step.value = "box";
    shouldFocusBox = true;
  } finally {
    busy.value = false;

    await nextTick();
    requestAnimationFrame(() => {
      if (shouldFocusSku && !inputsLocked.value) skuInputEl.value?.focus();
      if (shouldFocusBox && !inputsLocked.value) boxInputEl.value?.focus();
    });
  }
}

// ENTER on SKU -> validate -> enable qty + focus qty
async function skuEnter() {
  clearMessages();
  if (inputsLocked.value) return; // ✅ guard
  if (!claimedBox.value) return;

  const s = clean(sku.value);
  if (!s) return;

  if (!isAllowedSku(s)) {
    setError("Invalid SKU");
    sku.value = "";
    step.value = "sku";
    await focusSku();
    return;
  }

  sku.value = s;
  step.value = "qty";
  await focusQty();
}

// ENTER on QTY -> save -> reset sku+qty -> focus sku
async function qtyEnter() {
  clearMessages();
  if (inputsLocked.value) return; // ✅ guard
  if (!claimedBox.value) return;

  const s = clean(sku.value);
  const q = Number(qty.value ?? 0);

  if (!s) {
    setError("Scan SKU first");
    step.value = "sku";
    await focusSku();
    return;
  }
  if (q <= 0) {
    setError("Enter quantity");
    step.value = "qty";
    await focusQty();
    return;
  }

  let shouldFocusSku = false;

  busy.value = true;
  try {
    await api.phase2UpsertLine(props.reportId, { boxId: claimedBox.value, sku: s, qty: q });
    boxQtyTotal.value += q;
    toast.add({
  severity: "success",
  summary: "Saved",
  detail: `${s} | ${q}`,
  life: 1200,
});


    resetLineInputs();
    await nextTick();
scrollIntoSafeView(skuInputEl.value);

    shouldFocusSku = true;
  } catch (e: any) {
    const d = e?.response?.data;
    setError(d?.message || d?.error || "Save failed");

    qty.value = null;
    step.value = "sku";
    shouldFocusSku = true;
  } finally {
    busy.value = false;

    if (shouldFocusSku) {
      await nextTick();
      requestAnimationFrame(() => {
        if (!inputsLocked.value) skuInputEl.value?.focus();
      });
    }
  }
}

function completeBox() {
  clearMessages();
  if (inputsLocked.value) return; // ✅ guard
  if (!claimedBox.value) return;

  const box = claimedBox.value;

  confirm.require({
    header: "Complete box?",
    message: `Complete box ${box}?`,
    icon: "pi pi-check-circle",
    acceptLabel: "Complete",
    rejectLabel: "Cancel",
    acceptClass: "p-button-success",
    rejectClass: "p-button-secondary",
    accept: async () => {
      let shouldFocusBox = false;

      busy.value = true;
      try {
        await api.phase2CompleteBox(props.reportId, { boxId: box });

        // ✅ only toast (auto goes away)
        toast.add({
          severity: "success",
          summary: "Done",
          detail: `Box ${box} completed ✅`,
          life: 2000,
        });

        // ✅ don't show the green msg panel
        msg.value = null;
        err.value = null;


        claimedBox.value = null;
        emit("ongoingBox", "");
        boxId.value = "";
        sku.value = "";
        qty.value = null;

        emit("refresh");
        step.value = "box";
        shouldFocusBox = true;
      } catch (e: any) {
        const d = e?.response?.data;
        setError(d?.message || d?.error || "Complete failed");
        toast.add({ severity: "error", summary: "Error", detail: err.value, life: 3500 });

        step.value = "sku";
      } finally {
        busy.value = false;

        await nextTick();
        requestAnimationFrame(() => {
          if (shouldFocusBox && !inputsLocked.value) boxInputEl.value?.focus();
        });
      }
    },
  });
}

function completeCurrentBox() {
  // same guards as UI
  if (inputsLocked.value) return;
  if (!claimedBox.value) return;

  completeBox(); // opens confirm dialog and completes on accept
}

defineExpose({
  completeCurrentBox,
  getOngoingBoxId: () => claimedBox.value, // optional helper
});




onMounted(async () => {
  step.value = "box";
  if (!inputsLocked.value) await focusBox();
});
</script>

<template>
  <div class="max-w-md mx-auto px-4 py-4">
    <div class="rounded-3xl bg-white border border-gray-200 shadow-sm">
      <!-- Header -->
      <div class="px-5 pt-5 pb-3">
        <!-- Room name + SKU counter -->
        <div class="flex items-center justify-between">
          <!-- Room Name -->
          <div class="text-base font-semibold text-gray-900 truncate">
            {{ room.name }}
          </div>

          <!-- ✅ SKU Count pill (only when box claimed) -->
          <div v-if="claimedBox" class="px-3 py-1 rounded-full text-xs font-bold
             bg-blue-50 text-blue-800 border border-blue-200
             tabular-nums shrink-0">
            Qty: {{ boxQtyTotal }}
          </div>
        </div>

        <!-- Box info -->
        <div class="mt-1 text-xs text-gray-500">
          <span v-if="claimedBox">
            Box:
            <span class="font-semibold text-gray-900">{{ claimedBox }}</span>
          </span>
          <span v-else>Scan a box to start</span>
        </div>
      </div>


      <!-- Disabled banner -->
      <div v-if="props.disabled" class="px-5 pb-3">
        <div class="p-3 rounded-2xl bg-green-100 border border-gray-200 text-gray-700 text-sm">
          All boxes are counted.
        </div>
      </div>

      <!-- Messages -->
      <div v-if="err" class="px-5 pb-3">
        <div class="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm">
          {{ err }}
        </div>
      </div>

      <div class="px-5 pb-5 space-y-4">
        <!-- Box -->
        <div class="space-y-2">
          <label class="text-xs font-semibold text-gray-600">Box ID</label>
          <input ref="boxInputEl" v-model="boxId"
            class="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-white text-base focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:bg-gray-100"
            placeholder="Scan / enter box id" inputmode="text" autocomplete="off" :disabled="boxDisabled"
            @input="clearMessages" @keyup.enter.prevent="claimOnEnter" />
        </div>

        <!-- SKU + Qty -->
        <div v-if="claimedBox" class="space-y-3">
          <div class="space-y-2">
            <label class="text-xs font-semibold text-gray-600">SKU</label>
            <input ref="skuInputEl" v-model="sku"
              class="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-base focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:bg-gray-100"
              placeholder="Scan / enter SKU" inputmode="text" autocomplete="off" :disabled="skuDisabled"
              @input="clearMessages" @keyup.enter.prevent="skuEnter" />
          </div>

          <div class="space-y-2">
            <label class="text-xs font-semibold text-gray-600">Quantity</label>

            <QtyStep embedded :showConfirm="true" :qty="qty ?? 0" :max="qtyMax" :disabled="qtyDisabled"
              @update:qty="(v: number) => { qty = v; clearMessages(); }" @confirm="qtyEnter" />


          </div>
        </div>
      </div>
    </div>
  </div>
</template>
