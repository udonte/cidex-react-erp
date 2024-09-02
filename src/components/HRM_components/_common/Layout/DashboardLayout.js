import React, { useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar";
import { Outlet } from "react-router";
import KYCGeneralInformation from "../../KYCGeneralInformation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { MODALS } from "../../../../constants/modals.constant";
import { openModalByName } from "../../../../features/common/modals/modals.slice";

function DashboardLayout() {
  const dispatch = useDispatch();
  const openModal = useSelector(selectModalsSlice);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     dispatch(openModalByName(MODALS.KYC1));
  //   }, 3000); // 3 seconds delay

  //   return () => clearTimeout(timer); // Cleanup timer on component unmount
  // }, []);

  return (
    <main className="min-h-screen h-screen flex flex-col overflow-hidden">
      <div className="border-b-1">
        <NavBar />
      </div>
      <div className="h-full  w-full flex">
        <div className="bg-white h-full">
          <SideBar />
        </div>
        <div className="h-full w-full bg-[rgba(249, 249, 249, 1)] overflow-y-scroll">
          <Outlet />
        </div>
      </div>
      {/* {openModal[MODALS.KYC1] && <KYCGeneralInformation />} */}
    </main>
  );
}

export default DashboardLayout;
