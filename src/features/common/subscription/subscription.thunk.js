import axiosInstance from "../../../utils/helperFunctions/axios.utils";

export const getSubscriptionByIdThunk = async (subscription_id) => {
  try {
    const res = await axiosInstance.get(
      `subscription/plans/065dc5f858867e2f800022043774cb42?load_related=true`
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
