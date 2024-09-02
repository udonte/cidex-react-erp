import React from "react";
import Button from "../Button/Button";
import Checkbox from "../Checkbox";

const FilterDropDown = ({
  setShowDropDown,
  setShowFilters,
  filterOptions,
  selectedFilterOptions,
  handleFilterOptionSelect,
}) => {
  return (
    <div className="w-[250px] bg-white shadow-lg rounded-lg my-2">
      <div className="flex items-center justify-between p-2 h-10 bg-[#F0F0F0] ring-1 ring-gray-200">
        <p>Lead Filter by</p>
        <p>4/4</p>
      </div>
      {filterOptions.map((item, index) => (
        <div
          key={index}
          // onClick={() => handleFilterOptionSelect(items)}
          className="flex items-center justify-between h-[56px] px-3 border-b"
        >
          <p className="truncate">{item.name}</p>

          <Checkbox
            handleOnchange={() => handleFilterOptionSelect(item)}
            checked={selectedFilterOptions
              .map((option) => option.name)
              .includes(item.name)}
          />
        </div>
      ))}
      <div className="p-2 flex items-center justify-end">
        <Button
          onClick={() => {
            setShowFilters(true);
            setShowDropDown(false);
          }}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default FilterDropDown;
