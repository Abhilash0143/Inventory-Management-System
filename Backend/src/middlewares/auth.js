import { verifyAccessToken } from "../utils/tokens.js";

export function requireAuth(req, res, next) {
  const header = String(req.headers.authorization || "");
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!token) return res.status(401).json({ error: "Missing access token" });

  try {
    const payload = verifyAccessToken(token);

    // ✅ normalize user id from token payload
    const id =
      payload?.id ??
      payload?.userId ??
      payload?.uid ??
      payload?.sub;

    if (!id || String(id) === "undefined") {
      return res.status(401).json({ error: "Invalid token: missing user id" });
    }

    // ✅ always provide a stable shape
    req.user = { ...payload, id: String(id) };

    return next();
  } catch {
    return res.status(401).json({ error: "Invalid/expired token" });
  }
}
