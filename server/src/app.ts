import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import { env } from "./config/env";
import { logger } from "./utils/logger";
import mentionRoutes from "./routes/mention.routes";
import errorHandler from "./middleware/errorHandler";

const app: Express = express();
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: env.CLIENT_URL,
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(helmet());
app.use(cors({ origin: env.CLIENT_URL }));
app.use(express.json());

// WebSocket
io.on("connection", (socket) => {
  logger.info(`Client connected: ${socket.id}`);

  socket.on("subscribe_brand", (brand: string) => {
    socket.join(`brand:${brand}`);
  });

  socket.on("disconnect", () => {
    logger.info(`Client disconnected: ${socket.id}`);
  });
});

app.set("io", io);

// Routes
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date() });
});

app.use("/api/mentions", mentionRoutes);

// Error handling
app.use(errorHandler);

export { app, httpServer, io };
