import React, { useState, useRef } from "react";

const TabbedPages = ({
  children,
  tabIndex = 0,
  tabsHeader,
  rightComponent,
  setTabIndex = () => {},
}) => {
  const handleTabClick = (index) => {
    setTabIndex(index);
  };

  return (
    <div className="h-full">
      <div
        className="border-b flex items-center  bg-[#F6F6F6] overflow-x-scroll scroll-width"
        
      >
        <div className="flex whitespace-nowrap gap-6 ">
          {tabsHeader &&
            tabsHeader.map((items, index) => {
              return (
                <div
                  onClick={() => handleTabClick(index)}
                  className={`p-2 font-normal cursor-pointer capitalize text-sm ${
                    index === tabIndex
                      ? "text-[#252525] border-b-[2px] border-[#9B9B9B]"
                      : "text-[#9B9B9B]"
                  }`}
                  key={index}
                >
                  {items}
                </div>
              );
            })}
        </div>
        <div>{rightComponent}</div>
      </div>
      <main className="h-full">{children}</main>
    </div>
  );
};

export default TabbedPages;