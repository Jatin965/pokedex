import { FC } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const PokemonTypeSelection: FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => (
  <FormControl fullWidth>
    <InputLabel>Type</InputLabel>
    <Select
      value={selectedType}
      label="Type"
      onChange={(e) => selectType(e.target.value as string)}
    >
      <MenuItem value="">
        <em>All</em>
      </MenuItem>
      <MenuItem value="Grass">Grass</MenuItem>
      <MenuItem value="Fire">Fire</MenuItem>
      <MenuItem value="Water">Water</MenuItem>
    </Select>
  </FormControl>
);

export default PokemonTypeSelection;
