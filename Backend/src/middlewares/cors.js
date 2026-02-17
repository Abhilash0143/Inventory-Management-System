import cors from "cors";

export function corsMiddleware() {
  const allowedOrigins = [
    "http://localhost:3000",
    "http://192.168.50.5:3000",
    "https://ims.compassco.top",
    process.env.NGROK_FRONTEND_ORIGIN,
  ].filter(Boolean);

  return cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("CORS blocked: " + origin));
    },
    credentials: true,
  });
}
