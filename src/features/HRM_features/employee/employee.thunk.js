import { toast } from "react-toastify";
import axiosInstance from "../../../utils/helperFunctions/axios.utils";

export const fetchEmployeeThunk = async (url) => {
  try {
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    return error;
  }
};
export const fetchTotalEmployeeThunk = async () => {
  // "recruitment/jobs/?per_page=10&page=1&sort_by=desc&order_by=id&is_active=false&load_related=false";
  try {
    const res = await axiosInstance.get(`/employees/count`);
    return res;
  } catch (error) {
    return error;
  }
};

export const fetchEmployeeDesignationThunk = async () => {
  // "recruitment/jobs/?per_page=10&page=1&sort_by=desc&order_by=id&is_active=false&load_related=false";
  try {
    const res = await axiosInstance.get(
      `/employees/?sort_by=asc&per_page=5&page=1&order_by=created_at&load_related=true`
    );
    return res.data.results;
  } catch (error) {
    return error;
  }
};

export const createEmployeeThunk = async (
  employeeData = {
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    address: "",
    department_ids: [],
    designation_ids: [],
    date_of_birth: "",
    date_hired: "",
    gender: "",
    is_active: true,
    is_confirmed: false,
  }
) => {
  try {
    const res = await axiosInstance.post("employees/", employeeData);
    if (res.status === 201) {
      console.log(res);
      return res.data;
    }
  } catch (error) {
    toast.error(error.data.detail.message);
    return error.data.detail;
  }
};

export const postBankDetailsThunk = async (
  bankDetails = {
    account_number: "",
    bank_name: "",
    bvn: "",
    employee_id: "",
  }
) => {
  try {
    const response = await axiosInstance.post(
      bankDetails,
      "/employee/bank_details/"
    );
    // return response;
  } catch (error) {
    toast.error(error);
    // return error;
  }
};
export const postDocumentThunk = async (
  bankDetails = {
    employee_id: "",
    url: "",
  }
) => {
  try {
    const response = await axiosInstance.post(bankDetails, "/documents/");
  } catch (error) {
    return error;
  }
};

export const postEmergencyContactThunk = async (
  bankDetails = {
    account_number: "",
    bank_name: "",
    bvn: "",
    employee_id: "",
  }
) => {
  try {
    const response = await axiosInstance.post(
      bankDetails,
      "/employee/contacts/"
    );
  } catch (error) {
    return error;
  }
};

export const deleteEmployeeDetailsByIdThunk = async (employee_id) => {
  try {
    const response = await axiosInstance.delete(`/employees/${employee_id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Request failed with status:", error.response.status);
      console.error("Response data:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Request setup error:", error.message);
    }
    // Propagate the error so that it can be handled further if needed
    throw error;
  }
};
