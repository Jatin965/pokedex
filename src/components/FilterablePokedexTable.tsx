"use client";

import { useState } from "react";
import { trpc } from "../utils/trpc";
import PokemonTypeSelection from "./PokemonTypeSelection";
import PokemonGrid from "./PokemonGrid";
import { Container, Typography, CircularProgress, Box, Stack } from "@mui/material";

const FilterablePokedexTable = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>("");
  const {
    data: pokemonArray,
    isLoading,
    isError,
  } = trpc.pokemon.getAllPokemon.useQuery({ type: selectedType });

  return (
    <Container maxWidth="md">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Filter Pokemon by Type</Typography>
        <PokemonTypeSelection
          selectedType={selectedType}
          selectType={setSelectedType}
        />
      </Stack>
      {isLoading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : isError ? (
        <Typography color="error">Error fetching Pokémon.</Typography>
      ) : (
        <PokemonGrid pokemonArray={pokemonArray || []} />
      )}
    </Container>
  );
};

export default FilterablePokedexTable;
