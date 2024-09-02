import React, { useEffect, useState } from "react";
import { AiOutlinePercentage } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";
import { toast } from "react-toastify";
import Button from "../../../_common/Button/Button";
import CustomDropdown from "../../../_common/CustomDropDown";
import MiddleModalContainer from "../../../_common/MiddleModalContainer/MiddleModalContainer";
import { createSalaryComponent } from "../../../../../features/HRM_features/benefitManagement/benefit.slice";
import { useDispatch } from "react-redux";
import CustomInput from "../../../_common/CustomInput";
import { getPositions } from "../../../../../features/HRM_features/organisation/positions/position.slice";
import { useSelector } from "react-redux";
import { selectPositions } from "../../../../../features/HRM_features/organisation/positions/position.selectors";

const AddSalaryComponent = () => {
  const { positions } = useSelector(selectPositions);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    designation_ids: [],
    earning_type: "",
    calculation_type: "",
    parentage_basics: 0,
    amount: 0,
    is_active: true,
  });

  useEffect(() => {
    dispatch(getPositions());
  }, []);

  const componentNames = [
    { value: "basic_salary", label: "Basic Salary" },
    { value: "pension", label: "Pension" },
    { value: "tax", label: "Tax" },
    { value: "leave_bonus", label: "Leave Bonus" },
    { value: "medical_allowance", label: "Medical Allowance" },
  ];

  const assignees = [
    { value: "lead", label: "Lead" },
    { value: "all_employees", label: "All Employees" },
    { value: "interns", label: "Interns" },
    { value: "Contractor", label: "Contractors" },
    { value: "medical_allowance", label: "Medical Allowance" },
  ];

  const handleIsSalaryActive = () => {
    setFormData((prev) => ({ ...prev, is_active: !formData.is_active }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelect = (name, selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: [selectedOption],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSalaryComponent(formData));
  };

  return (
    <MiddleModalContainer title={"Add Salary Component"}>
      <div className="bg-white px-8 py-4">
        <form
          className="h-full flex flex-col gap-4 justify-start"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex flex-col">
            <label htmlFor="job_type">Component Name</label>
            <CustomInput
              handleInputChange={handleInputChange}
              value={formData.name}
              name={"name"}
            />
          </div>

          <div className="w-full flex flex-col">
            <CustomDropdown
              onSelect={(selectedOption) => {
                handleSelect("designation_ids", selectedOption);
              }}
              label="Select Designation"
              options={positions?.map((items) => ({
                value: items.id,
                label: items.name,
              }))}
            />
          </div>

          <div className="flex items-center gap-8 ">
            <div className="w-full flex-col justify-center gap-4">
              <label htmlFor="type">Type</label>
              <div className="flex items-center gap-4 text-sm mt-3">
                <input
                  type="checkbox"
                  name="earning_type"
                  checked={formData.earning_type === "earnings"}
                  className="w-6 h-6 "
                  onChange={() => {
                    setFormData((prev) => ({
                      ...prev,
                      earning_type: "earnings",
                    }));
                  }}
                />
                Earning
                <input
                  type="checkbox"
                  name="earning_type"
                  checked={formData.earning_type === "deduction"}
                  className="w-6 h-6 "
                  onChange={() => {
                    setFormData((prev) => ({
                      ...prev,
                      earning_type: "deduction",
                    }));
                  }}
                />
                Deductions
              </div>
            </div>

            <div className="w-full flex-col justify-center gap-4">
              <label htmlFor="calculation_type">Calculation Type</label>
              <div className="flex items-center gap-4 text-sm mt-3">
                <input
                  type="checkbox"
                  name="flat_amount"
                  checked={formData.calculation_type === "flat amount"}
                  className="w-6 h-6 "
                  onChange={() => {
                    setFormData((prev) => ({
                      ...prev,
                      calculation_type: "flat amount",
                    }));
                  }}
                />
                Flat Amount
                <input
                  type="checkbox"
                  name="calculation_type_percentage"
                  checked={formData.calculation_type === "percentage"}
                  className="w-6 h-6 a"
                  onChange={() => {
                    setFormData((prev) => ({
                      ...prev,
                      calculation_type: "percentage",
                    }));
                  }}
                />
                Percentage
              </div>
            </div>
          </div>
          {formData.calculation_type === "percentage" && (
            <div className="w-full">
              <label htmlFor="percentage_of_basics">How many % of Basics</label>
              <div className="relative">
                <input
                  className="p-3 w-full h-14 border pl-12 bg-slate-50 rounded-md"
                  type="text"
                  name="parentage_basics"
                  value={formData.parentage_basics}
                  onChange={handleInputChange}
                />
                <span className="absolute left-2 top-4">
                  <AiOutlinePercentage size={25} color={"gray"} />
                </span>
              </div>
            </div>
          )}

          <div className="w-full">
            <label htmlFor="amount">Enter Amount</label>
            <div className="relative">
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md pl-12"
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
              />
              <span className="absolute left-2 top-3">
                <TbCurrencyNaira size={30} color={"gray"} />
              </span>
            </div>
          </div>

          {/* Custom checkboxes */}
          <div className="w-full flex items-center gap-4">
            <input
              type="checkbox"
              name="is_active"
              checked={formData.is_active}
              onChange={handleIsSalaryActive}
              className="h-6 w-6"
            />
            <label htmlFor="active">Mark this as active</label>
          </div>

          <div className="flex justify-end items-center gap-x-2 py-2">
            <Button size={"lg"} type="button" color={"secondary"}>
              Cancel
            </Button>
            <Button size={"lg"} type="submit">
              {/* {isLoading ? (
                <div className="w-14">
                  <Spinner />
                </div>
              ) : ( */}
              Submit
              {/* )} */}
            </Button>
          </div>
        </form>
      </div>
    </MiddleModalContainer>
  );
};

export default AddSalaryComponent;
