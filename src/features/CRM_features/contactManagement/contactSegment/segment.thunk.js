import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const fetchSegmentsThunk = async () => {
  try {
    const response = await axiosInstance.get("/segments");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createSegmentThunk = async (
  segmentData = {
    name: "",
    contact_ids: "",
    is_private: true,
    pin_to_quick_access: true,
    share_with_user_ids: [],
  }
) => {
  try {
    const res = await axiosInstance.post("/segments/", segmentData);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const editSegmentThunk = async (
  segmentData = {
    id: "",
    name: "",
    contact_ids: "",
    is_private: true,
    pin_to_quick_access: true,
    share_with_user_ids: [],
  }
) => {
  try {
    const res = await axiosInstance.put(
      `/segments/${segmentData.id}`,
      segmentData
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSegmentThunk = async (contact_segment_id) => {
  try {
    const response = await axiosInstance.delete(
      `/segments/${contact_segment_id}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
