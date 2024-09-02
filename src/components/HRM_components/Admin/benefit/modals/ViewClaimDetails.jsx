import React, { useState } from "react";
import { RiAttachment2 } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { MODALS } from "../../../../../constants/modals.constant";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";
import Button from "../../../_common/Button/Button";
import Checkbox from "../../../_common/Checkbox";
import Modal from "../../../_common/ModalContainer/ModalConatiner";

const ViewClaimDetails = ({ isOpen }) => {
  const dispatch = useDispatch();
  return (
    <Modal title={"Claim 001"} width="sm" isOpen={isOpen}>
      <div className="flex flex-col justify-start gap-6 px-8 py-4">
        {/* approve or reject buttons */}
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Eko Hotel Trip</h2>
          <div className="flex items-center gap-4">
            <Button
              color={"gray"}
              onClick={() => {
                dispatch(
                  openModalByName(
                    MODALS.BENEFIT_MANAGEMENT.OVERVIEW.EXPENSE.REJECT_CLAIM
                  )
                );
              }}
            >
              Reject
            </Button>
            <Button
              onClick={() => {
                dispatch(
                  openModalByName(
                    MODALS.BENEFIT_MANAGEMENT.OVERVIEW.EXPENSE.APPROVE_CLAIM
                  )
                );
              }}
            >
              Approve
            </Button>
          </div>
        </div>

        {/* claim info */}
        <table>
          <tr>
            <td>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Claim Date</span>
                <p>12/09/2023</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Total Claim</span>
                <p>N10,000</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 ">Status</span>
                <p className="text-orange-200">Awaiting Approval</p>
              </div>
            </td>
          </tr>
          <div className="mb-6"></div>
          <tr>
            <td>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Category</span>
                <p>Travel</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 ">Approved Amount</span>
                <p>N</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Purpose</span>
                <p>To work better</p>
              </div>
            </td>
          </tr>
        </table>

        {/* claim details */}
        <div>
          <span className="text-xs text-gray-500 font-bold ">Details</span>
          <div className="border-2 border-gray-200 bg-gray-100 text-sm text-gray-400 px-4 py-6  rounded-md">
            <h1 className="font-bold mb-4">Title: Eko hotel trip</h1>
            <p>
              To facilitate the process, I have attached the receipt for the new
              keyboard purchase and would appreciate your prompt attention to
              this matter. I am more than willing to provide any additional
              documentation or information as required to expedite the
              reimbursement process. Thank you for considering my request for a
              keyboard reimbursement. I am committed to maintaining the highest
              standards of productivity and look forward to your positive
              response.
            </p>
          </div>
        </div>

        {/* attachment */}
        <div className="flex items-center justify-between px-4 py-2 border-2 border-orange-100 rounded-md ">
          <p>Attachment</p>
          <RiAttachment2 />
        </div>

        <div className="flex items-center gap-x-3 ">
          <Checkbox />
          <p>Add to employee payrun</p>
        </div>
      </div>
    </Modal>
  );
};

export default ViewClaimDetails;
