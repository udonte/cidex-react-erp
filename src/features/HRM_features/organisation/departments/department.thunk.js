import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const getDepartmentsThunk = async () => {
  try {
    const response = await axiosInstance.get(
      "/organization/departments/?per_page=10&page=1&sort_by=asc&order_by=created_at&load_related=true"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getDepartmentsByIdThunk = async (department_id) => {
  try {
    const response = await axiosInstance.get(
      `/organization/departments/${department_id}?per_page=10&page=1&sort_by=asc&order_by=created_at&load_related=true`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postDepartmentsThunk = async (departmentDetails) => {
  try {
    const response = await axiosInstance.post(
      "/organization/departments/",
      departmentDetails
    );
    return response.data;
  } catch (error) {}
};

export const deleteDepartmentsByIdThunk = async (department_id) => {
  try {
    const response = await axiosInstance.delete(
      `/organization/departments/${department_id}`
    );
    return response.data;
  } catch (error) {}
};
