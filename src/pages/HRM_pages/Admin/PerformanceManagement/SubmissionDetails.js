import React from "react";
import {
  BreadCrumbs,
  Button,
  TableContainer,
  TableRowItem,
  TopTab,
} from "../../../../components/HRM_components";

const SubmissionDetails = () => {
  const breadcrumbItems = ["Mandatory Training", "Course", "John Doe"];
  const tableHeader = ["Course Title", "Phone", "Links", ""];
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
        leftComponent={
          <>
            <h1 className="font-bold text-lg text-[#161E54]">John Doe</h1>
            <p className="text-sm text-gurugeeks-dark-500">Product Designer</p>
          </>
        }
      />
      <main>
        <TableContainer tableHeader={tableHeader}>
          <TableRowItem>
            <td>Introduction to Cloud Computing and IaaS </td>
            <td>Alison</td>
            <td className=" underline text-gurugeeks-orange-600">Open Link</td>
            <td className="px-3">
              <div className=" bg-gurugeeks-gray-700 p-1">Completed</div>
            </td>
          </TableRowItem>
        </TableContainer>
      </main>
    </div>
  );
};

export default SubmissionDetails;
