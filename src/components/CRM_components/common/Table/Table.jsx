import React from "react";
import TableHeaderItem from "./TableHeaderItem";
import Button from "../Button/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Table = ({ children, tableHeader, dotOptions, checkBox = false }) => {
  return (
    <div className="">
      <table className="w-full rounded-full">
        <thead className="bg-white border-2 w-full h-[50px] text-left font-extrabold">
          <tr className="">
            {checkBox && (
              <th>
                <div>
                  <p className="flex justify-center items-center">
                    <label className="container1">
                      <input
                        className="text-center bg-green-700 checked:text-green-400"
                        type="checkbox"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </p>
                  <p className="invisible">j</p>
                </div>
              </th>
            )}
            {tableHeader?.map((heading, i) => (
              <TableHeaderItem key={i}>{heading}</TableHeaderItem>
            ))}
            {dotOptions && <th>Action</th>}
          </tr>
        </thead>
        <tbody className="bg-white">{children}</tbody>
      </table>
      <div className="h-[120px] bg-white w-full flex justify-between items-center px-8">
        <p>Showing 1 of 1 pages</p>{" "}
        <div className="flex gap-x-2">
          <Button size={"md"} color={"secondary"} icon={<FaChevronLeft />} />
          <div className="h-[32px] w-[32px] border-2 border-gurugeeks-green-600 rounded flex items-center justify-center">
            1
          </div>
          <Button size={"md"} color={"secondary"} icon={<FaChevronRight />} />
        </div>
      </div>
    </div>
  );
};

export default Table;
