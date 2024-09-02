import React, { useEffect, useState } from "react";
import TopProgressBar from "./TopProgressBar";
import {
  PersonalDetails,
  BankingDetails,
  Documents,
  EmergencyContacts,
} from "./EmployeeForm";
import EmployeeNavigation from "./EmployeeNavigation";
import { useDispatch, useSelector } from "react-redux";
import { BiCheck } from "react-icons/bi";
import { selectEmployeeSlice } from "../../../../../../features/HRM_features/employee/employee.selector";
import MiddleModalContainer from "../../../../_common/MiddleModalContainer/MiddleModalContainer";
import Modal from "../../../../_common/ModalContainer/ModalConatiner";

const AddEmployeeModal = ({ isOpen }) => {
  const employeeId = localStorage.getItem("created_employee");
  const documentId = false;
  const bankId = false;
  const emergencyId = false;

  const [pageIndex, setPageIndex] = useState(0);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (employeeId && !bankId) {
  //     setPageIndex(1);
  //   } else if (employeeId && bankId && !documentId) {
  //     setPageIndex(2);
  //   } else if (employeeId && documentId) {
  //     setPageIndex(3);
  //   }
  // }, [employeeId, bankId]);

  const tabbedPages = () => {
    // if (pageIndex === 0) {
    return <PersonalDetails />;
    // } else if (pageIndex === 1) {
    //   return <BankingDetails employeeId={employeeId} />;
    // } else if (pageIndex === 2) {
    //   return <Documents employeeId={employeeId} />;
    // } else if (pageIndex === 3) {
    //   return <EmergencyContacts employeeId={employeeId} />;
    // }
  };

  return (
    <Modal
      title="Add Employee"
      isOpen={isOpen}
      callback={() => localStorage.removeItem("formData")}
    >
      <div className="">
        <div className="flex h-full">
          {/* <div>
            <button
              disabled={employeeId}
              onClick={() => setPageIndex(0)}
              className={` h-14 w-64 flex items-center justify-between px-6 ${
                pageIndex === 0
                  ? "bg-[#F3A1724D] border-l-4 border-gurugeeks-orange-500"
                  : employeeId
                  ? "bg-green-50 border-l-4 border-green-500"
                  : ""
              } `}
            >
              <p className="text-left"> Personal Details</p>
              {employeeId && (
                <div className="h-6 w-6 bg-green-500 rounded-full">
                  <BiCheck className="text-white text-2xl font-bold" />
                </div>
              )}
            </button>
            <button
              disabled={bankId}
              onClick={() => setPageIndex(1)}
              className={` h-14 w-64 flex items-center justify-between px-6 ${
                pageIndex === 1
                  ? "bg-[#F3A1724D] border-l-4 border-gurugeeks-orange-500"
                  : bankId
                  ? "bg-green-50 border-l-4 border-green-500"
                  : ""
              } `}
            >
              <p className="text-left">Bank Details</p>
              {bankId && (
                <div className="h-6 w-6 bg-green-500 rounded-full">
                  <BiCheck className="text-white text-2xl font-bold" />
                </div>
              )}
            </button>
            <button
              disabled={documentId}
              onClick={() => setPageIndex(2)}
              className={` h-14 w-64 flex items-center justify-between px-6 ${
                pageIndex === 2
                  ? "bg-[#F3A1724D] border-l-4 border-gurugeeks-orange-500"
                  : documentId
                  ? "bg-green-50 border-l-4 border-green-500"
                  : ""
              } `}
            >
              <p className="text-left">Document</p>
              {documentId && (
                <div className="h-6 w-6 bg-green-500 rounded-full">
                  <BiCheck className="text-white text-2xl font-bold" />
                </div>
              )}
            </button>
            <button
              disabled={emergencyId}
              onClick={() => setPageIndex(3)}
              className={` h-14 w-64 flex items-center justify-between px-6 ${
                pageIndex === 3
                  ? "bg-[#F3A1724D] border-l-4 border-gurugeeks-orange-500"
                  : emergencyId
                  ? "bg-green-50 border-l-4 border-green-500"
                  : ""
              } `}
            >
              <p className="text-left">Emergency Contact</p>
              {emergencyId && (
                <div className="h-6 w-6 bg-green-500 rounded-full">
                  <BiCheck className="text-white text-2xl font-bold" />
                </div>
              )}
            </button>
          </div> */}

          <div className="px-10 w-full">
            <div className="flex flex-col justify-between h-full">
              <div>{tabbedPages()}</div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddEmployeeModal;
