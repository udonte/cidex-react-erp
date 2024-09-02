import React from "react";
import {
  FilterTab,
  TableContainer,
  TableRowItem,
} from "../../../../components/HRM_components";

const EmployeeTimesheet = () => {
  const tableHeader = ["Employee Name", "Timesheet Period", "Action"];
  return (
    <>
      <FilterTab search={true} filter={true} />
      <main className="px-6">
        <TableContainer tableHeader={tableHeader}>
          {Array(5)
            .fill()
            .map(() => (
              <TableRowItem>
                <td className="pl-6">George Udonte</td>
                <td>20/06/2023 to 25/06/2023</td>
                <td>
                  <div className="flex items-center justify-center">
                    <div className="bg-green-200 text-green-700 w-fit px-2 rounded-full">
                      View Details
                    </div>
                  </div>
                </td>
              </TableRowItem>
            ))}
        </TableContainer>
      </main>
    </>
  );
};

export default EmployeeTimesheet;
