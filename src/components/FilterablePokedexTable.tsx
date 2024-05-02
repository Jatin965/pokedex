"use client";

import { useState } from "react";
import { trpc } from "../utils/trpc";
import PokemonTypeSelection from "./PokemonTypeSelection";
import PokemonGrid from "./PokemonGrid";
import { Container, Typography, CircularProgress, Box } from "@mui/material";

const FilterablePokedexTable = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>("");
  const {
    data: allPokemon,
    isLoading,
    isError,
  } = trpc.pokemon.getAllPokemon.useQuery();

  const filteredPokemon = allPokemon?.filter((pokemon) => {
    console.log("Types", typeof [...pokemon.types], [...pokemon.types]);
    return selectedType ? [...pokemon.types].includes(selectedType) : true;
  });

  console.log("filteredPokemon", filteredPokemon);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Filter Pokemon by Type
      </Typography>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={setSelectedType}
      />
      {isLoading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : isError ? (
        <Typography color="error">Error fetching Pokémon.</Typography>
      ) : (
        <PokemonGrid pokemonArray={filteredPokemon || []} />
      )}
    </Container>
  );
};

export default FilterablePokedexTable;
