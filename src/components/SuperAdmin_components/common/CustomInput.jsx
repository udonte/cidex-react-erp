import React from "react";

const CustomInput = ({
  inputRef,
  disabled,
  name,
  value,
  handleInputChange,
  type,
  label,
  className,
  inputClassName,
  placeholder,
}) => {
  return (
    <div>
      <div className={`${className} `}>
        <label htmlFor="location" className="font-semibold">
          {label}
        </label>
        <input
          ref={inputRef}
          disabled={disabled}
          placeholder={placeholder}
          className={`p-3 w-full min-h-14 border bg-slate-50 rounded-md ${inputClassName}`}
          type={type}
          value={value}
          name={name}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </div>
    </div>
  );
};

export default CustomInput;
