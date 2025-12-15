// src/server/api/routers/cv.ts
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const cvRouter = createTRPCRouter({
  upload: protectedProcedure
    .input(
      z.object({
        fileName: z.string(),
        fileType: z.string(),
        fileContent: z.string(), // Base64 encoded file content
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const cv = await ctx.db.cV.create({
          data: {
            userId: ctx.session.user.id,
            fileName: input.fileName,
            fileType: input.fileType,
            content: input.fileContent,
          },
        });

        return {
          status: "success",
          message: "CV uploaded and saved successfully.",
          id: cv.id,
          fileName: input.fileName,
        };
      } catch (error) {
        console.error("Failed to save CV:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to save CV.",
          cause: error,
        });
      }
    }),
});