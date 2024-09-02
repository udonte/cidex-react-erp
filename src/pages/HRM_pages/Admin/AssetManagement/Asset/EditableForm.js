import { useSelector } from "react-redux";
import { Button, CustomInput } from "../../../../../components/HRM_components";
import CustomDropdown from "../../../../../components/HRM_components/_common/CustomDropDown";
import { useState, useEffect } from "react";
import { fetchEmployees } from "../../../../../features/HRM_features/employee/employee.slice";
import { useDispatch } from "react-redux";
import { selectEmployeeSlice } from "../../../../../features/HRM_features/employee/employee.selector";
import { selectVendors } from "../../../../../features/HRM_features/inventory/vendors/vendors.selectors";
import { fetchVendors } from "../../../../../features/HRM_features/inventory/vendors/vendors.slice";

export const EditableForm = ({ editedAssetData, setEditedAssetData }) => {
  const dispatch = useDispatch();
  const { employees } = useSelector(selectEmployeeSlice);
  const { vendors } = useSelector(selectVendors);

  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchVendors());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAssetData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedAssetData(reader.result);
        setEditedAssetData((prevData) => ({
          ...prevData,
          image_file: file,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDropDownSelect = (name, selectedOption) => {
    setEditedAssetData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  const handlePurchaseDateChange = (e) => {
    const { name, value } = e.target;
    const dateValue = new Date(value);
    const formattedDate = dateValue.toISOString().split("T")[0];
    setEditedAssetData((prevData) => ({ ...prevData, [name]: formattedDate }));
  };

  const status = [
    { value: "Available", label: "Available" },
    { value: "Check Out", label: "CheckOut" },
    { value: "Repair", label: "Repair" },
    { value: "Report Damage", label: "Report Damage" },
    { value: "Perform Maintenance", label: "Perform Maintenance" },
    { value: "In Stock", label: "InStock" },
    { value: "Reserved", label: "Reserved" },
    { value: "Disposed", label: "Disposed" },
  ];

  const maintenance = [
    { value: "Every Week", label: "Weekly" },
    { value: "Every 2 Weeks", label: "Bi-weekly" },
    { value: "Every Month", label: "Monthly" },
  ];

  return (
    <form className="px-4 py-6 flex items-start gap-10 w-full bg-white">
      {/* left editable form */}
      <div className="flex flex-col justify-start gap-6 w-1/2">
        {/* image */}
        <div className="flex items-center justify-center w-full h-[280px] bg-gray-500 rounded relative">
          <img
            src={editedAssetData.asset_image}
            alt="Uploaded"
            onChange={handleImageChange}
          />
          <div className="flex items-center gap-4 absolute z-10 t-[50%] l-[50%] ">
            <CustomInput type="file" className="w-[122px]" />
            <Button color={"gray"} className={"rounded-sm"}>
              Delete Image
            </Button>
          </div>
        </div>
        {/* form inputs */}
        <div className="w-full flex flex-col">
          <CustomInput
            label="Asset Name"
            type="text"
            name="name"
            handleInputChange={handleInputChange}
            value={editedAssetData.name}
          />
        </div>

        <div className="w-full">
          <CustomInput
            label="Asset ID"
            type="text"
            name="asset_id"
            value={editedAssetData.serial_no}
            handleInputChange={handleInputChange}
          />
        </div>

        <div className="w-full flex flex-col">
          <CustomInput
            label="Asset Type"
            type="text"
            name="type"
            handleInputChange={handleInputChange}
            value={editedAssetData.type}
          />
        </div>
        {/* this field is not needed to edit an asset only when you want to checkout an asset */}
        {/* <div className="w-full flex flex-col">
          <CustomDropdown
            label="Assign To"
            options={employees?.map((item) => ({
              label: item.info.name,
              value: item.info.id,
            }))}
            onSelect={(selectedOption) => {
              handleDropDownSelect("assignee_id", selectedOption);
            }}
          />
        </div> */}

        <div className="w-full flex-col">
          <label htmlFor="purchase_date">Date Purchased</label>
          <input
            className="w-full border rounded focus:outline-2 bg-gray-100 px-4 h-[45px] border-b-2  py-2 hover:bg-gray-100 cursor-pointer"
            type="date"
            name="date_purchased"
            value={editedAssetData.date_purchased}
            onChange={handlePurchaseDateChange}
          />
        </div>

        <div className="w-full flex flex-col">
          <CustomDropdown
            options={status}
            label="Status"
            onSelect={(selectedOption) => {
              handleDropDownSelect("status", selectedOption);
            }}
          />
        </div>
      </div>

      {/* right editable form */}
      <div className="flex flex-col justify-start gap-6 w-1/2">
        <div className="w-full">
          <label htmlFor="asset_id">Description</label>
          <textarea
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="textarea"
            value={editedAssetData.description}
            name="description"
            onChange={handleInputChange}
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <div className="w-full">
          <label htmlFor="asset_id">Warranty</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="warranty"
            value={editedAssetData.warranty}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="cost">Cost</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="num"
            name="cost"
            value={editedAssetData.cost}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <CustomDropdown
            label="Vendor"
            onSelect={(selectedOption) => {
              handleDropDownSelect("vendor_id", selectedOption);
            }}
            options={vendors?.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
          />
        </div>
        <div className="w-full">
          <label htmlFor="asset_id">Location</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="location"
            value={editedAssetData.location}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full">
          <CustomDropdown
            label="maintenance"
            onSelect={(selectedOption) => {
              handleDropDownSelect("maintenance", selectedOption);
            }}
            options={maintenance}
          />
        </div>
      </div>
    </form>
  );
};

export default EditableForm;
