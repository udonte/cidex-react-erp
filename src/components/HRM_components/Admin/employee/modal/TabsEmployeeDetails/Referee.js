import React from 'react'

const Referee = () => {
  return (
    <div className="bg-[#F6F6F6] p-5 text-sm font-light">
    {/* Top List */}
    <div className="flex items-center justify-start gap-24 mb-8">
      <div className="flex flex-col w-20">
        <label className=" text-[#9B9B9B]">First Name</label>
        <span>George</span>
      </div>

      <div className="flex flex-col gap-3">
        <label className=" text-[#9B9B9B]">Last Name</label>
        <span>Adebisi</span>
      </div>

      <div className="flex flex-col gap-3">
        <label className=" text-[#9B9B9B]">Email</label>
        <span>Adedeji@gmal.com</span>
      </div>

      <div className="flex flex-col gap-3">
        <label className=" text-[#9B9B9B]">Phone  Number</label>
        <span>March 04, 2002</span>
      </div>
    </div>
    {/* Bottom List */}
    
    <div className="flex items-center justify-start gap-24">

      <div className="flex flex-col gap-3 w-24]">
        <label className="text-[#9B9B9B]">Address</label>
        <span>12, Fatai Rolling Dollar Street, Ikeja, Lagos</span>
      </div>
    </div>
    
  </div>
  )
}

export default Referee