import React from "react";

const PracticalTaskForm = () => {
  return (
    <div className="px-4">
      <h1>Practical Task</h1>
      <div className="my-3">
        <label>Tittle</label>
        <input
          className="p-3 w-full h-14 border bg-slate-50 rounded-md"
          type="text"
        />
      </div>
      <div className="my-3">
        <label>Email Subject</label>
        <input
          className="p-3 w-full h-14 border bg-slate-50 rounded-md"
          type="text"
        />
      </div>
      <div className="my-3">
        <label>DESCRIPTION</label>
        <input
          className="p-3 w-full h-14 border bg-slate-50 rounded-md"
          type="text"
        />
      </div>
    </div>
  );
};

export default PracticalTaskForm;
