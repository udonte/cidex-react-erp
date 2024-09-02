import React from "react";

// The CustomDatePicker component takes two props: selectedDate and setSelectedDate
const CustomDatePicker = ({ selectedDate, setSelectedDate }) => {
  // This function is called when the date input value changes
  const handleDateChange = (e) => {
    // Get the new selected date from the input element
    const newSelectedDate = e.target.value;

    // Call the setSelectedDate function with the new date to update the state
    setSelectedDate(newSelectedDate);
  };

  // Render an input element with type "date"
  // The value of the input is set to the selectedDate prop
  // The onChange event handler calls handleDateChange when the input value

  return (
    <div className="flex flex-col w-full">
      <label htmlFor="" className="mb-2">
        Choose Pay Day
      </label>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="w-full border rounded py-2 px-4 focus:outline-2 focus:outline-gurugeeks-orange-700 h-full bg-gray-100"
      />
    </div>
  );
};

export default CustomDatePicker;
