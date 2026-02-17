import jwt from "jsonwebtoken";

export function signAccessToken(user) {
  const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
  const ACCESS_TTL = process.env.JWT_ACCESS_TTL || "15m";

  return jwt.sign(
    { sub: user.id, name: user.name, role: user.role || "operator" },
    ACCESS_SECRET,
    { expiresIn: ACCESS_TTL }
  );
}

export function signRefreshToken(user) {
  const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
  const REFRESH_TTL = process.env.JWT_REFRESH_TTL || "14d";

  return jwt.sign({ sub: user.id }, REFRESH_SECRET, { expiresIn: REFRESH_TTL });
}

export function verifyAccessToken(token) {
  const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
  return jwt.verify(token, ACCESS_SECRET);
}

export function verifyRefreshToken(token) {
  const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
  return jwt.verify(token, REFRESH_SECRET);
}
