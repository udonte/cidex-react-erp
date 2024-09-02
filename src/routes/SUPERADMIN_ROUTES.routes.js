import React from "react";
import { SuperAdminProtectedRoute } from "./protectedRoute";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/Super_Admin_pages/AdminLogin";
import Dashboard from "../pages/Super_Admin_pages/Dashboard/Dashboard";
import ForgotPassword from "../pages/Super_Admin_pages/ForgotPassword";
import ResetPassword from "../pages/Super_Admin_pages/ResetPassword";
import Tenants from "../pages/Super_Admin_pages/Tenants/Tenants";
import Payments from "../pages/Super_Admin_pages/Tenants/Payments";
import AdminSettings from "../pages/Super_Admin_pages/AdminSettings/AdminSettings";
import AdminLayout from "../components/SuperAdmin_components/Layout/AdminLayout";
import GenerateInvoice from "../pages/Super_Admin_pages/Tenants/GenerateInvoice";
import PrevewInvoice from "../pages/Super_Admin_pages/Tenants/PrevewInvoice";
import Promo from "../pages/Super_Admin_pages/Promo/Promo";

const SUPERADMIN_ROUTES = () => {
  return (
    <Routes>
      <Route path={`login`} element={<AdminLogin />} />
      <Route path={`forgot-password`} element={<ForgotPassword />} />
      <Route path={`reset-password`} element={<ResetPassword />} />

      <Route
        element={
          <SuperAdminProtectedRoute>
            <AdminLayout />
          </SuperAdminProtectedRoute>
        }
      >
        <Route path={`tenants`} element={<Tenants />} />
        <Route path={`generate-invoice`} element={<GenerateInvoice />} />
        <Route path={`preview-invoice`} element={<PrevewInvoice />} />
        <Route path={`payments`} element={<Payments />} />
        <Route path={`promo-code`} element={<Promo />} />
        <Route path={`admin-settings`} element={<AdminSettings />} />
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default SUPERADMIN_ROUTES;
