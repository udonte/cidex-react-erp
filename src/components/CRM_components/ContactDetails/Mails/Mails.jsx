import React, { useState } from "react";
import { BiMailSend } from "react-icons/bi";
import {
  MdDelete,
  MdEmail,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdOutlineArrowDownward,
  MdOutlineArrowRight,
  MdOutlineMailOutline,
} from "react-icons/md";
import {
  FaArrowDown,
  FaArrowRight,
  FaSortDown,
  FaTrashAlt,
} from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";

// emails.json

const emailsData = {
  months: [
    {
      name: "JUNE 2023",
      emails: [
        {
          subject:
            "Get more out of your Business Operations with Gurugeeks Technologies",
          clients: [
            {
              senderName: "Patrick Doe",
              senderEmail: "pdoe@gurugeeks.com",
              recipient: "tundebillions@gmail.com",
              message:
                "I hope you're doing well. I wanted to introduce Gurugeeks Technologies and our innovative software solutions that can transform your business operations. We specialize in tailored software solutions that optimize workflows, enhance collaboration, provide data-driven insights, and ensure scalability. Our track record of delivering high-quality products speaks for itself. I would love the opportunity to discuss your specific needs. Let's schedule a call or arrange a personalized demo at your convenience. Feel free to reach out to me directly at pdoe@gurugeeks.com.",
              timestamp: "13mins ago",
            },
            // Add more clients as needed
          ],
        },
        {
          subject: "What do you think about the proposal",
          clients: [
            {
              senderName: "Patrick Doe",
              senderEmail: "pdoe@gurugeeks.com",
              recipient: "tundebillions@gmail.com",
              message:
                "I hope you're doing well. I wanted to introduce Gurugeeks Technologies and our innovative software solutions that can transform your business operations. We specialize in tailored software solutions that optimize workflows, enhance collaboration, provide data-driven insights, and ensure scalability. Our track record of delivering high-quality products speaks for itself. I would love the opportunity to discuss your specific needs. Let's schedule a call or arrange a personalized demo at your convenience. Feel free to reach out to me directly at pdoe@gurugeeks.com.",

              timestamp: "13mins ago",
            },
            {
              senderName: "Patrick Doe",
              senderEmail: "pdoe@gurugeeks.com",
              recipient: "tundebillions@gmail.com",
              message:
                "I hope you're doing well. I wanted to introduce Gurugeeks Technologies and our innovative software solutions that can transform your business operations. We specialize in tailored software solutions that optimize workflows, enhance collaboration, provide data-driven insights, and ensure scalability. Our track record of delivering high-quality products speaks for itself. I would love the opportunity to discuss your specific needs. Let's schedule a call or arrange a personalized demo at your convenience. Feel free to reach out to me directly at pdoe@gurugeeks.com.",

              timestamp: "13mins ago",
            },
            {
              senderName: "Patrick Doe",
              senderEmail: "pdoe@gurugeeks.com",
              recipient: "tundebillions@gmail.com",
              message:
                "I hope you're doing well. I wanted to introduce Gurugeeks Technologies and our innovative software solutions that can transform your business operations. We specialize in tailored software solutions that optimize workflows, enhance collaboration, provide data-driven insights, and ensure scalability. Our track record of delivering high-quality products speaks for itself. I would love the opportunity to discuss your specific needs. Let's schedule a call or arrange a personalized demo at your convenience. Feel free to reach out to me directly at pdoe@gurugeeks.com.",

              timestamp: "13mins ago",
            },
            // Add more clients as needed
          ],
        },
        // Add more subjects as needed
      ],
    },
    {
      name: "JULY 2023",
      emails: [
        {
          subject: "What do you think about the proposal",
          clients: [
            {
              senderName: "Patrick Doe",
              senderEmail: "pdoe@gurugeeks.com",
              recipient: "tundebillions@gmail.com",
              message:
                "I hope you're doing well. I wanted to introduce Gurugeeks Technologies and our innovative software solutions that can transform your business operations. We specialize in tailored software solutions that optimize workflows, enhance collaboration, provide data-driven insights, and ensure scalability. Our track record of delivering high-quality products speaks for itself. I would love the opportunity to discuss your specific needs. Let's schedule a call or arrange a personalized demo at your convenience. Feel free to reach out to me directly at pdoe@gurugeeks.com.",

              timestamp: "13mins ago",
            },
            // Add more clients as needed
          ],
        },
        // Add more subjects as needed
      ],
    },
    // Add more months as needed
  ],
};

const firstName = emailsData.months[0].emails[0].clients[0].senderName;

const Mails = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDown = () => setIsDropDownOpen(!isDropDownOpen);
  return (
    <div>
      <div className="flex flex-col justify-start">
        {/* date heading */}
        <div className="mb-8">
          <p>{emailsData.months[0].name}</p>
        </div>
        <div>
          {/* message box */}
          <div className="flex items-start">
            {/* message header */}
            <div className="bg-[#9399CC] p-2 rounded-lg h-10">
              {" "}
              <MdEmail size={25} color="#fff" />{" "}
            </div>
            <div className=" flex justify-center items-center h-10 w-8">
              <span className="border-[1px] border-gray-200  w-full mb-4"></span>
            </div>
            <div className="border-[1px] border-gray-200 py-2 px-4 flex-1 rounded-md w-full">
              <div className="flex items-center gap-2 text-gray-600">
                <div>
                  <BiMailSend size={25} />
                </div>
                <div className="font-bold my-2">{firstName}</div>
                <div className="flex items-center ml-auto gap-2">
                  <p className="text-gray-400">Patrick</p>
                  <div></div>
                </div>
              </div>
              {/* message details */}
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
                    <MdKeyboardArrowDown size={20} />
                  ) : (
                    <MdKeyboardArrowRight size={20} />
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
                        itself. <br /> I would love the opportunity to discuss
                        your specific needs. Let's{" "}
                        <span className="text-gurugeeks-green-700 cursor-pointer">
                          schedule a call
                        </span>{" "}
                        or{" "}
                        <span className="text-gurugeeks-green-700 cursor-pointer">
                          arrange a personalized demo
                        </span>{" "}
                        at your convenience. Feel free to reach out to me
                        directly at
                        <span className="text-gurugeeks-green-700 cursor-pointer">
                          pdoe@gurugeeks.com
                        </span>{" "}
                        .{" "}
                        <div className="leading-4 mt-4">
                          Best regards, <br /> Patrick Doe, <br /> Sales
                          Manager, <br /> Gurugeeks Technologies.
                        </div>
                      </div>
                      <p className=" ml-auto text-gray-500">13mins ago</p>
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
                  products speaks for itself. <br /> I would love the
                  opportunity to discuss your specific needs. Let's{" "}
                  <span className="text-gurugeeks-green-700 cursor-pointer">
                    schedule a call
                  </span>{" "}
                  or{" "}
                  <span className="text-gurugeeks-green-700 cursor-pointer">
                    arrange a personalized demo
                  </span>{" "}
                  at your convenience. Feel free to reach out to me directly at
                  <span className="text-gurugeeks-green-700 cursor-pointer">
                    pdoe@gurugeeks.com
                  </span>{" "}
                  .{" "}
                  <div className="leading-4 mt-4">
                    Best regards, <br /> Patrick Doe, <br /> Sales Manager,{" "}
                    <br /> Gurugeeks Technologies.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mails;
