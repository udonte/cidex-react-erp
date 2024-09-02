import React from "react";

const TabbedPages = ({
  children,
  tabIndex = 0,
  tabsHeader,
  setTabIndex = () => {
    return;
  },
}) => {
  return (
    <div className="h-full">
      <div className="px-3 border-b flex bg-white text-gray-800">
        {tabsHeader &&
          tabsHeader.map((items, index) => {
            return (
              <div
                onClick={() => {
                  setTabIndex(index);
                }}
                className={`p-4 font-bold cursor-pointer uppercase  ${
                  index === tabIndex
                    ? "text-gurugeeks-green-600 border-b-[3px] border-gurugeeks-green-600"
                    : ""
                }`}
              >
                {items}
              </div>
            );
          })}
      </div>

      <main className="h-full">{children}</main>
    </div>
  );
};

export default TabbedPages;
