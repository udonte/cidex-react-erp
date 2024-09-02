import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar/EmployeeSideBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../../../features/common/auth/auth.slice";
import { getPermissionByDesignation } from "../../../../features/common/permissions/permission.slice";
import { useSelector } from "react-redux";
import { selectPermissionSlice } from "../../../../features/common/permissions/permission.selector";
import { employeeSideNavLink } from "../../../../utils/navLinks";

function EmployeeSelfServiceLayout() {
  const { permission } = useSelector(selectPermissionSlice);
  const dispatch = useDispatch();

  // Extract module_names from permissionArray
  const permissionModuleNames = permission?.map((item) => item.module_name);


  // Filter navLinkArray based on the presence of module_names
  const filteredNavLinks = employeeSideNavLink.filter((item) =>
    permissionModuleNames.includes(item.module_name)
  );
  const user_type = localStorage.getItem("user_type");
  const userType = user_type;
  useEffect(() => {
    if (userType === "admin") {
      dispatch(
        fetchUser(
          "tenants/065c27e2a6657b2a80005701701096d5?sort_by=asc&per_page=5&page=1&order_by=created_at&load_related=true"
        )
      );
    } else if (userType === "user") {
      dispatch(getPermissionByDesignation())
        // dispatch(fetchUser("employees/whoami"))
        .unwrap()
        .then((payload) => {
        });
    }
  }, [user_type]);
  return (
    <main className="min-h-screen h-screen flex flex-col overflow-hidden">
      <div className="border-b-1">
        <NavBar />
      </div>
      <div className="h-full  w-full flex">
        <div className="bg-white h-full">
          <SideBar filteredNavLinks={filteredNavLinks} />
        </div>
        <div className="h-full w-full bg-[#F3F4F6] overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default EmployeeSelfServiceLayout;
