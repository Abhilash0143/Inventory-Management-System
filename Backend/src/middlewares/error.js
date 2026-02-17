export function errorHandler(err, req, res, next) {
  console.error("STOCKCOUNT ERROR:", err);

  const status = err.statusCode || err.status || 500;
  const message = err.message || "Internal server error";
  const meta = err.meta && typeof err.meta === "object" ? err.meta : null;

  return res.status(status).json({
    error: message,
    message, // optional but helpful
    code: err.code, // postgres error code if any

    // ✅ include meta in response
    ...(meta ? meta : {}), // <-- this makes pendingBoxes appear directly
    meta: meta || undefined, // <-- also keep it under meta if you want
  });
}
