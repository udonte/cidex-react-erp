import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { TbUserStar } from "react-icons/tb";
import { IoTicket } from "react-icons/io5";
import { BreadCrumbs } from "../../../../components/CRM_components";
import Ellipse from "../../../../assets/images/Ellipse 962.png";
// import faker from 'faker';

import {
  TableContainer,
  TableRowItem,
} from "../../../../components/HRM_components";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

const bestSellers = ["Product", "Amount", "% Sold", ""];

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
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const lineOptions = {
  responsive: true,
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      grid: {
        display: false,
      },
    },
  },
};

const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      fill: true,
      data: [600000, 800000, 700000, 800000, 700000, 850000, 900000],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent",
      pointHoverBackgroundColor: "rgb(255, 255, 255)",
      hoverBackgroundColor: "rgb(0,0,0)",
      tension: 0.5,
    },
  ],
};

const doughnutData = {
  datasets: [
    {
      label: "# of Votes",
      data: [12, 30],
      backgroundColor: ["#5932EA", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const index = () => {
  return (
    <>
      <BreadCrumbs />
      <h1 className="m-6 text-xl font-semibold">Welcome Patrick,</h1>

      <div className="m-5 grid grid-cols-5 gap-5 grid-row-5 mb-40">
        <div className="col-span-5  grid grid-cols-4 gap-5">
          {/*------------------------------- Total Customers --------------------------------------- */}

          <div className="border-2 h-[156px] w-full p-4 bg-white rounded-lg">
            <div className="flex flex-col justify-between h-full">
              <p className=" font-medium">Total Customers</p>
              <p className=" font-bold text-[32px]">322</p>
              <div className="flex justify-between items-center ">
                <p className="flex items-center gap-x-2 font-semibold">
                  <span>
                    <FaArrowUp className="text-[#00FF85]" />
                  </span>
                  2.5%
                </p>
                <div className="h-10 w-10 bg-[#db006a44] rounded-full flex items-center justify-center">
                  <BiSolidUserDetail className="text-[#DB0069] text-[25px]" />
                </div>
              </div>
            </div>
          </div>

          {/*----------------//--------------- Total Customers ------------------//------------------ */}

          {/*------------------------------- Total Leads --------------------------------------- */}

          <div className="border-2 h-[156px] w-full p-4 bg-white rounded-lg">
            <div className="flex flex-col justify-between h-full">
              <p className=" font-medium">Total Leads</p>
              <p className=" font-bold text-[32px]">322</p>
              <div className="flex justify-between items-center ">
                <p className="flex items-center gap-x-2 font-semibold">
                  <span>
                    <FaArrowUp className="text-[#00FF85]" />
                  </span>
                  2.5%
                </p>
                <div className="h-10 w-10 bg-[#12843a44] rounded-full flex items-center justify-center">
                  <TbUserStar className="text-[#128438] text-[25px]" />
                </div>
              </div>
            </div>
          </div>

          {/*------------------//------------- Total Leads ---------------------//------------------ */}

          {/*------------------------------- Total Tickets --------------------------------------- */}

          <div className="border-2 h-[156px] w-full p-4 bg-white rounded-lg">
            <div className="flex flex-col justify-between h-full">
              <p className=" font-medium">Total Tickets</p>
              <p className=" font-bold text-[32px]">322</p>
              <div className="flex justify-between items-center ">
                <p className="flex items-center gap-x-2 font-semibold">
                  <span>
                    <FaArrowDown className="text-[#D90A0A]" />
                  </span>
                  2.5%
                </p>
                <div className="h-10 w-10 bg-[#271BAa44] rounded-full flex items-center justify-center">
                  <IoTicket className="text-[#271BAD] text-[25px]" />
                </div>
              </div>
            </div>
          </div>

          {/*-----------------//-------------- Total Tickets --------------------//------------------ */}

          {/*------------------------------- Total Products --------------------------------------- */}

          <div className="border-2 h-[156px] w-full p-4 bg-white rounded-lg">
            <div className="flex flex-col justify-between h-full">
              <p className=" font-medium">Total Products</p>
              <p className=" font-bold text-[32px]">322</p>
              <div className="flex justify-between items-center ">
                <p className="flex items-center gap-x-2 font-semibold">
                  <span>
                    <FaArrowDown className="text-[#D90A0A]" />
                  </span>
                  2.5%
                </p>
                <div className="h-10 w-10 bg-[#DA910a44] rounded-full flex items-center justify-center">
                  <BiSolidUserDetail className="text-[#DA9102] text-[25px]" />
                </div>
              </div>
            </div>
          </div>

          {/*---------------//---------------- Total Products ----------------//---------------------- */}
        </div>

        <div className="bg-white border-2 col-span-3 rounded-lg row-span-3 ">
          <div className="flex justify-between items-center p-6">
            <p className="text-xl">Sales Overview</p>
            <div className="font-bold rounded-lg">
              <select className="p-2 border-4">
                <option value="">Last Year</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
          </div>

          <div className="p-5 mb-3">
            <h1 className="text-lg font-bold">₦ 21,233,000</h1>
            <p>
              Total Revenue <span></span>
            </p>
          </div>

          <div className="p-5 ">
            <Line options={lineOptions} data={lineData}>
              {" "}
            </Line>
          </div>
        </div>

        {/*------------------------------- Conversion Rate--------------------------------------- */}

        <div className="col-span-2 row-span-1 h-40  bg-[#128438] rounded-lg">
          <div className="text-white  p-4 h-full">
            <div className="flex flex-col justify-between h-full pb-3">
              <p>Conversion Rate</p>
              <p className=" text-2xl font-bold flex items-center gap-x-2">
                32.5%{" "}
                <span>
                  <FaArrowUp className="text-[#00FF85]" />
                </span>
              </p>
            </div>
            <div className="absolute w-[160px] h-[160px] bg-[#ffffff1a] top-10 right-4 rounded-full"></div>
            <div className="absolute w-[160px]  h-[160px] bg-[#ffffff1a] -top-4 -right-10 rounded-full"></div>
          </div>
        </div>

        {/*-----------------//-------------- Conversion Rate----------------//----------------------- */}

        <div className="bg-white col-span-2  rounded-lg row-span-2 p-20">
          <div className="">
            <Doughnut data={doughnutData} className="mx-auto w-30">
              <h1 className="bg-gray-950 ">250</h1>
            </Doughnut>
          </div>
        </div>

        <div className="bg-white col-span-2  rounded-lg ">
          <div className="flex justify-start items-center p-6">
            <p className="text-xl">Total Customer</p>
          </div>

          <div className="bg-white p-5">
            <div className="flex gap-x-3 items-center">
              <div className="">
                {" "}
                <img src={Ellipse} alt="" />
              </div>
              <div>
                <h1>Franchis Hoizworth</h1>
                <p className="text-sm text-gray-500">M&M Brothers</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5">
            <div className="flex gap-x-3 items-center">
              <div className="">
                {" "}
                <img src={Ellipse} alt="" />
              </div>
              <div>
                <h1>Franchis Hoizworth</h1>
                <p className="text-sm text-gray-500">M&M Brothers</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5">
            <div className="flex gap-x-3 items-center">
              <div className="">
                {" "}
                <img src={Ellipse} alt="" />
              </div>
              <div>
                <h1>Franchis Hoizworth</h1>
                <p className="text-sm text-gray-500">M&M Brothers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white col-span-3  rounded-lg">
          <div className="p-6">
            <p className="text-xl"> Best Sellers </p>

            <TableContainer tableHeader={bestSellers}>
              {recentlyOnboardedData.map((data) => {
                return (
                  <TableRowItem>
                    <td> {data.employeeName}</td>
                    <td>{data.department}</td>
                    <td>{data.designation}</td>

                    <td>
                      <div className=" bg-green-700 h-[3px]"></div>
                    </td>
                  </TableRowItem>
                );
              })}
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
