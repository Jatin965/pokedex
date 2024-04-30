import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getPokemon: publicProcedure.query(async () => {
    return "Pokemon"
  })
})


export type AppRouter = typeof appRouter;