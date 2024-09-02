import {
  FaUser,
  FaBriefcase,
  FaBusAlt,
  FaCommentDollar,
  FaHandsHelping,
} from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { BsBuildingsFill, BsFillBarChartFill } from "react-icons/bs";
import {
  HiAdjustments,
  HiCurrencyDollar,
  HiOutlineUserAdd,
  HiTicket,
  HiUsers,
} from "react-icons/hi";
import {
  TbAlarmPlusFilled,
  TbChartPieFilled,
  TbUserShield,
} from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { MdInsertChart, MdSpaceDashboard } from "react-icons/md";
import { TbTicket } from "react-icons/tb";
import { ROUTE_PATHS } from "../constants/routes.constants";

export const topNavLinks = [
  {
    id: `/web/home`,
    text: "Home",
    section: "home",
  },

  {
    id: `/web/home`,
    text: "About",
    section: "about-us",
  },

  {
    id: `/web/home`,
    text: "Features",
    section: "features",
  },

  {
    id: `/web/home`,
    text: "Reviews",
    section: "reviews",
  },
  {
    id: `/web/home`,
    text: "Pricing",
    section: `pricing`,
  },
  {
    id: `/web/home`,
    text: "Contact",
    section: `contact`,
  },
  {
    id: `/web/home`,
    text: "FAQ",
    section: "faq",
  },
  {
    id: `/web/home`,
    text: "Support",
    route: "/web/support",
  },

  //   {
  //      text: "Features",
  //     subMenu: true,
  //     subMenuLink: [
  //       [
  //         {
  //           title: "HR PRODUCTS",
  //           id: ` ${ROUTE_PATHS.PUBLIC.PRICING}1`,
  //           text: "HR Cloud Overview",
  //           route: `${ROUTE_PATHS.PUBLIC.HOME}`,
  //         },
  //         {
  //           id: ` ${ROUTE_PATHS.PUBLIC.HOME}3`,
  //           text: "Global Payroll",
  //           route: `${ROUTE_PATHS.PUBLIC.HOME}`,
  //         },
  //       ],
  //       [
  //         {
  //           title: "CRM PRODUCTS",
  //           // id: ` ${ROUTE_PATHS.PUBLIC.HOME}4`,
  //           // text: "Ticket Management",
  //           // route: `${ROUTE_PATHS.PUBLIC.HOME}`,
  //         },
  //         // {
  //         //   id: ` ${ROUTE_PATHS.PUBLIC.HOME}6`,
  //         //   text: "Lead Generation",
  //         //   route: `${ROUTE_PATHS.PUBLIC.HOME}`,
  //         // },
  //         {
  //           id: ` ${ROUTE_PATHS.PUBLIC.CUSTOMER_INFO}6`,
  //           text: "Customer Info Management",
  //           route: `${ROUTE_PATHS.PUBLIC.CUSTOMER_INFO}`,
  //         },
  //         {
  //           id: ` ${ROUTE_PATHS.PUBLIC.SALES_PROCESS_MANAGEMENT}6`,
  //           text: "Sales Process Management",
  //           route: `${ROUTE_PATHS.PUBLIC.SALES_PROCESS_MANAGEMENT}`,
  //         },
  //         {
  //           id: ` ${ROUTE_PATHS.PUBLIC.HIRING}6`,
  //           text: "Hiring and Onboarding",
  //           route: `${ROUTE_PATHS.PUBLIC.HIRING}`,
  //         },
  //         {
  //           id: ` ${ROUTE_PATHS.PUBLIC.EXPERIENCE_AND_PERFORMANCE}6`,
  //           text: "Employee Experience & Performance",
  //           route: `${ROUTE_PATHS.PUBLIC.EXPERIENCE_AND_PERFORMANCE}`,
  //         },
  //       ],
  //     ],
  //   },
  //   {
  //     id: ` ${ROUTE_PATHS.PUBLIC.PRICING}`,
  //     text: "Pricing",
  //     tag: true,
  //   },
  //   {
  //     id: ` ${ROUTE_PATHS.PUBLIC.HOME}`,
  //     text: "About us",
  //     subMenu: true,
  //     subMenuLink: [
  //       [
  //         {
  //           title: "About Exceed",
  //           id: ` ${ROUTE_PATHS.PUBLIC.HOME}`,
  //           text: "Why we are different",
  //           route: `${ROUTE_PATHS.PUBLIC.HOME}`,
  //         },
  //         {
  //           id: ` ${ROUTE_PATHS.PUBLIC.HOME}`,
  //           text: "Home",
  //           route: `${ROUTE_PATHS.PUBLIC.HOME}`,
  //         },
  //       ],
  //     ],
  //   },
];

