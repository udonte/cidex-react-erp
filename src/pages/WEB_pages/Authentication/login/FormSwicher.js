import React from "react";

const FormSwitcher = ({ handleRoleChange, role }) => {
  return (
    <div className="py-6 flex items-center gap-x-6">
      <p className="text-semibold">Sign in as</p>
      <div className="flex gap-x-6">
        <div>
          <label className="">
            <input
              className="m-2"
              type="radio"
              value="user"
              checked={role === "user"}
              onChange={handleRoleChange}
            />
            Employee
          </label>
        </div>
        <div>
          <label>
            <input
              className="m-2"
              type="radio"
              value="admin"
              checked={role === "admin"}
              onChange={handleRoleChange}
            />
            Admin
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormSwitcher;
