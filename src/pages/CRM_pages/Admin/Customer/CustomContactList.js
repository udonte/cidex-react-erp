import React, { useEffect } from "react";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  BreadCrumbs,
  Button,
  Checkbox,
  FilterSection,
  TableContainer,
  TableRowItem,
} from "../../../../components/CRM_components";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { MODALS } from "../../../../constants/modals.constant";
import CreateNewContactList from "../../../../components/CRM_components/contact/modal/CreateNewContactList";
import { fetchSegmentlist } from "../../../../features/CRM_features/contactManagement/contact.slice";
import { selectContactsSlice } from "../../../../features/CRM_features/contactManagement/contact.selector";
import { Spinner } from "../../../../components/HRM_components";

const CustomContactList = () => {
  const dispatch = useDispatch();
  const { segment, isLoading } = useSelector(selectContactsSlice);

  const openCreateNewListModal = useSelector(selectModalsSlice);

  const breadcrumbItems = ["Customers", "Custom Contact List"];

  const tableHeader = [
    "#",
    "List Name",
    "Contact Total ",
    "Assigned to",
    "Status",
    "Creation by ",
    "Date",
    "",
  ];

  useEffect(() => {
    dispatch(fetchSegmentlist());
  }, [dispatch]);
  return (
    <div>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      <div className="p-6 bg-white space-y-2 border-y-2 flex justify-between items-center">
        <div className="">
          <h1 className=" text-xl font-semibold"> Custom Contact List</h1>
          <div className="flex gap-x-6">
            <p className="font-semibold">
              0<span className="mx-2 text-xs font-normal">List Created</span>
            </p>
          </div>
        </div>
        <Button
          icon={<FaPlus />}
          size={"md"}
          onClick={() => {
            dispatch(openModalByName(MODALS.CONTACTS.CREATE_NEW_CONTACT_LIST));
          }}
        >
          Create New List
        </Button>
      </div>
      <div className="px-2 bg-white py-3 flex items-center">
        <Checkbox /> <p className="text-xs">Quick Access</p>
      </div>
      <FilterSection />
      <div className="">
        {" "}
        {isLoading ? (
          <div className="h-[500px] w-full flex items-center justify-center">
            <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
          </div>
        ) : (
          <>
            {segment.length > 0 ? (
              <TableContainer tableHeader={tableHeader}>
                {segment?.map(
                  (
                    {
                      first_name,
                      last_name,
                      phone_number,
                      company,
                      email,
                      address,
                      title,
                      id,
                    },
                    index
                  ) => (
                    <TableRowItem id={index}>
                      <td>1</td>
                      <td>Co-Founder Targeting</td>
                      <td className="pl-[40px]">4</td>
                      <td>Patrick Doe (Me)</td>
                      <td>Everyone</td>
                      <td>Co-founder</td>
                      <td>05/07/2023.</td>
                      <td>
                        <Link to={`:id`}>
                          <FaChevronRight />
                        </Link>
                      </td>
                    </TableRowItem>
                  )
                )}
              </TableContainer>
            ) : (
              <>NO contact</>
            )}
          </>
        )}
      </div>

      {openCreateNewListModal[MODALS.CONTACTS.CREATE_NEW_CONTACT_LIST] && (
        <CreateNewContactList />
      )}
    </div>
  );
};

export default CustomContactList;
