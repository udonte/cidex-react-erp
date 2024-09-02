import React from "react";
import Checkbox from "./Checkbox";

const DropDownWithCheckbox = ({
  setShowDropDown,
  setShowFilters,
  filterOptions,
  selectedFilterOptions,
  handleFilterOptionSelect,
}) => {
  return (
    <div className="w-[250px] border bg-white shadow-lg rounded-lg my-2">
      {filterOptions?.map((item, index) => (
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
        {/* <Button
          onClick={() => {
            setShowFilters(true);
            setShowDropDown(false);
          }}
        >
          Done
        </Button> */}
      </div>
    </div>
  );
};

export default DropDownWithCheckbox;
