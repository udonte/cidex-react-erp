import React from "react";
import Button from "../../../../components/WEB_components/Button";
import Questions from "../../../../assets/landingPage/Questions.png";
import Bg from "../../../../assets/landingPage/bg-contact.png";

import { Link } from "react-router-dom";


const GetInTouch = () => {
  return (
    <section className="px-20 my-20"  >
      <div className="flex rounded-lg bg-cover " style={{backgroundImage: `url(${Bg})` }} >
        <div className="w-full text-white ">
          <div className="flex flex-col gap-1 p-16  ">
            <h1 className="text-lg font-bold">
              Do you still have any question?
            </h1>
            <p className="text-sm font-light">
              Contact our support team to get answer
            </p>
            {/* Button section */}
            <div className="flex items-center mt-3 gap-5">
              <Link to="/web/contact">
                <Button size="lg"> Get in touch </Button>
              </Link>
              <Button color="secondary" size="lg">
                Request Demos
              </Button>
            </div>
          </div>
        </div>

        <div
          className="w-full bg-cover opacity-70"
          style={{ backgroundImage: `url(${Questions})` }}></div>
      </div>
    </section>
  );
};

export default GetInTouch;
