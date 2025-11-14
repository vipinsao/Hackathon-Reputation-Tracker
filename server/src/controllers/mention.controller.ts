import { Request, Response, NextFunction } from "express";
import mentionService from "../services/mention.service";
// import { logger } from "../utils/logger";

export class MentionController {
  async getMentions(req: Request, res: Response, next: NextFunction) {
    try {
      const { brand = "default", limit = 50, page = 1 } = req.query;
      const skip =
        ((parseInt(page as string) || 1) - 1) * parseInt(limit as string);
      console.log(skip);
      const mentions = await mentionService.getMentionsByBrand(
        brand as string,
        parseInt(limit as string)
      );

      res.json({
        status: "success",
        data: mentions,
      });
    } catch (error) {
      next(error);
    }
  }

  async getMetrics(req: Request, res: Response, next: NextFunction) {
    try {
      const { brand = "default" } = req.query;
      const stats = await mentionService.getMentionStats(brand as string);

      res.json({
        status: "success",
        data: stats,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new MentionController();
