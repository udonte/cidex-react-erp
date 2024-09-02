import React, { useEffect } from "react";
import { BiSolidMessageDetail } from "react-icons/bi";

const Thread = ({ comment }) => {
  return (
    <div className="flex items-start my-2 w-full">
      <div className="flex items-center">
        <div className="h-[40px] w-[40px] text-white text-2xl flex items-center justify-center bg-slate-500 rounded">
          <BiSolidMessageDetail />
        </div>

        <div className="h-[1px] w-10 bg-gray-300"></div>
      </div>
      <div className=" border w-full rounded p-2">
        <div className=" flex items-center justify-between">
          <p>{comment.message}</p>
          <div className="flex items-center gap-x-3">
            {" "}
            <p>{comment.commenter.first_name}</p>
            <p>{comment.commenter.last_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thread;
