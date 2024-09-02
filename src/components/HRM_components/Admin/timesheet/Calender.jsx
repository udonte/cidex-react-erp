// Calendar.js
import React, { useState } from "react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getHighlightedDates = () => {
    const highlightedDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(selectedDate);
      date.setDate(selectedDate.getDate() + i);
      highlightedDates.push(date);
    }
    return highlightedDates;
  };

  const isHighlighted = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return getHighlightedDates().some(
      (d) => d.toISOString().split("T")[0] === formattedDate
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Select Date</h1>
        <input
          type="date"
          value={selectedDate.toISOString().split("T")[0]}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
        />
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Calendar</h2>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 7 }).map((_, index) => {
              const currentDate = new Date(selectedDate);
              currentDate.setDate(selectedDate.getDate() + index);

              return (
                <div
                  key={index}
                  className={`p-2 text-center ${
                    isHighlighted(currentDate)
                      ? "bg-blue-500 text-white rounded"
                      : ""
                  }`}
                >
                  {currentDate.toLocaleDateString()}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
