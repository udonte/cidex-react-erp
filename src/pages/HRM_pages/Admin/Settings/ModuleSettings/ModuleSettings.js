import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../../constants/routes.constants";

const ModuleSettings = () => {
  const navigate = useNavigate();
  const modulePages = [
    {
      title: "Recruitment",
      description: "Interview stages",
      link: ROUTE_PATHS.PRIVATE.SETTINGS.MODULE_SETTINGS.RECRUITMENT,
    },
    {
      title: "Performance Management",
      description: "Interview stages",
      link: ROUTE_PATHS.PRIVATE.SETTINGS.MODULE_SETTINGS.PERFORMANCE_MGT,
    },
    {
      title: "Organization Management",
      description: "Interview stages",
      link: ROUTE_PATHS.PRIVATE.SETTINGS.MODULE_SETTINGS
        .ORGANIZATION_MANAGEMENT,
    },
    {
      title: "Leave Management",
      description: "Setup Leave Approval",
      link: ROUTE_PATHS.PRIVATE.SETTINGS.MODULE_SETTINGS.LEAVE_MANAGEMENT,
    },
    {
      title: "Helpdesk",
      description: "Interview stages",
      link: ROUTE_PATHS.PRIVATE.SETTINGS.MODULE_SETTINGS.HELPDESK,
    },
    {
      title: "Asset Inventory",
      description: "Interview stages",
      link: ROUTE_PATHS.PRIVATE.SETTINGS.MODULE_SETTINGS.ASSET_MANAGEMENT,
    },
  ];

  return (
    <div className="py-4 px-2">
      <div className="flex flex-col justify-start gap-4 w-11/12">
        {modulePages.map((page) => {
          return (
            <div
              onClick={() => navigate(`/HRM/settings/${page.link}`)}
              className="flex px-6 hover:bg-slate-50 items-center justify-between  bg-white"
            >
              <div className="h- my-6">
                <p className="text-xl font-bold">{page.title}</p>
                <p>{page.description}</p>
              </div>
              <FaChevronRight className="cursor-pointer" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModuleSettings;
