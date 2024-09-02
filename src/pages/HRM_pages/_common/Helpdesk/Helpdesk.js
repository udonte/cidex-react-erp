import React, { useEffect, useState } from "react";
import {
  BreadCrumbs,
  Button,
  FilterTab,
  Spinner,
  TabbedPages,
} from "../../../../components/HRM_components";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { MODALS } from "../../../../constants/modals.constant";
import CreateTicketModal from "../../../../components/HRM_components/_common/helpdesk/CreateTicketModal";
import Ticket from "../../../../components/HRM_components/_common/helpdesk/Ticket";
import { fetchHelpDesk } from "../../../../features/HRM_features/helpdesk/helpdesk.slice";
import { selectHelpdeskSlice } from "../../../../features/HRM_features/helpdesk/helpdesk.selectors";
import { fetchEmployees } from "../../../../features/HRM_features/employee/employee.slice";
import { fetchHelpdeskCategory } from "../../../../features/HRM_features/settings/settings.slice";
import { getDepartments } from "../../../../features/HRM_features/organisation/departments/departments.slice";

const Helpdesk = () => {
  const breadcrumbItems = ["Helpdesk"];
  const openModal = useSelector(selectModalsSlice);
  const { tickets, isLoading } = useSelector(selectHelpdeskSlice);
  const dispatch = useDispatch();
  const tabsHeader = [
    `All Tickets ( ${tickets.length} )`,
    "Unassigned ( 0 )",
    "Assigned to me ( 0 )",
    "Unanswered ( 0 )",
  ];

  const [tabIndex, setTabIndex] = useState(0);
  const changeTab = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    dispatch(fetchHelpDesk());
    dispatch(
      fetchEmployees({
        sort_by: "desc",
        per_page: 20,
        page: 1,
        order_by: "created_at",
        load_related: false,
      })
    );
    dispatch(fetchHelpdeskCategory());
    dispatch(getDepartments());
  }, [dispatch]);

  const pagesOutput = () => {
    if (tabIndex === 0) {
      return (
        <div>
          {tickets.map((ticket, index) => (
            <Ticket ticket={ticket} />
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}

      <FilterTab
        filter={true}
        search={true}
        refresh={true}
        component={
          <Button
            onClick={() =>
              dispatch(openModalByName(MODALS.HELPDESK.CREATE_TICKET))
            }
          >
            Create Ticket
          </Button>
        }
      />
      <TabbedPages
        tabIndex={tabIndex}
        setTabIndex={changeTab}
        tabsHeader={tabsHeader}
      >
        <div className="pb-[50px]">
          {isLoading ? (
            <>
              <div className="h-[500px] w-full flex items-center justify-center">
                <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
              </div>
            </>
          ) : (
            pagesOutput()
          )}
        </div>
      </TabbedPages>
      <CreateTicketModal
        title={"Create Ticket"}
        isOpen={openModal[MODALS.HELPDESK.CREATE_TICKET]}
      />
    </div>
  );
};

export default Helpdesk;
