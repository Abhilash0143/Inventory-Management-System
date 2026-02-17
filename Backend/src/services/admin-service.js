import { toUpperText, toInt } from "../utils/text.js";
import { toBigInt } from "../utils/bigint.js";

/**
 * Prisma version (Inbound DB)
 * Service signature expected by your app wiring:
 *   adminService({ prisma })
 *
 * Uses:
 *  - prisma.inbound_sessions
 *  - prisma.inbound_items
 *  - tx.$queryRaw for FOR UPDATE reads
 */
export const adminService = ({ prisma }) => {
  function isPrismaUniqueError(e) {
    return e?.code === "P2002";
  }

  return {
    async listSessions(limit) {
      const lim = Math.min(Number(limit) || 200, 500);

      const rows = await prisma.$queryRaw`
        SELECT
          s.id,
          s.outerbox_id AS "outerBoxId",
          s.innerbox_id AS "innerBoxId",
          s.expected_qty AS "expectedQty",
          s.status,
          s.locked_sku AS "lockedSku",
          s.confirmed_at AS "confirmedAt",
          s.locked_at AS "lockedAt",
          s.last_seen AS "lastSeen",
          (SELECT COUNT(*)::int FROM inbound_items i WHERE i.session_id = s.id) AS "scannedQty"
        FROM inbound_sessions s
        ORDER BY COALESCE(s.confirmed_at, s.locked_at) DESC
        LIMIT ${lim}
      `;

      return rows;
    },

    async getSession(id) {
      const sid = BigInt(toInt(id, 0));
      if (!sid) return { status: 400, error: "Invalid session id" };

      const session = await prisma.inbound_sessions.findUnique({ where: { id: sid } });
      if (!session) return { status: 404, error: "Session not found" };

      const items = await prisma.inbound_items.findMany({
        where: { session_id: sid },
        orderBy: { id: "asc" },
      });

      return { session, items };
    },

    async patchItem(itemId, { sku, serialNumber }) {
      const id = BigInt(toInt(itemId, 0));
      if (!id) return { status: 400, error: "Invalid item id" };

      const newSku = sku !== undefined ? toUpperText(sku) : undefined;
      const newSerial = serialNumber !== undefined ? toUpperText(serialNumber) : undefined;

      try {
        const out = await prisma.$transaction(async (tx) => {
          // Lock item row
          const itemRows = await tx.$queryRaw`
            SELECT * FROM inbound_items WHERE id = ${id} FOR UPDATE
          `;
          const item = itemRows?.[0];
          if (!item) return { status: 404, error: "Item not found" };

          const sessionId = toBigInt(item.session_id);
          if (!sessionId) return { status: 409, error: "Item is not linked to a session." };

          // Lock session row
          const sessionRows = await tx.$queryRaw`
            SELECT * FROM inbound_sessions WHERE id = ${sessionId} FOR UPDATE
          `;
          const session = sessionRows?.[0];
          if (!session) return { status: 404, error: "Session not found" };

          const finalSku = newSku !== undefined ? newSku : toUpperText(item.sku);
          const finalSerial = newSerial !== undefined ? newSerial : toUpperText(item.serial_number);

          if (!finalSku || !finalSerial) return { status: 400, error: "sku and serialNumber are required" };
          if (finalSerial === finalSku) return { status: 409, error: "Serial number cannot be the same as SKU." };

          // locked sku enforcement
          if (!session.locked_sku) {
            await tx.inbound_sessions.update({
              where: { id: sessionId },
              data: { locked_sku: finalSku },
            });
          } else if (toUpperText(session.locked_sku) !== finalSku) {
            return {
              status: 409,
              error: `SKU mismatch. Locked SKU is ${session.locked_sku}. You tried ${finalSku}. Clear Locked SKU first.`,
            };
          }

          const updated = await tx.inbound_items.update({
            where: { id },
            data: {
              sku: finalSku,
              serial_number: finalSerial,
            },
          });

          return { ok: true, item: updated };
        });

        return out;
      } catch (e) {
        if (isPrismaUniqueError(e)) return { status: 409, error: "Serial number already exists." };
        throw e;
      }
    },

    async patchSession(sessionId, { expectedQty, clearLockedSku }) {
      const id = BigInt(toInt(sessionId, 0));
      if (!id) return { status: 400, error: "Invalid session id" };

      const data = {};

      if (expectedQty !== undefined) {
        data.expected_qty = Math.max(0, toInt(expectedQty, 0));
      }
      if (clearLockedSku) {
        data.locked_sku = null;
      }
      if (!Object.keys(data).length) return { status: 400, error: "No changes provided" };

      const updated = await prisma.inbound_sessions.update({
        where: { id },
        data,
      }).catch(() => null);

      if (!updated) return { status: 404, error: "Session not found" };
      return { ok: true, session: updated };
    },

    async deleteSession(sessionId) {
      const id = BigInt(toInt(sessionId, 0));
      if (!id) return { status: 400, error: "Invalid session id" };

      const out = await prisma.$transaction(async (tx) => {
        await tx.inbound_items.deleteMany({ where: { session_id: id } });
        const del = await tx.inbound_sessions.deleteMany({ where: { id } });
        return { ok: true, deleted: del.count };
      });

      return out;
    },

    async deleteItem(itemId) {
      const id = BigInt(toInt(itemId, 0));
      if (!id) return { status: 400, error: "Invalid item id" };

      const del = await prisma.inbound_items.deleteMany({ where: { id } });
      return { ok: true, deleted: del.count };
    },
  };
};
