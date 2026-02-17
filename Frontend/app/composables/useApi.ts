// src/api/inbound.api.ts
import { api } from "./useHttp";

export type ClaimSessionPayload = {
  outerBoxId: string;
  innerBoxId: string;
  expectedQty: number;
  packedBy: string;
};

export type CreateInboundItemPayload = {
  sessionId: number;
  sku: string;
  serialNumber: string;
  packedBy: string;
};

export async function claimSession(payload: ClaimSessionPayload) {
  return api.post("/inbounds/sessions/claim", payload);
}

export async function heartbeat(sessionId: number, packedBy: string) {
  return api.post(`/inbounds/sessions/${sessionId}/heartbeat`, { packedBy });
}

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

export function deleteSessionByBox(payload: {
  outerBoxId: string;
  innerBoxId: string;
  packedBy: string;
}) {
  return api.post("/inbounds/sessions/delete-by-box", payload);
}
