import React from "react";
import { TextField } from "@mui/material";
import "./SearchBar.module.scss";

export default function SearchBar({ onSearch, placeholder = "Search" }) {
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <TextField 
      className="search-bar"
      id="search-bar"
      label={placeholder}
      variant="outlined"
      size="small"
      onChange={handleSearch}
      sx={{
        minWidth: "100%",
        
        "& .MuiOutlinedInput-root": {
          borderWidth: "2px",
          "& fieldset": {
            borderWidth: "2px",
            borderColor: "#FFD700",
          },
          "&:hover fieldset": {
            borderWidth: "2px",
            borderColor: "#FFD700",
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px",
            borderColor: "#FFD700",
          },
          "& input": {
            color: "#FFD700",
          },
          "& input::placeholder": {
            color: "#FFD700",
            opacity: "1 !important",
            fontWeight: 700,
            fontSize: "1.1rem",
          },
          "& label": {
            color: "#FFD700",
          },
          "&.Mui-focused label": {
            color: "#FFD700",
          },
        },
      }}
    />
  );
}
