import axiosInstance from "../../../../utils/helperFunctions/axios.utils";
export const fetchScheduledInterviewThunk = async () => {
  try {
    const response = await axiosInstance.get(
      "/recruitment/interviews/?page=1&per_page=10&order_by=-id&export_to_excel=false&sort_by=desc&load_related=false"
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const fetchScheduleByApplicationThunk = async (application_id) => {
  try {
    const response = await axiosInstance.get(
      `/recruitment/interviews/?application_id=${application_id}&page=1&per_page=10&order_by=-id&export_to_excel=false&sort_by=desc&load_related=false`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const deleteScheduledInterviewThunk = async (application_id) => {
  try {
    const response = await axiosInstance.delete(
      `/recruitment/interviews/${application_id}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// ?application_id=065cf6a59a3f7d778000e5a5a009863a&page=1&per_page=10&order_by=-id&export_to_excel=false&sort_by=desc&load_related=false
export const scheduleInterviewThunk = async (
  scheduleData = {
    application_id: "",
    title: "",
    date: "",
    start_time: "",
    end_time: "",
    note: "",
    status: "pending",
    interview_link: "",
  }
) => {
  try {
    const response = await axiosInstance.post(
      "/recruitment/interviews/",
      scheduleData
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const editScheduledInterviewThunk = async (
  scheduleData = {
    application_id: "",
    title: "",
    date: "",
    start_time: "",
    end_time: "",
    note: "",
    status: "pending",
    interview_link: "",
  }
) => {
  try {
    const response = await axiosInstance.put(
      `/recruitment/interviews/${scheduleData.application_id}`,
      scheduleData
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
