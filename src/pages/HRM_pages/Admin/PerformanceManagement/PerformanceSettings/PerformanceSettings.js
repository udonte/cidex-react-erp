import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../../constants/routes.constants";
import { BreadCrumbs, TopTab } from "../../../../../components/HRM_components";
import Card from "../../../../../components/HRM_components/Admin/settings/Card";

const PerformanceSettings = () => {
  const breadcrumbItems = ["Performance", "Goals"];
  const settings = [
    {
      route: `${"kpi"}`,
    },
  ];

  return (
    <div>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />

      <TopTab
        leftComponent={<h1 className="text-xl font-semibold">Settings</h1>}
      />

      <main>
        {settings.map((pages, index) => (
          <div key={index}>
            <Link to={pages.route}>
              <Card />
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default PerformanceSettings;


