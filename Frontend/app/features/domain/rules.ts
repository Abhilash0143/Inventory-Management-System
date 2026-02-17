// src/domain/inbound.rules.ts
import { isValidSku } from "../../utils/skuValidator";
import type { ResumeState, ScannedItem } from "./types";

export const todayISO = () => new Date().toISOString().slice(0, 10);

export function normalizeUpper(v: string) {
  return String(v ?? "").trim().toUpperCase();
}

export function requireNonEmpty(label: string, v: string) {
  const val = String(v ?? "").trim();
  if (!val) throw new Error(`${label} is required.`);
  return val;
}

export function validateOperator(name: string) {
  return requireNonEmpty("Username", name);
}

export function validateOuterBoxId(id: string) {
  return requireNonEmpty("Outer Box ID", id);
}

export function validateInnerBoxId(id: string) {
  return requireNonEmpty("Inner Box ID", id);
}

export function normalizeQty(qty: any) {
  const n = Math.floor(Number(qty) || 0);
  if (n < 0) throw new Error("Quantity invalid.");
  return n;
}

export function validateSkuInput(sku: string) {
  const v = normalizeUpper(sku);
  if (!v) throw new Error("Scan valid SKU first.");
  if (!isValidSku(v)) throw new Error(`Invalid SKU: "${v}"`);
  return v;
}

export function validateSerialInput(serial: string) {
  const v = normalizeUpper(serial);
  if (!v) throw new Error("Serial is required.");
  return v;
}

export function enforceSerialRules(params: {
  serial: string;
  sku: string;
  currentItems: ScannedItem[];
}) {
  const sn = normalizeUpper(params.serial);
  const sku = normalizeUpper(params.sku);

  if (sn === sku) throw new Error("Serial number cannot be the same as SKU.");
  if (params.currentItems.some((i) => normalizeUpper(i.serial) === sn)) {
    throw new Error(`Duplicate serial in this InnerBox: ${sn}`);
  }
  return sn;
}

export function getResumeState(sessionId: number | null, expectedQty: number, scanned: number): ResumeState {
  if (!sessionId) return "NEW_NEEDS_QTY";
  if (expectedQty > 0) {
    if (scanned >= expectedQty) return "READY_TO_CONFIRM";
    return "IN_PROGRESS";
  }
  return "NEW_NEEDS_QTY";
}
