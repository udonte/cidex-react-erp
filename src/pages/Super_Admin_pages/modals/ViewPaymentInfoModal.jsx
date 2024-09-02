import React, { useState } from "react";

import { BiSearch, BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import SideModalContainer from "../../../components/SuperAdmin_components/SideModalcontainer/SideModalContainer";
import { StatusPill } from "../../../components/SuperAdmin_components";

const ViewPaymentInfoModal = ({ isOpen }) => {
  return (
    <div>
      <SideModalContainer title={""} width="sm" isOpen={isOpen}>
        <div className="overflow-y-auto h-screen">
          {/* header */}
          <div className="flex items-center justify-start flex-col border-b-2 border-gray-200 py-4 ">
            <div className="flex items-center justify-center rounded-[100%] bg-gurugeeks-orange-700 p-4 w-[50px] h-[50px] py-4">
              <p className="text-white text-xl">BI</p>
            </div>
            <p className="pt-2 font-bold">BlackRock Inc.</p>
            <p className="text-sm text-gray-500">IT Services</p>
            <div className="py-4">
              <StatusPill status={"active"} text={"Active"} />
            </div>
          </div>
          {/* contact */}
          <div className="flex items-start justify-start flex-col border-b-2 border-gray-200 py-4 px-8 text-gray-500">
            <p className="font-bold">Contact</p>
            <div className="flex items-center gap-4">
              <p className="w-[200px] text-gray-400 font-light">
                Phone Number:
              </p>
              <p className="w-[200px]">+234 987 650 043</p>
            </div>
          </div>
          {/* payment */}
          <div className="flex items-start justify-start flex-col border-b-2 border-gray-200 py-4 px-8 text-gray-500">
            <p className="font-bold">Payment</p>
            <div className="flex items-center gap-4">
              <p className="w-[200px] text-gray-400 font-light ">Method:</p>
              <p className="w-[200px]">Debit Card</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="w-[200px] text-gray-400 font-light">Amount:</p>
              <p className="w-[200px]">#10000</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="w-[200px] text-gray-400 font-light">Entry Date:</p>
              <p className="w-[200px]">01-08-2023</p>
            </div>
          </div>
          {/* subscription */}
          <div className="flex items-start justify-start flex-col border-b-2 border-gray-200 py-4 px-8 text-gray-500">
            <p className="font-bold">Subscription</p>
            <div className="text-center flex items-center justify-center">
              <p className="bg-[#BCA735] w-fit px-2 text-white rounded-xl text-center">
                Gold
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="w-[200px] text-gray-400 font-light">Start Date:</p>
              <p className="w-[200px]">01-08-2023</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="w-[200px] text-gray-400 font-light">End Date:</p>
              <p className="w-[200px]">30-08-2023</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="w-[200px] text-gray-400 font-light">Days Left:</p>
              <p className="w-[200px]">
                <span className="bg-green-200 w-fit px-2 py-1 text-green-600 rounded-xl text-center ">
                  28
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="w-[200px] text-gray-400 font-light">Frequency:</p>
              <p className="w-[200px]">Monthly</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="w-[200px] text-gray-400 font-light">
                Payment Method:
              </p>
              <p className="w-[200px]">Debit Card</p>
            </div>
          </div>
          {/* activity log */}
          <div className="py-4 px-8 w-full">
            <div className="border-2 border-gray-200 rounded-md px-4 py-2 w-full h-[100px] overflow-y-auto">
              <p className="font-bold text-gray-500 mb-4">Activity Log</p>
              <div className="flex flex-col justify-start w-full">
                <div className="flex items-center justify-between">
                  <p className=" text-gray-400 font-light">23-06-2023</p>
                  <p className="">Payment made</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className=" text-gray-400 font-light">23-06-2023</p>
                  <p className="">subscription changes</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className=" text-gray-400 font-light">23-06-2023</p>
                  <p className="">Payment made</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className=" text-gray-400 font-light">23-06-2023</p>
                  <p className="">Payment made</p>
                </div>
                {/* Add more activity log entries as needed */}
              </div>
            </div>
          </div>
        </div>
      </SideModalContainer>
    </div>
  );
};

export default ViewPaymentInfoModal;
