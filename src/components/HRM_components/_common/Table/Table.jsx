import React, { useEffect, useState } from "react";
import TableHeaderItem from "./TableHeaderItem";
import Button from "../Button/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TablePagination from "./TablePagination";

const Table = ({
  changePage,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  totalPages,
  totalItems,
  setPage,
  page,
  children,
  tableHeader,
  checkBox = false,
  pagination,
  dotOption,
}) => {
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <>
      <table className="w-full rounded-full">
        <thead className="bg-gurugeeks-orange-700 border-2  h-[50px] px-4  text-white font-normal">
          <tr className="w-full">
           
            {tableHeader?.map((heading, i) => (
              <TableHeaderItem key={i}>{heading}</TableHeaderItem>
            ))}
            {dotOption && <th className="font-normal">Action</th>}
          </tr>
        </thead>
        <tbody className="w-full">{children}</tbody>
      </table>
      {pagination && (
        <TablePagination
          changePage={changePage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

export default Table;
