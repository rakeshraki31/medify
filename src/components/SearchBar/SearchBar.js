import { Stack, Select, MenuItem, Button, InputAdornment } from "@mui/material";
import { useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ states = [], cities = [], filterList }) => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Memoizing the filtered list
  const filteredList = useMemo(() => {
    if (!selectedState || !selectedCity) return [];
    return filterList({ state: selectedState, city: selectedCity });
  }, [selectedState, selectedCity, filterList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterList({ state: selectedState, city: selectedCity });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          displayEmpty
          sx={{
            minWidth: 120,    // Adjust minWidth to your preference
            width: 150,       // Adjust width to your preference
            fontSize: '0.875rem', // Smaller font size
            '& .MuiSelect-select': {
              py: 1,          // Reduce vertical padding
            },
            '& .MuiInputBase-input': {
              padding: '10px 12px', // Adjust padding
            },
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        >
          <MenuItem value="" disabled>Select State</MenuItem>
          {states.length > 0 && states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>

        <Select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          displayEmpty
          sx={{
            minWidth: 120,    // Adjust minWidth to your preference
            width: 150,       // Adjust width to your preference
            fontSize: '0.875rem', // Smaller font size
            '& .MuiSelect-select': {
              py: 1,          // Reduce vertical padding
            },
            '& .MuiInputBase-input': {
              padding: '10px 12px', // Adjust padding
            },
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        >
          <MenuItem value="" disabled>Select City</MenuItem>
          {cities.length > 0 && cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>

        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "10px", px: 4, flexShrink: 0 }} // Adjust button padding
          disableElevation
        >
          Search
        </Button>
      </Stack>
    </form>
  );
};

export default SearchBar;
