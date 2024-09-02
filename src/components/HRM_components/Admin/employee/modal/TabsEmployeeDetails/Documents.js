import React from 'react'
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const Documents = () => {
  return (
    <div>
    {/* Header */}
      <div className=" mt-5 py-5 text-sm font-normal  flex justify-between w-full items-center">
        <h1 className=" text-[#9B9B9B]">Document </h1>
      </div>

<div className="bg-[#F6F6F6] p-5 text-sm font-light">

  {/* Top List */}
 <div className="flex items-center justify-start mb-8 gap-20">
  <div className="flex flex-col gap-1 text-sm w-[109px] h-[144px] font-light">
    <div className=" bg-white h-[83px] flex justify-center items-center">
      <BsFileEarmarkPdfFill size="40"/>
    </div>
    <div className="flex flex-col justify-start p-3 bg-white gap-3">       
      <h2>My CV</h2>
      <span className="text-[#9B9B9B] text-xs">March 21,2024</span>
    
    </div>
  </div>
</div>
</div>
</div>
  )
}

export default Documents