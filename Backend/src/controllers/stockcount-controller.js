export function stockcountController({ service }) {
  const userId = (req) => req.user?.id ?? req.user?.userId ?? req.user?.uid;

  const wrap = (fn) => async (req, res, next) => {
    try {
      const result = await fn(req, res);
      return res.json(result);
    } catch (e) {
      return next(e);
    }
  };

  return {
    // Reports
    listReports: wrap((req) => service.listReports({ userId: userId(req) })),
    createReport: wrap((req) => service.createReport({ userId: userId(req), name: req.body?.name })),
    // routes use :reportId (not :id)
    getReport: wrap((req) =>
      service.getReport({ userId: userId(req), reportId: req.params.reportId ?? req.params.id })
    ),

    // Phase 1
    getPhase1Rooms: wrap((req) =>
      service.getPhase1Rooms({ userId: userId(req), reportId: req.params.reportId ?? req.params.id })
    ),
    phase1StartRoom: wrap((req) =>
      service.phase1StartRoom({
        userId: userId(req),
        reportId: req.params.reportId ?? req.params.id,
        roomId: req.params.roomId,
      })
    ),

    phase1CheckBox: wrap((req) =>
      service.phase1CheckBox({
        userId: userId(req),
        reportId: req.params.reportId ?? req.params.id,
        roomId: req.params.roomId,
        boxId: req.body?.boxId,
      })
    ),

    phase1ScanBox: wrap((req) =>
      service.phase1ScanBox({
        userId: userId(req),
        reportId: req.params.reportId ?? req.params.id,
        roomId: req.params.roomId,
        boxId: req.body?.boxId,
      })
    ),
    phase1CompleteRoom: wrap((req) =>
      service.phase1CompleteRoom({
        userId: userId(req),
        reportId: req.params.reportId ?? req.params.id,
        roomId: req.params.roomId,
      })
    ),
    phase1ResetRoom: wrap((req) =>
      service.phase1ResetRoom({
        userId: userId(req),
        reportId: req.params.reportId ?? req.params.id,
        roomId: req.params.roomId,
      })
    ),

    // Phase 2


    getPhase2Rooms: wrap((req) =>
      service.getPhase2Rooms({ userId: userId(req), reportId: req.params.reportId ?? req.params.id })
    ),
    phase2ClaimBox: wrap((req) =>
      service.phase2ClaimBox({
        userId: userId(req),
        reportId: req.params.reportId ?? req.params.id,
        roomId: req.body?.roomId,
        boxId: req.body?.boxId,
      })
    ),
    phase2UpsertLine: wrap((req) =>
      service.phase2UpsertLine({
        userId: userId(req),
        reportId: req.params.reportId ?? req.params.id,
        boxId: req.body?.boxId,
        sku: req.body?.sku,
        qty: req.body?.qty,
      })
    ),
    phase2CompleteBox: wrap((req) =>
      service.phase2CompleteBox({
        userId: userId(req),
        reportId: req.params.reportId ?? req.params.id,
        boxId: req.body?.boxId,
      })
    ),
    phase2ResetBox: wrap((req) =>
      service.phase2ResetBox({
        userId: userId(req),
        reportId: req.params.reportId ?? req.params.id,
        boxId: req.body?.boxId,
      })
    ),
    phase2CompleteRoom: wrap((req) =>
      service.phase2CompleteRoom({
        userId: userId(req),
        reportId: req.params.reportId ?? req.params.id,
        roomId: req.body?.roomId,
      })
    ),

    // Summary
    getSummary: wrap((req) =>
      service.getSummary({ userId: userId(req), reportId: req.params.reportId ?? req.params.id })
    ),
    confirmReport: wrap((req) =>
      service.confirmReport({ userId: userId(req), reportId: req.params.reportId ?? req.params.id })
    ),
    summaryResetRoom: wrap((req) =>
      service.summaryResetRoom({
        userId: userId(req),
        reportId: req.params.reportId ?? req.params.id,
        roomId: req.body?.roomId,
      })
    ),
        downloadReportXlsx: async (req, res, next) => {
      try {
        // ✅ your backend has param mismatch in places,
        // so safely support both keys:
        const reportId = req.params.reportId ?? req.params.id;

        const { filename, buffer } = await service.downloadReportXlsx({
          userId: userId(req),
          reportId,
        });

        res.setHeader(
          "Content-Type",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
        return res.send(Buffer.from(buffer));
      } catch (e) {
        return next(e);
      }
    },

    phase2ResetBoxWithComment: wrap((req) =>
  service.phase2ResetBoxWithComment({
    userId: userId(req),
    reportId: req.params.reportId,
    boxId: req.body?.boxId,
    comment: req.body?.comment,
  })
),


  };
}
