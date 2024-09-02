import axiosInstance from "../../../../utils/helperFunctions/axios.utils";
import { toast } from "react-toastify";

export const fetchCategoriesThunk = async () => {
  try {
    const response = await axiosInstance.get(
      "products/categories/?per_page=10&page=1&sort_by=desc&order_by=id&load_related=false"
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoryByIdThunk = async (category_id) => {
  try {
    const response = await axiosInstance.get(
      `/products/categories/${category_id}`
    );
    return response.data;
  } catch (error) {}
};

export const createCategoriesThunk = async (
  categoryDetails = {
    name: "",
    description: "",
  }
) => {
  try {
    const response = await axiosInstance.post(
      "/products/categories/",
      categoryDetails
    );
    toast.success("Category created successfully");
    return response;
  } catch (error) {
    toast.error("Failed to create category");
  }
};

export const editCategoryByIdThunk = async (
  categoryDetails = {
    id: [],
    name: "",
    description: "",
  }
) => {
  try {
    const response = await axiosInstance.put(
      `/products/categories/${categoryDetails.id}`,
      categoryDetails
    );
    toast.success("Edited Successfully");
    console.log(response);
    return response.data;
  } catch (error) {
    toast.error(error?.data?.detail?.message);
    console.log(error);
  }
};

export const deleteCategoryByIdThunk = async (category_id) => {
  try {
    const response = await axiosInstance.delete(
      `/products/categories/${category_id}`
    );
    toast.success("Category Deleted");
    console.log(response);
    return response.data;
  } catch (error) {
    toast.error("Failed to Delete");
    console.log(error);
  }
};
