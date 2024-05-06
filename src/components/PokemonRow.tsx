import { FC } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Divider,
} from "@mui/material";

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
      columnGap: "15px",
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
        maxHeight: 250,
        height: "100%",
        maxWidth: 250,
        padding: "40px 80px",
      }}
      image={pokemon.sprite}
      alt={pokemon.name}
    />
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography variant="h6">
          #{pokemon.id.toString().padStart(4, "0")}
        </Typography>
        <Divider sx={{ opacity: 0.9, margin: "10px 0" }} />
        <Typography variant="h2">{pokemon.name}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Types:
        </Typography>
        {pokemon.types.map((type, index) => (
          <Chip
            label={type}
            key={index}
            variant="outlined"
            sx={{
              marginRight: "4px",
              paddingInline: "10px",
              background: "rgba(33, 33, 33, 0.9)",
              color: "#fff",
            }}
          />
        ))}
      </CardContent>
    </Box>
  </Card>
);

export default PokemonRow;
