import React from "react";
import { FaCheck } from "react-icons/fa";

const Timeline = () => {
  return (
    <div>
      <div className="mb-8">
        <p>JULY, 2023</p>
      </div>
      <div className="flex gap-x-6 items-start ">
        <div className="flex flex-col justify-center items-center">
          <div className="h-[12px] w-[12px] border-2 rounded-full border-gurugeeks-green-600"></div>
          <div className="h-[50px] w-[3px] my-1 bg-slate-300 rounded-lg"></div>
        </div>
        <p className="text-sm font-bold ">June 30</p>
        <div className="flex items-start gap-x-2">
          <div className="h-[16px] w-[16px] flex items-center justify-center bg-black rounded-full">
            <FaCheck className="text-white text-xs" />
          </div>
          <div>
            <p className=" leading-3">Sent a Proposal</p>
            <p className="my-3 text-sm font-semibold text-gurugeeks-dark-500">
              {" "}
              15:26
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-6 items-start ">
        <div className="flex flex-col justify-center items-center">
          <div className="h-[12px] w-[12px] border-2 rounded-full border-gurugeeks-green-600"></div>
          <div className="h-[50px] w-[3px] my-1 bg-slate-300 rounded-lg"></div>
        </div>
        <p className="text-sm font-bold ">June 30</p>
        <div className="flex items-start gap-x-2">
          <div className="h-[16px] w-[16px] flex items-center justify-center bg-black rounded-full">
            <FaCheck className="text-white text-xs" />
          </div>
          <div>
            <p className=" leading-3"> DOCUMENT SENT: AGREEMENT DOC.pdf</p>
            <p className="my-3 text-sm font-semibold text-gurugeeks-dark-500">
              {" "}
              15:26
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-6 items-start ">
        <div className="flex flex-col justify-center items-center">
          <div className="h-[12px] w-[12px] border-2 rounded-full border-gurugeeks-green-600"></div>
          <div className="h-[50px] w-[3px] my-1 bg-slate-300 rounded-lg"></div>
        </div>
        <p className="text-sm font-bold ">June 30</p>
        <div className="flex items-start gap-x-2">
          <div className="h-[16px] w-[16px] flex items-center justify-center bg-black rounded-full">
            <FaCheck className="text-white text-xs" />
          </div>
          <div>
            <p className=" leading-3">Deal Won</p>
            <p className="my-3 text-sm font-semibold text-gurugeeks-dark-500">
              {" "}
              15:26
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
