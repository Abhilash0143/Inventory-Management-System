<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStockCount } from "@/composables/useStockCount";

const route = useRoute();
const router = useRouter();
const api = useStockCount();

const reportId = computed(() => String(route.params.reportId || ""));
const returnTo = computed(() => String(route.query.returnTo || ""));

const scan1 = ref("");
const scan2 = ref("");
const comment = ref("");

const busy = ref(false);
const err = ref<string | null>(null);
const reportName = ref("Loading...");

function normBox(v: string) {
  return String(v || "").trim().toUpperCase();
}

function goBack() {
  if (returnTo.value === "phase2") {
    router.push(`/stock-count/${reportId.value}/phase2`);
  } else {
    router.push(`/stock-count`);
  }
}

async function submitReset() {
  err.value = null;

  const b1 = normBox(scan1.value);
  const b2 = normBox(scan2.value);
  const c = String(comment.value || "").trim();

  if (!b1) return (err.value = "Scan Box ID first time");
  if (!b2) return (err.value = "Scan Box ID second time");
  if (b1 !== b2) return (err.value = "Box IDs do not match!");
  if (!c) return (err.value = "Comment required");

  // ✅ Confirm popup
  const ok = window.confirm(`Reset box ${b1}? This will delete Phase 2 lines.`);
  if (!ok) return;

  busy.value = true;
  try {
    await api.resetPhase2Box(reportId.value, { boxId: b1, comment: c });
    goBack();
  } catch (e: any) {
    err.value =
      e?.response?.data?.message ||
      "Box not found in Phase 2";
  } finally {
    busy.value = false;
  }
}
import { onMounted } from "vue";

onMounted(async () => {
  try {
    const rep = await api.getReport(reportId.value);
    reportName.value = rep?.name || "Stock Count Report";
  } catch {
    reportName.value = "Stock Count Report";
  }
});

</script>

<template>
  <div class="min-h-[100dvh] bg-gray-50 text-black">
    <div class="max-w-md mx-auto px-4 py-6 space-y-5">

      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <div class="text-lg font-semibold">Reset Phase 2 Box</div>
          <div class="text-xs text-gray-500">
  Report: <span class="font-semibold">{{ reportName }}</span>
</div>

        </div>

        <button
          class="h-10 px-4 rounded-2xl bg-white border border-gray-200 text-sm font-semibold"
          @click="goBack"
        >
          Back
        </button>
      </div>

      <!-- Scan Input 1 -->
      <div>
        <div class="text-sm text-gray-700 mb-1">Scan Box ID (1st time)</div>
        <input
          v-model="scan1"
          class="w-full h-12 px-4 rounded-2xl border border-gray-300 bg-white outline-none"
          placeholder="Scan Box ID"
        />
      </div>

      <!-- Scan Input 2 -->
      <div>
        <div class="text-sm text-gray-700 mb-1">Scan Box ID (2nd time)</div>
        <input
          v-model="scan2"
          class="w-full h-12 px-4 rounded-2xl border border-gray-300 bg-white outline-none"
          placeholder="Scan again"
        />
      </div>

      <!-- Comment -->
      <div>
        <div class="text-sm text-gray-700 mb-1">Comment (required)</div>
        <textarea
          v-model="comment"
          class="w-full min-h-[100px] rounded-2xl border border-gray-300 p-3 bg-white outline-none"
          placeholder="Why are you resetting this box?"
        />
      </div>

      <!-- Error -->
      <div v-if="err" class="text-sm text-red-600 font-medium">
        {{ err }}
      </div>

      <!-- Reset Button -->
      <button
        class="w-full h-12 rounded-2xl bg-red-600 text-white font-semibold disabled:opacity-60"
        :disabled="busy"
        @click="submitReset"
      >
        {{ busy ? "Resetting..." : "Reset Box" }}
      </button>
    </div>
  </div>
</template>
