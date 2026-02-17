<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Top Bar (optional) -->
    <div class="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div class="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div class="min-w-0">
          <div class="text-base font-semibold text-gray-900">Dashboard</div>
          <div class="text-xs text-gray-500">Choose a module to continue</div>
        </div>

        <div class="flex items-center gap-2">
          <button v-if="isLoggedIn" type="button"
            class="px-3 py-2 rounded-lg bg-red-50 border border-red-200 text-red-700 hover:bg-red-100 flex items-center gap-2"
            @click="logout">
            <i class="pi pi-sign-out"></i>
            <span class="hidden sm:inline text-sm">Logout</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="mx-auto max-w-6xl px-4 py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <button v-for="item in modules" :key="item.key" type="button"
          class="group text-left p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition"
          @click="go(item.to)">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 border border-gray-200">
                  <i :class="item.icon" class="text-gray-700"></i>
                </span>
                <div class="text-sm font-semibold text-gray-900 truncate">
                  {{ item.title }}
                </div>
              </div>

              <div class="mt-3 text-xs text-gray-600 leading-relaxed">
                {{ item.description }}
              </div>
            </div>

            <div class="text-gray-400 group-hover:text-gray-600 transition">
              <i class="pi pi-angle-right text-lg"></i>
            </div>
          </div>

          <div class="mt-4 flex items-center gap-2">
            <span class="text-[11px] px-2 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600">
              {{ item.tag }}
            </span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const router = useRouter();
const auth = useAuthStore();

const isLoggedIn = computed(() => !!auth.accessToken);

// ✅ Add more modules later by adding objects here
const modules = [
  {
    key: "inbound",
    title: "Inbound Inventory",
    description: "Scan and verify inbound boxes, manage sessions, and complete inbound workflows.",
    to: "/",
    icon: "pi pi-inbox",
    tag: "Operations",
  },
  {
    key: "stockcount",
    title: "Stock Count",
    description: "Create reports, scan boxes in Phase 1, count SKUs in Phase 2, and confirm summaries.",
    to: "/stock-count",
    icon: "pi pi-list-check",
    tag: "Audit",
  },
] as const;

function go(path: string) {
  router.push(path);
}

async function logout() {
  if (typeof (auth as any).logout === "function") {
    await (auth as any).logout();
  } else if (typeof (auth as any).clear === "function") {
    (auth as any).clear();
  } else {
    (auth as any).accessToken = "";
    (auth as any).user = null;
  }
  router.push("/login");
}
</script>
