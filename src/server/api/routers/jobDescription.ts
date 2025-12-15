// src/server/api/routers/jobDescription.ts
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const jobDescriptionRouter = createTRPCRouter({
  save: protectedProcedure
    .input(
      z.object({
        text: z.string().min(1, "Job description cannot be empty."),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const jobDescription = await ctx.db.jobDescription.create({
          data: {
            userId: ctx.session.user.id,
            text: input.text,
          },
        });
        return {
          status: "success",
          message: "Job description saved successfully.",
          id: jobDescription.id,
        };
      } catch (error) {
        console.error("Failed to save job description:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to save job description.",
          cause: error,
        });
      }
    }),
});