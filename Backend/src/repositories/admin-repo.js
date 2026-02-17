export const adminRepo = (prisma) => ({
  async listSessions(limit = 50) {
    const lim = Number(limit) || 50;

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
        (SELECT COUNT(*)::int FROM inbound_items i WHERE i.session_id = s.id) AS "scannedQty"
      FROM inbound_sessions s
      ORDER BY COALESCE(s.confirmed_at, s.locked_at) DESC
      LIMIT ${lim}
    `;

    return rows;
  },
});
