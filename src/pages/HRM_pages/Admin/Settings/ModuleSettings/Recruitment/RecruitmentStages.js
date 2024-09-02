import React, { useEffect } from "react";
import {
  BreadCrumbs,
  Button,
  Spinner,
  TopTab,
} from "../../../../../../components/HRM_components";
import { useDispatch } from "react-redux";
import { openModalByName } from "../../../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../../../constants/modals.constant";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../../../features/common/modals/modals.selectors";
import { fetchRecruitmentStage } from "../../../../../../features/HRM_features/settings/settings.slice";
import {
  selectHekdeskSettings,
  selectSettings,
} from "../../../../../../features/HRM_features/settings/settings.selector";
import TextEditor from "../../../../../../components/_common/TextEditor";
import AddNewStage from "../../../../../../components/HRM_components/Admin/settings/Modal/AddNewStageRecruitment";
import AddNewStageRecruitment from "../../../../../../components/HRM_components/Admin/settings/Modal/AddNewStageRecruitment";

const RecruitmentStages = () => {
  const openModal = useSelector(selectModalsSlice);
  const { recruitmentStages, isLoading } = useSelector(selectSettings);

  const dispatch = useDispatch();
  // const { heldeskCategory } = useSelector(selectHekdeskSettings);
  const breadcrumbItems = ["Settings", "Recruitment"];

  useEffect(() => {
    dispatch(fetchRecruitmentStage());
  }, [dispatch]);

  return (
    <>
      <div>
        <BreadCrumbs breadcrumbItems={breadcrumbItems} />
        <TopTab
          leftComponent={
            <h1 className="font-bold text-xl">Recruitment Stage</h1>
          }
          rightComponent={
            <Button
              onClick={() =>
                dispatch(
                  openModalByName(MODALS.SETTINGS.ADD_NEW_STAGE_RECRUITMENT)
                )
              }
            >
              Add New Stage
            </Button>
          }
        />
        {isLoading ? (
          <>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
            </div>
          </>
        ) : (
          <>
            <div className="bg-white h-full\\\\\">
              {recruitmentStages.map((category, index) => {
                return (
                  <div className="flex gap-x-3 border-b p-3">
                    <p>Stage {index + 1}.</p>
                    <p className="capitalize"> {category.name}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}{" "}
      </div>
      {openModal[MODALS.SETTINGS.ADD_NEW_STAGE_RECRUITMENT] && (
        <AddNewStageRecruitment />
      )}
    </>
  );
};

export default RecruitmentStages;
