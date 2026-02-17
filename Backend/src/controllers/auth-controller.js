import { toText } from "../utils/text.js";

export const authController = ({ authService }) => ({
  signup: async (req, res, next) => {
    try {
      const name = toText(req.body?.name).toLowerCase();
      const password = toText(req.body?.password);

      if (!name) return res.status(400).json({ error: "name required" });
      if (!password || password.length < 6) {
        return res.status(400).json({ error: "password must be at least 6 characters" });
      }

      const operator = await authService.signup({ name, password });
      res.json({ ok: true, operator });
    } catch (e) {
      if (e.code === "23505") return res.status(409).json({ error: "Operator already exists" });
      next(e);
    }
  },

  login: async (req, res, next) => {
    try {
      const name = toText(req.body?.name).toLowerCase();
      const password = toText(req.body?.password);

      if (!name) return res.status(400).json({ error: "name required" });
      if (!password) return res.status(400).json({ error: "password required" });

      const result = await authService.login({ name, password });
      if (result?.error) return res.status(result.status || 400).json({ error: result.error });

      res.cookie("refresh_token", result.refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge: 14 * 24 * 60 * 60 * 1000,
      });

      res.json({ accessToken: result.accessToken, user: result.user });
    } catch (e) {
      next(e);
    }
  },

  refresh: async (req, res, next) => {
  try {
    const token = req.cookies?.refresh_token;
    if (!token) return res.status(401).json({ error: "Missing refresh token" });

    const result = await authService.refresh({ refreshToken: token });
    if (result?.error) return res.status(result.status || 400).json({ error: result.error });

    res.json({ accessToken: result.accessToken, user: result.user });
  } catch (e) {
    next(e);
  }
},


  logout: (req, res) => {
    res.clearCookie("refresh_token", { path: "/api/auth/refresh" });
    res.json({ ok: true });
  },
});
