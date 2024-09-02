import React from "react";
import {
  BreadCrumbs,
  Button,
  Spinner,
  TopTab,
} from "../../../../../components/HRM_components";

const PerformanceSetting = () => {
  const breadcrumbItems = ["Settings", "Helpdesk"];
  const isLoading = false;

  return (
    <div>
      <div>
        <BreadCrumbs breadcrumbItems={breadcrumbItems} />
        <TopTab
          leftComponent={<h1 className="font-bold text-xl">Add Circle</h1>}
          rightComponent={<Button>Add Organization cycle</Button>}
        />
        <div className="bg-white h-full">
          {isLoading ? (
            <>
              <div className="h-[500px] w-full flex items-center justify-center">
                <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
              </div>
            </>
          ) : (
            ""
            // heldeskCategory?.map((category, index) => {
            //   return (
            //     <div className="flex gap-x-3 border-b p-3">
            //       <p> {index + 1}.</p>
            //       <p className="capitalize"> {category.name}</p>
            //     </div>
            //   );
            // })
          )}
        </div>
        {/* <TextEditor /> */}
      </div>
    </div>
  );
};

export default PerformanceSetting;
