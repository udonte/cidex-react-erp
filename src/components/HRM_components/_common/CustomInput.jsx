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
  size, // New size prop
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "p-1 min-h-6";
      case "medium":
        return "p-3 min-h-14";
      case "large":
        return "p-4 min-h-16";
      default:
        return "p-3 min-h-14"; // Default size
    }
  };

  const sizeClasses = getSizeClasses();

  if (type === "textarea") {
    return (
      <div>
        <label htmlFor={name} className="font-light">
          {label}
        </label>
        <textarea
          onChange={(e) => handleInputChange(e)}
          className={`w-full outline-0 border-0 bg-gray-100 rounded-md placeholder:font-light ${sizeClasses} ${inputClassName}`}
          name={name}
          value={value}
          rows="4"
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  } else {
    return (
      <div className={`${className}`}>
        <label htmlFor={name} className="font-light">
          {label}
        </label>
        <input
          ref={inputRef}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full border-0 outline-none bg-gray-100 rounded-md placeholder:font-light ${sizeClasses} ${inputClassName}`}
          type={type}
          value={value}
          name={name}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    );
  }
};

export default CustomInput;
