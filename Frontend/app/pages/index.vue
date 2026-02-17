<script setup lang="ts">
import { ref, computed, nextTick, watch, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { useInboundStore } from "../stores/inbound_store";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";
import { validateSku } from "../composables/useApi";
import { logoutOperator } from "../composables/useAuth";
import { useAuthStore } from "../stores/auth";

import Infoheader from "../components/Infoheader.vue";
import Header from "../components/header.vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";

// ✅ new step components
import BoxVerifyStep from "../components/BoxVerifyStep.vue";
import QtyStep from "../components/QtyStep.vue";
import ScanStep from "../components/ScanStep.vue";
import ReviewStep from "../components/ReviewStep.vue";

// ✅ template refs for focusing step inputs/buttons
const outerStepRef = ref<any>(null);
const innerStepRef = ref<any>(null);
const qtyStepRef = ref<any>(null);
const scanStepRef = ref<any>(null);
const reviewStepRef = ref<any>(null);


definePageMeta({ hideHeader: true });

const router = useRouter();
const store = useInboundStore();
const toast = useToast();
const confirm = useConfirm();
const auth = useAuthStore();

async function focusCurrent() {
  await nextTick();

  if (step.value === "OUTER") return outerStepRef.value?.focus?.();
  if (step.value === "INNER") return innerStepRef.value?.focus?.();
  if (step.value === "QTY") return qtyStepRef.value?.focus?.();
  if (step.value === "SKU" || step.value === "SERIAL") return scanStepRef.value?.focus?.();
  if (step.value === "REVIEW") return reviewStepRef.value?.focus?.();
}

/* --------------------------------------------------
   Footer lift (keyboard safe area)
-------------------------------------------------- */
const footerLift = ref(0);

function updateFooterLift() {
  const vv = window.visualViewport;
  if (!vv) {
    footerLift.value = 0;
    return;
  }
  const covered = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
  footerLift.value = covered;
}

onMounted(() => {
  // ✅ set operator from JWT-authenticated user (no PIN, no operator step)
  if (auth.user?.name) {
    store.setOperator(auth.user.name.toLowerCase());
  }

  updateFooterLift();
  const vv = window.visualViewport;
  if (vv) {
    vv.addEventListener("resize", updateFooterLift);
    vv.addEventListener("scroll", updateFooterLift);
  }
  window.addEventListener("resize", updateFooterLift);
});

onBeforeUnmount(() => {
  const vv = window.visualViewport;
  if (vv) {
    vv.removeEventListener("resize", updateFooterLift);
    vv.removeEventListener("scroll", updateFooterLift);
  }
  window.removeEventListener("resize", updateFooterLift);
});

/* --------------------------------------------------
   Steps
-------------------------------------------------- */
type Step = "HOME" | "OUTER" | "INNER" | "QTY" | "SKU" | "SERIAL" | "REVIEW";
const step = ref<Step>("HOME");

/* --------------------------------------------------
   Navigation from HOME
-------------------------------------------------- */
async function goNewPackage() {
  store.clearMessages();

  outerBoxInput.value = "";
  outerConfirmInput.value = "";
  innerBoxInput.value = "";
  innerConfirmInput.value = "";
  qtyInput.value = 0;

  skuInput.value = "";
  serialInput.value = "";

  outerStage.value = "EMPTY";
  innerStage.value = "EMPTY";
  qtyStage.value = "EMPTY";

  outerFirstLocked.value = false;
  innerFirstLocked.value = false;
  expectedLenLocked.value = null;

  step.value = "OUTER";
  await nextTick();
  await focusCurrent();

}

function goClearPackages() {
  router.push("/inbound/reset");
}

function goHomeStep() {
  step.value = "HOME";
}

function logout() {
  confirm.require({
    header: "Logout",
    message: "Are you sure you want to Logout?",
    icon: "pi pi-exclamation-triangle",
    acceptLabel: "Yes, Logout",
    rejectLabel: "Cancel",
    accept: async () => {
      try {
        await logoutOperator();
      } catch {}
      auth.clear();
      router.push("/login");
    },
  });
}

/* --------------------------------------------------
   Minimal Step UI helpers
-------------------------------------------------- */
const qtyMax = 50;

const dateLabel = computed(() => store.session?.date ?? store.date);
const outerBoxLabel = computed(() => store.session?.outerBoxId ?? outerBoxInput.value ?? "");
const innerBoxLabel = computed(() => store.current.innerBoxId ?? innerBoxInput.value ?? "");

/* --------------------------------------------------
   OUTER step
-------------------------------------------------- */
const outerBoxInput = ref("");
const outerConfirmInput = ref("");
const pendingInnerBoxId = ref("");

const outerFirstLocked = ref(false);
const innerFirstLocked = ref(false);

type VerifyStage = "EMPTY" | "DONE";
const outerStage = ref<VerifyStage>("EMPTY");
const outerVerified = computed(() => outerStage.value === "DONE");

function outerGoConfirm() {
  store.clearMessages();
  const v = outerBoxInput.value.trim();
  if (!v) return;

  outerFirstLocked.value = true;
}

async function outerVerify() {
  store.clearMessages();
  const a = outerBoxInput.value.trim();
  const b = outerConfirmInput.value.trim();
  if (!a || !b) return;

  if (a !== b) {
    toast.add({ severity: "error", summary: "Mismatch", detail: "Outer Box mismatch. Try again.", life: 2200 });
    outerBoxInput.value = "";
    outerConfirmInput.value = "";
    outerFirstLocked.value = false;
    return;
  }

  outerStage.value = "DONE";
  store.startOrResumeOuterbox(a);

  toast.add({ severity: "success", summary: "Confirmed", detail: "Outer Box confirmed.", life: 1200 });
  step.value = "INNER";
  await nextTick();
await focusCurrent();
  
}

// ✅ called by component when confirmed
function onOuterConfirmed(v: string) {
  // keep your original 2-input state in sync (used by your dialogs/labels)
  outerBoxInput.value = v;
  outerConfirmInput.value = v;
  outerFirstLocked.value = true;

  // run existing logic
  outerVerify();
}

/* --------------------------------------------------
   INNER step + resume
-------------------------------------------------- */
const innerBoxInput = ref("");
const innerConfirmInput = ref("");

const innerStage = ref<VerifyStage>("EMPTY");
const innerVerified = computed(() => innerStage.value === "DONE");

const scannedDialogOpen = ref(false);

const canOpenScannedDialog = computed(() => {
  const inScanStep = step.value === "SKU" || step.value === "SERIAL";
  return inScanStep && (store.current.items?.length ?? 0) > 0;
});

function openScannedDialog() {
  if (!canOpenScannedDialog.value) return;
  scannedDialogOpen.value = true;
}
function closeScannedDialog() {
  scannedDialogOpen.value = false;
  nextTick(() => focusCurrent());
}

const scannedList = computed(() =>
  (store.current.items ?? [])
    .map((x: any) => String(x?.serial ?? x?.serialNumber ?? x?.serial_number ?? x ?? "").trim())
    .filter(Boolean)
);

// Resume modal
const resumeDialogOpen = ref(false);
const resumeKind = ref<"NEW" | "IN_PROGRESS" | "READY_TO_REVIEW">("NEW");

const resumeStats = computed(() => {
  const expected = store.current.expectedQty ?? 0;
  const scanned = store.current.items?.length ?? 0;
  return { expected, scanned };
});

function innerGoConfirm() {
  store.clearMessages();
  const v = innerBoxInput.value.trim();
  if (!v) return;

  innerFirstLocked.value = true;
}

async function innerVerify() {
  store.clearMessages();
  const a = innerBoxInput.value.trim();
  const b = innerConfirmInput.value.trim();
  if (!a || !b) return;

  if (!outerVerified.value) {
    toast.add({ severity: "warn", summary: "Outer Box", detail: "Confirm Outer Box first.", life: 1800 });
    step.value = "OUTER";
    return;
  }

  if (a !== b) {
    toast.add({ severity: "error", summary: "Mismatch", detail: "Inner Box mismatch. Try again.", life: 2200 });
    innerBoxInput.value = "";
    innerConfirmInput.value = "";
    innerFirstLocked.value = false;
    return;
  }

  innerStage.value = "DONE";
  pendingInnerBoxId.value = a;

  // Try resume probe (qty=0)
  const ok = await store.beginInnerbox(a, 0);

  // If backend rejects qty=0, go to QTY
  if (!ok) {
    store.current.innerBoxId = a;
    step.value = "QTY";
    await nextTick();
    await focusCurrent();
    return;
  }

  // baseline length from resumed DB serials (if any)
  const savedSerials = (store.current.items ?? []).map((i) => i.serial);
  expectedLenLocked.value = modeLenOfSerials(savedSerials);

  const expected = store.current.expectedQty ?? 0;
  const scanned = store.current.items?.length ?? 0;

  if (!expected || expected < 1) {
    resumeKind.value = "NEW";
    step.value = "QTY";
    await nextTick();
    return;
  }

  resumeKind.value = scanned >= expected ? "READY_TO_REVIEW" : "IN_PROGRESS";
  resumeDialogOpen.value = true;
}

// ✅ called by component when confirmed
async function onInnerConfirmed(v: string) {
  innerBoxInput.value = v;
  innerConfirmInput.value = v;
  innerFirstLocked.value = true;

  await innerVerify();
}

function resumeProceed() {
  resumeDialogOpen.value = false;

  if (resumeKind.value === "READY_TO_REVIEW") {
    step.value = "REVIEW";
    nextTick(() => focusCurrent());
    return;
  }

  step.value = "SKU";
  nextTick(() => focusCurrent());
}



async function resumeResetInnerbox() {
  resumeDialogOpen.value = false;

  await store.resetCurrentInnerbox();

  innerStage.value = "EMPTY";
  innerBoxInput.value = "";
  innerConfirmInput.value = "";
  innerFirstLocked.value = false;

  step.value = "INNER";
}

/* --------------------------------------------------
   QTY step + confirm modal
-------------------------------------------------- */
const qtyInput = ref<number>(0);
const qtyStage = ref<"EMPTY" | "DONE">("EMPTY");
const qtyVerified = computed(() => qtyStage.value === "DONE");
const qtyConfirmOpen = ref(false);

function verifyQty() {
  store.clearMessages();
  const q = qtyInput.value ?? 0;
  if (!q || q < 1) {
    toast.add({ severity: "error", summary: "Invalid", detail: "Need at least 1 quantity", life: 2200 });
    return;
  }
  qtyConfirmOpen.value = true;
}

async function acceptQtyAndContinue() {
  qtyConfirmOpen.value = false;

  const q = qtyInput.value ?? 0;
  if (!q || q < 1) return;

  const innerId = store.current.innerBoxId || pendingInnerBoxId.value || innerBoxInput.value.trim();
  const ok = await store.beginInnerbox(innerId, q);
  if (!ok) return;

  qtyStage.value = "DONE";

  const expected = store.current.expectedQty ?? 0;
  const scanned = store.current.items?.length ?? 0;

  if (expected > 0 && scanned >= expected) {
    step.value = "REVIEW";
    return;
  }

  step.value = "SKU";
  await nextTick();
  await focusCurrent();
}

function changeQty() {
  qtyConfirmOpen.value = false;
}

/* --------------------------------------------------
   SKU + SERIAL steps
-------------------------------------------------- */
const skuInput = ref("");
const serialInput = ref("");

const scanPopupOpen = ref(false);
const scanPopupTitle = ref("Scan Error");
const scanPopupMessage = ref("");
const scanPopupScannedValue = ref("");
const scanPopupFocus = ref<"SKU" | "SERIAL">("SKU");

const scanLockedByDialog = computed(() => scanPopupOpen.value === true);

function vibrate(pattern: number | number[]) {
  if (typeof navigator === "undefined") return;
  // @ts-ignore
  if (!("vibrate" in navigator)) return;
  // @ts-ignore
  navigator.vibrate(pattern);
}

function openScanPopup(opts: { title?: string; message: string; scanned: string; focus: "SKU" | "SERIAL" }) {
  scanPopupTitle.value = opts.title ?? "Scan Error";
  scanPopupMessage.value = opts.message;
  scanPopupScannedValue.value = opts.scanned;
  scanPopupFocus.value = opts.focus;
  scanPopupOpen.value = true;
  vibrate([800, 400]);
}

function scanAgain() {
  scanPopupOpen.value = false;

  if (scanPopupFocus.value === "SKU") {
    skuInput.value = "";
    store.current.sku = "";
    store.skuValidated = false;

    nextTick(() => focusCurrent());
    return;
  }

  serialInput.value = "";
  nextTick(() => focusCurrent());
}

function handleScannerEnter(e: KeyboardEvent) {
  if (e.key !== "Enter") return;
  if (!scanPopupOpen.value) return;
  e.preventDefault();
  e.stopPropagation();
  scanAgain();
}

onMounted(() => {
  window.addEventListener("keydown", handleScannerEnter, true);
});
onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleScannerEnter, true);
});

