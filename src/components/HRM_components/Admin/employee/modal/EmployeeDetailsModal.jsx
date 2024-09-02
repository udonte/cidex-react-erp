import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TabbedPages from "../../../_common/TabbedPages";
import Modal from "../../../_common/ModalContainer/ModalConatiner";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCaretDown } from "react-icons/io5";
import StatusPill from "../../../_common/StatusPill";
import Button from "../../../_common/Button/Button";
import { ImDownload3 } from "react-icons/im";

import PersonalDetails from "./TabsEmployeeDetails/PersonalDetails"
import BankDetails from "./TabsEmployeeDetails/BankDetails"
import NextOfKin from "./TabsEmployeeDetails/NextOfKin"
import EmergencyContact from "./TabsEmployeeDetails/EmergencyContact"
import Documents from "./TabsEmployeeDetails/Documents"
import Guarantor from "./TabsEmployeeDetails/Guarantor"
import Referee from "./TabsEmployeeDetails/Referee"



import avatar from "../../../../../assets/images/Avatar.png";
import EditEmployeeDetails from "./EditEmployeeDetails";
import SavedEmployeeDetails from "./SavedEmployeeDetails";
import TableViewToggleButton from "../../../../HRM_components/_common/TableViewToggleButton";

const EmployeeDetailsModal = ({ isOpen, employeeData, setEmployeeData }) => {
  // const employeeId = decryptId(id);
  // const dispatch = useDispatch();
  const [listView, setListView] = useState(true);
  console.log("employee DData",employeeData)

  // // const [tabIndex] = useState(0);




  const handleListViewToggle = () => {
    setListView((prevState) => !prevState);
  }

  // Tab pages Setup

  const [tabIndex, setTabIndex] = useState(0);
  const tabsHeader = [
    "Personal Details",
    "Bank Details",
    "Next of Kin",
    "Emergency Contact",
    "Document",
    "Guarantor",
    "Referee",
  ];

  const changeTab = (index) => {
    setTabIndex(index);
  };

  const pagesOutput = () => {
    if (tabIndex === 0) {
      return (
       <PersonalDetails />
      ); 
      // Bank Details
    } else if (tabIndex === 1) {
      
      return (
       <BankDetails />
      );
      // Next of Kin
    } else if (tabIndex === 2) {
      return (
     <NextOfKin/>
      );
      // Emergency Contact
    } else if (tabIndex === 3) {
      return (
     <EmergencyContact />
        );
        // Document
    } else if (tabIndex === 4) {
      return (
     <Documents />
        );
    } 
     // Guarantor
    else if (tabIndex === 5) {
      return (
       <Guarantor />
        );
    } 
        // Referee
    else if (tabIndex === 6) {
      return ( 
     <Referee />
    );
    }
  };

  return (
    <Modal title={"Employee Details"} isOpen={isOpen}>
      {/* Main Con Div  */}
      <div>
        {/* Div for Header and tab*/}
        <div className="flex flex-col gap-8">
          {/* Header Section */}

          <div className="w-full flex border-b-[1px] py-4 gap-3">
            <div className="w-1/3 flex items-center gap-3 ">
              <div>
                <img src={avatar} alt="Man" width={80} height={70} />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-medium text-black_text text-base ">
                  {employeeData?.first_name} {employeeData?.last_name}{" "}
                </h1>
                <div>
                  <h2 className="font-medium text-xs text-gray_text">
                    Date Hired
                  </h2>
                  <h1 className="font-medium text-black_text text-base font-lato">
                    {" "}
                    {employeeData?.date_hired}
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-2 w-2/3 flex flex-col justify-between gap-5">
              {/* Button  */}
              <div className="flex justify-end gap-5 ">
                <TableViewToggleButton
                  activeState={listView}
                  leftIcon={
                    <div className="flex items-center justify-center gap-x-2 ">
                      <p>Active</p>
                    </div>
                  }
                  rightIcon={
                    <div className="flex items-center justify-center gap-x-2">
                      <p>inactive</p>
                    </div>
                  }
                  handleOnClick={handleListViewToggle}
                />

                <Button
                  icon={<ImDownload3 />}
                  color="gray"
                  className="font-medium  text-sm">
                  {" "}
                  Download{" "}
                </Button>
              </div>

              <div className="flex gap-6 justify-end items-center ">
                <Button
                  iconRight={<IoCaretDown />}
                  color="gray"
                  className="font-medium text-black_text text-xs">
                  {" "}
                  Status
                </Button>
                <h1 className="font-medium text-black_text text-sm ">
                  {" "}
                  {employeeData?.email}
                </h1>
                <h1 className="font-medium text-black_text text-sm ">
                  {" "}
                  07032801804{" "}
                </h1>
              </div>
            </div>

          </div>
          <div>
            <TabbedPages
              tabsHeader={tabsHeader}
              tabIndex={tabIndex}
              setTabIndex={changeTab}>
              {pagesOutput()}
            </TabbedPages>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EmployeeDetailsModal;
