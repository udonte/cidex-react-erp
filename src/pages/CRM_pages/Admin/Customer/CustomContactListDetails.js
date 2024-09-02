import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../constants/routes.constants";
import {
  BreadCrumbs,
  Checkbox,
  FilterSection,
  TableContainer,
  TableRowItem,
} from "../../../../components/CRM_components";

const CustomContactListDetails = () => {
  const breadcrumbItems = [
    "Customers",
    "Custom Contact List",
    "Co-founder Targeting",
  ];

  const tableHeader = ["Name", "Company", "Email", "Phone", "Title", "Address"];

  return (
    <div>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      <div className="p-6 bg-white space-y-2 border-y-2 flex justify-between items-center">
        <div className="">
          <h1 className=" text-xl font-semibold"> Co-Founder Targeting</h1>
          <div className="flex gap-x-6">
            <p className="font-semibold">
              0<span className="mx-2 text-xs font-normal">List Created</span>
            </p>
          </div>
        </div>
      </div>
      <div className="px-2 bg-white py-3 flex items-center">
        <Checkbox /> <p className="text-xs">Quick Access</p>
      </div>
      <FilterSection />
      <div className="">
        <TableContainer Checkbox={true} tableHeader={tableHeader}>
          {Array(1)
            .fill()
            .map((items, index) => (
              <TableRowItem id={index}>
                <td>
                  <Checkbox />
                </td>
                <td>
                  <Link to={`/CRM/${ROUTE_PATHS.PRIVATE.CUSTOMER.CONTACT}/:id`}>
                    Samuel Jason
                  </Link>
                </td>
                <td>HSBF</td>
                <td>samjay@gmail.com</td>
                <td>+234 812 345 6789</td>
                <td>Co-founder</td>
                <td className="pr-6">14B, Hill Park Ave.</td>
              </TableRowItem>
            ))}
        </TableContainer>
      </div>
    </div>
  );
};

export default CustomContactListDetails;
