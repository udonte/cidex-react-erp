import { MdSpaceDashboard, MdManageAccounts } from "react-icons/md";
import {
  BsArrowLeftSquare,
  BsFileBarGraph,
  BsPeopleFill,
} from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { AiFillDollarCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { GiCutDiamond } from "react-icons/gi";

export const icons = {
  // Sidebar icons
  pointer: <BsArrowLeftSquare size={24} />,
  dashboard: <MdSpaceDashboard size={24} />,
  customer: <RiContactsFill size={24} />,
  leadMgt: <MdManageAccounts size={24} />,
  taskMgt: <CiClock2 size={24} />,
  sales: <AiFillDollarCircle size={24} />,
  customerMgt: <BsPeopleFill size={24} />,
  reports: <BsFileBarGraph size={24} />,
  subs: <GiCutDiamond size={24} />,
  settings: <FiSettings size={24} />,
  inventory: <MdOutlineInventory size={24} />,
};
