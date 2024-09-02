import React from "react";
import { FaPlus } from "react-icons/fa";

import {
  Button,
  FilterTab,
  //   BreadCrumbs,
  TableContainer,
  TableRowItem,
} from "../../../../../components/HRM_components";
import Asset from "../../../../../assets/images/Avatar.png"

const ProcessPayRuns = () => {
  const processPayRunsHeaders = [
    "Employee",
    "Salary",
    "Tax",
    "Reimbursement",
    "Transport Allowance",
    "Pension",
    " Gross Pay",
    "Net Pay",
  ];
  const processData = [
    {
      id: 1,
      employee: "Seye Olaniyan",
      role: "UI/UX Designer",
      salary: "₦ 150,000.00",
      tax: "₦ 8,000.00",
      reimbursement: "₦ 10,000.00",
      transport_allowance: "₦ 10,000.00",
      pension: "₦ 12,000.00",
      gross_pay: "₦ 170,000.00",
      net_pay: "₦ 150,000.00",
    },

    {
      id: 1,
      employee: "Sholola Gbolahan",
      role: "Software Engineer",
      salary: "₦ 150,000.00",
      tax: "₦ 8,000.00",
      reimbursement: "₦ 10,000.00",
      transport_allowance: "₦ 10,000.00",
      pension: "₦ 12,000.00",
      gross_pay: "₦ 170,000.00",
      net_pay: "₦ 150,000.00",
    },

    {
      id: 1,
      employee: "Sholola Gbolahan",
      role: "Software Engineer",
      salary: "₦ 150,000.00",
      tax: "₦ 8,000.00",
      reimbursement: "₦ 10,000.00",
      transport_allowance: "₦ 10,000.00",
      pension: "₦ 12,000.00",
      gross_pay: "₦ 170,000.00",
      net_pay: "₦ 150,000.00",
    },

  ];


  return (
    <>
      <div className="pb-20 mr-10">

        {/* Salaried Employee */}
        <div>
          <h1 className="text-xl pl-3 my-4 text-gurugeeks-dark-700 font-bold">
            {" "}
            Salaried Employee
          </h1>

          <div className="bg-white flex justify-start py-12 ">
            <div className="pl-12">
              <h3 className="text-gurugeeks-dark-500 text-sm">Pay Run Name</h3>
              <h1 className="text-lg">Sept. 1 - Sept. 28</h1>
            </div>
            <div className="pl-12">
              <h3 className="text-gurugeeks-dark-500 text-sm">
                Approval Deadline
              </h3>
              <h1 className="text-lg">Sept. 26,2023 | 12:00pm</h1>
            </div>
            <div className="pl-12">
              <h3 className="text-gurugeeks-dark-500 text-sm">Pay Date</h3>
              <h1 className="text-lg">Sept. 28,2023</h1>
            </div>
            <div className="pl-12">
              <h3 className="text-gurugeeks-dark-500 text-sm">
                Number of Employes
              </h3>
              <h1 className="text-lg">25</h1>
            </div>
          </div>
        </div>
        
        {/* Pay Run Break down */}
        <div>
          <h1 className="text-xl pl-3 my-4 text-gurugeeks-dark-700 font-bold">
            {" "}
            Pay Run Breakdown
          </h1>
          <div className="bg-white py-12 px-12 ">
            <div className="flex justify-between pb-6">
              <p>Salary</p>
              <p> ₦ 7,000,000.00</p>
            </div>
            <div className="flex justify-between pb-6">
              <p>Tax</p>
              <p> ₦ 7,000.00</p>
            </div>
            <div className="flex justify-between pb-6">
              <p>Reimbursement</p>
              <p> ₦ 40,000.00</p>
            </div>
            <div className="flex justify-between pb-6">
              <p>Pension</p>
              <p> ₦ 7,000,000.00</p>
            </div>
            <div className="flex justify-between pb-6">
              <p>Gross Pay</p>
              <p> ₦ 500.00</p>
            </div>

            <div className="flex justify-between pb-6">
              <p>Gross Pay</p>
              <p> ₦ 5000.00</p>
            </div>
            {/*   Total Pay */}
            <div className="flex justify-between pt-2">
              <p className="text-lg font-bold">Payroll Cost</p>
              <p className="text-lg font-bold"> ₦ 15,000,000.00</p>
            </div>
          </div>
        </div>
        <FilterTab search={true} filter={true} />

          {/*------------------------------- Table Section --------------------------------------- */}
        
        <TableContainer tableHeader={processPayRunsHeaders}>
          {processData.map((data) => {
            return (
              <TableRowItem key={data.id} style={{ backgroundColor: data.employee && data.salary && data.tax && data.reimbursement && data.transport_allowance && data.pension && data.gross_pay && data.net_pay ? "#ffffff" : "#ff0000" }}>
                <td>
                  <div className="flex justify-normal items-center">
                    <div className="w-14 px-3"> <img 
                      src={Asset} 
                      alt=""
                      />
                    </div>
                    <div>
                      {data.employee}
                      <p className="text-sm text-gray-500">{data.role}</p>
                    </div>
                    
                  </div>
                </td>
                <td> {data.salary}</td>
                <td>{data.tax}</td>
                <td>{data.reimbursement}</td>
                <td>{data.transport_allowance}</td>
                <td>{data.pension}</td>
                <td>{data.gross_pay}</td>
                <td>{data.net_pay}</td>
              </TableRowItem>
            );
          })}
        </TableContainer>


        <div className="flex justify-end items-center my-20 gap-4">
          <Button size={"lg"} type="button" color={"gray"}>
            Save Draft
          </Button>
          <Button size={"lg"} type="button" icon={<FaPlus size="24" />}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProcessPayRuns;
