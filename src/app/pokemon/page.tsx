"use client";

import { trpc } from "../../utils/trpc";
import PokemonRow from "../../components/PokemonRow";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    marginLeft: "8px",
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

const StyledButton = styled(Button)({
  borderRadius: "9px",
  padding: "14px 40px",
  textTransform: "unset",
  "&:focus": {
    boxShadow: "0 0 0 2px rgba(25,118,210,0.5)",
  },
});

const PokemonPage = () => {
  const [name, setName] = useState("pikachu");
  const [tempName, setTempName] = useState("pikachu");

  const {
    data: pokemon,
    isLoading,
    error,
  } = trpc.pokemon.getPokemonByName.useQuery(name, {
    enabled: Boolean(name),
  });

  const handleSearch = () => {
    setName(tempName);
  };

  return (
    <Container maxWidth="md">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={5}
      >
        <StyledTextField
          fullWidth
          placeholder="Search Pokemon By Name"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
        />
        <StyledButton variant="contained" onClick={handleSearch}>
          Search
        </StyledButton>
      </Stack>
      {isLoading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress sx={{marginTop: "10%"}} />
        </Box>
      ) : error || !pokemon ? (
        <Typography color="error" variant="h4">
          Pokemon not found or there was an error fetching the pokemon.
        </Typography>
      ) : (
        <PokemonRow pokemon={pokemon} />
      )}
    </Container>
  );
};

export default PokemonPage;
