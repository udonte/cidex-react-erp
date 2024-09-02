import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  BreadCrumbs,
  Button,
  Checkbox,
  CustomInput,
  TableContainer,
  TableRowItem,
  TopTab,
} from "../../../../components/HRM_components";
import { ImCross } from "react-icons/im";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeSheetCards from "../../../../components/HRM_components/Admin/timesheet/TimeSheetCards";
import CustomDropdown from "../../../../components/HRM_components/_common/CustomDropDown";
import { useDispatch } from "react-redux";
import { fetchProjects } from "../../../../features/HRM_features/timesheet/project/projects.slice";
import { fetchActivity } from "../../../../features/HRM_features/timesheet/activity/activity.slice";
import { useSelector } from "react-redux";
import { selectProjectSlice } from "../../../../features/HRM_features/timesheet/project/projects.selector";

function TimesheetApp() {
  const dispatch = useDispatch();
  const { projectData, isLoading } = useSelector(selectProjectSlice);
  const [selectedProject, setSelectedProject] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [timeEntriesSets, setTimeEntriesSets] = useState([]);
  const [savedData, setSavedData] = useState(null);
  const [date2, setDat2] = useState([]);

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchActivity());
  }, [dispatch]);

  useEffect(() => {
    // Populate dates based on the selected start date
    const days = [...Array(7).keys()].map((i) => {
      const newDate = new Date(startDate);
      newDate.setDate(startDate.getDate() - ((startDate.getDay() + 6) % 7) + i);
      return newDate;
    });
    setDat2(days);
    const initialTimeEntries = days.map((day) => ({
      date: format(day, "EEE dd"), // Format to "Mon 10"
      hours: 0,
    }));

    // Add the initial set of weeks
    setTimeEntriesSets([initialTimeEntries]);
    setDat2(initialTimeEntries.map((entry) => entry.date));
  }, [startDate]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleHoursChange = (setIndex, entryIndex, hours) => {
    const updatedTimeEntriesSets = [...timeEntriesSets];
    updatedTimeEntriesSets[setIndex][entryIndex].hours = hours;
    setTimeEntriesSets(updatedTimeEntriesSets);
  };

  const handleDropSelect = (setIndex, value, name) => {
    const updatedTimeEntriesSets = [...timeEntriesSets];
    updatedTimeEntriesSets[setIndex][name] = value;
    setTimeEntriesSets(updatedTimeEntriesSets);
  };

  const handleAddRow = (setIndex) => {
    const newDate = new Date(
      timeEntriesSets[setIndex][timeEntriesSets[setIndex].length - 1].date
    );
    newDate.setDate(newDate.getDate() + 1);

    const newRow = {
      date: newDate.toISOString().split("T")[0],
      hours: 0,
    };

    const updatedTimeEntriesSets = [...timeEntriesSets];
    updatedTimeEntriesSets[setIndex] = [...timeEntriesSets[setIndex], newRow];

    setTimeEntriesSets(updatedTimeEntriesSets);
  };

  const handleDeleteRow = (setIndex, entryIndex) => {
    const updatedTimeEntriesSets = [...timeEntriesSets];
    updatedTimeEntriesSets[setIndex].splice(entryIndex, 1);
    setTimeEntriesSets(updatedTimeEntriesSets);
  };

  const handleDuplicateWeek = () => {
    const firstSetDates = timeEntriesSets[0].map((entry) => entry.date);

    const duplicatedTimeEntries = firstSetDates.map((date) => ({
      date,
      hours: 0,
    }));

    setTimeEntriesSets([...timeEntriesSets, duplicatedTimeEntries]);
  };

  const handleDeleteSet = (setIndex) => {
    if (setIndex !== 0) {
      const updatedTimeEntriesSets = [...timeEntriesSets];
      updatedTimeEntriesSets.splice(setIndex, 1);
      setTimeEntriesSets(updatedTimeEntriesSets);
    }
  };

  const handleSave = () => {
    // Calculate the end date as the Sunday of the selected week
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);

    const startDateString = format(startDate, "yyyy-MM-dd");
    const endDateString = format(endDate, "yyyy-MM-dd");

    const sheetsData = timeEntriesSets.map((timeEntries) => {
      const sheet = {
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        monday_hours: timeEntries[0].hours,
        tuesday_hours: timeEntries[1].hours,
        wednesday_hours: timeEntries[2].hours,
        thursday_hours: timeEntries[3].hours,
        friday_hours: timeEntries[4].hours,
        saturday_hours: timeEntries[5].hours,
        sunday_hours: timeEntries[6].hours,
        project_name: timeEntries.project_name, // Replace with the actual project name
        activity_name: timeEntries.activity_name, // Replace with the actual activity name
        client_name: timeEntries.client_name, // Replace with the actual client name
      };
      return sheet;
    });

    const removedSheetIds = ["3fa85f64-5717-4562-b3fc-2c963f66afa6"];

    const formattedData = {
      start_date: startDateString,
      end_date: endDateString,
      sheets: sheetsData,
      removed_sheet_ids: removedSheetIds,
    };

    setSavedData(formattedData);
  };

  const filterMonday = (date) => date.getDay() === 1; // 0 is Sunday, 1 is Monday

  return (
    <>
      <BreadCrumbs />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}
      <TopTab />
      <main className="m-6 pb-[200px]">
        <div className="h-[80px] flex items-center gap-x-1 w-[420px] p-6 bg-white shadow-md rounded">
          <p>Select Week:</p>
          <DatePicker
            id="start-date"
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="yyyy-MM-dd"
            filterDate={filterMonday}
          />
        </div>
        <div className="  w-full">
          <div className="w-screen">
            <TableContainer
              tableHeader={[
                "",
                "Client",
                "Project",
                "Activity",
                `${date2[0]}`,
                `${date2[1]}`,
                `${date2[2]}`,
                `${date2[3]}`,
                `${date2[4]}`,
                `${date2[5]}`,
                `${date2[6]}`,
              ]}
            >
              {timeEntriesSets.map((timeEntries, index) => (
                <TableRowItem>
                  <td onClick={() => handleDeleteSet(index)}>
                    {index > 0 && (
                      <div className="text-red-600 flex items-center justify-center">
                        <ImCross />
                      </div>
                    )}
                  </td>
                  <td>
                    <CustomDropdown
                      onSelect={(value) =>
                        handleDropSelect(index, value, "client_name")
                      }
                      options={projectData.map((project) => ({
                        value: project.client_name,
                        label: project.client_name,
                      }))}
                    />
                  </td>
                  <td>
                    <CustomDropdown
                      onSelect={(value) =>
                        handleDropSelect(index, value, "project_name")
                      }
                      options={projectData.map((project) => {
                        return {
                          value: project.id,
                          label: project.name,
                        };
                      })}
                    />
                  </td>
                  <td>
                    <CustomDropdown
                      onSelect={(value) =>
                        handleDropSelect(index, value, "activity_name")
                      }
                      options={projectData
                        .filter(
                          (project) =>
                            project.id === timeEntriesSets[index].project_name
                        )
                        .map((item) =>
                          item.activities
                            ? item.activities.map((activity) => ({
                                label: activity.name,
                                value: activity.id,
                              }))
                            : []
                        )
                        .flat()}
                    />
                  </td>
                  {timeEntries.map((entry, entryIndex) => (
                    <td className=" h-full">
                      <input
                        className="w-full h-full border-none focus:border-none text-center"
                        type="number"
                        value={entry.hours}
                        onChange={(e) =>
                          handleHoursChange(index, entryIndex, e.target.value)
                        }
                        min="0"
                      />
                    </td>
                  ))}
                </TableRowItem>
              ))}
            </TableContainer>
          </div>
        </div>
        {/* {timeEntriesSets.map((timeEntries, index) => (
          <>
            <TimeSheetCards
              handleHoursChange={handleHoursChange}
              timeEntries={timeEntries}
              index={index}
              handleDeleteSet={handleDeleteSet}
            />
            <div></div>
          </>
        ))} */}
        {/* Render a card for each set of weeks */}

        <div className="flex justify-between items-center">
          <Button onClick={handleDuplicateWeek}>Add Row</Button>
          <div className="flex items-center gap-x-3">
            <Button color={"secondary"} onClick={handleSave}>
              Save
            </Button>
            <Button color={"secondary"} onClick={handleSave}>
              Submit Timesheet
            </Button>
          </div>
        </div>

        {savedData && (
          <div>
            <h2>Saved Data:</h2>
            <pre>{`${savedData}`}</pre>
          </div>
        )}
      </main>
    </>
  );
}

export default TimesheetApp;
