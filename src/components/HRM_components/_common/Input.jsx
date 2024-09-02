// src/components/InputWithPlaceholder.js
import React, { useState } from "react";

const Input = ({ type, value, name, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (event) => {
    setHasContent(event.target.value.length > 0);
  };

  return (
    <div className="relative mb-6">
      <input
        type={type}
        value={value}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={() => {
          handleInputChange();
          onChange();
        }}
        className={`border h-[40px] border-gray-300 rounded px-3 py-2 ${
          isFocused ? "border-red-600" : ""
        } focus:outline-none focus:border-red-600`}
      />
      <label
        className={`absolute left-3 transition-all duration-300 ${
          hasContent
            ? "top-0 text-border-red-600 text-xs text-red-600"
            : isFocused
            ? "top-0 text-border-red-600 text-xs text-red-600"
            : "top-1/2 -translate-y-1/2 text-gray-500 text-sm"
        }`}
      >
        Label
      </label>
    </div>
  );
};

export default Input;
