import { PrismaClient } from "../generated/Inbound/index.js";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const inboundPool = new Pool({
  connectionString: process.env.DATABASE_URL, // inbound DB
});

const inboundAdapter = new PrismaPg(inboundPool);

export const prismaInbound = new PrismaClient({
  adapter: inboundAdapter,
});

// optional: export pool so we can close it on shutdown
export const __inboundPool = inboundPool;
