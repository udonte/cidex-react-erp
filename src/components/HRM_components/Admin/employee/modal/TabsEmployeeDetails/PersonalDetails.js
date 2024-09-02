import React,{useState} from 'react'
import { MdModeEdit } from "react-icons/md";

const PersonalDetails = () => {

    const [editable, setEditable] = useState(false);

  return (
    <div>
    {/* Header */}
    <div className=" mt-5 py-5 text-sm font-normal  flex justify-between w-full items-center">
      <h1 className=" text-[#9B9B9B]">Personal Details </h1>
      { editable ? (
          <button  onClick={() => setEditable(false)} className=" flex items-center gap-1 text-black  bg-[#F6F6F6] p-2 rounded-md hover:cursor-pointer">
          Save Changes
        </button>
      ) : 
      (
        <button  onClick={() => setEditable(true)} className=" flex items-center gap-1 text-gurugeeks-orange-700 hover:cursor-pointer">
        <MdModeEdit />
        <p>Edit</p>
      </button>
      )
      }

    </div>

    {/* Box Content */}

    {editable ? ( <>
{/* Form Edit */}

  <div className="bg-[#F6F6F6] p-5 text-sm font-light">
  <form>
    {/* Top List */}
    <div className="flex items-center justify-start gap-10 mb-8">
      <div>
        <label
         htmlFor="firstname" 
        className=" mb-3 text-[#9B9B9B] ">
          First Name
        </label>
        <input className="w-36 border-0 border-b-2 border-[#9B9B9B] bg-[#F6F6F6] focus:outline-none focus:border-[#9B9B9B]" type="text" name="firstname" placeholder="George"/>
      </div>

      <div>
        <label htmlFor="lastname" className="mb-3 text-[#9B9B9B]">
          Last Name
        </label>
        <input className="w-36 border-0 border-b-2 border-[#9B9B9B] bg-[#F6F6F6] focus:outline-none focus:border-[#9B9B9B]" type="text" name="lastname" placeholder="Adebisi" />
      </div>

      <div>
        <label className="mb-3 text-[#9B9B9B]">Gender</label>
        <input className="w-36 border-0 border-b-2 border-[#9B9B9B] bg-[#F6F6F6] focus:outline-none focus:border-[#9B9B9B]" type="text" name="gender" placeholder="Male" />
      </div>

      <div>
        <label className="mb-3 text-[#9B9B9B]">Date of Birth</label>
        <input className="w-36 border-0 border-b-2 border-[#9B9B9B] bg-[#F6F6F6] focus:outline-none focus:border-[#9B9B9B]" type="text" name="DOB" placeholder='March 12, 1990' />
      </div>
    </div>

    {/* Bottom List */}

    <div className="flex items-center justify-start gap-10 mb-8">
      <div>
        <label
         htmlFor="firstname" 
        className=" mb-3 text-[#9B9B9B] ">
         Department
        </label>
        <input className="w-36 border-0 border-b-2 border-[#9B9B9B] bg-[#F6F6F6] focus:outline-none focus:border-[#9B9B9B]" type="text" name="firstname" placeholder='Design' />
      </div>

      <div>
        <label htmlFor="lastname" className="mb-3 text-[#9B9B9B]">
          Designation
        </label>
        <input className="w-36 border-0 border-b-2 border-[#9B9B9B] bg-[#F6F6F6] focus:outline-none focus:border-[#9B9B9B]" type="text" name="lastname" placeholder='Team Lead' />
      </div>

      <div>
        <label className="mb-3 text-[#9B9B9B]">Address</label>
        <input className="w-36 border-0 border-b-2 border-[#9B9B9B] bg-[#F6F6F6] focus:outline-none focus:border-[#9B9B9B]" type="text" name="gender" placeholder='12, Fatai Rolling Dollar Street, Ikeja, Lagos' />
      </div>
    </div>
    </form>
  </div>

  </>
    ) 
    :
    ( 
    <> 
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
            <label className=" text-[#9B9B9B]">Gender</label>
            <span>Male</span>
          </div>

          <div className="flex flex-col gap-3">
            <label className=" text-[#9B9B9B]">Date of Birth</label>
            <span>March 04, 2002</span>
          </div>
        </div>
        {/* Bottom List */}
        
        <div className="flex items-center justify-start gap-24">
        <div className="flex flex-col gap-3 w-20]">
            <label className=" text-[#9B9B9B]">Department</label>
            <span className="text-[#252525]">Design</span>
          </div>

          <div className="flex flex-col gap-3 w-20]">
            <label className=" text-[#9B9B9B]">Designation</label>
            <span>Team Lead</span>
          </div>

          <div className="flex flex-col gap-3 w-24]">
            <label className="text-[#9B9B9B]">Address</label>
            <span>12, Fatai Rolling Dollar Street, Ikeja, Lagos</span>
          </div>
        </div>
        
      </div>
    </>
    )}

</div>
  )
}

export default PersonalDetails