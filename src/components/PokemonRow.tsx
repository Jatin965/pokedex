import { FC } from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

type PokemonRowProps = {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  };
};

const PokemonRow: FC<PokemonRowProps> = ({ pokemon }) => (
  <Card sx={{ display: "flex", width: 300, margin: 1 }}>
    <CardMedia
      component="img"
      sx={{ width: 50, height: 50 }}
      image={pokemon.sprite}
      alt={pokemon.name}
    />
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography variant="subtitle1">
          {pokemon.name} (ID: {pokemon.id})
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Types: {pokemon?.types?.join(", ")}
        </Typography>
      </CardContent>
    </Box>
  </Card>
);

export default PokemonRow;
