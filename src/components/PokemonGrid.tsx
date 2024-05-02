import { FC } from "react";
import { Grid } from "@mui/material";
import PokemonRow from "./PokemonRow";

type PokemonGridProps = {
  pokemonArray: Array<{
    id: number;
    name: string;
    types: string[];
    sprite: string;
  }>;
};

const PokemonGrid: FC<PokemonGridProps> = ({ pokemonArray }) => (
  <Grid container spacing={2} justifyContent="center">
    {pokemonArray.map((pokemon) => (
      <Grid item key={pokemon.id}>
        <PokemonRow pokemon={pokemon} />
      </Grid>
    ))}
  </Grid>
);

export default PokemonGrid;
