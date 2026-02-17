import { Router } from "express";

export const adminRoutes = (controller) => {
  const r = Router();

  // Sessions (Inbound)
  if (typeof controller.listSessions === "function") r.get("/sessions", controller.listSessions);
  if (typeof controller.getSession === "function") r.get("/sessions/:id", controller.getSession);
  if (typeof controller.patchSession === "function") r.patch("/sessions/:id", controller.patchSession);
  if (typeof controller.deleteSession === "function") r.delete("/sessions/:id", controller.deleteSession);

  // Items (Inbound)
  if (typeof controller.patchItem === "function") r.patch("/items/:id", controller.patchItem);
  if (typeof controller.deleteItem === "function") r.delete("/items/:id", controller.deleteItem);

  // If your existing controller uses different names, add aliases here safely:
  if (typeof controller.listInbounds === "function") r.get("/inbounds", controller.listInbounds);
  if (typeof controller.deleteBySerial === "function") r.delete("/serial/:serialNumber", controller.deleteBySerial);

  return r;
};
