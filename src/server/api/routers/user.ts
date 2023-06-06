import {
    createTRPCRouter,
    publicProcedure,
  } from "~/server/api/trpc";
  
  export const recipeRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
      return ctx.prisma.recipe.findMany();
    }),
  //   getSecretMessage: protectedProcedure.query(() => {
  //     return "you can now see this secret message!";
  //   }),
  });