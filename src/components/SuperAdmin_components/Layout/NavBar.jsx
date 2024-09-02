import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiBell } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { selectUserInfo } from "../../../features/common/auth/auth.selector";

const NavBar = () => {
  const user = useSelector(selectUserInfo);
  const [showDropMan, setShowDropDown] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  const getPageTitle = () => {
    switch (path) {
      case "/HRM/dashboard":
        return "Dashboard";
      case "/HRM/employee":
        return "Employees";
      case "/HRM/jobs":
        return "Jobs";
      case "/HRM/applicants":
        return "Applicants";
      case "/HRM/talent-pool":
        return "Talent Pool";
      case "/HRM/project":
        return "Project";
      case "/HRM/my-timesheet":
        return "My Timesheet";
      case "/HRM/employee-timesheet":
        return "Employee Timesheet";
      case "/HRM/mandatory-training":
        return "Mandatory Training";
      case "/HRM/learning-and-development":
        return "Learning And Develoment";
      case "/HRM/goals":
        return "Goals And Appraisals";
      case "/HRM/performance-settings":
        return "Performance Settings";
      case "/HRM/leave-type":
        return "Leave Type";
      case "/HRM/manage-leave":
        return "Manage Leave";
      case "/HRM/helpdesk":
        return "Helpdesk";
      case "/HRM/helpdesk/:id":
        return "Helpdesk";
      case "/HRM/asset":
        return "Assets";
      case "/HRM/vendors":
        return "Vendors";
      case "/HRM/overview":
        return "Overview";
      case "/HRM/payruns":
        return "Payruns";
      case "/HRM/department":
        return "Department";
      case "/HRM/designation":
        return "Designation";
      case "/HRM/chart":
        return "Organisation chart";
      case "/HRM/settings":
        return "Settings";
      case "/HRM/salary":
        return "Salary Component";
      default:
        return "Page Not Found";
    }
  };

  return (
    <div className=" relative bg-white px-6 h-16 w-full flex justify-between items-center border-b-2 border-gray-200">
      {/* <button
        className={`w-10 h-8 px-1 rounded ${
          !isSidebarOpen ? "bg-[#16C098]" : "bg-gray-300"
        }`}
        onClick={handleToggle}
      >
        <span
          className={`block w-4 h-[26px] rounded ${
            !isSidebarOpen ? "transform translate-x-4" : "translate-x-0"
          } bg-white transition-transform duration-400`}
        />
      </button> */}
      <div className="flex items-center">
        <div className="h-[34px] w-[50px]">
          <img
            className=""
            src={process.env.PUBLIC_URL + "/images/exceed_logo.png"}
            alt="logo"
          />
        </div>
        <div className="ml-[200px] text-2xl font-semibold">
          {getPageTitle()}
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-3">
        <div
          onClick={() => {
            setShowDropDown(!showDropMan);
          }}
          className="h-8 w-8 border-2 rounded-md text-gurugeeks-text text-[22px] justify-center items-center flex hover:border-gurugeeks-grayDark-100"
        >
          <CgMenuGridO />
        </div>
        <div className="h-8 w-8 border-2 rounded-md text-gurugeeks-text text-[22px] justify-center items-center flex">
          <BiBell />
        </div>
        {showDropMan ? (
          <div className="absolute top-[60px] border bg-white h-[100px] w-[200px] rounded-md shadow-lg flex justify-between items-center p-3">
            <Link to="/">
              <div className="border-2 p-2 rounded-lg hover:border-gurugeeks-orange-300 cursor-pointer">
                <p className="text-[25px] font-bold text-gurugeeks-orange-300 ">
                  HRM
                </p>
              </div>
            </Link>
            <Link to="/CRM">
              <div className="border-2 p-2 rounded-lg hover:border-green-500 cursor-pointer">
                <p className="text-[25px] font-bold text-green-500 ">CRM</p>
              </div>
            </Link>
          </div>
        ) : null}

        <div className="flex justify-center items-center gap-x-3">
          <div className="h-8 w-8 border-2 rounded-md text-gurugeeks-text text-[22px] justify-center items-center flex">
            <FaUser />
          </div>
          <div>
            <p className="font-bold text-gurugeeks-text">
              {user?.company_name}
            </p>
            <p className="font-semibold text-[12px] text-gurugeeks-text-2">
              HR Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
