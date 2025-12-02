import { Request, Response } from "express";
import CV from "../models/cv.model";
import GeneratedApplication from "../models/generatedApplication.model";
import { generateAIResponse } from "../services/ai.service";

export const analyzeCV = async (req: Request, res: Response) => {
  const { cvId, jobDescription } = req.body;
  const userId = (req as any).user.userId;

  const cv = await CV.findById(cvId);
  if (!cv) return res.status(404).json({ error: "CV not found" });

  const aiResult = await generateAIResponse(cv.extractedText, jobDescription);

  const saved = await GeneratedApplication.create({
    userId,
    cvId,
    jobDescription,
    ...aiResult
  });

  return res.json(saved);
};