import React, { useState } from "react";
import {
  FaCaretDown,
  FaCaretLeft,
  FaCaretRight,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaTrashAlt,
} from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const LeadHistory = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDown = () => setIsDropDownOpen(!isDropDownOpen);
  return (
    <div className="w-full">
      <div className="w-full">
        {/* MONTH */}
        <p className="mb-8">JUNE 2023</p>
        {/* MAIL CONTAINER*/}
        <div className="flex items-start">
          {/* ENVELOPE */}
          <div className="bg-indigo-500 py-1 px-2 rounded">
            <FaEnvelope color="#FFFFFF" />
          </div>
          {/* BORDER-LINE */}
          <div className="flex flex-col items-center justify-center h-5">
            <div className="border-b-2 border-b-gray-200 w-[50px]"></div>
          </div>
          {/* MAIN MESSAGE */}
          <div className="flex flex-col justify-start  border-2 border-gray-200 rounded w-full">
            {/* header */}
            <div className="flex items-center justify-between border-b-2 backdrop:border-b-gray-200 py-1 px-2">
              <div className="flex items-center gap-2 text-gray-600">
                <FaEnvelopeOpenText />
                <p className="font-bold">
                  Get more out of your operations with Exceed
                </p>
              </div>
              <div className="text-gray-400">
                <p>Patrick</p>
              </div>
            </div>
            {/* body */}
            <div>
              <div
                className={`flex items-center ${
                  isDropDownOpen
                    ? "bg-gray-100 transition-all duration-500 ease-in"
                    : "bg-white transition-all duration-500 ease-out"
                } px-2 rounded-md`}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => toggleDropDown()}
                >
                  {isDropDownOpen ? (
                    <FaCaretDown size={20} />
                  ) : (
                    <FaCaretRight size={20} />
                  )}
                </div>

                <div className="text-sm flex align-items justify-between text-gray-700 w-full bg-gray-100 transition-all duration-500 ease-in">
                  {/* to and from email container */}
                  {isDropDownOpen ? (
                    <div className="flex flex-col gap-1 justify-start p-2 my-1">
                      {/* to */}
                      <div className="flex items-center gap-2">
                        <p className="text-sm w-14">From: </p>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <p className="font-bold mr-1">Patrick Doe [Me]</p>
                            <p>pdoe@gurugeeks.com</p>
                          </div>
                        </div>
                        <div className="text-gray-400">
                          <p className="cursor-pointer ml-8">Sent</p>
                        </div>
                      </div>
                      {/* from */}
                      <div className="flex items-center ">
                        <p className="text-sm w-14">To: </p>
                        <div className="flex items-center">
                          <p>tundebillions@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center pl-2 py-2  gap-2 w-full bg-white transition-all duration-500 ease-in px-2 rounded-md">
                      <p className="italic text-gray-500">Patrick Doe [Me]</p>
                      <div className="text-sm text-gray-700 h-5 flex-1 w-[400px] overflow-hidden whitespace-nowrap text-ellipsis ">
                        I hope you're doing well. I wanted to introduce
                        Gurugeeks Technologies and our innovative software
                        solutions that can transform your business operations.{" "}
                        <br /> We specialize in tailored software solutions that
                        optimize workflows, enhance collaboration, provide
                        data-driven insights, and ensure scalability. Our track
                        record of delivering high-quality products speaks for
                        itself. <br />
                        <p className=" ml-auto text-gray-500">13mins ago</p>
                      </div>
                    </div>
                  )}
                </div>
                {/* trash icon */}
                <div className="ml-auto flex items-center justify-center content-center cursor-pointer">
                  {isDropDownOpen && <FaTrashAlt size={20} color="gray" />}
                </div>
              </div>

              {isDropDownOpen && (
                <div className=" py-8 text-sm text-gray-700">
                  I hope you're doing well. I wanted to introduce Gurugeeks
                  Technologies and our innovative software solutions that can
                  transform your business operations. <br /> We specialize in
                  tailored software solutions that optimize workflows, enhance
                  collaboration, provide data-driven insights, and ensure
                  scalability. Our track record of delivering high-quality
                  products speaks for itself.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadHistory;
