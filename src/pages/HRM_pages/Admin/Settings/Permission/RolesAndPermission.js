import React, { useEffect, useState } from "react";
import PermissionAccordion from "../../../../../components/HRM_components/Admin/settings/PermissionAccordion";
import { useDispatch } from "react-redux";
import { getSubscriptionById } from "../../../../../features/common/subscription/subscription.slice";
import { useSelector } from "react-redux";
import { selectSubscriptionSlice } from "../../../../../features/common/subscription/subscription.selector";
import { getPositions } from "../../../../../features/HRM_features/organisation/positions/position.slice";
import { selectPositions } from "../../../../../features/HRM_features/organisation/positions/position.selectors";
import { Button, TopTab } from "../../../../../components/HRM_components";
import {
  getPermission,
  savePermission,
} from "../../../../../features/common/permissions/permission.slice";
import { selectPermissionSlice } from "../../../../../features/common/permissions/permission.selector";

const RolesAndPermission = () => {
  const [permissionData, setPermissionData] = useState();
  const [activeDesignation, setActiveDesignation] = useState();
  const { subscription } = useSelector(selectSubscriptionSlice);
  const { permissions } = useSelector(selectPermissionSlice);
  const { positions } = useSelector(selectPositions);
  const [permission, setPermission] = useState({
    designation_id: positions[0]?.id,
    permissions: subscription?.modules?.map((module) => ({
      module_name: module?.name,
      module_id: module?.id,
      can_read: true,
      can_write: true,
      can_update: true,
      can_delete: true,
      can_approve: true,
    })),
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscriptionById());
    dispatch(getPositions());
    dispatch(getPermission());
  }, []);

  const filterData = (designationId) => {
    const filtered = permissions?.filter(
      (item) => item.designation_id === designationId
    );
    setPermission({
      designation_id: designationId,
      permissions: filtered.map((item) => ({
        module_name: item.module_name,
        module_id: item.module_id,
        can_read: item.read,
        can_write: item.write,
        can_update: item.update,
        can_delete: item.delete,
        can_approve: item.approve,
      })),
    });
  };

  const handleSavePermission = () => {
    dispatch(savePermission(permission));
  };

  const handleReadCheckboxChange = (moduleName, name) => {
    const updatedPermissions = permission.permissions.map((item) => {
      if (item.module_name === moduleName) {
        return {
          ...item,
          [name]: !item[name], // Toggle the can_read property
        };
      }
      return item;
    });

    setPermission({
      ...permission,
      permissions: updatedPermissions,
    });
  };

  const handleToggleButtonClick = (moduleName, moduleId) => {
    // Check if the module name already exists in permissions
    const moduleExists = permission.permissions.some(
      (item) => item.module_name === moduleName
    );

    // If the module exists, remove it; otherwise, add it
    if (moduleExists) {
      const updatedPermissions = permission.permissions.filter(
        (item) => item.module_name !== moduleName
      );
      setPermission({
        ...permission,
        permissions: updatedPermissions,
      });
    } else {
      const updatedPermissions = [
        ...permission.permissions,
        {
          module_name: moduleName,
          module_id: moduleId,
          can_read: true,
          can_write: true,
          can_update: true,
          can_delete: true,
          can_approve: true,
        },
      ];
      setPermission({
        ...permission,
        permissions: updatedPermissions,
      });
    }
  };

  return (
    <div>
      <div className="p-4">
        <TopTab
          leftComponent={<h1 className="font-bold text-lg">Module Access</h1>}
          rightComponent={
            <div className="flex items-center gap-x-5">
              <Button color={"secondary"}>Cancel</Button>
              <Button onClick={handleSavePermission}>Save</Button>
            </div>
          }
        />

        {/* roles */}
        <div className="flex items-start gap-2">
          {/* Page heads */}
          <div className="bg-white w-1/3 rounded-md border-2 font-semibold">
            {positions.map((position, index) => {
              return (
                <div
                  onClick={() => {
                    filterData(position.id);
                  }}
                  className="h-[50px] pr-2 py-2  w-full"
                  key={index}
                >
                  <div
                    className={`border-l-4 px-2 font-semibold flex items-center h-full ${
                      position.id === permission.designation_id
                        ? "border-gurugeeks-orange-600"
                        : ""
                    } `}
                  >
                    {position.name}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Content div for the selected tab */}
          <div className="bg-white w-2/3 rounded-md">
            <PermissionAccordion
              handleToggleButtonClick={handleToggleButtonClick}
              modulePermission={permission}
              subscription={subscription}
              handleReadCheckboxChange={handleReadCheckboxChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesAndPermission;
