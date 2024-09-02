import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const fetchTalentThunk = async () => {
  try {
    const response = await axiosInstance.get("/recruitment/talent_pools/");
  } catch (error) {
    return error;
  }
};
export const addTalentThunk = async (
  talentData = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    resume: "",
    location: "",
    cover_letter: "",
    country: "",
    address: "",
  }
) => {
  try {
    const response = await axiosInstance.post(
      "/recruitment/applicants/",
      talentData
    );
  } catch (error) {
    return error;
  }
};
