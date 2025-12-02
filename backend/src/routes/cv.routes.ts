import { Router } from "express";
import { upload } from "../middleware/upload.middleware";
import { authMiddleware } from "../middleware/auth.middleware";
import { uploadCV } from "../controllers/cv.controller";

const router = Router();

router.post("/upload", authMiddleware, upload.single("cv"), uploadCV);

export default router;