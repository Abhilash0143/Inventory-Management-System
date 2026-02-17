// src/api/auth.api.ts
import { api } from "./useHttp";

export async function signupOperator(payload: { name: string; password: string }) {
  return api.post("/auth/signup", payload);
}

export async function loginOperator(payload: { name: string; password: string }) {
  return api.post("/auth/login", payload);
}

export async function logoutOperator() {
  return api.post("/auth/logout");
}
