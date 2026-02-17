import { useAuthStore } from "../stores/auth";

export default defineNuxtRouteMiddleware(async (to) => {
  const auth = useAuthStore();

  // allow login
  if (to.path === "/login") return;

  // hydrate from localStorage (client only)
  if (import.meta.client && !auth.accessToken) {
    auth.loadFromStorage();
  }

  // already logged in
  if (auth.accessToken) return;

  // try refresh once
  try {
    const { api } = await import("../composables/useHttp");
    const r = await api.post("/auth/refresh");
    auth.setSession(r.data.accessToken, r.data.user);
    return;
  } catch {
    return navigateTo("/login");
  }
});
