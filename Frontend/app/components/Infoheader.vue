<template>
  <div class="sticky top-0 z-20 bg-white border-b border-gray-200">
    <div
      class="mx-auto max-w-6xl px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between gap-3"
    >
      <div class="min-w-0 flex flex-col leading-tight">
        <div class="font-semibold text-gray-900 text-sm sm:text-base whitespace-nowrap">
          {{ title }}
        </div>

        <!-- <div v-if="operatorName" class="text-[11px] sm:text-xs text-gray-500 truncate">
          Operator:
          <span class="font-semibold text-gray-800 ml-1">{{ operatorName }}</span>
        </div> -->
      </div>

      <div v-if="operatorName" class="flex items-center gap-2 flex-shrink-0">
        <!-- HOME -->
        <button
          type="button"
          class="px-3 py-2 rounded-lg bg-gray-100 border border-gray-200 hover:bg-gray-200 flex items-center gap-2 text-black"
          @click="$emit('home')"
        >
          <i class="pi pi-home"></i>
          <span class="hidden sm:inline text-sm">Home</span>
        </button>

        <!-- LOGOUT -->
        <button
          type="button"
          class="px-3 py-2 rounded-lg bg-red-50 border border-red-200 text-red-700 hover:bg-red-100 flex items-center gap-2"
          @click="$emit('logout')"
        >
          <i class="pi pi-sign-out"></i>
          <span class="hidden sm:inline text-sm">Logout</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  operatorName?: string;
  title?: string;
}>();

defineEmits<{
  (e: "home"): void;
  (e: "logout"): void;
}>();
</script>
