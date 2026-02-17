import { toText, toUpperText, toInt } from "../utils/text.js";

export const inboundsController = ({ service, pool }) => ({
  deleteBatch: async (req, res, next) => {
    try {
      const sessionId = Number(req.body?.sessionId);
      const packedBy = String(req.body?.packedBy || "").trim();
      const serialNumbers = Array.isArray(req.body?.serialNumbers) ? req.body.serialNumbers : [];

      if (!service.mustMatchPackedBy(req.user?.name, packedBy)) {
        return res.status(403).json({ error: "packedBy does not match authenticated user" });
      }
      if (!sessionId) return res.status(400).json({ error: "sessionId is required." });
      if (!packedBy) return res.status(400).json({ error: "packedBy is required." });
      if (!serialNumbers.length) return res.status(400).json({ error: "serialNumbers is required." });

      const result = await service.deleteBatch({ sessionId, packedBy, serialNumbers });
      if (result?.error) return res.status(result.status || 400).json({ error: result.error });

      res.json(result);
    } catch (e) {
      next(e);
    }
  },

  claim: async (req, res, next) => {
    try {
      const outerBoxId = toUpperText(req.body?.outerBoxId);
      const innerBoxId = toUpperText(req.body?.innerBoxId);
      const packedBy = toText(req.body?.packedBy);
      const expectedQty = Math.max(0, toInt(req.body?.expectedQty, 0));

      if (!service.mustMatchPackedBy(req.user?.name, packedBy)) {
        return res.status(403).json({ error: "packedBy does not match authenticated user" });
      }
      if (!outerBoxId || !innerBoxId) return res.status(400).json({ error: "outerBoxId and innerBoxId are required." });
      if (!packedBy) return res.status(400).json({ error: "packedBy (operator username) is required." });

      const result = await service.claim({ outerBoxId, innerBoxId, packedBy, expectedQty });
      if (result?.error) return res.status(result.status || 400).json({ error: result.error, lockedBy: result.lockedBy });

      res.json(result);
    } catch (e) {
      next(e);
    }
  },

  heartbeat: async (req, res, next) => {
    try {
      const id = toInt(req.params.id, 0);
      const packedBy = toText(req.body?.packedBy);

      if (!service.mustMatchPackedBy(req.user?.name, packedBy)) {
        return res.status(403).json({ error: "packedBy does not match authenticated user" });
      }
      if (!id) return res.status(400).json({ error: "Invalid session id." });
      if (!packedBy) return res.status(400).json({ error: "packedBy required." });

      const result = await service.heartbeat({ id, packedBy });
      if (result?.error) return res.status(result.status || 400).json({ error: result.error });

      res.json(result);
    } catch (e) {
      next(e);
    }
  },

  addItem: async (req, res, next) => {
    try {
      const sessionId = toInt(req.body?.sessionId, 0);
      const sku = toUpperText(req.body?.sku);
      const serialNumber = toUpperText(req.body?.serialNumber);
      const packedBy = toText(req.body?.packedBy);

      if (!service.mustMatchPackedBy(req.user?.name, packedBy)) {
        return res.status(403).json({ error: "packedBy does not match authenticated user" });
      }
      if (!sessionId || !sku || !serialNumber || !packedBy) {
        return res.status(400).json({ error: "sessionId, sku, serialNumber, packedBy are required." });
      }

      const result = await service.addItem({ sessionId, sku, serialNumber, packedBy });
      if (result?.error) return res.status(result.status || 400).json({ error: result.error });

      res.status(result.status).json(result.item);
    } catch (e) {
      next(e);
    }
  },

  complete: async (req, res, next) => {
    try {
      const id = toInt(req.params.id, 0);
      const packedBy = toText(req.body?.packedBy);

      if (!service.mustMatchPackedBy(req.user?.name, packedBy)) {
        return res.status(403).json({ error: "packedBy does not match authenticated user" });
      }
      if (!id) return res.status(400).json({ error: "Invalid session id." });
      if (!packedBy) return res.status(400).json({ error: "packedBy required." });

      const result = await service.complete({ id, packedBy });
      if (result?.error) return res.status(result.status || 400).json({ error: result.error });

      res.json(result);
    } catch (e) {
      next(e);
    }
  },

  abandon: async (req, res, next) => {
    try {
      const id = toInt(req.params.id, 0);
      const packedBy = toText(req.body?.packedBy);

      if (!service.mustMatchPackedBy(req.user?.name, packedBy)) {
        return res.status(403).json({ error: "packedBy does not match authenticated user" });
      }
      if (!id) return res.status(400).json({ error: "Invalid session id." });
      if (!packedBy) return res.status(400).json({ error: "packedBy required." });

      const result = await service.abandon({ id, packedBy });
      if (result?.error) return res.status(result.status || 400).json({ error: result.error });

      res.json(result);
    } catch (e) {
      next(e);
    }
  },

  validateSku: async (req, res, next) => {
    try {
      const id = toInt(req.params.id, 0);
      const packedBy = toText(req.body?.packedBy);
      const sku = toUpperText(req.body?.sku);

      if (!service.mustMatchPackedBy(req.user?.name, packedBy)) {
        return res.status(403).json({ error: "packedBy does not match authenticated user" });
      }
      if (!id) return res.status(400).json({ error: "Invalid session id." });
      if (!packedBy) return res.status(400).json({ error: "packedBy required." });
      if (!sku) return res.status(400).json({ error: "sku required." });

      const result = await service.validateSku({ id, packedBy, sku });
      if (result?.error) return res.status(result.status || 400).json({ error: result.error, lockedSku: result.lockedSku });

      res.json({ ok: true, lockedSku: result.lockedSku || "" });
    } catch (e) {
      next(e);
    }
  },

  deleteByBox: async (req, res, next) => {
    try {
      const outerBoxId = toText(req.body?.outerBoxId);
      const innerBoxId = toText(req.body?.innerBoxId);
      const packedBy = toText(req.body?.packedBy);

      if (!service.mustMatchPackedBy(req.user?.name, packedBy)) {
        return res.status(403).json({ error: "packedBy does not match authenticated user" });
      }
      if (!outerBoxId || !innerBoxId) return res.status(400).json({ error: "outerBoxId and innerBoxId are required." });
      if (!packedBy) return res.status(400).json({ error: "packedBy (operator username) is required." });

      const result = await service.deleteByBox({ outerBoxId, innerBoxId, packedBy });
      if (result?.error) return res.status(result.status || 400).json(result);

      res.json(result);
    } catch (e) {
      next(e);
    }
  },

  reset: async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const packedBy = String(req.body?.packedBy || "").trim();

      if (!service.mustMatchPackedBy(req.user?.name, packedBy)) {
        return res.status(403).json({ error: "packedBy does not match authenticated user" });
      }
      if (!id) return res.status(400).json({ error: "Invalid session id" });
      if (!packedBy) return res.status(400).json({ error: "packedBy required" });

      const result = await service.reset({ id, packedBy });
      if (result?.error) return res.status(result.status || 400).json({ error: result.error });

      res.json(result);
    } catch (e) {
      next(e);
    }
  },

  // OLD READ LIST (exact)
  listInbounds: async (req, res, next) => {
    try {
      const { outerBoxId, innerBoxId, sku, serialNumber, limit = 50 } = req.query;

      const where = [];
      const values = [];
      let i = 1;

      if (outerBoxId) { where.push(`outerbox_id = $${i++}`); values.push(toText(outerBoxId)); }
      if (innerBoxId) { where.push(`innerbox_id = $${i++}`); values.push(toText(innerBoxId)); }
      if (sku) { where.push(`sku = $${i++}`); values.push(toUpperText(sku)); }
      if (serialNumber) { where.push(`serial_number = $${i++}`); values.push(toUpperText(serialNumber)); }

      values.push(Math.min(toInt(limit, 50) || 50, 200));

      const q = `
        SELECT
          id,
          session_id AS "sessionId",
          outerbox_id AS "outerBoxId",
          innerbox_id AS "innerBoxId",
          sku,
          serial_number AS "serialNumber",
          packed_by AS "packedBy",
          created_at AS "createdAt"
        FROM inbound_items
        ${where.length ? "WHERE " + where.join(" AND ") : ""}
        ORDER BY created_at DESC
        LIMIT $${i};
      `;

      const result = await pool.query(q, values);
      res.json(result.rows);
    } catch (e) {
      next(e);
    }
  },

  deleteBySerial: async (req, res, next) => {
    try {
      const serial = toUpperText(req.params.serialNumber);
      const r = await pool.query(`DELETE FROM inbound_items WHERE serial_number=$1`, [serial]);
      res.json({ deleted: r.rowCount });
    } catch (e) {
      next(e);
    }
  },
});
