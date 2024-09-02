import { toast } from "react-toastify";
import axiosInstance from "../../../utils/helperFunctions/axios.utils";

export const createInvoiceThunk = async (
  invoiceData = {
    customer_id: "065c3a1b0c547b7b80009c94e6b9868b",
    created_date: "2024-03-11",
    due_date: "2024-03-12",
    note: "string",
    status: "Open Sales",
    logo: "string",
    terms_and_condition: "string",
    items: [
      {
        product_id: "065eeddc5b28713f8000dd72721c30e4",
        product_name: "Praises",
        product_price: 20200,
        quantity: 2,
      },
    ],
    bank_detail: {
      bank_name: "string",
      account_number: 0,
      account_name: "string",
    },
    invoice_from: "string",
    invoice_to: "string",
    vat: 0,
    is_active: true,
  }
) => {
  try {
    const res = await axiosInstance.post("/sales/invoice/", invoiceData);
    console.log(res);
    return res.data.results;
    // return res.data.results;
  } catch (error) {
    toast.error(error.data.msg);
  }
};

export const fetchInvoiceThunk = async () => {
  try {
    const response = await axiosInstance.get(
      "/sales/invoice/?page=1&per_page=10&order_by=-id&export_to_excel=false&sort_by=desc&load_related=false"
    );
    return response.data.results;
  } catch (error) {
  }
};

export const fetchInvoiceByIdThunk = async (invoice_id) => {
  try {
    const response = await axiosInstance.get(`/sales/invoice/${invoice_id}`);
    return response.data;
  } catch (error) {
  }
};

export const editInvoiceByIdThunk = async (
  invoice_id,
  invoiceDetails = {
    image_file: "",
    invoice_number: "",
    customer_name: "",
    customer_email: "",
    customer_id: "",
    created_date: "",
    due_date: "",
    status: "",
    fromInvoiceAddress: "",
    toInvoiceAddress: "",
    item_name: "",
    item_quantity: "",
    item_price_per_unit: "",
    item_tax: "",
    item_vat: "",
    item_description: "",
    item_note: "",
  }
) => {
  try {
    const response = await axiosInstance.put(
      `/sales/invoice/${invoice_id}`,
      invoiceDetails
    );
    return response.data;
  } catch (error) {
  }
};

export const deleteInvoiceByIdThunk = async (invoice_id) => {
  try {
    const response = await axiosInstance.delete(`/sales/invoice/${invoice_id}`);
    return response.data;
  } catch (error) {
  }
};
