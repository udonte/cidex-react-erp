// src/components/StarRating.js
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ totalStars, initialRating }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  return (
    <div className="flex items-center">
      {Array.from({ length: totalStars }, (_, index) => (
        <button
          key={index}
          onClick={() => handleStarClick(index)}
          className={`text-2xl h-full focus:outline-none ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          <FaStar />
        </button>
      ))}
      {/* <span className="ml-2 text-gray-600">
        {rating} / {totalStars}
      </span> */}
    </div>
  );
};

export default StarRating;
