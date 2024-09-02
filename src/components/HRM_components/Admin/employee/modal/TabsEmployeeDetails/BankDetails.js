import React from 'react'

const BankDetails = () => {
  return (
    <div>
    {/* Header */}
      <div className=" mt-5 py-5 text-sm font-normal  flex justify-between w-full items-center">
      <h1 className=" text-[#9B9B9B]">Bank Details</h1>
     
    </div>

  <div className="bg-[#F6F6F6] p-5 text-sm font-light">
    {/* Top List */}
<div className="flex items-center justify-between mb-8">
  <div className="flex flex-col gap-3">
    <label className=" text-[#9B9B9B]">Bank Name</label>
    <span>Kuda</span>
  </div>

  <div className="flex flex-col gap-3">
    <label className=" text-[#9B9B9B]">Account Number</label>
    <span>01212342</span>
  </div>

  <div className="flex flex-col gap-3">
    <label className=" text-[#9B9B9B]">BVN</label>
    <span>2232231343</span>
  </div>

  <div className="flex flex-col gap-3">
    <label className=" text-[#9B9B9B]">Date of Birth</label>
    <span>March 04, 2002</span>
  </div>
</div>


</div>

  </div>
  )
}

export default BankDetails