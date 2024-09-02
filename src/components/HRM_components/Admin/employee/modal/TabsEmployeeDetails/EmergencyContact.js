import React from 'react'

const EmergencyContact = () => {
  return (
    <div>
    <div>
      {/* Header */}
        <div className=" mt-5 py-5 text-sm font-normal  flex justify-between w-full items-center">
          <h1 className=" text-[#9B9B9B]">Emergency Contact</h1>
        </div>

  <div className="bg-[#F6F6F6] p-5 text-sm font-light">

    {/* Top List */}
 <div className="flex items-center justify-start mb-8 gap-20">
    <div className="flex flex-col gap-3">
      <label className=" text-[#9B9B9B]">First Name</label>
      <span>Gbolahan</span>
    </div>

  <div className="flex flex-col gap-3">
    <label className=" text-[#9B9B9B]">Last Name</label>
    <span>Adedeji</span>
  </div>

  <div className="flex flex-col gap-3">
    <label className=" text-[#9B9B9B]">Email</label>
    <span>Adedejigeoge@gmail.com</span>
  </div>

    <div className="flex flex-col gap-3">
      <label className=" text-[#9B9B9B]">Phone Number</label>
      <span>08121663373</span>
      </div>
  </div>

  {/* Bottom List */}

  <div className="flex items-center justify-start gap-20">

  <div className="flex flex-col gap-3 ">
    <label className=" text-[#9B9B9B]">Address</label>
    <span>12, Orelope Street, Egbeda Lagos</span>
  </div>

  </div>
  </div>
</div>

</div>
  )
}

export default EmergencyContact