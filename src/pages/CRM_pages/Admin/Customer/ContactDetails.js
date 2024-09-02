import React, { useState } from "react";
import {
  BreadCrumbs,
  Calls,
  Deals,
  DetailsSection,
  Documents,
  History,
  Mails,
  SMS,
  TabbedPages,
  Timeline,
} from "../../../../components/CRM_components";
import MailEditor from "../../../../components/CRM_components/ContactDetails/Mails/MailEditor";

const ContactDetails = () => {
  const breadcrumbItems = ["Customers", "Contact", "Contact Details"];
  const tabsHeader = [
    "Timeline",
    "History",
    "Calls",
    "Mails",
    "Deals",
    "SMS",
    "Documents",
  ];

  const [tabIndex, setTabIndex] = useState(0);
  const changeTab = (index) => {
    setTabIndex(index);
  };
  const tabbedPages = () => {
    switch (tabIndex) {
      case 0:
        return (
          <>
            <Timeline />
          </>
        );
      case 1:
        return (
          <>
            <History />
          </>
        );
      case 2:
        return (
          <>
            <Calls />
          </>
        );
      case 3:
        return (
          <>
            <MailEditor />
            <Mails />
          </>
        );
      case 4:
        return (
          <>
            <Deals />
          </>
        );
      case 5:
        return (
          <>
            <SMS />
          </>
        );
      case 6:
        return (
          <>
            <Documents />
          </>
        );
      default:
        break;
    }
  };

  return (
    <div className="h-full w-full">
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      <div className="p-6 grid gap-x-6 grid-cols-4 h-full w-full">
        <div className="h-full col-span-3">
          <TabbedPages
            tabIndex={tabIndex}
            tabs={tabsHeader}
            tabsHeader={tabsHeader}
            setTabIndex={changeTab}
          >
            <div className="bg-white h-full p-8">{tabbedPages()}</div>
          </TabbedPages>
        </div>
        <div className="h-full col-span-1">
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
