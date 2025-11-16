import mentionService from "../../services/mention.service";
import mentionRepository from "../../repositories/mention.repository";
import { IMention } from "../../models/Mention";

jest.mock("../../repositories/mention.repository");

describe("MentionService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("saveMentions", () => {
    it("should save mentions successfully", async () => {
      const mockMentions: Partial<IMention>[] = [
        {
          brand: "Tesla",
          content: "Great car!",
          source: "twitter",
          sourceUrl: "https://twitter.com/test/123",
          author: "@user",
        },
      ];

      const savedMentions = mockMentions as IMention[];
      (mentionRepository.saveMany as jest.Mock).mockResolvedValue(
        savedMentions
      );

      const result = await mentionService.saveMentions(mockMentions);

      expect(result).toEqual(savedMentions);
      expect(mentionRepository.saveMany).toHaveBeenCalledWith(mockMentions);
    });

    it("should handle errors gracefully", async () => {
      const mockMentions: Partial<IMention>[] = [];
      (mentionRepository.saveMany as jest.Mock).mockRejectedValue(
        new Error("Database error")
      );

      await expect(mentionService.saveMentions(mockMentions)).rejects.toThrow(
        "Database error"
      );
    });
  });

  describe("getMentionStats", () => {
    it("should return aggregated stats", async () => {
      const mockStats = [
        { _id: "positive", count: 10 },
        { _id: "negative", count: 5 },
        { _id: "neutral", count: 3 },
      ];

      (mentionRepository.getStats as jest.Mock).mockResolvedValue(mockStats);

      const result = await mentionService.getMentionStats("Tesla");

      expect(result.total).toBe(18);
      expect(result.bySentiment.positive).toBe(10);
      expect(result.bySentiment.negative).toBe(5);
      expect(result.bySentiment.neutral).toBe(3);
    });
  });
});
