import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { analyzeCV } from "../controllers/analysis.controller";

const router = Router();

router.post("/", authMiddleware, analyzeCV);

export default router;