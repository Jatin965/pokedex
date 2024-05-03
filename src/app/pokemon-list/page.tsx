"use client";
import { useState } from "react";
import { trpc } from "../../utils/trpc";
import PokemonGrid from "../../components/PokemonGrid"; // Make sure this path is correct
import { Container } from "@mui/material";

const PokemonListPage = () => {
  const [names, setNames] = useState<string[]>(["Pikachu", "Charmander"]);
  const handleFetch = () => {
    // Logic to fetch multiple Pokémon names, e.g., from user input or a static list
    setNames(["Pikachu", "Charmander"]); // Example names
  };

  const {
    data: pokemonArray,
    isLoading,
    error,
  } = trpc.pokemon.getPokemonByNames.useQuery(names, {
    enabled: names?.length > 0,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;
  if (!pokemonArray || pokemonArray.length === 0) return <p>No Pokémon found</p>;

  return (
    <Container maxWidth="md">
      <button onClick={handleFetch}>Fetch Pokémon</button>
      <PokemonGrid pokemonArray={pokemonArray} />
    </Container>
  );
};

export default PokemonListPage;
