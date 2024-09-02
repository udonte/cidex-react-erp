import React from 'react';
import {AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import {BsFacebook, BsGithub} from 'react-icons/bs';

const Copyright = () => {
  return (
    <div className="hrm__footer-copyright bg-[#101828] flex flex-col lg:flex-row gap-4 items-center justify-between w-full md:py-16 md:px-24 lg:gap-y-4  py-16 px-8 ">
      <div className="hrm__footer-copyright-text">
        <p className="text-sm leading-none text-[#98A2B3]">© 2023 Gurugeeks. All rights reserved.</p>
      </div>
      <div className="hrm__footer-socials flex items-center justify-center gap-6">
        <AiOutlineTwitter color='rgba(152, 162, 179, 1)' size={24} />
        <AiFillLinkedin color='rgba(152, 162, 179, 1)' size={24} />
        <BsFacebook color='rgba(152, 162, 179, 1)' size={24} />
        <BsGithub color='rgba(152, 162, 179, 1)' size={24} />
      </div>
    </div>
  )
}

export default Copyright