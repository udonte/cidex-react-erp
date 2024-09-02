import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import axios from "axios";
import { toast } from "react-toastify";

const SavedEmployeeDetails = ({ editedEmployeeData }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [action, setAction] = useState("");
  const [trashAction, setTrashAction] = useState(false);

  const handleAction = (action) => {
    setAction(action);
    setPopupOpen(true);
  };

  const deleteEmployee = {
    employee_id: editedEmployeeData.id,
    trash: trashAction,
  };

  const handleConfirm = async (e) => {
    e.preventDefault();

    if (action === "Delete") {
      setTrashAction(true);
    }

    try {
      const response = await axios.post(
        "https://exceed-backend.55k1k72t6e80c.eu-west-3.cs.amazonlightsail.com/api/v1/employees",
        deleteEmployee
      );

      if (response.status === 200 && response.data.status_code === 200) {
        toast.success("Employee has been deleted");
      }
    } catch (error) {
      if (error.response.status === 404) {
        toast.error("Account does not exist");
      } else {
        toast.error("An error occoued");
      }
    }
    setPopupOpen(false);
  };

  const handleCancel = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <div className="grid grid-cols-2 space-y-4 mb-2">
        <div className=" col-span-1">
          <p className="font-semibold">Department</p>
          <p className="font-light text-sm">Development</p>
        </div>
        <div className="col-span-1">
          <p className="font-semibold">Manager</p>
          <p className="font-light text-sm">Fred Gusto</p>
        </div>
        <div>
          <p className="font-semibold">Role</p>
          <p className="font-light text-sm">Intern</p>
        </div>
        <div>
          <p className="font-semibold">Employee ID</p>
          <p className="font-light text-sm">564SH98</p>
        </div>
        <div>
          <p className="font-semibold">Gender</p>
          <p className="font-light text-sm">Male </p>
        </div>
      </div>
      <p className="font-bold text-lg my-5">Contact Information</p>
      <div className="grid grid-cols-2 space-y-5 mb-2">
        <div className=" col-span-1">
          <p className="font-semibold">Display Name</p>
          <p className="font-light text-sm">Jermaine Defoe</p>
        </div>
        <div>
          <p className="font-semibold">First Name</p>
          <p className="font-light text-sm">Jermaine </p>
        </div>
        <div className="col-span-1">
          <p className="font-semibold">Phone No</p>
          <p className="font-light text-sm">09078654321</p>
        </div>
        <div>
          <p className="font-semibold">Last Name</p>
          <p className="font-light text-sm">Defoe </p>
        </div>
      </div>
      <p className="font-bold text-lg my-5">Banking Details</p>
      <div className="grid grid-cols-2 space-y-5 mb-3">
        <div className=" col-span-1">
          <p className="font-semibold">Account No</p>
          <p className="font-light text-sm">90345433</p>
        </div>
        <div>
          <p className="font-semibold">Banke Name</p>
          <p className="font-light text-sm">GT Bank</p>
        </div>
      </div>
      <ConfirmationModal
        isOpen={isPopupOpen}
        message={`Employee Pomile Adebisi will be ${
          action === "Delete" ? "permanently delete" : "archived"
        }`}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        action={action}
      />
      <div className="flex justify-around mt-10 py-5">
        <button
          className="bg-gray-200 px-6 py-2 rounded cursor-pointer text-black w-[350px]"
          onClick={() => handleAction("Archive")}
        >
          Archive Employee
        </button>
        <button
          className="bg-gurugeeks-orange-700 px-6 py-2 rounded cursor-pointer text-white w-[350px]"
          onClick={() => handleAction("delete")}
        >
          Delete permanetly
        </button>
      </div>
    </div>
  );
};

export default SavedEmployeeDetails;
