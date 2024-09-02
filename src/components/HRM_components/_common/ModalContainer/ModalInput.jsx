import React from 'react'

const ModalInput = ({labelName, placeholder}) => {
  placeholder = `Enter ${labelName}`
  return (
    <div>
      <label>{labelName}</label>
      <input
        className=" px-4 py-2 h-[56px] w-full border-2 rounded bg-gurugeeks-gray-700"
        type="text"
        placeholder={placeholder}
      />
  </div>
  )
}

export default ModalInput