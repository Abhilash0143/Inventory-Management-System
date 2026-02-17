import { toText, toUpperText, toInt } from "../utils/text.js";
import { toBigInt } from "../utils/bigint.js";

/**
 * Prisma version (Inbound DB)
 * Expected repo interface (your Prisma repo version):
 *  - sessionById(tx, id, forUpdate=false) -> session|null
 *  - sessionByBoxes(tx, outer, inner, forUpdate=false) -> session|null
 *  - createSession(tx, { outer, inner, expectedQty, packedBy }) -> session
 *  - updateClaim(tx, { id, packedBy, expectedQty }) -> session
 *  - touchIfLockedBy(id, packedBy) -> boolean
 *  - setLockedSku(tx, id, sku) -> void
 *  - confirmSession(tx, id) -> session
 *  - abandonSession(id, packedBy) -> boolean
 *  - listItems(tx, sessionId) -> [{sku, serial}]
 *  - countItems(tx, sessionId) -> number
 *  - insertItem(tx, data) -> item
 *  - deleteItemsBySerials(tx, sessionId, serials) -> {count}
 *  - deleteItemsBySession(tx, sessionId) -> {count}
 *  - deleteSessionById(tx, sessionId) -> void
 *
 * Service signature expected by your app wiring:
 *   inboundsService({ prisma, repo, LEASE_MS })
 */
