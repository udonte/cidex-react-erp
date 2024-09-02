import { toast } from "react-toastify";
import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const fetchVendorsThunk = async () => {
  try {
    const response = await axiosInstance.get(
      "/assets/vendor/?per_page=10&page=1&sort_by=desc&order_by=id&load_related=false"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createVendorThunk = async (
  vendorDetails = {
    name: "",
    location: "",
    personnel: "",
    phone_number: "",
    email: "",
    address: "",
  }
) => {
  try {
    const response = await axiosInstance.post("/assets/vendor/", vendorDetails);
    return response.data;
  } catch (error) {
    toast.error("An Error Occured");
    return new Error(error.data.detail);
  }
};

export const editVendorByIdThunk = async (
  editedVendorData = {
    name: "",
    location: "",
    personnel: "",
    phone_number: "",
    email: "",
    address: "",
  }
) => {
  try {
    const response = await axiosInstance.put(
      `/asset/vendor/${editedVendorData.id}`,
      editedVendorData
    );
    return response.data;
  } catch (error) {}
};

export const deleteVendorByIdThunk = async (vendor_id) => {
  try {
    const response = await axiosInstance.delete(`/assets/vendor/${vendor_id}`);
    return response.data;
  } catch (error) {}
};
