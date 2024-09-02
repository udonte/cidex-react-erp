import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../features/common/modals/modals.slice";
import {  FaPlus } from "react-icons/fa6";
import { MODALS } from "../../../constants/modals.constant";
import { selectModalsSlice } from "../../../features/common/modals/modals.selectors";
import Checkbox from "../../../components/CRM_components/common/Checkbox/Checkbox";
import {
  MdDelete,
  MdOutlineOutbound,
} from "react-icons/md";
import {
  FaCopy,
  FaEdit,
  FaShare,
} from "react-icons/fa";
import Button from "../../../components/SuperAdmin_components/common/Button/Button";
import {
  TableContainer,
  TableRowItem,
  StatusPill,
} from "../../../components/SuperAdmin_components";
import FilterTab from "../../../components/SuperAdmin_components/common/FilterTab/FilterTab";

import { useNavigate } from "react-router-dom";
import GenerateCodeModal from "../modals/GenerateCodeModal";
import EditCodeModal from "../modals/EditPromoCodeModal";
import RedeemCodeModal from "../modals/RedeemCodeModal";
import DeleteCodeModal from "../modals/DeletePromoCodeModal";

const Promo = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectModalsSlice);

  const PromoTableHeader = [
    "Marketer's Name",
    "Promo Code",
    "Start Date",
    "Expiry Date",
    "Duration",
    "Status",
  ];
  const promoDotOptions = [
    {
      text: "Redeem Code",
      icon: <MdOutlineOutbound />,
      action: () =>
        dispatch(openModalByName(MODALS.SUPER_ADMIN.PROMO.REDEEM_CODE)),
    },

    {
      text: "Copy Code",
      icon: <FaCopy />,
      // action: () =>
      //   dispatch(openModalByName(MODALS.SUPER_ADMIN.TENANTS.VIEW_PAYMENT_INFO)),
    },

    {
      text: "Share Code",
      icon: <FaShare />,
      // action: () => navigate("/admin/generate-invoice"),
    },

    {
      text: "Edit Code",
      icon: <FaEdit />,
      action: () =>
        dispatch(openModalByName(MODALS.SUPER_ADMIN.PROMO.EDIT_CODE)),
    },
    {
      text: "Delete Code",
      icon: <MdDelete />,
      action: () =>
        dispatch(openModalByName(MODALS.SUPER_ADMIN.PROMO.DELETE_CODE)),
    },
  ];





  const filterOptions = [
    { name: "Date", list: [{ name: "Date" }] },
    { name: "Status", list: [{ name: "Pending" }] },
    { name: "Plan", list: [{ name: "Pending" }] },
    { name: "Number of Users", list: [{ name: "Pending" }] },
  ];

  return (
    <div>
      <div className="flex items-center justify-between bg-white py-6 px-6">
        <div className="flex items-center">
          <h1 className="font-bold text-[1.3rem]">Promo Code</h1>
        </div>
        <div className="flex items-center gap-x-3">
          <Button
            icon={<FaPlus />}
            onClick={() => {
              dispatch(openModalByName(MODALS.SUPER_ADMIN.PROMO.GENERATE_CODE));
            }}
          >
            Generate Code
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
          tableHeader={PromoTableHeader}
          dotOptions={promoDotOptions}
          checkBox={true}
        >
          {Array(5)
            .fill()
            .map((items, index) => (
              <TableRowItem dotOptions={promoDotOptions} id={index}>
                <td>
                  <Checkbox />
                </td>
                <td>BlackRock Inc.</td>
                <td>E3RTY</td>
                <td>13-10-2024</td>
                <td>19-11-2024</td>
                <td>30 Days left</td>
                <td>
                  <StatusPill status={"active"} text={"Active"} />
                </td>
              </TableRowItem>
            ))}
        </TableContainer>
      </div>
      <GenerateCodeModal
        isOpen={openModal[MODALS.SUPER_ADMIN.PROMO.GENERATE_CODE]}
      />
      <EditCodeModal isOpen={openModal[MODALS.SUPER_ADMIN.PROMO.EDIT_CODE]} />

      {openModal[MODALS.SUPER_ADMIN.PROMO.REDEEM_CODE] && <RedeemCodeModal />}

      {openModal[MODALS.SUPER_ADMIN.PROMO.DELETE_CODE] && <DeleteCodeModal />}
    </div>
  );
};

export default Promo;
