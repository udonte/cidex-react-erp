import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchEmployees } from "../../../features/HRM_features/employee/employee.slice";
import { useSelector } from "react-redux";
import { selectEmployeeSlice } from "../../../features/HRM_features/employee/employee.selector";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import NameTag from "./NameTag";

const EmployeeSearchDropdown = ({ callback }) => {
  const dispatch = useDispatch();
  const { employees } = useSelector(selectEmployeeSlice);
  const [showEmployee, setShowEmployee] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
  return (
    <div className="relative w-full">
      <div className="flex items-center gap-x-2">
        {employees.length > 0 ? (
          <div className="flex items-center gap-x-2">
            <NameTag
              firstName={selectedEmployee ? selectedEmployee?.info.name : "U"}
            />
            <p className=" font-semibold">
              {selectedEmployee ? selectedEmployee?.info.name : "Unassigned"}
            </p>
          </div>
        ) : (
          "No Employee available"
        )}
        <div
          onClick={() => {
            setShowEmployee(!showEmployee);
          }}
          className="flex items-center gap-x-2"
        >
          <p className="text-sm text-gurugeeks-green-600 cursor-pointer">
            Change
          </p>{" "}
          {showEmployee ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {showEmployee && (
        <div className="absolute z-50 w-full max-h-[400px] overflow-y-auto bg-white py-2 shadow-xl my-2 border rounded-lg">
          <div>
            <div className="px-5">
              <div className="w-full h-[42px] px-4 gap-x-2 text-gurugeeks-dark-500 rounded border-2 bg-white flex items-center">
                <FaSearch className="text-gurugeeks-dark-500" />
                <input
                  className="w-full placeholder:text-sm font-normal focus:outline-none"
                  placeholder={"Search your team"}
                  // value={searchTerm}
                  // onChange={(e) => search(e.target.value)}
                />
              </div>
            </div>
            {employees && employees.length > 0 ? (
              <div>
                {employees.map((employee, index) => (
                  <div
                    onClick={() => {
                      setSelectedEmployee(employee);
                      callback(employee.id);
                    }}
                    key={index}
                    className="flex items-center px-5 h-[50px] border-b-2 gap-x-3 hover:bg-gurugeeks-dark-100"
                  >
                    <NameTag firstName={employee.info.name} />
                    <div>
                      <p className="capitalize font-semibold">
                        {employee.info.name}
                      </p>
                      <p className="capitalize text-xs">
                        {" "}
                        {employee.info.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p className="font-bold h-[40px] w-full flex items-center justify-center">
                  No Employee available
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeSearchDropdown;
