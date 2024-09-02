import { toast } from "react-toastify";
import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const fetchProjectsThunk = async () => {
  try {
    const response = await axiosInstance.get(
      `/projects/?per_page=8&page=1&sort_by=desc&order_by=id&load_related=true`
    );
    return response.data.results;
  } catch (error) {
    return error;
  }
};

export const addProjectsThunk = async (
  projectData = {
    client_name: "",
    name: "",
    description: "",
    supervisors: [""],
  }
) => {
  try {
    const res = await axiosInstance.post("/projects/", projectData);
    return res.data;
  } catch (error) {
    toast.error("Error adding a project");
    return error;
  }
};
export const putActivityThunk = async (
  projectActivtyData = {
    project_id: "",
    activity_ids: [],
  }
) => {
  try {
    const res = await axiosInstance.put("/projects/", projectActivtyData);
    return res.data;
  } catch (error) {
    toast.error("Error adding a project");
    return error;
  }
};
