import { defineStore } from "pinia";

export type ReportPhase = 1 | 2 | "summary";
export type ReportStatus = "Pending" | "InProgress" | "Completed" | "Confirmed";

export const useStockCountStore = defineStore("stockcount_store", {
  state: () => ({
    currentReport: null as null | {
      id: string;
      name: string;
      status: ReportStatus;
      phase: ReportPhase;
      updatedAt: string;
      nextRoute?: string;
    },

    rooms: [] as any[],
    selectedRoom: null as null | { roomId: string; name: string },

    currentPhase: 1 as ReportPhase,

    progress: {
      phase1: { roomsCompleted: 0, roomsPending: 0, boxesPendingVerify: 0 },
      phase2: { boxesCompleted: 0, boxesPending: 0 },
    },

    locks: {
      roomOwnerById: {} as Record<string, string | null>,
      boxOwnerById: {} as Record<string, string | null>,
    },
  }),

  actions: {
    setReport(r: any) {
      this.currentReport = r;
      this.currentPhase = r?.phase ?? 1;
    },
    setRooms(rooms: any[]) {
      this.rooms = rooms || [];
      this.locks.roomOwnerById = Object.fromEntries(
        (rooms || []).map((r: any) => [String(r.roomId), r.phase1Owner ?? null])
      );
    },
    selectRoom(room: any) {
  this.selectedRoom = room ? { ...room, roomId: String(room.roomId) } : null;
},
    resetAll() {
      this.currentReport = null;
      this.rooms = [];
      this.selectedRoom = null;
      this.currentPhase = 1;
      this.progress = {
        phase1: { roomsCompleted: 0, roomsPending: 0, boxesPendingVerify: 0 },
        phase2: { boxesCompleted: 0, boxesPending: 0 },
      };
      this.locks = { roomOwnerById: {}, boxOwnerById: {} };
    },
  },
});
