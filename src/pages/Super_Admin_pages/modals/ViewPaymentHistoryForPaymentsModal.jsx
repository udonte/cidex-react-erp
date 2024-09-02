import React from "react";
import {
  Button,
  MiddleModalContainer,
  StatusPill,
  TableContainer,
  TableRowItem,
} from "../../../components/SuperAdmin_components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../features/common/modals/modals.selectors";
import {
  closeAllModals,
  openModalByName,
} from "../../../features/common/modals/modals.slice";
import { MODALS } from "../../../constants/modals.constant";
import EnterVerificationCodeModal from "./EnterVerificationCodeModal";
import { ToastContainer } from "react-toastify";
import Checkbox from "../../../components/SuperAdmin_components/Checkbox/Checkbox";
import { MdDownload } from "react-icons/md";

const ViewPaymentHistoryForPaymentsModal = () => {
  const dispatch = useDispatch();
  const invoiceTableHeader = [
    "Inv ID",
    "Invoice Date",
    "Amount",
    "Plan",
    "Status",
    "Date",
  ];
  return (
    <MiddleModalContainer title="Payment & Subscription Billing">
      <div className="py-12 px-24">
        <div className="flex items-center justify-end mb-12">
          <Button icon={<MdDownload />}>Download PDF</Button>
        </div>
        <div className="mt-4">
          <TableContainer tableHeader={invoiceTableHeader} checkBox={true}>
            {Array(5)
              .fill()
              .map((items, index) => (
                <TableRowItem id={index}>
                  <td>
                    <Checkbox />
                  </td>
                  <td>#12334</td>
                  <td>10-10-23</td>
                  <td>$1000</td>
                  <td>
                    <div className="text-center flex items-center justify-center">
                      <p className="bg-[#BCA735] w-fit px-2 text-white rounded-xl text-center">
                        Gold
                      </p>
                    </div>
                  </td>
                  <td>
                    <StatusPill status={"active"} text={"Active"} />
                  </td>
                  <td>10-10-23</td>
                </TableRowItem>
              ))}
          </TableContainer>
        </div>
      </div>
    </MiddleModalContainer>
  );
};

export default ViewPaymentHistoryForPaymentsModal;
