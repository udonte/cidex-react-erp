import React, { useState } from "react";
import BackButton from "../../components/common/BackButton";
import Button from "../../components/landingPage/Button/Button";
import EmployeeForm from "../../../components/employee/Modals/AddEmployeeModal/EmployeeForm";

const nav = [{ title: "Personal details" }, { title: "Company details" }];

const AddEmployee = () => {
  const [form, setForm] = useState(0);

  return (
    <div className="flex w-full h-full">
      <div className="w-[40%]">
        <div className="flex items-center gap-x-2">
          <BackButton />
          <p className="text-2xl text-gray-500 font-bold">Add New Employee</p>
        </div>
        {nav.map((item, index) => (
          <div
            onClick={() => {
              setForm(index);
            }}
            className="flex items-center gap-2 cursor-pointer my-5"
          >
            <div
              className={`${
                index === form
                  ? "h-[3px] w-6 bg-black rounded"
                  : "h-[1px] w-6 bg-black"
              }`}
            ></div>
            <p className={`${index === form ? " font-bold" : ""}`}>
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white w-full h-full">
          <EmployeeForm />
      </div>
    </div>
  );
};

export default AddEmployee;
