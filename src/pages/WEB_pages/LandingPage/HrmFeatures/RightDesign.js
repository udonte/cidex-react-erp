import React from "react";

import Button from "../../../../components/WEB_components/Button";

const RightDesign = ({ header, text, image, alt }) => {
  return (
    <div className=" mt-20 flex gap-6 ">
      <div className="w-[60%]">
        <img src={image} alt={alt} />
      </div>

      <div className=" flex items-center w-[40%]">
        <div className="flex  flex-col  text-left gap-5">
          <h1 className="text-4xl font-semibold">{header}</h1>
          <p className="font-light text-[16px]">{text}</p>
          <div>
            <Button color="secondary" size="md">
              Request Demo
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightDesign;
