export function stockcountRepo(prisma) {
  // ---------- Reports ----------
  async function createReport({ name, userId }) {
    const r = await prisma.stock_reports.create({
      data: { name, status: "Pending", created_by: String(userId) },
      select: { id: true },
    });
    return r.id;
  }

  async function getReport(reportId) {
    return prisma.stock_reports.findUnique({ where: { id: BigInt(reportId) } });
  }

  async function bumpReportInProgress(reportId) {
    await prisma.stock_reports.update({
      where: { id: BigInt(reportId) },
      data: {
        status: "InProgress",
        updated_at: new Date(),
      },
    }).catch(() => {});
  }

  async function getPhase1BoxByReport(reportId, boxId) {
    return prisma.phase1_boxes.findFirst({
      where: { report_id: BigInt(reportId), box_id: boxId },
      select: { report_id: true, room_id: true, box_id: true, scan_count: true, status: true },
    });
  }

  async function getPhase2LockedBoxes(reportId) {
    return prisma.phase2_box_work.findMany({
      where: { report_id: BigInt(reportId), status: "SkippedLocked" },
      select: { room_id: true, box_id: true },
      orderBy: [{ room_id: "asc" }, { box_id: "asc" }],
    });
  }

  async function setReportCompleted(reportId) {
    await prisma.stock_reports.update({
      where: { id: BigInt(reportId) },
      data: { status: "Completed", updated_at: new Date() },
    });
  }

  async function setReportConfirmed(reportId) {
    await prisma.stock_reports.update({
      where: { id: BigInt(reportId) },
      data: { status: "Confirmed", updated_at: new Date() },
    });
  }

  async function listReports() {
    return prisma.stock_reports.findMany({
      select: { id: true, name: true, status: true, updated_at: true },
      orderBy: { updated_at: "desc" },
    });
  }

  // ---------- Rooms ----------
  async function listRooms() {
    return prisma.stock_rooms.findMany({
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    });
  }

  async function createReportRooms(reportId, roomIds) {
    await prisma.report_rooms.createMany({
      data: roomIds.map((roomId) => ({
        report_id: BigInt(reportId),
        room_id: BigInt(roomId),
        phase1_owner: null,
        phase1_status: "NotStarted",
        phase2_status: "NotStarted",
      })),
      skipDuplicates: true,
    });
  }

  async function getReportRoom(reportId, roomId) {
    return prisma.report_rooms.findUnique({
      where: {
        report_id_room_id: { report_id: BigInt(reportId), room_id: BigInt(roomId) },
      },
    });
  }

  async function getPhase1Rooms(reportId) {
    const rows = await prisma.report_rooms.findMany({
      where: { report_id: BigInt(reportId) },
      select: {
        room_id: true,
        phase1_owner: true,
        phase1_status: true,
        stock_rooms: { select: { name: true } },
      },
      orderBy: { stock_rooms: { name: "asc" } },
    });

    return rows.map((r) => ({
      roomId: String(r.room_id),
      name: r.stock_rooms.name,
      phase1Owner: r.phase1_owner,
      phase1Status: r.phase1_status,
    }));
  }

  async function claimPhase1RoomOwner(reportId, roomId, userId) {
    const rid = BigInt(reportId);
    const rm = BigInt(roomId);
    const uid = String(userId);

    return prisma.$transaction(async (tx) => {
      const rr = await tx.report_rooms.findUnique({
        where: { report_id_room_id: { report_id: rid, room_id: rm } },
        select: { phase1_owner: true },
      });

      if (!rr) return;

      if (rr.phase1_owner && String(rr.phase1_owner) !== uid) {
        const e = new Error("Room locked by another user");
        e.statusCode = 423;
        e.meta = { owner: rr.phase1_owner };
        throw e;
      }

      if (!rr.phase1_owner) {
        await tx.report_rooms.update({
          where: { report_id_room_id: { report_id: rid, room_id: rm } },
          data: { phase1_owner: uid, phase1_status: "InProgress" },
        });
      }
    });
  }

  async function setPhase1RoomCompleted(reportId, roomId) {
    await prisma.report_rooms.update({
      where: { report_id_room_id: { report_id: BigInt(reportId), room_id: BigInt(roomId) } },
      data: { phase1_status: "Completed" },
    });
  }

  async function resetPhase1Room(reportId, roomId) {
    const rid = BigInt(reportId);
    const rm = BigInt(roomId);

    await prisma.$transaction([
      prisma.phase1_boxes.deleteMany({ where: { report_id: rid, room_id: rm } }),
      prisma.report_rooms.update({
        where: { report_id_room_id: { report_id: rid, room_id: rm } },
        data: { phase1_owner: null, phase1_status: "NotStarted" },
      }),
    ]);
  }

  async function isAllPhase1RoomsCompleted(reportId) {
    const c = await prisma.report_rooms.count({
      where: { report_id: BigInt(reportId), phase1_status: { not: "Completed" } },
    });
    return c === 0;
  }

  // ---------- Phase 1 boxes ----------
  async function getPhase1Box(reportId, roomId, boxId) {
    return prisma.phase1_boxes.findUnique({
      where: {
        report_id_room_id_box_id: {
          report_id: BigInt(reportId),
          room_id: BigInt(roomId),
          box_id: boxId,
        },
      },
    });
  }

  async function upsertPhase1Box(reportId, roomId, boxId, scanCount, status) {
    await prisma.phase1_boxes.upsert({
      where: {
        report_id_room_id_box_id: {
          report_id: BigInt(reportId),
          room_id: BigInt(roomId),
          box_id: boxId,
        },
      },
      create: {
        report_id: BigInt(reportId),
        room_id: BigInt(roomId),
        box_id: boxId,
        scan_count: scanCount,
        status,
      },
      update: { scan_count: scanCount, status },
    });
  }

  async function countPhase1PendingVerify(reportId, roomId) {
    return prisma.phase1_boxes.count({
      where: { report_id: BigInt(reportId), room_id: BigInt(roomId), scan_count: { lt: 2 } },
    });
  }

  // ---------- Phase computation ----------
  async function computeReportPhaseAndStatus(reportId) {
    const rep = await getReport(reportId);
    if (!rep) return { phase: 1, status: "Pending" };
    if (rep.status === "Confirmed") return { phase: "summary", status: "Confirmed" };

    const allP1 = await isAllPhase1RoomsCompleted(reportId);
    if (!allP1) {
      const started = await prisma.report_rooms.count({
        where: { report_id: BigInt(reportId), phase1_status: "InProgress" },
      });
      return { phase: 1, status: started > 0 ? "InProgress" : rep.status };
    }

    const left = await prisma.report_rooms.count({
      where: { report_id: BigInt(reportId), phase2_status: { not: "Completed" } },
    });

    if (left === 0) return { phase: "summary", status: "Completed" };
    return { phase: 2, status: rep.status === "Pending" ? "InProgress" : rep.status };
  }

  // ---------- Phase 2 computed rooms ----------
  async function getPhase2RoomsComputed(reportId, { lockedPrefixes, unlockedPrefixes }) {
    const rid = BigInt(reportId);

    const rooms = await prisma.report_rooms.findMany({
      where: { report_id: rid },
      select: {
        room_id: true,
        phase2_status: true,
        stock_rooms: { select: { name: true } },
      },
      orderBy: { stock_rooms: { name: "asc" } },
    });

    const out = [];
    for (const r of rooms) {
      const boxes = await prisma.phase1_boxes.findMany({
        where: { report_id: rid, room_id: r.room_id },
        select: { box_id: true },
      });

      let unlockedTotal = 0;
      let lockedTotal = 0;

      for (const b of boxes) {
        const id = String(b.box_id).toUpperCase();
        const p = id.split("-")[0].slice(0, 3);
        if (lockedPrefixes.has(p)) lockedTotal++;
        else if (unlockedPrefixes.has(p)) unlockedTotal++;
        else unlockedTotal++;
      }

      const done = await prisma.phase2_box_work.count({
        where: { report_id: rid, room_id: r.room_id, status: "Completed" },
      });

      out.push({
        roomId: String(r.room_id),
        name: r.stock_rooms.name,
        phase2Status: r.phase2_status,
        enabled: unlockedTotal > 0,
        unlockedTotal,
        unlockedCompleted: done,
        lockedTotal,
      });
    }

    return out;
  }

  // ---------- Phase 2 work + lines ----------
  async function getPhase2BoxWork(reportId, boxId) {
    return prisma.phase2_box_work.findUnique({
      where: { report_id_box_id: { report_id: BigInt(reportId), box_id: boxId } },
    });
  }

  async function upsertPhase2BoxWork(reportId, roomId, boxId, assignedTo, status) {
    await prisma.phase2_box_work.upsert({
      where: { report_id_box_id: { report_id: BigInt(reportId), box_id: boxId } },
      create: {
        report_id: BigInt(reportId),
        room_id: BigInt(roomId),
        box_id: boxId,
        assigned_to: assignedTo,
        status,
      },
      update: {
        room_id: BigInt(roomId),
        assigned_to: assignedTo,
        status,
      },
    });
  }

  async function upsertPhase2Line(reportId, roomId, boxId, sku, qty) {
    await prisma.phase2_lines.create({
      data: {
        report_id: BigInt(reportId),
        room_id: BigInt(roomId),
        box_id: boxId,
        sku,
        qty,
      },
    });
  }

  async function countPhase2Lines(reportId, boxId) {
    return prisma.phase2_lines.count({
      where: { report_id: BigInt(reportId), box_id: boxId },
    });
  }

  async function setPhase2BoxStatus(reportId, boxId, status) {
    await prisma.phase2_box_work.update({
      where: { report_id_box_id: { report_id: BigInt(reportId), box_id: boxId } },
      data: { status },
    });
  }

  async function resetPhase2Box(reportId, boxId) {
    const rid = BigInt(reportId);

    await prisma.$transaction([
      prisma.phase2_lines.deleteMany({ where: { report_id: rid, box_id: boxId } }),
      prisma.phase2_box_work.deleteMany({ where: { report_id: rid, box_id: boxId } }),
    ]);
  }

  async function getPendingUnlockedBoxes(reportId, roomId, { lockedPrefixes }) {
    const rid = BigInt(reportId);
    const rm = BigInt(roomId);

    const boxes = await prisma.phase1_boxes.findMany({
      where: { report_id: rid, room_id: rm },
      select: { box_id: true },
    });

    const unlocked = [];
    for (const b of boxes) {
      const id = String(b.box_id).toUpperCase();
      const p = id.split("-")[0].slice(0, 3);
      if (!lockedPrefixes.has(p)) unlocked.push(id);
    }
    if (!unlocked.length) return [];

    const done = await prisma.phase2_box_work.findMany({
      where: { report_id: rid, room_id: rm, status: "Completed" },
      select: { box_id: true },
    });

    const doneSet = new Set(done.map((x) => String(x.box_id).toUpperCase()));
    return unlocked.filter((id) => !doneSet.has(id)).map((id) => ({ box_id: id }));
  }

  async function setPhase2RoomCompleted(reportId, roomId) {
    await prisma.report_rooms.update({
      where: { report_id_room_id: { report_id: BigInt(reportId), room_id: BigInt(roomId) } },
      data: { phase2_status: "Completed" },
    });
  }

  async function isAllPhase2RoomsCompletedOrDisabled(reportId, { lockedPrefixes, unlockedPrefixes }) {
    const rooms = await getPhase2RoomsComputed(reportId, { lockedPrefixes, unlockedPrefixes });
    for (const r of rooms) {
      if (r.enabled === false) continue;
      const rr = await getReportRoom(reportId, r.roomId);
      if (rr.phase2_status !== "Completed") return false;
    }
    return true;
  }

  // ---------- Summary ----------
  async function getSummary(reportId) {
    const rid = BigInt(reportId);

    const report = await prisma.stock_reports.findUnique({
      where: { id: rid },
      select: { id: true, name: true, status: true, updated_at: true },
    });

    const rooms = await getPhase2RoomsComputed(reportId, {
      lockedPrefixes: new Set(["PML", "CML"]),
      unlockedPrefixes: new Set(["PSN", "CSN"]),
    });

    const lines = await prisma.phase2_lines.findMany({
      where: { report_id: rid },
      select: { room_id: true, box_id: true, sku: true, qty: true },
      orderBy: [{ room_id: "asc" }, { box_id: "asc" }, { sku: "asc" }],
    });

    return { report, rooms, lines };
  }

  async function resetPhase2Room(reportId, roomId) {
    const rid = BigInt(reportId);
    const rm = BigInt(roomId);

    await prisma.$transaction([
      prisma.phase2_lines.deleteMany({ where: { report_id: rid, room_id: rm } }),
      prisma.phase2_box_work.deleteMany({ where: { report_id: rid, room_id: rm } }),
      prisma.report_rooms.update({
        where: { report_id_room_id: { report_id: rid, room_id: rm } },
        data: { phase2_status: "NotStarted" },
      }),
    ]);

    await prisma.stock_reports.updateMany({
      where: { id: rid, status: "Confirmed" },
      data: { status: "InProgress", updated_at: new Date() },
    });
  }

  async function getPhase1LockedBoxesByRoom(reportId) {
    const rid = BigInt(reportId);

    const rows = await prisma.$queryRaw`
      SELECT room_id, box_id
      FROM phase1_boxes
      WHERE report_id = ${rid}
        AND scan_count >= 2
        AND LEFT(SPLIT_PART(box_id, '-', 1), 3) IN ('PML','CML')
      ORDER BY room_id, box_id
    `;

    return rows || [];
  }

    // ---------- Download data ----------
  async function getPhase1BoxesForReport(reportId) {
    const rid = BigInt(reportId);

    return prisma.phase1_boxes.findMany({
      where: { report_id: rid },
      select: {
        room_id: true,
        box_id: true,
        scan_count: true,
        status: true,
        stock_rooms: { select: { name: true } },
      },
      orderBy: [{ room_id: "asc" }, { box_id: "asc" }],
    });
  }

  async function getPhase2LinesForReport(reportId) {
    const rid = BigInt(reportId);

    return prisma.phase2_lines.findMany({
      where: { report_id: rid },
      select: {
        room_id: true,
        box_id: true,
        sku: true,
        qty: true,
        stock_rooms: { select: { name: true } },
      },
      orderBy: [{ room_id: "asc" }, { box_id: "asc" }, { sku: "asc" }],
    });
  }

  return {
    createReport,
    getReport,
    listReports,
    bumpReportInProgress,
    setReportCompleted,
    setReportConfirmed,
    computeReportPhaseAndStatus,

    listRooms,
    createReportRooms,
    getReportRoom,
    getPhase1Rooms,
    claimPhase1RoomOwner,
    setPhase1RoomCompleted,
    resetPhase1Room,
    isAllPhase1RoomsCompleted,

    getPhase1Box,
    upsertPhase1Box,
    countPhase1PendingVerify,
    getPhase1BoxByReport,

    getPhase2RoomsComputed,
    getPhase2BoxWork,
    upsertPhase2BoxWork,
    upsertPhase2Line,
    countPhase2Lines,
    setPhase2BoxStatus,
    resetPhase2Box,
    getPendingUnlockedBoxes,
    setPhase2RoomCompleted,
    isAllPhase2RoomsCompletedOrDisabled,
    getPhase2LockedBoxes,

    getSummary,
    resetPhase2Room,
    getPhase1LockedBoxesByRoom,
    getPhase1BoxesForReport,
    getPhase2LinesForReport,
  };
}
