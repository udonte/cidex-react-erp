import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const SubSideNavItem = ({ route, icon, text, isSidebarOpen }) => {
  const location = useLocation();
  const path = location.pathname;
  const getPageTitle = () => {
    switch (path) {
      case "/HRM/jobs":
        return "jobs";
      case "/HRM/applicants":
        return "job applicants";
      case "/HRM/talent-pool":
        return "talent pool";
      case "/HRM/project":
        return "Project";
      case "/HRM/my-timesheet":
        return "My Timesheet";
      case "/HRM/employee-timesheet":
        return "Employee Timesheet";
      case "/HRM/mandatory-training":
        return "Mandatory Training";
      case "/HRM/learning-and-development":
        return "Learning and Develoment";
      case "/HRM/goals-and-appraisals":
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
      default:
        return "Page Not Found";
    }
  };

  return (
    <NavLink
      to={`${route}` || "dashboard"}
      className={
        "mb-1 w-full text-sm h-10 flex justify-start items-center gap-x-3 text-gurugeeks-text hover:bg-[#f89d687e] hover:text-[#AF531F] font-semibold"
      }
    >
      <div className="flex justify-between items-center w-full pr-6">
        <div
          className={`px-6 ${icon ? `flex gap-x-2 items-center` : ""} ${
            isSidebarOpen ? "transition-opacity duration-1000" : "w-0"
          } ${isSidebarOpen ? "opacity-100" : "opacity-0"} `}
        >
          <div>{icon}</div>
          <p className=" truncate">{text}</p>
        </div>
        {getPageTitle().toLowerCase() === text.toLowerCase() ? (
          <div className="h-3 w-3 rounded-full bg-[#AF531F]"></div>
        ) : (
          <></>
        )}
      </div>
    </NavLink>
  );
};

export default SubSideNavItem;
