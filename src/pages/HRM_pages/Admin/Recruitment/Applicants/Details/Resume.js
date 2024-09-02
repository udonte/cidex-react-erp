import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { Button } from "../../../../../../components/HRM_components";

const Resume = () => {
  return (
    <div>
      <div className="p-8 flex flex-col justify-start gap-4">
        <div className="flex items-center gap-4 border-b-[1px] py-2 border-gray-200">
          <div>
            <FaRegFileLines size={20} />
          </div>
          <div>
            <p>George Udonte resume.pdf</p>
          </div>
          <div className="ml-auto">
            <Button>View</Button>
          </div>
        </div>
        <div className="flex items-center gap-4 border-b-[1px] py-2 border-gray-200">
          <div>
            <FaRegFileLines size={20} />
          </div>
          <div>
            <p>George Udonte resume.pdf</p>
          </div>
          <div className="ml-auto">
            <Button>View</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
