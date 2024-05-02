import { PrismaClient } from "@prisma/client";
import { router, publicProcedure } from "./trpc";
import { z } from "zod";
import { parseTypes } from "@/utils/helpers";

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
          types: parseTypes(pokemon.types),
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
        types: parseTypes(p.types),
        sprite: p.sprite,
      }));
    }),
  getAllPokemon: publicProcedure
    .input(
      z
        .object({
          type: z.string().optional(),
        })
        .optional()
    )
    .query(async ({ input }) => {
      const typeFilter = input?.type;

      let pokemon = await prisma.pokemon.findMany();
      if (typeFilter) {
        pokemon = pokemon.filter((p) => {
          const pTypes = parseTypes(p.types);
          return pTypes.includes(typeFilter);
        });
      }
      return pokemon.map((p) => ({
        id: p.id,
        name: p.name,
        types: parseTypes(p.types),
        sprite: p.sprite,
      }));
    }),
});
