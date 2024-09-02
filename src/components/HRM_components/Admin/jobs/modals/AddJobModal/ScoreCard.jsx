import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
// import { postScoreCard } from "../../../../../features/recruitment/jobs/jobs.slice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Spinner from "../../../../../_common/Spinner";
import { postScoreCard } from "../../../../../../features/HRM_features/recruitment/jobs/jobs.slice";
import Button from "../../../../_common/Button/Button";

const ScoreCard = ({ jobId, isLoading }) => {
  const dispatch = useDispatch();
  const [metricValues, setMetricValues] = useState([""]);
  const scoreCardData = { job_id: jobId, metrics: metricValues };

  const handleInputChange = (e, index) => {
    const newInputValues = [...metricValues]; // Create a copy of the input values array
    newInputValues[index] = e.target.value; // Update the value at the specified index
    setMetricValues(newInputValues); // Update the state with the new array
  };

  const addInputField = () => {
    setMetricValues([...metricValues, ""]); // Add an empty input field to the array
  };

  const removeInputField = (index) => {
    const newInputValues = [...metricValues];
    newInputValues.splice(index, 1); // Remove the input field at the specified index
    setMetricValues(newInputValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobId) {
      toast.error("Fill Job Info First");
    }

    dispatch(postScoreCard(scoreCardData));
  };

  const allFieldsFilled = metricValues.every((value) => value.trim() !== "");

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="px-6">
          {metricValues.map((inputValue, index) => (
            <div className="p-5 border my-4 rounded-lg w-full" key={index}>
              <div className="py-3 w-full flex justify-between item-center">
                <h1 className=" text-xl">Section {`${index + 1}`}</h1>
                <button type="button" onClick={() => removeInputField(index)}>
                  <BiTrash className="text-red-500 text-xl" />
                </button>
              </div>
              <div>
                <label htmlFor={`inputField${index}`}>Metric Title</label>
              </div>
              <input
                className="h-[56px] border-2 w-full rounded-lg bg-slate-50 p-3"
                name=""
                id={`inputField${index}`}
                value={inputValue}
                onChange={(e) => handleInputChange(e, index)}
                placeholder="eg Communication"
              />
            </div>
          ))}
          <button
            className="text-[#16C098] text-lg"
            type="button"
            onClick={addInputField}
          >
            Add new block
          </button>
        </div>
        <div className="flex justify-end items-center gap-x-2 py-2">
          <Button size={"lg"} type="button" color={"secondary"}>
            Skip
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!allFieldsFilled}
            size={"lg"}
            type="submit"
          >
            {isLoading ? (
              <div className="w-14">
                <Spinner />
              </div>
            ) : (
              "Submit Metrics"
            )}
          </Button>
        </div>
      </form>
    </>
  );
};

export default ScoreCard;
