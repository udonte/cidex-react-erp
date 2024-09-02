import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { MODALS } from "../../../../constants/modals.constant";
import { selectContactsSlice } from "../../../../features/CRM_features/contactManagement/contact.selector";
import { fetchContact } from "../../../../features/CRM_features/contactManagement/contact.slice";
import {
  AddContactModal,
  BreadCrumbs,
  Button,
  Checkbox,
  TableContainer,
  TableRowItem,
} from "../../../../components/CRM_components";

import ImportContacts from "../../../../components/CRM_components/contact/modal/ImportContacts";
import DeleteContactModal from "../../../../components/CRM_components/contact/modal/DeleteContactModal";
import AddFiltersModal from "../../../../components/CRM_components/contact/modal/AddFiltersModal";
import SaveListModal from "../../../../components/CRM_components/contact/modal/SaveListModal";
import { FilterTab, Spinner } from "../../../../components/HRM_components";
import { useNavigate } from "react-router-dom";
import { encryptId } from "../../../../utils/helperFunctions/crypto.utils";
import { ImUsers } from "react-icons/im";

const Customer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openAddContactModal = useSelector(selectModalsSlice);

  const openImportContactModal = useSelector(selectModalsSlice);
  const openDeleteContactModal = useSelector(selectModalsSlice);
  const openAddFiltersModal = useSelector(selectModalsSlice);
  const openSaveListModal = useSelector(selectModalsSlice);
  const { contacts, isLoading } = useSelector(selectContactsSlice);
  const [customerId, setCustomerId] = useState(null);
  const [filter, setFilter] = useState(false);

  const breadcrumbItems = ["Customers", "Contact"];
  const [url, setUrl] = useState(
    "/contacts/?page=1&per_page=10&order_by=-id&export_to_excel=false&sort_by=desc&load_related=false"
  );

  const tableHeader = ["Name", "Company", "Email", "Phone", "Title", "Address"];
  const dotOptions = [
    {
      text: "View Details",
      icon: <FaPlus />,
      action: (id) => {
        navigate(`/CRM/contact/${encryptId(id)}`);
      },
    },
    { text: "Add to a Custom List", icon: <FaPlus /> },
    {
      text: "Delete Contact",
      icon: <FaTrash />,
      action: (id) => {
        setCustomerId(id);
        dispatch(openModalByName(MODALS.CONTACTS.DELETE_CONTACT));
      },
    },
  ];

  const addFilter = (filter) => {
    if (url.indexOf(`filter_string=${filter}`) === -1) {
      // If it does not exist, add the filter_string parameter
      setUrl((prev) => (prev += `&filter_string=${filter}`));

      setFilter(true);
    }
  };

  const removeFilter = (filter) => {
    if (url.indexOf(`filter_string=${filter}`) !== -1) {
      // If it exists, remove it
      setUrl((prev) => prev.replace(`&filter_string=${filter}`, ""));
    }
  };

  const clearFilter = () => {
    dispatch(
      fetchContact(
        "/contacts/?page=1&per_page=10&order_by=-id&export_to_excel=false&sort_by=desc&load_related=false"
      )
    );
    setFilter(false);
  };

  const filterOptions = [
    {
      name: "Name",
      list: contacts.map((contact) => ({
        name: `${contact.first_name} ${contact.last_name}`,
        value: `${contact.first_name}${contact.last_name}`,
      })),
      callback: addFilter,
    },
    {
      name: "Title",
      list: contacts.map((contact) => ({
        name: `${contact.title}`,
        value: `${contact.title}`,
      })),
      callback: addFilter,
    },
    { name: "Company", list: [{ name: "Pending" }] },
    { name: "Date Created", list: [{ name: "Pending" }] },
    { name: "Source", list: [{ name: "Pending" }] },
  ];

  useEffect(() => {
    dispatch(fetchContact(url));
  }, [dispatch, url]);

  return (
    <>
      <div className="h-full mb-14">
        <BreadCrumbs breadcrumbItems={breadcrumbItems} />
        {/* <Button
          size={"sm"}
          color="secondary"
          className="text-orange-700 font-bold"
        >
          Export Data
        </Button> */}
        <div className="bg-white border-y-2">
          <div className="p-6 flex justify-between items-center">
            <div className="space-y-2">
              <h1 className=" text-xl font-semibold"> Customers Summary</h1>
              <div className="flex gap-x-6">
                <p className="font-semibold">
                  {contacts?.length ? <>{contacts.length}</> : "N/A"}
                  <span className="mx-2 text-xs font-normal">
                    Total Contacts
                  </span>
                </p>
                <p>
                  0
                  <span className="mx-2 text-xs font-normal">
                    Active Contacts
                  </span>
                </p>
                <p>
                  0
                  <span className="mx-2 text-xs font-normal">
                    Inactive Contacts
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-x-3 items-center">
              {filter && contacts.length > 0 ? (
                <Button
                  onClick={() => {
                    dispatch(openModalByName(MODALS.CONTACTS.SAVE_LIST));
                  }}
                  icon={<FaPlus />}
                  size={"md"}
                  color={"primary"}
                >
                  Save as a List
                </Button>
              ) : (
                <>
                  {" "}
                  <Button
                    icon={<BiDownload />}
                    size={"md"}
                    color={"primary"}
                    onClick={() => {
                      dispatch(
                        openModalByName(MODALS.CONTACTS.IMPORT_CONTACTS)
                      );
                    }}
                  >
                    Import Contact
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(openModalByName(MODALS.CONTACTS.ADD_CONTACT));
                    }}
                    icon={<FaPlus />}
                    size={"md"}
                    color={"primary"}
                  >
                    Add New Contact
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="px-2 bg-white py-3 flex items-center">
          <Checkbox /> <p className="text-xs">Exclude Inactive Customers</p>
        </div>
        <FilterTab
          clearFilter={clearFilter}
          removeFilter={removeFilter}
          addFilter={addFilter}
          filterOptions={filterOptions}
          sort={true}
          filter={true}
        />
        <div className="">
          {isLoading ? (
            <div className="h-[500px] w-full flex items-center justify-center">
              <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
            </div>
          ) : (
            <>
              {contacts.length > 0 ? (
                <TableContainer
                  dotOptions={dotOptions}
                  Checkbox={true}
                  tableHeader={tableHeader}
                >
                  {contacts?.map(
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
                      <TableRowItem dotOptions={dotOptions} id={id} key={index}>
                        <td>
                          <Checkbox />
                        </td>
                        <td>
                          {first_name} {last_name}
                        </td>
                        <td>{company}</td>
                        <td>{email}</td>
                        <td>{phone_number}</td>
                        <td>{title}</td>
                        <td>{address}</td>
                      </TableRowItem>
                    )
                  )}
                </TableContainer>
              ) : (
                <div className="w-full h-[300px] flex items-center justify-center text-gurugeeks-dark-500">
                  <div className="flex flex-col items-center justify-center">
                    <ImUsers className="text-[80px] " />
                    <p className="font-semibold text-lg">No Contact Found</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <AddFiltersModal
        isOpen={openAddFiltersModal[MODALS.CONTACTS.ADD_FILTERS]}
      />
      <AddContactModal
        isOpen={openAddContactModal[MODALS.CONTACTS.ADD_CONTACT]}
      />
      {openImportContactModal[MODALS.CONTACTS.IMPORT_CONTACTS] && (
        <ImportContacts />
      )}
      {openDeleteContactModal[MODALS.CONTACTS.DELETE_CONTACT] && (
        <DeleteContactModal customerId={customerId} />
      )}
      {openSaveListModal[MODALS.CONTACTS.SAVE_LIST] && (
        <SaveListModal contacts={contacts} />
      )}
    </>
  );
};

export default Customer;
