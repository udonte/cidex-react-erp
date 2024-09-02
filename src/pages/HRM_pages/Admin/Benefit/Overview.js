import React, { useState } from "react";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import EditMonthPayday from "../../../../components/HRM_components/Admin/benefit/modals/EditMonthPayday";
import EditWeeklyPayday from "../../../../components/HRM_components/Admin/benefit/modals/EditWeeklyPayday";
import EditBiWeeklyPayday from "../../../../components/HRM_components/Admin/benefit/modals/EditBiWeeklyPayday";
import CreateSchedule from "../../../../components/HRM_components/Admin/benefit/modals/CreateSchedule";
import AddClaim from "../../../../components/HRM_components/Admin/benefit/modals/AddClaim";
import ViewClaimDetails from "../../../../components/HRM_components/Admin/benefit/modals/ViewClaimDetails";
import RejectClaim from "../../../../components/HRM_components/Admin/benefit/modals/RejectClaim";
import ApproveClaim from "../../../../components/HRM_components/Admin/benefit/modals/ApproveClaim";
import { MODALS } from "../../../../constants/modals.constant";
import {
  Button,
  Checkbox,
  FilterTab,
  TabbedPages,
  TableContainer,
  TableRowItem,
} from "../../../../components/HRM_components";

const Overview = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch();

  // SETTINGS TAB STATE
  const openCreateSchedule = useSelector(selectModalsSlice);
  const openEditMonthlyPayModal = useSelector(selectModalsSlice);
  const openEditWeeklyPayModal = useSelector(selectModalsSlice);
  const openEditBiWeeklyPayModal = useSelector(selectModalsSlice);
  const [selectedMonthDate, setSelectedMonthDate] = useState("");
  const [selectedWeekDate, setSelectedWeekDate] = useState("");
  const [selectedBiWeeklyDate, setSelectedBiWeeklyDate] = useState("");
  const openModal = useSelector(selectModalsSlice);
  const image = process.env.PUBLIC_URL;

  // EXPENSE CLAIM TAB

  const openApproveClaimModal = useSelector(selectModalsSlice);
  const openRejectClaimModal = useSelector(selectModalsSlice);
  const expenseTableHeaders = [
    "",
    "Claim Number",
    "Employee Name",
    "Submitted Date",
    "Title",
    "Claim Amount",
    "Approved Amount ",
    "Attachment",
    "Status",
  ];

  // SETTINGS TAB
  const handleMonthDateSelect = (date) => {
    setSelectedMonthDate(date); // Update selectedDate when a date is selected
  };

  const handleWeeklyDateSelect = (date) => {
    setSelectedWeekDate(date); // Update selectedDate when a date is selected
  };

  const handleBiWeeklyDateSelect = (date) => {
    setSelectedBiWeeklyDate(date); // Update selectedDate when a date is selected
  };

  const tabHeader = [
    "Earnings",
    "Deductions",
    "Expense Claim",
    "Report",
    "Settings",
  ];

  const changeTab = (index) => {
    setTabIndex(index);
  };

  const pageOutput = () => {
    switch (tabIndex) {
      case 0:
        return (
          <div className="px-6 py-4 flex items-center justify-center">
            <div className="flex-flex-col justify-center items-center text-center">
              <p className="text-gray-600">Earning</p>
              <span className="text-gray-400 text-sm">
                Earnings will appear here
              </span>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="px-6 py-4 flex items-center justify-center">
            <div className="flex-flex-col justify-center items-center text-center">
              <p className="text-gray-600">Deductions</p>
              <span className="text-gray-400 text-sm">
                Deductions will appear here
              </span>
            </div>
          </div>
        );

      case 2:
        return (
          <div key={"setting"} className="h-full">
            <div className="flex items-center justify-between bg-white py-6 px-6">
              <h1 className="font-bold text-[1.3rem]">All Claims</h1>
              <div className="flex items-center gap-x-3">
                <Button
                  icon={<FaPlus />}
                  onClick={() => {
                    dispatch(
                      openModalByName(
                        MODALS.BENEFIT_MANAGEMENT.OVERVIEW.EXPENSE.ADD_CLAIM
                      )
                    );
                  }}
                >
                  Add Claim
                </Button>
              </div>
            </div>

            {/* filter */}
            <div className="border-b-2 border-gray-200 pb-4">
              <FilterTab filter={true} sort={true} />
            </div>

            {/* table */}
            <div className="h-full mt-4">
              <TableContainer tableHeader={expenseTableHeaders}>
                <TableRowItem className="px-6 w-[30px]">
                  <td className="text-left px-4 py-6">
                    <Checkbox />
                  </td>
                  <td className="text-left px-4 py-6">
                    <button
                      className="underline hover:text-gray-600"
                      onClick={() => {
                        dispatch(
                          openModalByName(
                            MODALS.BENEFIT_MANAGEMENT.OVERVIEW.EXPENSE
                              .VIEW_CLAIM_DETAILS
                          )
                        );
                      }}
                    >
                      Claim001
                    </button>
                  </td>
                  <td className="text-left px-4 py-6">
                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          src={image + "/images/HRM/profileImage.png"}
                          alt=""
                        />
                      </div>
                      <div>
                        <p>Ore Ejikeme</p>
                        <span className="text-sm text-gray-500">
                          UX Designer
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-left px-6 ">28/09/2023</td>
                  <td className="text-left px-6 ">Travel</td>
                  <td className="text-left px-6 ">
                    <p className="bg-orange-50 p-2">N10,000</p>{" "}
                  </td>
                  <td className="text-left px-6 ">
                    <p className="bg-orange-50 p-2">N10,000</p>
                  </td>
                  <td className="text-left px-6">georgeclaim.jpg</td>
                  <td className="text-left px-6 ">
                    <button
                      className="border-2 border-green-500 rounded-[20px] text-green-500 bg-gray-100 text-sm px-2 py-1"
                      onClick={() => {
                        dispatch(
                          openModalByName(
                            MODALS.BENEFIT_MANAGEMENT.OVERVIEW.EDIT_MONTH_PAYDAY
                          )
                        );
                      }}
                    >
                      approved
                    </button>
                  </td>
                </TableRowItem>
              </TableContainer>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="px-6 py-4 flex items-center justify-center">
            <div className="flex-flex-col justify-center items-center text-center">
              <p className="text-gray-600">Reports</p>
              <span className="text-gray-400 text-sm">
                Reports will appear here
              </span>
            </div>
          </div>
        );

      case 4:
        return (
          <div key={"setting"} className="h-full">
            <div className="flex items-center justify-between bg-white py-6 px-6">
              <h1 className="font-bold text-[1.3rem]">Pay Day Settings</h1>
              <div className="flex items-center gap-x-3">
                <Button
                  icon={<FaPlus />}
                  onClick={() => {
                    dispatch(
                      openModalByName(
                        MODALS.BENEFIT_MANAGEMENT.OVERVIEW.SETTINGS
                          .CREATE_SCHEDULE
                      )
                    );
                  }}
                >
                  Create New Schedule
                </Button>
              </div>
            </div>

            {/* filter */}
            <div className="border-b-2 border-gray-200 pb-4">
              <FilterTab filter={true} sort={true} />
            </div>

            {/* table */}
            <div className="h-full mt-4">
              <TableContainer>
                {/* monthly */}
                <TableRowItem className="px-6 w-[30px]">
                  <td className="text-left px-4 py-6">
                    Monthly Pay Days
                    <p className="text-sm text-gray-500">
                      Specify when your pay day occurs in each pay run
                    </p>
                  </td>
                  <td className="text-left px-6 ">
                    Day of the Month
                    <p className="text-sm text-gray-500">{selectedMonthDate}</p>
                  </td>
                  <td className="text-left px-6 ">
                    <button
                      className="border-2 border-green-500 rounded-[20px] text-green-500 bg-gray-100 text-sm px-2 py-1"
                      onClick={() => {
                        dispatch(
                          openModalByName(
                            MODALS.BENEFIT_MANAGEMENT.OVERVIEW.SETTINGS
                              .EDIT_MONTH_PAYDAY
                          )
                        );
                      }}
                    >
                      edit month pay day
                    </button>
                  </td>
                </TableRowItem>
                {/* weekly */}
                <TableRowItem className="px-6 w-[30px]">
                  <td className="text-left px-4 py-6">
                    Weekly Pay Days
                    <p className="text-sm text-gray-500">
                      Specify when your pay day occur in each pay run
                    </p>
                  </td>
                  <td className="text-left px-6 ">
                    Day of the Month
                    <p className="text-sm text-gray-500">{selectedWeekDate}</p>
                  </td>
                  <td className="text-left px-6 ">
                    <button
                      className="border-2 border-green-500 rounded-[20px] text-green-500 bg-gray-100 text-sm px-2 py-1"
                      onClick={() => {
                        dispatch(
                          openModalByName(
                            MODALS.BENEFIT_MANAGEMENT.OVERVIEW.SETTINGS
                              .EDIT_WEEK_PAYDAY
                          )
                        );
                      }}
                    >
                      edit week pay day
                    </button>
                  </td>
                </TableRowItem>
                {/* Bi weekly  */}
                <TableRowItem className="px-6 w-[30px]">
                  <td className="text-left px-4 py-6">
                    Bi-Weekly Pay Days
                    <p className="text-sm text-gray-500">
                      Specify when your pay day occur in each pay run
                    </p>
                  </td>
                  <td className="text-left px-6 ">
                    Day of the Month
                    <p className="text-sm text-gray-500">
                      {selectedBiWeeklyDate}
                    </p>
                  </td>
                  <td className="text-left px-6 ">
                    <button
                      className="border-2 border-green-500 rounded-[20px] text-green-500 bg-gray-100 text-sm px-2 py-1"
                      onClick={() => {
                        dispatch(
                          openModalByName(
                            MODALS.BENEFIT_MANAGEMENT.OVERVIEW.SETTINGS
                              .EDIT_BIWEEKLY_PAYDAY
                          )
                        );
                      }}
                    >
                      setup calendar
                    </button>
                  </td>
                </TableRowItem>
              </TableContainer>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <TabbedPages
        tabIndex={tabIndex}
        tabsHeader={tabHeader}
        setTabIndex={changeTab}
      >
        <>{pageOutput()}</>
      </TabbedPages>

      {openEditMonthlyPayModal[
        MODALS.BENEFIT_MANAGEMENT.OVERVIEW.SETTINGS.EDIT_MONTH_PAYDAY
      ] && (
        <EditMonthPayday
          onDateSelect={handleMonthDateSelect}
          selectedDate={selectedMonthDate}
          setSelectedDate={setSelectedMonthDate}
        />
      )}

      {openEditBiWeeklyPayModal[
        MODALS.BENEFIT_MANAGEMENT.OVERVIEW.SETTINGS.EDIT_BIWEEKLY_PAYDAY
      ] && (
        <EditBiWeeklyPayday
          onDateSelect={handleBiWeeklyDateSelect}
          selectedDate={selectedBiWeeklyDate}
          setSelectedDate={setSelectedBiWeeklyDate}
        />
      )}

      {openEditWeeklyPayModal[
        MODALS.BENEFIT_MANAGEMENT.OVERVIEW.SETTINGS.EDIT_WEEK_PAYDAY
      ] && (
        <EditWeeklyPayday
          onDateSelect={handleWeeklyDateSelect}
          selectedDate={selectedWeekDate}
          setSelectedDate={setSelectedWeekDate}
        />
      )}
      {openCreateSchedule[
        MODALS.BENEFIT_MANAGEMENT.OVERVIEW.SETTINGS.CREATE_SCHEDULE
      ] && <CreateSchedule />}
      {
        <AddClaim
          isOpen={
            openModal[MODALS.BENEFIT_MANAGEMENT.OVERVIEW.EXPENSE.ADD_CLAIM]
          }
        />
      }
      {
        <ViewClaimDetails
          isOpen={
            openModal[
              MODALS.BENEFIT_MANAGEMENT.OVERVIEW.EXPENSE.VIEW_CLAIM_DETAILS
            ]
          }
        />
      }

      {openApproveClaimModal[
        MODALS.BENEFIT_MANAGEMENT.OVERVIEW.EXPENSE.APPROVE_CLAIM
      ] && <ApproveClaim />}

      {openRejectClaimModal[
        MODALS.BENEFIT_MANAGEMENT.OVERVIEW.EXPENSE.REJECT_CLAIM
      ] && <RejectClaim />}
    </div>
  );
};

export default Overview;
