import React, { useState } from "react";
import {
  Button,
  FilterTab,
  StatusPill,
  TableContainer,
  TableRowItem,
  TopTab,
} from "../../../components/HRM_components";
import FullNameTag from "../../../components/HRM_components/_common/FullNameTag";
import {
  MdAirplaneTicket,
  MdChildFriendly,
  MdOutlineSick,
} from "react-icons/md";
import { FaPlaneArrival } from "react-icons/fa";
import { MODALS } from "../../../constants/modals.constant";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../features/common/modals/modals.selectors";
import AddLeaveModal from "../../../components/HRM_components/Employee/AddLeaveModal";
import { openModalByName } from "../../../features/common/modals/modals.slice";
import { useDispatch } from "react-redux";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const nextIndex = currentIndex + 5 < items.length ? currentIndex + 1 : 0;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      currentIndex - 1 >= 0 ? currentIndex - 1 : items.length - 5;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="w-full mx-auto relative">
      <div className="overflow-hidden">
        <div className="flex">
          {items.slice(currentIndex, currentIndex + 5).map((item, index) => (
            <div key={index} className="w-1/3 px-2">
              {/* Render your item component here */}
              <div className="bg-white p-4 m-2 h-64 space-y-4 w-full rounded">
                {" "}
                <p className="text-center font-semibold">{item.text}</p>
                <div className="h-[70px] border-b-2 flex items-center justify-center">
                  {item.icon}{" "}
                </div>
                <div>
                  <p>Available : 4</p>
                  <p>Taken : 4</p>
                </div>
                {/* {item} */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

const LeaveTracker = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectModalsSlice);
  return (
    <div className="m-6">
      <TopTab
        leftComponent={<h1 className=" font-bold text-xl">Leave Tracker</h1>}
        rightComponent={
          <Button
            onClick={() => {
              dispatch(openModalByName(MODALS.LEAVE_MANAGEMENT.APPLY_LEAVE));
            }}
          >
            Apply Leave
          </Button>
        }
      />
      <Carousel
        items={[
          {
            text: "Sick Leave",
            icon: <MdOutlineSick className="text-[40px]" />,
          },
          {
            text: "Casual Leave",
            icon: <MdAirplaneTicket className="text-[40px]" />,
          },
          {
            text: "Sabbatical Leave",
            icon: <FaPlaneArrival className="text-[40px]" />,
          },
          {
            text: "Maternity Leave",
            icon: <MdChildFriendly className="text-[40px]" />,
          },
          {
            text: "Paternity Leave",
            icon: <MdChildFriendly className="text-[40px]" />,
          },
          {
            text: "Companion Leave",
            icon: <MdOutlineSick className="text-[40px]" />,
          },
          { text: "dsdsdsds", icon: <MdOutlineSick className="text-[40px]" /> },
          { text: "dsdsdsds", icon: <MdOutlineSick className="text-[40px]" /> },
        ]}
      />
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className=" font-bold text-xl">Leave History</h1>
        </div>
        <div>
          <FilterTab search={true} sort={true} refresh={true} />
        </div>
      </div>

      <TableContainer
        dotOption={true}
        tableHeader={[
          "Emplyee",
          "Leave Type",
          "Leave Period",
          "Reason",
          "Status",
        ]}
      >
        <TableRowItem dotOptions={true}>
          <td>
            <div className="pl-6">
              <FullNameTag firstName="Fred" lastName="Boakye" />
            </div>
          </td>
          <td className="pl-8">Sick Leave</td>
          <td>01/12/2023 - 05/12/2023 (4Days)</td>{" "}
          <td className="pl-6">Sick</td>
          <td>
            <div className="pl-6">
              <StatusPill text={"Pending"} status={"pending"} />
            </div>
          </td>
        </TableRowItem>
      </TableContainer>
      {
        <AddLeaveModal
          isOpen={openModal[MODALS.LEAVE_MANAGEMENT.ASSIGN_LEAVE]}
        />
      }
    </div>
  );
};

export default LeaveTracker;
