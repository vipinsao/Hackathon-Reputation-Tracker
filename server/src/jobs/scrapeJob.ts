import scraperService from "../services/scraper.service";
import enrichmentService from "../services/enrichment.service";
import mentionService from "../services/mention.service";
import { logger } from "../utils/logger";

export async function runScrapeJob(brand: string = "Tesla") {
  try {
    logger.info(`🔄 Starting scrape job for: ${brand}`);

    // 1. Scrape mentions
    const scrapedMentions = await scraperService.scrapeBrandMentions(brand);
    logger.info(`📊 Scraped ${scrapedMentions.length} mentions`);

    // 2. Enrich with sentiment
    const enrichedMentions = await enrichmentService.enrichMentions(
      scrapedMentions
    );
    logger.info(`🤖 Enriched ${enrichedMentions.length} mentions`);

    // 3. Save to database
    const savedMentions = await mentionService.saveMentions(enrichedMentions);
    logger.info(`✅ Saved ${savedMentions.length} mentions`);

    return savedMentions;
  } catch (error) {
    logger.error("❌ Scrape job failed:", error);
    throw error;
  }
}

// Run immediately on startup
runScrapeJob("Tesla").catch(console.error);

// Run every 15 minutes
setInterval(() => {
  runScrapeJob("Tesla").catch(console.error);
}, 15 * 60 * 1000);
