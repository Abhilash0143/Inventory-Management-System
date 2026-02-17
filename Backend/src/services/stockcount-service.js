
import ExcelJS from "exceljs";

export function stockcountService({ repo }) {
  const makeErr = (statusCode, message, meta) => {
    const e = new Error(message);
    e.statusCode = statusCode;
    if (meta) e.meta = meta;
    return e;
  };

  const prefixOf = (boxId) => {
    const s = String(boxId || "").trim().toUpperCase();
    const p = s.split("-")[0];
    return p.slice(0, 3);
  };

  const LOCKED = new Set(["PML", "CML"]);
  const UNLOCKED = new Set(["PSN", "CSN"]);

  // ✅ NEW: enforce allowed prefixes for both Phase 1 and Phase 2
  const ensureAllowedPrefix = (boxId) => {
    const b = String(boxId || "").trim().toUpperCase();
    if (!b) throw makeErr(400, "boxId required");
    const p = prefixOf(b);
    if (!LOCKED.has(p) && !UNLOCKED.has(p)) {
      throw makeErr(400, `Invalid box: ${p}`, {
        allowedPrefixes: [...LOCKED, ...UNLOCKED],
      });
    }
    return { b, p };
  };

  async function ensureReport(reportId) {
    const rep = await repo.getReport(reportId);
    if (!rep) throw makeErr(404, "Report not found");
    return rep;
  }

  async function ensureReportRoom(reportId, roomId) {
    const rr = await repo.getReportRoom(reportId, roomId);
    if (!rr) throw makeErr(404, "Room not found in report");
    return rr;
  }

  function ensureRoomOwner(rr, userId) {
    if (!rr.phase1_owner) throw makeErr(409, "Room not started");
    if (String(rr.phase1_owner) !== String(userId)) {
      throw makeErr(423, "Room locked by another user", { owner: rr.phase1_owner });
    }
  }

  // -------- Reports --------
  async function listReports() {
    const rows = await repo.listReports();
    const out = [];
    for (const r of rows) {
      const computed = await repo.computeReportPhaseAndStatus(r.id);
      out.push({
        id: String(r.id),
        name: r.name,
        status: computed.status,
        phase: computed.phase,
        updatedAt: r.updated_at,
      });
    }
    return out;
  }

  async function createReport({ userId, name }) {
    if (!name || !String(name).trim()) throw makeErr(400, "Name required");

    // (optional but recommended) if your repo supports checking uniqueness:
    // const exists = await repo.reportNameExists?.(String(name).trim());
    // if (exists) throw makeErr(409, "Report name already exists");

    const reportId = await repo.createReport({ name: String(name).trim(), userId });

    const rooms = await repo.listRooms();
    if (!rooms.length) throw makeErr(500, "No rooms configured");
    await repo.createReportRooms(reportId, rooms.map((x) => x.id));

    return { id: reportId, message: "Report created" };
  }

  async function getReport({ reportId }) {
    const rep = await ensureReport(reportId);
    const computed = await repo.computeReportPhaseAndStatus(reportId);

    let nextRoute = `/stock-count/${reportId}/phase1`;
    if (computed.phase === 2) nextRoute = `/stock-count/${reportId}/phase2`;
    if (computed.phase === "summary") nextRoute = `/stock-count/${reportId}/summary`;

    return {
      id: String(rep.id),
      name: rep.name,
      status: computed.status,
      phase: computed.phase,
      updatedAt: rep.updated_at,
      nextRoute,
    };
  }

  // -------- Phase 1 --------
  async function getPhase1Rooms({ reportId }) {
    await ensureReport(reportId);
    const rooms = await repo.getPhase1Rooms(reportId);
    return { rooms };
  }

  async function phase1StartRoom({ userId, reportId, roomId }) {
    await ensureReport(reportId);
    const rr = await ensureReportRoom(reportId, roomId);

    if (rr.phase1_status === "Completed") throw makeErr(409, "Phase1 already completed for room");

    if (!rr.phase1_owner) {
      await repo.claimPhase1RoomOwner(reportId, roomId, userId);
    } else if (String(rr.phase1_owner) !== String(userId)) {
      throw makeErr(423, "Room locked by another user", { owner: rr.phase1_owner });
    }

    await repo.bumpReportInProgress(reportId);
    return { message: "Room started" };
  }

  // ✅ UPDATED: Phase 1 scan only allows LOCKED/UNLOCKED prefixes
  // ✅ UPDATED: report-wide uniqueness
  async function phase1CheckBox({ userId, reportId, roomId, boxId }) {
    await ensureReport(reportId);
    const rr = await ensureReportRoom(reportId, roomId);
    ensureRoomOwner(rr, userId);

    const { b } = ensureAllowedPrefix(boxId);

    const current = await repo.getPhase1BoxByReport(reportId, b);

    if (current && String(current.room_id) !== String(roomId)) {
      throw makeErr(409, `Box already exist in the report: ${b}`, {
        existingRoomId: String(current.room_id),
      });
    }

    // ok to proceed
    return { ok: true, boxId: b };
  }


  async function phase1ScanBox({ userId, reportId, roomId, boxId }) {
    await ensureReport(reportId);
    const rr = await ensureReportRoom(reportId, roomId);
    ensureRoomOwner(rr, userId);

    const { b } = ensureAllowedPrefix(boxId);

    // ✅ LOOKUP ACROSS REPORT (not per room)
    const current = await repo.getPhase1BoxByReport(reportId, b);

    // if scanned in a different room, block it
    if (current && String(current.room_id) !== String(roomId)) {
      throw makeErr(409, `Duplicate box in this report: ${b}`, {
        existingRoomId: String(current.room_id),
      });
    }

    // first time
    if (!current) {
      await repo.upsertPhase1Box(reportId, roomId, b, 1, "ScannedOnce");
      await repo.bumpReportInProgress(reportId);
      return { message: `Scanned once: ${b}`, scanCount: 1, status: "ScannedOnce" };
    }

    // already verified
    if (current.scan_count >= 2) {
      return { message: `Already verified: ${b}`, scanCount: 2, status: "Verified" };
    }

    // second scan -> verified
    await repo.upsertPhase1Box(reportId, roomId, b, 2, "Verified");
    await repo.bumpReportInProgress(reportId);
    return { message: `Verified: ${b}`, scanCount: 2, status: "Verified" };
  }


  async function phase1CompleteRoom({ userId, reportId, roomId }) {
    await ensureReport(reportId);
    const rr = await ensureReportRoom(reportId, roomId);
    ensureRoomOwner(rr, userId);

    const pending = await repo.countPhase1PendingVerify(reportId, roomId);
    if (pending > 0) throw makeErr(409, "Cannot complete: some boxes are not verified");

    await repo.setPhase1RoomCompleted(reportId, roomId);
    await repo.bumpReportInProgress(reportId);
    return { message: "Phase1 room completed" };
  }

  async function phase1ResetRoom({ userId, reportId, roomId }) {
    await ensureReport(reportId);
    const rr = await ensureReportRoom(reportId, roomId);

    if (!rr.phase1_owner) throw makeErr(409, "Room not started");
    if (String(rr.phase1_owner) !== String(userId)) throw makeErr(403, "Only room owner can reset");

    await repo.resetPhase1Room(reportId, roomId);
    await repo.bumpReportInProgress(reportId);
    return { message: "Phase1 reset done" };
  }

  // -------- Phase 2 --------
  async function getPhase2Rooms({ reportId }) {
    await ensureReport(reportId);
    const allP1 = await repo.isAllPhase1RoomsCompleted(reportId);
    if (!allP1) throw makeErr(409, "Phase 2 locked until all Phase 1 rooms are completed");

    const rooms = await repo.getPhase2RoomsComputed(reportId, { lockedPrefixes: LOCKED, unlockedPrefixes: UNLOCKED });
    return { rooms };
  }

  // ✅ UPDATED:
  // - Only allow LOCKED/UNLOCKED prefixes
  // - Only allow boxes that are VERIFIED in Phase 1 (scan_count >= 2)
  async function phase2ClaimBox({ userId, reportId, roomId, boxId }) {
    if (!roomId) throw makeErr(400, "roomId required");

    await ensureReport(reportId);
    const allP1 = await repo.isAllPhase1RoomsCompleted(reportId);
    if (!allP1) throw makeErr(409, "Phase 2 locked until all Phase 1 rooms are completed");

    const rr = await ensureReportRoom(reportId, roomId);
    if (rr.phase2_status === "Completed") throw makeErr(409, "Room already completed");

    const { b, p } = ensureAllowedPrefix(boxId);

    // ✅ enforce “only scanned in phase 1 is allowed”
    // NOTE: this checks within the same roomId. If you want "any room", tell me.
    const p1 = await repo.getPhase1Box(reportId, roomId, b);
    if (!p1) throw makeErr(409, "Box not scanned in Phase 1");
    if (Number(p1.scan_count || 0) < 2) throw makeErr(409, "Box not verified in Phase 1");

    if (LOCKED.has(p)) {
      await repo.upsertPhase2BoxWork(reportId, roomId, b, null, "SkippedLocked");
      await repo.bumpReportInProgress(reportId);
      return { skippedLocked: true, message: "Locked box skipped" };
    }

    const existing = await repo.getPhase2BoxWork(reportId, b);
    if (existing?.assigned_to && String(existing.assigned_to) !== String(userId) && existing.status === "InProgress") {
      throw makeErr(423, "Box locked by another user", { owner: existing.assigned_to });
    }

    if (existing?.status === "Completed") {
      throw makeErr(409, "Box already completed");
    }

    await repo.upsertPhase2BoxWork(reportId, roomId, b, userId, "InProgress");
    await repo.bumpReportInProgress(reportId);
    return { skippedLocked: false, message: "Box claimed" };
  }

  async function phase2UpsertLine({ userId, reportId, boxId, sku, qty }) {
    if (!boxId) throw makeErr(400, "boxId required");
    if (!sku) throw makeErr(400, "sku required");
    if (!qty || Number(qty) <= 0) throw makeErr(400, "qty must be > 0");

    await ensureReport(reportId);
    const b = String(boxId).trim().toUpperCase();

    const work = await repo.getPhase2BoxWork(reportId, b);
    if (!work) throw makeErr(409, "Box not claimed");
    if (work.status !== "InProgress") throw makeErr(409, "Box not in progress");
    if (String(work.assigned_to) !== String(userId)) throw makeErr(403, "Only assigned user can add lines");

    await repo.upsertPhase2Line(reportId, work.room_id, b, String(sku).trim().toUpperCase(), Number(qty));
    await repo.bumpReportInProgress(reportId);
    return { message: "Line saved" };
  }

  async function phase2CompleteBox({ userId, reportId, boxId }) {
    if (!boxId) throw makeErr(400, "boxId required");
    await ensureReport(reportId);

    const b = String(boxId).trim().toUpperCase();
    const work = await repo.getPhase2BoxWork(reportId, b);
    if (!work) throw makeErr(409, "Box not claimed");
    if (work.status === "SkippedLocked") return { message: "Already skipped" };
    if (String(work.assigned_to) !== String(userId)) throw makeErr(403, "Only assigned user can complete");

    const lines = await repo.countPhase2Lines(reportId, b);
    if (lines <= 0) throw makeErr(409, "No SKU lines added");

    await repo.setPhase2BoxStatus(reportId, b, "Completed");
    await repo.bumpReportInProgress(reportId);

    const complete = await repo.isAllPhase2RoomsCompletedOrDisabled(reportId, { lockedPrefixes: LOCKED, unlockedPrefixes: UNLOCKED });
    if (complete) await repo.setReportCompleted(reportId);

    return { message: "Box completed" };
  }

  async function phase2ResetBox({ userId, reportId, boxId }) {
    if (!boxId) throw makeErr(400, "boxId required");
    await ensureReport(reportId);

    const b = String(boxId).trim().toUpperCase();
    const work = await repo.getPhase2BoxWork(reportId, b);
    if (!work) throw makeErr(409, "Box not claimed");

    if (work.status === "SkippedLocked") throw makeErr(409, "Cannot reset skipped locked box");
    if (String(work.assigned_to) !== String(userId)) throw makeErr(403, "Only assigned user can reset");

    await repo.resetPhase2Box(reportId, b);
    await repo.bumpReportInProgress(reportId);
    return { message: "Box reset" };
  }

  async function phase2CompleteRoom({ reportId, roomId }) {
    if (!roomId) throw makeErr(400, "roomId required");
    await ensureReport(reportId);

    const pending = await repo.getPendingUnlockedBoxes(reportId, roomId, { lockedPrefixes: LOCKED });

    if (pending.length > 0) {
      if (pending.length > 5) throw makeErr(409, "5+ boxes are still pending");
      throw makeErr(409, "Boxes pending", { pendingBoxes: pending.map((x) => x.box_id) });
    }

    await repo.setPhase2RoomCompleted(reportId, roomId);

    const complete = await repo.isAllPhase2RoomsCompletedOrDisabled(reportId, { lockedPrefixes: LOCKED, unlockedPrefixes: UNLOCKED });
    if (complete) await repo.setReportCompleted(reportId);

    return { message: "Room completed" };
  }

  // -------- Summary --------
  async function getSummary({ reportId }) {
    await ensureReport(reportId);

    const summary = await repo.getSummary(reportId);

    // ✅ pull locked boxes from Phase 1 verified list
    const lockedBoxes = await repo.getPhase1LockedBoxesByRoom(reportId);

    return {
      ...summary,
      lockedBoxes, // [{ room_id, box_id }]
    };
  }

  async function downloadReportXlsx({ reportId }) {
  const rep = await ensureReport(reportId);

  const phase1Boxes = await repo.getPhase1BoxesForReport(reportId);
  const phase2Lines = await repo.getPhase2LinesForReport(reportId);

  const wb = new ExcelJS.Workbook();
  wb.creator = "StockCount";
  wb.created = new Date();

  // Excel sheet name rules: max 31 chars, no: []:*?/\
  const safeSheetName = (name) =>
    (String(name || "Sheet").replace(/[\[\]\*\/\\\?\:]/g, "-") || "Sheet").slice(0, 31);

  // -------------------------
  // Group Phase 1 by stockroom => Set(BoxID)
  // -------------------------
  const p1ByRoom = new Map(); // roomName => Set(boxId)
  for (const b of phase1Boxes || []) {
    const roomName = b?.stock_rooms?.name || String(b.room_id);
    const boxId = String(b.box_id || "").trim();
    if (!boxId) continue;

    if (!p1ByRoom.has(roomName)) p1ByRoom.set(roomName, new Set());
    p1ByRoom.get(roomName).add(boxId);
  }

  // Stable ordering: sort stockrooms by name so S1/S2 are consistent
  const p1RoomsSorted = Array.from(p1ByRoom.entries()).sort(([a], [b]) => a.localeCompare(b));

  // -------------------------
  // Sheet 1 & 2: Phase-1 Box Count per stockroom
  // Names: "Box Count - S1", "Box Count - S2"
  // Columns: Box ID
  // -------------------------
  for (let i = 0; i < Math.min(2, p1RoomsSorted.length); i++) {
    const [, boxSet] = p1RoomsSorted[i];
    const sheetName = safeSheetName(`Box Count - S${i + 1}`);

    const sheet = wb.addWorksheet(sheetName, {
      views: [{ state: "frozen", ySplit: 1 }],
    });

    sheet.columns = [{ header: "Box ID", key: "boxId", width: 22 }];
    sheet.getRow(1).font = { bold: true };

    const boxIds = Array.from(boxSet).sort((a, b) => a.localeCompare(b));
    for (const boxId of boxIds) {
      sheet.addRow({ boxId });
    }
  }

  // -------------------------
  // Group Phase 2 by stockroom => [{boxId, sku, qty}]
  // -------------------------
  const p2ByRoom = new Map(); // roomName => Array<{boxId, sku, qty}>
  for (const l of phase2Lines || []) {
    const roomName = l?.stock_rooms?.name || String(l.room_id);
    const boxId = String(l.box_id || "").trim();
    if (!boxId) continue;

    if (!p2ByRoom.has(roomName)) p2ByRoom.set(roomName, []);
    p2ByRoom.get(roomName).push({
      boxId,
      sku: String(l.sku || ""),
      qty: Number(l.qty || 0),
    });
  }

  // Stable ordering for Stockroom 1/2
  const p2RoomsSorted = Array.from(p2ByRoom.entries()).sort(([a], [b]) => a.localeCompare(b));

  // -------------------------
  // Sheet 3 & 4: Phase-2 per stockroom
  // Names: "Phase-2 - Stockroom 1", "Phase-2 - Stockroom 2"
  // Columns: Box ID, SKU, Qty
  // -------------------------
  for (let i = 0; i < Math.min(2, p2RoomsSorted.length); i++) {
    const [, lines] = p2RoomsSorted[i];
    const sheetName = safeSheetName(`Phase-2 - Stockroom ${i + 1}`);

    const sheet = wb.addWorksheet(sheetName, {
      views: [{ state: "frozen", ySplit: 1 }],
    });

    sheet.columns = [
      { header: "Box ID", key: "boxId", width: 22 },
      { header: "SKU", key: "sku", width: 28 },
      { header: "Qty", key: "qty", width: 10 },
    ];
    sheet.getRow(1).font = { bold: true };

    // Nice ordering: Box ID then SKU
    lines.sort((a, b) => {
      const c1 = a.boxId.localeCompare(b.boxId);
      if (c1 !== 0) return c1;
      return a.sku.localeCompare(b.sku);
    });

    for (const row of lines) {
      sheet.addRow(row);
    }
  }

  const filename = `stockcount-${rep.id}.xlsx`;
  const buffer = await wb.xlsx.writeBuffer();
  return { filename, buffer };
}


  async function confirmReport({ reportId }) {
    await ensureReport(reportId);
    const ok = await repo.isAllPhase2RoomsCompletedOrDisabled(reportId, { lockedPrefixes: LOCKED, unlockedPrefixes: UNLOCKED });
    if (!ok) throw makeErr(409, "Cannot confirm: Phase 2 not finished");

    await repo.setReportConfirmed(reportId);
    return { message: "Report confirmed" };
  }

  async function summaryResetRoom({ reportId, roomId }) {
    if (!roomId) throw makeErr(400, "roomId required");
    await ensureReport(reportId);

    await repo.resetPhase2Room(reportId, roomId);
    await repo.bumpReportInProgress(reportId);

    return { message: "Room reset. Phase 2 reopened for this room." };
  }

  // -------- Reset single box (Phase1 or Phase2) with comment --------
  async function phase2ResetBoxWithComment({ userId, reportId, boxId, comment }) {
    if (!boxId) throw makeErr(400, "boxId required");
    const c = String(comment || "").trim();
    if (!c) throw makeErr(400, "Comment required");

    await ensureReport(reportId);

    const { b, p } = ensureAllowedPrefix(boxId);

    // only unlocked boxes can be reset (locked are skipped)
    if (LOCKED.has(p)) throw makeErr(409, "Locked box cannot be reset");

    const work = await repo.getPhase2BoxWork(reportId, b);
    if (!work) throw makeErr(409, "Box not claimed / not in Phase 2 work");

    if (work.status === "SkippedLocked") throw makeErr(409, "Cannot reset skipped locked box");
    if (String(work.assigned_to) !== String(userId)) throw makeErr(403, "Only assigned user can reset");

    await repo.resetPhase2Box(reportId, b);

    // ✅ Make report InProgress so Continue button returns
    await repo.bumpReportInProgress(reportId);

    // ✅ We won't store comment in DB (no schema changes)
    // But you can console log for now:
    // console.log("PHASE2 RESET", { reportId, boxId: b, comment: c, userId });

    return { message: "Phase 2 box reset", boxId: b };
  }


  return {
    // reports
    listReports,
    createReport,
    getReport,

    // phase1
    getPhase1Rooms,
    phase1StartRoom,
    phase1ScanBox,
    phase1CompleteRoom,
    phase1ResetRoom,
    phase1CheckBox,

    // phase2
    getPhase2Rooms,
    phase2ClaimBox,
    phase2UpsertLine,
    phase2CompleteBox,
    phase2ResetBox,
    phase2CompleteRoom,
    phase2ResetBoxWithComment,

    // summary
    getSummary,
    confirmReport,
    summaryResetRoom,

    downloadReportXlsx,
  };
}
