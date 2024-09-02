import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../_common/Button/Button";
import Modal from "../../../_common/ModalContainer/ModalConatiner";
import {
  createVendor,
  fetchVendors,
} from "../../../../../features/HRM_features/inventory/vendors/vendors.slice";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import { toast } from "react-toastify";
import Spinner from "../../../../_common/Spinner";
import { selectVendors } from "../../../../../features/HRM_features/inventory/vendors/vendors.selectors";

const AddVendors = ({ isOpen }) => {
  const { isLoading } = useSelector(selectVendors);
  const [vendorFormData, setVendorFormData] = useState({
    name: "",
    location: "",
    personnel: "",
    phone_number: "",
    email: "",
    address: "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVendorFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createVendor(vendorFormData))
      .unwrap()
      .then((payload) => {
      
        if (payload.created_at && payload.id) {
          toast.success("Vendor added successfully");
          dispatch(fetchVendors());
          dispatch(closeAllModals());
        }
      });
  };

  return (
    <Modal title={"Add Vendor"} width="sm" isOpen={isOpen}>
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="w-full">
          <label htmlFor="vendor_name">Vendor Name</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="name"
            value={vendorFormData.vendor_name}
            placeholder="Enter Vendor Name"
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="vendor_location">Location</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="location"
            placeholder="Enter Location"
            value={vendorFormData.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="vendor_personnel">Personnel</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="personnel"
            placeholder="Enter Personnel Name"
            value={vendorFormData.personnel}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="vendor_number">Phone Number</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="phone_number"
            placeholder="Enter Phone Number"
            value={vendorFormData.phone_no}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full">
          <label htmlFor="vendor_email">Email Address</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="email"
            name="email"
            placeholder="Enter Email Address"
            value={vendorFormData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="vendor_address">Address</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="address"
            placeholder="Enter Email Address"
            value={vendorFormData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-center items-center gap-x-2 py-2 flex-1 text-center">
          <Button size={"lg"} type="submit" className="w-full text-center">
            {isLoading ? (
              <div className="w-14">
                <Spinner />
              </div>
            ) : (
              "Create Vendor"
            )}{" "}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddVendors;
