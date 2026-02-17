import express from "express";
import cookieParser from "cookie-parser";

import { corsMiddleware } from "./middlewares/cors.js";
import { errorHandler } from "./middlewares/error.js";
import { requireAuth } from "./middlewares/auth.js";
import { requireAdmin } from "./middlewares/admin.js";

import { prismaInbound } from "./config/prisma-inbound.js";
import { prismaStockcount } from "./config/prisma-stockcount.js";

import { operatorsRepo } from "./repositories/operators-repo.js";
import { inboundsRepo } from "./repositories/inbounds-repo.js";
import { adminRepo } from "./repositories/admin-repo.js";
import { stockcountRepo } from "./repositories/stockcount-repo.js";

import { authService } from "./services/auth-service.js";
import { inboundsService } from "./services/inbounds-service.js";
import { adminService } from "./services/admin-service.js";
import { stockcountService } from "./services/stockcount-service.js";

import { authController } from "./controllers/auth-controller.js";
import { inboundsController } from "./controllers/inbounds-controller.js";
import { adminController } from "./controllers/admin-controller.js";
import { stockcountController } from "./controllers/stockcount-controller.js";

import { authRoutes } from "./routes/auth-routes.js";
import { inboundsRoutes } from "./routes/inbounds-routes.js";
import { adminRoutes } from "./routes/admin-routes.js";
import { stockcountRoutes } from "./routes/stockcount-routes.js";
import { healthRoutes } from "./routes/health-routes.js";

export const app = express();

app.use(corsMiddleware());
app.use(express.json({ limit: "2mb" }));
app.use(cookieParser());

// repos
const opsRepo = operatorsRepo(prismaInbound);
const ibRepo = inboundsRepo(prismaInbound);
const adRepo = adminRepo(prismaInbound);
const scRepo = stockcountRepo(prismaStockcount);

// services
const auth = authService({ operatorsRepo: opsRepo });
const inb = inboundsService({ prisma: prismaInbound, repo: ibRepo, LEASE_MS: 2 * 60 * 1000 });
const adm = adminService({ prisma: prismaInbound, repo: adRepo });
const stock = stockcountService({ repo: scRepo });

// controllers
const authC = authController({ authService: auth });
const inbC = inboundsController({ service: inb });
const admC = adminController({ service: adm });
const scC = stockcountController({ service: stock });

// routes
app.use("/api/health", healthRoutes());
app.use("/api/auth", authRoutes(authC));
app.use("/api/inbounds", requireAuth, inboundsRoutes(inbC));
app.use("/api/admin", requireAuth, requireAdmin, adminRoutes(admC));
app.use("/api/stockcount", requireAuth, stockcountRoutes(scC));

app.use(errorHandler);
