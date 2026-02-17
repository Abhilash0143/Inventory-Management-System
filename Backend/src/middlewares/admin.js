export function requireAdmin(req, res, next) {
  const ADMIN_PASSWORD = String(process.env.ADMIN_PASSWORD || "").trim();
  const pw = String(req.headers["x-admin-password"] || "").trim();

  if (!ADMIN_PASSWORD) {
    return res.status(500).json({ error: "ADMIN_PASSWORD is not set on server." });
  }
  if (pw !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Invalid admin password." });
  }
  next();
}
