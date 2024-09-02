// src/components/StatusPill.js
import React from "react";

const StatusPill = ({ status, text }) => {
  const statusClasses = {
    active: "bg-green-100 text-green-600",
    pending: "text-yellow-500 bg-yellow-100",
    inActive: "text-red-500 bg-red-100",
  };

  return (
    <span
      className={`px-2 py-1 w-fit capitalize rounded-full text-sm font-semibold ${statusClasses[status]}`}
    >
      {text}
    </span>
  );
};

export default StatusPill;
