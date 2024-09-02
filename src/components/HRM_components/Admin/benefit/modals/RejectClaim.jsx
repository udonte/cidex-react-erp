import React from "react";
import { useDispatch } from "react-redux";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import Button from "../../../_common/Button/Button";
import MiddleModalContainer from "../../../_common/MiddleModalContainer/MiddleModalContainer";

const RejectClaim = () => {
  // const [amount, setAmount] = useState("0");
  const dispatch = useDispatch();
  const closeModals = () => dispatch(closeAllModals());

  return (
    <MiddleModalContainer title={"Reject Claim"}>
      <div className="bg-white px-8 py-4 w-[650px] h-[420px]">
        <form action="" className="w-full flex flex-col gap-6">
          <div className="flex flex-col w-full">
            <p className="mb-8">Please specify the amount for this claim</p>
            <textarea
              className="p-3 w-full border bg-slate-50 rounded-md outline-none"
              type="textarea"
              placeholder="No clear evidence and proper attachment to back trhis up, kindly resend your request with a clear receipt"
              // value={formData.description}
              name="description"
              // onChange={handleInputChange}
              rows="4"
              cols="30"
            ></textarea>
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

export default RejectClaim;