// Locked SKU (from DB, or first scanned item)
const lockedSku = computed(() => {
  const db = (store.dbLockedSku || "").trim().toUpperCase();
  if (db) return db;
  const first = store.current.items?.[0]?.sku;
  return String(first ?? "").trim().toUpperCase();
});

const currentScanned = computed(() => store.current.items?.length ?? 0);
const expectedQty = computed(() => store.current.expectedQty ?? 0);
const isQtyReached = computed(() => expectedQty.value > 0 && currentScanned.value >= expectedQty.value);

const serialExistsLocally = (sn: string) => store.allSerialsSet?.has(sn) || false;

async function onSkuEnter() {
  if (scanPopupOpen.value) return;
  if (isQtyReached.value) return;

  const incomingRaw = skuInput.value.trim();
  if (!incomingRaw) return;

  const incoming = incomingRaw.toUpperCase();

  const ok = store.setSku(incomingRaw);
  if (!ok || store.error) {
    openScanPopup({
      title: "Invalid SKU",
      message: store.error || `Invalid SKU: "${incoming}"`,
      scanned: incoming,
      focus: "SKU",
    });
    skuInput.value = "";
    return;
  }

  if (lockedSku.value && incoming !== lockedSku.value) {
    openScanPopup({
      title: "SKU Mismatch",
      message: `Expected SKU "${lockedSku.value}", but scanned "${incoming}".`,
      scanned: incoming,
      focus: "SKU",
    });
    store.current.sku = "";
    store.skuValidated = false;
    skuInput.value = "";
    return;
  }

  try {
    await validateSku(store.sessionId!, store.current.sku, store.operatorName);
  } catch (err: any) {
    const msg = err?.response?.data?.error || "SKU mismatch";
    openScanPopup({
      title: "SKU Mismatch",
      message: msg,
      scanned: store.current.sku || incoming,
      focus: "SKU",
    });

    store.current.sku = "";
    store.skuValidated = false;
    skuInput.value = "";
    return;
  }

  step.value = "SERIAL";
  await nextTick();
  await focusCurrent();
}

