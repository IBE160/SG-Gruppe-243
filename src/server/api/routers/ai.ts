// src/server/api/routers/ai.ts
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const aiRouter = createTRPCRouter({
  generateLetter: protectedProcedure
    .mutation(async ({ ctx }) => {
      // 1. Fetch user's latest CV and Job Description
      const latestCV = await ctx.db.cV.findFirst({
        where: { userId: ctx.session.user.id },
        orderBy: { createdAt: "desc" },
      });

      const latestJD = await ctx.db.jobDescription.findFirst({
        where: { userId: ctx.session.user.id },
        orderBy: { createdAt: "desc" },
      });

      if (!latestCV) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "No CV found. Please upload a CV first.",
        });
      }

      if (!latestJD) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "No Job Description found. Please input a job description first.",
        });
      }

      // 2. AI Generation Logic
      let generatedContent = "";
      let suggestions: string[] = [];

      if (process.env.GEMINI_API_KEY) {
        // Real AI Integration (Gemini)
        try {
            const prompt = `
            You are a professional career coach.
            I will provide a CV and a Job Description.
            1. Write a tailored cover letter (no placeholders, use the CV/JD info).
            2. Provide 3 specific suggestions to improve the CV for this job.

            CV Content: ${latestCV.content.substring(0, 3000)}... (truncated)
            Job Description: ${latestJD.text}

            Output format: JSON
            {
                "letter": "string",
                "suggestions": ["string", "string", "string"]
            }
            `;
            
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });

            const data = await response.json();
            // Parsing logic would go here (simplified for placeholder)
            // For now, falling back to mock if parsing fails or key is invalid
        } catch (e) {
            console.error("AI Generation failed, falling back to mock.");
        }
      }

      // Mock Data (Fallback)
      generatedContent = `
[Your Name]
[Your Address]
[City, State, Zip Code]
[Email Address]
[Phone Number]
${new Date().toLocaleDateString()}

Hiring Manager
[Company Name]
[Company Address]

Dear Hiring Manager,

I am writing to express my strong interest in the open position based on the job description you provided. 

Having reviewed the requirements, I believe my background matches well. Specifically, my experience in ${latestCV.fileName} aligns with the needs outlined in the job description.

I am excited about the opportunity to contribute to [Company Name] and would welcome the chance to discuss how my skills and experience make me a strong candidate for this role.

Thank you for your time and consideration.

Sincerely,

${ctx.session.user.name ?? "[Your Name]"}
      `;

      suggestions = [
        "Add more metrics to your 'Experience' section to quantify your impact.",
        "Highlight your leadership skills mentioned in the job description.",
        "Ensure your contact information is up-to-date and professional."
      ];

      // 3. Save Generated Letter to DB
      const letter = await ctx.db.generatedLetter.create({
        data: {
            userId: ctx.session.user.id,
            jobDescriptionId: latestJD.id,
            cvId: latestCV.id,
            content: generatedContent,
            suggestions: suggestions,
        }
      });

      return {
        status: "success",
        letterId: letter.id,
        content: letter.content,
        suggestions: letter.suggestions,
      };
    }),
});