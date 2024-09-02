import React from "react";
import Table from "./Table";

const TableContainer = ({
  changePage,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  totalPages,
  totalItems,
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
        changePage={changePage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        totalItems={totalItems}
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
