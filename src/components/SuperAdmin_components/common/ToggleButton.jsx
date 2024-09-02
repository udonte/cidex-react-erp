import React from "react";

const ToggleButton = ({ handleOnClick, activeState }) => {
  return (
    <div>
      <button
        type="button"
        className={`w-12 h-8 px-1 rounded-full ${
          activeState === true ? "bg-[#16C098]" : "bg-red-500"
        }`}
        onClick={handleOnClick}
      >
        <span
          className={`block w-5 h-[20px] rounded-full ${
            activeState === true ? "transform translate-x-4" : "translate-x-0"
          } bg-white transition-transform duration-400`}
        />
      </button>
    </div>
  );
};

export default ToggleButton;
