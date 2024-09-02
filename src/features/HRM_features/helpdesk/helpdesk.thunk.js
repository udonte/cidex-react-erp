import { toast } from "react-toastify";
import axiosInstance from "../../../utils/helperFunctions/axios.utils";

export const fetchHelpdeskThunk = async () => {
  try {
    const response = await axiosInstance.get(
      "/helpdesk/tickets/?per_page=10&page=1&sort_by=desc&order_by=id&is_active=false&load_related=true"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const fetchHelpDeskTicketByIdThunk = async (ticketId) => {
  try {
    const response = await axiosInstance.get(
      `/helpdesk/tickets/${ticketId}?per_page=10&page=1&sort_by=desc&order_by=id&load_related=true`
    );
    return response.data;
  } catch (error) {}
};
export const addHelpdeskTicketThunk = async (
  formData = {
    ticket_unique_id: "",
    subject: "",
    details: "",
    helpdesk_category_id: "",
    priority: "",
    recurring: "",
    assignee_id: "",
    department_ids: [""],
    start_date: "",
    attachment_url: "",
  }
) => {
  try {
    const response = await axiosInstance.post("/helpdesk/tickets/", formData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const editHelpdeskTicketThunk = async (
  formData = {
    is_active: "",
    id: "",
    ticket_unique_id: "",
    subject: "",
    details: "",
    helpdesk_category_id: "",
    priority: "",
    recurring: "",
    assignee_id: "",
    department_ids: [""],
    start_date: "",
    attachment_url: "",
  }
) => {
  try {
    const response = await axiosInstance.put(
      `/helpdesk/tickets/${formData.id}`,
      formData
    );
    console.log(response);
    return response.data;
  } catch (error) {
    toast.error(error.data.detail.message);
    return error;
  }
};

export const deleteHelpdeskTicketThunk = async (ticketId) => {
  try {
    const response = await axiosInstance.delete(`helpdesk/tickets/${ticketId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchTicketCommentsThunk = async (ticketId) => {
  try {
    const response = await axiosInstance.get(
      `helpdesk/comments/${ticketId}/comments?load_related=true`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addTicketCommentsThunk = async (
  formData = {
    ticket_id: "",
    message: "",
  }
) => {
  try {
    const response = await axiosInstance.post("/helpdesk/comments/", formData);
    return response.data;
  } catch (error) {
    toast.error(error.data.detail.message);
    return error;
  }
};
