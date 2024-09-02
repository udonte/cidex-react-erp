import React from "react";
import MiddleModalContainer from "../MiddleModalContainer";
import CustomInput from "./_common/CustomInput";
import CustomDropdown from "./_common/CustomDropDown";
import Button from "./_common/Button/Button";

const KYCGeneralInformation = () => {
  return (
    <MiddleModalContainer title="General Information">
      <main className="px-8 space-y-5 pb-6">
        <p className="w-[70%] pt-6">
          Kindly provide the answers to these questions before you proceed.
        </p>
        <CustomInput label={"Job Title"} />
        <CustomDropdown label={"Industry"} />
        <CustomInput label={"Where did you hear about us?"} />
        <Button
          className={"w-full text-center flex items-center justify-center"}
          size={"lg"}
        >
          Submit
        </Button>
      </main>
    </MiddleModalContainer>
  );
};

export default KYCGeneralInformation;
