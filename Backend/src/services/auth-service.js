import bcrypt from "bcrypt";
import { opIdFromName } from "../utils/ids.js";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "../utils/tokens.js";

export const authService = ({ operatorsRepo }) => ({
  async signup({ name, password }) {
    const id = opIdFromName(name);
    const hash = await bcrypt.hash(password, 10);

    const user = await operatorsRepo.insertOperator(id, name, hash);

    const accessToken = signAccessToken({ id: user.id, name: user.name });
    const refreshToken = signRefreshToken({ id: user.id, name: user.name });

    return { user: { id: user.id, name: user.name }, accessToken, refreshToken };
  },

  async login({ name, password }) {
    const user = await operatorsRepo.findByName(name);
    if (!user) return { status: 401, error: "Invalid username or password" };

    const ok = await bcrypt.compare(password, user.password_hash || "");
    if (!ok) return { status: 401, error: "Invalid username or password" };

    const accessToken = signAccessToken({ id: user.id, name: user.name });
    const refreshToken = signRefreshToken({ id: user.id, name: user.name });

    return { user: { id: user.id, name: user.name }, accessToken, refreshToken };
  },

  async refresh({ refreshToken }) {
    const payload = verifyRefreshToken(refreshToken);
    const accessToken = signAccessToken({ id: payload.id, name: payload.name });
    return { accessToken };
  },
});
