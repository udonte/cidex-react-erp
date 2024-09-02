import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CustomDropdown = ({ options, onSelect, placeHolder, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue, optionLabel) => {
    setSelectedOption(optionLabel);
    setIsOpen(false);
    onSelect(optionValue);
  };

  return (
    <div className="relative">
      {label && <p className="font-semibold">{label}</p>}
      <div
        onClick={toggleDropdown}
        className="h-14 flex items-center px-3 text-black border-2 bg-slate-50 rounded-md focus:outline-none focus:bg-blue-600"
      >
        {!selectedOption ? (
          <div className="flex justify-between items-center w-full truncate">
            {placeHolder ? (
              <p className="text-gurugeeks-dark-500w-full truncate">
                {placeHolder}
              </p>
            ) : (
              <p className="text-gurugeeks-dark-500"> Select</p>
            )}
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        ) : (
          <div className="flex justify-between items-center w-full capitalize truncate">
            <p>{selectedOption}</p>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        )}
      </div>
      {isOpen &&
        (options.length > 0 ? (
          <div className="absolute mt-2 w-full max-h-[300px] overflow-y-auto bg-white border border-gray-300 shadow-lg rounded-lg z-10">
            {options?.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option.value, option.label)}
                className="px-4 h-[45px] border-b-2  py-2 hover:bg-gray-100 cursor-pointer capitalize truncate"
              >
                {option.label}
              </div>
            ))}
          </div>
        ) : (
          <div className="absolute mt-2 w-full max-h-[300px] overflow-y-auto bg-white border border-gray-300 shadow-lg rounded-lg z-10">
            <p className="px-4 h-[45px] border-b-2  py-2 hover:bg-gray-100 cursor-pointer capitalize truncate">
              No Value Available
            </p>
          </div>
        ))}
    </div>
  );
};

export default CustomDropdown;
