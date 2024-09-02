import React, { useState } from "react";
import CustomDropdown from "../../../../../../../components/HRM_components/_common/CustomDropDown";
import { CustomInput } from "../../../../../../../components/HRM_components";
import { FaStar } from "react-icons/fa";

const EditScoreCard = () => {
  const [formData, setFormData] = useState({
    rating: "",
    feedback: "",
    remark: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-2 justify-start p-4">
      {/* METRIC 1 */}
      <div className="p-4 border rounded space-y-2">
        <div className="flex items-center justify-between mb-4">
          <div className="w-[200px]">
            <p>Technical Skills</p>
          </div>
          <div className="flex items-center gap-2">
            <FaStar color="#FBBF24" size={25} />
            <div className="w-[150px]">
              <CustomInput
                placeholder={"Rate this skill"}
                type={"number"}
                value={formData.rating}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <CustomInput
          label={"Feedback"}
          placeholder={"Enter feedback"}
          type={"textarea"}
          value={formData.feedback}
          handleInputChange={handleInputChange}
        />
      </div>

      {/* REMARK */}
      <div className="mt-4">
        <CustomInput
          label={"Remark"}
          value={formData.remark}
          placeholder={"Final thoughts.."}
          type={"textarea"}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default EditScoreCard;
