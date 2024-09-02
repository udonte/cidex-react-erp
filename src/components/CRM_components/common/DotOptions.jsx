import React from "react";

const DotOptions = ({ dotOptions, onClick, onMouseLeave }) => {
  return (
    <div
      onMouseLeave={onMouseLeave}
      className="absolute right-1 z-50  w-fit  min-w-max border rounded bg-white shadow-lg"
    >
      {dotOptions.map((item, index) => (
        <div
          onClick={onClick}
          key={index}
          className=" px-6 py-3 gap-x-3 w-full min-w-max  flex items-center shrink-0 hover:bg-gurugeeks-dark-100"
        >
          {item.icon}
          <p className="text-left">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default DotOptions;
