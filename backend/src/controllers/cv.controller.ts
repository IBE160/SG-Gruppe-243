import { Request, Response } from "express";
const pdfParse = require("pdf-parse");
import mammoth from "mammoth";
import fs from "fs";
import CV from "../models/cv.model";

export const uploadCV = async (req: Request, res: Response) => {
  const file = req.file;
  const userId = (req as any).user.userId;

  if (!file) return res.status(400).json({ error: "No file uploaded" });

  let extractedText = "";

  // PDF
  if (file.mimetype === "application/pdf") {
    const data = fs.readFileSync(file.path);
    const pdfData = await pdfParse(data);
    extractedText = pdfData.text;
  }

  // DOCX
  else if (
    file.mimetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    const docx = await mammoth.extractRawText({ path: file.path });
    extractedText = docx.value;
  }

  // TXT or other plain text
  else {
    extractedText = fs.readFileSync(file.path, "utf8");
  }

  const cv = await CV.create({
    userId,
    originalFilename: file.originalname,
    storagePath: file.path,
    extractedText
  });

  return res.json({ message: "CV uploaded", cvId: cv._id });
};