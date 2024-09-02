import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../constants/modals.constant";
import AddSalaryComponent from "../../../../components/HRM_components/Admin/benefit/modals/AddSalaryComponent";
import {
  Button,
  Checkbox,
  TableContainer,
  TableRowItem,
} from "../../../../components/HRM_components";

const Salary = () => {
  const dispatch = useDispatch();
  const openAddSalaryModal = useSelector(selectModalsSlice);

  const SalaryComponentTableHeaders = [
    "",
    "Component Name",
    "Type",
    "Assigned To",
    "Calculation Type",
    "% of Basics",
    "Status ",
    "Actions",
  ];
  return (
    <div className="h-full">
      <div className="flex items-center justify-between bg-white py-6 px-6">
        <h1 className="font-bold text-[1.3rem]">Salary Components</h1>
        <div className="flex items-center gap-x-3">
          <Button
            icon={<FaPlus />}
            onClick={() => {
              dispatch(
                openModalByName(
                  MODALS.BENEFIT_MANAGEMENT.SALARY.ADD_SALARY_COMPONENT
                )
              );
            }}
          >
            Add Salary Component
          </Button>
        </div>
      </div>

      {/* table */}
      <div className="h-full w-full mt-4">
        <TableContainer tableHeader={SalaryComponentTableHeaders}>
          <TableRowItem className="px-6 w-[30px]">
            <td className="text-left px-4 py-6">
              <Checkbox />
            </td>
            <td className="text-left px-4 py-6">Basic Salary</td>
            <td className="text-left px-4 py-6">Earnings</td>
            <td className="text-left px-6 ">Interns</td>
            <td className="text-left px-6 ">% of Basics</td>
            <td className="text-left px-6 ">12%</td>
            <td className="text-left px-6 ">
              {" "}
              <p className="border-2 border-green-500 rounded-[20px] text-green-500 bg-gray-100 text-sm px-2 py-1 text-center">
                active
              </p>
            </td>
            <td className="text-center px-6 ">
              <button>
                <BiDotsVerticalRounded />
              </button>
            </td>
          </TableRowItem>
        </TableContainer>
      </div>

      {openAddSalaryModal[
        MODALS.BENEFIT_MANAGEMENT.SALARY.ADD_SALARY_COMPONENT
      ] && <AddSalaryComponent />}
    </div>
  );
};

export default Salary;
