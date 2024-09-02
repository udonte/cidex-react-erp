import React from "react";

const CRMProgressBar = ({ data, completed, showPercentage }) => {
  const percentage = (completed / data) * 100;

  return (
    <>
      <div className="w-full h-full rounded-full bg-gray-200">
        <div
          className={`h-full rounded-full ${
            percentage === 100 ? "bg-green-500" : "bg-orange-500"
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {showPercentage && <p>{Math.round(percentage)}%</p>}
    </>
  );
};

export default CRMProgressBar;
