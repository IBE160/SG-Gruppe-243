import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcryptjs";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY ?? "re_123");

export const userRouter = createTRPCRouter({
  me: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      select: { name: true, email: true, image: true },
    });
    return user;
  }),

  update: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { name: input.name },
      });
      return { status: "success" };
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        skipVerification: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const exists = await ctx.db.user.findUnique({
        where: { email: input.email },
      });

      if (exists) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User already exists.",
        });
      }

      const hashedPassword = await bcrypt.hash(input.password, 10);

      const user = await ctx.db.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: hashedPassword,
          emailVerified: input.skipVerification ? new Date() : null,
        },
      });

      if (!input.skipVerification) {
        // Verification Token Logic
        const token = crypto.randomUUID();
        const expires = new Date(Date.now() + 1000 * 60 * 60 * 24); // 24 hours

        await ctx.db.verificationToken.create({
          data: {
            identifier: input.email,
            token,
            expires,
          },
        });

        // Send Email
        if (process.env.RESEND_API_KEY) {
          try {
              await resend.emails.send({
              from: "onboarding@resend.dev",
              to: input.email,
              subject: "Verify your email",
              html: `<p>Click <a href="${process.env.NEXTAUTH_URL ?? "http://localhost:5500"}/verify-email?token=${token}">here</a> to verify your email.</p>`,
              });
          } catch (error) {
              console.error("Failed to send email:", error);
          }
        }
      }

      return { status: "success", userId: user.id };
    }),

  verifyEmail: publicProcedure
    .input(z.object({ token: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const tokenData = await ctx.db.verificationToken.findUnique({
        where: { token: input.token },
      });

      if (!tokenData) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Invalid token.",
        });
      }

      if (tokenData.expires < new Date()) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Token expired.",
        });
      }

      const user = await ctx.db.user.findUnique({
          where: { email: tokenData.identifier }
      });
      
      if (!user) {
          throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
      }

      await ctx.db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });

      await ctx.db.verificationToken.delete({
        where: { id: tokenData.id },
      });

      return { status: "success" };
    }),
});