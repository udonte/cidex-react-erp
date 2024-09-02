import React from "react";
import TableContainer from "../../_common/Table/TableContainer";
import TableRowItem from "../../_common/Table/TableRowItem";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../_common/ProgressBar";
import TopTab from "../../_common/TopTab";
import FilterTab from "../../../_common/FilterTab/FilterTab";

const Submission = () => {
  const navigate = useNavigate();
  const tableHeader = ["Name", "Department", "Status Progress", ""];
  return (
    <div>
      <TopTab
        leftComponent={
          <h1 className="text-lg font-bold text-[#161E54]">Submission</h1>
        }
      />
      <FilterTab sort={true} />
      <main>
        <TableContainer tableHeader={tableHeader}>
          <TableRowItem
            onClick={() => navigate(`${"/HRM/mandatory-training"}/:id`)}
          >
            <td>John Doe</td>
            <td>Product Design</td>
            <td>
              <div className="m-auto">
                <p>2/9 Courses completed</p>
                <div className="flex items-center justify-start gap-x-2">
                  <div className="w-[140px] h-2">
                    <ProgressBar data={5} completed={2} />
                  </div>
                  <p className="text-sm">20%</p>
                </div>
              </div>
            </td>
            <td>
              <FaChevronRight />
            </td>
          </TableRowItem>
        </TableContainer>
      </main>
    </div>
  );
};

export default Submission;
