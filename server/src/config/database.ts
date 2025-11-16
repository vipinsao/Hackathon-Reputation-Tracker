import mongoose from "mongoose";
import { env } from "./env";
import { logger } from "../utils/logger";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(env.MONGODB_URI);
    logger.info("✅ MongoDB connected successfully");
  } catch (error) {
    logger.error("❌ MongoDB connection failed:", error);
    throw error;
  }
};

export default connectDB;
