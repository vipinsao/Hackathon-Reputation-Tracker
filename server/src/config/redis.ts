// src/config/redis.ts
import Redis, { Redis as RedisClient } from "ioredis";
import { env } from "./env";
import { logger } from "../utils/logger";

let redis: RedisClient | null = null;

try {
  redis = new Redis(env.REDIS_URL, {
    maxRetriesPerRequest: 0,
    enableOfflineQueue: false,
  });

  redis.on("connect", () => {
    logger.info("⚡ Redis connected successfully");
  });

  redis.on("error", () => {
    logger.warn("⚠ Redis not available, running without caching");
  });
} catch (err) {
  logger.warn("⚠ Redis initialization failed, continuing without Redis");
  redis = null;
}

export default redis;
