import React from "react";

const TabbedPages = ({
  children,
  tabIndex = 0,
  tabsHeader,
  rightComponent,
  setTabIndex = () => {
    return;
  },
}) => {
  return (
    <div className="h-full">
      <div>
        <div className="flex  w-[400px] mx-auto">
          {tabsHeader &&
            tabsHeader.map((items, index) => {
              return (
                <div
                  onClick={() => {
                    setTabIndex(index);
                  }}
                  className={`py-2 px-4 w-full rounded text-center capitalize font-semibold cursor-pointer text-sm ${
                    index === tabIndex
                      ? "text-gurugeeks-orange-700 border border-gurugeeks-orange-700 "
                      : "text-gurugeeks-text bg-transparent border"
                  }`} 
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
