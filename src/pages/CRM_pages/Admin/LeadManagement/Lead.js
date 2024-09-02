import React, { useEffect, useState } from "react";
import {
  FaChevronRight,
  FaClock,
  FaEnvelope,
  FaMailchimp,
  FaPhone,
  FaPlus,
  FaRegCopy,
} from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import {
  BreadCrumbs,
  Button,
  Checkbox,
  EmployeeSearchDropdown,
  TableContainer,
  TableRowItem,
} from "../../../../components/CRM_components";

import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { MODALS } from "../../../../constants/modals.constant";
import CaptureLeadsModal from "../../../../components/CRM_components/Leads/modals/CaptureLeadsModal";
import { selectLeadsSlice } from "../../../../features/CRM_features/leadManagement/lead.selector";
import { fetchLeads } from "../../../../features/CRM_features/leadManagement/lead.slice";
import FilterTab from "../../../../components/CRM_components/FilterTab/FilterTab";
import CustomDropdown from "../../../../components/CRM_components/common/CustomDropDown";
import { fetchEmployees } from "../../../../features/HRM_features/employee/employee.slice";
import { selectEmployeeSlice } from "../../../../features/HRM_features/employee/employee.selector";
import CustomCheckboxDropdown from "../../../../components/CRM_components/Leads/CustomCheckboxDropdown";
import { MdDelete } from "react-icons/md";
import DeleteLead from "../../../../components/CRM_components/Leads/modals/DeleteLead";
import { Link, useNavigate } from "react-router-dom";
import SaveList from "../../../../components/CRM_components/Leads/modals/SaveList";
import { FiUsers } from "react-icons/fi";

