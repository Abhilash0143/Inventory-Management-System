/**
 * Safe BigInt conversion helper.
 *
 * Why this exists:
 * - Prisma maps Postgres BIGINT columns to JS `bigint`.
 * - Some endpoints pass ids around that are already `bigint`.
 * - Calling `BigInt(10n)` throws a TypeError.
 */

export function toBigInt(value, fallback = null) {
  if (typeof value === "bigint") return value;

  // Treat empty/nullish as missing.
  if (value === null || value === undefined) return fallback;
  if (typeof value === "string" && value.trim() === "") return fallback;

  try {
    return BigInt(value);
  } catch {
    return fallback;
  }
}

export function requireBigInt(value, name = "id") {
  const v = toBigInt(value, null);
  if (v === null) {
    const err = new Error(`Invalid ${name}`);
    err.statusCode = 400;
    throw err;
  }
  return v;
}
