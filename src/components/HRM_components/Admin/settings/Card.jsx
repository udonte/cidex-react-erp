import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Card = ({ pages }) => {
  return (
    <div className="w-full h-20 bg-white px-6 my-3 flex justify-between items-center hover:bg-gurugeeks-dark-100 cursor-pointer">
      <div className="space-y-3">
        <p className="font-semibold">{pages.name}</p>
        <p className=" text-sm text-gurugeeks-dark-600">{pages.description}</p>
      </div>
      <div className="pr-8">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Card;
