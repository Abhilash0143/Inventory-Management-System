export const adminController = ({ adminService }) => ({
  listSessions: async (req, res, next) => {
    try {
      const rows = await adminService.listSessions(req.query?.limit);
      res.json(rows);
    } catch (e) {
      next(e);
    }
  },

  getSession: async (req, res, next) => {
    try {
      const r = await adminService.getSession(req.params.id);
      if (r?.error) return res.status(r.status || 400).json({ error: r.error });
      res.json(r);
    } catch (e) {
      next(e);
    }
  },

  patchItem: async (req, res, next) => {
    try {
      const r = await adminService.patchItem(req.params.id, req.body || {});
      if (r?.error) return res.status(r.status || 400).json({ error: r.error });
      res.json(r);
    } catch (e) {
      next(e);
    }
  },

  patchSession: async (req, res, next) => {
    try {
      const r = await adminService.patchSession(req.params.id, req.body || {});
      if (r?.error) return res.status(r.status || 400).json({ error: r.error });
      res.json(r);
    } catch (e) {
      next(e);
    }
  },

  deleteSession: async (req, res, next) => {
    try {
      const r = await adminService.deleteSession(req.params.id);
      if (r?.error) return res.status(r.status || 400).json({ error: r.error });
      res.json(r);
    } catch (e) {
      next(e);
    }
  },

  deleteItem: async (req, res, next) => {
    try {
      const r = await adminService.deleteItem(req.params.id);
      if (r?.error) return res.status(r.status || 400).json({ error: r.error });
      res.json(r);
    } catch (e) {
      next(e);
    }
  },
});
