import React from "react";

const TopTab = ({ leftComponent, rightComponent }) => {
  return (
    <>
      <div className="flex items-center justify-between my-2 px-6 py-4 bg-white">
        <div>{leftComponent} </div>
        <div>{rightComponent}</div>
      </div>
    </>
  );
};

export default TopTab;
