import React, { useState } from "react";
import DotOptions from "../DotOptions";
import DotOptionButton from "../../../_common/DotOptionButton";

const TableRowItem = ({ children, onClick, dotOptions, id }) => {
  const image = process.env.PUBLIC_URL;
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
      onClick={onClick}
      className="pl-6 items-center text-left bg-white h-[60px] text-lg text-gurugeeks-text font-medium border-y-2 hover:bg-orange-50"
    >
      {children}
      {dotOptions && (
        <td
          onClick={() => handleDotOptionClick()}
          className="relative  pr-12 w-[80px]"
        >
          <div className="flex items-center justify-center w-full">
            <button className="action-button flex justify-center items-center">
              <DotOptionButton />
            </button>
          </div>
          {showDropDown && (
            <div
              onMouseLeave={() => {
                setShowDropDown(!showDropDown);
              }}
              className="absolute z-50 top-[50px]  w-fit  min-w-max right-[60px] top border rounded bg-white shadow-lg"
            >
              {dotOptions?.map((item, index) => (
                <div
                  onClick={() => {
                    item.callBack(id);
                  }}
                  key={index}
                  className=" px-6 py-3 gap-x-3 w-full min-w-max  flex items-center shrink-0 hover:bg-gurugeeks-dark-100"
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
