import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "../../../../../../components/HRM_components/Admin/settings/Card";
import {
  BreadCrumbs,
  TopTab,
} from "../../../../../../components/HRM_components";

const RecruitmentSetting = () => {
  const breadcrumbItems = ["Performance", "Goals"];
  const settings = [
    {
      route: `${"stages"}`,
      name: "Recruitment Stages",
      description: "Each stages of the recruitment process",
    },
    {
      route: `${"score-metric"}`,
      name: "Score Metrics",
      description: "Each stages of the recruitment process",
    },
    {
      route: `${"score-metric"}`,
      name: "Hiring Team",
      description: "Each stages of the recruitment process",
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
              <Card pages={pages} />
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default RecruitmentSetting;
