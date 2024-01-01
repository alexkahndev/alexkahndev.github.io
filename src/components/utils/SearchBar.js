import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search projects..."
        className="search-input"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
