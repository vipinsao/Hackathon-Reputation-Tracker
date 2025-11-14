import mongoose, { Schema, Document } from "mongoose";

export interface IMention extends Document {
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
  isAlerted: boolean;
  createdAt: Date;
  fetchedAt: Date;
}

const MentionSchema = new Schema<IMention>(
  {
    brand: { type: String, required: true, index: true },
    content: { type: String, required: true },
    source: {
      type: String,
      enum: ["twitter", "reddit", "hackernews", "news", "blog"],
      required: true,
    },
    sourceUrl: { type: String, required: true, unique: true },
    sentiment: {
      type: String,
      enum: ["positive", "negative", "neutral"],
      default: "neutral",
    },
    sentimentScore: { type: Number, min: -1, max: 1, default: 0 },
    topics: [{ type: String }],
    author: { type: String, required: true },
    authorUrl: { type: String },
    engagementMetrics: {
      likes: { type: Number, default: 0 },
      shares: { type: Number, default: 0 },
      comments: { type: Number, default: 0 },
    },
    isAlerted: { type: Boolean, default: false },
    fetchedAt: { type: Date, default: Date.now, index: true },
  },
  { timestamps: true }
);

MentionSchema.index({ brand: 1, sentiment: 1 });
MentionSchema.index({ brand: 1, fetchedAt: -1 });

export const Mention = mongoose.model<IMention>("Mention", MentionSchema);
