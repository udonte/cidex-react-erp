import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const createContactThunk = async (
  categoryData = {
    category_name: "",
    description: "",
  }
) => {
  try {
    const res = axiosInstance.post("/categories/", categoryData);
  } catch (error) {}
};
