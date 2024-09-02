import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SubSideNavItem from "./SubSideNavItem";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SideNavItem = ({
  text,
  subMenu,
  subMenuLink,
  icon,
  route,
  isSidebarOpen,
}) => {
  const [innerMenu] = useState(subMenuLink);
  const [showSubMenu, setShowMenu] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  const getPageTitle = () => {
    switch (path) {
      case "/HRM/dashboard":
        return "Dashboard";
      case "/HRM/employee":
        return "Employees";
      case "/HRM/jobs":
        return "Recruitment";
      case "/HRM/applicants":
        return "Recruitment";
      case "/HRM/talent-pool":
        return "Recruitment";
      case "/HRM/project":
        return "Timesheet Management";
      case "/HRM/my-timesheet":
        return "Timesheet Management";
      case "/HRM/employee-timesheet":
        return "Timesheet Management";
      case "/HRM/mandatory-training":
        return "Performance Management";
      case "/HRM/learning-and-development":
        return "Performance Management";
      case "/HRM/goals-and-appraisals":
        return "Performance Management";
      case "/HRM/performance-settings":
        return "Performance Management";
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

  const toggleSubMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  if (subMenu) {
    return (
      <>
        <div className=" w-full 10px">
          <div
            onClick={toggleSubMenu}
            className="flex justify-start items-center"
          >
            <div
              className={`px-6 text-sm flex h-[44px] w-full justify-between items-center hover:bg-[#f89d685b]  hover:text-[#AF531F] font-semibold rounded-md"
              ${isSidebarOpen ? "transition-opacity duration-1000" : ""} ${
                isSidebarOpen ? "opacity-100" : "opacity-0"
              }  ${
                getPageTitle().toLowerCase() === text.toLowerCase()
                  ? "bg-[#f3a172b9] w-full text-[#AF531F] font-bold "
                  : "text-gurugeeks-text"
              }`}
            >
              <div className="text-sm flex items-center gap-x-2 truncate">
                <p>{icon}</p>
                <p className="font-semibold truncate">{text}</p>
              </div>
              <div className="ml-2">
                {showSubMenu ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
          </div>
          <div
            className={`accordion-content ${showSubMenu ? "open" : "closed"}`}
          >
            {innerMenu?.map((link, id) => (
              <SubSideNavItem
                key={id}
                {...link}
                isSidebarOpen={isSidebarOpen}
              />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <NavLink
          to={route}
          className={({ isActive }) =>
            isActive
              ? "bg-[#f3a172b9] w-full text-[#AF531F] font-bold "
              : "hover:bg-[#f89d687e] w-full text-gurugeeks-text hover:text-[#AF531F] font-semibold"
          }
        >
          <div className="text-sm px-6 h-[44px] w-full flex justify-start items-center gap-x-3">
            <div>
              <p> {icon}</p>
            </div>
            <p
              className={`${
                isSidebarOpen ? "transition-opacity duration-1000" : ""
              } ${isSidebarOpen ? "opacity-100" : "opacity-0"} `}
            >
              {text}
            </p>
          </div>
        </NavLink>
      </>
    );
  }
};

export default SideNavItem;
