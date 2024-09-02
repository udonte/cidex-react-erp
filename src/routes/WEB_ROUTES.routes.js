import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  Home,
  Subscribe,
  Contact,
  KnowledgeBase,
  FreeDemo
} from "../pages/WEB_pages/index";
import CodeVerification from "../pages/WEB_pages/Authentication/CodeVerification";
import SignUp from "../pages/WEB_pages/Authentication/SignUp";
import Login from "../pages/WEB_pages/Authentication/Login";
import TopNav from "../components/WEB_components/TopNav/TopNav";
import ForgotPassword from "../pages/WEB_pages/Authentication/ForgotPassword";
import CheckEmail from "../pages/WEB_pages/Authentication/CheckEmail";
import ResetSuccessful from "../pages/WEB_pages/Authentication/ResetSucessful";
import ResetPassword from "../pages/WEB_pages/Authentication/ResetPassword";
import CodeForgotPassword from "../pages/WEB_pages/Authentication/CodeForgotPassword";
import SupportTicket from "../pages/WEB_pages/Support/SupportTicket";
import VerifyYourEmail from "../pages/WEB_pages/Authentication/VerifyYourEmail";

const WEBSITE_ROUTE = () => {
  const location = useLocation();
  return (
    <>
      <div className="fixed w-screen bg-white z-50">
        {![
          "/HRM",
          "/CRM",
          "/web/login",
          "/web/sign-up",
          "/web/forgot-password",
          "/web/code-forgot",
          "/web/check-email",
          "/web/reset-password",
          "/web/reset-successful",
        ].some((path) => location.pathname.startsWith(path)) &&
          !location.pathname.startsWith("/web/code-verification") && (
            <TopNav />
          )}
      </div>
      <Routes>
        <Route path={`sign-up`} element={<SignUp />} />
        <Route path={`login`} element={<Login />} />
        <Route index element={<Navigate to="home" />} />
        <Route path={`home`} element={<Home />} />
        <Route path={`subscribe`} element = {<Subscribe />} />
        <Route path={`contact`} element = {<Contact />} />
        <Route path={`freedemo`} element = {<FreeDemo />} />

        <Route
          path={`support`}
          element={
            <div className="pt-[80px]">
              <SupportTicket />
            </div>
          }
        />
        <Route
          path={`code-verification`}
          element={<CodeVerification />}
        />
        <Route path={`code-verify`} element={<VerifyYourEmail />} />
        <Route path={`code-forgot`} element={<CodeForgotPassword />} />
        <Route path={`forgot-password`} element={<ForgotPassword />} />
        <Route path={`check-email`} element={<CheckEmail />} />
        <Route path={`reset-password`} element={<ResetPassword />} />
        <Route path={`reset-successful`} element={<ResetSuccessful />} />
        <Route path={`home/knowledgebase`} element={<KnowledgeBase/>} />
        <Route path={`code-verification`} element={<CodeVerification />} />
        {/* 
      <Route
        path={`/${ROUTE_PATHS.PUBLIC.CUSTOMER_INFO}`}
        element={<CustomerInfoPage />}
      />
      <Route
        path={`/${ROUTE_PATHS.PUBLIC.SALES_PROCESS_MANAGEMENT}`}
        element={<SalesProcessMgtPage />}
      />
      <Route
        path={`/${ROUTE_PATHS.PUBLIC.EXPERIENCE_AND_PERFORMANCE}`}
        element={<Experience />}
      />
      <Route
        path={`/${ROUTE_PATHS.PUBLIC.RESET_PASSWORD}`}
        element={<ResetPassword />}
      />
      <Route path={`/first-time-login`} element={<FirstTimeLogin />} />
      <Route
        path={`/${ROUTE_PATHS.PUBLIC.RESET_SUCCESSFUL}`}
        element={<ResetSuccessful />}
      />
      <Route
        path={`/${ROUTE_PATHS.PUBLIC.CHECK_EMAIL}`}
        element={<CheckEmail />}
      />
      <Route path={`/${ROUTE_PATHS.PUBLIC.FREE_DEMO}`} element={<FreeDemo />} />
      <Route path={`/${ROUTE_PATHS.PUBLIC.HIRING}`} element={<Onboarding />} />
      <Route
        path={`/${ROUTE_PATHS.PUBLIC.EMPLOYEE_EXPERIENCE}`}
        element={<Experience />}
      /> */}
      </Routes>
    </>
  );
};

export default WEBSITE_ROUTE;
