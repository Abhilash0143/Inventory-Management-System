// src/api/http.ts
import axios from "axios";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "../stores/auth";

// ✅ Use your backend LAN IP
const API_BASE = "/api";

export const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // ✅ required for refresh-token cookie
});

// =====================================================
// ✅ JWT: attach access token + auto refresh on 401
// =====================================================
let isRefreshing = false;
let waiters: Array<(token: string) => void> = [];
let rejecters: Array<(err: any) => void> = [];

function enqueue(resolve: (t: string) => void, reject: (e: any) => void) {
  waiters.push(resolve);
  rejecters.push(reject);
}

function resolveQueue(token: string) {
  waiters.forEach((fn) => fn(token));
  waiters = [];
  rejecters = [];
}

function rejectQueue(err: any) {
  rejecters.forEach((fn) => fn(err));
  waiters = [];
  rejecters = [];
}

async function refreshAccessToken(): Promise<{ accessToken: string; user?: any }> {
  const res = await api.post("/auth/refresh", {},
    {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    }
  );
  return res.data;
}

type RetryConfig = InternalAxiosRequestConfig & { _retry?: boolean };

// Attach Authorization header
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const auth = useAuthStore();
  const url = String(config.url || "");

  const isAuthRoute =
    url.includes("/auth/login") ||
    url.includes("/auth/signup") ||
    url.includes("/auth/refresh") ||
    url.includes("/auth/logout");

  if (!isAuthRoute && auth.accessToken) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${auth.accessToken}`;
  }

  return config;
});

// Refresh on 401 and retry
api.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const auth = useAuthStore();

    // network error / CORS error
    if (!error.response) throw error;

    const original = error.config as RetryConfig | undefined;
    const status = error.response.status;

    if (!original) throw error;

    const url = String(original.url || "");
    const isAuthRoute =
      url.includes("/auth/login") ||
      url.includes("/auth/signup") ||
      url.includes("/auth/refresh") ||
      url.includes("/auth/logout");

    // Don't try to refresh if auth routes themselves fail
    if (isAuthRoute) throw error;

    // Only handle 401
    if (status !== 401) throw error;

    // prevent infinite loops
    if (original._retry) {
      auth.clear();
      throw error;
    }
    original._retry = true;

    // if refresh already in progress, queue this request
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        enqueue(
          (token) => {
            original.headers = original.headers || {};
            (original.headers as any).Authorization = `Bearer ${token}`;
            resolve(api(original));
          },
          (err) => reject(err)
        );
      });
    }

    // start refresh
    isRefreshing = true;

    try {
      const data = await refreshAccessToken();
      const newToken = data?.accessToken;
      if (!newToken) throw new Error("No accessToken from refresh");

      auth.setSession(newToken, data.user);

      // retry queued requests
      resolveQueue(newToken);

      // retry current request
      original.headers = original.headers || {};
      (original.headers as any).Authorization = `Bearer ${newToken}`;
      return await api(original);
    } catch (e) {
      rejectQueue(e);
      auth.clear();
      throw e;
    } finally {
      isRefreshing = false;
    }
  }
);
