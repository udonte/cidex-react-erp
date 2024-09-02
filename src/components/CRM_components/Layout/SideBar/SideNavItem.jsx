import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
  const toggleSubMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  if (subMenu) {
    return (
      <>
        <div className=" w-full">
          <div
            onClick={toggleSubMenu}
            className="flex justify-start items-center"
          >
            <div
              className={`px-4 flex h-[44px] w-full justify-between items-center truncate  hover:bg-[#CBF8CB] hover:text-[#128438]  text-gurugeeks-text font-semibold"
              ${isSidebarOpen ? "transition-opacity duration-1000" : ""} ${
                isSidebarOpen ? "opacity-100" : "opacity-0"
              } `}
            >
              <div className="flex items-center gap-x-2">
                <p className=" text-[20px]"> {icon}</p>
                <p className="font-semibold">{text}</p>
              </div>
              {showSubMenu ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {/* {showSubMenu && */}
          <div
            className={`${
              showSubMenu
                ? "opacity-100 max-h-32 border-b"
                : "opacity-0 max-h-0 invisible"
            }`}
            style={{
              transition:
                "opacity 0.3s ease-in-out, max-height 0.3s ease-in-out ,visibilty 0.1s ease-in-out truncate",
            }}
          >
            {innerMenu.map((link, id) => (
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
              ? " bg-[#CBF8CB] text-[#128438]  w-full font-bold "
              : "hover:bg-[#CBF8CB] w-full text-gurugeeks-text hover:text-[#128438] font-semibold"
          }
        >
          <div className="px-4 h-[44px] w-full flex justify-start items-center gap-x-3">
            <div>
              <p className=" text-[20px]"> {icon}</p>
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
