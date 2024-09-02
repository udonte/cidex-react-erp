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
      <div className="px-3 border-b flex items-center justify-between bg-white">
        <div className="flex">
          {tabsHeader &&
            tabsHeader.map((items, index) => {
              return (
                <div
                  onClick={() => {
                    setTabIndex(index);
                  }}
                  className={`p-4 font-bold cursor-pointer uppercase  ${
                    index === tabIndex
                      ? "text-gurugeeks-orangeLight border-b-[3px] border-gurugeeks-orangeLight"
                      : "text-gurugeeks-text"
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
