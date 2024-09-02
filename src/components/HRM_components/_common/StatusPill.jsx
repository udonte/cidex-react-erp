// src/components/StatusPill.js
import React from "react";

const StatusPill = ({ status, text, size }) => {
  const statusClasses = {
    active: "bg-green-100 text-green-600",
    pending: "text-yellow-500 bg-yellow-100",
    inActive: "text-red-500 bg-red-100",
  };

  const getSizeClasses = (size) => {
    switch (size) {
      case "xs":
        return "px-2 py-1 text-xs";
      case "sm":
        return "px-3 py-1 text-sm";
      case "md":
        return "px-4 py-2 text-base";
      case "lg":
        return "px-5 py-3 text-lg";
      default:
        return "px-3 py-1 text-sm"; // Default size
    }
  };

  const sizeClasses = getSizeClasses(size);

  return (
    <span
      className={`w-fit capitalize rounded-full font-semibold ${sizeClasses} ${statusClasses[status]}`}
    >
      {text}
    </span>
  );
};

export default StatusPill;
