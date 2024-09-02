import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({
  searchTerm,
  onSearchChange,
  onSearchFocus,
  className,
}) => {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onFocus={onSearchFocus}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={`Search...`}
        className={`${className}`}
      />
    </div>
  );
};

export default SearchInput;
