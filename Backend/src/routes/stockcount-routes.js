import { Router } from "express";

export const stockcountRoutes = (controller) => {
  const r = Router();

  // Reports
  r.get("/reports", controller.listReports);
  r.post("/reports", controller.createReport);
  r.get("/reports/:reportId", controller.getReport);
  r.get("/reports/:reportId/download", controller.downloadReportXlsx);

  // Phase 1
// Phase 1 (frontend alias style)
r.get("/reports/:reportId/rooms", controller.getPhase1Rooms);
r.post("/reports/:reportId/rooms/:roomId/phase1/start", controller.phase1StartRoom);
r.post("/reports/:reportId/rooms/:roomId/phase1/check-box", controller.phase1CheckBox);
r.post("/reports/:reportId/rooms/:roomId/phase1/scan", controller.phase1ScanBox);
r.post("/reports/:reportId/rooms/:roomId/phase1/complete", controller.phase1CompleteRoom);
r.post("/reports/:reportId/rooms/:roomId/phase1/reset", controller.phase1ResetRoom);


  // Phase 2 (body-based)
  r.get("/reports/:reportId/phase2/rooms", controller.getPhase2Rooms);
  r.post("/reports/:reportId/phase2/box/claim", controller.phase2ClaimBox);
  r.post("/reports/:reportId/phase2/line", controller.phase2UpsertLine);
  r.post("/reports/:reportId/phase2/box/complete", controller.phase2CompleteBox);
  r.post("/reports/:reportId/phase2/box/reset", controller.phase2ResetBox);
  r.post("/reports/:reportId/phase2/room/complete", controller.phase2CompleteRoom);
  r.post("/reports/:reportId/phase2/box/reset", controller.phase2ResetBoxWithComment);

  // Summary
  r.get("/reports/:reportId/summary", controller.getSummary);
  r.post("/reports/:reportId/confirm", controller.confirmReport);
  r.post("/reports/:reportId/summary/reset-room", controller.summaryResetRoom);

  return r;
};
