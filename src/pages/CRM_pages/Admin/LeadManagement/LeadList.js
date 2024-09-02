import React from "react";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  BreadCrumbs,
  Button,
  Checkbox,
  TableContainer,
  TableRowItem,
} from "../../../../components/CRM_components";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { MODALS } from "../../../../constants/modals.constant";
import FilterTab from "../../../../components/CRM_components/FilterTab/FilterTab";
import CreateSegment from "../../../../components/CRM_components/Leads/modals/CreateSegment";

const LeadList = () => {
  const dispatch = useDispatch();
  const openCreateSegment = useSelector(selectModalsSlice);

  const breadcrumbItems = ["Leads", "Lead List"];

  const tableHeader = [
    "#",
    "Segment Name",
    "Leads Total",
    "Leads Status",
    "Privacy",
    "Creation By",
    "Assigned to",
    "Date",
    "",
  ];

  return (
    <div>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      <div className="p-6 bg-white space-y-2 border-y-2 flex justify-between items-center">
        <div className="">
          <h1 className=" text-xl font-semibold"> Lead Lists</h1>
          <div className="flex gap-x-6">
            <p className="font-semibold">
              1<span className="mx-2 text-xs font-normal">List Created</span>
            </p>
          </div>
        </div>
        <Button
          icon={<FaPlus />}
          size={"md"}
          onClick={() => {
            dispatch(openModalByName(MODALS.LEADS.CREATE_SEGMENT));
          }}
        >
          Create New Segment
        </Button>
      </div>
      <div className="px-2 bg-white py-3 flex items-center">
        <Checkbox /> <p className="text-xs">Quick Access</p>
      </div>
      <FilterTab
        refresh={true}
        sort={true}
        filter={true}
        searchPlaceholder={"name, email"}
      />
      <div className="">
        <TableContainer Checkbox={true} tableHeader={tableHeader}>
          {Array(1)
            .fill()
            .map((items, index) => (
              <TableRowItem id={index}>
                <td>1</td>
                <td>High Probability Customer</td>
                <td>4</td>
                <td>Multiple</td>
                <td>Everyone</td>
                <td>
                  Source{" "}
                  <span className="border border-gray-200 px-2 py-1 rounded text-xs text-gray-400">
                    Landing Page
                  </span>
                </td>
                <td>Patrick Venna</td>
                <td>12/09/2024</td>
                <td>
                  <Link to={`:id`}>
                    <div className="hover:text-2xl text-center font-bold text-green-700">
                      <FaChevronRight />
                    </div>
                  </Link>
                </td>
              </TableRowItem>
            ))}
        </TableContainer>
      </div>

      {openCreateSegment[MODALS.LEADS.CREATE_SEGMENT] && <CreateSegment />}
    </div>
  );
};

export default LeadList;
