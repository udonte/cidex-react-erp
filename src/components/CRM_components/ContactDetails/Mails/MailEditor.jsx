import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import {
  MdEmail,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";

const MailEditor = () => {
  return (
    <div>
      {" "}
      <div className="flex items-start">
        {/* message header */}
        <div className="bg-[#9399CC] p-2 rounded-lg h-10">
          {" "}
          <MdEmail size={25} color="#fff" />{" "}
        </div>
        <div className=" flex justify-center items-center h-12 w-8">
          <span className="border-[1px] border-gray-200  w-full mb-4"></span>
        </div>
        <div className="w-full rounded-lg border-[1px]">
          <div className=" h-10 w-full rounded-lg p-2">no subject</div>
          <div>
            <div className="flex">
              <div
                className="cursor-pointer"
                //   onClick={() => toggleDropDown()}
              >
                {true ? (
                  <MdKeyboardArrowDown size={20} />
                ) : (
                  <MdKeyboardArrowRight size={20} />
                )}
              </div>
              <div>
                <div className="flex">
                  <p>From</p>
                  <p>Patrick Doe [Me]</p>
                  <p>pdoe@gurugeeks.com</p>
                </div>
                <div className="flex">
                  <p>From</p>
                  <p>Patrick Doe [Me]</p>
                  <p>pdoe@gurugeeks.com</p>
                </div>
                <div className="ml-auto flex items-center justify-center content-center cursor-pointer">
                  {true && <FaTrashAlt size={20} color="gray" />}
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MailEditor;
