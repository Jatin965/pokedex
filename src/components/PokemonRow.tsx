import { FC } from "react";
import { Card, CardMedia, CardContent, Typography, Box, Chip } from "@mui/material";

type PokemonRowProps = {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  };
};

const PokemonRow: FC<PokemonRowProps> = ({ pokemon }) => (
  <Card
    sx={{
      display: "flex",
      alignItems: "center",
      width: "100%",
      margin: 1,
      borderRadius: "12px",
    }}
    variant="outlined"
  >
    <CardMedia
      component="img"
      sx={{
        width: "auto",
        maxHeight: 300,
        height: "100%",
        maxWidth: 300,
        padding: "40px 80px",
      }}
      image={pokemon.sprite}
      alt={pokemon.name}
    />
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography variant="h6">
          {pokemon.id.toString().padStart(4, "0")}
        </Typography>
        <Typography variant="h2">{pokemon.name}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Types:
        </Typography>
        {pokemon.types.map((type) => (
          <Chip label={type} />
        ))}
      </CardContent>
    </Box>
  </Card>
);

export default PokemonRow;
