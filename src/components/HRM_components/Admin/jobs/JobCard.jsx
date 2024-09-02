import React from "react";
import { FaChevronRight, FaShareFromSquare } from "react-icons/fa6";
import { TbReceipt } from "react-icons/tb";
import { Link } from "react-router-dom";
import { encryptId } from "../../../../utils/helperFunctions/crypto.utils";

const JobCard = ({
  handleOpenJobLinkModal,
  title,
  is_active,
  departments,
  contract_type,
  location,
  applicant_number,
  jobId,
}) => {
  return (
    <div
      className={`w-[240px] max-h-[380px] py-3 px-2 bg-white border-t-4 ${
        is_active ? "border-[#16C098]" : " border-gray-200"
      } shadow-lg rounded`}
    >
      <div className="flex items-center justify-between pb-6 px-2">
        <div>
          <p className="font-bold text-gurugeeks-text text-sm capitalize">
            {departments}
          </p>
          <p className="font-bold text-gurugeeks-text text-xl w-[95%] capitalize truncate">
            {title}
          </p>
        </div>
        <p
          onClick={() => {
            handleOpenJobLinkModal();
          }}
          className="text-[25px]  cursor-pointer text-gurugeeks-grayLight-300  hover:text-gurugeeks-text"
        >
          <FaShareFromSquare />
        </p>
      </div>
      <div>
        <p className=" text-gurugeeks-text font-bold px-2 ">Candidates:</p>
        <div className="h-20 my-2 rounded-md border justify-between px-4 items-center bg-[#c0d2e948]">
          <div className="flex items-center justify-between gap-x-5 my-5 font-bold">
            {/* <div className="h-10 w-1 rounded bg-gurugeeks-grayLight-300"></div> */}
            <div>
              <p className="">Total:</p>
              {/* <p className="text-2xl">{total_candidates}</p> */}
            </div>
            <div className="flex items-center gap-x-2 font-bold">
              <div className={`h-10 w-1 rounded bg-green-500`}></div>
            </div>
            <div>
              {/* <p className=" text-gurugeeks-grayLight-300">New</p> */}
              <p className="text-2xl">{applicant_number}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-x-3 items-center px-2 pt-[15px] pb-3 border-b">
        <p className="font-bold text-gurugeeks-text capitalize truncate">
          {location}
        </p>
        <div className="h-[6px] w-[6px] bg-gurugeeks-text-2 rounded-full"></div>
        <p className="font-bold text-gurugeeks-text capitalize">
          {contract_type}
        </p>
      </div>

      <div className="flex justify-between items-center py-4 px-2 text-gurugeeks-grayLight-300 ">
        <div className="flex items-center ">
          <TbReceipt />
          <p className="font-bold ">Draft</p>
        </div>
        <Link to={`${"/HRM/jobs"}/${encryptId(jobId)}`}>
          <div className="  flex items-center cursor-pointer  hover:text-gurugeeks-text">
            <p className="font-bold">See Details</p>
            <FaChevronRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
