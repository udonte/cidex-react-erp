import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const fetchApplicantsThunk = async () => {
  try {
    const response = await axiosInstance.get(
      "/recruitment/applicants/?page=1&per_page=10&order_by=-id&export_to_excel=false&sort_by=desc&load_related=false"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchSingleApplicantThunk = async (applicant_id) => {
  try {
    const response = await axiosInstance.get(
      `/recruitment/applicants/${applicant_id}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const EditSingleApplicantThunk = async (applicant_id) => {
  try {
    const response = await axiosInstance.get(
      `/recruitment/applicants/${applicant_id}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteSingleApplicantThunk = async (applicant_id) => {
  try {
    const response = await axiosInstance.delete(
      `/recruitment/applicants/${applicant_id}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
