import React from "react";
import Table from "./Table";

const TableContainer = ({ children, tableHeader, checkBox, dotOptions }) => {
  return (
    <section className="my-4">
      <Table
        dotOptions={dotOptions}
        checkBox={checkBox}
        tableHeader={tableHeader}
      >
        {children}
      </Table>
    </section>
  );
};

export default TableContainer;
