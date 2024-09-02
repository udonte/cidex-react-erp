import React, { useState } from "react";
import {
  Button,
  MiddleModalContainer,
} from "../../../components/SuperAdmin_components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../features/common/modals/modals.selectors";
import {
  closeAllModals,
  openModalByName,
} from "../../../features/common/modals/modals.slice";
import { MODALS } from "../../../constants/modals.constant";

const EditSubscriberModal = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    start_date: "",
    expiry_date: "",
  });

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const dateValue = new Date(value);
    const formattedDate = dateValue.toISOString().split("T")[0];
    setFormData((prevData) => ({ ...prevData, [name]: formattedDate }));
  };
  return (
    <MiddleModalContainer title="Edit Subscriber">
      <div className="py-4 px-8 ">
        <div className=" text-gray-500">
          <p className="text-sm">
            Select a new end date to extend subscriber’s subscription
          </p>
        </div>

        <div className="flex items-center gap-4 my-12">
          <div className="w-full mb-4">
            <label className="my-4 text-gray-700">Select Start Date</label>
            <input
              className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
              type="date"
              placeholder="DD/MM/YYY"
              name="start_date"
              value={formData.start_date}
              onChange={handleDateChange}
            />
          </div>
          <div className="w-full mb-4">
            <label className="my-4 text-gray-700">Select Expiry Date</label>
            <input
              className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
              type="date"
              placeholder="DD/MM/YYY"
              name="expiry_date"
              value={formData.expiry_date}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 gap-4">
          <Button
            onClick={(e) => {
              e.preventDefault();
              closeAllModals();
            }}
          >
            Done
          </Button>
        </div>
      </div>
    </MiddleModalContainer>
  );
};

export default EditSubscriberModal;
