import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TbCurrencyNaira } from "react-icons/tb";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import Button from "../../../_common/Button/Button";
import MiddleModalContainer from "../../../_common/MiddleModalContainer/MiddleModalContainer";

const ApproveClaim = () => {
  const [amount, setAmount] = useState("0");
  const dispatch = useDispatch();
  const closeModals = () => dispatch(closeAllModals());

  return (
    <MiddleModalContainer title={"Approve Claim"}>
      <div className="bg-white px-8 py-4 w-[650px] h-[420px]">
        <form action="" className="w-full flex flex-col gap-6">
          <div className="flex flex-col w-full">
            <p className="mb-8">Please specify the amount for this claim</p>
            <label htmlFor="" className="mb-1 text-sm text-gray-400">
              Amount
            </label>
            <div className="relative">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border rounded-md pl-12 py-4 px-6 focus:outline-2 focus:outline-gurugeeks-orange-700 h-full bg-gray-100"
              />
              <span className="absolute left-2 top-3">
                <TbCurrencyNaira size={30} color={"gray"} />
              </span>
            </div>
          </div>

          <div className="flex items-center ml-auto gap-4">
            <Button>Confirm</Button>
            <Button onClick={closeModals} color={"gray"}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </MiddleModalContainer>
  );
};

export default ApproveClaim;
