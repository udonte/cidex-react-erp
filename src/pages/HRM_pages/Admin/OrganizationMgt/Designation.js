import React, { useEffect } from "react";

import {
  Button,
  NameTag,
  BreadCrumbs,
  TableContainer,
  TableRowItem,
  TopTab,
} from "../../../../components/HRM_components";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { BiSolidUserBadge } from "react-icons/bi";
import { MODALS } from "../../../../constants/modals.constant";
import { selectPositions } from "../../../../features/HRM_features/organisation/positions/position.selectors";
import {
  getPositions,
  deletePositionById,
} from "../../../../features/HRM_features/organisation/positions/position.slice";
import Spinner from "../../../../components/_common/Spinner";
import AddDesignation from "../../../../components/HRM_components/Admin/organisation/modals/AddDesignation";

const Designation = () => {
  const dispatch = useDispatch();

  const { positions, isLoading } = useSelector(selectPositions);
  const openAddDepartmentModal = useSelector(selectModalsSlice);

  const breadcrumbItems = ["Designation"];

  const tableHeader = ["Designation", "Total Employees"];
  const dotOptions = [
    {
      text: "Delete Designation",
      icon: <FaTrash />,
      callBack: (id) => {
        dispatch(deletePositionById(id))
          .unwrap()
          .then((payload) => {
            if (payload === 200) {
              dispatch(getPositions());
            }
          });
      },
    },
  ];

  useEffect(() => {
    dispatch(getPositions());
  }, []);

  return (
    <>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}
      <TopTab
        leftComponent={<h1 className="font-bold text-[1.3rem]">Designation</h1>}
        rightComponent={
          <Button
            icon={<FaPlus />}
            onClick={() => {
              dispatch(openModalByName(MODALS.ORGANIZATION.ADD_DEPARTMENT));
            }}
          >
            Add Designation
          </Button>
        }
      />
      <div className="h-full px-6">
        <main>
          {isLoading ? (
            <>
              <div className="h-[500px] w-full flex items-center justify-center">
                <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
              </div>
            </>
          ) : (
            <>
              {positions && positions?.length > 0 ? (
                <TableContainer
                  dotOption={dotOptions}
                  tableHeader={tableHeader}
                >
                  {positions.map(({ name, users, id }, index) => (
                    <TableRowItem dotOptions={dotOptions} key={index} id={id}>
                      {/* <td
                    onClick={() => {
                      dispatch(
                        openModalByName(MODALS.EMPLOYEE.EMPLOYEE_DETAILS)
                      );
                    }}
                  >
                    <div className="flex w-full h-full items-center pl-6 gap-x-3 capitalize">
                      <NameTag firstName={firstName} lastName={lastName} />
                      <p>{`${firstName} ${lastName}`}</p>
                    </div>
                  </td> */}
                      <td className="px-6 capitalize">{name}</td>
                      <td className="px-[50px]">
                        {users?.length ? users?.length : 0}
                      </td>
                    </TableRowItem>
                  ))}
                </TableContainer>
              ) : (
                <div className="w-full h-[500px] flex items-center justify-center text-gurugeeks-dark-500">
                  <div className="flex flex-col items-center justify-center">
                    <BiSolidUserBadge className="text-[80px] " />
                    <p className=" font-semibold text-lg">
                      No Designation added yet
                    </p>
                    <p>Add a new designation.</p>
                  </div>
                </div>
              )}
            </>
          )}
        </main>

        {openAddDepartmentModal[MODALS.ORGANIZATION.ADD_DEPARTMENT] && (
          <AddDesignation />
        )}
      </div>
    </>
  );
};

export default Designation;
