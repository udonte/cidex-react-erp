import React from "react";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar";
import { Outlet } from "react-router";
// import { selectModalsSlice } from "../../features/modals/modals.selectors";
// import { useSelector } from "react-redux";

function CrmDashboardLayout() {
  // const selectModal = useSelector(selectModalsSlice);

  return (
    <main className="min-h-screen h-screen flex flex-col overflow-hidden">
      <div className="border-b-1">
        <NavBar />
      </div>
      <div className="h-full  w-full flex">
        <div className="bg-white h-full">
          <SideBar />
        </div>
        <div className="h-full w-full bg-[#F3F4F6] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default CrmDashboardLayout;
