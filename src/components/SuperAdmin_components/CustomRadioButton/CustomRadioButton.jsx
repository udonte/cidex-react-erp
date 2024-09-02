import React from "react";

const CustomRadioButton = ({ label, name, value, checked, onChange }) => {
  const handleRadioChange = () => {
    onChange(name, value);
  };

  return (
    <div className="flex items-center my-2">
      <label
        className="flex items-center cursor-pointer text-gurugeeks-dark-500"
        htmlFor={`${name}_${value}`}
      >
        <div className="relative">
          <input
            type="radio"
            id={`${name}_${value}`}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            className="hidden"
          />
          <div className="w-6 h-6 border-2 border-gurugeeks-green-600 rounded-full flex items-center justify-center">
            {checked && (
              <div className="w-4 h-4 bg-gurugeeks-green-600 rounded-full"></div>
            )}
          </div>
        </div>
        <p className="ml-3">{label}</p>
      </label>
    </div>
  );
};

export default CustomRadioButton;
