import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/appRoute";
import { useEffect } from "react";
import { fetchUser } from "./features/common/auth/auth.slice";
import { useDispatch } from "react-redux";
import { decryptId } from "./utils/helperFunctions/crypto.utils";
import { getPermissionByDesignation } from "./features/common/permissions/permission.slice";

function App() {

  return (
    <>
      <ToastContainer
        style={{ zIndex: "20000" }}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
        transition={Flip}
      />
      <div className="h-screen">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
