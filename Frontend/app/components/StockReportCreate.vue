<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useStockCount } from "@/composables/useStockCount";

const api = useStockCount();
const emit = defineEmits(["created"]);

const loading = ref(false);
const err = ref<string | null>(null);

const reports = ref<any[]>([]);
const checking = ref(true);

// ----------------------------
// Helpers
// ----------------------------
function normalizeListResponse(res: any) {
  if (Array.isArray(res)) return res;
  if (Array.isArray(res?.reports)) return res.reports;
  if (Array.isArray(res?.data)) return res.data;
  return [];
}

function todayBaseName() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `stock-report-${yyyy}-${mm}-${dd}`;
}

function normalizeName(s: any) {
  return String(s || "").trim().toLowerCase();
}

// ✅ find next available name: base, base-1, base-2 ...
function nextAvailableName(list: any[]) {
  const base = todayBaseName();
  const existing = new Set((list || []).map((r: any) => normalizeName(r?.name)));

  if (!existing.has(normalizeName(base))) return base;

  let i = 1;
  while (existing.has(normalizeName(`${base}-${i}`))) i++;
  return `${base}-${i}`;
}

// ----------------------------
// Block creation if any report is not confirmed
// ----------------------------
const creationBlocked = computed(() => {
  return (reports.value || []).some((r: any) => {
    const s = String(r?.status || "").toLowerCase().replace(/\s+/g, "");
    return s !== "confirmed"; // blocks Pending + InProgress + NotStarted etc
  });
});

// ✅ Auto name (computed from reports)
const autoName = computed(() => nextAvailableName(reports.value));

// ----------------------------
// Load reports on mount
// ----------------------------
async function loadReports() {
  checking.value = true;
  try {
    const res = await api.listReports();
    reports.value = normalizeListResponse(res);
  } catch (e: any) {
    // optional: keep silent
  } finally {
    checking.value = false;
  }
}

onMounted(loadReports);

// ----------------------------
// Create Report
// ----------------------------
async function create() {
  err.value = null;

  if (creationBlocked.value) {
    err.value =
      "A report is already pending or in progress. Complete it before creating a new one.";
    return;
  }

  const n = autoName.value; // ✅ always auto-generated

  loading.value = true;
  try {
    await api.createReport({ name: n });

    emit("created");

    // refresh list after creation (so next name becomes -1/-2 etc)
    await loadReports();
  } catch (e: any) {
    const msg =
      e?.response?.data?.message ||
      e?.response?.data?.error ||
      e?.message ||
      "Failed to create report";

    err.value = msg;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="max-w-md mx-auto px-4 py-4 text-black">
    <div class="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
      <div class="text-sm font-semibold text-gray-900">
        Create Stock Report
      </div>

      <div class="mt-3 space-y-2">
        <!-- ✅ Readonly Input (user cannot type) -->
        <input
          :value="autoName"
          readonly
          class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm
                 focus:outline-none focus:ring-2 focus:ring-gray-300
                 cursor-not-allowed"
          placeholder="Report name"
        />

        <!-- Button -->
        <button
          class="w-full h-11 rounded-xl bg-gray-900 text-white text-sm font-semibold
                 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="loading || checking || creationBlocked"
          @click="create"
        >
          {{ loading ? "Creating..." : "Create" }}
        </button>

        <!-- Block reason -->
        <div
          v-if="creationBlocked"
          class="text-xs text-gray-600"
        >
          A report is still pending/in progress. Finish it to create a new report.
        </div>

        <!-- Error -->
        <div v-if="err" class="text-sm text-red-600">
          {{ err }}
        </div>
      </div>
    </div>
  </div>
</template>