async function onSerialEnter() {
  if (scanPopupOpen.value) return;
  if (isQtyReached.value) return;

  const incoming = serialInput.value.trim().toUpperCase();
  if (!incoming) return;

  if (serialExistsLocally(incoming)) {
    openScanPopup({
      title: "Duplicate Serial",
      message: "This serial already exists. Please scan a different unit.",
      scanned: incoming,
      focus: "SERIAL",
    });
    serialInput.value = "";
    return;
  }

  if (expectedLenLocked.value !== null) {
    const l = lenOf(incoming);
    if (l !== expectedLenLocked.value) {
      openScanPopup({
        title: "Serial Length Mismatch",
        message: `Expected length ${expectedLenLocked.value}, but scanned length ${l}. Scan again.`,
        scanned: incoming,
        focus: "SERIAL",
      });
      serialInput.value = "";
      await nextTick();
      return;
    }
  }

  const ok = await store.addSerial(incoming);
  if (!ok) {
    openScanPopup({
      title: "Scan Failed",
      message: store.error || "Failed to save. Scan again.",
      scanned: incoming,
      focus: "SERIAL",
    });
    serialInput.value = "";
    return;
  }

  if (expectedLenLocked.value === null) {
    expectedLenLocked.value = lenOf(incoming);
  }

  serialInput.value = "";
  skuInput.value = "";

  if (isQtyReached.value) {
  step.value = "REVIEW";
  await nextTick();
  await focusCurrent();
  return;
}

step.value = "SKU";
await nextTick();
await focusCurrent();
}

