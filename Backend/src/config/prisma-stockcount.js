import { PrismaClient } from "../generated/Stockcount/index.js";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const stockcountPool = new Pool({
  connectionString: process.env.STOCKCOUNT_DATABASE_URL, // stockcount DB
});

const stockcountAdapter = new PrismaPg(stockcountPool);

export const prismaStockcount = new PrismaClient({
  adapter: stockcountAdapter,
});

export const __stockcountPool = stockcountPool;
