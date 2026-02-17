export function toText(v) {
  return String(v ?? "").trim();
}

export function toUpperText(v) {
  return toText(v).toUpperCase();
}

export function toInt(v, fallback = 0) {
  const n = Number(v);
  if (!Number.isFinite(n)) return fallback;
  return Math.floor(n);
}

// Keep your original strict compare behavior.
// If you want case-insensitive packedBy checks, use normUser in comparisons.
export function normUser(v) {
  return toText(v).toLowerCase();
}
