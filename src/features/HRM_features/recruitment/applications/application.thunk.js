import { toast } from "react-toastify";
import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const getApplicationsThunk = async (jobId) => {
  try {
    const response = await axiosInstance.get(
      `/recruitment/applications/?page=1&per_page=10&order_by=-id&export_to_excel=false&sort_by=desc&load_related=true&filter_string=`
    );
    return response.data;
  } catch (error) {
    return error.data;
  }
};

export const postApplicationsThunk = async (
  applicationData = {
    email: "",
    phone: "",
    resume: "",
    address: "",
    first_name: "",
    last_name: "",
    gender: "",
    location: "",
    cover_letter: "",
    country: "",
    job_id: "",
    source: "",
  }
) => {
  try {
    const response = await axiosInstance.post(
      "/recruitment/applications/",
      applicationData
    );
    return response.data;
  } catch (error) {
    toast.error(error.data.detail);
  }
};

export const deleteApplicationByIdThunk = async (application_id) => {
  try {
    const response = await axiosInstance.delete(
      `/recruitment/applications/${application_id}`
    );
    return response.status;
  } catch (error) {
    toast.error(error.data.detail);
  }
};

export const updateApplicationStatusThunk = async (
  applicationStatusdata = {
    application_id: "",
    status_id: "",
  }
) => {
  try {
    const response = await axiosInstance.put(
      `/recruitment/applications/`,
      applicationStatusdata
    );
    return response.status;
  } catch (error) {
    toast.error(error.data.detail);
  }
};
