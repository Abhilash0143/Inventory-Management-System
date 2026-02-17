// src/services/inbound.service.ts
import { inboundRepo } from "../repositories/repoWrap";
import {
  normalizeUpper,
  validateOperator,
  validateOuterBoxId,
  validateInnerBoxId,
  normalizeQty,
  validateSkuInput,
  validateSerialInput,
  enforceSerialRules,
} from "../domain/rules";

import type { ScannedItem } from "../domain/types";

export const inboundService = {
  async beginInnerbox(params: {
    outerBoxId: string;
    innerBoxId: string;
    expectedQty: number; // 0 allowed for resume probe
    packedBy: string;
  }) {
    const outerBoxId = validateOuterBoxId(params.outerBoxId);
    const innerBoxId = validateInnerBoxId(params.innerBoxId);
    const packedBy = validateOperator(params.packedBy);
    const expectedQty = Math.max(0, normalizeQty(params.expectedQty));

    const data = await inboundRepo.claim({
      outerBoxId,
      innerBoxId,
      expectedQty,
      packedBy,
    });

    const session = data.session;
const items = Array.isArray(data.items) ? data.items : [];

const firstSku = items.at(0)?.sku;

const dbLockedSku =
  normalizeUpper(session.lockedSku ?? "") ||
  (firstSku ? normalizeUpper(firstSku) : "");


    return {
      sessionId: session.id,
      innerBoxId: session.innerBoxId ?? innerBoxId,
      expectedQty: session.expectedQty ?? expectedQty,
      qtyLocked: (session.expectedQty ?? expectedQty) > 0,
      dbLockedSku,
      items: items as ScannedItem[],
      confirmedCount: items.length,
    };
  },

  validateSku(sku: string) {
    return validateSkuInput(sku);
  },

  async addSerial(params: {
    sessionId: number;
    sku: string;
    serial: string;
    packedBy: string;
    currentItems: ScannedItem[];
  }) {
    const packedBy = validateOperator(params.packedBy);
    const sku = validateSkuInput(params.sku);
    const serialRaw = validateSerialInput(params.serial);
    const serial = enforceSerialRules({
      serial: serialRaw,
      sku,
      currentItems: params.currentItems,
    });

    await inboundRepo.createItem({
      sessionId: params.sessionId,
      sku,
      serialNumber: serial,
      packedBy,
    });

    return { sku, serial };
  },

  async finalize(params: { sessionId: number; packedBy: string }) {
    const packedBy = validateOperator(params.packedBy);
    await inboundRepo.complete(params.sessionId, packedBy);
    return true;
  },

  async heartbeat(params: { sessionId: number; packedBy: string }) {
    const packedBy = validateOperator(params.packedBy);
    await inboundRepo.sendHeartbeat(params.sessionId, packedBy);
    return true;
  },

  async reset(params: { sessionId: number; packedBy: string }) {
    const packedBy = validateOperator(params.packedBy);
    await inboundRepo.reset(params.sessionId, packedBy);
    return true;
  },

  async resetBatch(params: { sessionId: number; packedBy: string; serialNumbers: string[] }) {
    const packedBy = validateOperator(params.packedBy);
    await inboundRepo.deleteBatch({
      sessionId: params.sessionId,
      packedBy,
      serialNumbers: params.serialNumbers,
    });
    return true;
  },

  async deletePending(params: { sessionId: number | string; packedBy: string; serialNumbers: string[] }) {
    const packedBy = validateOperator(params.packedBy);
    await inboundRepo.deleteItems(params.sessionId, packedBy, params.serialNumbers);
    return true;
  },
};
