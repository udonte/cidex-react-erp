import React from "react";

const TableViewToggleButton = ({
  handleOnClick,
  activeState,
  leftIcon,
  rightIcon,
}) => {
  return (
    <div>
      <button
        type="button"
        className={`relative w-[180px] h-[44px] px-1 rounded-lg bg-[#f1f1f1] border-2 border-[#E6E6E6]`}
        onClick={handleOnClick}
      >
        <div className="flex justify-between">
          <div
            className={` flex w-[80px] h-[36px] items-center justify-center`}
          >
            <p>{leftIcon}</p>
          </div>
          <div className="flex w-[80px] h-[36px] items-center justify-center">
            <p>{rightIcon}</p>
          </div>
        </div>
        <span
          className={`flex items-center justify-center absolute top-[2px] w-[82px] h-[36px] rounded ${
            activeState === true
              ? "transform translate-x-0"
              : "translate-x-[90px]"
          } bg-white transition-transform duration-400`}
        >
          {activeState === true ? (
            <div
              className={`${
                activeState === true ? " text-gurugeeks-orange-700" : ""
              } `}
            >
              {leftIcon}
            </div>
          ) : (
            <div
              className={`${
                activeState === false ? "text-gurugeeks-orange-700" : ""
              } `}
            >
              {rightIcon}
            </div>
          )}
        </span>
      </button>
    </div>
  );
};

export default TableViewToggleButton;
