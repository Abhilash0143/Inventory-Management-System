import { Router } from "express";

export const inboundsRoutes = (controller) => {
  const r = Router();

  // ✅ Session routes (frontend expects /inbounds/sessions/*)
  r.post("/sessions/claim", controller.claim);
  r.post("/sessions/:id/heartbeat", controller.heartbeat);
  r.post("/sessions/:id/complete", controller.complete);
  r.post("/sessions/:id/abandon", controller.abandon);
  r.post("/sessions/:id/validate-sku", controller.validateSku);
  r.post("/sessions/:id/reset", controller.reset);

  // ✅ Items
  r.post("/items", controller.addItem);

  // ✅ Deletions
  r.post("/sessions/delete-batch", controller.deleteBatch);
  r.post("/sessions/delete-by-box", controller.deleteByBox);

  // Optional legacy admin endpoints if you still use them
  r.get("/list", controller.listInbounds);
  r.delete("/serial/:serialNumber", controller.deleteBySerial);

  return r;
};
