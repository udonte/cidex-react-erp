import React, { useState } from "react";
import {
  BreadCrumbs,
  Button,
  TabbedPages,
} from "../../../../components/CRM_components";
import {
  BiChat,
  BiDotsVerticalRounded,
  BiEditAlt,
  BiEnvelope,
  BiPhoneCall,
  BiPlus,
  BiSearch,
  BiTime,
} from "react-icons/bi";
import { MdCall, MdEmail } from "react-icons/md";
import { HiChatAlt2 } from "react-icons/hi";
import { CustomInput, NameTag } from "../../../../components/HRM_components";
import CustomDropDown from "../../../../components/CRM_components/common/CustomDropDown";
import LeadHistory from "./components/LeadHistory";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../constants/modals.constant";
import AssignTask from "../../../../components/CRM_components/Leads/modals/AssignTask";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";

const LeadDetail = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectModalsSlice);
  const breadcrumbItems = ["Lead Management", "Leads", "Lead Detail"];
  const [showConfirmCustomer, setShowConfirmCustomer] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const tabHeader = [
    "History",
    "SMS",
    "Mails",
    "Calls",
    "Tasks",
    "Deals",
    "Notes",
  ];

  const handleLeadSourceSelect = (selectedOption) => {
    if (selectedOption === "customer") {
      setShowConfirmCustomer(true);
      console.log(selectedOption);
    }
  };

  const changeTab = (index) => {
    setTabIndex(index);
  };

  // tabs
  const pageOutput = () => {
    switch (tabIndex) {
      case 0:
        return (
          <div className="px-2 py-4">
            <LeadHistory />
          </div>
        );
      case 1:
        return (
          <div className="px-6 py-4 flex items-center justify-center">
            <div className="flex-flex-col justify-center items-center text-center">
              <p className="text-gray-600">SMS</p>
              <span className="text-gray-400 text-sm">
                SMS between manager and lead will appear here
              </span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="px-6 py-4 flex-flex-col justify-center items-center text-center">
            <p className="text-gray-600">Mails</p>
            <span className="text-gray-400 text-sm">
              Mail between manager and lead will appear here
            </span>
          </div>
        );
      case 3:
        return (
          <div className="px-6 py-4 flex-flex-col justify-center items-center text-center">
            <p className="text-gray-600">Calls</p>
            <span className="text-gray-400 text-sm">
              Calls between manager and lead will appear here
            </span>
          </div>
        );
      case 4:
        return (
          <div className="px-6 py-4 flex-flex-col justify-center items-center text-center">
            <p className="text-gray-600">Tasks</p>
            <span className="text-gray-400 text-sm">
              Tasks between manager and lead will appear here
            </span>
          </div>
        );
      case 5:
        return (
          <div className="px-6 py-4 flex-flex-col justify-center items-center text-center">
            <p className="text-gray-600">Deals</p>
            <span className="text-gray-400 text-sm">
              Deals between manager and lead will appear here
            </span>
          </div>
        );
      case 6:
        return (
          <div className="px-6 py-4 flex-flex-col justify-center items-center text-center">
            <p className="text-gray-600">Notes</p>
            <span className="text-gray-400 text-sm">
              Notes between manager and lead will appear here
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}
      <div className="">
        <div className="w-full flex items-start gap-2 p-6">
          <div className="w-4/6">
            {/* CONTACT OPTIONS */}
            <div className="flex flex-col justify-start items-center">
              <div className="flex items-center justify-center gap-2 mb-8 ">
                <Button
                  icon={<BiTime />}
                  onClick={() => {
                    dispatch(openModalByName(MODALS.LEADS.ASSIGN_TASK));
                  }}
                >
                  Tasks
                </Button>
                <Button icon={<BiEnvelope />}>Email</Button>
                <Button icon={<BiChat />}>Chat</Button>
                <Button icon={<BiPhoneCall />}>Call</Button>
              </div>

              <div className="flex items-center justify-center gap-2 mb-8 w-[200px]">
                <div className="w-[100px]">
                  <CustomDropDown size="xs" placeHolder="All Users" label="" />
                </div>
                <div className="w-[100px]">
                  <CustomDropDown size="xs" placeHolder="All Time" label="" />
                </div>
              </div>
            </div>
            <div className=" border-2 border-gray-300 px-2 py-1 h-full rounded-md bg-white">
              {/* SEARCH BOX */}
              <div className="w-full mb-4">
                <CustomInput
                  type="text"
                  name=""
                  value={""}
                  handleInputChange={() => {
                    console.log("search input");
                  }}
                  placeholder={"Search activities"}
                />
              </div>
              <TabbedPages
                tabIndex={tabIndex}
                tabsHeader={tabHeader}
                setTabIndex={changeTab}
              >
                <>{pageOutput()}</>
              </TabbedPages>
            </div>
          </div>

          {/* Lead details */}
          <div className="w-2/6 border-2 border-gray-300 px-3 py-4 rounded-md bg-white flex flex-col items-center justify-center  gap-4 overflow-y-scroll">
            <div className="flex flex-col justify-center items-center gap-4 border-b-[1px] border-b-gray-200 w-full py-4">
              <h2 className="font-bold text-2xl text-gray-800 text-center">
                B-Stone Construction
              </h2>
              <div className="mb-12">
                <NameTag
                  firstName="B-Stone"
                  lastName="Construction"
                  size={"xl"}
                />
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

              <div className="flex items-center gap-4 mt-4">
                <p className=" text-gray-400 text-xs">Lead Status: </p>
                <div className="w-[150px]">
                  <CustomDropDown
                    onSelect={handleLeadSourceSelect}
                    size="xs"
                    placeHolder="New"
                    label=""
                    options={[
                      { value: "Potential", label: "Potential" },
                      { value: "New", label: "New" },
                      { value: "Contacted", label: "Contacted" },
                      { value: "Cold", label: "Cold" },
                      { value: "customer", label: "Customer" },
                    ]}
                  />
                </div>
                {showConfirmCustomer && (
                  <Button
                    size={"sm"}
                    onClick={() => setShowConfirmCustomer(false)}
                  >
                    Confirm
                  </Button>
                )}
              </div>
            </div>

            {/* about */}
            <div className="w-full  ">
              <div className="flex items-center justify-between bg-gray-100 rounded-md p-2">
                <p className=" mb-1 text-base ">ABOUT</p>
                <button className="hover:text-green-600">
                  <BiPlus />
                </button>
              </div>
              <div className="flex flex-col gap-4 p-2 text-sm ">
                <div className="flex items-center justify-between border-b-[1px] border-b-gray-200 py-1">
                  <p>Lead Source</p>
                  <p>Landing Page</p>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-b-gray-200 py-1">
                  <p>Industry</p>
                  <p>Construction</p>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-b-gray-200 py-1">
                  <p>Team Size</p>
                  <p>40</p>
                </div>
              </div>
            </div>

            {/* lead manager */}
            <div className="flex items-center justify-between gap-4 mt-4">
              <p className=" text-gray-400 text-xs">Lead Manager: </p>
              <div className="w-[200px]">
                <CustomDropDown
                  // onSelect={handleLeadSourceSelect}
                  size="xs"
                  placeHolder={"Patrick Doe"}
                  label=""
                  options={[
                    { value: "Patrick Doe", label: "Patrick Doe" },
                    { value: "Matt Damon", label: "Matt Damon" },
                    { value: "Shawn Mbanmi", label: "Shawn Mbanmi" },
                  ]}
                />
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
          </div>
        </div>
      </div>
      {openModal[MODALS.LEADS.ASSIGN_TASK] && <AssignTask />}
    </div>
  );
};
export default LeadDetail;
