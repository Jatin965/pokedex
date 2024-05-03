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
  <Grid container spacing={2} justifyContent="stretch" sx={{marginTop: "20px"}}>
    {pokemonArray.map((pokemon) => (
      <Grid item key={pokemon.id} sx={{width: "100%", padding: "0 !important"}}>
        <PokemonRow pokemon={pokemon} />
      </Grid>
    ))}
  </Grid>
);

export default PokemonGrid;
