import React from "react";
import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectUserToken } from "../features/auth/auth.selector";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");
  // const paid = false;
  if (token) {
    return children;
  } else {
    return <Navigate to={`/web/home`} replace />;
  }
};

export const SuperAdminProtectedRoute = ({ children }) => {
  // const token = localStorage.getItem("admin_token");

  if (true) {
    return children;
  } else {
    // return <Navigate to={`/admin/login`} replace />;
  }
};
