import React from "react";
import { NavLink } from "react-router-dom";

const SubSideNavItem = ({ route, icon, text, isSidebarOpen }) => {
  return (
    <NavLink
      to={`${route}` || "dashboard"}
      className={({ isActive }) =>
        isActive
          ? "px-3 mb-1 w-full  h-10 flex justify-start items-center gap-x-3 bg-[#CBF8CB] text-[#128438] font-bold "
          : "px-3 mb-1 w-full  h-10 flex justify-start items-center gap-x-3 text-gurugeeks-text hover:bg-[#E7FCEE] hover:text-[#128438] font-semibold"
      }
    >
      <div className=" text-[20px]">{icon}</div>
      <div>
        <p
          className={`${
            isSidebarOpen ? "transition-opacity duration-1000 truncate" : "w-0"
          } ${isSidebarOpen ? "opacity-100" : "opacity-0"} `}
        >
          {text}
        </p>
      </div>
    </NavLink>
  );
};

export default SubSideNavItem;
