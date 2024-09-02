import React from "react";

const DotOptionButton = () => {
  return (
    <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center hover:bg-orange-100">
      <img src={process.env.PUBLIC_URL + "/images/HRM/HorizontalKebab.png"} />
    </div>
  );
};

export default DotOptionButton;
