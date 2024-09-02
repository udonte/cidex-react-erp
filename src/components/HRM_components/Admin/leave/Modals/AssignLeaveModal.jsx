import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectEmployeeSlice } from "../../../../../features/HRM_features/employee/employee.selector";
import { fetchEmployees } from "../../../../../features/HRM_features/employee/employee.slice";
import EmployeeSearch from "../../../_common/EmployeeSearch";
import CustomDropdown from "../../../_common/CustomDropDown";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import Button from "../../../_common/Button/Button";
import MiddleModalContainer from "../../../_common/MiddleModalContainer/MiddleModalContainer";

const options = [
  { value: "Vacation", label: "Vacation" },
  { value: "Naming", label: "Naming" },
  { value: "Marriage", label: "Marriage" },
];

const AssignLeaveModal = () => {
  const dispatch = useDispatch();
  const closeModals = () => dispatch(closeAllModals());

  const { employees } = useSelector(selectEmployeeSlice);

  const [leavebalance, setleavebalance] = useState(12);
  const [fromdate, setfromdate] = useState(new Date("2023-08-31"));
  const [todate, settodate] = useState(new Date("2023-10-01"));
  const [reason, setreason] = useState("My reason for my leave is...");
  const [selectedFile, setselectedFile] = useState(null); //file upload
  const [assignLeaveData, setAssignLeaveData] = useState({
    employee_ids: [],
    leave_type_id: "",
    start_date: "",
    end_date: "",
    reason: "",
    attachments: "",
  });

  const handleFromDateChange = (e) => {
    setfromdate(new Date(e.target.value));
  };

  const handleToDateChange = (e) => {
    settodate(new Date(e.target.value));
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setselectedFile(file);
  };

  const handleSetEmployee = (employee) => {
    setAssignLeaveData((prev) => ({
      ...prev,
      employee_ids: [...prev.employee_ids, employee.id],
    }));
  };
  const handleDeleteEmployee = (employeeIdToRemove) => {
    setAssignLeaveData((prevState) => ({
      ...prevState,
      employee_ids: prevState.employee_ids.filter(
        (id) => id !== employeeIdToRemove.id
      ),
    }));
  };

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <MiddleModalContainer title="Assign Leave">
      <div className=" px-8 py-4 w-[850px] h-[500px] overflow-y-scroll">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <EmployeeSearch
            setEmployee={handleSetEmployee}
            deleteEmployee={handleDeleteEmployee}
            employees={employees}
          />

          {/* row input  */}
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col w-full">
              <CustomDropdown label={"Leave Type"} options={options} />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="" className="mb-2">
                Leave Balance
              </label>
              <input
                type="number"
                value={leavebalance}
                onChange={(e) => setleavebalance(e.target.value)}
                className="w-full border rounded py-2 px-4 focus:outline-2 focus:outline-gurugeeks-orange-700 h-full bg-gray-100"
              />
            </div>
          </div>

          {/* row input  */}
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col w-full">
              <label htmlFor="" className="mb-2">
                From
              </label>
              <input
                type="date"
                value={fromdate.toISOString().split("T")[0]}
                onChange={handleToDateChange}
                className="w-full border rounded py-2 px-4 focus:outline-2 focus:outline-gurugeeks-orange-700 h-full bg-gray-100"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="" className="mb-2">
                To
              </label>
              <input
                type="date"
                value={todate.toISOString().split("T")[0]}
                onChange={handleFromDateChange}
                className="w-full border rounded py-2 px-4 focus:outline-2 focus:outline-gurugeeks-orange-700 h-full bg-gray-100"
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="" className="mb-2">
              Reason
            </label>
            <textarea
              className="w-full h-15 border rounded py-2 px-4 focus:outline-2 focus:outline-gurugeeks-orange-700 h-full bg-gray-100"
              value={reason}
              cols={40}
              rows={3}
              placeholder="Give us your reason.."
              onChange={(e) => setreason(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="" className="mb-2">
              Attachment
            </label>
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .gif"
              onChange={handleFileSelect}
              className="w-[50%] border rounded focus:outline-2 focus:outline-gurugeeks-orange-700 h-[50px] bg-gray-100"
            />
            {selectedFile && (
              <div>
                <p>File Name: {selectedFile.name}</p>
              </div>
            )}
          </div>

          <div className="flex items-center ml-auto gap-4">
            <p className="text-green-600 cursor-pointer" onClick={closeModals}>
              Cancel
            </p>
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </MiddleModalContainer>
  );
};

export default AssignLeaveModal;
