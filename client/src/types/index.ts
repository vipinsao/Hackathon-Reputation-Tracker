export interface Mention {
  _id: string;
  brand: string;
  content: string;
  source: "twitter" | "reddit" | "hackernews" | "news" | "blog";
  sourceUrl: string;
  sentiment: "positive" | "negative" | "neutral";
  sentimentScore: number;
  topics: string[];
  author: string;
  authorUrl?: string;
  engagementMetrics: {
    likes: number;
    shares: number;
    comments: number;
  };
  createdAt: string;
  fetchedAt: string;
}

export interface DashboardMetrics {
  total: number;
  bySentiment: {
    positive: number;
    negative: number;
    neutral: number;
  };
}
