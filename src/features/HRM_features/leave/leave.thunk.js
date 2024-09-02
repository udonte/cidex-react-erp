import axiosInstance from "../../../utils/helperFunctions/axios.utils";

export const fetchLeaveThunk = async (
  order_by = "created_at",
  sort_by = "desc"
) => {
  // "recruitment/jobs/?per_page=10&page=1&sort_by=desc&order_by=id&is_active=false&load_related=false";
  try {
    const res = await axiosInstance.get(
      `/leaves/?per_page=10&page=1&sort_by=asc&order_by=created_at`
    );
    return res.data.results;
  } catch (error) {
    return error;
  }
};
export const fetchLeaveTypeThunk = async (
  order_by = "created_at",
  sort_by = "desc"
) => {
  // "recruitment/jobs/?per_page=10&page=1&sort_by=desc&order_by=id&is_active=false&load_related=false";
  try {
    const res = await axiosInstance.get(
      `/leaves/?per_page=10&page=1&sort_by=asc&order_by=created_at`
    );
    return res.data.results;
  } catch (error) {
    return error;
  }
};

export const addLeaveThunk = () => {
  try {
  } catch (error) {}
};

export const approveLeaveThunk = () => {
  try {
  } catch (error) {}
};
export const addLeaveTypeThunk = async (
  leaveTypesData = {
    name: "string",
    total_days: 15,
    first_approval: false,
    second_approval: true,
    all_employee: false,
    all_manager: false,
    only_group: false,
  }
) => {
  try {
    const number = { total_days: parseInt(leaveTypesData.total_days) };
    const res = await axiosInstance.post("/leaves/types/", {
      ...leaveTypesData,
      ...number,
    });
  } catch (error) {}
};
