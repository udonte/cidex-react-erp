import React, { useEffect } from "react";
import { FaPlaneSlash, FaPlus } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { MODALS } from "../../../../constants/modals.constant";
import { selectLeaveSlice } from "../../../../features/HRM_features/leave/leave.selector";
import { fetchLeave } from "../../../../features/HRM_features/leave/leave.slice";
import {
  BreadCrumbs,
  Button,
  FilterTab,
  StatusPill,
  TableContainer,
  TableRowItem,
  TopTab,
} from "../../../../components/HRM_components";
import AssignLeaveModal from "../../../../components/HRM_components/Admin/leave/Modals/AssignLeaveModal";
import Spinner from "../../../../components/_common/Spinner";

const ManageLeave = () => {
  const breadcrumbItems = ["Leaves", "Leave Management"];
  const tableHeader = [
    "Leave Type",
    "Employee",
    "Date",
    "Reason",
    "Status",
    "Action",
  ];
  const dispatch = useDispatch();
  const openAssignLeaveModal = useSelector(selectModalsSlice);

  const { allLeaves, isLoading } = useSelector(selectLeaveSlice);

  useEffect(() => {
    dispatch(fetchLeave());
  }, []);

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
      <TopTab
        leftComponent={<h1 className="font-bold text-[1.3rem]">All Leaves</h1>}
        rightComponent={
          <Button
            icon={<FaPlus />}
            onClick={() => {
              dispatch(openModalByName(MODALS.LEAVE_MANAGEMENT.ASSIGN_LEAVE));
            }}
          >
            Assign Leave
          </Button>
        }
      />
      <FilterTab filter={true} sort={true} search={true} />
      <main className="px-6">
        {isLoading ? (
          <>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
            </div>
          </>
        ) : allLeaves.length > 0 ? (
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
              <p className=" font-semibold text-lg">No Leaves Found</p>
            </div>
          </div>
        )}
      </main>
      {openAssignLeaveModal[MODALS.LEAVE_MANAGEMENT.ASSIGN_LEAVE] && (
        <AssignLeaveModal />
      )}
    </div>
  );
};

export default ManageLeave;

// allLeaves.length < 0 ? (
//   <>No leave</>
// ) : (
//   <TableContainer pagination={true} tableHeader={tableHeader}>
//     <TableRowItem>
//       <td>Sick Leave</td>
//       <td>Daniel Jackson</td>
//       <td>01/12/2023 - 05/12/2023 (4Days)</td>
//       <td>Sick</td>
//       <td>
//         <StatusPill status={"active"} text={"active"} />
//       </td>
//       <td className="text-center">
//         <div className="flex items-center justify-center w-full">
//           <CiMenuKebab className="text-center" />
//         </div>
//       </td>
//     </TableRowItem>
//   </TableContainer>
// )}
