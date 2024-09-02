import React, { useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  BreadCrumbs,
  Button,
  Checkbox,
  FilterSection,
  TabbedPages,
  TableContainer,
  TableRowItem,
} from "../../../../components/CRM_components";

const SalesInvoice = () => {
  const breadcrumbItems = ["Sales", "Invoice", ""];
  const tabLabels = ["Closed Sales", "Open Sales"];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const navigate = useNavigate();
  const handleTabChange = (index) => {
    setActiveTabIndex(index);
  };

  // SALSES INVOICE TABLE
  const invoiceTableHeader = ["Invoice ID", "Customer", "Account", "Date"];
  const invoiceDotOptions = [
    { text: "Edit", icon: <FaEdit />, action: () => console.log("clicked") },
    {
      text: "Delete",
      icon: <MdDelete />,
      action: () => console.log("clicked"),
    },
  ];

  const pageOutput = () => {
    switch (activeTabIndex) {
      case 0:
        return (
          <div className="mt-4">
            <TableContainer
              tableHeader={invoiceTableHeader}
              dotOptions={invoiceDotOptions}
              Checkbox={true}
            >
              {Array(5)
                .fill()
                .map((items, index) => (
                  <TableRowItem dotOptions={invoiceDotOptions} id={index}>
                    <td>
                      <Checkbox />
                    </td>
                    <td>#12334</td>
                    <td>Sam Larry</td>
                    <td>#100,000</td>
                    <td>10-10-23</td>
                  </TableRowItem>
                ))}
            </TableContainer>
          </div>
        );

      case 1:
        return (
          <div className="mt-4">
            <TableContainer
              tableHeader={invoiceTableHeader}
              dotOptions={invoiceDotOptions}
              Checkbox={true}
            >
              {Array(5)
                .fill()
                .map((items, index) => (
                  <TableRowItem dotOptions={invoiceDotOptions} id={index}>
                    <td>
                      <Checkbox />
                    </td>
                    <td>#12334</td>
                    <td>Sam Larry</td>
                    <td>#100,000</td>
                    <td>10-10-23</td>
                  </TableRowItem>
                ))}
            </TableContainer>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="h-full">
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}

      <div className="p-6">
        <div className="flex items-center justify-between gap-x-3">
          <FilterSection settings={true} />
          <Button
            icon={<FaPlus />}
            onClick={() => {
              navigate("/CRM/create-invoice");
            }}
          >
            Create Invoice
          </Button>
        </div>
        <TabbedPages
          tabIndex={activeTabIndex}
          tabsHeader={tabLabels}
          setTabIndex={handleTabChange}
        >
          <>{pageOutput()}</>
        </TabbedPages>
      </div>
    </div>
  );
};

export default SalesInvoice;
