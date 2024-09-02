import React, { useRef } from "react";
import MiddleModalContainer from "../../../../_common/MiddleModalContainer/MiddleModalContainer";
import CustomInput from "../../../../_common/CustomInput";
import Button from "../../../../_common/Button/Button";
import { toast } from "react-toastify";
import { encryptId } from "../../../../../../utils/helperFunctions/crypto.utils";

const Joblink = ({ id }) => {
  const inputRef = useRef(null);
  const currentUrl = window.location.href;
  const editedUrl = currentUrl.replace(
    "/jobs",
    `/recruitment-form/${encryptId(id)}`
  );

  const copyToClipboard = async () => {
    try {
      if (inputRef.current) {
        inputRef.current.select();
        await navigator.clipboard.writeText(editedUrl);
        toast.success("Link copied");
      }
    } catch (error) {
      console.error("Unable to copy to clipboard", error);
    }
  };
  return (
    <MiddleModalContainer title="Copy job link">
      <div className="p-3 w-[400px]">
        <div cl>
          <CustomInput
            disabled={true}
            type={"text"}
            inputRef={inputRef}
            value={editedUrl}
          />
          <div className="flex items-center my-2 justify-end gap-x-4">
            <Button color={"secondary"}>Cancel</Button>
            <Button onClick={copyToClipboard} color={"Primary"}>
              Copy
            </Button>
          </div>
        </div>
      </div>
    </MiddleModalContainer>
  );
};

export default Joblink;
