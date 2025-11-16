import axios from "axios";
import { IMention } from "../models/Mention";
import { logger } from "../utils/logger";

export class ScraperService {
  async scrapeBrandMentions(brand: string): Promise<Partial<IMention>[]> {
    try {
      const [twitterRes, hnRes] = await Promise.allSettled([
        this.scrapeTwitter(brand),
        this.scrapeHackerNews(brand),
      ]);

      const mentions: Partial<IMention>[] = [];

      if (twitterRes.status === "fulfilled") {
        mentions.push(...twitterRes.value);
      }
      if (hnRes.status === "fulfilled") {
        mentions.push(...hnRes.value);
      }

      logger.info(`Scraped ${mentions.length} mentions for ${brand}`);
      return mentions;
    } catch (error) {
      logger.error("Error scraping:", error);
      throw error;
    }
  }

  private async scrapeTwitter(brand: string): Promise<Partial<IMention>[]> {
    try {
      // For now, return mock data
      return [
        {
          brand,
          content: `Great experience with ${brand}!`,
          source: "twitter",
          sourceUrl: "https://twitter.com/user/status/123",
          author: "@user",
          engagementMetrics: { likes: 10, shares: 2, comments: 1 },
          fetchedAt: new Date(),
        },
      ];
    } catch (error) {
      logger.warn("Twitter scraping failed:", error);
      return [];
    }
  }

  private async scrapeHackerNews(brand: string): Promise<Partial<IMention>[]> {
    try {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search_by_date",
        {
          params: {
            query: brand,
            hitsPerPage: 10,
          },
        }
      );

      return (response.data.hits || []).map((item: any) => ({
        brand,
        content: item.title,
        source: "hackernews",
        sourceUrl:
          item.url || `https://news.ycombinator.com/item?id=${item.objectID}`,
        author: item.author || "unknown",
        engagementMetrics: {
          likes: item.points || 0,
          shares: 0,
          comments: item.num_comments || 0,
        },
        fetchedAt: new Date(),
      }));
    } catch (error) {
      logger.warn("HackerNews scraping failed:", error);
      return [];
    }
  }
}

export default new ScraperService();
