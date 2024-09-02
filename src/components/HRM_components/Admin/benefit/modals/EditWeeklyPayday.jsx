import React from "react";
import { useDispatch } from "react-redux";
import CustomDatePicker from "./CustomDatePicker";
import Button from "../../../_common/Button/Button";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import MiddleModalContainer from "../../../_common/MiddleModalContainer/MiddleModalContainer";

const EditWeeklyPayday = ({ onDateSelect, selectedDate, setSelectedDate }) => {
  const dispatch = useDispatch();
  const closeModals = () => dispatch(closeAllModals());

  const getOrdinalSuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const day = parseInt(selectedDate.split("-")[2]); // Extract the day from the date
    const ordinalSuffix = getOrdinalSuffix(day); // Calculate the ordinal suffix
    const formattedDate = `${day}${ordinalSuffix}`; // Create the formatted date
    onDateSelect(formattedDate); // Send the formatted date to the main page
    closeModals(); // Close the modal after saving
  };

  return (
    <MiddleModalContainer title={"Bi-Weekly Pay Day"}>
      <div className="bg-white px-8 py-4 w-[650px] h-[320px]">
        <form className="w-full flex flex-col gap-6">
          <CustomDatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <div className="flex items-center ml-auto gap-4">
            <p className="text-green-600 cursor-pointer" onClick={closeModals}>
              Cancel
            </p>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </form>
      </div>
    </MiddleModalContainer>
  );
};

export default EditWeeklyPayday;
