import { Router } from "express";

export function authRoutes(authCtrl) {
  const r = Router();
  r.post("/signup", authCtrl.signup);
  r.post("/login", authCtrl.login);
  r.post("/refresh", authCtrl.refresh);
  r.post("/logout", authCtrl.logout);
  return r;
}
