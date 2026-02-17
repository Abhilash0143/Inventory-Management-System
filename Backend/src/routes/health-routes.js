import { Router } from "express";

export function healthRoutes(pool) {
  const r = Router();

  r.get("/health", async (req, res) => {
    const x = await pool.query("SELECT 1 AS ok");
    res.json({ api: true, db: x.rows[0].ok === 1 });
  });

  return r;
}
