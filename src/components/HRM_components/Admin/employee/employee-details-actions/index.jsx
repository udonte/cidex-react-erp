import React, { useState } from "react";
import Button from "../../../_common/Button/Button";
import ConfirmationModal from "../modal/ConfirmationModal";
import { useDispatch } from "react-redux";
import { deleteEmployeeDetails } from "../../../../../features/HRM_features/employee/employee.slice";
import { toast } from "react-toastify";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";

const ActionButtons = ({ employeeData }) => {
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [action, setAction] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setIsLoading(true);
      await dispatch(deleteEmployeeDetails(employeeData.id));
      setIsLoading(false);
      
      
      toast.success(
        ` ${employeeData?.first_name} ${employeeData?.last_name} ${action === "Delete" ? "has been deleted successfuly" : "has been archived successfully"} `
      )
      dispatch(closeAllModals())
      setIsPopupOpen(false)
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };
  const handleCancel = () => {
    setIsPopupOpen(false);
  };
  const handleAction = (actionType) => {
    setAction(actionType);
    setIsPopupOpen(true);
  };

  return (
    <div className="w-full flex gap-8 flex-row justify-center items-center py-12">
      <Button
        color="gray"
        className="font-medium justify-center text-black_text text-[16px] w-full py-4"
        onClick={() => handleAction("Archive")}
      >
        Archive
      </Button>
      <Button
        color="#B8541B"
        className="font-medium  justify-center text-black_text text-[16px] w-full py-4"
        onClick={() => handleAction("Delete")}
      >
        Delete permanently
      </Button>
      <ConfirmationModal
        isOpen={isPopupOpen}
        message={
          <p>
            Employee{" "}
            <span style={{ color: "black", fontWeight: "600" }}>
              {employeeData?.first_name} {employeeData?.last_name}
            </span>{" "}
            will be {action === "Delete" ? "permanently deleted" : "archived"}
          </p>
        }
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        action={action}
        isLoading={loading}
      />
    </div>
  );
};

export default ActionButtons;
