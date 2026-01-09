import { userRouter } from "~/server/api/routers/user";
import { cvRouter } from "~/server/api/routers/cv";
import { jobDescriptionRouter } from "~/server/api/routers/jobDescription";
import { aiRouter } from "~/server/api/routers/ai";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  cv: cvRouter,
  jobDescription: jobDescriptionRouter,
  ai: aiRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.user.create(...);
 */
export const createCaller = createCallerFactory(appRouter);