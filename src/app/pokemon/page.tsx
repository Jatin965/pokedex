"use client";

import { trpc } from "../../utils/trpc";
import PokemonRow from "../../components/PokemonRow";
import { Box, CircularProgress, Container } from "@mui/material";
import { useState } from "react";

const PokemonPage = () => {
  const [name, setName] = useState("pikachu");

  console.log("name", name);

  const {
    data: pokemon,
    isLoading,
    error,
  } = trpc.pokemon.getPokemonByName.useQuery(name, {
    enabled: Boolean(name),
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (error || !pokemon) {
    return <div>Pokemon not found or there was an error fetching the pokemon.</div>;
  }

  return (
    <Container maxWidth="md">
      <PokemonRow pokemon={pokemon} />
    </Container>
  );
};

export default PokemonPage;
