// src/repositories/inbound.repo.ts
import {
  claimSession,
  createInboundItem,
  completeSession,
  heartbeat,
  resetSession,
  deleteBatchItems,
  deleteInboundItems,
  type ClaimSessionPayload,
  type CreateInboundItemPayload,
} from "../../composables/useApi";

export type ClaimSessionResponse = {
  session: {
    id: number;
    innerBoxId?: string;
    expectedQty?: number;
    lockedSku?: string | null;
  };
  items: Array<{ sku: string; serial: string }>;
};

export const inboundRepo = {
  async claim(payload: ClaimSessionPayload): Promise<ClaimSessionResponse> {
    const res = await claimSession(payload);
    return res.data;
  },

  async createItem(payload: CreateInboundItemPayload) {
    const res = await createInboundItem(payload);
    return res.data;
  },

  async complete(sessionId: number, packedBy: string) {
    const res = await completeSession(sessionId, packedBy);
    return res.data;
  },

  async sendHeartbeat(sessionId: number, packedBy: string) {
    const res = await heartbeat(sessionId, packedBy);
    return res.data;
  },

  async reset(sessionId: number, packedBy: string) {
    const res = await resetSession(sessionId, packedBy);
    return res.data;
  },

  async deleteBatch(payload: { sessionId: number; packedBy: string; serialNumbers: string[] }) {
    const res = await deleteBatchItems(payload);
    return res.data;
  },

  async deleteItems(sessionId: number | string, packedBy: string, serialNumbers: string[]) {
    const res = await deleteInboundItems(sessionId, packedBy, serialNumbers);
    return res.data;
  },
};
