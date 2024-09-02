import React, { useState } from "react";
import { FaAddressCard, FaList, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../../constants/modals.constant";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import {
  BreadCrumbs,
  Button,
  FilterSection,
  TabbedPages,
  TableContainer,
  TableRowItem,
} from "../../../../../components/CRM_components";
import KanbanBoard from "../../../../../components/CRM_components/customerService/KanbanBoard/KanbanBoard";
import CreateCustomerTicketModal from "../../../../../components/CRM_components/customerService/modals/CreateCustomerTicketModal";
import TableViewToggleButton from "../../../../../components/HRM_components/_common/TableViewToggleButton";
import { StatusPill } from "../../../../../components/HRM_components";
import CustomDropdown from "../../../../../components/HRM_components/_common/CustomDropDown";

const Tickets = () => {
  const dispatch = useDispatch();
  const openCreateTicketModal = useSelector(selectModalsSlice);
  const breadcrumbItems = ["Customer Service", "Tickets"];

  const dotOptions = [
    {
      text: "View Ticket",
      icon: <FaPlus />,
      callBack: (id) => {},
    },
    {
      text: "Delete Ticket",
      icon: <FaTrash />,
      callBack: (id) => {
        // dispatch(deleteAssetById(id))
        //   .unwrap()
        //   .then((payload) => {
        //     console.log(payload);
        //     if (payload.data.id === id) {
        //       dispatch(fetchAssets());
        // }
        // });
      },
    },
  ];

  const tableHeader = [
    "Ticket ID",
    "Customer",
    "Subject",
    "Assigned to",
    "Priority",
    "Status",
    "Entry Date",
  ];

  const tabs = [
    "All Tickets ( 50 )",
    "Unassigned ( 7 )",
    "Assigned to me ( 0 )",
  ];
  const [tabIndex, setTabIndex] = useState(1);
  const [listView, setListView] = useState(true);

  const changeTab = (index) => {
    setTabIndex(index);
  };

  const handleListViewToggle = () => {
    setListView((prevState) => !prevState);
  };
  const pagesOutput = () => {
    switch (listView) {
      case true:
        return (
          <>
            <TableContainer
              dotOptions={true}
              checkBox={true}
              tableHeader={tableHeader}
            >
              <TableRowItem
                // handleOnClick={navigate("/CRM/tickets/cjasjdkasdj")}
                checkbox={true}
                dotOptions={dotOptions}
              >
                <td>
                  <p>#128</p>
                </td>
                <td>
                  <p>John Doe</p>
                </td>
                <td>
                  <p className="truncate">Wrong order was delivered</p>
                </td>
                <td>
                  <div className="">
                    <CustomDropdown placeHolder={"Choose an Assignee"} />
                  </div>
                </td>
                <td>
                  <p>Normal</p>
                </td>
                <td>
                  {" "}
                  <StatusPill status={"active"} text={"active"} />
                </td>
                <td>
                  <p>23-08-2023</p>
                </td>
              </TableRowItem>
            </TableContainer>
          </>
        );
      case false:
        return (
          <>
            <KanbanBoard />
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div className="h-screen overflow-auto">
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      <FilterSection
        component={
          <>
            <TableViewToggleButton
              activeState={listView}
              leftIcon={
                <div className="flex items-center justify-center gap-x-2">
                  <p>
                    <FaList />
                  </p>
                </div>
              }
              rightIcon={
                <div className="flex items-center justify-center gap-x-2">
                  <p>
                    <FaAddressCard />
                  </p>
                </div>
              }
              handleOnClick={handleListViewToggle}
            />
            <div>
              <Button
                onClick={() => {
                  dispatch(
                    openModalByName(
                      MODALS.CUSTOMER_SERVICE.CREATE_CUSTOMER_TICKET
                    )
                  );
                }}
              >
                <div className=" bg-white p-[3px] rounded-full items-center justify-center flex">
                  <FaPlus className="text-sm text-gurugeeks-green-600" />
                </div>
                Create Ticket
              </Button>
            </div>
          </>
        }
      />

      <TabbedPages tabIndex={tabIndex} setTabIndex={changeTab} tabs={tabs}>
        {pagesOutput()}
      </TabbedPages>
      {/* <KanbanBoard /> */}

      <CreateCustomerTicketModal
        isOpen={
          openCreateTicketModal[MODALS.CUSTOMER_SERVICE.CREATE_CUSTOMER_TICKET]
        }
      />
    </div>
  );
};

export default Tickets;
