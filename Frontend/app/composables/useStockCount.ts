// app/composables/useStockCount.ts
import { api } from "./useHttp"; // <-- adjust if needed

export const useStockCount = () => {
  return {
    // Reports
    async listReports() {
      const { data } = await api.get("/stockcount/reports");
      return data;
    },

    async createReport(payload: { name: string }) {
      const { data } = await api.post("/stockcount/reports", payload);
      return data;
    },

    async getReport(id: string) {
      const { data } = await api.get(`/stockcount/reports/${id}`);
      return data;
    },

    // Phase 1
    async getRooms(id: string) {
      const { data } = await api.get(`/stockcount/reports/${id}/rooms`);
      return data;
    },

    async phase1CheckBox(reportId: string, roomId: string, boxId: string) {
      const { data } = await api.post(
        `/stockcount/reports/${reportId}/rooms/${roomId}/phase1/check-box`,
        { boxId }
      );
      return data;
    },

    async phase1Start(id: string, roomId: string) {
      const { data } = await api.post(
        `/stockcount/reports/${id}/rooms/${roomId}/phase1/start`,
        {}
      );
      return data;
    },

    async phase1Scan(id: string, roomId: string, boxId: string) {
      const { data } = await api.post(
        `/stockcount/reports/${id}/rooms/${roomId}/phase1/scan`,
        { boxId }
      );
      return data;
    },

    async phase1Complete(id: string, roomId: string) {
      const { data } = await api.post(
        `/stockcount/reports/${id}/rooms/${roomId}/phase1/complete`,
        {}
      );
      return data;
    },

    async phase1Reset(id: string, roomId: string) {
      const { data } = await api.post(
        `/stockcount/reports/${id}/rooms/${roomId}/phase1/reset`,
        {}
      );
      return data;
    },

    // Phase 2
    async phase2Rooms(id: string) {
      const { data } = await api.get(`/stockcount/reports/${id}/phase2/rooms`);
      return data;
    },

    async phase2ClaimBox(id: string, payload: { roomId: string; boxId: string }) {
      const { data } = await api.post(`/stockcount/reports/${id}/phase2/box/claim`, payload);
      return data;
    },

    async phase2UpsertLine(id: string, payload: { boxId: string; sku: string; qty: number }) {
      const { data } = await api.post(`/stockcount/reports/${id}/phase2/line`, payload);
      return data;
    },

    async phase2CompleteBox(id: string, payload: { boxId: string }) {
      const { data } = await api.post(`/stockcount/reports/${id}/phase2/box/complete`, payload);
      return data;
    },

    async phase2ResetBox(id: string, payload: { boxId: string }) {
      const { data } = await api.post(`/stockcount/reports/${id}/phase2/box/reset`, payload);
      return data;
    },

    async phase2CompleteRoom(id: string, payload: { roomId: string }) {
      const { data } = await api.post(`/stockcount/reports/${id}/phase2/room/complete`, payload);
      return data;
    },

    // Summary
    async getSummary(id: string) {
      const { data } = await api.get(`/stockcount/reports/${id}/summary`);
      return data;
    },

    async confirmReport(id: string) {
      const { data } = await api.post(`/stockcount/reports/${id}/confirm`, {});
      return data;
    },

    async summaryResetRoom(id: string, payload: { roomId: string }) {
      const { data } = await api.post(`/stockcount/reports/${id}/summary/reset-room`, payload);
      return data;
    },

    async downloadReportXlsx(id: string) {
      const res = await api.get(`/stockcount/reports/${id}/download`, {
        responseType: "blob",
      });
      return res.data as Blob;
    },

    async resetPhase2Box(reportId: string, payload: { boxId: string; comment: string }) {
  const { data } = await api.post(`/stockcount/reports/${reportId}/phase2/box/reset`, payload);
  return data;
},


  };
};
