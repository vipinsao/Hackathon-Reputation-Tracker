import mongoose from "mongoose";
import { httpServer } from "./app";
import { env } from "./config/env";
import { logger } from "./utils/logger";
import "./jobs/scrapeJob";

async function startServer() {
  try {
    // Connect to MongoDB
    await mongoose.connect(env.MONGODB_URI);
    logger.info("✅ MongoDB connected");

    // Start server
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
