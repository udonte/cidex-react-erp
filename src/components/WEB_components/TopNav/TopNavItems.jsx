import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const TopNavItems = ({
  subMenuLink,
  subMenu,
  route,
  text,
  navigate,
  section,
}) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [showSubMenu, setShowSubMenu] = useState(false);
  if (subMenu) {
    return (
      <div
        className="relative"
        onMouseEnter={( ) => {
          setShowSubMenu(true);
        }}
        onMouseLeave={() => {
          setShowSubMenu(false);
        }}>
        <div className="relative font-normal hover:after:w-full hover:after:left-0 after:right-0 after:absolute  after:bottom-[-7px] after:rounded-full after:h-1 after:transition-all after:duration-1000 after:w-0 after:bg-gurugeeks-orange-100 hover:cursor-pointer">
          <p>{text}</p>
        </div>

        <div
          className={`${
            showSubMenu ? "visible" : "invisible"
          } absolute top-8 rounded-md border p-8 bg-white shadow-xl w-fit flex z-50`}>
          {subMenuLink.map((arr, index) => (
            <div key={index}>
              {arr.map((i, index) => (
                <div key={index} className="mr-8">
                  <p className="text-sm font-medium w-[200px] text-gurugeeks-orange-100">
                    {i.title}
                  </p>
                  <NavLink
                    to={i.route}
                    className={({ isActive }) =>
                      isActive ? "text-gurugeeks-orange-100 boder" : ""
                    }>
                    <p className="text-sm font-medium">{i.text}</p>
                  </NavLink>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  } else if (route) {
    return (
      <div
        onClick={() => {
          scrollToSection(section);
        }}

        className={({ isActive }) =>
          isActive
            ? "text-gurugeeks-orange-100 relative after:w-full after:absolute after:rounded-full after:bottom-[-7px] after:right-0 after:left-0  after:h-1 after:bg-gurugeeks-orange-100"
            : ""
        }
      >
        <div className=" font-semibold px-6 relative hover:after:w-full hover:after:left-0 after:right-0 after:absolute  after:bottom-[-7px] after:rounded-full after:h-1 after:transition-all after:duration-1000 after:w-0 after:bg-gurugeeks-orange-100 hover:cursor-pointer">
          {text} 
        </div>
      </div>
    );
  } else if (!route) {
    return (
      <div
        onClick={() => {
          scrollToSection(section);
        }}
        className=" relative font-normal px-4 hover:after:w-full hover:after:left-0 after:right-0 after:absolute  after:bottom-[-7px] after:rounded-full after:h-1 after:transition-all after:duration-1000 after:w-0 after:bg-gurugeeks-orange-100 hover:cursor-pointer">
        <p>{text}</p>
      </div>
    );
  }
};

export default TopNavItems;
