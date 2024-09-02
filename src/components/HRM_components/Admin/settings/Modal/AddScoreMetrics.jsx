import React, { useState } from "react";
import MiddleModalContainer from "../../../_common/MiddleModalContainer/MiddleModalContainer";
import CustomInput from "../../../_common/CustomInput";
import Button from "../../../_common/Button/Button";
import { useDispatch } from "react-redux";
import {
  addScoreMetrics,
  fetchScoreMetrics,
} from "../../../../../features/HRM_features/settings/settings.slice";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import Spinner from "../../../../_common/Spinner";

const AddScoreMetrics = ({ isLoading }) => {
  const dispatch = useDispatch();
  const [metric, setMetric] = useState({
    name: "",
  });

  const handleCreateMetric = () => {
    dispatch(addScoreMetrics(metric))
      .unwrap()
      .then((payload) => {
        if (payload.id && payload.created_at) {
          dispatch(fetchScoreMetrics());
          dispatch(closeAllModals());
        }
      });
  };
  return (
    <div>
      <MiddleModalContainer title="Score Metrics">
        <div className="m-7">
          <CustomInput
            value={metric.name}
            name={"name"}
            label={"Metric Name"}
            handleInputChange={(e) => {
              const { name, value } = e.target;
              setMetric((prev) => ({ prev, [name]: value }));
            }}
          />
          <div className="flex gap-x-3 mt-3 justify-end">
            <Button color={"secondary"}>Cancel</Button>
            <Button
              onClick={() => {
                handleCreateMetric();
              }}
            >
              {isLoading ? (
                <div className="w-14">
                  <Spinner />
                </div>
              ) : (
                "Create"
              )}
            </Button>
          </div>
        </div>
      </MiddleModalContainer>
    </div>
  );
};

export default AddScoreMetrics;
