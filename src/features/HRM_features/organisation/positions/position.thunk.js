import { toast } from "react-toastify";
import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const getPositionsThunk = async () => {
  try {
    const response = await axiosInstance.get("/organization/designations/");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postPositionsThunk = async (
  positionDetails = {
    name: "string",
  }
) => {
  try {
    const response = await axiosInstance.post(
      "/organization/designations/",
      positionDetails
    );
    return response.data;
  } catch (error) {
    toast.error(error.data.detail);
  }
};

export const deletePositionByIdThunk = async (position_id) => {
  try {
    const response = await axiosInstance.delete(
      `/organization/designations/${position_id}`
    );
    return response.status;
  } catch (error) {
    toast.error(error.data.detail);
  }
};
