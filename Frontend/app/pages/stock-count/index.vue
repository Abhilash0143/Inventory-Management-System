<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";

import StockReportCreate from "@/components/StockReportCreate.vue";
import ReportsTable from "@/components/ReportsTable.vue";
import { useStockCount } from "@/composables/useStockCount";

const router = useRouter();
const api = useStockCount();

const reports = ref<any[]>([]);
const loading = ref(false);

const resetDialogVisible = ref(false);
const selectedResetReportId = ref<string | null>(null);

const resetReportOptions = computed(() =>
  (reports.value || []).map((r: any) => ({
    label: r?.name || `Report ${r?.id}`,
    value: String(r?.id),
  }))
);

function openResetDialog() {
  selectedResetReportId.value =
    resetReportOptions.value?.[0]?.value || null;
  resetDialogVisible.value = true;
}

function goResetPage() {
  const id = String(selectedResetReportId.value || "");
  if (!id) return;
  resetDialogVisible.value = false;
  router.push(`/stock-count/${id}/reset-box?returnTo=index`);
}

async function load() {
  loading.value = true;
  try {
    reports.value = await api.listReports();
  } finally {
    loading.value = false;
  }
}

onMounted(load);
</script>


<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-4xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
  <h1 class="text-xl font-semibold text-gray-900">Stock Count</h1>

  <button
    class="h-10 px-4 rounded-xl bg-white border border-gray-300 text-gray-900 text-sm font-semibold shadow-sm"
    @click="openResetDialog"
    :disabled="loading || !reports.length"
  >
    Reset Box
  </button>
</div>


      </div>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto px-4 py-6 space-y-6">
      <StockReportCreate @created="load" />
      <ReportsTable :reports="reports" :loading="loading" />
      <Dialog
  v-model:visible="resetDialogVisible"
  modal
  header="Reset Box"
  :style="{ width: 'min(92vw, 420px)' }"
  :breakpoints="{ '640px': '92vw' }"
>
  <div class="space-y-3">
    <div class="text-sm text-gray-700">
      Select report to reset a box.
    </div>

    <Dropdown
      v-model="selectedResetReportId"
      :options="resetReportOptions"
      optionLabel="label"
      optionValue="value"
      placeholder="Select report"
      class="w-full"
    />
  </div>

  <template #footer>
    <div class="flex items-center justify-end gap-2">
      <Button label="Cancel" class="p-button-text" @click="resetDialogVisible = false" />
      <Button label="Continue" class="p-button-danger" :disabled="!selectedResetReportId" @click="goResetPage" />
    </div>
  </template>
</Dialog>

    </div>
  </div>
</template>