export const sideNavLink = [
  {
    icon: <MdSpaceDashboard />,
    route: ROUTE_PATHS.PRIVATE.DASHBOARD,
    text: "Dashboard",
  },
  {
    text: "Employee",
    route: ROUTE_PATHS.PRIVATE.EMPLOYEE,
    icon: <FaUser />,
  },
  {
    text: "Recruitment",
    icon: <FaBriefcase />,
    subMenu: true,
    subMenuLink: [
      {
        route: ROUTE_PATHS.PRIVATE.RECRUITMENT.JOB,
        text: "Jobs",
      },
      {
        route: ROUTE_PATHS.PRIVATE.RECRUITMENT.APPLICANTS,
        text: "Job Applicants",
      },
      {
        route: ROUTE_PATHS.PRIVATE.RECRUITMENT.TALENT_POOL,
        text: "Talent Pool",
      },
    ],
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
  {
    text: "Asset",
    subMenu: true,
    icon: <TbChartPieFilled />,
    subMenuLink: [
      {
        route: ROUTE_PATHS.PRIVATE.ASSET_MANAGEMENT.ASSET,
        text: "Asset",
      },
      {
        id: 2,
        route: ROUTE_PATHS.PRIVATE.ASSET_MANAGEMENT.VENDORS,
        text: "Vendors",
      },
    ],
  },
  {
    text: "Organization Mgt",
    subMenu: true,
    icon: <BsBuildingsFill />,
    subMenuLink: [
      {
        route: ROUTE_PATHS.PRIVATE.ORGANIZATION_MANAGEMENT.DEPARTMENT,
        text: "Department",
      },
      {
        route: ROUTE_PATHS.PRIVATE.ORGANIZATION_MANAGEMENT.DESIGNATION,
        text: "Designation",
      },
      {
        route: ROUTE_PATHS.PRIVATE.ORGANIZATION_MANAGEMENT.CHART,
        text: "Organization Chart",
      },
    ],
  },
  {
    text: "Helpdesk",
    route: ROUTE_PATHS.PRIVATE.HELPDESK.HELPDESK,
    icon: <FaHandsHelping />,
  },
  {
    text: "Leave Management",
    subMenu: true,
    icon: <FaBusAlt />,
    subMenuLink: [
      {
        id: 1,
        route: ROUTE_PATHS.PRIVATE.LEAVE_MANAGEMENT.MANAGE_LEAVE,
        text: "Manage Leave",
      },
      {
        id: 2,
        route: ROUTE_PATHS.PRIVATE.LEAVE_MANAGEMENT.LEAVE_TYPE,
        text: "Leave Types",
      },
    ],
  },
  {
    text: "Timesheet Management",
    subMenu: true,
    icon: <TbAlarmPlusFilled />,
    subMenuLink: [
      {
        route: ROUTE_PATHS.PRIVATE.TIMESHEET.PROJECT,
        text: "Project",
      },
      {
        route: ROUTE_PATHS.PRIVATE.TIMESHEET.MY_TIMESHEET,
        text: "My Timesheet",
      },
      {
        route: ROUTE_PATHS.PRIVATE.TIMESHEET.EMPLOYEE_TIMESHEET,
        text: "Employee Timesheet",
      },
    ],
  },
  {
    text: "Performance Management",
    subMenu: true,
    icon: <MdInsertChart />,
    subMenuLink: [
      {
        route: ROUTE_PATHS.PRIVATE.PERFORMNACE.MANDATORY_TRAINING,
        text: "Mandatory Training",
      },
      {
        id: 2,
        route: ROUTE_PATHS.PRIVATE.PERFORMNACE.LEARNING,
        text: "Learning and Development",
      },
      {
        route: ROUTE_PATHS.PRIVATE.PERFORMNACE.GOALS,
        text: "Goals",
      },
      {
        icon: <FiSettings />,
        id: 3,
        route: ROUTE_PATHS.PRIVATE.PERFORMNACE.SETTINGS,
        text: "Performance settings",
      },
    ],
  },

  {
    text: "Benefits Management",
    subMenu: true,
    icon: <FaCommentDollar />,
    subMenuLink: [
      {
        id: 1,
        route: ROUTE_PATHS.PRIVATE.BENEFIT_MANAGEMENT.OVERVIEW,
        text: "Overview",
      },

      {
        id: 2,
        route: ROUTE_PATHS.PRIVATE.BENEFIT_MANAGEMENT.PAYRUNS,
        text: "Pay Runs",
      },
      {
        id: 3,
        route: ROUTE_PATHS.PRIVATE.BENEFIT_MANAGEMENT.SALARY,
        text: "Salary Components",
      },
    ],
  },
];

export const CRMSideNavLink = [
  {
    id: 1,
    icon: <BiSolidDashboard />,
    route: ROUTE_PATHS.PRIVATE.DASHBOARD,
    text: "Dashboard",
  },
  {
    text: "Customer",
    icon: <HiUsers />,
    subMenu: true,
    subMenuLink: [
      {
        id: 1,
        route: ROUTE_PATHS.PRIVATE.CUSTOMER.CONTACT,
        text: "Contacts",
      },
      {
        id: 2,
        route: ROUTE_PATHS.PRIVATE.CUSTOMER.CUSTOM_CONTACT_LIST,
        text: "Custom Contact List",
      },
    ],
  },
  {
    text: "Lead Management",
    icon: <HiOutlineUserAdd />,
    subMenu: true,
    subMenuLink: [
      {
        id: 1,
        route: ROUTE_PATHS.PRIVATE.LEAD_MGT.LEADS,
        text: "Leads",
      },
      {
        id: 1,
        route: ROUTE_PATHS.PRIVATE.LEAD_MGT.LEAD_LIST,
        text: "Lead List",
      },
    ],
  },
  {
    text: "Customer Service",
    icon: <HiTicket />,
    id: 1,
    route: ROUTE_PATHS.PRIVATE.CUSTOMER_SERVICE.TICKET,
  },
  {
    text: "Inventory",
    icon: <HiTicket />,
    id: 1,
    route: ROUTE_PATHS.PRIVATE.INVENTORY,
  },
  {
    text: "Sales Management",
    icon: <HiCurrencyDollar />,
    subMenu: true,
    subMenuLink: [
      {
        id: 1,
        route: ROUTE_PATHS.PRIVATE.SALES.OVERVIEW,
        text: "Overview",
      },
      {
        id: 1,
        route: ROUTE_PATHS.PRIVATE.SALES.SALES_INVOICE,
        text: "Sales Invoice",
      },
    ],
  },
];

export const AdminSideNav = [
  {
    text: "Tenants",
    icon: <HiUsers />,
    subMenu: true,
    subMenuLink: [
      {
        id: 1,
        route: ROUTE_PATHS.PRIVATE.ADMIN.TENANTS_PAGE.TENANTS,
        text: "Tenants",
      },
      {
        id: 2,
        route: ROUTE_PATHS.PRIVATE.ADMIN.TENANTS_PAGE.PAYMENTS,
        text: "Payments",
      },
    ],
  },
  {
    id: 1,
    route: ROUTE_PATHS.PRIVATE.ADMIN.PROMO_CODE,
    text: "Promo Code",
    icon: <HiCurrencyDollar />,
  },
  {
    id: 1,
    route: ROUTE_PATHS.PRIVATE.ADMIN.ADMIN_SETTINGS,
    text: "Settings",
    icon: <HiAdjustments />,
  },
];

export const employeeSideNavLink = [
  // {
  //   icon: <BiSolidDashboard />,
  //   route: ROUTE_PATHS.PRIVATE.ONBOARDING,
  //   text: "Onboarding",

  // },

  // {
  //   text: "Dashboard",
  //   route: ROUTE_PATHS.PRIVATE.DASHBOARD,
  //   icon: <TbUserShield />,
  // },
  // {
  //   text: "Self Service",
  //   route: ROUTE_PATHS.PRIVATE.SELF_SERVICE,
  //   icon: <TbUserShield />,
  // },

  // {
  //   text: "Employee",
  //   route: ROUTE_PATHS.PRIVATE.EMPLOYEE,
  //   icon: <FaUserAlt />,
  // },
  {
    text: "Recruitment",
    icon: <HiUsers />,
    subMenu: true,
    subMenuLink: [
      {
        route: ROUTE_PATHS.PRIVATE.RECRUITMENT.JOB,
        text: "Jobs",
      },
      {
        route: ROUTE_PATHS.PRIVATE.RECRUITMENT.APPLICANTS,
        text: "Job Applicants",
      },
      {
        route: ROUTE_PATHS.PRIVATE.RECRUITMENT.TALENT_POOL,
        text: "Talent Pool",
      },
    ],
    module_name: "Recruitment",
  },

  // {
  //   text: "Asset",
  //   subMenu: true,
  //   icon: <TbAsset />,
  //   subMenuLink: [
  //     {
  //       route: ROUTE_PATHS.PRIVATE.ASSET_MANAGEMENT.ASSET,
  //       text: "Asset",
  //     },
  //     {
  //       id: 2,
  //       route: ROUTE_PATHS.PRIVATE.ASSET_MANAGEMENT.VENDORS,
  //       text: "Vendors",
  //     },
  //   ],
  // },
  // {
  //   text: "Organization Mgt",
  //   subMenu: true,
  //   icon: <FaCodeBranch />,
  //   subMenuLink: [
  //     {
  //       route: ROUTE_PATHS.PRIVATE.ORGANIZATION_MANAGEMENT.DEPARTMENT,
  //       text: "Department",
  //     },
  //     {
  //       route: ROUTE_PATHS.PRIVATE.ORGANIZATION_MANAGEMENT.DESIGNATION,
  //       text: "Designation",
  //     },
  //     {
  //       route: ROUTE_PATHS.PRIVATE.ORGANIZATION_MANAGEMENT.CHART,
  //       text: "Organization Chart",
  //     },
  //   ],
  // },
  {
    text: "Helpdesk",
    route: ROUTE_PATHS.PRIVATE.HELPDESK.HELPDESK,
    icon: <TbTicket />,
    module_name: "Helpdesk",
  },
  // {
  //   text: "Leave Management",
  //   subMenu: true,
  //   icon: <MdOutlineFlightTakeoff />,
  //   subMenuLink: [
  //     {
  //       id: 1,
  //       route: ROUTE_PATHS.PRIVATE.LEAVE_MANAGEMENT.MANAGE_LEAVE,
  //       text: "Manage Leave",
  //     },
  //     {
  //       id: 2,
  //       route: ROUTE_PATHS.PRIVATE.LEAVE_MANAGEMENT.LEAVE_TYPE,
  //       text: "Leave Types",
  //     },
  //   ],
  // },
  {
    text: "Leave Tracker",
    route: ROUTE_PATHS.PRIVATE.LEAVE_TRACKER,
    icon: <TbUserShield />,
    module_name: "name",
  },
  // {
  //   text: "Timesheet Management",
  //   subMenu: true,
  //   icon: <FaClock />,
  //   subMenuLink: [
  //     {
  //       route: ROUTE_PATHS.PRIVATE.TIMESHEET.PROJECT,
  //       text: "Project",
  //     },
  //     {
  //       route: ROUTE_PATHS.PRIVATE.TIMESHEET.MY_TIMESHEET,
  //       text: "My Timesheet",
  //     },
  //     {
  //       route: ROUTE_PATHS.PRIVATE.TIMESHEET.EMPLOYEE_TIMESHEET,
  //       text: "Employee Timesheet",
  //     },
  //   ],
  // },
  {
    text: "Performance Management",
    subMenu: true,
    icon: <BsFillBarChartFill />,
    subMenuLink: [
      {
        route: ROUTE_PATHS.PRIVATE.PERFORMNACE.MANDATORY_TRAINING,
        text: "Mandatory Training",
      },
      {
        id: 2,
        route: ROUTE_PATHS.PRIVATE.PERFORMNACE.LEARNING,
        text: "Learning and Development",
      },
      {
        route: ROUTE_PATHS.PRIVATE.PERFORMNACE.GOALS,
        text: "Goals",
      },
    ],
    module_name: "name",
  },

  // {
  //   text: "Benefits Management",
  //   subMenu: true,
  //   icon: <BiMoneyWithdraw />,
  //   subMenuLink: [
  //     {
  //       id: 1,
  //       route: ROUTE_PATHS.PRIVATE.BENEFIT_MANAGEMENT.OVERVIEW,
  //       text: "Overview",
  //     },

  //     {
  //       id: 2,
  //       route: ROUTE_PATHS.PRIVATE.BENEFIT_MANAGEMENT.PAYRUNS,
  //       text: "Pay Runs",
  //     },
  //     {
  //       id: 3,
  //       route: ROUTE_PATHS.PRIVATE.BENEFIT_MANAGEMENT.SALARY,
  //       text: "Salary Components",
  //     },
  //   ],
  // },
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
