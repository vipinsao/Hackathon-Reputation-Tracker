import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z
    .string()
    .default("5000")
    .transform((val) => Number(val)),
  MONGODB_URI: z.string().min(1, "MongoDB URI is required"),
  REDIS_URL: z.string().optional().default("redis://localhost:6379"),
  OPENAI_API_KEY: z.string().optional(),
  TWITTER_API_KEY: z.string().optional(),
  REDDIT_CLIENT_ID: z.string().optional(),
  CLIENT_URL: z.string().url().default("http://localhost:3000"),
});

const parsedEnv = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  REDIS_URL: process.env.REDIS_URL,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  TWITTER_API_KEY: process.env.TWITTER_API_KEY,
  REDDIT_CLIENT_ID: process.env.REDDIT_CLIENT_ID,
  CLIENT_URL: process.env.CLIENT_URL,
});

if (!parsedEnv.success) {
  throw new Error("Invalid environment variables");
}

export const env = parsedEnv.data;
