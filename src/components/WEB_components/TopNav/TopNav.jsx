import React from "react";
import { topNavLinks } from "../../../utils/navLinks"; 
import { Link } from "react-router-dom";
import TopNavItems from "./TopNavItems";
import Button from "../Button";
import { ROUTE_PATHS } from "../../../constants/routes.constants";

const TopNav = ({ navigate }) => {
  return (
    <div className="flex justify-around items-center px-16 sticky w-full h-[90px] shadow-lg">

      <div>
        <img
          className="h-12 w-14 mx-2"
          src={process.env.PUBLIC_URL + "/images/exceed_logo.png"}
          alt="logo"
        />
      </div>

      <div className="flex justify-evenly ">
        {topNavLinks.map((item) => (
          <TopNavItems key={item.id} {...item} navigate={navigate} />
        ))}
      </div>

      <div className="flex gap-x-6 items-center">
        <Link to={`${ROUTE_PATHS.PUBLIC.SIGN_UP}`}>
          <Button color="secondary">Get Started</Button>
        </Link>

        <Link to="/web/free-demo">
          <Button varient="orange">
            <p>Request Demo</p>
          </Button>
        </Link>
      </div>

    </div>
  );
};

export default TopNav;
