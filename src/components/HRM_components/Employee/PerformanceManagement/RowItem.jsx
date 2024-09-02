import React from "react";
import Checkbox from "../../_common/Checkbox";
import { FaLink } from "react-icons/fa";

const RowItem = ({ progress }) => {
  return (
    <div className="flex  my-4 pr-12  p-6  items-start bg-white">
      <div className="mx-6">
        <Checkbox />
      </div>
      <div className=" flex items-center justify-between w-full">
        <div className="w-full space-y-2">
          <p className=" font-semibold text-lg">
            Introduction to Micro-Interaction and Prototyping
          </p>
          <p className=" text-sm">
            To get student introduced to the fundamentals of micro-interaction
            and basic prototyping and concepts.
          </p>

          <div className="flex  items-center gap-x-3">
            <p className=" font-bold">Udemy</p>
            <FaLink className=" text-gurugeeks-orange-600" />
            <p className=" underline text-gurugeeks-orange-600">Open Link</p>
          </div>
          <p className="text-semibold text-gurugeeks-dark-500">
            6 weeks •{" "}
            <span className="text-sm text-black">Product Department</span>
          </p>
        </div>

        <div>
          {progress && (
            <div className="flex items-center flex-col ">
              {/* <StatusPil text={progress.text} status={progress.status} /> */}
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
    </div>
  );
};

export default RowItem;
