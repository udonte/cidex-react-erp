import React from "react";
import MiddleModalContainer from "../../common/MiddleModalContainer";
import Button from "../../common/Button/Button";

const RemoveContactFromList = () => {
  return (
    <div>
      <MiddleModalContainer title="Remove Contact">
        <div className="bg-white px-8 py-4">
          <div className="flex flex-col items-start justify-center gap-4">
            <p>Are you sure you want to remove this contact from list?</p>
            <div className="flex items-center gap-4">
              <Button color={"secondary"} size={"lg"}>
                Cancel
              </Button>
              <Button className={"secondary"} size={"lg"} color={"red"}>
                Remove from list
              </Button>
            </div>
          </div>
        </div>
      </MiddleModalContainer>
    </div>
  );
};

export default RemoveContactFromList;
