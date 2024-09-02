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
        <div className="flex gap-4 mx-20">
          {tabsHeader &&
            tabsHeader.map((items, index) => {
              return (
                <div
                  onClick={() => {
                    setTabIndex(index);
                  }}
                  className={`p-4 w-full rounded text-center uppercase font-medium cursor-pointer text-sm ${
                    index === tabIndex
                      ? "text-white bg-gurugeeks-green-600 "
                      : "text-gurugeeks-text bg-transparent border"
                  }`}
                >
                  {items}
                </div>
              );
            })}
        </div>
        {/* <div>{rightComponent}</div> */}
      </div>
      <main className="h-full">{children}</main>
    </div>
  );
};

export default TabbedPages;
