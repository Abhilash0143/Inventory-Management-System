import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Optional startup check
pool
  .query("SELECT current_database()")
  .then((r) => console.log("DB:", r.rows[0].current_database))
  .catch((e) => console.error("DB connection failed:", e.message));
