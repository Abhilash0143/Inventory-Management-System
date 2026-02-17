<!-- app/pages/login.vue -->
<script setup lang="ts">
import { ref } from "vue";
import { loginOperator, signupOperator } from "../composables/useAuth";
import { useAuthStore } from "../stores/auth";

definePageMeta({ layout: false });

const router = useRouter();
const auth = useAuthStore();

const tab = ref<"login" | "signup">("login");

const loginName = ref("");
const loginPassword = ref("");

const signupName = ref("");
const signupPassword = ref("");
const signupConfirmPassword = ref("");

const loading = ref(false);

// ✅ super-light toast (no PrimeVue)
type ToastType = "success" | "warn" | "error";
type ToastItem = { id: number; type: ToastType; title: string; message: string };
const toasts = ref<ToastItem[]>([]);
let toastId = 0;

function toast(type: ToastType, title: string, message: string, life = 2200) {
  const id = ++toastId;
  toasts.value.push({ id, type, title, message });
  window.setTimeout(() => {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  }, life);
}

function errMsg(e: any) {
  return e?.response?.data?.error || "Something went wrong";
}

async function doLogin() {
  const name = loginName.value.trim();
  const password = loginPassword.value;

  if (!name) return toast("warn", "Missing", "Enter username");
  if (!password) return toast("warn", "Missing", "Enter password");

  loading.value = true;
  try {
    const r = await loginOperator({ name, password });
    auth.setSession(r.data.accessToken, r.data.user);
    toast("success", "Welcome", "Login successful", 1200);
    router.push("/home");
  } catch (e: any) {
    toast("error", "Login failed", errMsg(e), 2600);
  } finally {
    loading.value = false;
  }
}

async function doSignup() {
  const name = signupName.value.trim();
  const password = signupPassword.value;
  const confirm = signupConfirmPassword.value;

  if (!name) return toast("warn", "Missing", "Enter username");
  if (!password || password.length < 6) return toast("warn", "Invalid", "Password must be at least 6 characters");
  if (password !== confirm) return toast("warn", "Mismatch", "Password confirmation does not match");

  loading.value = true;
  try {
    await signupOperator({ name, password });
    toast("success", "Created", "Account created. Now login.", 2000);

    tab.value = "login";
    loginName.value = name;
    loginPassword.value = "";
    signupPassword.value = "";
    signupConfirmPassword.value = "";
  } catch (e: any) {
    toast("error", "Signup failed", errMsg(e), 2600);
  } finally {
    loading.value = false;
  }
}

// ✅ Zoho login URL (backend should redirect to Zoho OAuth)
const ZOHO_AUTH_URL = "http://192.168.50.16:4000/api/auth/zoho";

// Optional: simple color helper
function toastClasses(type: ToastType) {
  if (type === "success") return "border-green-200 bg-green-50 text-green-900";
  if (type === "warn") return "border-yellow-200 bg-yellow-50 text-yellow-900";
  return "border-red-200 bg-red-50 text-red-900";
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <!-- Toasts -->
    <div class="fixed top-4 right-4 z-50 space-y-2 w-[92vw] max-w-sm">
      <div
        v-for="t in toasts"
        :key="t.id"
        class="rounded-xl border px-4 py-3 shadow-sm"
        :class="toastClasses(t.type)"
      >
        <div class="font-semibold text-sm">{{ t.title }}</div>
        <div class="text-sm opacity-90 mt-0.5">{{ t.message }}</div>
      </div>
    </div>

    <div class="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
      <div class="text-center">
        <div class="text-sm text-gray-500 mt-1">Login to continue</div>
      </div>

      <!-- Zoho (optional)
      <a
        :href="ZOHO_AUTH_URL"
        class="mt-6 w-full h-12 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 active:scale-[0.99] transition flex items-center justify-center gap-3 font-semibold"
      >
        <span class="items-center justify-center w-14 h-10 rounded-lg text-white font-extrabold p-1">
          <img src="/zoho-logo-512.png" alt="Zoho" />
        </span>
      </a>
      -->

      <div class="my-5 flex items-center gap-3">
        <div class="h-px bg-gray-200 flex-1"></div>
        <div class="text-xs text-gray-400">OR</div>
        <div class="h-px bg-gray-200 flex-1"></div>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <button
          class="h-11 rounded-xl border text-sm font-semibold"
          :class="tab === 'login' ? 'bg-blue-500 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-200'"
          @click="tab = 'login'"
        >
          Login
        </button>
        <button
          class="h-11 rounded-xl border text-sm font-semibold"
          :class="tab === 'signup' ? 'bg-blue-500 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-200'"
          @click="tab = 'signup'"
        >
          Signup
        </button>
      </div>

      <!-- LOGIN -->
      <div v-if="tab === 'login'" class="mt-6 space-y-4">
        <div>
          <label class="text-xs text-gray-500">Username</label>
          <input
            v-model="loginName"
            class="mt-2 w-full border border-gray-300 px-4 py-3 rounded-xl text-center bg-white text-black"
            placeholder="e.g. ramu"
            @keydown.enter.prevent="doLogin"
          />
        </div>

        <div>
          <label class="text-xs text-gray-500">Password</label>
          <input
            v-model="loginPassword"
            type="password"
            class="mt-2 w-full border border-gray-300 px-4 py-3 rounded-xl text-center bg-white text-black"
            placeholder="••••••"
            @keydown.enter.prevent="doLogin"
          />
        </div>

        <button
          class="w-full h-12 rounded-xl bg-green-600 text-white font-semibold hover:opacity-90 disabled:opacity-50"
          :disabled="loading"
          @click="doLogin"
        >
          {{ loading ? "Logging in..." : "Login" }}
        </button>
      </div>

      <!-- SIGNUP -->
      <div v-else class="mt-6 space-y-4">
        <div>
          <label class="text-xs text-gray-500">Username</label>
          <input
            v-model="signupName"
            class="mt-2 w-full border border-gray-300 px-4 py-3 rounded-xl text-center bg-white text-black"
            placeholder="Create username"
          />
        </div>

        <div>
          <label class="text-xs text-gray-500">Create Password</label>
          <input
            v-model="signupPassword"
            type="password"
            class="mt-2 w-full border border-gray-300 px-4 py-3 rounded-xl text-center bg-white text-black"
            placeholder="Minimum 6 characters"
          />
        </div>

        <div>
          <label class="text-xs text-gray-500">Confirm Password</label>
          <input
            v-model="signupConfirmPassword"
            type="password"
            class="mt-2 w-full border border-gray-300 px-4 py-3 rounded-xl text-center bg-white text-black"
            placeholder="Repeat password"
            @keydown.enter.prevent="doSignup"
          />
        </div>

        <button
          class="w-full h-12 rounded-xl bg-gray-900 text-white font-semibold hover:opacity-90 disabled:opacity-50"
          :disabled="loading"
          @click="doSignup"
        >
          {{ loading ? "Creating..." : "Create Account" }}
        </button>

        <div class="text-xs text-gray-400 text-center">
          After signup, switch to Login tab and login with your password.
        </div>
      </div>
    </div>
  </div>
</template>
