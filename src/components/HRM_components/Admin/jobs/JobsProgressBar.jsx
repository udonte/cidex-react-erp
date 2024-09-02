import React, { useState, useEffect } from "react";

const JobsProgressBar = () => {
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressPercentage((prevPercentage) => {
        if (prevPercentage === 100) {
          clearInterval(timer);
          return prevPercentage;
        }
        return prevPercentage + 1;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="h-2 rounded-full w-full bg-gray-300">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full rounded-full ${
          progressPercentage < 70 ? "bg-red-600" : "bg-green-600"
        }`}
      ></div>
    </div>
  );
};

export default JobsProgressBar;
