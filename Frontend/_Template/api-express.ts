// src/api/api-express.ts
import axios from "axios";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "../app/stores/auth"; // ✅ adjust if your path differs

// ✅ Use your backend LAN IP (same as you already use)
const API_BASE = "http://192.168.50.60:4000/api";

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
  const res = await axios.post(
    `${API_BASE}/auth/refresh`,
    {},
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

    // ✅ network error / CORS error
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


// =====================================================
// ✅ Types + API functions (your existing functions)
// =====================================================
// AUTH


export async function signupOperator(payload: { name: string; password: string }) {
  return api.post("/auth/signup", payload);
}

export type ClaimSessionPayload = {
  outerBoxId: string;
  innerBoxId: string;
  expectedQty: number;
  packedBy: string;
};

export async function claimSession(payload: ClaimSessionPayload) {
  return api.post("/inbounds/sessions/claim", payload);
}

export async function heartbeat(sessionId: number, packedBy: string) {
  return api.post(`/inbounds/sessions/${sessionId}/heartbeat`, { packedBy });
}

export type CreateInboundItemPayload = {
  sessionId: number;
  sku: string;
  serialNumber: string;
  packedBy: string;
};

export async function createInboundItem(payload: CreateInboundItemPayload) {
  return api.post("/inbounds/items", payload);
}

export async function completeSession(sessionId: number, packedBy: string) {
  return api.post(`/inbounds/sessions/${sessionId}/complete`, { packedBy });
}

export async function abandonSession(sessionId: number, packedBy: string) {
  return api.post(`/inbounds/sessions/${sessionId}/abandon`, { packedBy });
}

export async function resetSession(sessionId: number, packedBy: string) {
  return api.post(`/inbounds/sessions/${sessionId}/reset`, { packedBy });
}

export async function validateSku(sessionId: number, sku: string, packedBy: string) {
  return api.post(`/inbounds/sessions/${sessionId}/validate-sku`, { sku, packedBy });
}

// =====================================================
// ✅ Auth helpers (NEW)
// =====================================================
export async function loginOperator(payload: { name: string; password: string }) {
  return api.post("/auth/login", payload);
}

export async function logoutOperator() {
  return api.post("/auth/logout");
}

// =====================================================
// ✅ Admin endpoints (unchanged - still use x-admin-password)
// NOTE: if you want, you can also protect these with JWT later.
// =====================================================
export async function adminListSessions(adminPassword: string) {
  return api.get("/admin/inbounds/sessions", {
    headers: { "x-admin-password": adminPassword },
  });
}

export async function adminGetSession(adminPassword: string, sessionId: number) {
  return api.get(`/admin/inbounds/sessions/${sessionId}`, {
    headers: { "x-admin-password": adminPassword },
  });
}

export async function adminUpdateSession(
  adminPassword: string,
  sessionId: number,
  payload: { expectedQty?: number; clearLockedSku?: boolean }
) {
  return api.patch(`/admin/inbounds/sessions/${sessionId}`, payload, {
    headers: { "x-admin-password": adminPassword },
  });
}

export async function adminDeleteItem(adminPassword: string, itemId: number) {
  return api.delete(`/admin/inbounds/items/${itemId}`, {
    headers: { "x-admin-password": adminPassword },
  });
}

export async function adminUpdateItem(
  adminPassword: string,
  itemId: number,
  payload: { sku?: string; serialNumber?: string }
) {
  return api.patch(`/admin/inbounds/items/${itemId}`, payload, {
    headers: { "x-admin-password": adminPassword },
  });
}

export function adminDeleteSession(adminPw: string, sessionId: number) {
  return api.delete(`/admin/inbounds/sessions/${sessionId}`, {
    headers: { "x-admin-password": adminPw },
  });
}

export function deleteSessionByBox(payload: {
  outerBoxId: string;
  innerBoxId: string;
  packedBy: string;
}) {
  return api.post("/inbounds/sessions/delete-by-box", payload);
}

export function deleteBatchItems(payload: {
  sessionId: number;
  packedBy: string;
  serialNumbers: string[];
}) {
  return api.post("/inbounds/items/delete-batch", payload);
}

export async function deleteInboundItems(
  sessionId: number | string,
  packedBy: string,
  serialNumbers: string[]
) {
  return api.post("/inbounds/items/delete-batch", {
    sessionId: Number(sessionId),
    packedBy,
    serialNumbers,
  });
}
