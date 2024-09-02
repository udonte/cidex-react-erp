import { Navigate, Route, Routes } from "react-router-dom";
import WEBSITE_ROUTE from "./WEB_ROUTES.routes";
import HRM_ROUTES from "./HRM_ROUTES.routes";
import CRM_ROUTES from "./CRM_ROUTES.routes";
import SUPERADMIN_ROUTES from "./SUPERADMIN_ROUTES.routes";
import React from "react";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <>
          <Route path="/" element={<Navigate to={"/HRM"} />} />
          <Route path="/admin/*" element={<SUPERADMIN_ROUTES />} />
          <Route path="/web/*" element={<WEBSITE_ROUTE />} />
          <Route path="/HRM/*" element={<HRM_ROUTES />} />
          <Route path="/CRM/*" element={<CRM_ROUTES />} />
        </>
      </Routes>
    </>
  );
};

export default AppRoutes;
