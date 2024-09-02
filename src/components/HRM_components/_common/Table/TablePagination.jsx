import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../Button/Button";

const TablePagination = ({
  changePage,
  totalItems,
  itemsPerPage,
  currentPage,
}) => {
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
    changePage(pageNumber);
  };

  return (
    <div className="h-[120px] bg-white w-full flex justify-between items-center px-16 mb-10">
      {/* <p>
        Showing {currentPage} of {totalPages} pages
      </p> */}
      <div className="flex items-center justify-between gap-x-2 w-full">
        <Button
          disabled={currentPage === 1}
          onClick={() => {
            const prev = currentPage - 1;
            handlePageChange(prev);
          }}
          className={" hover:bg-orange-100 border-none"}
          size={"md"}
          color={"secondary"}
        >
          <FaChevronLeft />
          Previous
        </Button>
        <div className="flex items-center justify-center gap-4">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              disabled={number === "..."}
            >
              <div
                className={`h-[32px] w-[32px] rounded flex items-center justify-center ${
                  currentPage === number ? "bg-orange-100" : ""
                }`}
              >
                {number}
              </div>
            </button>
          ))}
        </div>
        <div>
          <Button
            onClick={() => {
              const next = currentPage + 1;
              handlePageChange(next);
            }}
            disabled={currentPage >= totalPages}
            className={" hover:bg-orange-100 border-none"}
            size={"md"}
            color={"secondary"}
          >
            Next
            <FaChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
