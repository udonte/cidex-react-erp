import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(-1)}
      className="bg-white text-gray-500 h-[35px] w-[35px] rounded-full flex items-center justify-center cursor-pointer"
    >
      <FaChevronLeft />
    </div>
  );
};

export default BackButton;
