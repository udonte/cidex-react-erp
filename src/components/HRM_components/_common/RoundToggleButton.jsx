import React from "react";

const RoundToggleButton = ({ handleOnClick, activeState }) => {
  return (
    <div>
      <button
        type="button"
        className={` w-12 h-[30px] px-1 rounded-full ${
          activeState === true ? "bg-[#16C098]" : "bg-gurugeeks-orange-700"
        }`}
        onClick={handleOnClick}
      >
        <span
          className={`block w-[20px] h-[20px] rounded-full ${
            activeState === true ? "transform translate-x-4" : "translate-x-0"
          } bg-white transition-transform duration-400`}
        />
      </button>
    </div>
  );
};

export default RoundToggleButton;
