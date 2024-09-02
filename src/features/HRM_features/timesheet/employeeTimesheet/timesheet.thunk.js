import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const fetchEmployeeTimesheetThunk = async () => {
  try {
  } catch (error) {}
};
export const createTimesheetThunk = async (
  timesheetData = {
    start_date: "2023-12-12",
    end_date: "2023-12-12",
    sheets: [
      {
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        monday_hours: "P3D",
        tuesday_hours: "P3D",
        wednesday_hours: "P3D",
        thursday_hours: "P3D",
        friday_hours: "P3D",
        saturday_hours: "P3D",
        sunday_hours: "P3D",
        project_name: "string",
        activity_name: "string",
        client_name: "string",
      },
    ],
    removed_sheet_ids: ["3fa85f64-5717-4562-b3fc-2c963f66afa6"],
  }
) => {
  try {
    const response = await axiosInstance.patch("/timesheets/", timesheetData);
  } catch (error) {}
};
