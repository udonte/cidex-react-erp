import React from "react";

const Checkbox = ({ handleOnchange, checked, name }) => {
  return (
    <div className=" z-1">
      <p className="flex justify-center items-center w-full mr-8">
        <label className="container1">
          <input
            className="text-center bg-green-700 checked:text-green-400"
            type="checkbox"
            name={name}
            checked={checked}
            onChange={handleOnchange}
          />
          <span className="checkmark"></span>
        </label>
      </p>
      <p className="invisible">j</p>
    </div>
  );
};

export default Checkbox;
