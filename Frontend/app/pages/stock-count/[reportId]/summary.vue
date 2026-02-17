<script setup lang="ts">
import FinalSummary from "@/components/FinalSummary.vue";
import { useRoute } from "vue-router";
import { useStockCount } from "@/composables/useStockCount";

const route = useRoute();
const reportId = computed(() => String(route.params.reportId));
const api = useStockCount();

const loading = ref(false);
const summary = ref<any>(null);

async function load() {
  loading.value = true;
  try {
    summary.value = await api.getSummary(reportId.value);
  } finally {
    loading.value = false;
  }
}

onMounted(load);
</script>

<template>
  <div class="p-4 space-y-4">
    <div class="flex items-center justify-between">
      <NuxtLink to="/stock-count" class="underline text-black">Back</NuxtLink>
    </div>

    <div v-if="loading">Loading...</div>
    <FinalSummary v-else :reportId="reportId" :summary="summary" @refresh="load" />
  </div>
</template>
