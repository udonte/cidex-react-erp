import React from "react";

const Button = ({
  size = '',
  color = '',
  children,
  onClick = ()=> undefined,
  className = '',
  disabled = false,
  icon = '',
  type = "submit",
}) => {
  const sizes = {
    icon: "px-2 py-2 flex justify-center items-center",
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const colors = {
    primary: "bg-gurugeeks-orange-700 text-white rounded",
    secondary: "bg-white border-2 border-gurugeeks-orange-700 text-gurugeeks-orange-700 rounded",
    gray: "bg-gray-100",
    icon: "bg-gurugeeks-dark-100 border-1 rounded-full",
  };

  const sizeClass = sizes[size] || sizes.md;
  const colorClass = colors[color] || colors.primary;

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${className} ${sizeClass} ${colorClass} ${
        disabled ? "bg-opacity-50" : " "
      }  flex font-normal items-center gap-x-2 hover:bg-opacity-50 transition duration-300 text-xs`}
    >
      {icon && <p>{icon}</p>} {children}
    </button>
  );
};

export default Button;