const Lead = () => {
  const breadcrumbItems = ["Lead Management,Leads"];
  const dispatch = useDispatch();
  const { leads, isLoading } = useSelector(selectLeadsSlice);
  const openCaptureLeadsModal = useSelector(selectModalsSlice);
  const [showContact, setShowContact] = useState(false);
  const { employees } = useSelector(selectEmployeeSlice);
  const openModal = useSelector(selectModalsSlice);
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [showQuickAccess, setShowQuickAccess] = useState(false);
  const navigate = useNavigate();

  // FETCH LEAD
  useEffect(() => {
    console.log(leads);
    dispatch(fetchLeads());
  }, [dispatch]);

  // FETCH EMPLOYEES
  useEffect(() => {
    console.log(employees);
    dispatch(fetchEmployees());
  }, [dispatch]);

  // HANDLE EMAIL ACTIONS IN QUICK ACCESS
  const handleDropDownSelect = (selectedValue) => {
    if (selectedValue === "sendBulkEmail") {
      // dispatch(openModalByName(MODALS.CONTACTS.SEND_BULK_EMAIL));
    }
  };

  // EMAIL ACTIONS OPTIONS IN QUICK ACCESS
  const emailActions = [
    { value: "sendEmail", label: "Send Email" },
    { value: "sendBulkEmail", label: "Send Bulk" },
  ];

  // LEADS TABLE HEADERS
  const tableHeader = [
    "Lead Name",
    "Lead Contact ",
    "Lead Source",
    "Lead Status",
    "Manager",
    "",
  ];

  // OPTIONS FOR ACTIONS IN LEAD TABLE
  const dotOptions = [
    {
      text: "Delete Lead",
      icon: <MdDelete />,
      action: () => dispatch(openModalByName(MODALS.LEADS.DELETE_LEAD)),
    },
  ];

  // LEAD FILTER OPTIONS
  const filterOptions = [
    { name: "Default (All)", list: [{ name: "All" }] },
    { name: "Assigned", list: [{ name: "Assigned" }] },
    { name: "Status", list: [{ name: "Contact" }] },
    { name: "Source", list: [{ name: "Source" }] },
    { name: "Industry", list: [{ name: "Industry" }] },
    { name: "Lead Owner", list: [{ name: "Lead Type" }] },
    { name: "Date Captured", list: [{ name: "Date Captured" }] },
    { name: "Tags", list: [{ name: "Tags" }] },
  ];

  // HANDLE EMPLOYEE SEARCH
  const handleEmployeeSelect = (selectedOption) => {
    console.log(selectedOption);
  };

  // LEAD SOURCE OPTIONS
  const leadSourceOptions = [
    { label: "Landing Page", value: "Landing Page" },
    { label: "Web Form", value: "Web Form" },
    { label: "Social Media", value: "Social Media" },
    { label: "Marketing Channels", value: "Marketing Channels" },
  ];

  // HANDLE LEAD SOURCE OPTIONS
  const handleLeadSourceSelect = (selectedOption) => {
    console.log(selectedOption);
  };

  return (
    <div>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* SHOW LEADS HEADER OR QUICK ACCESS HEADER */}
      {showQuickAccess ? (
        <div>
          <div className="bg-white border-y-2">
            <div className="p-6 flex justify-between items-center">
              {/* HEADER */}
              <div className="space-y-2 relative">
                <h1 className=" text-xl font-semibold">
                  High Probability Conversion
                </h1>
                <div className="flex flex-col gap-x-2">
                  <p className="font-semibold">
                    4<span className="mx-2 text-xs font-normal">Results</span>
                  </p>
                  <div className=" bg-white flex items-center gap-2 text-xs py-2">
                    <p>Privacy: </p>
                    <FiUsers />
                    <p className="text-xs flex items-center">Everyone</p>
                  </div>
                  <div className="">
                    <EmployeeSearchDropdown callback={handleEmployeeSelect} />
                  </div>
                </div>
              </div>

              <div className="flex gap-x-3 items-center">
                <div className="w-[200px]">
                  <CustomDropdown
                    size="xs"
                    placeHolder="Send Actions"
                    label=""
                    options={emailActions}
                    onSelect={handleDropDownSelect}
                  />
                </div>
                <div>
                  <Button icon={<FaMailchimp />} size={"sm"}>
                    Chat
                  </Button>
                </div>
                <div>
                  <Button icon={<FaPhone />} size={"sm"}>
                    Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full bg-white gap-2">
            <div className="px-2 bg-white flex items-center py-2">
              <Checkbox /> <p className="text-xs">Quick Access</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center p-6 bg-white border-y-2 justify-between">
          <h1 className=" text-xl">45 Leads</h1>
          <div className="flex items-center gap-4">
            <div className="w-[200px]">
              <CustomCheckboxDropdown
                handleSelect={handleLeadSourceSelect}
                label=""
                placeholder="All Sources"
                options={leadSourceOptions}
                size="sm"
              />
            </div>

            {isFilterClicked ? (
              <Button
                size={"md"}
                color={"primary"}
                onClick={() => {
                  dispatch(openModalByName(MODALS.LEADS.SAVE_LEADS));
                }}
              >
                <FaPlus /> Save as a List
              </Button>
            ) : (
              <Button
                size={"md"}
                color={"primary"}
                onClick={() => {
                  dispatch(openModalByName(MODALS.LEADS.CAPTURE_LEADS));
                }}
              >
                Capture Lead
              </Button>
            )}
          </div>
        </div>
      )}
      {/* END OF SHOW LEADS HEADER OR QUICK ACCESS HEADER */}

      <FilterTab
        refresh={true}
        filterOptions={filterOptions}
        sort={true}
        filter={true}
        handleAddFilterClick={() => setIsFilterClicked((prev) => !prev)}
        searchPlaceholder={"name, email"}
      />

      <TableContainer
        dotOptions={dotOptions}
        checkBox={true}
        tableHeader={tableHeader}
      >
        {leads?.map(({ name }, index) => (
          <TableRowItem
            dotOptions={dotOptions}
            id={index}
            handleOnClick={() => navigate("/lead-detail")}
          >
            <td>
              <Checkbox />
            </td>
            <td>
              <p>{name}</p>
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
              <Link to={`:id`}>
                <div className="hover:text-2xl text-center font-bold text-green-700">
                  <FaChevronRight />
                </div>
              </Link>
            </td>
          </TableRowItem>
        ))}
      </TableContainer>

      <CaptureLeadsModal
        isOpen={openCaptureLeadsModal[MODALS.LEADS.CAPTURE_LEADS]}
      />
      {openModal[MODALS.LEADS.DELETE_LEAD] && <DeleteLead />}
      {openModal[MODALS.LEADS.SAVE_LEADS] && (
        <SaveList
          showQuickAccess={showQuickAccess}
          setShowQuickAccess={setShowQuickAccess}
        />
      )}
    </div>
  );
};

export default Lead;
