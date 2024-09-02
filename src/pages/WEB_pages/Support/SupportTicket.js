import React from "react";
import Footer from "../LandingPage/Footer/Footer";
import Faq from "../LandingPage/Faq/Faq";
import { Button, CustomInput } from "../../../components/HRM_components";

const SupportTicket = () => {
  return (
    <div>
      <img
        className="mt-3"
        src={process.env.PUBLIC_URL + "/images/support_ticket.png"}
        alt="companySvgLogo"
      />
      <main className="flex items-center justify-center py-[90px]">
        <form className="w-[500px] border-2 rounded p-6 ">
          <div className="space-y-3 mb-6">
            <CustomInput label={"Name"} />
            <CustomInput label={"Email Address"} />
            <CustomInput label={"Subject"} />
            <CustomInput label={"Message"} />
            <CustomInput label={"Add image / Document"} />
          </div>
          <Button className={"w-full"}>Submit</Button>
        </form>
      </main>
      <Faq />
      <Footer />
    </div>
  );
};

export default SupportTicket;
