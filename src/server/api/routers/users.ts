import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { clerkClient } from "@clerk/nextjs";
import { z } from "zod";

export const userRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await clerkClient.users
        .getUserList({
          limit: 5,
        })
        .then((users) => users.filter((user) => user.id !== input.userId));
    }),
});
