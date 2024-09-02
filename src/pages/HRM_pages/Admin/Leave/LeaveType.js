import React, { useEffect } from "react";
import { FaPlaneSlash, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  BreadCrumbs,
  StatusPill,
  TableContainer,
  TableRowItem,
  TopTab,
  Spinner,
} from "../../../../components/HRM_components";
import { CiMenuKebab } from "react-icons/ci";
import { MODALS } from "../../../../constants/modals.constant";
import AddLeaveType from "../../../../components/HRM_components/Admin/leave/Modals/AddLeaveType";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import DotOptionButton from "../../../../components/_common/DotOptionButton";
import { fetchLeaveType } from "../../../../features/HRM_features/leave/leave.slice";
import { selectLeaveSlice } from "../../../../features/HRM_features/leave/leave.selector";

const LeaveType = () => {
  const { leaveTypes, isLoading } = useSelector(selectLeaveSlice);
  const breadcrumbItems = ["Leaves", "Leave Type"];
  const tableHeader = ["Leave Name", "Maximum Leave Count", "Policy"];
  const dispatch = useDispatch();
  const openAddLeaveTypeModal = useSelector(selectModalsSlice);

  useEffect(() => {
    dispatch(fetchLeaveType());
  }, []);
  return (
    <div className="p">
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}
      <TopTab
        leftComponent={
          <h1 className="font-bold text-[1.3rem]">All Leave Types</h1>
        }
        rightComponent={
          <Button
            icon={<FaPlus />}
            onClick={() => {
              dispatch(openModalByName(MODALS.LEAVE_MANAGEMENT.ADD_LEAVE_TYPE));
            }}
          >
            Add Leave Type
          </Button>
        }
      />
      <main className="px-6">
        {isLoading ? (
          <>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
            </div>
          </>
        ) : leaveTypes.length > 0 ? (
          <TableContainer pagination={true} tableHeader={tableHeader}>
            <TableRowItem>
              <td>Sick Leave</td>
              <td>Daniel Jackson</td>
              <td>01/12/2023 - 05/12/2023 (4Days)</td>
              <td>Sick</td>
              <td>
                <StatusPill status={"active"} text={"active"} />
              </td>
              <td className="text-center">
                <div className="flex items-center justify-center w-full">
                  <CiMenuKebab className="text-center" />
                </div>
              </td>
            </TableRowItem>
          </TableContainer>
        ) : (
          <div className="w-full h-[300px] flex items-center justify-center text-gurugeeks-dark-500">
            <div className="flex flex-col items-center justify-center">
              <FaPlaneSlash className="text-[80px] " />
              <p className=" font-semibold text-lg">No Leaves types Found</p>
            </div>
          </div>
        )}
      </main>
      {openAddLeaveTypeModal[MODALS.LEAVE_MANAGEMENT.ADD_LEAVE_TYPE] && (
        <AddLeaveType />
      )}
    </div>
  );
};

export default LeaveType;
