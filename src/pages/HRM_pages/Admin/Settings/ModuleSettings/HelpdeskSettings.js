import React, { useEffect } from "react";
import {
  BreadCrumbs,
  Button,
  Spinner,
  TopTab,
} from "../../../../../components/HRM_components";
import AddTicketCategory from "../../../../../components/HRM_components/Admin/settings/Modal/AddTicketCategory";
import { useDispatch } from "react-redux";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../../constants/modals.constant";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import { fetchHelpdeskCategory } from "../../../../../features/HRM_features/settings/settings.slice";
import { selectHekdeskSettings, selectSettings } from "../../../../../features/HRM_features/settings/settings.selector";
import TextEditor from "../../../../../components/_common/TextEditor";

const HelpdeskSettings = () => {
  const openModal = useSelector(selectModalsSlice);
  const dispatch = useDispatch();
  const { heldeskCategory, isLoading } = useSelector(selectSettings);
  const breadcrumbItems = ["Settings", "Helpdesk"];

  useEffect(() => {
    dispatch(fetchHelpdeskCategory());
  }, [dispatch]);

  return (
    <>
      <div>
        <BreadCrumbs breadcrumbItems={breadcrumbItems} />
        <TopTab
          leftComponent={<h1 className="font-bold text-xl">Ticket Category</h1>}
          rightComponent={
            <Button
              onClick={() =>
                dispatch(openModalByName(MODALS.SETTINGS.ADD_HELPDESK_CATEGORY))
              }
            >
              Add Ticket Category
            </Button>
          }
        />
        <div className="bg-white h-full">
          {isLoading ? (
            <>
              <div className="h-[500px] w-full flex items-center justify-center">
                <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
              </div>
            </>
          ) : (
            heldeskCategory?.map((category, index) => {
              return (
                <div className="flex gap-x-3 border-b p-3">
                  <p> {index + 1}.</p>
                  <p className="capitalize"> {category.name}</p>
                </div>
              );
            })
          )}
        </div>
        {/* <TextEditor /> */}
      </div>
      {openModal[MODALS.SETTINGS.ADD_HELPDESK_CATEGORY] && (
        <AddTicketCategory />
      )}
    </>
  );
};

export default HelpdeskSettings;
