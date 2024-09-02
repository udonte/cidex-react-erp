import React from "react";
import { FaFilter, FaRegCalendarPlus, FaUsers } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { HiOutlineFolderAdd, HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineAttachment } from "react-icons/md";
import { TiPin } from "react-icons/ti";
import { GiSpeaker, GiFlowerStar } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";
import { ImHammer2 } from "react-icons/im";
import { BiSolidPlaneLand } from "react-icons/bi";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Ellipse from "../../../../assets/images/Ellipse 962.png";

import {
  Button,
  FilterTab,
  TableContainer,
  TableRowItem,
} from "../../../../components/HRM_components";

const Dashboard = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [12, 30],
        width: ["240px", " "],
        backgroundColor: ["#5932EA", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const leaveRequest = ["Employee Name", "Duration", "Type", "Days", "Action"];
  const recentlyOnboarded = [
    "Employee Name",
    "Department",
    "Designation",
    "Status",
  ];

  const leaveRequestData = [
    {
      id: 1,
      employeeName: "Seye Olaniyan",
      duration: "June 10 - July 10",
      type: "Sick Leave",
      days: "30",
    },
    {
      id: 2,
      employeeName: "Seye Olaniyan",
      duration: "June 10 - July 10",
      type: "Sick Leave",
      days: "30",
    },
  ];

  const recentlyOnboardedData = [
    {
      id: 1,
      employeeName: "Justin Lipshutz",
      department: "Marketing",
      designation: "Intern",
      status: "Parmanent",
    },
    {
      id: 2,

      employeeName: "Marcus Culhane",
      department: "Finance",
      designation: "Intern",
      status: "Parmanent",
    },
    {
      id: 3,
      employeeName: "Marcus Culhane",
      department: "Finance",
      designation: "Intern",
      status: "Parmanent",
    },
    {
      id: 3,
      employeeName: "Marcus Culhane",
      department: "Finance",
      designation: "Intern",
      status: "Permanent",
    },
  ];


  return (
    <>
      <div className=" m-[30px] pb-80">
        {/*------------------------------- Header Section --------------------------------------- */}
        <h1 className="text-2xl font-bold">Welcome, David</h1>

        <div className="grid grid-cols-4 gap-[30px] mt-5 ">
          <div
            className="col-span-4 grid p-6 lg:grid-cols-4 sm:grid-cols-2 sm:gap-2 gap-5 mt-10  
        "
          >
            {/* Total Employee */}

            <div className="p-6 bg-white  border-4 border-gurugeeks-dark-200 w-full rounded-lg">
              <div className=" ">
                <div className="flex justify-normal items-center mb-5">
                  <span className="flex justify-center items-center bg-[#0e30ef49] text-[#0E31EF] h-8 w-8 rounded-full mr-3">
                    <FaUsers />{" "}
                  </span>

                  <p className="text-lg font-semibold"> Total Employees </p>
                </div>
                <div>
                  <h1 className=" font-bold text-2xl"> 145 </h1>
                  <p className="text-gurugeeks-dark-500 text-lg">Employee </p>
                </div>
              </div>
            </div>

            {/* Active Employee */}

            <div className="p-6 bg-white  border-4 border-gurugeeks-dark-200 w-full rounded-lg">
              <div className=" ">
                <div className="flex justify-normal items-center mb-5">
                  <span className="flex justify-center items-center bg-[#0e30ef49] text-[#0E31EF] h-8 w-8 rounded-full mr-3">
                    <FaUsers />{" "}
                  </span>

                  <p className="text-lg font-semibold"> Active Employees </p>
                </div>
                <div>
                  <h1 className=" font-bold text-2xl"> 92</h1>
                  <p className="text-gurugeeks-dark-500 text-lg">Employee </p>
                </div>
              </div>
            </div>

            {/* Leave Employee */}

            <div className="p-6 bg-white  border-4 border-gurugeeks-dark-200 w-full rounded-lg">
              <div className=" ">
                <div className="flex justify-normal items-center mb-5">
                  <span className="flex justify-center items-center bg-[#0e30ef49] text-[#0E31EF] h-8 w-8 rounded-full mr-3">
                    <FaUsers />{" "}
                  </span>

                  <p className="text-lg font-semibold"> Leave Employees </p>
                </div>
                <div>
                  <h1 className=" font-bold text-2xl"> 50 </h1>
                  <p className="text-gurugeeks-dark-500 text-lg">Employee </p>
                </div>
              </div>
            </div>

            {/* New Ticket */}

            <div className="p-6 bg-white  border-4 border-gurugeeks-dark-200 w-full rounded-lg">
              <div className=" ">
                <div className="flex justify-normal items-center mb-5">
                  <span className="flex justify-center items-center bg-[#0e30ef49] text-[#0E31EF] h-8 w-8 rounded-full mr-3">
                    <FaUsers />
                  </span>

                  <p className="text-lg font-semibold"> New Tickets </p>
                </div>
                <div>
                  <h1 className=" font-bold text-2xl"> 42 </h1>
                  <p className="text-gurugeeks-dark-500 text-lg">Employee </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 grid gap-[30px] content-start">
            {/* ------------- Leave Request --------------------- */}
            <div className="w-full h-[250px] bg-white rounded-lg px-5 py-2">
              <div className="flex justify-between items-center py-2">
                <div className="flex gap-x-2 items-center">
                  <BiSolidPlaneLand
                    size="40"
                    className="text-gurugeeks-orange-600"
                  />
                  <p className="font-bold text-xl">Leave Request</p>
                </div>
                <div className="bg-[#1a2a8823] text-[#1A2B88] font-bold p-2 flex gap-x-2 items-center rounded-lg">
                  <p>Filter & Sort</p>
                  <FaFilter />
                </div>
              </div>

              <TableContainer tableHeader={leaveRequest}>
                {leaveRequestData.map((data) => {
                  return (
                    <TableRowItem>
                      <td> {data.employeeName}</td>
                      <td>{data.duration}</td>
                      <td>{data.type}</td>
                      <td>{data.days}</td>
                      <td>
                        <div className="flex justify-center gap-x-3 items-center">
                          <button className="text-lg  bg-gurugeeks-green-500 px-2 py-2 rounded-md ">
                            <IoMdCheckmark />
                          </button>
                          <button className="text-sm bg-red-200 px-2 py-2 rounded-md ">
                            <FaXmark />
                          </button>
                          <button className=" text-sm bg-gurugeeks-green-500 px-2 py-2 rounded-md font-bold">
                            View
                          </button>
                        </div>
                      </td>
                    </TableRowItem>
                  );
                })}
              </TableContainer>
            </div>

            {/* ---//--------- Leave Request -----------------*/}

            {/* -------------------- Files --------------------- */}

            <div className="w-full pb-10 bg-white rounded-lg py-2">
              <div className="flex justify-between items-center px-5 py-2">
                <div className="flex gap-x-2 items-center">
                  <HiOutlineFolderAdd
                    size="40"
                    className="text-gurugeeks-orange-600"
                  />
                  <p className="font-bold text-xl">Files</p>
                </div>
              </div>

              <div className="flex justify-start items-center gap-x-8 border py-2 px-5 text-xl">
                <p>My Files</p>
                <p>Organisation File</p>
              </div>
              <div>
                <div className="border w-[98%] flex justify-between  px-5 py-4">
                  <div className=" flex justify-end items-center gap-x-4 ">
                    <MdOutlineAttachment size="24" />
                    <p>Company Guide</p>
                  </div>

                  <div className="flex justify-end items-center gap-x-4">
                    <TiPin size="24" />
                    <HiOutlineDotsHorizontal size="24" />
                  </div>
                </div>

                <div className="border w-[98%] flex justify-between  px-5 py-4">
                  <div className=" flex justify-end items-center gap-x-4 ">
                    <MdOutlineAttachment size="24" />
                    <p>Employee Handbook</p>
                  </div>

                  <div className="flex justify-end items-center gap-x-4">
                    <TiPin size="24" />
                    <HiOutlineDotsHorizontal size="24" />
                  </div>
                </div>

                <div className="border w-[98%] flex justify-between  px-5 py-4">
                  <div className=" flex justify-end items-center gap-x-4 ">
                    <MdOutlineAttachment size="24" />
                    <p>Privacy Policy</p>
                  </div>

                  <div className="flex justify-end items-center gap-x-4">
                    <TiPin size="24" />
                    <HiOutlineDotsHorizontal size="24" />
                  </div>
                </div>
                <div className="border w-[98%] flex justify-between  px-5 py-4">
                  <div className=" flex justify-end items-center gap-x-4 ">
                    <MdOutlineAttachment size="24" />
                    <p>Work Schedule</p>
                  </div>

                  <div className="flex justify-end items-center gap-x-4">
                    <TiPin size="24" />
                    <HiOutlineDotsHorizontal size="24" />
                  </div>

                  <div className="border w-[98%] flex justify-between  px-5 py-4">
                    <div className=" flex justify-end items-center gap-x-4 ">
                      <MdOutlineAttachment size="24" />
                      <p>Privacy Policy</p>
                    </div>

                    <div className="flex justify-end items-center gap-x-4">
                      <TiPin size="24" />
                      <HiOutlineDotsHorizontal size="24" />
                    </div>
                  </div>
                  <div className="border w-[98%] flex justify-between  px-5 py-4">
                    <div className=" flex justify-end items-center gap-x-4 ">
                      <MdOutlineAttachment size="24" />
                      <p>Work Schedule</p>
                    </div>

                    <div className="flex justify-end items-center gap-x-4">
                      <TiPin size="24" />
                      <HiOutlineDotsHorizontal size="24" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------//----------- Files -------------//-------- */}
            </div>

            {/* ---------//----------- Files -------------//-------- */}

            <div className="w-full bg-white rounded-lg px-5 py-2">
              <div className="flex justify-between items-center py-2">
                <div className="flex gap-x-2 items-center">
                  <BiSolidPlaneLand
                    size="40"
                    className="text-gurugeeks-orange-600"
                  />
                  <p className="font-bold text-xl">
                    Recently onboarded Employee
                  </p>
                </div>
                <div className="bg-[#1a2a8823] text-[#1A2B88] font-bold p-2 flex gap-x-2 items-center rounded-lg">
                  <p>Filter & Sort</p>
                  <FaFilter />
                </div>
              </div>
              <TableContainer tableHeader={recentlyOnboarded}>
                {recentlyOnboardedData.map((data) => {
                  return (
                    <TableRowItem>
                      <td> {data.employeeName}</td>
                      <td>{data.department}</td>
                      <td>{data.designation}</td>
                      <td>{data.status}</td>
                    </TableRowItem>
                  );
                })}
              </TableContainer>
            </div>
          </div>

          <div className="col-span-1 grid gap-[30px] content-start">
            {/*  Employee Composition */}

            <div className="bg-white rounded-lg p-5 ">
              <p className="font-bold text-[#161E54] text-xl">
                Employees Composition
              </p>
              <div className="h-40">
                <Doughnut data={data} className="mx-auto" />
              </div>
              <p className="text-gurugeeks-dark-500 text-lg text-center">
                856 employees Total
              </p>
            </div>
            {/* ---//--------- Employee Composition ----------------- */}

            {/* Today's Celebration */}
            <div className="grid gap-[2px] content-start rounded-lg">
              <div className="flex  bg-white h-10 gap-x-2 rounded-t-lg items-center p-10">
                <GiFlowerStar size="40" className="text-gurugeeks-orange-600" />
                <p className="font-bold text-xl">Today's Celebration</p>
              </div>
              <div>
                <div className="bg-white p-5">
                  <div className="flex gap-x-3 items-start">
                    <div className="">
                      {" "}
                      <img src={Ellipse} alt="" />
                    </div>
                    <div>
                      <h1> Pomile Abolore </h1>
                      <p className="text-sm text-gray-500">UI/UX Designer</p>
                      <div className="flex items-end gap-x-10 mt-10">
                        <Button> Wish Him</Button>
                        <p>
                          <a href="www">More</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ---//------------ Today's Celebration----------------- */}

            {/* Training */}
            <div className="grid gap-[2px] content-start rounded-lg h-[230px]">
              <div className="flex  bg-white h-10 gap-x-3 rounded-t-lg items-center p-10">
                <ImHammer2 size="40" className="text-gurugeeks-orange-600" />
                <p className="font-bold text-xl">Training</p>
              </div>
              <div className="grid gap-[2px] pb-10">
                <div className="bg-white p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h1 className="text-lg"> Mandatory Course </h1>
                      <div className="flex items-center text-blue-500 justify-between gap-x-2">
                        <FaRegCalendarPlus />
                        <p className="text-lg">
                          <a href="www">Due Aug 4,2023</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-end gap-x-10 mt-10">
                      <p className="bg-orange-400 rounded-md px-1">Overdue</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h1 className="text-lg"> Priority Techniques </h1>
                      <div className="flex items-center text-blue-500 gap-x-2">
                        <FaRegCalendarPlus />
                        <p className="text-lg">
                          <a href="www">Due Aug 4,2023</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-end gap-x-10 mt-10">
                      <p className="bg-blue-300 rounded-md px-1">
                        {" "}
                        No due date{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h1 className="text-lg"> Introduction to exeed </h1>
                      <div className="flex items-center text-blue-500 gap-x-2">
                        <FaRegCalendarPlus />
                        <p className="text-lg">
                          <a href="www">Due Aug 4,2023</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-end gap-x-10 mt-10">
                      <p className="bg-orange-400 rounded-md px-1">Overdue</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h1 className="text-lg"> Priority Techniques </h1>
                      <div className="flex items-center text-blue-500 gap-x-2">
                        <FaRegCalendarPlus />
                        <p className="text-lg">
                          <a href="www">Due Aug 4,2023</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-end gap-x-10 mt-10">
                      <p className="bg-orange-400 rounded-md px-1">Overdue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ---//------------ Training ----------------- */}

            <div className="bg-white p-5">
              <div className="flex gap-x-3 items-start">
                <div className="">
                  {" "}
                  <img src={Ellipse} alt="" />
                </div>
                <div>
                  <h1> Pomile Abolore </h1>
                  <p className="text-sm text-gray-500">UI/UX Designer</p>
                  <div className="flex items-end gap-x-10 mt-10">
                    <Button> Wish Him</Button>
                    <p>
                      <a href="www">More</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---//------------ Today's Celebration-----------------// */}

        {/* Training */}
        <div className="grid gap-[2px] content-start rounded-lg h-[230px]">
          <div className="flex  bg-white h-10 gap-x-3 rounded-t-lg items-center p-10">
            <ImHammer2 size="40" className="text-gurugeeks-orange-600" />
            <p className="font-bold text-xl">Training</p>
          </div>
          <div className="grid gap-[2px] pb-10">
            <div className="bg-white p-5">
              <div className="flex items-end justify-between">
                <div>
                  <h1 className="text-lg"> Mandatory Course </h1>
                  <div className="flex items-center text-blue-500 justify-between gap-x-2">
                    <FaRegCalendarPlus />
                    <p className="text-lg">
                      <a href="www">Due Aug 4,2023</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-end gap-x-10 mt-10">
                  <p className="bg-orange-400 rounded-md px-1">Overdue</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5">
              <div className="flex items-end justify-between">
                <div>
                  <h1 className="text-lg"> Priority Techniques </h1>
                  <div className="flex items-center text-blue-500 gap-x-2">
                    <FaRegCalendarPlus />
                    <p className="text-lg">
                      <a href="www">Due Aug 4,2023</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-end gap-x-10 mt-10">
                  <p className="bg-blue-300 rounded-md px-1"> No due date </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5">
              <div className="flex items-end justify-between">
                <div>
                  <h1 className="text-lg"> Introduction to exeed </h1>
                  <div className="flex items-center text-blue-500 gap-x-2">
                    <FaRegCalendarPlus />
                    <p className="text-lg">
                      <a href="www">Due Aug 4,2023</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-end gap-x-10 mt-10">
                  <p className="bg-orange-400 rounded-md px-1">Overdue</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5">
              <div className="flex items-end justify-between">
                <div>
                  <h1 className="text-lg"> Priority Techniques </h1>
                  <div className="flex items-center text-blue-500 gap-x-2">
                    <FaRegCalendarPlus />
                    <p className="text-lg">
                      <a href="www">Due Aug 4,2023</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-end gap-x-10 mt-10">
                  <p className="bg-orange-400 rounded-md px-1">Overdue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---//------------ Training -----------------// */}
      </div>
    </>
  );
};

export default Dashboard;
