import React from "react";
import StatusPill from "../../../_common/StatusPill";

const RowItems = ({ progress }) => {
  return (
    <div className="flex  my-4 pr-12  p-6  items-center justify-between bg-white">
      <div className="w-fullspace-y-2">
        <p className="text-sm  text-gurugeeks-dark-500 font-semibold">
          Robert Doen’s Study request
        </p>
        <p className=" font-semibold text-lg">
          Introduction to Micro-Interaction and Prototyping
        </p>
        <p className=" text-sm">
          To get student introduced to the fundamentals of micro-interaction and
          basic prototyping and concepts.
        </p>
        <p className="text-semibold text-gurugeeks-dark-500">
          6 weeks •{" "}
          <span className="text-sm text-black">Product Department</span>
        </p>
      </div>

      <div>
        {progress && (
          <div className="flex items-center flex-col ">
            <StatusPill text={progress.text} status={progress.status} />
            <p className=" text-gurugeeks-dark-500 text-lg">3 weeks Left</p>
          </div>
        )}
      </div>
      <div className="h-10 w-10 rounded-full bg-gurugeeks-gray-700 flex items-center justify-center">
        <img
          src={process.env.PUBLIC_URL + "/images/HRM/HorizontalKebab.png"}
          alt="menu-button"
        />
      </div>
    </div>
  );
};

export default RowItems;
