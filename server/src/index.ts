import { httpServer } from "./app";
import { env } from "./config/env";
import { logger } from "./utils/logger";
import "./jobs/scrapeJob";
import redis from "./config/redis";
import connectDB from "./config/database";

async function startServer() {
  try {
    //Database Connection
    connectDB();

    if (redis && (redis.status === "ready" || redis.status === "connect")) {
      await redis.ping();
      logger.info("⚡ Redis ping successful");
    } else {
      logger.warn("⚠ Redis offline, skipping ping");
    }

    // Start server added
    const PORT = env.PORT;
    httpServer.listen(PORT, () => {
      logger.info(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    logger.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
