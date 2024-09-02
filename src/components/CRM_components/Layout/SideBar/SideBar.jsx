import React from "react";
import SideNavItem from "./SideNavItem";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaSignOutAlt } from "react-icons/fa";
import { logout } from "../../../../features/common/auth/auth.slice";
import { toggleSidebar } from "../../../../features/common/app-settings/appSettings.slice";
import { CRMSideNavLink } from "../../../../utils/navLinks";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((store) => store.appSettings.sidebar);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      <div
        className={`relative h-full  shadow-lg shadow-[#D0D5DD] flex flex-col justify-between ${
          isSidebarOpen
            ? "w-64 transition-all duration-500"
            : " w-[44px] transition-all duration-500"
        }`}
      >
        <div
          onClick={handleToggle}
          className=" absolute border-1 bg-white shadow-lg rounded-full flex justify-center items-center h-8 w-8 -right-[9px] top-[30px]"
        >
          <div className="text-gurugeeks-text">
            {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
          </div>
        </div>
        <div className={`${isSidebarOpen ? "visible" : "invisible"}`}>
          {/* <div
            className={` ${
              isSidebarOpen
                ? "h-[130px] w-full flex items-center justify-center"
                : " invisible"
            } `}
          >
            <img className="" src={logo} />
          </div> */}
          <div className="mt-[70px]">
            {CRMSideNavLink.map((link, id) => (
              <div key={id} className="flex flex-row">
                <SideNavItem key={id} isSidebarOpen={isSidebarOpen} {...link} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div
            onClick={() => {
              dispatch(logout());
              navigate(`/web/`);
            }}
            className="px-3 h-10 w-full mb-[70px] flex justify-start items-center gap-x-3 font-bold hover:bg-[#f89d687e] rounded-lg text-gurugeeks-text hover:text-[#AF531F]"
          >
            <div>
              <p className=" text-[20px]">
                <FaSignOutAlt />
              </p>
            </div>
            <p
              className={`${
                isSidebarOpen ? "transition-opacity duration-1000" : ""
              } ${isSidebarOpen ? "opacity-100" : "opacity-0"} `}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
