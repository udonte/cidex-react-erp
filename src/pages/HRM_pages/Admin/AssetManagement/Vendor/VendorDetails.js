import React, { useState } from "react";
import {
  BiDotsVerticalRounded,
  BiEditAlt,
  BiPlus,
  BiSearch,
} from "react-icons/bi";
import { MdCall, MdEmail } from "react-icons/md";
import { HiChatAlt2 } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";
import { TabbedPages } from "../../../../../components/HRM_components";

const VendorDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabHeader = ["History", "Mails", "Calls", "Chats", "Documents"];

  const changeTab = (index) => {
    setTabIndex(index);
  };

  const pageOutput = () => {
    switch (tabIndex) {
      case 0:
        return (
          <div className="px-6 py-4 flex items-center justify-center">
            <div className="flex-flex-col justify-center items-center text-center">
              <p className="text-gray-600">History</p>
              <span className="text-gray-400 text-sm">
                History between agents and this vendor will appear here
              </span>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="px-6 py-4 flex-flex-col justify-center items-center text-center">
            <p className="text-gray-600">Mails</p>
            <span className="text-gray-400 text-sm">
              Mail between agents and this vendor will appear here
            </span>
          </div>
        );
      case 2:
        return (
          <div className="px-6 py-4 flex-flex-col justify-center items-center text-center">
            <p className="text-gray-600">Calls</p>
            <span className="text-gray-400 text-sm">
              Calls between agents and this vendor will appear here
            </span>
          </div>
        );
      case 3:
        return (
          <div className="px-6 py-4 flex-flex-col justify-center items-center text-center">
            <p className="text-gray-600">Chats</p>
            <span className="text-gray-400 text-sm">
              Chats between agents and this vendor will appear here
            </span>
          </div>
        );
      case 4:
        return (
          <div className="px-6 py-4 flex-flex-col justify-center items-center text-center">
            <p className="text-gray-600">Documents</p>
            <span className="text-gray-400 text-sm">
              Documents between agents and this vendor will appear here
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between bg-white py-6 px-6">
        <h1 className="font-bold text-[1.3rem]">Vendors</h1>
      </div>

      <div className="w-full flex items-start gap-6 p-6">
        <div className="w-4/6 border-2 border-gray-300 px-2 py-1 h-full rounded-md bg-white">
          <TabbedPages
            tabIndex={tabIndex}
            tabsHeader={tabHeader}
            setTabIndex={changeTab}
          >
            <>{pageOutput()}</>
          </TabbedPages>
        </div>

        {/* vendor details */}
        <div className="w-2/6 border-2 border-gray-300 px-3 py-4 rounded-md bg-white flex flex-col items-center justify-center  gap-4">
          <div className="flex flex-col justify-center items-center gap-4 border-b-[1px] border-b-gray-200 w-full py-4">
            <h2 className="font-bold text-center">Lenovo</h2>
            <div className="flex items-center justify-center bg-gray-200 h-[100px] rounded-full w-[100px]">
              <img src="" alt="" />
            </div>
            <div className="flex items-center gap-6 ">
              <button className="bg-gray-100 hover:bg-gray-200 py-2 px-2 rounded-[50%]">
                <BiEditAlt size={25} />
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 py-2 px-2 rounded-[50%]">
                <MdCall size={25} />
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 py-2 px-2 rounded-[50%]">
                <MdEmail size={25} />
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 py-2 px-2 rounded-[50%]">
                <BiDotsVerticalRounded size={25} />
              </button>
            </div>
          </div>

          {/* about */}
          <div className="w-full  ">
            <p className=" bg-gray-100 p-2 mb-1 text-base rounded-md">ABOUT</p>
            <div className="flex flex-col gap-4 p-2 text-sm ">
              <div className="flex items-center justify-between border-b-[1px] border-b-gray-200 py-1">
                <p>Email Address</p>
                <p>Construction</p>
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-b-gray-200 py-1">
                <p>Phone Number</p>
                <p>40</p>
              </div>
            </div>
          </div>

          <div className="w-full  ">
            <p className=" bg-gray-100 p-2 mb-1 text-base rounded-md">
              LOCATION
            </p>
            <div className="flex flex-col gap-4 p-2 text-sm">
              <div className="flex items-center justify-between border-b-[1px] border-b-gray-200 py-1">
                <p>23, Unity Rd, Ikeja, Lagos</p>
              </div>
            </div>
          </div>

          {/* PERSONNEL */}
          <div className="w-full border-[1px] border-gray-200 rounded-md ">
            <div className="flex items-center justify-between bg-gray-100 px-2 ">
              <div className="flex items-center gap-2">
                <p className=" mb-1 text-base rounded-md ">PERSONNEL</p>
                <p className="text-gray-400 p-2 mb-1 text-base rounded-md ">
                  1
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button>
                  <BiSearch />
                </button>
                <button>
                  <BiPlus />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-2 py-4 text-sm">
              <div className="flex items-center justify-between border-b-[1px] border-b-gray-200 py-1">
                <p>Alfred Udonte</p>
                <div className="flex items-center gap-2">
                  <button>
                    <MdEmail />
                  </button>
                  <button>
                    <MdCall />
                  </button>
                  <button>
                    <HiChatAlt2 />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full  ">
            <p className=" bg-gray-100 p-2 mb-1 text-base rounded-md">
              DESCRIPTION
            </p>
            <div className="flex flex-col gap-4 p-2 text-sm">
              <div className="flex items-center py-1 gap-2">
                <AiFillPlusCircle />
                <p className="italic text-gray-400">
                  Add description, URL, or address
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
