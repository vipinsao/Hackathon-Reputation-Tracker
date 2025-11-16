import { IMention } from "../models/Mention";
import mentionRepository from "../repositories/mention.repository";
import { logger } from "../utils/logger";
import cacheService from "./cache.service";

export class MentionService {
  async saveMentions(mentions: Partial<IMention>[]): Promise<IMention[]> {
    try {
      const saved = await mentionRepository.saveMany(mentions);
      logger.info(`Saved ${saved.length} mentions`);
      return saved;
    } catch (error) {
      logger.error("Error saving mentions:", error);
      throw error;
    }
  }

  async getMentionsByBrand(brand: string, limit: number = 50) {
    return mentionRepository.findByBrand(brand, limit);
  }

  async getMentionStats(brand: string): Promise<{
    total: number;
    bySentiment: {
      positive: number;
      negative: number;
      neutral: number;
    };
  }> {
    // Try cache first
    const cacheKey = `stats:${brand}`;
    const cached = await cacheService.get(cacheKey);

    if (cached) {
      return cached as {
        total: number;
        bySentiment: {
          positive: number;
          negative: number;
          neutral: number;
        };
      };
    }

    const stats = await mentionRepository.getStats(brand);

    const result = {
      total: 0,
      bySentiment: {
        positive: 0,
        negative: 0,
        neutral: 0,
      },
    };

    for (const item of stats) {
      const key = item._id as "positive" | "negative" | "neutral";
      const count = item.count || 0;

      if (key in result.bySentiment) {
        result.bySentiment[key] = count;
      }

      result.total += count;
    }

    return result;
  }
}

export default new MentionService();
