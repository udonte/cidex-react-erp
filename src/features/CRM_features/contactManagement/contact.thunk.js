import { toast } from "react-toastify";
import axiosInstance from "../../../utils/helperFunctions/axios.utils";

export const fetchContactsThunk = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchContactByIdThunk = async (contact_id) => {
  try {
    const response = await axiosInstance.get(`/contacts/${contact_id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createContactThunk = async (
  contactData = {
    first_name: "",
    last_name: "",
    company: "",
    phone_number: "",
    email: "",
    title: "",
    type: "",
    address: "",
    city: "",
    state: "",
    country: "",
    preference: "",
    tags: [],
  }
) => {
  try {
    const res = await axiosInstance.post("/contacts/", contactData);
    return res.data;
  } catch (error) {}
};
export const fetchSegmentListThunk = async () => {
  try {
    const response = await axiosInstance.get("/segments/");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postSegmentListThunk = async (
  listData = {
    name: "",
    contact_ids: [],
    is_private: true,
    pin_to_quick_access: true,
    share_with_user_ids: [],
  }
) => {
  try {
    const res = await axiosInstance.post("/segments/", listData);
    return res.data;
  } catch (error) {}
};

export const deleteContactThunk = async (contact_id) => {
  try {
    const response = await axiosInstance.delete(`/contacts/${contact_id}`);
    return response.data;
  } catch (error) {}
};
