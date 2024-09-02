import React, { useEffect, useState } from "react";
import TableHeaderItem from "./TableHeaderItem";
import Button from "../Button/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TablePagination from "./TablePagination";

const Table = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  totalPages,
  data,
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
        <thead className="bg-[#E6E6E6] border-2 w-full h-[50px] text-left  text-gurugeeks-text font-extrabold">
          <tr className="">
            {checkBox && (
              <>
                <TableHeaderItem>
                  <p className="flex justify-center items-center mr-8">
                    <label className="container1">
                      <input
                        className="text-center bg-green-700 checked:text-green-400"
                        type="checkbox"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </p>
                  <p className="invisible">j</p>
                </TableHeaderItem>
                <th></th>
              </>
            )}
            {tableHeader?.map((heading, i) => (
              <TableHeaderItem key={i}>{heading}</TableHeaderItem>
            ))}
            {dotOption && <th className="font-black">Action</th>}
          </tr>
        </thead>
        <tbody className="bg-white">{children}</tbody>
      </table>
      {pagination && (
        <TablePagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          data={data}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

export default Table;
