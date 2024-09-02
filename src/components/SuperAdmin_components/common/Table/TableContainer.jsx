import React from "react";
import Table from "./Table";

const TableContainer = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  totalPages,
  data,
  children,
  tableHeader,
  margin = true,
  pagination,
  checkBox,
  dotOption,
}) => {
  return (
    <section className={`${margin ? "my-4" : ""}`}>
      <Table
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        data={data}
        dotOption={dotOption}
        checkBox={checkBox}
        pagination={pagination}
        tableHeader={tableHeader}
      >
        {children}
      </Table>
    </section>
  );
};

export default TableContainer;
