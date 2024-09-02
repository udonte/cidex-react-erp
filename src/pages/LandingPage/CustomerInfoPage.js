import analytics from "../../../assets/employeeAnalytics.svg";
import { GalleryInfo } from "../../../components/landingPage/linkedPages/GalleryInfo";
import Footer  from '../LandingPage/footer/Footer'
import Copyright from "./copyright/Copyright";
const CustomerInfoFirstSection = () => {
  return (
    <section className="bg-cyan-green py-8">
      <div className="text-center mx-auto">
        <h1 className="text-4xl font-bold text-gurugeeks-orange-100 my-6 max-sm:text-3xl">
          Customer Information Management
        </h1>
        <p className="font-normal text-base w-3/5 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
          proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque
          aliquam enim.
        </p>
      </div>
      <div className="my-16 flex gap-20 p-10 justify-between w-11/12 mx-auto max-md:flex-col max-md:gap-8">
        <div>
          <p className="text-2xl font-semibold mb-5">
            Simplify data management and make data-driven decisions.
          </p>
          <p>
            Data upkeep and uncovering insights about your people don't have to
            be stressful and time-consuming. With our secure, central database,
            entering and leveraging HR data has never been easier. And with 49
            built-in reports, you can use that data to take action and make
            meaningful changes at your organization.
          </p>
          <div className="mt-9">
            <button className="w-[179px] bg-gurugeeks_bold_color color text-white rounded-lg p-3">
              Request Demo
            </button>
          </div>
        </div>
        <div>
          <img src={analytics} alt="analytics" className="shadow-[0_35px_60px_-15px_rgba(136,180,204,1)] w-[1500px]" />
        </div>
      </div>
    </section>
  );
};



const CustomerInfoPage = () => {
  return (
    <div>
      <CustomerInfoFirstSection />
      <GalleryInfo />
      <Footer />
      <Copyright />
    </div>
  );
};

export default CustomerInfoPage;
