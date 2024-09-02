import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const fetchCoursesThunk = async () => {
  try {
    const res = axiosInstance.get(
      "/courses/?per_page=10&page=1&sort_by=desc&order_by=id"
    );

  } catch (error) {

  }
};
export const createCoursesThunk = async (
  courseData = {
    title: "",
    provider: "",
    link: "",
    description: "",
    department_ids: [""],
    duration_weeks: 0,
    start_week: "",
    is_approved: false,
  }
) => {
  try {
    const courseInt = { duration_weeks: parseInt(courseData.duration_weeks) };
    const res = await axiosInstance.get("/courses/", {
      ...courseData,
      ...courseInt,
    });
  } catch (error) {
  }
};
