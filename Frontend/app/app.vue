<template>
   <div class="h-[100dvh] overflow-hidden bg-gray-100">
    <Toast position="top-right" />
    <ConfirmDialog />

    <!-- ✅ Show global header unless the route wants it hidden -->
    <!-- <Header v-if="!hideHeader" /> -->

    <NuxtLayout>
    <NuxtPage :key="route.fullPath" />
  </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import Toast from "primevue/toast";
import ConfirmDialog from "primevue/confirmdialog";
import Header from "./components/header.vue";
import { useHead, useRoute, computed } from "#imports";

const route = useRoute();
const hideHeader = computed(() => Boolean(route.meta?.hideHeader));

useHead({
  link: [{ rel: "manifest", href: "/manifest.json" }],
  meta: [
    { name: "theme-color", content: "#111827" },

    // Android fullscreen support
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-capable", content: "yes" },

    // Status bar color (Android)
    { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" }
  ],
});
</script>
