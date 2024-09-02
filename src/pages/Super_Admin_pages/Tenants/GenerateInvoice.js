import React, { useState } from "react";
import {
  Button,
  TableContainer,
  TableRowItem,
} from "../../../components/SuperAdmin_components";
import { FaEye, FaPlus } from "react-icons/fa";
import { MODALS } from "../../../constants/modals.constant";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import CustomDropdown from "../../../components/SuperAdmin_components/CustomDropDown";
import Checkbox from "../../../components/SuperAdmin_components/common/Checkbox";

const GenerateInvoice = () => {
  const navigate = useNavigate();

  const [invoiceData, setInvoiceData] = useState({
    invoice_to: "",
    phone_no: "",
    date: "",
    address: "",
    country: "",
    pin_code: "",
    item_name: "",
    quantity: 0,
    price: 0,
    discount: "",
    amount: "",
  });

  const [invoiceTableData, setInvoiceTableData] = useState([]);

  const handleAddItem = (e) => {
    e.preventDefault();
    setInvoiceTableData([...invoiceTableData, { ...invoiceData }]);
    // clear the form fields after adding the items
    setInvoiceData({
      invoice_to: "",
      phone_no: "",
      date: "",
      address: "",
      country: "",
      pin_code: "",
      item_name: "",
      quantity: 0,
      price: 0,
      discount: "",
      amount: "",
    });
  };

  const handleRemoveItem = (index) => {
    const updatedTableData = [...invoiceTableData];
    updatedTableData.splice(index, 1);
    setInvoiceTableData(updatedTableData);
  };

  const nameTypes = [
    { value: "georgeudonte@gmail.com", label: "George Udonte" },
    { value: "franklampared@gmail.com", label: "Frank Lampard" },
  ];
  const countryTypes = [
    { value: "nigeria", label: "Nigeria" },
    { value: "ghana", label: "Ghana" },
  ];

  const handleDropDownSelect = (name, selectedOption) => {
    setInvoiceData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };
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

  const invoiceTableHeader = [
    "Item Name",
    "Quantity",
    "Price",
    "Discount",
    "Total Amount",
    "Action",
  ];

  return (
    <div className="pb-16">
      {/* header */}
      <div className="flex items-center justify-between bg-white py-6 px-6">
        <div className="flex items-center">
          <h1 className="font-bold text-[1.3rem]">Create New Invoice</h1>
        </div>
        <div className="flex items-center gap-x-3">
          <Button icon={<BiArrowBack />} color={"secondary"}>
            Back to Tenant
          </Button>
          <Button
            icon={<FaEye />}
            onClick={() => {
              navigate("/admin/preview-invoice");
            }}
          >
            Preview Invoice
          </Button>
        </div>
      </div>
      {/* invoice form */}
      <div>
        <form>
          <div className="py-6 px-12 rounded-md shadow-md bg-white my-12 mx-20">
            <p>Invoice No: #123</p>
            {/* row input */}
            <div className="flex items-center gap-4 mt-8">
              <div className="w-full">
                <CustomDropdown
                  label="Invoice To"
                  options={nameTypes}
                  onSelect={(selectedOption) => {
                    handleDropDownSelect("invoice_to", selectedOption);
                  }}
                />
              </div>
              <div className="w-full">
                <label htmlFor="last_name" className="my-4 text-gray-700">
                  Phone Number
                </label>
                <input
                  className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                  type="text"
                  placeholder="Enter phone number"
                  name="phone_no"
                  value={invoiceData.phone_no}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full">
                <label htmlFor="created_date" className="my-4 text-gray-700">
                  Invoice Date
                </label>
                <input
                  className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                  type="date"
                  placeholder="DD/MM/YYY"
                  name="date"
                  value={invoiceData.date}
                  onChange={handleDateChange}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="w-full">
                <label htmlFor="last_name" className="my-4 text-gray-700">
                  Address
                </label>
                <input
                  className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                  type="text"
                  placeholder="Enter address"
                  name="address"
                  value={invoiceData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full">
                <CustomDropdown
                  label="Country"
                  options={countryTypes}
                  onSelect={(selectedOption) => {
                    handleDropDownSelect("country", selectedOption);
                  }}
                />
              </div>
              <div className="w-full">
                <label htmlFor="last_name" className="my-4 text-gray-700">
                  Pin Code
                </label>
                <input
                  className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                  type="text"
                  placeholder="Enter phone number"
                  name="pin_code"
                  value={invoiceData.pin_code}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="border-b-2 border-gray-200 my-8"></div>

            {/* invoice product description */}
            <div className="bg-orange-100 rounded px-4 py-8 flex items-center gap-4">
              <div className="w-full">
                <label htmlFor="last_name" className="my-4 text-gray-700">
                  Product Name
                </label>
                <input
                  className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                  type="text"
                  placeholder="Product Name"
                  name="item_name"
                  value={invoiceData.item_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-48">
                <label htmlFor="last_name" className="my-4 text-gray-700">
                  Quantity
                </label>
                <input
                  className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                  type="number"
                  placeholder="10"
                  name="quantity"
                  value={invoiceData.quantity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-48">
                <label htmlFor="last_name" className="my-4 text-gray-700">
                  Price
                </label>
                <input
                  className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                  type="number"
                  placeholder="N"
                  name="price"
                  value={invoiceData.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-48">
                <label htmlFor="last_name" className="my-4 text-gray-700">
                  Discount
                </label>
                <input
                  className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                  type="number"
                  placeholder="%"
                  name="discount"
                  value={invoiceData.discount}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-48">
                <label htmlFor="last_name" className="my-4 text-gray-700">
                  Amount
                </label>
                <input
                  className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                  type="number"
                  placeholder="10000"
                  name="amount"
                  value={invoiceData.amount}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-36 flex flex-col items-center justify-center ml-8 h-full">
                <div className="text-orange-100"> {"__"}</div>
                <Button
                  size={"lg"}
                  color={"secondary"}
                  icon={<FaPlus />}
                  onClick={handleAddItem}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        </form>
        {/* invoice table */}
        <div className="rounded-md shadow-md my-12 mx-20">
          <TableContainer tableHeader={invoiceTableHeader} checkBox={true}>
            {invoiceTableData.map((invoiceRow, index) => (
              <TableRowItem key={index}>
                <td>
                  <Checkbox />
                </td>
                <td>{invoiceRow.item_name}</td>
                <td>{invoiceRow.quantity}</td>
                <td>{invoiceRow.price}</td>
                <td>{invoiceRow.discount}</td>
                <td>{invoiceRow.amount}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="bg-red-200 w-fit px-2 py-1 text-red-600 rounded-xl text-center text-xs font-bold cursor-pointer"
                  >
                    Remove
                  </button>
                </td>
              </TableRowItem>
            ))}
          </TableContainer>
          <div className="flex items-center justify-between py-4 px-8">
            <Button>Send Invoice</Button>
            <div className="flex items-center gap-4 border-2 border-gray-200 text-2xl text-gray-500 py-4 px-8 rounded-sm">
              <p>Sum Total:</p>
              <p className="font-bold">20000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateInvoice;
