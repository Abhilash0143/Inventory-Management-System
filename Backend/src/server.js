import "dotenv/config";
import { app } from "./app.js";
import { prismaInbound, __inboundPool } from "./config/prisma-inbound.js";
import { prismaStockcount, __stockcountPool } from "./config/prisma-stockcount.js";

// Prisma returns Postgres BIGINT columns as JS `bigint`.
// Express `res.json()` (JSON.stringify) cannot serialize bigint by default.
// Convert bigint -> string in all JSON responses.
if (typeof BigInt !== "undefined" && !BigInt.prototype.toJSON) {
  // eslint-disable-next-line no-extend-native
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
}

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => console.log(`API listening on :${PORT}`));

async function shutdown() {
  console.log("Shutting down...");
  server.close(async () => {
    await prismaInbound.$disconnect();
    await prismaStockcount.$disconnect();

    await __inboundPool.end();
    await __stockcountPool.end();

    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
