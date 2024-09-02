import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";
import {
  BreadCrumbs,
  Button,
  FilterTab,
  TableContainer,
  TableRowItem,
  TopTab,
} from "../../../../../components/HRM_components";
import CreateSchedule from "../../../../../components/HRM_components/Admin/benefit/modals/CreateSchedule";
import { MODALS } from "../../../../../constants/modals.constant";
import { ROUTE_PATHS } from "../../../../../constants/routes.constants";

const PayRuns = () => {
  const openCreateSchedule = useSelector(selectModalsSlice);
  const dispatch = useDispatch();
  // const openAddDepartmentModal = useSelector(selectModalsSlice);

  const breadcrumbItems = ["Payruns"];

  const payRunsHeaders = [
    "Pay Runs",
    "Pay Date",
    "Approved Date",
    "Status",
    "Action",
  ];

  return (
    <>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      <TopTab
        leftComponent={<h1 className="font-bold text-[1.3rem]">Pay Runs</h1>}
        rightComponent={
          <Button
            icon={<FaPlus />}
            onClick={() => {
              dispatch(
                openModalByName(
                  MODALS.BENEFIT_MANAGEMENT.OVERVIEW.SETTINGS.CREATE_SCHEDULE
                )
              );
            }}
          >
            Create New Schedule
          </Button>
        }
      />
      {/* Filter Search  */}
      <FilterTab search={true} />

      {/* Table */}

      <TableContainer tableHeader={payRunsHeaders}>
        <TableRowItem>
          <td>
            Sept 1 - Sept 28
            <p className="text-sm text-gray-500">Monthly Pay Schedule</p>
          </td>
          <td>September 28, 2023</td>
          <td> September 28, 2023 </td>
          <td className="text-left px-6 ">
            <p className="border-2 border-green-500 rounded-[20px] text-green-500 bg-gray-100 text-sm py-3 text-center">
              active
            </p>
          </td>
          <td className=" text-center px-6 ">
            <Link
              to={`${ROUTE_PATHS.PRIVATE.BENEFIT_MANAGEMENT.PAYRUNS}/`}
            >
              <p className=" border-2 rounded-[8px] border-gurugeeks-orange-700 text-gurugeeks-orange-700 bg-gray-100 text-sm py-3 text-center">
                Process Pay Run
              </p>
            </Link>
          </td>
        </TableRowItem>

        <TableRowItem>
          <td>
            {" "}
            Sept 1 - Sept 28
            <p className="text-sm text-gray-500">Monthly Pay Schedule</p>
          </td>
          <td>September 28, 2023</td>
          <td> September 28, 2023 </td>
          <td className="text-left px-6 ">
            <p className="border-2 border-green-500 rounded-[20px] text-green-500 bg-gray-100 text-sm py-3 text-center">
              active
            </p>
          </td>
          <td className=" text-center px-6 ">
            <Link
              to={`${ROUTE_PATHS.PRIVATE.BENEFIT_MANAGEMENT.PAYRUNS}/ProcessPayRuns`}
            >
              <p className=" border-2 rounded-[8px] border-gurugeeks-orange-700 text-gurugeeks-orange-700 bg-gray-100 text-sm py-3 text-center">
                Process Pay Run
              </p>
            </Link>
          </td>
        </TableRowItem>
      </TableContainer>

      {openCreateSchedule[
        MODALS.BENEFIT_MANAGEMENT.OVERVIEW.SETTINGS.CREATE_SCHEDULE
      ] && <CreateSchedule />}
    </>
  );
};

export default PayRuns;
