import { PrismaClient } from "@prisma/client";
import { router, publicProcedure } from "./trpc";
import { z } from "zod";

const prisma = new PrismaClient();

export const pokemonRouter = router({
  getPokemonByName: publicProcedure.input(z.string()).query(async ({ input }) => {
    const lowerInput = input.toLowerCase(); // Convert input to lowercase
    const pokemons = await prisma.pokemon.findMany(); // Fetch all pokemons
    const pokemon = pokemons.find((p) => p.name.toLowerCase() === lowerInput); // Find by lowercase name

    return pokemon
      ? {
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types.split(","),
          sprite: pokemon.sprite,
        }
      : null;
  }),

  getPokemonByNames: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findMany({
        where: {
          name: {
            in: input,
          },
        },
      });
      return pokemon.map((p) => ({
        id: p.id,
        name: p.name,
        types: p.types.split(","),
        sprite: p.sprite,
      }));
    }),
  getAllPokemon: publicProcedure.query(async () => {
    const pokemon = await prisma.pokemon.findMany();
    return pokemon.map((p) => ({
      id: p.id,
      name: p.name,
      types: p.types.split(","),
      sprite: p.sprite,
    }));
  }),
});
