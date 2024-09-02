import React, { useState } from "react";
import Modal from "../../../_common/ModalContainer/ModalConatiner";
import Button from "../../../_common/Button/Button";
import CustomDropdown from "../../../_common/CustomDropDown";
import EmployeeSearchDropdown from "../../../_common/EmployeeSearchDropdown";
import {
  createCheckout,
  fetchCheckout,
} from "../../../../../features/HRM_features/inventory/assets/assets.slice";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import { useDispatch } from "react-redux";

const CheckoutAsset = ({ isOpen, assetId }) => {
  const dispatch = useDispatch();
  const [checkoutAssetForm, setCheckoutAssetForm] = useState({
    asset_id: assetId,
    employee_id: "",
    note: "",
    is_returned: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutAssetForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEmployeeSelect = (selectedOption) => {
    setCheckoutAssetForm((prevState) => ({
      ...prevState,
      employee_id: selectedOption,
    }));
  };

  const handleDropDownSelect = (name, selectedOption) => {
    setCheckoutAssetForm((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCheckout(checkoutAssetForm))
      .unwrap()
      .then((payload) => {
        if (payload?.id && payload?.created_at) {
          dispatch(closeAllModals());
          dispatch(fetchCheckout());
        }
      });
  };

  return (
    <Modal title={"Asset Checkout Form"} width="sm" isOpen={isOpen}>
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="w-full">
          <label htmlFor="asset_id">Assign to</label>
          <EmployeeSearchDropdown callback={handleEmployeeSelect} />
        </div>

        <div className="w-full flex flex-col">
          <CustomDropdown
            label="Return Status"
            placeHolder={"Has the asset been returned?"}
            options={[
              { value: "true", label: "Yes" },
              { value: "false", label: "No" },
            ]}
            onSelect={(selectedOption) => {
              handleDropDownSelect("is_returned", selectedOption);
            }}
          />
        </div>

        <div className="w-full flex-col">
          <label htmlFor="description">Note</label>
          <textarea
            className="p-3 w-full h-[60px] border bg-slate-50 rounded-md"
            name="note"
            placeholder="Type something.."
            value={checkoutAssetForm.note}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-center items-center gap-x-2 py-2 flex-1 text-center">
          <Button size={"lg"} type="submit" className="w-full text-center">
            {/* {
           isLoading ? (
            <div className='w-14'>
              <Spinner />
              </div>
              ): (
                'Submit'
              )} */}{" "}
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CheckoutAsset;
