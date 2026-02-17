import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

export const stockcountPool = new Pool({
  connectionString: process.env.STOCKCOUNT_DATABASE_URL,
});

stockcountPool
  .query("SELECT current_database()")
  .then((r) => console.log("Stockcount DB:", r.rows[0].current_database))
  .catch((e) => console.error("Stockcount DB connection failed:", e.message));
