"use client";
import { Fragment, useState } from "react";
import { trpc } from "../../utils/trpc";
import PokemonGrid from "../../components/PokemonGrid"; // Make sure this path is correct
import {
  Autocomplete,
  Box,
  CircularProgress,
  Container,
  TextField,
  styled,
} from "@mui/material";
import { pokemonNames } from "@/utils/staticData";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    "& fieldset": {
      borderColor: "rgba(0, 0, 0, 0.23)",
    },
    "&:hover fieldset": {
      borderColor: "#4A90E2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#4A90E2",
      borderWidth: "2px",
    },
  },
});

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

  return (
    <Container maxWidth="md">
      <Fragment>
        <Autocomplete
          multiple
          disableClearable
          id="tags-outlined"
          options={pokemonNames}
          defaultValue={names}
          onChange={(e, newVal) => setNames(newVal)}
          filterSelectedOptions
          renderInput={(params) => (
            <StyledTextField
              {...params}
              label="Search Pokemons"
              placeholder="Search Pokemons"
            />
          )}
        />

        {isLoading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress sx={{ marginTop: "10%" }} />
          </Box>
        ) : (
          <PokemonGrid pokemonArray={pokemonArray ?? []} />
        )}
      </Fragment>
    </Container>
  );
};

export default PokemonListPage;
