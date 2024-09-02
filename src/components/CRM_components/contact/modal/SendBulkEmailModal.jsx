import React, { useState } from "react";
import MiddleModalContainer from "../../common/MiddleModalContainer";
import Avatar from "../../../../assets/images/Ellipse 962.png";
import CustomRadioButton from "../../common/CustomRadioButton/CustomRadioButton";
import CustomDropdown from "../../common/CustomDropDown";
import Button from "../../common/Button/Button";
import {
  MdEmail,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SendBulkEmailModal = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const [sendBulkEmailForm, setSendBulkEmailForm] = useState({
    composeOption: "",
    templateChoice: "",
  });

  const templateOptions = [
    { value: "coTargeting", label: "Co - Targeting" },
    { value: "coldEmail", label: "Cold Email" },
    { value: "checkIn", label: "Check In" },
  ];

  const emailList = [
    { name: "George Udonte", email: "george@gmail.com" },
    { name: "Sam Jason", email: "samjason@gmail.com" },
    { name: "John Gammage", email: "johngammage@gmail.com" },
  ];

  const showPreviousEmail = () => {
    setCurrentEmailIndex((prevEmailIndex) =>
      prevEmailIndex === 0 ? emailList.length - 1 : prevEmailIndex - 1
    );
  };

  const showNextEmail = () => {
    setCurrentEmailIndex((prevEmailIndex) =>
      prevEmailIndex === emailList.length - 1 ? 0 : prevEmailIndex + 1
    );
  };

  const displayContact = emailList[currentEmailIndex];

  const handleDropdownSelect = (name, selectedOption) => {
    setSendBulkEmailForm((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  const handleRadioChange = (name, value) => {
    setSendBulkEmailForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const output = () => {
    if (pageIndex === 0) {
      return (
        <div className="w-[500px]">
          <div className="bg-[#EAF1F3] px-8 py-2">
            <p>Sending to all 4 contacts in this group</p>
            <span className="text-xs">Configure the email below</span>
          </div>
          <div className="px-8 py-2 flex flex-col gap-6 justify-start">
            <div className="flex flex-col justify-start">
              <p className="text-xs">From</p>
              <div className=" bg-white flex items-center gap-2 text-xs py-2">
                <img src={Avatar} alt="profile" width={25} />
                <p className="text-xs flex items-center">
                  Patrick Doe <span className="text-gray-400"> (Me)</span>
                </p>
                <p className="text-xs cursor-pointer text-gurugeeks-green-700 flex items-center ml-2">
                  Assign to team
                </p>
              </div>
            </div>
            {/* compose type */}
            <div className="flex items-center gap-4">
              <CustomRadioButton
                label={"Use Template"}
                name="composeOption"
                value="useTemplate"
                checked={sendBulkEmailForm.composeOption === "useTemplate"}
                onChange={() =>
                  handleRadioChange("composeOption", "useTemplate")
                }
              />
              <CustomRadioButton
                label={"Compose New"}
                name="composeOption"
                value="composeNew"
                checked={sendBulkEmailForm.composeOption === "composeNew"}
                onChange={() =>
                  handleRadioChange("composeOption", "composeNew")
                }
              />
            </div>
            <div className="w-full">
              <CustomDropdown
                label="Template"
                onSelect={(selectedOption) => {
                  handleDropdownSelect("templateChoice", selectedOption);
                }}
                options={templateOptions}
              />
            </div>
          </div>
        </div>
      );
    } else if (pageIndex === 1) {
      return (
        <div className="w-[500px]">
          {/* back button */}
          <div className="py-2 px-6 border-b-2 border-gray-100 flex items-center">
            <MdKeyboardArrowLeft size={25} />
            <p
              className="cursor-pointer font-bold text-sm"
              onClick={() => {
                setPageIndex(0);
              }}
            >
              Back
            </p>
          </div>

          {/* main container */}
          <div className=" text-gray-700">
            {/* number of contacts */}
            <div className="flex items-center justify-between py-2 px-8">
              <p>Co-Founder Targeting</p>
              <div className="flex items-center text-xs gap-4">
                <p>4 Contacts</p>
                <div className="flex items-center gap-2">
                  <div
                    className="text-gray-400 cursor-pointer"
                    onClick={showPreviousEmail}
                  >
                    <BsArrowLeft />
                  </div>
                  <div
                    className="text-gray-700 cursor-pointer"
                    onClick={showNextEmail}
                  >
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs bg-gray-100">
              {/* to and from email container */}
              <div className="flex flex-col gap-1 justify-start bg-gray-100  py-2 px-8 my-4">
                {/* to */}
                <div className="flex items-center ">
                  <p className="text-sm w-14">To: </p>
                  <div className="flex items-center">
                    <div className="mr-1">
                      <MdEmail />
                    </div>
                    <div className="flex items-center">
                      <p className="font-bold mr-1">{displayContact.name}</p>
                      <p>{displayContact.email}</p>
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-gurugeeks-green-700 font-semibold">
                    <p className="cursor-pointer">CC</p>
                    <p className="cursor-pointer">BCC</p>
                  </div>
                </div>
                {/* from */}
                <div className="flex items-center ">
                  <p className="text-sm w-14">From: </p>
                  <div className="flex items-center">
                    <div className="mr-1">
                      <MdEmail />
                    </div>
                    <p className="font-bold mr-1">Patrick Doe</p>
                    <p>pdoe@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs py-2 px-8">
              <div>
                <p className="font-bold mb-2">
                  Get more out of your Business Operations with Gurugeeks
                  Technologies
                </p>
                <div>
                  <span className="italic block pb-2">Hi Samuel</span> I hope
                  you're doing well. I wanted to introduce Gurugeeks
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
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <MiddleModalContainer
        title={
          pageIndex === 0 ? (
            "Send Bulk Email"
          ) : (
            <div className="flex items-center">
              Send Bulk Email <MdKeyboardArrowRight size={25} /> Preview
            </div>
          )
        }
      >
        <div>
          <div>{output()}</div>

          <div className="py-4 px-8">
            {pageIndex === 0 ? (
              <div className="flex items-center justify-end gap-4 mt-8">
                <Button color={"secondary"} size={"lg"}>
                  Cancel
                </Button>
                <Button
                  onClick={() => setPageIndex(1)}
                  className={"secondary"}
                  size={"lg"}
                  color={"red"}
                >
                  Preview
                  <MdKeyboardArrowRight size={25} />
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button color={"secondary"} size={"lg"}>
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  className={"secondary"}
                  size={"lg"}
                  type={"submit"}
                >
                  Send email to 4 contacts
                </Button>
              </div>
            )}
          </div>
        </div>
      </MiddleModalContainer>
    </div>
  );
};

export default SendBulkEmailModal;
