// CustomDropdown.js
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CheckboxDropDown = ({ options, onSelect, label, placeHolder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option) => {
    const isSelected = selectedOptions.includes(option);

    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSelectAll = () => {
    setSelectedOptions(options);
  };

  const handleClearSelection = () => {
    setSelectedOptions([]);
  };

  const handleApplySelection = () => {
    setIsOpen(false);
    onSelect(selectedOptions);
  };

  return (
    <div className="relative w-full inline-block text-left">
      {label && <p className="font-semibold">{label}</p>}
      <div
        onClick={toggleDropdown}
        className="h-14 flex items-center px-3 text-black border-2 bg-slate-50 rounded-md focus:outline-none focus:bg-blue-600"
      >
        {!selectedOptions ? (
          <div className="flex justify-between items-center w-full">
            {placeHolder ? (
              <p className="text-gurugeeks-dark-500">{placeHolder}</p>
            ) : (
              <p className="text-gurugeeks-dark-500"> Select</p>
            )}
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        ) : (
          <div className="flex justify-between items-center w-full capitalize">
            {selectedOptions.map((selectedOption) => (
              <p>{selectedOption.label}</p>
            ))}

            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        )}
      </div>

      {isOpen && (
        <div className="origin-top-right max-h-[350px] overflow-y-auto absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <div className="flex items-center p-2">
              <input
                type="checkbox"
                id="selectAll"
                checked={selectedOptions.length === options.length}
                onChange={handleSelectAll}
              />
              <label htmlFor="selectAll" className="ml-2">
                Select All
              </label>
            </div>
            {options.map((option) => (
              <div key={option.value} className="flex items-center p-2">
                <input
                  type="checkbox"
                  id={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <label htmlFor={option} className="ml-2">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
          <div className="flex justify-between p-2">
            <button
              onClick={handleClearSelection}
              className="text-blue-500 hover:text-blue-700"
            >
              Clear
            </button>
            <button
              onClick={handleApplySelection}
              className="text-blue-500 hover:text-blue-700"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckboxDropDown;
