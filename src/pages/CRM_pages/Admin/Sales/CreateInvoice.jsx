import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BreadCrumbs, Button } from "../../../../components/CRM_components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { AiOutlineCloudUpload } from "react-icons/ai";
import CustomDropdown from "../../../../components/CRM_components/common/CustomDropDown";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { BiPlusCircle } from "react-icons/bi";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../constants/modals.constant";
import AddBankDetails from "./AddBankDetails";
import axios from "axios";
import { createInvoice } from "../../../../features/CRM_features/salesManagement/invoice.slice";

const CreateInvoice = () => {
  const navigate = useNavigate();
  const breadcrumbItems = ["Sales Invoices", "Create Invoice", ""];
  const [banks, setBanks] = useState([]);
  const [rows, setRows] = useState([
    {
      product_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      product_name: "",
      product_description: "",
      quantity: [0],
      price: 0,
      tax: 0,
    },
  ]);
  const dispatch = useDispatch();

  const openAddBankDetailsModal = useSelector(selectModalsSlice);
  const [invoiceData, setInvoiceData] = useState({
    customer_id: "",
    created_date: "",
    due_date: "",
    note: "",
    status: "",
    logo: "",
    terms_and_condition: "",
    items: rows,
    bank_detail: {
      bank_name: "",
      account_number: 0,
      account_name: "",
    },
    invoice_from: "",
    invoice_to: "",
  });
  const [isEditingFromInvoiceAddress, setIsEditingFromInvoiceAddress] =
    useState(false);
  const [isEditingToInvoiceAddress, setIsEditingToInvoiceAddress] =
    useState(false);

  const handleFromInvoiceEditClick = () => {
    setIsEditingFromInvoiceAddress(true);
  };
  const handleToInvoiceEditClick = () => {
    setIsEditingToInvoiceAddress(true);
  };

  const handleFromInvoiceSaveClick = () => {
    setIsEditingFromInvoiceAddress(false);
  };

  const handleToInvoiceSaveClick = () => {
    setIsEditingToInvoiceAddress(false);
  };

  const handleAddItem = () => {
    const newRow = {
      product_id: "",
      product_name: "",
      product_description: "",
      quantity: [0],
      price: 0,
      tax: 0,
    };
    setRows([...rows, newRow]);
  };

  const handleRowInputChange = (id, inputName, e) => {
    const updatedRows = rows.map((row, index) =>
      index === id ? { ...row, [inputName]: e.target.value } : row
    );
    setRows(updatedRows);
    setInvoiceData((prevData) => ({ ...prevData, items: updatedRows }));
  };

  const handleDeleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const statusTypes = [
    { value: "open", label: "Open" },
    { value: "closed", label: "Closed" },
  ];

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const dateValue = new Date(value);
    const formattedDate = dateValue.toISOString().split("T")[0];
    setInvoiceData((prevData) => ({ ...prevData, [name]: formattedDate }));
  };

  const handleDropDownSelect = (name, selectedOption) => {
    setInvoiceData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createInvoice());
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setInvoiceData((prevData) => ({
          ...prevData,
          image_file: file,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // Replace the placeholder URL with the actual API endpoint
    const apiUrl = "https://nigerianbanks.xyz";

    // Fetch the list of banks from the API
    const fetchBanks = async () => {
      try {
        const response = await axios.get(apiUrl);
        setBanks(response.data);
      } catch (error) {}
    };

    fetchBanks();
  }, []);

  return (
    <div className="">
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      <div className="p-6 mb-16">
        <div className="flex items-center justify-between gap-x-3">
          <Button
            icon={<FaEye />}
            onClick={() => {
              navigate("/CRM/preview-invoice");
            }}
          >
            Preview
          </Button>
          <Button
            icon={<FaEye />}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </Button>
        </div>
        <div>
          <form>
            <div className="p-6 rounded-md my-4 shadow-md bg-white">
              <div className="w-fit">
                <p>Image</p>
                <div className="bg-gray-100">
                  <label htmlFor="image_file" className="cursor-pointer">
                    <div className="relative w-60 h-44 overflow-hidden rounded-lg">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Product Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="border-2 border-gray-300 w-full h-full flex flex-col gap-2 items-center justify-center">
                          <AiOutlineCloudUpload
                            className=" object-cover"
                            size={60}
                            color={"#515151"}
                          />
                          <p className="text-sm text-gray-200">Upload Image</p>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      id="image_file"
                      name="image_file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>
              {/* other form details */}
              <div className="flex items-center justify-between mt-4 gap-8">
                <div className="w-full">
                  <label htmlFor="invoice_number" className="my-4 text-gray-700">
                    Invoice Number
                  </label>
                  <input
                    className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                    type="text"
                    placeholder="Enter product name"
                    name="invoice_number"
                    value={invoiceData.invoice_number}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="customer_name" className="my-4 text-gray-700">
                    Customer Name
                  </label>
                  <input
                    className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                    type="text"
                    placeholder="Enter customer name"
                    name="customer_id"
                    value={invoiceData.customer_id}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="customer_email" className="my-4 text-gray-700">
                    Customer Email
                  </label>
                  <input
                    className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                    type="email"
                    placeholder="Enter customer email"
                    name="customer_email"
                    value={invoiceData.customer_id}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 gap-8">
                <div className="w-full">
                  <label htmlFor="last_name" className="my-4 text-gray-700">
                    Customer Number
                  </label>
                  <input
                    className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                    type="text"
                    placeholder="Enter customer number"
                    name="product_name"
                    value={invoiceData.customer_number}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="created_date" className="my-4 text-gray-700">
                    Created Date
                  </label>
                  <input
                    className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                    type="date"
                    placeholder="Enter created date"
                    name="created_date"
                    value={invoiceData.created_date}
                    onChange={handleDateChange}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="due_date" className="my-4 text-gray-700">
                    Due Date
                  </label>
                  <input
                    className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                    type="date"
                    placeholder="Enter due date"
                    name="due_date"
                    value={invoiceData.due_date}
                    onChange={handleDateChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 gap-8">
                <div className="w-full">
                  <CustomDropdown
                    label="Status"
                    options={statusTypes}
                    onSelect={(selectedOption) => {
                      handleDropDownSelect("status", selectedOption);
                    }}
                  />
                </div>
                <div className="w-full flex items-start justify-between">
                  <div className="flex flex-col justify-start gap-4">
                    <p className="text-sm font-bold">Invoice From</p>
                    {isEditingFromInvoiceAddress ? (
                      <textarea
                        className="text-sm text-gray-400 w-full p-2 border"
                        name="fromInvoiceAddress"
                        value={invoiceData.fromInvoiceAddress}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span className="text-sm text-gray-400 w-1/2">
                        {invoiceData.fromInvoiceAddress}
                      </span>
                    )}
                  </div>
                  <div>
                    {isEditingFromInvoiceAddress ? (
                      <p
                        className="text-green-700 cursor-pointer underline text-sm"
                        onClick={handleFromInvoiceSaveClick}
                      >
                        Save
                      </p>
                    ) : (
                      <p
                        className="text-green-700 cursor-pointer underline text-sm"
                        onClick={handleFromInvoiceEditClick}
                      >
                        Edit
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full flex items-start justify-between">
                  <div className="flex flex-col justify-start gap-4">
                    <p className="text-sm font-bold">Invoice To</p>
                    {isEditingToInvoiceAddress ? (
                      <textarea
                        className="text-sm text-gray-400 w-full p-2 border"
                        name="toInvoiceAddress"
                        value={invoiceData.toInvoiceAddress}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span className="text-sm text-gray-400 w-1/2">
                        {invoiceData.toInvoiceAddress}
                      </span>
                    )}
                  </div>
                  <div>
                    {isEditingToInvoiceAddress ? (
                      <p
                        className="text-green-700 cursor-pointer underline text-sm"
                        onClick={handleToInvoiceSaveClick}
                      >
                        Save
                      </p>
                    ) : (
                      <p
                        className="text-green-700 cursor-pointer underline text-sm"
                        onClick={handleToInvoiceEditClick}
                      >
                        Edit
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* item description */}
              <div>
                <div className="mt-32">
                  <table class="w-full border-collapse">
                    <thead>
                      <tr className="bg-green-600 text-gray-100 font-normal ">
                        <th class="border border-gray-300 px-4 py-2"></th>
                        <th class="border border-gray-300 px-4 py-2">Item</th>
                        <th class="border border-gray-300 px-4 py-2">
                          Quantity
                        </th>
                        <th class="border border-gray-300 px-4 py-2">
                          Price per Unit
                        </th>
                        <th class="border border-gray-300 px-4 py-2">Tax</th>
                        <th class="border border-gray-300 px-4 py-2">
                          Description
                        </th>
                        <th class="border border-gray-300 px-4 py-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-500 text-sm">
                      {/* dynamic */}
                      {rows.map((row, index) => (
                        <tr key={index}>
                          <td className="text-center">
                            <button onClick={() => handleDeleteRow(index)}>
                              <MdOutlineCancelPresentation size={20} />
                            </button>
                          </td>
                          <td class="border border-gray-300 px-4 py-2 text-center">
                            <input
                              className="p-3  border bg-slate-50 rounded-md outline-none"
                              type="text"
                              placeholder="Enter Item Name"
                              name="product_name"
                              value={rows[index].product_name}
                              onChange={(e) =>
                                handleRowInputChange(index, "product_name", e)
                              }
                            />
                          </td>
                          <td class="border border-gray-300 px-4 py-2 text-center">
                            <input
                              className="p-3  w-16  border bg-slate-50 rounded-md outline-none"
                              type="text"
                              placeholder="Enter Quantity"
                              name="quantity"
                              value={rows[index].quantity}
                              onChange={(e) =>
                                handleRowInputChange(index, "quantity", e)
                              }
                            />
                          </td>
                          <td class="border border-gray-300 px-4 py-2 text-center">
                            <input
                              className="p-3 w-24 border bg-slate-50 rounded-md outline-none"
                              type="text"
                              placeholder="Enter Price Unit"
                              name="price"
                              value={rows[index].price}
                              onChange={(e) =>
                                handleRowInputChange(index, "price", e)
                              }
                            />
                          </td>
                          <td class="border border-gray-300 px-4 py-2 text-center">
                            <input
                              className="p-3 w-16 border bg-slate-50 rounded-md outline-none"
                              type="text"
                              placeholder="%"
                              name="tax"
                              value={rows[index].tax}
                              onChange={(e) =>
                                handleRowInputChange(index, "tax", e)
                              }
                            />
                          </td>
                          <td class="border border-gray-300 px-4 py-2">
                            <input
                              className="p-3 w-full border bg-slate-50 rounded-md outline-none"
                              type="text"
                              placeholder="Enter Item Description.."
                              value={rows[index].product_description}
                              name="product_description"
                              onChange={(e) =>
                                handleRowInputChange(
                                  index,
                                  "product_description",
                                  e
                                )
                              }
                            />
                          </td>
                          <td class="border border-gray-300 px-4 py-2 text-center">
                            $ <span>0</span>{" "}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="w-full flex items-center justify-end mt-8">
                    <button
                      type="button"
                      className="text-green-600 text-sm font-bold flex items-center gap-1 justify-end"
                      onClick={handleAddItem}
                    >
                      {" "}
                      <BiPlusCircle /> Add Item
                    </button>
                  </div>
                </div>
              </div>

              {/* calculations */}
              <div className="flex items-start justify-between mt-16 gap-24">
                <div className="flex flex-col gap-y-8 w-full text-gray-500">
                  <div>
                    <p className="text-gray-500 mb-4">Payment Details</p>
                    <button
                      type="button"
                      className="text-green-600 font-bold text-sm flex items-center gap-1 justify-end border-2 rounded-md border-green-600 px-4 py-2"
                      onClick={() =>
                        dispatch(
                          openModalByName(
                            MODALS.SALES.SALES_INVOICE.ADD_BANK_DETAILS
                          )
                        )
                      }
                    >
                      {" "}
                      <BiPlusCircle /> Add Payment Details
                    </button>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-4">Note (Optional)</p>
                    <textarea
                      className="text-sm text-gray-400 w-full p-2 border"
                      name="note"
                      value={invoiceData.note}
                      onChange={handleInputChange}
                      row={4}
                      column={50}
                    />
                  </div>
                  <div>
                    <p className="text-gray-500 mb-4">Terms & Conditions</p>
                    <textarea
                      className="text-sm text-gray-400 w-full p-2 border"
                      name="note"
                      value={invoiceData.terms}
                      onChange={handleInputChange}
                      row={4}
                      column={50}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-full p-8">
                  <div className="flex items-center justify-between">
                    <p>Subtototal</p>
                    <p className="pr-3">
                      ₦ <span>0</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>VAT</p>
                    <p>
                      <input
                        className="p-3 w-24 border bg-slate-50 rounded-md outline-none text-right"
                        type="text"
                        placeholder="₦"
                        value={invoiceData.item_vat}
                        name="item_vat"
                        onChange={handleInputChange}
                      />
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t-green-500 border-t-2 py-8">
                    <p>Total Amount:</p>
                    <p className="font-bold text-2xl pr-3">
                      ₦ <span>0</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <AddBankDetails
        banks={banks}
        isOpen={
          openAddBankDetailsModal[MODALS.SALES.SALES_INVOICE.ADD_BANK_DETAILS]
        }
      />
    </div>
  );
};

export default CreateInvoice;
