import React, { useState } from "react";
import { Checkbox } from "../..";
import DotOptions from "../DotOptions";
import DotOptionButton from "../../../_common/DotOptionButton";

const TableRowItem = ({
  children,
  id,
  dotOptions,
  checkbox,
  handleOnClick,
}) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleRowHover = (rowId) => {
    setHoveredRow(rowId);
  };
  const handleDotOptionClick = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <tr
      onMouseEnter={() => handleRowHover(id)}
      onMouseLeave={() => {
        handleRowHover(null);
      }}
      // onClick={handleOnClick()}
      className=" px-6  bg-white h-[60px] text-left text-lg font-medium border-y-2 hover:bg-slate-50 cursor-pointer"
    >
      {checkbox && (
        <td>
          <div className="">
            <Checkbox />
          </div>
        </td>
      )}

      {children}
      {dotOptions && (
        <td
          onClick={() => handleDotOptionClick()}
          className="relative  pr-12 w-[80px]"
        >
          <button className="action-button flex justify-center items-center">
            <DotOptionButton />
          </button>
          {showDropDown && (
            <div
              onMouseLeave={() => {
                setShowDropDown(!showDropDown);
              }}
              className="absolute z-50 top-[50px]  w-fit  min-w-max right-[60px] top border rounded bg-white shadow-lg"
            >
              {dotOptions.map((item, index) => (
                <div
                  onClick={() => {
                    item.action(id);
                  }}
                  key={index}
                  className=" px-6 py-3 gap-x-3 w-full min-w-max  flex items-center shrink-0 hover:bg-gurugeeks-dark-100 cursor-pointer"
                >
                  {item.icon} <p className="text-left">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </td>
      )}
    </tr>
  );
};

export default TableRowItem;
