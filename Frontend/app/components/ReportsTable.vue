<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStockCount } from "@/composables/useStockCount";
import { useConfirm } from "primevue/useconfirm";

const props = defineProps<{ reports: any[]; loading: boolean }>();
const api = useStockCount();
const router = useRouter();
const confirm = useConfirm();

const goLoading = ref<string | null>(null);

// ✅ Status badge styling (unchanged)
function displayStatus(status: any) {
  const s = String(status || "").toLowerCase();
  if (s.includes("confirm")) return "Completed";  // only after confirm
  if (s.includes("pending")) return "Pending";
  return "In Progress"; // includes InProgress
}

function statusClass(status: any) {
  const s = String(status || "").toLowerCase();
  if (s.includes("confirm")) return "bg-green-50 text-green-700 border-green-200";
  if (s.includes("pending")) return "bg-gray-50 text-gray-600 border-gray-200";
  return "bg-orange-50 text-orange-700 border-orange-200";
}

function isConfirmed(status: any) {
  return String(status || "").toLowerCase().includes("confirm");
}


function norm(s: any) {
  return String(s || "").toLowerCase().replace(/\s+/g, "");
}
function isP1Completed(rep: any) {
  const p1 = rep?.phase1Status ?? rep?.phase1_status ?? rep?.p1Status ?? rep?.p1_status;
  const v = norm(p1);
  return v.includes("complete") || v.includes("done") || v.includes("completed");
}

/**
 * Continue button flow:
 * - Fetch report (api.getReport) to know nextRoute + status info
 * - Show confirm dialog with correct message
 * - On accept -> router.push(nextRoute)
 */
async function continueReport(r: any) {
  const id = String(r?.id ?? "");
  if (!id) return;
  if (isConfirmed(r?.status)) return;

  goLoading.value = id;
  try {
    const rep = await api.getReport(id);

    const nextRoute = String(rep?.nextRoute || "");
    if (!nextRoute) return;

    const phase = rep?.phase ?? r?.phase; // prefer rep, fallback list item

    let message = "Do you want to continue?";
    if (String(phase) === "1") {
      message = "Phase 1 is in progress. Please continue to Phase 1.";
    } else if (String(phase) === "2") {
      message = "Phase 1 is done. Do you want to continue with Phase 2?";
    } else if (String(phase).toLowerCase() === "summary") {
      message = "All counting is done. Please review and confirm to finish this report.";
    }


    confirm.require({
      header: "Continue?",
      message,
      icon: "pi pi-question-circle",
      acceptLabel: "Continue",
      rejectLabel: "Cancel",
      acceptClass: "p-button-primary",
      rejectClass: "p-button-secondary",
      accept: async () => {
        await router.push(nextRoute);
      },
    });
  } finally {
    goLoading.value = null;
  }
}

async function downloadReport(r: any) {
  const id = String(r?.id ?? "");
  if (!id) return;

  goLoading.value = id;
  try {
    const blob = await api.downloadReportXlsx(id);
    const name = `${String(r?.name || "stockcount")}-${id}.xlsx`;

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  } finally {
    goLoading.value = null;
  }
}


</script>

<template>
  <div class="max-w-md mx-auto px-4 py-4">
    <!-- Loading -->
    <div v-if="loading" class="space-y-3">
      <div v-for="i in 3" :key="i" class="h-16 rounded-xl bg-white border border-gray-200 animate-pulse" />
    </div>

    <!-- Empty -->
    <div v-else-if="!reports?.length"
      class="p-4 rounded-xl bg-white border border-gray-200 text-center text-sm text-gray-600">
      No reports
    </div>

    <!-- Reports List -->
    <div v-else class="space-y-3">
      <div v-for="r in reports" :key="r.id"
        class="flex items-center justify-between gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
        <!-- Name + Status -->
        <div class="min-w-0">
          <div class="text-sm font-semibold text-gray-900 truncate">
            {{ r.name || "Untitled" }}
          </div>

          <span class="inline-flex mt-1 px-2.5 py-1 rounded-full border text-xs font-medium"
            :class="statusClass(r.status)">
            {{ displayStatus(r.status) }}
          </span>
        </div>

        <!-- Continue hidden if Confirmed -->
        <button v-if="!isConfirmed(r.status)"
          class="shrink-0 h-9 px-4 rounded-lg bg-gray-900 text-white text-sm font-medium disabled:opacity-60"
          @click="continueReport(r)" :disabled="goLoading === String(r.id)">
          <span v-if="goLoading === String(r.id)">...</span>
          <span v-else>Continue</span>
        </button>

        <button v-if="isConfirmed(r.status)" class="shrink-0 h-9 px-4 rounded-lg bg-white border border-gray-300 text-gray-900
         text-sm font-medium disabled:opacity-60" @click="downloadReport(r)" :disabled="goLoading === String(r.id)">
          <span v-if="goLoading === String(r.id)">...</span>
          <span v-else>Download</span>
        </button>

      </div>
    </div>
  </div>
</template>