// Serial length baseline per InnerBox
const expectedLenLocked = ref<number | null>(null);
const lenOf = (s?: string | null) => (s ?? "").trim().length;

function modeLenOfSerials(serials: Array<string | null | undefined>): number | null {
  const lengths = serials.map((x) => lenOf(x)).filter((n) => n > 0);
  if (!lengths.length) return null;

  const counts = new Map<number, number>();
  for (const n of lengths) counts.set(n, (counts.get(n) || 0) + 1);

  let best = lengths[0]!;
  let bestCount = 0;
  for (const [n, c] of counts.entries()) {
    if (c > bestCount) {
      best = n;
      bestCount = c;
    }
  }
  return best;
}

/* --------------------------------------------------
   REVIEW step
-------------------------------------------------- */
const confirmSummary = computed(() => ({
  outerBoxId: outerBoxLabel.value,
  innerBoxId: store.current.innerBoxId,
  qty: store.current.expectedQty,
  scanned: store.current.items?.length ?? 0,
}));

async function confirmAndSave() {
  const ok1 = await store.finalizeInnerbox();
  if (!ok1) return;

  const ok2 = await store.confirmInnerbox();
  if (!ok2) return;

  step.value = "HOME";
}

/* --------------------------------------------------
   RESET ALL (footer button)
-------------------------------------------------- */
function confirmResetAll() {
  confirm.require({
    header: "Reset All?",
    message: "This will reset the entire session and clear all scans. Continue?",
    icon: "pi pi-exclamation-triangle",
    acceptLabel: "Yes, Reset All",
    rejectLabel: "Cancel",
    accept: async () => {
      await store.resetAll();

      outerBoxInput.value = "";
      outerConfirmInput.value = "";
      innerBoxInput.value = "";
      innerConfirmInput.value = "";
      qtyInput.value = 0;

      skuInput.value = "";
      serialInput.value = "";

      outerStage.value = "EMPTY";
      innerStage.value = "EMPTY";
      qtyStage.value = "EMPTY";

      outerFirstLocked.value = false;
      innerFirstLocked.value = false;
      expectedLenLocked.value = null;

      step.value = "HOME";
    },
  });
}

