import React from "react";
import SideNavItem from "./SideNavItem";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaSignOutAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { toggleSidebar } from "../../../../features/common/app-settings/appSettings.slice";
import { ROUTE_PATHS } from "../../../../constants/routes.constants";
import { logout } from "../../../../features/common/auth/auth.slice";
import { AdminSideNav } from "../../../../utils/navLinks";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((store) => store.appSettings.sidebar);

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      <div
        className={`relative  h-full shadow-lg shadow-[#D0D5DD] flex flex-col justify-between ${
          isSidebarOpen
            ? " w-[260px] transition-all duration-500"
            : " w-[46px] transition-all duration-500"
        }`}
      >
        <div
          onClick={handleSidebarToggle}
          className=" absolute border-2 border-gurugeeks-orange-600 bg-orange-50  shadow-lg rounded-full flex justify-center items-center h-8 w-8 -right-[9px] top-[30px]"
        >
          <div className="text-gurugeeks-text-gray">
            {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
          </div>
        </div>
        <div
          className={`${
            isSidebarOpen ? "visible" : "invisible"
          } h-[80%] overflow-y-scroll overflow-x-hidden`}
        >
          <div className="mt-[70px] ">
            {AdminSideNav.map((link, id) => (
              <div key={id} className="flex flex-row">
                <SideNavItem key={id} isSidebarOpen={isSidebarOpen} {...link} />
              </div>
            ))}
          </div>
        </div>
        <div className="h-[25%] text-sm flex flex-col justify-start w-full mt-6 mb-10">
          <p
            className={`${
              isSidebarOpen ? "pl-6 transition-opacity duration-1000" : ""
            } ${isSidebarOpen ? "opacity-100" : "opacity-0"} `}
          >
            OTHERS
          </p>
          <div className=" p-3">
            <div
              onClick={() => {
                navigate(`${ROUTE_PATHS.PRIVATE.SETTINGS.SETTINGS}`);
              }}
              className="px-3 h-10 w-full flex justify-start items-center gap-x-3 font-bold hover:bg-[#ddd0c87e] text-gurugeeks-text-gray hover:text-[#AF531F]"
            >
              <div>
                <p>
                  <FiSettings />
                </p>
              </div>
              <p
                className={`${
                  isSidebarOpen ? "transition-opacity duration-1000" : ""
                } ${isSidebarOpen ? "opacity-100" : "opacity-0"} `}
              >
                Settings
              </p>
            </div>
            <div
              onClick={() => {
                dispatch(logout());
                navigate(`/web/login`);
              }}
              className="px-3 h-10 w-full flex justify-start items-center gap-x-3 font-bold hover:bg-[#ddd0c87e] text-gurugeeks-text-gray hover:text-[#AF531F]"
            >
              <div>
                <p>
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
      </div>
    </>
  );
};

export default SideBar;
