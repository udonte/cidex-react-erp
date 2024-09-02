import { toast } from "react-toastify";
import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const fetchActivityThunk = async () => {
  try {
    const response = await axiosInstance.get(`/projects/activities/`);
    return response.data.results;
  } catch (error) {
    return error;
  }
};

export const addActivityThunk = async (
  activityData = {
    name: "",
  }
) => {
  try {
    const res = await axiosInstance.post("/projects/activities/", activityData);
    return res.data;
  } catch (error) {
    // toast.error("Error adding a project");
    return error;
  }
};
