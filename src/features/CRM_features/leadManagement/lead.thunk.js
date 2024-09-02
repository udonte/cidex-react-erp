import axiosInstance from "../../../utils/helperFunctions/axios.utils";
import { toast } from "react-toastify";

// lead status
export const fetchLeadsThunk = async () => {
  try {
    const response = await axiosInstance.get(
      "/leads/?owner_view=false&page=1&per_page=10&order_by=-id&export_to_excel=false&sort_by=desc&load_related=false"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchLeadByIdThunk = async (lead_id) => {
  try {
    const response = await axiosInstance.get(
      `/leads/${lead_id}?load_related=true`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editLeadByIdThunk = async (
  editedLeadData = {
    contactName: "",
    leadOwner: "",
    email_address: "",
    phone_no: "",
    leadSource: "",
    leadStatus: "",
  }
) => {
  try {
    const response = await axiosInstance.put(
      `/leads/${editedLeadData.id}`,
      editedLeadData
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteLeadByIdThunk = async (lead_id) => {
  try {
    const response = await axiosInstance.delete(`/leads/${lead_id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createLeadsThunk = async (
  leadDetails = {
    name: "",
    email_address: "",
    phone_number: "",
    source_id: "",
    status_id: "",
  }
) => {
  try {
    const response = await axiosInstance.post("/leads/", leadDetails);
    toast.success("Lead created successfully");
    console.log(response);
    return response.data;
  } catch (error) {
    toast.error("Failed to create lead");
    console.log(error);
  }
};

// lead status

export const fetchLeadStatusThunk = async () => {
  try {
    const response = await axiosInstance.get(
      "/lead_status/?page=1&per_page=10&order_by=-id&export_to_excel=false&sort_by=desc"
    );
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchLeadStatusByIdThunk = async (lead_status_id) => {
  try {
    const response = await axiosInstance.get(
      `/lead_status/${lead_status_id}?load_related=true`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editLeadStatusByIdThunk = async (
  editedLeadStatusData = {
    name: "",
  }
) => {
  try {
    const response = await axiosInstance.put(
      `/lead_status/${editedLeadStatusData.id}`,
      editedLeadStatusData
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteLeadStatusByIdThunk = async (lead_status_id) => {
  try {
    const response = await axiosInstance.delete(
      `/leads_status/${lead_status_id}`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createLeadStatusThunk = async (
  leadStatusDetails = {
    name: "",
  }
) => {
  try {
    const response = await axiosInstance.post(
      "/leads_status/",
      leadStatusDetails
    );
    toast.success("Lead status created successfully");
    console.log(response);
    return response.data;
  } catch (error) {
    toast.error("Failed to create lead status");
    console.log(error);
  }
};
