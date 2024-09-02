import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../_common/Button/Button";
import MiddleModalContainer from "../../../_common/MiddleModalContainer/MiddleModalContainer";
import CustomDropdown from "../../../_common/CustomDropDown";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";

const CreateSchedule = () => {
  const [scheduleFormData, setScheduleFormData] = useState({
    pay_period_name: "",
    month_day: "",
    approved_day: "",
  });

  const handleDropDownSelect = (name, selectedOption) => {
    setScheduleFormData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  const handleMonthDate = (e) => {
    const { name, value } = e.target;
    const dateValue = new Date(value);
    const formattedDate = dateValue.toISOString().split("T")[0];
    setScheduleFormData((prevData) => ({ ...prevData, [name]: formattedDate }));
  };
  const handleApprovedDate = (e) => {
    const { name, value } = e.target;
    const dateValue = new Date(value);
    const formattedDate = dateValue.toISOString().split("T")[0];
    setScheduleFormData((prevData) => ({ ...prevData, [name]: formattedDate }));
  };

  const dispatch = useDispatch();
  const closeModals = () => dispatch(closeAllModals());
  const periodOptions = [
    { label: "Monthly Pay Day", value: "monthly_pay_day" },
    { label: "Weekly Pay Day", value: "weekly_pay_day" },
    { label: "Bi-Weekly Pay Day", value: "biweekly_pay_day" },
  ];

  return (
    <MiddleModalContainer title={"Create New Schedule"}>
      <form className="bg-white px-8 py-4 w-[650px] h-[420px]">
        <form className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col">
            <label htmlFor="pay_period_name">Pay Period Name</label>
            <CustomDropdown
              options={periodOptions}
              onSelect={(selectedOption) => {
                handleDropDownSelect("pay_period_name", selectedOption);
              }}
            />
          </div>

          <div className="w-full flex-col">
            <label htmlFor="month_day">Day of the Month</label>
            <input
              className="w-full border rounded focus:outline-2 bg-gray-100 px-4 h-[45px] border-b-2  py-2 hover:bg-gray-100 cursor-pointer"
              type="date"
              name="month_day"
              value={setScheduleFormData.month_day}
              onChange={handleMonthDate}
            />
          </div>

          <div className="w-full flex-col">
            <label htmlFor="approved_day">Approved Date</label>
            <input
              className="w-full border rounded focus:outline-2 bg-gray-100 px-4 h-[45px] border-b-2  py-2 hover:bg-gray-100 cursor-pointer"
              type="date"
              name="approved_day"
              value={setScheduleFormData.approved_day}
              onChange={handleApprovedDate}
            />
          </div>

          <div className="flex items-center ml-auto gap-4">
            <p className="text-green-600 cursor-pointer" onClick={closeModals}>
              Cancel
            </p>
            <Button>Submit</Button>
          </div>
        </form>
      </form>
    </MiddleModalContainer>
  );
};

export default CreateSchedule;
