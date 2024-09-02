import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Checkbox from "../../../../_common/Checkbox";

const CustomCheckboxDropdown = ({
  handleSelect,
  options,
  label = "Select Option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    setSelectedOptions(updatedOptions);
    handleSelect(updatedOptions);
  };

  const handleSelectAll = () => {
    setSelectedOptions(options.map((option) => option));
    handleSelect(options.map((option) => option));
  };

  const handleDeleteAll = () => {
    setSelectedOptions([]);
    handleSelect([]);
  };

  const isAllSelected = selectedOptions.length === options.length;

  return (
    <div className="relative inline-block text-left w-full">
      <div className="w-full">
        <p>{label}</p>
        <div
          onClick={handleToggle}
          className="inline-flex items-center justify-center text-black w-full rounded-md border border-gray-300 shadow-sm h-14 px-3 bg-slate-50 focus:outline-none text-sm font-medium hover:bg-gray-50"
          id="options-menu"
        >
          <div className="flex justify-between items-center w-full">
            <p className="capitalize text-black truncate">
              {selectedOptions
                ? selectedOptions.map((option) => option.label).join(",")
                : "Select option"}
            </p>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className=" absolute mt-2 w-full rounded-md shadow-lg bg-white ring-2 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1">
            <div
              onClick={isAllSelected ? handleDeleteAll : handleSelectAll}
              className="flex items-center h-[55px] hover:bg-slate-50 border-b px-4 py-2 text-gray-700 cursor-pointer"
            >
              <Checkbox checked={isAllSelected} />
              <p>All</p>
            </div>
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  handleOptionClick(option);
                }}
                className="flex items-center h-[55px] hover:bg-slate-50 border-b px-4 py-2 text-gray-700 cursor-pointer"
              >
                <Checkbox
                  name={index}
                  checked={selectedOptions
                    .map((i) => i.value)
                    .includes(option.value)}
                  // handleOnchange={() => handleOptionClick(option)}
                />

                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCheckboxDropdown;
