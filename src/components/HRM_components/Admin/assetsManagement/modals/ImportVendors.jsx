import React, { useState } from 'react'
import { FaFile } from 'react-icons/fa';
import MiddleModalContainer from '../../../_common/MiddleModalContainer/MiddleModalContainer';

 
 

const ImportVendors = () => {
  const [page, setpage] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
  };

  const pageOutput = () => {
    if(page === 0){
      return (
        <div className='border-2 border-b-gray-200 h-[70%]'>
          <h1 className='bg-gray-100 px-4 py-3 font-bold text-gray-500'>CSV Contacts Import</h1>

          <div className='px-4 py-3'>
            <form>
              <p className='text-gray-500 mb-2'>Import upto 1000 vendors from CSV file</p>
              <label className="cursor-pointer flex items-center space-x-2 border border-gray-300 rounded-md w-fit ">
                <div className='flex items-center border-r-2 border-gray-300 p-4'>
                  <FaFile className=" border-gray-500 h-full" />
                </div>
                <span className="text-gray-500 px-2">Upload CSV File</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".csv,.pdf,.doc,.docx,.txt,image/*" // Accept CSV, PDF, Word, Text, and image files
                />
              </label>
            </form>
          </div>
        </div>
      )
    }
    else{
      return (
        <div className='border-2 border-b-gray-200 h-[70%]'>
          <h1 className='bg-gray-100 px-4 py-3 font-bold text-gray-500'>Contacts Import</h1>

          <div className='px-4 py-3'>
            <form>
              <p className='text-gray-500 mb-2'>Import vendors from .xls, etc.</p>
              <label className="cursor-pointer flex items-center space-x-2 border border-gray-300 rounded-md w-fit ">
                <div className='flex items-center border-r-2 border-gray-300 p-4'>
                  <FaFile className=" border-gray-500 h-full" />
                </div>
                <span className="text-gray-500 px-2">Upload File</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt,image/*" // Accept CSV, PDF, Word, Text, and image files
                />
              </label>
            </form>
          </div>
        </div>
      )
    }
  }

  return (
    <MiddleModalContainer>
      <div className='bg-white px-8 py-4 w-[850px] h-[620px]'>
        <div className='flex items-center gap-x-8 border-b-2 border-b-gray-200 mb-8 '>
          <button 
            onClick={() => {
              setpage(0)
            }}
            className={`py-2 ${page === 0 ? 'border-b-4 border-gurugeeks-orange-700' : '' }`}
           >Import From CSV</button>
           <button
            onClick={() => {
              setpage(1);
            }}
            className={`py-2 ${page !== 0 ? 'border-b-4 border-gurugeeks-orange-700' : '' }`}
           >
            Import From Others
           </button>
        </div>

      <div className="h-full">{pageOutput()}</div>
      </div>
    </MiddleModalContainer>
  )
}

export default ImportVendors