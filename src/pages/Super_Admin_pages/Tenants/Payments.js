import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../features/common/modals/modals.slice";
import { FaFileInvoice, FaPlus } from "react-icons/fa6";
import { MODALS } from "../../../constants/modals.constant";
import { selectModalsSlice } from "../../../features/common/modals/modals.selectors";
import AddTenantsModal from "../modals/AddTenantsModal";
import Checkbox from "../../../components/CRM_components/common/Checkbox/Checkbox";
import { MdCancel, MdDelete, MdViewAgenda } from "react-icons/md";
import { FaEdit, FaFileArchive, FaHistory } from "react-icons/fa";
import Button from "../../../components/SuperAdmin_components/common/Button/Button";
import {
  FilterSection,
  TableContainer,
  TableRowItem,
  StatusPill,
} from "../../../components/SuperAdmin_components";
import FilterTab from "../../../components/SuperAdmin_components/common/FilterTab/FilterTab";
import ViewPaymentHistoryModal from "../modals/ViewPaymentHistoryModal";
import ViewPaymentInfoModal from "../modals/ViewPaymentInfoModal";
import { useNavigate } from "react-router-dom";
import ViewPaymentInfoForPaymentsModal from "../modals/ViewPaymentInfoForPaymentsModal";
import ViewPaymentHistoryForPaymentsModal from "../modals/ViewPaymentHistoryForPaymentsModal";

const Payments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openModal = useSelector(selectModalsSlice);

  const invoiceTableHeader = [
    "Trx ID",
    "Name",
    "Plan",
    "Email",
    "Users",
    "Status",
    "Entry Date",
  ];
  const invoiceDotOptions = [
    {
      text: "View Payment Info",
      icon: <MdViewAgenda />,
      action: () =>
        dispatch(
          openModalByName(
            MODALS.SUPER_ADMIN.PAYMENT.VIEW_PAYMENT_INFO_FOR_PAYMENTS
          )
        ),
    },
    {
      text: "Payment History",
      icon: <FaHistory />,
      action: () =>
        dispatch(
          openModalByName(
            MODALS.SUPER_ADMIN.PAYMENT.VIEW_PAYMENT_HISTORY_FOR_PAYMENTS
          )
        ),
    },
    {
      text: "Remove From All List",
      icon: <FaFileArchive />,
      action: () => console.log("clicked"),
    },
    {
      text: "Delete Subscriber",
      icon: <MdDelete />,
      action: () => console.log("clicked"),
    },
  ];




  const handleSearch = (searchTerm) => {
    // Implement your search logic here
  };

  const filterOptions = [
    { name: "Date", list: [{ name: "Date" }] },
    { name: "Status", list: [{ name: "Pending" }] },
    { name: "Plan", list: [{ name: "Pending" }] },
    { name: "Number of Users", list: [{ name: "Pending" }] },
  ];

  return (
    <div>
      <div className="flex items-center justify-between bg-white py-6 px-6">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-[1.3rem]">Payment Summary</h1>
          <div className="flex items-center text-sm text-gray-500 gap-3">
            <div className="flex items-center gap-1">
              <span className="rounded-full py-1 px-2 bg-orange-100">10</span>
              <p>Failed Payments</p>
            </div>
            <div className="flex items-center  gap-1">
              <span className="rounded-full py-1 px-2 bg-orange-100">10</span>
              <p>Successful Payments</p>
            </div>
            <div className="flex items-center  gap-1">
              <span className="rounded-full py-1 px-2 bg-orange-100">10</span>
              <p>Pending</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <Button
            icon={<FaPlus />}
            // onClick={() => {
            //   dispatch(openModalByName(MODALS.SUPER_ADMIN.TENANTS.ADD_TENANTS));
            // }}
          >
            Add Tenants
          </Button>
        </div>
      </div>
      {/* filter */}
      <FilterTab
        filter={true}
        sort={true}
        refresh={true}
        search={true}
        searchTerm={""} // Pass your search term state here
        searchPlaceholder="Search..."
        filterOptions={filterOptions}
      />
      <div className="mt-4">
        <TableContainer
          tableHeader={invoiceTableHeader}
          dotOptions={invoiceDotOptions}
          checkBox={true}
        >
          {Array(5)
            .fill()
            .map((items, index) => (
              <TableRowItem dotOptions={invoiceDotOptions} id={index}>
                <td>
                  <Checkbox />
                </td>
                <td>#12334</td>
                <td>BlackRock Inc.</td>
                <td>
                  <div className="text-center flex items-center justify-center">
                    <p className="bg-[#BCA735] w-fit px-2 text-white rounded-xl text-center">
                      Gold
                    </p>
                  </div>
                </td>
                <td>blackrock@outlook.com</td>
                <td>3 of 10</td>
                <td>
                  <StatusPill status={"active"} text={"Active"} />
                </td>
                <td>10-10-23</td>
              </TableRowItem>
            ))}
        </TableContainer>
      </div>
      <AddTenantsModal
        isOpen={openModal[MODALS.SUPER_ADMIN.TENANTS.ADD_TENANTS]}
      />
      <ViewPaymentInfoForPaymentsModal
        isOpen={
          openModal[MODALS.SUPER_ADMIN.PAYMENT.VIEW_PAYMENT_INFO_FOR_PAYMENTS]
        }
      />
      {openModal[
        MODALS.SUPER_ADMIN.PAYMENT.VIEW_PAYMENT_HISTORY_FOR_PAYMENTS
      ] && <ViewPaymentHistoryForPaymentsModal />}
    </div>
  );
};

export default Payments;
