import React from "react";

const CurrentPosition = ({ number }) => {
  return (
    <div className="flex items-center justify-between w-full border-b-2 py-4">
      <div className={`h-10 w-10 bg-gurugeeks-gray-700 ${number >= 0 && "bg-gurugeeks-orange-700 text-white"} rounded-full text-white flex justify-center items-center `}>1</div>
      <div className={` w-28 h-2 bg-gurugeeks-gray-700  ${number >= 0 && "bg-gurugeeks-orange-700 text-white"} rounded-ful`}></div>
      <div className={`h-10 w-10 bg-gurugeeks-gray-700 ${number >= 1 && "bg-gurugeeks-orange-700 text-white"} text-gurugeeks-text-2 rounded-full flex justify-center items-center`}>2</div>
      <div className={` w-28 h-2 bg-gurugeeks-gray-700  ${number >= 1 && "bg-gurugeeks-orange-700 text-white"} rounded-ful`}></div>
      <div className={`h-10 w-10  bg-gurugeeks-gray-700 ${number >= 2 && "bg-gurugeeks-orange-700 text-white"} text-gurugeeks-text-2 rounded-full flex justify-center items-center`}>3</div>
      <div className={` w-28 h-2 bg-gurugeeks-gray-700  ${number >= 2 && "bg-gurugeeks-orange-700 text-white"} rounded-ful`}></div>
      <div className={`h-10 w-10  bg-gurugeeks-gray-700 ${number >= 3 && "bg-gurugeeks-orange-700 text-white"} text-gurugeeks-text-2 rounded-full flex justify-center items-center`}>4</div>
    </div>
  );
};
const TopProgressBar = ({ index }) => {

    return (
     <CurrentPosition number={index} />
    );
};

export default TopProgressBar;
