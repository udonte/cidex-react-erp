import React from "react";

const Button = ({ size, color, children, onClick, className, icon, type }) => {
  const sizes = {
    icon: "px-2 py-2 flex justify-center items-center",
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const colors = {
    primary: "bg-gurugeeks-green-600 text-white rounded",
    secondary: "bg-white border-2 rounded",
    icon: "bg-gurugeeks-dark-100 border-1 rounded-full",
  };

  const sizeClass = sizes[size] || sizes.md;
  const colorClass = colors[color] || colors.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${sizeClass} ${colorClass} flex justify-between items-center gap-x-2 hover:bg-opacity-75 transition duration-300`}
    >
      {icon && <p>{icon}</p>} {children}
    </button>
  );
};

export default Button;