watch(
  () => store.error,
  (val) => {
    if (!val) return;
    toast.add({ severity: "error", summary: "Error", detail: val, life: 3000 });
    store.error = "";
  }
);

watch(
  () => store.success,
  (val) => {
    if (!val) return;
    toast.add({ severity: "success", summary: "Success", detail: val, life: 2500 });
    store.success = "";
  }
);

/* --------------------------------------------------
   Footer stats + reset behavior
-------------------------------------------------- */
const footerStats = computed(() => ({
  currentScanned: store.current.items.length,
  expected: store.current.expectedQty,
}));

const showScanStats = computed(() => ["SKU", "SERIAL", "REVIEW"].includes(step.value));

function softResetPreScan() {
  outerBoxInput.value = "";
  outerConfirmInput.value = "";
  outerStage.value = "EMPTY";
  outerFirstLocked.value = false;

  innerBoxInput.value = "";
  innerConfirmInput.value = "";
  innerStage.value = "EMPTY";
  innerFirstLocked.value = false;
  expectedLenLocked.value = null;

  qtyInput.value = 0;
  qtyStage.value = "EMPTY";

  skuInput.value = "";
  serialInput.value = "";

  store.clearMessages();

  step.value = "OUTER";
}

function resetFooterAction() {
  if (step.value === "OUTER" || step.value === "INNER" || step.value === "QTY") {
    softResetPreScan();
    return;
  }
  confirmResetAll();
}

/* --------------------------------------------------
   ScanStep bindings (one component for SKU + SERIAL)
-------------------------------------------------- */
const scanValue = computed<string>({
  get: () => (step.value === "SKU" ? skuInput.value : serialInput.value),
  set: (v) => {
    if (step.value === "SKU") skuInput.value = v;
    else serialInput.value = v;
  },
});
</script>

