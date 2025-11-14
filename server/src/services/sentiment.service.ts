import axios from "axios";
import { env } from "../config/env";
import { logger } from "../utils/logger";

interface SentimentResult {
  label: "positive" | "negative" | "neutral";
  score: number;
}

export class SentimentService {
  async analyze(text: string): Promise<SentimentResult> {
    try {
      if (!env.OPENAI_API_KEY) {
        logger.warn("OpenAI API key not set, returning neutral sentiment");
        return { label: "neutral", score: 0.5 };
      }

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                'Respond with JSON: {"sentiment":"positive|negative|neutral","confidence":0-1}',
            },
            {
              role: "user",
              content: `Analyze: "${text}"`,
            },
          ],
          temperature: 0,
          max_tokens: 20,
        },
        {
          headers: {
            Authorization: `Bearer ${env.OPENAI_API_KEY}`,
          },
        }
      );

      const content = response.data.choices.message.content;
      const parsed = JSON.parse(content);
      return {
        label: parsed.sentiment.toLowerCase() as
          | "positive"
          | "negative"
          | "neutral",
        score: parsed.confidence || 0.5,
      };
    } catch (error) {
      logger.warn("Sentiment analysis failed:", error);
      return { label: "neutral", score: 0.5 };
    }
  }
}

export default new SentimentService();
