import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { MODALS } from "../../../../constants/modals.constant";
import Avatar from "../../../../assets/images/Ellipse 962.png";
import {
  BreadCrumbs,
  Checkbox,
  FilterSection,
  TableContainer,
  TableRowItem,
} from "../..";
import AddFiltersModal from "./AddFiltersModal";
import { MdMoreHoriz, MdOutlineStickyNote2 } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosChatboxes, IoMdCall } from "react-icons/io";
import RemoveContactFromList from "./RemoveContactFromList";
import { FiUser, FiUsers } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import SendBulkEmailModal from "./SendBulkEmailModal";
import CustomDropdown from "../../common/CustomDropDown";
import { useNavigate } from "react-router-dom";

const QuickAccess = () => {
  const dispatch = useDispatch();
  const openAddFiltersModal = useSelector(selectModalsSlice);
  const openRemoveContactsModal = useSelector(selectModalsSlice);
  const openSendBulkEmailModal = useSelector(selectModalsSlice);
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();

  const breadcrumbItems = ["Quick Access", "Co-Founder Targeting"];
  const tableHeader = ["Name", "Company", "Email", "Phone", "Title", "Address"];
  const dotOptions = [
    {
      text: "Remove from this list",
      icon: <FaTrash />,
      action: () => {
        dispatch(openModalByName(MODALS.CONTACTS.REMOVE_CONTACT_FROM_LIST));
      },
    },
  ];

  const handleDropDownSelect = (selectedValue) => {
    if (selectedValue === "sendBulkEmail") {
      dispatch(openModalByName(MODALS.CONTACTS.SEND_BULK_EMAIL));
      setShowDropDown(!showDropDown);
    }
  };

  const emailActions = [
    { value: "sendEmail", label: "Send Email" },
    { value: "sendBulkEmail", label: "Send Bulk Email" },
  ];

  const handleAddFilters = () => {
    dispatch(openModalByName(MODALS.CONTACTS.ADD_FILTERS));
  };

  const handleNavigateToDetails = (contactId) => {
    navigate(`/CRM/contact/${contactId}`);
  };
  return (
    <>
      <div className="h-full mb-14">
        <BreadCrumbs breadcrumbItems={breadcrumbItems} />
        <div className="bg-white border-y-2">
          <div className="p-6 flex justify-between items-center">
            {/* HEADER */}
            <div className="space-y-2 relative">
              <h1 className=" text-xl font-semibold">Co-Founder Targeting</h1>
              <div className="flex flex-col gap-x-2">
                <p className="font-semibold">
                  4<span className="mx-2 text-xs font-normal">Results</span>
                </p>
                <div className=" bg-white flex items-center gap-2 text-xs py-2">
                  <p>Privacy: </p>
                  <FiUsers />
                  <p className="text-xs flex items-center">Everyone</p>
                </div>
                <div className=" bg-white flex items-center gap-2 text-xs py-2">
                  <p>Manager: </p>
                  <img src={Avatar} alt="profile" width={20} />
                  <p className="text-xs flex items-center">
                    Patrick Doe <span className="text-gray-400"> (Me)</span>
                  </p>
                  <p className="text-xs cursor-pointer text-gurugeeks-green-700 flex items-center">
                    change
                    <RiArrowDropDownLine />
                  </p>
                </div>
              </div>
            </div>

            {/* EMAIL AND CALL */}
            <div className="flex gap-x-3 items-center">
              <div
                className="flex items-center gap-2 rounded-full px-4 py-2 border-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => setShowDropDown(!showDropDown)}
              >
                <AiOutlineMail />
                <p>Email</p>
                <RiArrowDropDownLine size={25} />
              </div>
              <div className="flex items-center gap-2 rounded-full px-4 py-2 border-2 hover:bg-gray-200 cursor-pointer">
                <IoMdCall />
                <p>Call</p>
              </div>
              <div className="flex items-center gap-2 rounded-full cursor-pointer">
                <MdMoreHoriz size={25} />
              </div>
            </div>

            {showDropDown && (
              <div className="z-5 top-60 right-40 absolute w-[200px]">
                {" "}
                <CustomDropdown
                  placeHolder="Send Actions"
                  label=""
                  options={emailActions}
                  onSelect={handleDropDownSelect}
                />
              </div>
            )}

            {/* END OF EMAIL AND CALL */}
          </div>
        </div>
        {/* QUICK ACCESS */}
        <div className="flex flex-col items-start justify-center w-full bg-white gap-2">
          <div className="px-2 bg-white flex items-center py-2">
            <Checkbox /> <p className="text-xs">Quick Access</p>
          </div>
        </div>
        {/*END OF QUICK ACCESS */}

        <FilterSection onAddFilters={handleAddFilters} settings={true} />
        <div className="">
          <TableContainer
            dotOptions={dotOptions}
            Checkbox={true}
            tableHeader={tableHeader}
          >
            {Array(4)
              .fill()
              .map((items, index) => (
                <TableRowItem dotOptions={dotOptions} id={index}>
                  <td>
                    <Checkbox />
                  </td>
                  <td onClick={() => handleNavigateToDetails(index)}>
                    Samuel Jason
                  </td>
                  <td>HSBF</td>
                  <td>samjay@gmail.com</td>
                  <td>+234 812 345 6789</td>
                  <td>Co-founder</td>
                  <td>14B, Hill Park Ave.</td>
                </TableRowItem>
              ))}
          </TableContainer>
        </div>
      </div>
      <AddFiltersModal
        isOpen={openAddFiltersModal[MODALS.CONTACTS.ADD_FILTERS]}
      />

      {openRemoveContactsModal[MODALS.CONTACTS.REMOVE_CONTACT_FROM_LIST] && (
        <RemoveContactFromList />
      )}

      {openSendBulkEmailModal[MODALS.CONTACTS.SEND_BULK_EMAIL] && (
        <SendBulkEmailModal />
      )}
    </>
  );
};

export default QuickAccess;
