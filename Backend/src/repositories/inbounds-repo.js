import { toBigInt } from "../utils/bigint.js";

export const inboundsRepo = (prisma) => ({
  // sessions (FOR UPDATE versions use $queryRaw)
  async sessionById(tx, id, forUpdate = false) {
    const sid = toBigInt(id);
    if (sid === null) return null;

    if (!forUpdate) {
      return tx.inbound_sessions.findUnique({ where: { id: sid } });
    }

    const rows = await tx.$queryRaw`
      SELECT * FROM inbound_sessions WHERE id = ${sid} FOR UPDATE
    `;
    return rows?.[0] || null;
  },

  async sessionByBoxes(tx, outer, inner, forUpdate = false) {
    if (!forUpdate) {
      return tx.inbound_sessions.findFirst({
        where: { outerbox_id: outer, innerbox_id: inner },
      });
    }

    const rows = await tx.$queryRaw`
      SELECT * FROM inbound_sessions
      WHERE outerbox_id = ${outer} AND innerbox_id = ${inner}
      FOR UPDATE
    `;
    return rows?.[0] || null;
  },

  async createSession(tx, { outer, inner, expectedQty, packedBy }) {
    return tx.inbound_sessions.create({
      data: {
        outerbox_id: outer,
        innerbox_id: inner,
        expected_qty: expectedQty,
        status: "IN_PROGRESS",
        locked_by: packedBy,
        locked_at: new Date(),
        last_seen: new Date(),
      },
    });
  },

  async updateClaim(tx, { id, packedBy, expectedQty }) {
    return tx.inbound_sessions.update({
      where: { id: toBigInt(id) },
      data: {
        locked_by: packedBy,
        expected_qty: expectedQty > 0 ? expectedQty : undefined,
        status: "IN_PROGRESS",
        last_seen: new Date(),
      },
    });
  },

  async touchIfLockedBy(id, packedBy) {
    const r = await prisma.inbound_sessions.updateMany({
      where: { id: toBigInt(id), locked_by: packedBy, status: "IN_PROGRESS" },
      data: { last_seen: new Date() },
    });
    return r.count > 0;
  },

  async setLockedSku(tx, id, sku) {
    await tx.inbound_sessions.update({
      where: { id: toBigInt(id) },
      data: { locked_sku: sku },
    });
  },

  async confirmSession(tx, id) {
    return tx.inbound_sessions.update({
      where: { id: toBigInt(id) },
      data: {
        status: "CONFIRMED",
        confirmed_at: new Date(),
        last_seen: new Date(),
      },
    });
  },

  async abandonSession(id, packedBy) {
    const r = await prisma.inbound_sessions.updateMany({
      where: { id: toBigInt(id), locked_by: packedBy, status: "IN_PROGRESS" },
      data: { status: "ABANDONED", last_seen: new Date() },
    });
    return r.count > 0;
  },

  // items
  async listItems(tx, sessionId) {
    const sid = toBigInt(sessionId);
    if (sid === null) return [];
    const rows = await tx.inbound_items.findMany({
      where: { session_id: sid },
      select: { sku: true, serial_number: true },
      orderBy: { id: "asc" },
    });
    return rows.map((r) => ({ sku: r.sku, serial: r.serial_number }));
  },

  async countItems(tx, sessionId) {
    return tx.inbound_items.count({
      where: { session_id: toBigInt(sessionId) },
    });
  },

  async insertItem(tx, data) {
    return tx.inbound_items.create({
      data: {
        session_id: toBigInt(data.sessionId),
        outerbox_id: data.outerBoxId,
        innerbox_id: data.innerBoxId,
        sku: data.sku,
        serial_number: data.serialNumber,
        packed_by: data.packedBy,
      },
    });
  },

  async deleteItemsBySerials(tx, sessionId, serials) {
    await tx.inbound_items.deleteMany({
      where: {
        session_id: toBigInt(sessionId),
        serial_number: { in: serials },
      },
    });
  },

  async deleteItemsBySession(tx, sessionId) {
    await tx.inbound_items.deleteMany({
      where: { session_id: toBigInt(sessionId) },
    });
  },

  async deleteSessionById(tx, sessionId) {
    await tx.inbound_sessions.delete({
      where: { id: toBigInt(sessionId) },
    });
  },

  async deleteBySerial(serialNumber) {
    await prisma.inbound_items.deleteMany({
      where: { serial_number: serialNumber },
    });
  },
});
