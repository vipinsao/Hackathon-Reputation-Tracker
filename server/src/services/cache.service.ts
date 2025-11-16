import redis from "../config/redis";
import { logger } from "../utils/logger";

export class CacheService {
  private readonly DEFAULT_TTL = 300; // 5 minutes

  async get<T>(key: string): Promise<T | null> {
    if (!redis) return null; // Redis not available
    try {
      const value = await redis.get(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      logger.error("Cache get error:", error);
      return null;
    }
  }

  async set(
    key: string,
    value: any,
    ttl: number = this.DEFAULT_TTL
  ): Promise<void> {
    if (!redis) return; // Skip when Redis is offline
    try {
      await redis.setex(key, ttl, JSON.stringify(value));
    } catch (error) {
      logger.error("Cache set error:", error);
    }
  }

  async del(key: string): Promise<void> {
    if (!redis) return;
    try {
      await redis.del(key);
    } catch (error) {
      logger.error("Cache delete error:", error);
    }
  }

  async invalidatePattern(pattern: string): Promise<void> {
    if (!redis) return;
    try {
      const keys = await redis.keys(pattern);
      if (keys.length > 0) {
        await redis.del(...keys);
      }
    } catch (error) {
      logger.error("Cache invalidation error:", error);
    }
  }
}

export default new CacheService();
