import React from "react";

const FullNameTag = ({ firstName = "", lastName = "", size, className }) => {
  const sizes = {
    xl: "h-[63px] w-[63px] text-2xl",
    lg: "h-8 w-8 text-lg",
    sm: "h-6 w-6",
  };

  const setSize = sizes[size] || sizes.lg;

  return (
    <div className="flex gap-x-2 items-center">
      <div
        className={`${setSize} ${className} rounded-full bg-gurugeeks-orange-700 font-bold  flex items-center justify-center text-white`}
      >
        <h1 className=" uppercase">
          {firstName && firstName[0]}
          {lastName && lastName[0]}
        </h1>
      </div>
      <div className="text-left truncate leading-5">
        <p className=" font-semibold">{firstName}</p>
        <p className="text-[12px]">Business Analyst</p>
      </div>
    </div>
  );
};

export default FullNameTag;
