import { IMention } from "../models/Mention";
import mentionRepository from "../repositories/mention.repository";
import { logger } from "../utils/logger";

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

  async getMentionStats(brand: string) {
    const stats = await mentionRepository.getStats(brand);
    return {
      total: stats.reduce((sum, item) => sum + item.count, 0),
      bySentiment: stats.reduce((acc, item) => {
        acc[item._id || "neutral"] = item.count;
        return acc;
      }, {}),
    };
  }
}

export default new MentionService();
