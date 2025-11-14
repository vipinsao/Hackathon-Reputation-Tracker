import dotenv from "dotenv";

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: parseInt(process.env.PORT || "5000", 10),
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://brand-tracker:sao2001@cluster0.t1pws9g.mongodb.net/",
  REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  TWITTER_API_KEY: process.env.TWITTER_API_KEY || "",
  REDDIT_CLIENT_ID: process.env.REDDIT_CLIENT_ID || "",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
};
