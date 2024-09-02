import { TbUserShield } from "react-icons/tb";
import { ROUTE_PATHS } from "../constants/routes.constants";
import { BiSolidDashboard } from "react-icons/bi";

export const employeeSideNavLink = [
  {
    icon: <BiSolidDashboard />,
    route: ROUTE_PATHS.PRIVATE.ONBOARDING,
    text: "Onboarding",
  },

  {
    text: "Dashboard",
    route: ROUTE_PATHS.PRIVATE.DASHBOARD,
    icon: <TbUserShield />,
  },
  {
    text: "Self Service",
    route: ROUTE_PATHS.PRIVATE.SELF_SERVICE,
    icon: <TbUserShield />,
  },
  {
    text: "Leave Tracker",
    route: ROUTE_PATHS.PRIVATE.LEAVE_TRACKER,
    icon: <TbUserShield />,
  },
  // {
  //   text: "Leave Management",
  //   subMenu: true,
  //   icon: <FaBriefcase />,
  //   subMenuLink: [
  //     {
  //       id: 1,
  //       route: ROUTE_PATHS.PRIVATE.JOB,
  //       text: "Job",
  //     },
  //   ],
  // },
];
