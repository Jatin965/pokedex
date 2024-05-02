import { trpc } from "../../utils/trpc";
import PokemonRow from "../../components/PokemonRow";
import { Box, CircularProgress } from "@mui/material";

interface PageProps {
  params: {
    name: string;
  };
}

const PokemonPage = ({ params }: PageProps) => {
  const { name } = params;

  console.log("name", name)

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

  return <PokemonRow pokemon={pokemon} />;
};

export default PokemonPage;
