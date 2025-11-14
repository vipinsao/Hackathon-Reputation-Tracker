import { Router } from "express";
import mentionController from "../controllers/mention.controller";

const router = Router();

router.get("/", mentionController.getMentions.bind(mentionController));
router.get("/metrics", mentionController.getMetrics.bind(mentionController));

export default router;
