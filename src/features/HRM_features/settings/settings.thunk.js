import axiosInstance from "../../../utils/helperFunctions/axios.utils";

export const addHelpdeskCategoryThunk = async (category = { name: "" }) => {
  try {
    const response = await axiosInstance.post(
      "/helpdesk/categories/",
      category
    );
    return response.data;
  } catch (error) {
  }
};
export const fetchHelpdeskCategoryThunk = async () => {
  try {
    const response = await axiosInstance.get("/helpdesk/categories/");
    return response.data.data;
  } catch (error) {
  }
};
export const addRecruitmentStageThunk = async (stage = { name: "" }) => {
  try {
    const response = await axiosInstance.post("/recruitment/status/", stage);

    return response.data;
  } catch (error) {
  }
};
export const fetchRecruitmentStageThunk = async () => {
  try {
    const response = await axiosInstance.get(
      "/recruitment/status/?page=1&per_page=10&order_by=created_at&export_to_excel=false&sort_by=asc"
    );
    return response.data;
  } catch (error) {
  }
};

export const addScoreMetricsThunk = async (stage = { name: "" }) => {
  try {
    const response = await axiosInstance.post(
      "/recruitment/scores/metrics/",
      stage
    );

    return response.data;
  } catch (error) {
  }
};
export const fetchScoreMetricsThunk = async () => {
  try {
    const response = await axiosInstance.get(
      "/recruitment/scores/metrics/?page=1&per_page=10&order_by=created_at&export_to_excel=false&sort_by=desc"
    );
    return response.data;
  } catch (error) {
  }
};
