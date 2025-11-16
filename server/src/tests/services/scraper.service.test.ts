import scraperService from "../../services/scraper.service";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ScraperService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("scrapeHackerNews", () => {
    it("should fetch and transform HackerNews data", async () => {
      const mockResponse = {
        data: {
          hits: [
            {
              title: "Tesla launches new feature",
              author: "johndoe",
              url: "https://example.com",
              objectID: "12345",
              points: 100,
              num_comments: 50,
            },
          ],
        },
      };

      mockedAxios.get.mockResolvedValue(mockResponse);

      const result = await scraperService.scrapeBrandMentions("Tesla");

      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty("brand", "Tesla");
      expect(result[0]).toHaveProperty("source");
    });
  });
});
