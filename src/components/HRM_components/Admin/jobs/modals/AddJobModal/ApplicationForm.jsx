import React from "react";

const ApplicationForm = () => {
  return (
    <div className="px-5">
      <h1>ApplicationForm</h1>
      <p>Create and customize your form for applications</p>
      <div className="flex justify-between items-center h-[20px] border-b py-6">
        <p>First Name</p>
        <div className="gap-x-2">
          <input className="" type="radio" />
          <label className="mx-2">Required</label>
        </div>
      </div>
      <div className="flex justify-between items-center h-[20px] border-b py-6">
        <p>First Name</p>
        <div className="gap-x-2">
          <input className="" type="radio" />
          <label className="mx-2">Required</label>
        </div>
      </div>
      <div className="flex justify-between items-center h-[20px] border-b py-6">
        <p>First Name</p>
        <div className="flex items-center gap-x-3">
          <div className="gap-x-2">
            <input className="" type="radio" />
            <label className="mx-2">Optional</label>
          </div>
          <div className="gap-x-2">
            <input className="" type="radio" />
            <label className="mx-2">Required</label>
          </div>
        </div>
      </div>
      <button className="h-[50px] border my-5 p-2 rounded-md">Add Customize field</button>
    </div>
  );
};

export default ApplicationForm;