<template>
  <title>Inbound Inventory</title>

  <Header v-if="!['HOME', 'OUTER', 'INNER', 'QTY', 'SKU', 'SERIAL', 'REVIEW'].includes(step) && store.operatorName" />
  <Infoheader v-if="store.operatorName" :operatorName="store.operatorName" title="Inbound Inventory" @home="goHomeStep"
    @logout="logout" />

  <div class="text-gray-900 w-full bg-gray-50 h-[100dvh] overflow-hidden">
    <!-- HOME -->
    <div v-if="step === 'HOME'" class="h-[calc(100vh-96px)] px-4 flex items-center">
      <div class="mx-auto w-full max-w-md sm:max-w-4xl text-center">
        <div class="mb-4 sm:mb-6">
          <div class="font-semibold tracking-wide text-2xl sm:text-2xl md:text-[30px]">
            Inbound Inventory Tracking System
          </div>
        </div>

        <div class="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-8">
          <button
            class="w-full sm:w-72 h-24 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition flex items-center justify-center"
            @click="goNewPackage">
            <span class="text-lg sm:text-base font-semibold tracking-wide">NEW PACKAGE</span>
          </button>

          <button
            class="w-full sm:w-72 h-24 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition flex items-center justify-center"
            @click="goClearPackages">
            <span class="text-lg sm:text-base font-semibold tracking-wide">CLEAR PACKAGES</span>
          </button>
        </div>
      </div>
    </div>

    <!-- STEPS -->
    <div v-else class="h-full overflow-hidden">
      <div class="h-full flex items-center justify-center px-4" :style="{ paddingBottom: `calc(76px + ${footerLift}px)` }">
        <div class="w-full max-w-sm">
          <!-- OUTER (component) -->
          <BoxVerifyStep v-if="step === 'OUTER'" title="Outer Box" firstLabel="Outer Box ID" ref="outerStepRef"
            confirmLabel="Confirm Outer Box ID" firstPlaceholder="Scan Outer Box"
            confirmPlaceholder="Scan Again to Confirm" @confirm="onOuterConfirmed"  
            @mismatch="(e) => toast.add({ severity: 'error', summary: e.title, detail: e.message, life: 2200 })"/>

          <!-- INNER (component) -->
          <BoxVerifyStep v-else-if="step === 'INNER'" title="Inner Box" firstLabel="Inner Box ID" ref="innerStepRef"
            confirmLabel="Confirm Inner Box ID" firstPlaceholder="Scan Inner Box"
            confirmPlaceholder="Scan Again to Confirm" @confirm="onInnerConfirmed"
            @mismatch="(e) => toast.add({ severity: 'error', summary: e.title, detail: e.message, life: 2200 })"/>

          <!-- QTY (component) -->
          <QtyStep
  v-else-if="step === 'QTY'"
  :qty="qtyInput"
  :max="qtyMax"
  :showConfirm="true"
  @update:qty="(v:number)=> qtyInput = v"
  @confirm="verifyQty"
