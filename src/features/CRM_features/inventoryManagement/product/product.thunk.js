import axiosInstance from "../../../../utils/helperFunctions/axios.utils";
import { toast } from "react-toastify";

export const createProductThunk = async (
  productData = {
    image: "",
    name: "",
    category_ids: [],
    price: "",
    quantity: "",
    minimum_quantity: "",
    description: "",
    status: "",
  }
) => {
  try {
    const res = await axiosInstance.post("/products/", productData);
    return res.data;
  } catch (error) {
    toast.error(error.data.msg);
  }
};

export const fetchProductsThunk = async () => {
  try {
    const response = await axiosInstance.get(
      "/products/?per_page=10&page=1&sort_by=desc&order_by=id&load_related=true"
    );
    console.log(response);
    return response.data.data;
  } catch (error) {}
};

export const fetchProductByIdThunk = async (product_id) => {
  try {
    const response = await axiosInstance.get(
      `/products/${product_id}?load_related=true`
    );
    console.log(response);
    return response.data;
  } catch (error) {}
};

export const editProductByIdThunk = async (
  productDetails = {
    id: "",
    image: "",
    name: "",
    category_ids: [],
    price: "",
    quantity: "",
    minimum_quantity: "",
    description: "",
    status: "",
  }
) => {
  try {
    const response = await axiosInstance.put(
      `/products/${productDetails.id}`,
      productDetails
    );
    return response.data;
  } catch (error) {}
};

export const deleteProductByIdThunk = async (product_id) => {
  try {
    const response = await axiosInstance.delete(`/products/${product_id}`);
    return response.data;
  } catch (error) {}
};
