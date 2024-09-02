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
        className={`relative w-[180px] px-2 h-[44px] rounded-lg bg-[#f1f1f1] border-2 border-[#E6E6E6]`}
        onClick={handleOnClick}
      >
        <div className="flex justify-between">
          <div
            className={` flex w-[50px] h-[36px] items-center justify-center`}
          >
            <p>{leftIcon}</p>
          </div>
          <div className="flex w-[50px] h-[36px] items-center justify-center">
            <p>{rightIcon}</p>
          </div>

        </div>


        <span className={`flex items-center justify-center absolute top-[2px] w-[82px] h-[36px] rounded  ${
            activeState === true
              ? "transform translate-x-0"
              : "translate-x-[90px]"
          } bg-white transition-transform duration-400`}
        >
          {activeState === true ? (
            <div
              className={` ${
                activeState === true ? "  text-green-400 font-medium text-xs" : ""
              } `}
            >
              {leftIcon}
            </div>
          ) : (
            <div
              className={`${
                activeState === false ? "text-red-500 font-medium text-xs" : ""
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
