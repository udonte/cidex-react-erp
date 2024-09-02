import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomDropdown from "../../../_common/CustomDropDown";
import Button from "../../../_common/Button/Button";
import Modal from "../../../_common/ModalContainer/ModalConatiner";
import Spinner from "../../../../_common/Spinner";
import { fetchEmployees } from "../../../../../features/HRM_features/employee/employee.slice";
import { selectEmployeeSlice } from "../../../../../features/HRM_features/employee/employee.selector";
import {
  createAssets,
  fetchAssets,
} from "../../../../../features/HRM_features/inventory/assets/assets.slice";
import { selectVendors } from "../../../../../features/HRM_features/inventory/vendors/vendors.selectors";
import { fetchVendors } from "../../../../../features/HRM_features/inventory/vendors/vendors.slice";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import { selectAssetsSlice } from "../../../../../features/HRM_features/inventory/assets/assets.selectors";

const CreateAsset = ({ isOpen }) => {
  // const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectAssetsSlice);
  const { vendors } = useSelector(selectVendors);
  const [assetFormData, setassetFormData] = useState({
    asset_image: "",
    name: "",
    serial_no: "",
    type: "",
    date_purchased: "",
    model: "",
    maintenance: "",
    vendor_id: "",
    description: "",
    warranty: "",
    quantity: 0,
    cost: 0,
    status: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setassetFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDropDownSelect = (name, selectedOption) => {
    setassetFormData((prevState) => ({ ...prevState, [name]: selectedOption }));
  };

  const handlePurchaseDateChange = (e) => {
    const { name, value } = e.target;
    const dateValue = new Date(value);
    const formattedDate = dateValue.toISOString().split("T")[0];
    setassetFormData((prevData) => ({ ...prevData, [name]: formattedDate }));
  };

  // const handleImageChange = (e) => {
  // const file = e.target.files[0];

  // if (file) {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setImagePreview(reader.result);
  //     setassetFormData((prevData) => ({
  //       ...prevData,
  //       asset_image: file,
  //     }));
  //   };
  //   reader.readAsDataURL(file);
  // }
  // // };

  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchVendors());
  }, [dispatch]);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAssets(assetFormData))
      .unwrap()
      .then((payload) => {
        if (payload.created_at && payload.id) {
          dispatch(fetchAssets());
          dispatch(closeAllModals());
        }
      });
  };

  const status = [
    { value: "Repair", label: "Repair" },
    { value: "Report Damage", label: "Report Damage" },
    { value: "Perform Maintenance", label: "Perform Maintenance" },
    { value: "Available", label: "Available" },
    { value: "In Stock", label: "In Stock" },
    { value: "Reserved", label: "Reserved" },
    { value: "Disposed", label: "Disposed" },
  ];

  const maintenance = [
    { value: "Every Week", label: "Every Week" },
    { value: "Every 2 Weeks", label: "Every 2 Weeks" },
    { value: "Every Month", label: "Every Month" },
  ];

  return (
    <Modal title={"Create Asset"} width="sm" isOpen={isOpen}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="p-6 h-[90%] overflow-y-scroll space-y-6"
      >
        {/* image */}
        <div className="w-fit">
          <p>Image</p>
          <div className="bg-gray-100">
            <label htmlFor="asset_image" className="cursor-pointer">
              <div className="relative w-60 h-44 overflow-hidden rounded-lg">
                {/* {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Asset Preview"
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
                )} */}
              </div>
              <input
                type="file"
                id="asset_image"
                name="asset_image"
                value={setassetFormData.asset_image}
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>
        </div>
        {/* other fields */}
        <div className="w-full">
          <label htmlFor="name">Name</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="name"
            value={assetFormData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="asset_id">Asset Type</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="type"
            value={assetFormData.type}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="asset_id">Asset Serial No</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="serial_no"
            value={assetFormData.serial_no}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full flex-col">
          <label htmlFor="purchase_date">Purchase Date</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="date"
            name="date_purchased"
            value={assetFormData.date_purchased}
            onChange={handlePurchaseDateChange}
          />
        </div>
        <div className="w-full flex-col">
          <label htmlFor="description">Asset Description</label>
          <textarea
            className="p-3 w-full h-[60px] border bg-slate-50 rounded-md"
            name="description"
            value={assetFormData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full">
          <label htmlFor="model">Asset Model</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="model"
            value={assetFormData.model}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full flex flex-col">
          <CustomDropdown
            label="Maintenance"
            onSelect={(selectedOption) => {
              handleDropDownSelect("maintenance", selectedOption);
            }}
            options={maintenance}
          />
        </div>

        <div className="w-full flex flex-col">
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
        <div className="w-full flex-col">
          <label htmlFor="purchase_date">Warranty</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="warranty"
            value={assetFormData.warranty}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex-col">
          <label htmlFor="purchase_date">Cost</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="number"
            name="cost"
            value={assetFormData.cost}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex-col">
          <label htmlFor="purchase_date">Quantity</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="number"
            name="quantity"
            value={assetFormData.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex-col">
          <label htmlFor="purchase_date">Location</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="location"
            value={assetFormData.location}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full flex flex-col">
          {/* <label htmlFor="status">Status</label> */}
          <CustomDropdown
            label="Status"
            onSelect={(selectedOption) => {
              handleDropDownSelect("status", selectedOption);
            }}
            options={status}
          />
        </div>
        <div className="flex justify-center items-center gap-x-2 py-2 flex-1 text-center">
          <Button size={"lg"} type="submit" className="w-full text-center">
            {isLoading ? (
              <div className="w-14">
                <Spinner />
              </div>
            ) : (
              "Create Asset"
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateAsset;
