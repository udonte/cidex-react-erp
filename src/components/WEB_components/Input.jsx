import React from "react";

const Input = ({
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
    <div >
      <div className={` mt-5 ${className} `}>
        <label htmlFor="location" className='font-semibold'>
          {label}
        </label>
        <input
          placeholder={placeholder}
          className={`p-3 w-full min-h-12 border-neutral-300 rounded-md ${inputClassName}`}
          type={type}
          value={value}
          name={name}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Input;
