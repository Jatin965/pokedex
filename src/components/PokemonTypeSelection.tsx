import { FC } from "react";
import { Select, MenuItem, FormControl, InputLabel, styled } from "@mui/material";

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    borderRadius: "12px", // Sets the border radius for the input part
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "12px", // Sets the border radius for the outline
  },
  backgroundColor: "white",
}));

const menuProps = {
  PaperProps: {
    style: {
      borderRadius: 12,
      marginTop: 8,
      maxHeight: 500, // Maximum height of the menu
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)", // Custom shadow for dropdown
    },
  },
};

const PokemonTypeSelection: FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => (
  <FormControl sx={{flex: "0.5"}}>
    <InputLabel>Type</InputLabel>
    <StyledSelect
      value={selectedType}
      label="Type"
      onChange={(e) => selectType(e.target.value as string)}
      MenuProps={menuProps}
    >
      <MenuItem value="">
        <em>All</em>
      </MenuItem>
      <MenuItem value="Grass">Grass</MenuItem>
      <MenuItem value="Fire">Fire</MenuItem>
      <MenuItem value="Water">Water</MenuItem>
      <MenuItem value="Electric">Electric</MenuItem>
      <MenuItem value="Psychic">Psychic</MenuItem>
      <MenuItem value="Ice">Ice</MenuItem>
      <MenuItem value="Fairy">Fairy</MenuItem>
      <MenuItem value="Fighting">Fighting</MenuItem>
      <MenuItem value="Flying">Flying</MenuItem>
      <MenuItem value="Poison">Poison</MenuItem>
      <MenuItem value="Ground">Ground</MenuItem>
      <MenuItem value="Rock">Rock</MenuItem>
      <MenuItem value="Bug">Bug</MenuItem>
      <MenuItem value="Ghost">Ghost</MenuItem>
      <MenuItem value="Steel">Steel</MenuItem>
      <MenuItem value="Normal">Normal</MenuItem>
    </StyledSelect>
  </FormControl>
);

export default PokemonTypeSelection;
