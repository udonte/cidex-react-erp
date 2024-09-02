import React from "react";

const NameTag = ({ firstName = "", lastName = "", size }) => {
  const sizes = {
    xl: "h-[63px] w-[63px] text-2xl",
    lg: "h-8 w-8 text-lg",
    sm: "h-6 w-6",
  };

  const setSize = sizes[size] || sizes.lg;

  return (
    <div
      className={`${setSize} rounded-full bg-gurugeeks-orange-700 font-bold  flex items-center justify-center text-white`}
    >
      <h1 className=" uppercase">
        {firstName ? firstName[0] : "N"}
        {lastName && lastName[0]}
      </h1>
    </div>
  );
};

export default NameTag;
