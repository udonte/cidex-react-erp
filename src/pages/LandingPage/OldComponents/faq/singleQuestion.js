import React, {useState} from 'react';
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';

const SingleQuestion = ({title, info}) => {
  const [showInfo, setshowInfo] = useState(false)
  return (
    <article className="hrm__faq-question pt-4 border-t-2 border-gray-300 mb-4 lg:mb-8 w-full">
  <header className="flex justify-between items-center">
    <h4 className={`text-base lg:text-lg font-medium ${showInfo ? 'text-orange-500' : 'text-gray-900'}`}>
      {title}
    </h4>
    <button className="bg-transparent border-transparent cursor-pointer flex" onClick={() => setshowInfo(!showInfo)}>
      {showInfo ? (
        <AiOutlinePlusCircle color="rgba(197, 85, 20, 0.7)" size={30} />
      ) : (
        <AiOutlineMinusCircle color="rgba(197, 85, 20, 0.7)" size={30} />
      )}
    </button>
  </header>
  {showInfo && <p className="text-base lg:text-lg font-normal text-gray-600 text-left mt-2">{info}</p>}
</article>

  )
}

export default SingleQuestion