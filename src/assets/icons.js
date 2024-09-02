import {FaBriefcase, FaLocationArrow, FaAddressCard} from 'react-icons/fa'
import {MdEmail, MdModeEditOutline} from 'react-icons/md'
import {FcManager} from 'react-icons/fc'
import {BsTelephoneFill} from 'react-icons/bs'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {AiFillPlusCircle} from 'react-icons/ai'

export const icons = {
title: <FaBriefcase size="20" />,
email: <MdEmail size="24" />,
manager : <FcManager size="20" />,
location : <FaLocationArrow size="20" />,
phone : <BsTelephoneFill size='20' />,
address: <FaAddressCard  size='20' />, 
edit: <MdModeEditOutline size='20' />,
edit2:<BiDotsHorizontalRounded  />,
plus:<AiFillPlusCircle size="20" />
}


export default icons