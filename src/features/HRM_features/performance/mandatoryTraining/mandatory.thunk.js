import { toast } from "react-toastify";
import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const fetchMandatoryTrainingThunk = async () => {
  try {
    const res = await axiosInstance.get(
      "mandatory_trainings/?per_page=10&page=1&sort_by=asc&order_by=created_at"
    );
    return res.data;
  } catch (error) {

  }
};
export const postMandatoryTrainingThunk = async (
  courseDetail = {
    title: "string",
    resource: "string",
    link: "string",
    is_active: true,
  }
) => {
  try {
    const res = await axiosInstance.post("mandatory_trainings/", courseDetail);
    return res.data;
  } catch (error) {
    toast.error(error.data.detail);
  }
};
