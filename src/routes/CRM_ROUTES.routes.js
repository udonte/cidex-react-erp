import { Navigate, Route, Routes } from "react-router";
import { ROUTE_PATHS } from "../constants/routes.constants";
import {
  ContactDetails,
  CreateInvoice,
  CustomContactList,
  CustomContactListDetails,
  Customer,
  Dashboard,
  Inventory,
  Lead,
  ProductDetails,
  SalesInvoice,
  SalesOverview,
  Settings,
  Tickets,
} from "../pages/CRM_pages/Admin";
import { DashboardLayout } from "../components/CRM_components";
import Analytics from "../pages/CRM_pages/Admin/CustomerService/Analytics";
import PreviewInvoice from "../pages/CRM_pages/Admin/Sales/PreviewInvoice";
import QuickAccess from "../components/CRM_components/contact/modal/QuickAccess";
import { ProtectedRoute } from "./protectedRoute";
import LeadDetail from "../pages/CRM_pages/Admin/LeadManagement/LeadDetail";
import LeadList from "../pages/CRM_pages/Admin/LeadManagement/LeadList";
import LeadListDetails from "../pages/CRM_pages/Admin/LeadManagement/LeadListDetails";

const CRM_ROUTES = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" />} />
        <Route path={ROUTE_PATHS.PRIVATE.DASHBOARD} element={<Dashboard />} />
        <Route
          path={ROUTE_PATHS.PRIVATE.CUSTOMER.CONTACT}
          element={<Customer />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.CUSTOMER.CONTACT}/:id`}
          element={<ContactDetails />}
        />
        <Route
          path={ROUTE_PATHS.PRIVATE.CUSTOMER.CUSTOM_CONTACT_LIST}
          element={<CustomContactList />}
        />

        <Route
          path={ROUTE_PATHS.PRIVATE.CUSTOMER.QUICK_ACCESS}
          element={<QuickAccess />}
        />

        <Route
          path={ROUTE_PATHS.PRIVATE.CUSTOMER_SERVICE.ANALYTICS}
          element={<Analytics />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.CUSTOMER.CUSTOM_CONTACT_LIST}/:id`}
          element={<CustomContactListDetails />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.LEAD_MGT.LEADS}`}
          element={<Lead />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.LEAD_MGT.LEAD_LIST}/:id`}
          element={<LeadDetail />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.LEAD_MGT.LEAD_LIST}`}
          element={<LeadList />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.LEAD_MGT.LEAD_LIST}/:id`}
          element={<LeadListDetails />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.CUSTOMER_SERVICE.TICKET}`}
          element={<Tickets />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.CUSTOMER_SERVICE.TICKET}/:id`}
          element={<Tickets />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.INVENTORY}`}
          element={<Inventory />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.SALES.OVERVIEW}`}
          element={<SalesOverview />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.SALES.SALES_INVOICE}`}
          element={<SalesInvoice />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.SALES.CREATE_INVOICE}`}
          element={<CreateInvoice />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.SALES.PREVIEW_INVOICE}`}
          element={<PreviewInvoice />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.SETTINGS}`}
          element={<Settings />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.INVENTORY}/:id`}
          element={<ProductDetails />}
        />
      </Route>
    </Routes>
  );
};

export default CRM_ROUTES;
