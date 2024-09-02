import axiosInstance from "../../../../utils/helperFunctions/axios.utils";
import { toast } from "react-toastify";

export const fetchAssetsThunk = async () => {
  try {
    const response = await axiosInstance.get(
      "/assets/?per_page=10&page=1&sort_by=desc&order_by=id&load_related=false"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchAssetByIdThunk = async (asset_id) => {
  try {
    const response = await axiosInstance.get(
      `/assets/${asset_id}?load_related=true`
    );
    return response.data;
  } catch (error) {}
};

export const editAssetByIdThunk = async (
  editedAssetData = {
    id: "",
    name: "",
    serial_no: "",
    type: "",
    date_purchased: "",
    model: "",
    maintenance: "",
    vendor_id: "",
    description: "",
    warranty: "",
    cost: 0,
    status: "",
    location: "",
  }
) => {
  try {
    const response = await axiosInstance.put(
      `/assets/${editedAssetData.id}`,
      editedAssetData
    );
    return response.data;
  } catch (error) {}
};

export const deleteAssetByIdThunk = async (asset_id) => {
  try {
    const response = await axiosInstance.delete(`/assets/${asset_id}`);
    return response;
  } catch (error) {}
};

export const createAssetsThunk = async (
  assetDetails = {
    name: "",
    serial_no: "",
    type: "",
    date_purchased: "",
    model: "",
    maintenance: "",
    vendor_id: [],
    description: "",
    warranty: "",
    quantity: 0,
    cost: 0,
    status: [],
    location: "",
  }
) => {
  try {
    const response = await axiosInstance.post("/assets/", assetDetails);
    toast.success("Asset created successfully");
    return response.data;
  } catch (error) {
    toast.error("Failed to create asset");
  }
};

export const createBulkAssetsThunk = async (payload) => {
  try {
    const response = await axiosInstance.post("/assets/bulk", payload);
    toast.success("Imported Asset created successfully");
    return response;
  } catch (error) {
    toast.error("Failed to create imported asset");
  }
};

export const createCheckOutAssetThunk = async (
  checkoutAssetDetails = {
    asset_id: "",
    employee_id: "",
    note: "",
    is_returned: false,
  }
) => {
  try {
    const response = await axiosInstance.post(
      "/assets/checkout/",
      (checkoutAssetDetails = {
        asset_id: "",
        employee_id: "",
        note: "",
        is_returned: false,
      })
    );
    toast.success("Asset checked out successfully");
    return response;
  } catch (error) {
    toast.error(error.data.detail.message);
    return error.data.detail;
  }
};
export const fetchCheckOutAssetThunk = async () => {
  try {
    const response = await axiosInstance.get(
      "/assets/checkout/?per_page=10&page=1&sort_by=desc&order_by=id&load_related=true"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
