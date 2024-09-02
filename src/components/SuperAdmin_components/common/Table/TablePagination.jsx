import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../Button/Button";

const TablePagination = ({
  data,
  itemsPerPage,
  setCurrentPage,
  currentPage = 1,
}) => {
  const totalItems = data;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  let visiblePageNumbers;
  if (totalPages <= 3) {
    visiblePageNumbers = pageNumbers;
  } else {
    visiblePageNumbers = pageNumbers.slice(0, 2);

    if (currentPage <= 2) {
      visiblePageNumbers = [...visiblePageNumbers, "...", totalPages];
    } else if (currentPage >= totalPages - 1) {
      visiblePageNumbers = [1, "...", ...pageNumbers.slice(totalPages - 3)];
    } else {
      visiblePageNumbers = [1, "...", currentPage, "...", totalPages];
    }
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    localStorage.setItem("currentPage", pageNumber);
  };

  return (
    <div className="h-[120px] bg-white w-full flex justify-between items-center px-16 mb-10">
      <p>
        Showing {currentPage} of {totalPages} pages
      </p>
      <div className="flex gap-x-2">
        <Button
          disabled={currentPage === 1}
          onClick={() => {
            handlePageChange(Number(currentPage) - 1);
          }}
          className={" hover:border-green-600"}
          size={"md"}
          color={"secondary"}
          icon={<FaChevronLeft />}
        />
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            disabled={number === "..."}
          >
            <div
              className={`h-[32px] w-[32px] border-2 rounded flex items-center justify-center ${
                currentPage === number ? "border-gurugeeks-green-600" : ""
              }`}
            >
              {number}
            </div>
          </button>
        ))}
        <Button
          disabled={currentPage === totalPages}
          className={" hover:border-green-600"}
          onClick={() => {
            handlePageChange(Number(currentPage) + 1);
          }}
          size={"md"}
          color={"secondary"}
          icon={<FaChevronRight />}
        />
      </div>
    </div>
  );
};

export default TablePagination;
