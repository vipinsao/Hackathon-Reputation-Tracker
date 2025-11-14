import { IMention } from "../models/Mention";
import sentimentService from "./sentiment.service";
import { logger } from "../utils/logger";

export class EnrichmentService {
  async enrichMentions(
    mentions: Partial<IMention>[]
  ): Promise<Partial<IMention>[]> {
    try {
      return await Promise.all(
        mentions.map((mention) => this.enrichSingleMention(mention))
      );
    } catch (error) {
      logger.error("Error enriching mentions:", error);
      throw error;
    }
  }

  private async enrichSingleMention(
    mention: Partial<IMention>
  ): Promise<Partial<IMention>> {
    try {
      const sentiment = await sentimentService.analyze(mention.content || "");
      const topics = this.extractTopics(mention.content || "");

      return {
        ...mention,
        sentiment: sentiment.label,
        sentimentScore: sentiment.score,
        topics,
      };
    } catch (error) {
      logger.warn("Error enriching mention:", error);
      return mention;
    }
  }

  private extractTopics(content: string): string[] {
    const words = content
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 4)
      .slice(0, 3);
    return words;
  }
}

export default new EnrichmentService();
