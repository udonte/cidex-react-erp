import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BreadCrumbs,
  Button,
  Checkbox,
  EmployeeSearchDropdown,
  FilterSection,
  TableContainer,
  TableRowItem,
} from "../../../../components/CRM_components";
import { useDispatch } from "react-redux";
import { FiUsers } from "react-icons/fi";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../constants/modals.constant";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaChevronRight, FaClock, FaEnvelope, FaRegCopy } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import CustomDropdown from "../../../../components/HRM_components/_common/CustomDropDown";

const LeadListDetails = () => {
  const dispatch = useDispatch();
  const [showContact, setShowContact] = useState(false);

  const navigate = useNavigate();
  const breadcrumbItems = [
    "Leads",
    "Leads List",
    "High Probability Conversion",
  ];

  // LEADS TABLE HEADERS
  const tableHeader = [
    "",
    "Lead Name",
    "Lead Contact ",
    "Lead Source",
    "Lead Status",
    "Manager",
    "",
  ];

  // OPTIONS FOR ACTIONS IN LEAD TABLE
  const tableDotOptions = [
    {
      text: "Delete Lead",
      icon: <MdDelete />,
      action: () => dispatch(openModalByName(MODALS.LEADS.DELETE_LEAD)),
    },
  ];

  // LEAD FILTER OPTIONS
  // const filterOptions = [
  //   { name: "Default (All)", list: [{ name: "All" }] },
  //   { name: "Assigned", list: [{ name: "Assigned" }] },
  //   { name: "Status", list: [{ name: "Contact" }] },
  //   { name: "Source", list: [{ name: "Source" }] },
  //   { name: "Industry", list: [{ name: "Industry" }] },
  //   { name: "Lead Owner", list: [{ name: "Lead Type" }] },
  //   { name: "Date Captured", list: [{ name: "Date Captured" }] },
  //   { name: "Tags", list: [{ name: "Tags" }] },
  // ];

  // HANDLE EMPLOYEE SEARCH
  const handleEmployeeSelect = (selectedOption) => {
    console.log(selectedOption);
  };

  // LEAD SOURCE OPTIONS
  // const leadSourceOptions = [
  //   { label: "Landing Page", value: "Landing Page" },
  //   { label: "Web Form", value: "Web Form" },
  //   { label: "Social Media", value: "Social Media" },
  //   { label: "Marketing Channels", value: "Marketing Channels" },
  // ];

  // HANDLE LEAD SOURCE OPTIONS
  const handleLeadSourceSelect = (selectedOption) => {
    console.log(selectedOption);
  };

  const dotOptions = [
    {
      text: "Edit",
      icon: <MdEdit />,
      action: () => {
        return;
      },
    },
    {
      text: "Delete Segment",
      icon: <MdDelete />,
      action: () => {
        return;
      },
    },
  ];

  return (
    <div>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      <div>
        <div className="bg-white border-y-2">
          <div className="p-6 flex justify-between items-center">
            {/* HEADER */}
            <div className="space-y-2 relative">
              <h1 className=" text-xl font-semibold">
                High Probability Conversion
              </h1>
              <div className="flex flex-col gap-x-2">
                <div className=" bg-white flex items-center gap-2 text-xs py-2">
                  <p>Privacy: </p>
                  <FiUsers />
                  <p className="text-xs flex items-center">Everyone</p>
                </div>
                <p className="font-semibold">
                  1<span className="mx-2 text-xs font-normal">Lead</span>
                </p>

                <div className="">
                  <EmployeeSearchDropdown callback={handleEmployeeSelect} />
                </div>
              </div>
            </div>

            <div className="flex gap-x-3 items-center">
              {/* <div>
                <DotOptionButton />
                <DotOptions dotOptions={dotOptions} />
              </div> */}
              <Button
                size={"md"}
                color={"primary"}
                onClick={() => {
                  dispatch(openModalByName(MODALS.LEADS.CAPTURE_LEADS));
                }}
              >
                Add Lead
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 bg-white py-3 flex items-center">
        <Checkbox /> <p className="text-xs">Quick Access</p>
      </div>
      <FilterSection />
      <div className="">
        <TableContainer
          Checkbox={true}
          tableHeader={tableHeader}
          dotOptions={dotOptions}
        >
          {Array(1)
            .fill()
            .map((items, index) => (
              <TableRowItem
                dotOptions={tableDotOptions}
                id={index}
                handleOnClick={() => navigate("/lead-detail")}
              >
                <td>
                  <Checkbox />
                </td>
                <td>
                  <p>Patrick Barn</p>
                  <div className="text-xs gap-x-1 flex items-center justify-center text-gurugeeks-dark-500">
                    <p>
                      <FaClock />
                    </p>
                    <p>Today at 4:30</p>
                  </div>
                </td>
                <td className="flex items-center justify-center gap-x-6 relative">
                  <div onClick={() => setShowContact(!showContact)}>
                    <ImPhone />
                    {showContact && (
                      <div className="absolute bottom-[25px] bg-gray-200 text-black text-sm py-1 px-2 rounded font-light flex items-center gap-2">
                        09023445431
                        <div className="cursor-pointer hover:bg-gray-400 hover:p-1 rounded">
                          <FaRegCopy />
                        </div>
                      </div>
                    )}
                  </div>
                  <FaEnvelope />
                </td>
                <td>Web form</td>
                <td className="flex items-center justify-center h-full pt-2">
                  <div className="w-[50%]">
                    <CustomDropdown
                      onSelect={handleLeadSourceSelect}
                      size="sm"
                      placeHolder="New"
                      label=""
                      options={[
                        { value: "New", label: "New" },
                        { value: "Contacted", label: "Contacted" },
                        { value: "Cold", label: "Cold" },
                      ]}
                    />
                  </div>
                </td>
                <td>
                  <EmployeeSearchDropdown callback={handleEmployeeSelect} />
                </td>
                <td>
                  <div
                    className="hover:text-2xl text-center font-bold text-green-700"
                    onClick={() => navigate(`/CRM/leads/:id`)}
                  >
                    <FaChevronRight />
                  </div>
                </td>
              </TableRowItem>
            ))}
        </TableContainer>
      </div>
    </div>
  );
};

export default LeadListDetails;