export const inboundsService = ({ prisma, repo, LEASE_MS }) => {
  const leaseExpired = (lastSeen) => Date.now() - new Date(lastSeen).getTime() > LEASE_MS;

  function mustMatchPackedBy(reqUserName, packedBy) {
    if (toText(reqUserName) && toText(packedBy) && toText(reqUserName) !== toText(packedBy)) {
      return false;
    }
    return true;
  }

  function isPrismaUniqueError(e) {
    // Prisma unique constraint error
    return e?.code === "P2002";
  }

  return {
    mustMatchPackedBy,

    async deleteBatch({ sessionId, packedBy, serialNumbers }) {
      const serials = (serialNumbers || [])
        .map((s) => String(s || "").trim().toUpperCase())
        .filter(Boolean);

      try {
        const result = await prisma.$transaction(async (tx) => {
          const session = await repo.sessionById(tx, sessionId, true);
          if (!session) return { status: 404, error: "Session not found." };

          if (String(session.locked_by || "").trim() !== packedBy) {
            return { status: 403, error: "Not allowed. Locked by another user." };
          }

          const del = await repo.deleteItemsBySerials(tx, sessionId, serials);

          const remaining = await repo.countItems(tx, sessionId);
          if (remaining === 0) {
            await tx.inbound_sessions.update({
              where: { id: toBigInt(sessionId) },
              data: { locked_sku: null },
            });
          }

          return { ok: true, deletedItems: del?.count ?? 0 };
        });

        return result;
      } catch (e) {
        throw e;
      }
    },

    async claim({ outerBoxId, innerBoxId, packedBy, expectedQty }) {
      const outer = toUpperText(outerBoxId);
      const inner = toUpperText(innerBoxId);
      const qty = Math.max(0, toInt(expectedQty, 0));

      try {
        const out = await prisma.$transaction(async (tx) => {
          const existing = await repo.sessionByBoxes(tx, outer, inner, true);

          if (!existing) {
            const created = await repo.createSession(tx, { outer, inner, expectedQty: qty, packedBy });
            return { session: created, items: [] };
          }

          const s = existing;

          if (s.status === "CONFIRMED") {
            return { status: 409, error: "This InnerBox is already CONFIRMED." };
          }

          const expired = leaseExpired(s.last_seen);

          if (s.locked_by !== packedBy && !expired) {
            return { status: 409, error: `InnerBox is in progress by "${s.locked_by}".`, lockedBy: s.locked_by };
          }

          const updated = await repo.updateClaim(tx, { id: s.id, packedBy, expectedQty: qty });
          const items = await repo.listItems(tx, s.id);

          return { session: updated, items };
        });

        return out;
      } catch (e) {
        throw e;
      }
    },

    async heartbeat({ id, packedBy }) {
      const ok = await repo.touchIfLockedBy(id, packedBy);
      if (!ok) return { status: 403, error: "Not allowed (locked by another user or not in progress)." };
      return { ok: true };
    },

    async addItem({ sessionId, sku, serialNumber, packedBy }) {
      try {
        const out = await prisma.$transaction(async (tx) => {
          const session = await repo.sessionById(tx, sessionId, true);
          if (!session) return { status: 404, error: "Session not found." };

          if (session.status !== "IN_PROGRESS") return { status: 409, error: "Session is not IN_PROGRESS." };
          if (toText(session.locked_by) !== packedBy) return { status: 403, error: "InnerBox is locked by another user." };

          const incomingSku = toUpperText(sku);
          const incomingSerial = toUpperText(serialNumber);

          if (!session.locked_sku) {
            await repo.setLockedSku(tx, sessionId, incomingSku);
          } else if (toUpperText(session.locked_sku) !== incomingSku) {
            return { status: 409, error: `SKU mismatch. Locked SKU is ${session.locked_sku}. You scanned ${incomingSku}` };
          }

          const inserted = await repo.insertItem(tx, {
            sessionId,
            outerBoxId: toText(session.outerbox_id),
            innerBoxId: toText(session.innerbox_id),
            sku: incomingSku,
            serialNumber: incomingSerial,
            packedBy,
          });

          await tx.inbound_sessions.update({
            where: { id: toBigInt(sessionId) },
            data: { last_seen: new Date() },
          });

          return { status: 201, item: inserted };
        });

        return out;
      } catch (e) {
        if (isPrismaUniqueError(e)) return { status: 409, error: "Serial number already exists." };
        throw e;
      }
    },

    async complete({ id, packedBy }) {
      try {
        const out = await prisma.$transaction(async (tx) => {
          const session = await repo.sessionById(tx, id, true);
          if (!session) return { status: 404, error: "Session not found." };

          if (session.status !== "IN_PROGRESS") return { status: 409, error: "Session is not IN_PROGRESS." };
          if (toText(session.locked_by) !== packedBy) return { status: 403, error: "Locked by another user." };

          const scanned = await repo.countItems(tx, id);
          const expected = toInt(session.expected_qty, 0);

          if (expected <= 0) return { status: 400, error: "Expected quantity not set." };
          if (scanned !== expected) return { status: 409, error: `Quantity mismatch: scanned ${scanned} of ${expected}` };

          const done = await repo.confirmSession(tx, id);
          return { session: done, scanned, expected };
        });

        return out;
      } catch (e) {
        throw e;
      }
    },

    async abandon({ id, packedBy }) {
      const ok = await repo.abandonSession(id, packedBy);
      if (!ok) return { status: 403, error: "Not allowed." };
      return { ok: true };
    },

    async validateSku({ id, packedBy, sku }) {
      const sessionId = toInt(id, 0);
      const packed = toText(packedBy);
      const skuU = toUpperText(sku);

      // Convert safely for Prisma BIGINT ids.
      const sid = toBigInt(sessionId);
      if (sid === null) return { status: 400, error: "Invalid session id" };

      const session = await prisma.inbound_sessions.findUnique({ where: { id: sid } });

      if (!session) return { status: 404, error: "Session not found." };

      if (session.status !== "IN_PROGRESS") return { status: 409, error: "Session is not IN_PROGRESS." };
      if (toText(session.locked_by) !== packed) return { status: 403, error: "Locked by another user." };

      if (session.locked_sku && toUpperText(session.locked_sku) !== skuU) {
        return {
          status: 409,
          error: `SKU mismatch. Locked SKU is ${session.locked_sku}. You scanned ${skuU}`,
          lockedSku: toUpperText(session.locked_sku),
        };
      }

      return { ok: true, lockedSku: toUpperText(session.locked_sku || "") };
    },

    async deleteByBox({ outerBoxId, innerBoxId, packedBy }) {
      const outer = toText(outerBoxId);
      const inner = toText(innerBoxId);

      try {
        const out = await prisma.$transaction(async (tx) => {
          const session = await repo.sessionByBoxes(tx, outer, inner, true);
          if (!session) return { status: 404, error: "Session not found in database." };

          const expired = leaseExpired(session.last_seen);

          if (toText(session.locked_by) !== toText(packedBy) && !expired) {
            return {
              status: 409,
              error: `InnerBox is in progress by "${session.locked_by}". Cannot delete until lease expires.`,
              lockedBy: session.locked_by,
            };
          }

          const delItems = await repo.deleteItemsBySession(tx, session.id);
          await repo.deleteSessionById(tx, session.id);

          return {
            ok: true,
            sessionId: session.id,
            status: session.status,
            deletedItems: delItems?.count ?? 0,
            deletedSession: 1,
          };
        });

        return out;
      } catch (e) {
        throw e;
      }
    },

    async reset({ id, packedBy }) {
      try {
        const out = await prisma.$transaction(async (tx) => {
          const session = await repo.sessionById(tx, id, true);
          if (!session) return { status: 404, error: "Session not found" };

          if (String(session.locked_by || "").trim() !== String(packedBy || "").trim()) {
            return { status: 403, error: "Locked by another user" };
          }
          if (session.status !== "IN_PROGRESS") {
            return { status: 409, error: "Cannot reset a non-IN_PROGRESS session" };
          }

          const delItems = await repo.deleteItemsBySession(tx, id);
          await repo.deleteSessionById(tx, id);

          return { ok: true, deletedItems: delItems?.count ?? 0, deletedSession: 1 };
        });

        return out;
      } catch (e) {
        throw e;
      }
    },
  };
};
