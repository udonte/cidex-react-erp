import React, { useState } from "react";
import { FaChevronRight, FaDownload, FaEdit, FaPlus } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdArrowForwardIos, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BsDot, BsFillLightningChargeFill } from "react-icons/bs";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../constants/modals.constant";

import {
  BreadCrumbs,
  Button,
  ChangePlan,
  Checkbox,
  RoundedToggleButton,
  TabbedPages,
  TableContainer,
  TableRowItem,
} from "../../../../components/HRM_components";
import ModuleSettings from "./ModuleSettings/ModuleSettings";
import ToggleButton from "../../../../components/HRM_components/_common/ToggleButton";
import CustomDropdown from "../../../../components/HRM_components/_common/CustomDropDown";
import Accordion from "../../../../components/HRM_components/_common/Accordion";
import PermissionAccordion from "../../../../components/HRM_components/Admin/settings/PermissionAccordion";
import RolesAndPermission from "./Permission/RolesAndPermission";

const Settings = () => {
  const breadcrumbItems = ["Inventory", "Products", ""];
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setActiveTabIndex(index);
  };

  // General Settings
  const [isBirthdayActive, setisBirthdayActive] = useState(true);
  const [isPictureActive, setisPictureActive] = useState(false);
  const [isPersonalDetailsActive, setIsPersonalDetailsActive] = useState(false);
  const [isNotificationViaEmailActive, setIsNotificationViaEmailActive] =
    useState(false);
  const [isNotificationViaAppActive, setIsNotificationViaAppActive] =
    useState(true);
  const [isNotificationNewProjectActive, setIsNotificationNewProjectActive] =
    useState(true);
  const [isModifyingSettings, setIsModifyingSettings] = useState(false);
  const [settingsData, setSettingsData] = useState({
    addressDetails: "5, Alumimum Road, Chalston Town",
    emailId: "femi@gurugeeksroyalty.biz",
    displayName: "First Name",
    displayDateFormat: "DD/MM/YYYY",
    displayTimeFormat: "24Hours",
  });

  const handleModifyOnClick = () => {
    setIsModifyingSettings(!isModifyingSettings);
  };

  const handleOnBirthdayClick = () => {
    setisBirthdayActive(!isBirthdayActive);
  };

  const handleOnPictureClick = () => {
    setisPictureActive(!isPictureActive);
  };

  const handleOnPersonalDetailClick = () => {
    setIsPersonalDetailsActive(!isPersonalDetailsActive);
  };

  const handleNotificationViaEmailClick = () => {
    setIsNotificationViaEmailActive(!isNotificationViaEmailActive);
  };

  const handleNotificationViaAppClick = () => {
    setIsNotificationViaAppActive(!isNotificationViaAppActive);
  };

  const handleNotificationNewProjectClick = () => {
    setIsNotificationNewProjectActive(!isNotificationNewProjectActive);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettingsData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDropDownSelect = (name, selectedOption) => {
    setSettingsData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  const nameTypes = [
    { value: "firstName", label: "First Name" },
    { value: "lastName", label: "Last Name" },
  ];

  const dateTypes = [
    { value: "DD/MM/YYYY", label: "DD/MM/YYYY" },
    { value: "MM/DD/YYYY", label: "MM/DD/YYYY" },
    { value: "YYYY/MM/DD", label: "YYYY/MM/DD" },
  ];

  const timeFormat = [
    { value: "12 Hours", label: "12 Hours" },
    { value: "24 Hours", label: "24 Hours" },
  ];

  // Roles & Permissions
  const [activeRoleTabIndex, setActiveRoleTabIndex] = useState("admin");
  const [recruitment, setRecruitment] = useState(true);

  const handleRecruitment = () => {
    return setRecruitment((prev) => !prev);
  };

  const moduleHeaders = [
    "Module Permissions",
    "Read",
    "Write",
    "Create",
    "Delete",
    "Approve",
  ];

  const dispatch = useDispatch();
  const openChangePlanModal = useSelector(selectModalsSlice);
  const openEditBillingDetails = useSelector(selectModalsSlice);
  const openAddPaymentDetails = useSelector(selectModalsSlice);
  const openEditPaymentDetails = useSelector(selectModalsSlice);
  const tabLabels = [
    "General Settings",
    "Roles and Permissions",
    "Module Settings",
    "Subscription and Billing",
  ];

  // subscription table
  const subcriptionsTableHeader = [
    "Invoice ID",
    "Billing Date",
    "Plan",
    "Amount",
    "Users on Plan",
    "Status",
    "Download",
    "Action",
  ];
  const subscriptionDotOptions = [
    { text: "Edit", icon: <FaEdit />, action: () => dispatch() },
    {
      text: "Delete",
      icon: <MdDelete />,
      action: () => console.log("clicked"),
    },
  ];

  const pageOutput = () => {
    switch (activeTabIndex) {
      // General Settings
      case 0:
        return (
          <div className="py-4 m-6">
            <div>
              {isModifyingSettings ? (
                // modifying page
                <div className="flex items-center gap-4">
                  <Button onClick={handleModifyOnClick}>Cancel</Button>
                  <Button onClick={handleModifyOnClick}>Save</Button>
                </div>
              ) : (
                <div>
                  <Button onClick={handleModifyOnClick}>Modify Setting</Button>
                </div>
              )}
              {/* main content */}
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-y-2 items-start my-4 bg-white shadow-md rounded-md py-4 px-8">
                  <h1 className="font-bold">Address Details</h1>
                  <div className="flex items-start justify-between w-full text-gray-700">
                    <p>Company Address</p>
                    {isModifyingSettings ? (
                      <div className="w-1/3">
                        <input
                          className="p-3 w-full h-10  border bg-slate-50 rounded-md outline-none"
                          type="text"
                          placeholder="Address Details"
                          name="addressDetails"
                          value={settingsData.addressDetails}
                          onChange={handleInputChange}
                        />
                      </div>
                    ) : (
                      <p>{settingsData.addressDetails}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 items-start my-4 bg-white shadow-md rounded-md py-4 px-8">
                  <h1 className="font-bold">Super Administrator</h1>
                  <div className="flex items-start justify-between w-full text-gray-700">
                    <p>Email ID</p>
                    {isModifyingSettings ? (
                      <div className="w-1/3">
                        <input
                          className="p-3 w-full h-10  border bg-slate-50 rounded-md outline-none"
                          type="text"
                          placeholder="Email ID"
                          name="emailId"
                          value={settingsData.emailId}
                          onChange={handleInputChange}
                        />
                      </div>
                    ) : (
                      <p>{settingsData.emailId}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 items-start my-4 bg-white shadow-md rounded-md py-4 px-8">
                  <h1 className="font-bold">Display SettingS</h1>
                  <div className="flex items-start justify-between w-full text-gray-700">
                    <p>Name to be displayed</p>
                    {isModifyingSettings ? (
                      <div className="w-1/3">
                        <CustomDropdown
                          label=""
                          options={nameTypes}
                          onSelect={(selectedOption) => {
                            handleDropDownSelect("displayName", selectedOption);
                          }}
                        />
                      </div>
                    ) : (
                      <p>{settingsData.displayName}</p>
                    )}
                  </div>
                  <div className="flex items-start justify-between w-full text-gray-700">
                    <p>Date Format</p>
                    {isModifyingSettings ? (
                      <div className="w-1/3">
                        <CustomDropdown
                          label=""
                          options={dateTypes}
                          onSelect={(selectedOption) => {
                            handleDropDownSelect(
                              "displayDateFormat",
                              selectedOption
                            );
                          }}
                        />
                      </div>
                    ) : (
                      <p>{settingsData.displayDateFormat}</p>
                    )}
                  </div>
                  <div className="flex items-start justify-between w-full text-gray-700">
                    <p>Time Format</p>
                    {isModifyingSettings ? (
                      <div className="w-1/3">
                        <CustomDropdown
                          label=""
                          options={timeFormat}
                          onSelect={(selectedOption) => {
                            handleDropDownSelect(
                              "displayTimeFormat",
                              selectedOption
                            );
                          }}
                        />
                      </div>
                    ) : (
                      <p>{settingsData.displayTimeFormat}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 items-start my-4 bg-white shadow-md rounded-md py-4 px-8">
                  <h1 className="font-bold">Display Setting</h1>
                  <div className="flex items-start justify-between w-full text-gray-700">
                    <p>
                      Give employees permission to share to hide their birthdays
                    </p>
                    <div>
                      <ToggleButton
                        handleOnClick={handleOnBirthdayClick}
                        activeState={isBirthdayActive}
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-between w-full text-gray-700">
                    <p>
                      Give employees permission to update and change display
                      picture
                    </p>
                    <div>
                      <ToggleButton
                        handleOnClick={handleOnPictureClick}
                        activeState={isPictureActive}
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-between w-full text-gray-700">
                    <p>
                      Give employees permission to update personal information
                    </p>
                    <div>
                      <ToggleButton
                        handleOnClick={handleOnPersonalDetailClick}
                        activeState={isPersonalDetailsActive}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-2 items-start my-4 bg-white shadow-md rounded-md py-4 px-8">
                  <h1 className="font-bold">Dashboard Widget Customization</h1>
                  <div className="flex items-start justify-between w-full text-gray-700">
                    <p>
                      Modify the appearance, content, functionality of the
                      dashboard
                    </p>
                    <div className="cursor-pointer">
                      <MdArrowForwardIos />
                    </div>
                  </div>
                </div>

                {/* notifications setting */}
                <div className="flex flex-col gap-y-2 items-start my-4 bg-white shadow-md rounded-md py-4 px-8">
                  <h1 className="font-bold">Notification Setting</h1>
                  <div className="flex items-start justify-between w-full text-gray-700">
                    <p>Receive notification via email</p>
                    <div>
                      <ToggleButton
                        handleOnClick={handleNotificationViaEmailClick}
                        activeState={isNotificationViaEmailActive}
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-between w-full text-gray-700">
                    <p>Receive notification via in app</p>
                    <div>
                      <ToggleButton
                        handleOnClick={handleNotificationViaAppClick}
                        activeState={isNotificationViaAppActive}
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-between w-full text-gray-700">
                    <p>
                      Receive notification when a new project is been created
                    </p>
                    <div>
                      <ToggleButton
                        handleOnClick={handleNotificationNewProjectClick}
                        activeState={isNotificationNewProjectActive}
                      />
                    </div>
                  </div>
                </div>
                {/* end of notifications settings */}
              </div>
            </div>
          </div>
        );
      // roles and permission
      case 1:
        return <RolesAndPermission />;
      // module settings
      case 2:
        return <ModuleSettings />;
      // subscription and billing
      case 3:
        return (
          <div className="py-4">
            {/* plan details */}
            <div className="flex items-start justify-between bg-white p-4 text-gray-600">
              {/* plan */}
              <div className="rounded-full bg-orange p-2 flex items-start gap-x-2 ">
                <div className="bg-orange-100 rounded-full w-fit p-2 shadow-md">
                  <BsFillLightningChargeFill color="orange" size={15} />
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="font-md text-orange-700 font-bold">
                    Starter Plan
                  </div>
                  <p className="text-xs text-gray-400">Billing Anually</p>
                  <span className="rounded-md bg-green-200 py-1 px-2 w-25 text-green-700 text-[12px] flex items-center justify-start gap-1 w-fit mt-1 ">
                    Active <GoDotFill />
                  </span>
                </div>
              </div>
              {/* next billing */}
              <div className="flex flex-col">
                <span className="flex items-start gap-1">
                  Next Billing <p className="font-bold">10/10/2023</p> for
                </span>
                <span className="flex items-start font-bold text-[2rem]">
                  {" "}
                  $<p>59.89</p>
                </span>
              </div>
              {/* avatar pill */}
              <div>Avatar Pill</div>

              {/* card details */}
              <div className="flex flex-col gap-2">
                <p>Payment Information</p>
                <div className="bg-gray-100 py-2 px-4 rounded-md flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={process.env.PUBLIC_URL + "/images/mastercard.png"}
                      alt="Mastercard logo"
                    />
                    <p className="text-sm">
                      **** **** *** <span>564</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    Master Card - Expires in <span> 09/24</span>
                  </div>
                </div>
              </div>

              <div></div>

              <div className="flex flex-col items-start gap-4">
                <Button
                  onClick={() => {
                    dispatch(
                      openModalByName(MODALS.SETTINGS.SUBSCRIPTION_BILLING)
                    );
                  }}
                >
                  Change Plan
                </Button>
                <p className="cursor-pointer text-orange-500">Cancel Plan</p>
              </div>
            </div>

            {/* table */}
            <div className="mt-4">
              <TableContainer
                tableHeader={subcriptionsTableHeader}
                dotOptions={subscriptionDotOptions}
                // checkBox={true}
              >
                {Array(5)
                  .fill()
                  .map((items, index) => (
                    <TableRowItem
                      dotOptions={subscriptionDotOptions}
                      id={index}
                    >
                      <td>ID234FG</td>
                      <td>01/12/11</td>
                      <td>Basic</td>
                      <td>$10</td>
                      <td>3 of 10</td>
                      <td className="text-center">
                        <div className="flex justify-center items-center">
                          <p className="rounded-full w-20 bg-green-200 py-2 px-1 w-15 text-green-500 text-xs ">
                            High
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center items-center">
                          <FaDownload />
                        </div>
                      </td>
                    </TableRowItem>
                  ))}
              </TableContainer>
            </div>
          </div>
        );
      // default
      default:
        return null;
    }
  };

  return (
    <div className="h-full">
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* tabbed pages */}
      <div className=" py-2">
        {/* TabbedPages component */}
        <TabbedPages
          tabIndex={activeTabIndex}
          tabsHeader={tabLabels}
          setTabIndex={handleTabChange}
        >
          <div className="mb-24">{pageOutput()}</div>
        </TabbedPages>
      </div>
      {openChangePlanModal[MODALS.SETTINGS.SUBSCRIPTION_BILLING] && (
        <ChangePlan />
      )}
      {/*<AddProductModal
        isOpen={openAddPaymentDetails[MODALS.INVENTORY.CATEGORY.ADD_PRODUCT]}
      />
      <AddProductModal
        isOpen={openEditBillingDetails[MODALS.INVENTORY.CATEGORY.ADD_PRODUCT]}
      /> */}
    </div>
  );
};

export default Settings;
