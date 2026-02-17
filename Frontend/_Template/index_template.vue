<script setup lang="ts">
import { ref, computed, nextTick, watch, onMounted, onBeforeUnmount } from "vue";
import { useInboundStore } from "../stores/inbound";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";
import { validateSku } from "../src/api/api-express";
import { useRouter } from "vue-router";
import Slider from "primevue/slider";
import Button from "primevue/button";

const footerLift = ref(0);

function updateFooterLift() {
  const vv = window.visualViewport;
  if (!vv) {
    footerLift.value = 0;
    return;
  }

  // Height covered by keyboard / autofill bar
  const covered = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
  footerLift.value = covered;
}

onMounted(() => {
  updateFooterLift();

  const vv = window.visualViewport;
  if (vv) {
    vv.addEventListener("resize", updateFooterLift);
    vv.addEventListener("scroll", updateFooterLift); // needed on some devices
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

const qtyMax = 50;

const router = useRouter();
type Step = "OPERATOR" | "HOME" | "NEW_PACKAGE" | "SCAN" | "CONFIRM";
const step = ref<Step>("OPERATOR");
type VerifyStage = "EMPTY" | "FIRST" | "CONFIRMED";

const store = useInboundStore();
const toast = useToast();
const confirm = useConfirm();

// inputs
const outerBoxInput = ref("");
const innerBoxInput = ref("");
const outerConfirmInput = ref("");
const innerConfirmInput = ref("");
const qtyInput = ref<number>(0);
const skuInput = ref("");
const serialInput = ref("");

// focus refs
const outerEl = ref<HTMLInputElement | null>(null);
const innerEl = ref<HTMLInputElement | null>(null);
const outerConfirmEl = ref<HTMLInputElement | null>(null);
const innerConfirmEl = ref<HTMLInputElement | null>(null);
const skuEl = ref<HTMLInputElement | null>(null);
const serialEl = ref<HTMLInputElement | null>(null);

const dateLabel = computed(() => store.session?.date ?? store.date);
const outerBoxLabel = computed(() => store.session?.outerBoxId ?? outerBoxInput.value ?? "");

// -----------------------------
// Outer/Inner/Qty double scan
// -----------------------------
const outerStage = ref<VerifyStage>("EMPTY");
const innerStage = ref<VerifyStage>("EMPTY");
const qtyStage = ref<VerifyStage>("EMPTY");

const outerFirst = ref("");
const innerFirst = ref("");

const scanBlocked = ref(false);        // blocks onSkuEnter/onSerialEnter
const rescanRequired = ref(false);     // forces user to restart from SKU

const outerVerified = computed(() => outerStage.value === "CONFIRMED");
const innerVerified = computed(() => innerStage.value === "CONFIRMED");
const qtyVerified = computed(() => qtyStage.value === "CONFIRMED");

const canResetBatchUi = computed(() => store.pendingCount > 0 || lengthMismatchLocked.value);

const qtyDisabled = computed(
  () =>
    !innerVerified.value ||
    qtyVerified.value ||
    store.qtyLocked ||
    store.current.items.length > 0
);

const operatorInput = ref("");
const operatorEl = ref<HTMLInputElement | null>(null);


function saveOperator() {
  const ok = store.setOperator(operatorInput.value);
  if (!ok) {
    nextTick(() => operatorEl.value?.focus());
    return;
  }
  step.value = "HOME";
}

function goClearPackages() {
  router.push("/inbound/reset");
}

function verifyOuterFirst() {
  store.clearMessages();
  const v = outerBoxInput.value.trim();
  if (!v) return;

  outerFirst.value = v;
  outerStage.value = "FIRST";
  outerBoxInput.value = v;
  outerConfirmInput.value = "";

  toast.add({ severity: "info", summary: "Confirm", detail: "Scan Outer Box again to confirm.", life: 1500 });
  nextTick(() => outerConfirmEl.value?.focus());
}

function verifyOuterConfirm() {
  store.clearMessages();
  const v = outerConfirmInput.value.trim();
  if (!v) return;

  if (v !== outerFirst.value) {
    toast.add({ severity: "error", summary: "Mismatch", detail: "Outer Box mismatch. Try again.", life: 2500 });
    outerConfirmInput.value = "";
    nextTick(() => outerConfirmEl.value?.focus());
    return;
  }

  outerStage.value = "CONFIRMED";
  toast.add({ severity: "success", summary: "Confirmed", detail: "Outer Box confirmed.", life: 1200 });
  nextTick(() => innerEl.value?.focus());
}

function verifyInnerFirst() {
  store.clearMessages();
  const v = innerBoxInput.value.trim();
  if (!v) return;

  innerFirst.value = v;
  innerStage.value = "FIRST";
  innerBoxInput.value = v;
  innerConfirmInput.value = "";

  toast.add({ severity: "info", summary: "Confirm", detail: "Scan Inner Box again to confirm.", life: 1500 });
  nextTick(() => innerConfirmEl.value?.focus());
}

function verifyInnerConfirm() {
  store.clearMessages();
  const v = innerConfirmInput.value.trim();
  if (!v) return;

  if (v !== innerFirst.value) {
    toast.add({ severity: "error", summary: "Mismatch", detail: "Inner Box mismatch. Try again.", life: 2500 });
    innerConfirmInput.value = "";
    nextTick(() => innerConfirmEl.value?.focus());
    return;
  }

  innerStage.value = "CONFIRMED";
  toast.add({ severity: "success", summary: "Confirmed", detail: "Inner Box confirmed.", life: 1200 });
}

function verifyQty() {
  store.clearMessages();
  const q = qtyInput.value ?? 0;
  if (!q || q < 1) {
    toast.add({ severity: "error", summary: "Invalid", detail: "Need atleast 1 quantity", life: 2500 });
    return;
  }
  qtyStage.value = "CONFIRMED";
}

// -----------------------------
// SKU / Serial flow
// -----------------------------
const skuStage = ref<"EMPTY" | "CONFIRMED">("EMPTY");
const skuVerified = computed(() => skuStage.value === "CONFIRMED");

// ✅ Length baseline is available only AFTER first batch confirm
const expectedLenLocked = ref<number | null>(null);

// ✅ If mismatch occurs, lock SKU+Serial until reset batch
const lengthMismatchLocked = ref(false);
// temp length used only until expectedLenLocked is created after 1st batch confirm
const tempBatchLen = ref<number | null>(null);


const lockedSkuLabel = computed(() => {
  // Prefer DB lock; fallback to first scanned item sku if needed
  const db = (store.dbLockedSku || "").trim();
  if (db) return db;

  const first = store.current.items?.[0]?.sku;
  return (first || "").trim();
});

const skuDisabled = computed(() => {
  if (store.scanLocked) return true;
  if (store.batchLocked || store.isBatchFull) return true;
  if (lengthMismatchLocked.value) return true;

  if (store.current.expectedQty > 0 && store.current.items.length >= store.current.expectedQty) return true;

  return skuVerified.value;
});

const serialDisabled = computed(() => store.scanLocked || !skuVerified.value || lengthMismatchLocked.value);

async function onSkuEnter() {
  if (scanBlocked.value) return;       // ✅ block while popup open
  if (rescanRequired.value) return;

  const incomingRaw = skuInput.value.trim();
  if (!incomingRaw) return;

  const incoming = incomingRaw.toUpperCase();

  const ok = store.setSku(incomingRaw);

  // ✅ INVALID SKU -> popup (same behavior)
  if (!ok || store.error) {
    const msg = store.error || `Invalid SKU: "${incoming}"`;

    openScanPopup({
      title: "Invalid SKU",
      message: msg,
      scanned: incoming,
      focus: "SKU",
    });

    // reset sku cycle
    store.current.sku = "";
    store.skuValidated = false;
    skuStage.value = "EMPTY";
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
    skuStage.value = "EMPTY";
    skuInput.value = "";
    return;
  }

  skuStage.value = "CONFIRMED";
  skuInput.value = store.current.sku;
  nextTick(() => serialEl.value?.focus());
}

const isBatchComplete = computed(() =>
  store.isBatchFull ||
  (
    store.current.expectedQty > 0 &&
    store.current.items.length >= store.current.expectedQty
  )
);


function focusSku() {
  nextTick(() => {
    setTimeout(() => {
      skuEl.value?.focus();
      skuEl.value?.select?.();
    }, 0);
  });
}

const lenOf = (serial?: string | null) => (serial ?? "").trim().length;

// Helper to compute mode length
function modeLenOfSerials(serials: Array<string | null | undefined>): number | null {
  const lengths = serials.map((s) => lenOf(s)).filter((n) => n > 0);
  if (lengths.length === 0) return null;

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


const serialExistsLocally = (sn: string) => {
  // checks current + previous innerboxes (your store getter covers both)
  return store.allSerialsSet?.has(sn) || false;
};


async function onSerialEnter() {
  if (scanBlocked.value) return;       // ✅ block while popup open
  if (rescanRequired.value) return;
  // if mismatch already detected, user must reset batch
  if (lengthMismatchLocked.value) {
    serialInput.value = "";
    return;
  }

  if (store.batchLocked) {
    serialInput.value = "";
    return;
  }

  const incoming = serialInput.value.trim().toUpperCase();
  if (!incoming) return;

  // ✅ 0) Prevent duplicate BEFORE any length logic
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


  // ✅ 1) Decide what baseline we should compare against
  // - after first batch confirm => expectedLenLocked exists
  // - during first batch => tempBatchLen exists only AFTER first successful save
  const baseline =
    expectedLenLocked.value !== null
      ? expectedLenLocked.value
      : tempBatchLen.value !== null
        ? tempBatchLen.value
        : null;

  // ✅ 2) If we already have a baseline, enforce it BEFORE saving
  // (If no baseline yet, we allow this serial to be the first "setter" after successful save)
  if (baseline !== null) {
    const l = lenOf(incoming);   // ✅ define it here

    if (l !== baseline) {
      openScanPopup({
        title: "Serial Length Mismatch",
        message: `Expected length ${baseline}, but scanned length ${l}. Scan again.`,
        scanned: incoming,
        focus: "SERIAL",
      });

      serialInput.value = "";
      nextTick(() => serialEl.value?.focus());
      return;
    }
  }

  // ✅ 3) Try saving to DB
  const ok = await store.addSerial(incoming);

  if (!ok) {
    openScanPopup({
      title: "Scan Failed",
      message: store.error || "Failed to save. Scan again.",
      scanned: incoming,
      focus: "SERIAL",
    });

    serialInput.value = "";
    skuInput.value = "";
    skuStage.value = "EMPTY";
    store.current.sku = "";
    store.skuValidated = false;
    return;
  }


  // ✅ 4) After successful save, set temp batch length ONLY if baseline not established yet
  if (expectedLenLocked.value === null && tempBatchLen.value === null) {
    tempBatchLen.value = lenOf(incoming);
  }

  // reset inputs for next scan
  serialInput.value = "";
  skuInput.value = "";
  skuStage.value = "EMPTY";
  focusSku();
}


// -----------------------------
// Toast watchers
// -----------------------------
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

watch(
  () => store.goOperatorRequested,
  (val) => {
    if (!val) return;
    step.value = "OPERATOR";
    store.clearGoOperatorRequest();
    nextTick(() => operatorEl.value?.focus());
  }
);

watch(
  () => store.goHomeRequested,
  (val) => {
    if (!val) return;
    step.value = "HOME";
    store.clearGoHomeRequest();
  },
  { immediate: true }
);

// -----------------------------
// navigation
// -----------------------------
async function goNewPackage() {
  step.value = "NEW_PACKAGE";
  store.resetCurrentInnerboxLocal();
  store.clearMessages();

  outerBoxInput.value = "";
  innerBoxInput.value = "";
  qtyInput.value = 0;
  skuInput.value = "";
  serialInput.value = "";

  outerStage.value = outerBoxInput.value.trim() ? "CONFIRMED" : "EMPTY";
  innerStage.value = "EMPTY";
  qtyStage.value = "EMPTY";
  outerFirst.value = "";
  innerFirst.value = "";

  skuStage.value = "EMPTY";

  expectedLenLocked.value = null;
  lengthMismatchLocked.value = false;

  nextTick(() => (outerVerified.value ? innerEl.value?.focus() : outerEl.value?.focus()));
}

async function onNewPackageNext() {
  store.clearMessages();

  if (!outerVerified.value || !innerVerified.value || !qtyVerified.value) {
    toast.add({
      severity: "warn",
      summary: "Incomplete",
      detail: "Confirm OuterBox, InnerBox, and Quantity first.",
      life: 2000,
    });
    return;
  }

  store.startOrResumeOuterbox(outerBoxInput.value);

  const ok = await store.beginInnerbox(innerBoxInput.value, qtyInput.value ?? 0);
  if (!ok) return;

  // ✅ always clear mismatch lock on new/resume
  lengthMismatchLocked.value = false;

  // ✅ IMPORTANT: rebuild baseline from DB items after resume
  // store.beginInnerbox() already loads items from DB into store.current.items
  const savedSerials = store.current.items.map(i => i.serial);

  // ✅ treat resumed items as confirmed (since they are already saved in DB)
  store.confirmedCount = store.current.items.length;
  store.batchLocked = false;

  // ✅ Baseline rules:
  // - expectedLenLocked only AFTER first batch exists (>= batchSize confirmed)
  // - during first batch (< batchSize), use tempBatchLen from saved serials (if any)
  if (savedSerials.length >= store.batchSize) {
    expectedLenLocked.value = modeLenOfSerials(savedSerials);
    tempBatchLen.value = null;
  } else if (savedSerials.length > 0) {
    expectedLenLocked.value = null;
    tempBatchLen.value = modeLenOfSerials(savedSerials);
  } else {
    expectedLenLocked.value = null;
    tempBatchLen.value = null;
  }

  // ✅ reset scan cycle inputs
  skuInput.value = "";
  serialInput.value = "";
  skuStage.value = "EMPTY";
  store.current.sku = "";
  store.skuValidated = false;

  step.value = "SCAN";
  nextTick(() => skuEl.value?.focus());
}


// ✅ Confirm batch: after first batch confirm, lock baseline length from confirmed history
async function onConfirmBatch() {
  if (lengthMismatchLocked.value) {
    store.error = "Serial length mismatch detected. Reset the batch to continue.";
    return;
  }

  const ok = await store.confirmBatch();
  if (!ok) return;

  // baseline logic (your existing code) ...
  if (expectedLenLocked.value == null && store.confirmedCount >= store.batchSize) {
    const confirmedSerials = store.current.items.slice(0, store.confirmedCount).map(i => i.serial);
    const m = modeLenOfSerials(confirmedSerials);
    expectedLenLocked.value = m ?? tempBatchLen.value ?? null;
  }
  if (store.confirmedCount >= store.batchSize) tempBatchLen.value = null;
  lengthMismatchLocked.value = false;

  skuInput.value = "";
  skuStage.value = "EMPTY";
  store.current.sku = "";
  store.skuValidated = false;

  await nextTick();

  // ✅ if expected qty reached, show popup instead of just continuing
  // use your store flags if they already represent “ready for scan complete”
  if (store.canShowScanComplete && store.canEnableScanComplete) {
    openQtyReachedPopup();
    return;
  }

  // otherwise continue scanning normally
  skuEl.value?.focus();
  skuEl.value?.select?.();
  // ✅ show popup when expected quantity is reached
  if (store.current.items.length >= store.current.expectedQty) {
    openQtyReachedPopup();
    return;
  }

}


async function onresetBatch() {
  // ✅ special case: mismatch happened BEFORE saving anything
  if (lengthMismatchLocked.value && store.pendingCount === 0) {
    lengthMismatchLocked.value = false;
    store.batchLocked = false;
    tempBatchLen.value = null;

    skuInput.value = "";
    serialInput.value = "";
    skuStage.value = "EMPTY";
    store.current.sku = "";
    store.skuValidated = false;

    // clear message if any
    store.clearMessages();

    nextTick(() => {
      skuEl.value?.focus();
      skuEl.value?.select?.();
    });
    return;
  }

  // normal reset when items exist in DB
  const ok = await store.resetBatch();
  if (!ok) return;

  tempBatchLen.value = null;
  lengthMismatchLocked.value = false;

  skuInput.value = "";
  skuStage.value = "EMPTY";
  store.current.sku = "";
  store.skuValidated = false;

  nextTick(() => {
    skuEl.value?.focus();
    skuEl.value?.select?.();
  });
}


const canScanComplete = computed(() => store.current.items.length > 0 && !store.error && !store.scanLocked);

function scanCompleteAndGoConfirm() {
  if (!canScanComplete.value) {
    toast.add({
      severity: "warn",
      summary: "Not Ready",
      detail: "Complete scanning all products for this InnerBox first.",
      life: 2200,
    });
    return;
  }
  step.value = "CONFIRM";
}

function confirmResetCurrentInnerbox() {
  confirm.require({
    header: "Confirm Reset",
    message: "Are you sure you want to reset the current InnerBox?",
    icon: "pi pi-exclamation-triangle",
    acceptLabel: "Yes, Reset",
    rejectLabel: "Cancel",
    accept: async () => {
      const ok = await store.resetCurrentInnerbox();
      if (!ok) return;

      // ✅ Clear store session too so outerbox doesn't stay filled
      store.session = null;

      // ✅ Clear local UI inputs
      outerBoxInput.value = "";
      innerBoxInput.value = "";
      outerConfirmInput.value = "";
      innerConfirmInput.value = "";
      qtyInput.value = 1;
      skuInput.value = "";
      serialInput.value = "";

      // ✅ Reset verify stages so inputs are enabled again
      outerStage.value = "EMPTY";
      innerStage.value = "EMPTY";
      qtyStage.value = "EMPTY";
      outerFirst.value = "";
      innerFirst.value = "";

      // ✅ clear length stuff
      expectedLenLocked.value = null;
      tempBatchLen.value = null;
      lengthMismatchLocked.value = false;

      toast.add({ severity: "info", summary: "Reset", detail: "Package reset.", life: 2000 });

      step.value = "NEW_PACKAGE";
      nextTick(() => outerEl.value?.focus());
    },
  });
}

async function confirmAndNextInnerbox() {
  // 1) complete server confirm
  const ok1 = await store.finalizeInnerbox();
  if (!ok1) return;

  // 2) move current innerbox to history + clear current innerbox
  const ok2 = await store.confirmInnerbox();
  if (!ok2) return;

  // 3) reset all NEW_PACKAGE UI fields so inputs are NOT disabled
  step.value = "NEW_PACKAGE";

  // If you want to keep same outerbox but allow editing, use this:
  outerBoxInput.value = "";
  outerConfirmInput.value = "";
  outerFirst.value = "";
  outerStage.value = "EMPTY"; // ✅ makes outer editable again

  // always clear inner/qty (new innerbox)
  innerBoxInput.value = "";
  innerConfirmInput.value = "";
  innerFirst.value = "";
  innerStage.value = "EMPTY";

  qtyInput.value = 0;
  qtyStage.value = "EMPTY";

  // reset scan helpers
  skuInput.value = "";
  serialInput.value = "";
  skuStage.value = "EMPTY";
  expectedLenLocked.value = null;
  tempBatchLen.value = null;
  lengthMismatchLocked.value = false;

  await nextTick();
  outerEl.value?.focus(); // or innerEl if you want outer locked
}

// ✅ Reset All from SCAN (full reset + release server lock)
function confirmResetAllFromScan() {
  confirm.require({
    header: "Reset All?",
    message: "This will reset the entire session and clear all scans. Continue?",
    icon: "pi pi-exclamation-triangle",
    acceptLabel: "Yes, Reset All",
    rejectLabel: "Cancel",
    accept: async () => {
      await store.resetAll();
      expectedLenLocked.value = null;
      lengthMismatchLocked.value = false;

      // clear local inputs
      outerBoxInput.value = "";
      innerBoxInput.value = "";
      outerConfirmInput.value = "";
      innerConfirmInput.value = "";
      qtyInput.value = 0;
      skuInput.value = "";
      serialInput.value = "";

      outerStage.value = "EMPTY";
      innerStage.value = "EMPTY";
      qtyStage.value = "EMPTY";

      step.value = "HOME";
    },
  });
}

// ✅ Home button: ONLY navigate (no reset)
function goHomeStep() {
  outerStage.value = "EMPTY";
  outerBoxInput.value = "";
  step.value = "HOME";
}

function logout() {
  confirm.require({
    header: "Logout",
    message: "Logout will reset the current scanning session. Continue?",
    icon: "pi pi-exclamation-triangle",
    acceptLabel: "Yes, Logout",
    rejectLabel: "Cancel",
    accept: async () => {
      await store.resetAll();
      operatorInput.value = "";
      expectedLenLocked.value = null;
      lengthMismatchLocked.value = false;

      step.value = "OPERATOR";
      nextTick(() => operatorEl.value?.focus());
    },
  });
}

// Confirm page summary
const confirmSummary = computed(() => ({
  outerBoxId: outerBoxLabel.value,
  innerBoxId: store.current.innerBoxId,
  qty: store.current.expectedQty,
  scanned: store.current.items?.length ?? 0,
}));

// Sticky footer stats (scan page)
const footerStats = computed(() => ({
  currentScanned: store.current.items.length,
  expected: store.current.expectedQty,
  totalInnerboxes: store.scannedInnerboxesCount,
  totalItemsAll: store.allProductsCountIncludingCurrent,
}));

// ✅ mismatch popup state
const scanPopupOpen = ref(false);
const scanPopupTitle = ref("Scan Error");
const scanPopupMessage = ref("");
const scanPopupScannedValue = ref("");
const scanPopupFocus = ref<"SKU" | "SERIAL">("SERIAL");

function vibrate(pattern: number | number[]) {
  if (typeof navigator === "undefined") return;
  if (!("vibrate" in navigator)) return;
  // @ts-ignore
  navigator.vibrate(pattern);
}

function openScanPopup(opts: {
  title?: string;
  message: string;
  scanned: string;
  focus: "SKU" | "SERIAL";
}) {
  scanBlocked.value = true;       // ✅ stop background scanning
  rescanRequired.value = true;    // ✅ force restart from SKU

  scanPopupTitle.value = opts.title ?? "Scan Error";
  scanPopupMessage.value = opts.message;
  scanPopupScannedValue.value = opts.scanned;
  scanPopupFocus.value = opts.focus;

  scanPopupOpen.value = true;

  vibrate([800, 400]);
}

// ✅ Qty reached popup
const qtyReachedOpen = ref(false);

function openQtyReachedPopup() {
  qtyReachedOpen.value = true;

  // fully block scanning
  scanBlocked.value = true;
  rescanRequired.value = true;
}

function scanCompleteFromPopup() {
  qtyReachedOpen.value = false;

  scanBlocked.value = false;
  rescanRequired.value = false;

  scanCompleteAndGoConfirm();
}

// ✅ show qty-reached popup even if confirm button is disabled (resume / already confirmed)
const qtyPopupShown = ref(false);

const isQtyReached = computed(() => {
  const expected = store.current.expectedQty ?? 0;
  const scanned = store.current.items?.length ?? 0;
  return expected > 0 && scanned >= expected;
});

watch(
  [() => step.value, isQtyReached],
  ([s, reached]) => {
    if (s !== "SCAN") return;
    if (!reached) return;
    if (qtyPopupShown.value) return;      // ✅ show only once per innerbox
    if (qtyReachedOpen.value) return;     // already open

    qtyPopupShown.value = true;
    openQtyReachedPopup();
  },
  { immediate: true }
);

function scanAgain() {
  scanPopupOpen.value = false;
  scanBlocked.value = false;      // ✅ allow scanning again
  rescanRequired.value = false;   // ✅ clear forced restart

  // ✅ always restart from SKU (your requirement)
  skuInput.value = "";
  serialInput.value = "";
  skuStage.value = "EMPTY";
  store.current.sku = "";
  store.skuValidated = false;

  nextTick(() => skuEl.value?.focus());
}

</script>

<template>
  <title>Inbound Inventory</title>

  <!-- Header -->
  <div class="sticky top-0 z-20 bg-white border-b border-gray-200">
    <div class="mx-auto max-w-6xl px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between gap-3">
      <div class="min-w-0 flex flex-col leading-tight">
        <div class="font-semibold text-gray-900 text-sm sm:text-base whitespace-nowrap">
          Inbound Inventory
        </div>

        <div v-if="store.operatorName" class="text-[11px] sm:text-xs text-gray-500 truncate">
          Operator:
          <span class="font-semibold text-gray-800 ml-1">{{ store.operatorName }}</span>
        </div>
      </div>

      <div v-if="store.operatorName" class="flex items-center gap-2 flex-shrink-0">
        <!-- HOME: now only navigates -->
        <button type="button"
          class="px-3 py-2 rounded-lg bg-gray-100 border border-gray-200 hover:bg-gray-200 flex items-center gap-2 text-black"
          @click="goHomeStep">
          <i class="pi pi-home"></i>
          <span class="hidden sm:inline text-sm">Home</span>
        </button>

        <!-- LOGOUT -->
        <button type="button"
          class="px-3 py-2 rounded-lg bg-red-50 border border-red-200 text-red-700 hover:bg-red-100 flex items-center gap-2"
          @click="logout">
          <i class="pi pi-sign-out"></i>
          <span class="hidden sm:inline text-sm">Logout</span>
        </button>
      </div>
    </div>
  </div>

  <!-- OPERATOR -->
  <div v-if="step === 'OPERATOR'" class="h-[calc(100vh-96px)] px-4 flex items-center bg-gray-50">
    <div class="mx-auto w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
      <div class="text-xl font-semibold text-center">Operator Name</div>
      <div class="text-sm text-gray-500 text-center mt-2">Enter your username before starting scanning.</div>

      <div class="mt-6">
        <label class="text-xs text-gray-500">Username</label>
        <input ref="operatorEl" v-model="operatorInput"
          class="mt-2 w-full border border-gray-300 px-4 py-3 rounded-xl outline-none text-center bg-white text-black"
          placeholder="e.g. Ramu" @keydown.enter.prevent="saveOperator" />
      </div>

      <button class="mt-5 w-full rounded-xl bg-gray-900 text-white py-3 text-sm hover:opacity-90" @click="saveOperator">
        Continue
      </button>
    </div>
  </div>

  <!-- MAIN -->
  <div v-else class="text-gray-900 w-full bg-gray-50 min-h-[calc(100vh-64px)]">
    <!-- HOME -->
    <div v-if="step === 'HOME'" class="h-[calc(100vh-96px)] px-4 flex items-center">
      <div class="mx-auto w-full max-w-md sm:max-w-4xl text-center">
        <div class="mb-4 sm:mb-6">
          <div class="font-semibold tracking-wide text-2xl sm:text-2xl md:text-[30px]">
            Inbound Inventory Tracking System
          </div>

          <div class="mt-3 text-sm text-gray-600">
            Operator:
            <span class="font-semibold text-gray-900 ml-1">{{ store.operatorName }}</span>
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

    <!-- NEW PACKAGE -->
    <div v-if="step === 'NEW_PACKAGE'" class="px-4 py-6">
      <div class="mx-auto max-w-lg">
        <div class="flex items-center justify-between gap-3">
          <div class="text-lg font-semibold tracking-wide">New Package</div>

          <div class="shrink-0 text-[10px] border border-gray-200 bg-white px-2 py-1 rounded-lg">
            <span class="text-gray-500">Date</span>
            <span class="font-semibold text-gray-900 ml-1">{{ dateLabel }}</span>
          </div>
        </div>

        <div class="mt-6 bg-white border border-gray-200 rounded-2xl shadow-sm p-5 sm:p-6">
          <div class="grid grid-cols-1 gap-4 md:gap-6 items-end">
            <!-- OUTER -->
            <div class="w-full text-left">
              <div class="text-xs text-gray-500 mb-2">Scan or Type the Outer Box ID</div>

              <div class="relative">
                <input ref="outerEl" v-model="outerBoxInput" :disabled="outerStage !== 'EMPTY' || outerVerified"
                  class="w-full border border-gray-300 px-4 py-3 text-center outline-none rounded-xl bg-white disabled:bg-gray-100 disabled:cursor-not-allowed pr-11"
                  placeholder="Outer Box ID" @keydown.enter.prevent="verifyOuterFirst" />
                <i v-if="outerStage !== 'EMPTY'"
                  class="pi pi-check-circle absolute right-3 top-1/2 -translate-y-1/2 text-green-600" />
              </div>

              <div v-if="outerStage === 'FIRST'" class="text-xs text-blue-600 mt-3 mb-2">
                Confirm Outer Box ID (scan again)
              </div>

              <div v-if="outerStage === 'FIRST'" class="relative">
                <input ref="outerConfirmEl" v-model="outerConfirmInput"
                  :disabled="outerStage !== 'FIRST' || outerVerified"
                  class="w-full border border-gray-300 px-4 py-3 text-center outline-none rounded-xl bg-white disabled:bg-gray-100 disabled:cursor-not-allowed pr-11"
                  placeholder="Confirm Outer Box ID" @keydown.enter.prevent="verifyOuterConfirm" />
              </div>
            </div>

            <!-- INNER -->
            <div class="w-full text-left">
              <div class="text-xs text-gray-500 mb-2">Scan or Type the Inner Box ID</div>

              <div class="relative">
                <input ref="innerEl" v-model="innerBoxInput"
                  :disabled="!outerVerified || innerStage !== 'EMPTY' || innerVerified"
                  class="w-full border border-gray-300 px-4 py-3 text-center outline-none rounded-xl bg-white disabled:bg-gray-100 disabled:cursor-not-allowed pr-11"
                  placeholder="Inner Box ID" @keydown.enter.prevent="verifyInnerFirst" />
                <i v-if="innerStage !== 'EMPTY'"
                  class="pi pi-check-circle absolute right-3 top-1/2 -translate-y-1/2 text-green-600" />
              </div>

              <div v-if="innerStage === 'FIRST'" class="text-xs text-blue-600 mt-3 mb-2">
                Confirm Inner Box ID (scan again)
              </div>

              <div v-if="innerStage === 'FIRST'" class="relative">
                <input ref="innerConfirmEl" v-model="innerConfirmInput"
                  :disabled="innerStage !== 'FIRST' || innerVerified"
                  class="w-full border border-gray-300 px-4 py-3 text-center outline-none rounded-xl bg-white disabled:bg-gray-100 disabled:cursor-not-allowed pr-11"
                  placeholder="Confirm Inner Box ID" @keydown.enter.prevent="verifyInnerConfirm" />
              </div>
            </div>

            <!-- QTY -->
            <div class="w-full text-left">
              <div class="text-xs text-gray-500 mb-2">Product Quantity</div>

              <div class="border border-gray-300 rounded-xl bg-white px-4 py-4">
                <div class="flex items-center justify-between mb-3">
                  <div class="text-sm text-gray-500">Qty</div>

                  <div class="flex items-center gap-2">
                    <div
                      class="min-w-[56px] text-center text-base font-semibold px-3 py-1 rounded-lg bg-gray-50 border border-gray-200"
                      :class="qtyDisabled ? 'opacity-60' : ''">
                      {{ qtyInput }}
                    </div>

                    <i v-if="qtyVerified" class="pi pi-check-circle text-green-600" />
                  </div>
                </div>

                <Slider v-model="qtyInput" :min="0" :max="qtyMax" :step="1" :disabled="qtyDisabled" class="w-full" />

                <div class="flex justify-between text-[11px] text-gray-400 mt-2">
                  <span>0</span>
                  <span>{{ qtyMax }}</span>
                </div>

                <div class="flex items-center justify-between gap-3 mt-4">
                  <Button icon="pi pi-minus" outlined class="w-12 h-12" :disabled="qtyDisabled || qtyInput <= 0"
                    @click="qtyInput = Math.max(0, qtyInput - 1); qtyStage = 'EMPTY'" />

                  <Button label="Confirm Qty" class="flex-1 h-12" :disabled="qtyDisabled" @click="verifyQty" />

                  <Button icon="pi pi-plus" outlined class="w-12 h-12" :disabled="qtyDisabled || qtyInput >= qtyMax"
                    @click="qtyInput = Math.min(qtyMax, qtyInput + 1); qtyStage = 'EMPTY'" />
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row justify-end gap-3 mt-6">
            <button class="w-full sm:w-32 rounded-xl py-3 text-sm text-white"
              :class="outerVerified && innerVerified && qtyVerified ? 'bg-gray-900 hover:opacity-90' : 'bg-gray-400 cursor-not-allowed'"
              :disabled="!(outerVerified && innerVerified && qtyVerified)" @click="onNewPackageNext">
              Start Scan
            </button>

            <button class="w-full sm:w-28 rounded-xl bg-orange-500 text-white py-3 text-sm hover:opacity-90"
              @click="confirmResetCurrentInnerbox">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- SCAN -->
    <div v-if="step === 'SCAN'" class="px-4 py-6 pb-36">
      <div class="mx-auto max-w-5xl">
        <!-- header -->
        <div class="mb-3">
          <div class="flex items-center justify-between gap-2">
            <!-- Outer -->
            <div class="flex items-center gap-2 text-[11px] text-gray-500 min-w-0">
              <span class="shrink-0">OuterBox :</span>
              <span class="font-semibold text-gray-900 truncate text-[12px]">
                {{ outerBoxLabel }}
              </span>
            </div>

            <!-- Inner -->
            <div class="flex items-center gap-2 text-[11px] text-gray-500 min-w-0">
              <span class="shrink-0">InnerBox :</span>
              <span class="font-semibold text-gray-900 truncate text-[12px]">
                {{ store.current.innerBoxId }}
              </span>
            </div>
          </div>
        </div>

        <!-- ✅ mismatch warning -->
        <div v-if="lengthMismatchLocked"
          class="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Serial length mismatch detected. You must <b>Reset Batch</b> to continue.
        </div>

        <div class="mt-6 bg-white border border-gray-200 rounded-2xl shadow-sm p-5 sm:p-6">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <!-- SKU -->
            <div class="md:col-span-4">
              <div class="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                <div class="mt-1 text-base font-semibold" :class="lockedSkuLabel ? 'text-gray-900' : 'text-gray-400'">
                  {{ lockedSkuLabel || 'SKU' }}
                </div>

              </div>
            </div>

            <!-- Serial Numbers -->
            <div class="md:col-span-8">
              <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <!-- Header -->
                <div class="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <div class="text-sm font-semibold text-gray-700">
                    Serial Numbers
                  </div>
                </div>

                <!-- Full-width rows -->
                <div v-if="store.pendingItems.length > 0" class="divide-y divide-gray-200">
                  <div v-for="(item, idx) in store.pendingItems" :key="item.serial"
                    class="w-full px-4 py-4 flex items-center gap-4">
                    <!-- index -->
                    <div class="w-8 text-sm font-semibold text-gray-500">
                      {{ idx + 1 }}
                    </div>

                    <!-- serial -->
                    <div class="flex-1 font-mono text-lg sm:text-xl font-semibold
                 text-gray-900 tracking-wide break-all">
                      {{ item.serial }}
                    </div>
                  </div>
                </div>

                <!-- Empty -->
                <div v-else class="px-4 py-12 text-center text-sm text-gray-400">
                  No items in current batch
                </div>
              </div>
            </div>
          </div>

          <!-- inputs -->
          <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
            <!-- SKU -->
            <div v-if="!isBatchComplete" class="w-full text-left">
              <div class="text-xs text-gray-500 mb-2">
                Product SKU <span class="text-gray-400"></span>
              </div>

              <div class="relative">
                <input ref="skuEl" v-model="skuInput" :disabled="skuDisabled"
                  class="w-full border border-gray-300 px-4 py-4 text-center outline-none text-base rounded-xl bg-white disabled:bg-gray-100 disabled:cursor-not-allowed pr-11"
                  placeholder="Scan/Type SKU" @keydown.enter.prevent="onSkuEnter" />
                <i v-if="skuVerified"
                  class="pi pi-check-circle absolute right-3 top-1/2 -translate-y-1/2 text-green-600" />
              </div>

              <!-- Only show batch-locked message when it's NOT a length mismatch -->
              <div v-if="store.isBatchFull && !lengthMismatchLocked" class="mt-2 text-sm text-orange-600">
                Batch Complete. Please confirm or reset the batch to continue.
              </div>

              <!-- No mismatch message here (top banner already shows it) -->

            </div>

            <!-- SERIAL -->
            <div v-if="!isBatchComplete" class="w-full text-left">
              <div class="text-xs text-gray-500 mb-2">Product Serial Number</div>

              <div class="relative">
                <input ref="serialEl" v-model="serialInput" :disabled="serialDisabled"
                  class="w-full border border-gray-300 px-4 py-4 text-center outline-none text-base rounded-xl bg-white disabled:bg-gray-100 disabled:cursor-not-allowed pr-11"
                  placeholder="Scan/Type Serial" @keydown.enter.prevent="onSerialEnter" />
                <i v-if="!serialDisabled"
                  class="pi pi-check-circle absolute right-3 top-1/2 -translate-y-1/2 text-green-600 opacity-30" />
              </div>
            </div>

            <div class="hidden md:block"></div>
          </div>
        </div>

        <!-- ACTION BUTTONS -->
        <div class="mt-4 flex flex-col gap-3 sm:hidden">
          <div class="grid grid-cols-2 gap-3">
            <button class="rounded-xl py-3 text-sm text-white w-full"
              :class="(store.canConfirmBatch && !lengthMismatchLocked) ? 'bg-gray-900 hover:opacity-90' : 'bg-gray-400 cursor-not-allowed'"
              :disabled="!store.canConfirmBatch || lengthMismatchLocked" @click="onConfirmBatch">
              Confirm Batch
            </button>

            <button class="rounded-xl py-3 text-sm text-white w-full"
              :class="canResetBatchUi ? 'bg-orange-500 hover:opacity-90' : 'bg-gray-300 cursor-not-allowed'"
              :disabled="!canResetBatchUi" @click="onresetBatch">
              Reset Batch
            </button>
          </div>

          <button class="w-full rounded-xl bg-red-600 text-white py-3 text-sm hover:opacity-90 disabled:opacity-50"
            @click="confirmResetAllFromScan">
            Reset All
          </button>
        </div>

        <div class="mt-6 hidden sm:flex w-full items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <button class="rounded-xl py-3 text-sm text-white px-6"
              :class="(store.canConfirmBatch && !lengthMismatchLocked) ? 'bg-gray-900 hover:opacity-90' : 'bg-gray-400 cursor-not-allowed'"
              :disabled="!store.canConfirmBatch || lengthMismatchLocked" @click="onConfirmBatch">
              Confirm Batch
            </button>

            <button class="rounded-xl py-3 text-sm text-white px-6"
              :class="(store.pendingCount > 0 || lengthMismatchLocked) ? 'bg-orange-500 hover:opacity-90' : 'bg-gray-300 cursor-not-allowed'"
              :disabled="store.pendingCount === 0 && !lengthMismatchLocked" @click="onresetBatch">
              Reset Batch
            </button>
          </div>

          <button
            class="rounded-xl bg-blue-600 text-white py-3 text-sm hover:opacity-90 disabled:opacity-50 px-8"
             @click="confirmResetAllFromScan">
            Reset All
          </button>
        </div>
      </div>

      <!-- ✅ Sticky footer stats (Scan page only) -->
      <div
  class="fixed bottom-0 left-0 right-0 z-30 border-t border-gray-200 bg-white transition-transform duration-200"
  :style="{ transform: `translateY(-${footerLift}px)` }"
>

  <div class="mx-auto max-w-5xl px-4 py-3">
    <div class="grid grid-cols-4 gap-3">

      <!-- Current -->
      <div
        class="rounded-xl border bg-blue-50 border-blue-200 px-3 py-2 text-center transition-all duration-300"
      >
        <div class="text-[11px] font-medium text-blue-600 tracking-wide">
          Scanned So Far
        </div>
        <div class="text-lg font-bold text-blue-900">
          {{ footerStats.currentScanned }}
        </div>
      </div>

      <!-- Expected -->
      <div
        class="rounded-xl border bg-purple-50 border-purple-200 px-3 py-2 text-center transition-all duration-300"
      >
        <div class="text-[11px] font-medium text-purple-600 tracking-wide">
          To be Scanned
        </div>
        <div class="text-lg font-bold text-purple-900">
          {{ footerStats.expected }}
        </div>
      </div>

      <!-- InnerBox -->
      <div
        class="rounded-xl border bg-amber-50 border-amber-200 px-3 py-2 text-center transition-all duration-300"
      >
        <div class="text-[11px] font-medium text-amber-600 tracking-wide">
          Innerbox Scanned
        </div>
        <div class="text-lg font-bold text-amber-900">
          {{ footerStats.totalInnerboxes }}
        </div>
      </div>

      <!-- Total -->
      <div
        class="rounded-xl border bg-emerald-50 border-emerald-200 px-3 py-2 text-center transition-all duration-300"
      >
        <div class="text-[11px] font-medium text-emerald-600 tracking-wide">
          Total Scanned
        </div>
        <div class="text-lg font-bold text-emerald-900">
          {{ footerStats.totalItemsAll }}
        </div>
      </div>

    </div>
  </div>
</div>

    </div>

    <Dialog v-model:visible="scanPopupOpen" modal :closable="false" :header="scanPopupTitle" class="w-[95vw] max-w-md">
      <div class="space-y-3">
        <div class="text-sm text-gray-100">
          {{ scanPopupMessage }}
        </div>

        <div class="rounded-lg border border-gray-200 bg-red-500 px-3 py-2">
          <div class="text-[11px] text-gray-100">Scanned</div>
          <div class="font-mono text-base font-semibold text-white break-all">
            {{ scanPopupScannedValue }}
          </div>
        </div>

        <div class="flex gap-2 justify-end pt-2">
          <Button label="Scan Again" icon="pi pi-refresh" class="h-11" @click="scanAgain" />
        </div>
      </div>
    </Dialog>

    <Dialog v-model:visible="qtyReachedOpen" modal :closable="false" header="Quantity Reached"
      class="w-[95vw] max-w-md">
      <div class="space-y-4">
        <div class="text-sm text-gray-100">
          Expected quantity has been fully scanned for this InnerBox.
        </div>

        <div class="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
          <div class="text-[11px] text-gray-500">Scanned</div>
          <div class="text-base font-semibold text-gray-900">
            {{ store.current.items.length }} / {{ store.current.expectedQty }}
          </div>
        </div>

        <div class="flex justify-end pt-2">
          <Button label="Scan Complete" icon="pi pi-check" class="h-11" @click="scanCompleteFromPopup" />
        </div>
      </div>
    </Dialog>



    <!-- CONFIRM -->
    <div v-if="step === 'CONFIRM'" class="px-4 py-4">
      <div class="mx-auto max-w-5xl">
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="text-lg font-semibold">Confirm & Save</div>
          </div>
        </div>

        <div class="mt-4 bg-white border border-gray-200 rounded-2xl shadow-sm p-5 sm:p-6">
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <!-- Outer Box -->
            <div class="bg-gray-50 border border-gray-200 rounded-xl p-3">
              <div class="text-[10px] text-gray-500 uppercase tracking-wide">Outer</div>
              <div class="mt-1 text-sm sm:text-lg font-semibold truncate">
                {{ confirmSummary.outerBoxId }}
              </div>
            </div>

            <!-- Inner Box -->
            <div class="bg-gray-50 border border-gray-200 rounded-xl p-3">
              <div class="text-[10px] text-gray-500 uppercase tracking-wide">Inner</div>
              <div class="mt-1 text-sm sm:text-lg font-semibold truncate">
                {{ confirmSummary.innerBoxId }}
              </div>
            </div>
          </div>


          <div class="mt-6">
            <div class="text-sm font-semibold">Scanned Items</div>
            <div class="text-xs text-gray-500 mt-1">SKU & Serial numbers saved for this InnerBox.</div>

            <div class="mt-4 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              <!-- SKU -->
              <div class="md:col-span-4">
                <div class="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                  <div class="text-xs text-gray-500">SKU</div>
                  <div class="mt-1 text-base font-semibold text-gray-900">
                    {{ lockedSkuLabel || store.current.items?.[0]?.sku || '—' }}
                  </div>
                </div>
              </div>

              <!-- Serial Numbers -->
              <div class="md:col-span-8">
                <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
                  <!-- Header -->
                  <div class="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                    <div class="text-sm font-semibold text-gray-700">Serial Numbers</div>
                    <div class="text-xs text-gray-500">
                      {{ store.current.items.length }} total
                    </div>
                  </div>

                  <!-- Full-width rows -->
                  <div v-if="store.current.items.length > 0" class="divide-y divide-gray-200">
                    <div v-for="(item, idx) in store.current.items" :key="item.serial"
                      class="w-full px-4 py-4 flex items-center gap-4">
                      <!-- index -->
                      <div class="w-8 text-sm font-semibold text-gray-500">
                        {{ idx + 1 }}
                      </div>

                      <!-- serial -->
                      <div
                        class="flex-1 font-mono text-lg sm:text-xl font-semibold text-gray-900 tracking-wide break-all">
                        {{ item.serial }}
                      </div>
                    </div>
                  </div>

                  <!-- Empty -->
                  <div v-else class="px-4 py-12 text-center text-sm text-gray-400">
                    No scanned items
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mt-6">
            <button class="w-full sm:w-28 rounded-xl bg-orange-500 text-white py-3 text-sm hover:opacity-90"
              @click="confirmResetCurrentInnerbox">
              Reset
            </button>

            <button class="w-full sm:w-44 rounded-xl bg-gray-900 text-white py-3 text-sm hover:opacity-90"
              @click="confirmAndNextInnerbox">
              Confirm & Next InnerBox
            </button>

            <button class="w-full sm:w-28 rounded-xl border border-gray-300 bg-white py-3 text-sm hover:bg-gray-50"
              @click="goHomeStep">
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
