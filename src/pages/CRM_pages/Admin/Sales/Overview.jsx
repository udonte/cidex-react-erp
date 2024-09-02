import React, { useEffect, useState } from "react";
import { BiMoney, BiReceipt, BiUser } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiOutlineArrowUp } from "react-icons/ai";
import {
  BreadCrumbs,
  TabbedPages,
  TableContainer,
  TableRowItem,
} from "../../../../components/CRM_components";
import Checkbox from "../../../../components/CRM_components/common/Checkbox/Checkbox";
import { Button } from "../../../../components/HRM_components";
import { useSelector } from "react-redux";
import { selectInvoiceSlice } from "../../../../features/CRM_features/salesManagement/invloice.selector";
import { useDispatch } from "react-redux";
import { fetchInvoices } from "../../../../features/CRM_features/salesManagement/invoice.slice";

const Overview = () => {
  const breadcrumbItems = ["Sales", "Overview", ""];
  const tabLabels = ["Closed Sales", "Open Sales"];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabChange = (index) => {
    setActiveTabIndex(index);
  };
  const dispatch = useDispatch();
  // const { invoices, isLoading } = useSelector(selectInvoiceSlice);

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

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  const pageOutput = () => {
    switch (activeTabIndex) {
      case 0:
        return (
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
      <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button>
      <div className="px-6 py-6">
        {/* OVERVIEW */}
        <div className="border-b-2 border-gray-200 mb-4">
          <h1 className="py-2">Overview</h1>
        </div>
        {/* BOARD */}
        <div className="flex flex-start w-full gap-4">
          {/* LEFT BOARD */}
          <div className="w-2/3  flex flex-col gap-2">
            <div className=" flex items-start justify-between gap-2">
              <div className="bg-white p-2 border-2 border-gray-200 rounded-md w-1/3 flex items-start justify-between">
                <div className="flex flex-col gap-4">
                  <h3 className="text-gray-500">Total Leads</h3>{" "}
                  <p className="font-bold text-2xl">10</p>
                </div>
                <div className="flex flex-col justify-start items-end gap-4">
                  <div className="rounded-full p-2 bg-orange-100">
                    <BiUser color="orange" size={20} />
                  </div>
                  <div className="flex items-start gap-2">
                    <p>
                      <AiOutlineArrowUp color="green" size={20} />
                    </p>{" "}
                    <span className="text-sm">2.5%</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-2 border-2 border-gray-200 rounded-md w-1/3 flex items-start justify-between">
                <div className="flex flex-col gap-4">
                  <h3 className="text-gray-500">Total Deals</h3>{" "}
                  <p className="font-bold text-2xl">17</p>
                </div>
                <div className="rounded-full p-2 bg-green-100">
                  <BiReceipt color="green" size={20} />
                </div>
              </div>
              <div className="bg-white p-2 border-2 border-gray-200 rounded-md w-1/3 flex items-start justify-between">
                <div className="flex flex-col gap-4">
                  <h3 className="text-gray-500">Total Sales</h3>{" "}
                  <p className="font-bold text-2xl">N1,090,000</p>
                </div>
                <div className="rounded-full p-2 bg-blue-100">
                  <BiMoney color="blue" size={20} />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 border-2 border-gray-200 rounded-md">
              <div>
                <h2 className="font-bold text-gray-200">Sales Invoice Chart</h2>
                <div>Chart</div>
              </div>
            </div>
          </div>

          {/* RIGHT BOARD */}
          <div className="flex flex-col w-1/3  gap-2">
            {/* top right */}
            <div className="bg-white p-4 border-2 border-gray-200 rounded-md">
              <h3 className="mb-4 font-bold">Top Staff</h3>
              <div>
                <div className="flex items-center justify-between mb-4 text-gray-300">
                  <p>Name</p>
                  <span>Sales</span>
                </div>
                <ul>
                  <li className="flex items-center justify-between text-gray-500">
                    <p>
                      <span>1.</span> Sam Larry
                    </p>
                    <span className="text-gray-800">N1,909,000</span>
                  </li>
                  <li className="flex items-center justify-between text-gray-500">
                    <p>
                      <span>2.</span> Eko Larry
                    </p>
                    <span className="text-gray-800">N1,509,000</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* bottom-right */}
            <div className="bg-white p-4 border-2 border-gray-200 rounded-md">
              <h3 className="mb-4 font-bold">Best Sellers</h3>
              <div>
                <div className="flex items-center justify-between mb-4 text-gray-300">
                  <p>Name</p>
                  <span>Sales</span>
                </div>
                <ul>
                  <li className="flex items-center justify-between text-gray-500">
                    <p>
                      <span>1.</span> Product A
                    </p>
                    <span className="text-gray-800">N1,909,000</span>
                  </li>
                  <li className="flex items-center justify-between text-gray-500">
                    <p>
                      <span>2.</span> Product B
                    </p>
                    <span className="text-gray-800">N1,509,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SALES INVOICE */}
        <div>
          <div className="border-b-2 border-gray-200 mb-4 flex items-center justify-between mt-12">
            <h1 className="py-2">Sales Invoice</h1>
            <p className="cursor-pointer text-green-500">see more</p>
          </div>
          <div>
            <TabbedPages
              tabIndex={activeTabIndex}
              tabsHeader={tabLabels}
              setTabIndex={handleTabChange}
            >
              <>{pageOutput()}</>
            </TabbedPages>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