/>


          <!-- SKU + SERIAL (single component) -->
          <ScanStep v-else-if="step === 'SKU' || step === 'SERIAL'" :mode="step"
            :disabled="isQtyReached || scanLockedByDialog" :value="scanValue" @update:value="(v:string)=> scanValue = v" ref="scanStepRef"
            @enter="step === 'SKU' ? onSkuEnter() : onSerialEnter()" />

          <!-- REVIEW (component) -->
          <ReviewStep v-else-if="step === 'REVIEW'" :outer="confirmSummary.outerBoxId" :inner="confirmSummary.innerBoxId" ref="reviewStepRef"
            :sku="store.dbLockedSku || store.current.items?.[0]?.sku || ''" :items="store.current.items"
            @confirm="confirmAndSave" />
        </div>
      </div>

      <!-- ✅ Sticky footer (ONLY 2 stats + reset) -->
      <div v-if="!['HOME'].includes(step)"
        class="fixed bottom-0 left-0 right-0 z-30 border-t border-gray-200 bg-white"
        :style="{ transform: `translateY(-${footerLift}px)` }">
        <div class="mx-auto max-w-sm px-3 py-2">
          <!-- SCANNING STEPS -->
          <div v-if="showScanStats" class="grid grid-cols-3 gap-2 items-center">
            <!-- To be scanned -->
            <div class="rounded-xl border border-purple-200 bg-purple-50 px-2 py-2 text-center">
              <div class="text-[10px] font-medium text-purple-600">To be Scanned</div>
              <div class="text-base font-bold text-purple-900">
                {{ footerStats.expected }}
              </div>
            </div>

            <!-- Currently scanned -->
            <button type="button" class="rounded-xl border border-blue-200 bg-blue-50 px-2 py-2 text-center"
              @click="openScannedDialog">
              <div class="text-[10px] font-medium text-blue-600">Currently Scanned</div>
              <div class="text-base font-bold text-blue-900">
                {{ footerStats.currentScanned }}
              </div>
            </button>

            <!-- Reset -->
            <button class="h-[52px] rounded-xl bg-red-600 text-white text-xs font-semibold active:scale-[0.98] hover:bg-red-700"
              @click="resetFooterAction">
              Reset
            </button>
          </div>

          <!-- PRE-SCAN STEPS (OUTER / INNER / QTY) -->
          <div v-else class="flex justify-end">
            <button class="h-[40px] px-5 rounded-xl bg-red-600 text-white text-xs font-semibold active:scale-[0.98] hover:bg-red-700"
              @click="resetFooterAction">
              Reset
            </button>
          </div>
        </div>
      </div>

      <!-- Resume modal -->
      <Dialog v-model:visible="resumeDialogOpen" modal :closable="false" header="Resume Inner Box" class="w-[95vw] max-w-md">
        <div class="space-y-3">
          <div class="text-sm text-white">
            <div><span class="text-gray-500">Outer:</span> <span class="font-semibold">{{ outerBoxLabel }}</span></div>
            <div><span class="text-gray-500">Inner:</span> <span class="font-semibold">{{ store.current.innerBoxId }}</span></div>
          </div>

          <div class="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-400">Scanned</span>
              <span class="font-semibold text-black">{{ resumeStats.scanned }} / {{ resumeStats.expected }}</span>
            </div>
            <div v-if="resumeKind === 'READY_TO_REVIEW'" class="mt-2 text-xs text-blue-700">
              Fully scanned but not confirmed. Go to review.
            </div>
            <div v-else class="mt-2 text-xs text-gray-600">
              Continue scanning this Inner Box.
            </div>
          </div>

          <div class="flex gap-2 justify-end pt-2">
            <Button label="Reset Inner Box" severity="danger" class="h-11" @click="resumeResetInnerbox" />
            <Button :label="resumeKind === 'READY_TO_REVIEW' ? 'Go to Review' : 'Resume'" class="h-11" @click="resumeProceed" />
          </div>
        </div>
      </Dialog>

      <!-- Qty confirm modal (shows outer+inner+qty) -->
      <Dialog v-model:visible="qtyConfirmOpen" modal :closable="false" header="Confirm Package Details" class="w-[95vw] max-w-md">
        <div class="space-y-3 text-sm text-gray-700">
          <div class="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
            <div class="flex justify-between"><span class="text-gray-500">Outer Box</span><span class="font-semibold">{{ outerBoxLabel }}</span></div>
            <div class="flex justify-between mt-1"><span class="text-gray-500">Inner Box</span><span class="font-semibold">{{ store.current.innerBoxId || innerBoxInput }}</span></div>
            <div class="flex justify-between mt-1"><span class="text-gray-500">Quantity</span><span class="font-semibold">{{ qtyInput }}</span></div>
          </div>

          <div class="flex gap-2 justify-end pt-2">
            <Button label="Change" outlined class="h-11" @click="changeQty" />
            <Button label="Yes, Continue" class="h-11" @click="acceptQtyAndContinue" />
          </div>
        </div>
      </Dialog>

      <!-- Scan error popup -->
      <Dialog v-model:visible="scanPopupOpen" modal :closable="false" :header="scanPopupTitle" class="w-[95vw] max-w-md">
        <div class="space-y-3">
          <div class="text-sm text-gray-400">
            {{ scanPopupMessage }}
          </div>

          <div class="rounded-lg border border-gray-200 bg-red-600 px-3 py-2">
            <div class="text-[11px] text-red-50">Scanned</div>
            <div class="font-mono text-base font-semibold text-white break-all">
              {{ scanPopupScannedValue }}
            </div>
          </div>

          <div class="flex gap-2 justify-end pt-2">
            <Button label="Scan Again" icon="pi pi-refresh" class="h-11" @click="scanAgain" />
          </div>
        </div>
      </Dialog>

      <!-- Currently Scanned Dialog -->
      <Dialog v-model:visible="scannedDialogOpen" modal header="Currently Scanned" class="w-[95vw] max-w-md">
        <div class="text-sm mb-3">
          <div class="flex justify-between">
            <span class="text-gray-500">SKU</span>
            <span class="font-semibold">{{ store.dbLockedSku || store.current.items?.[0]?.sku || "—" }}</span>
          </div>
        </div>

        <div class="max-h-[50vh] overflow-auto divide-y border rounded-xl bg-white">
          <div v-for="(sn, idx) in scannedList" :key="sn + idx" class="px-4 py-3 flex items-start gap-3">
            <div class="w-8 text-sm font-semibold text-gray-500">{{ idx + 1 }}</div>
            <div class="flex-1 font-mono text-base font-semibold text-gray-900 break-all">
              {{ sn }}
            </div>
          </div>
        </div>

        <div class="flex justify-end mt-4">
          <Button label="Close" class="h-11" @click="closeScannedDialog" />
        </div>
      </Dialog>
    </div>
  </div>
</template>
