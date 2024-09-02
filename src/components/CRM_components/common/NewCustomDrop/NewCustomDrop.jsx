import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const NewCustomDrop = ({
  options,
  onSelect,
  placeHolder = "Select",
  label = "Label",
  size = "md", // Default size is medium
}) => {
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

  const dropdownSizeClass =
    size === "sm"
      ? "h-10 text-sm"
      : size === "md"
      ? "h-14 text-base"
      : size === "lg"
      ? "h-16 text-lg"
      : "h-14 text-base"; // Default size class

  return (
    <div className="relative">
      <p>{label}</p>
      <div
        onClick={toggleDropdown}
        className={`flex items-center px-3 text-black border-2 bg-slate-50 rounded-md focus:outline-none focus:bg-blue-600 ${dropdownSizeClass}`}
      >
        {!selectedOption ? (
          <div className="flex justify-between items-center w-full">
            <p>{placeHolder} </p>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        ) : (
          <div className="flex justify-between items-center w-full">
            <p>{selectedOption}</p>{" "}
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        )}
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-full max-h-[350px] overflow-auto bg-white border border-gray-300 shadow-lg rounded-lg z-10">
          {options?.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option.value, option.label)}
              className={`flex items-center w-full border-b-2 px-4 py-2 gap-x-6 hover:bg-gray-100 cursor-pointer ${
                size === "sm" ? "h-10" : size === "lg" ? "h-16" : "h-14"
              }`}
            >
              <div>{option.label}</div>
              <img className="w-[25px]" src={option.img} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewCustomDrop;
