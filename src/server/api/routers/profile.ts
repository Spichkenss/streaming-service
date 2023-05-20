import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { clerkClient } from "@clerk/nextjs";
import { TRPCError } from "@trpc/server";

export const profileRouter = createTRPCRouter({
  getByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => {
      const [user] = await clerkClient.users.getUserList({
        username: [input.username],
      });
      if (!user)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Пользователь не найден",
        });
      return user;
    }),
});
