import React from "react";
import { images } from "../../../../assets/images/images";
import icons from "../../../../assets/icons";

function About(props) {
  return (
    <>
      <div className="flex items-center m-2 p-2">
        <div className="flex items-center">
          <div className="mr-3 text-blue-600">{props.icons} </div>
          <div>
            <h2 className="text-sm text-gurugeeks-text-gray-2">
              {props.heading}
            </h2>
            <p className="">{props.text}</p>
          </div>
        </div>
        <div className="cursor-pointer ml-14">{props.edit}</div>
      </div>
    </>
  );
}

function Team(props) {
  return (
    <>
      <div className="flex justify-between items-center m-2 p-2 pr-10">
        <div className="flex justify-normal items-center">
          <div className="mr-3 border-2 border-black rounded-full text-black  p-3 text-2xl ">
            {props.prefix}{" "}
          </div>
          <div>
            <h2 className="text-lg text-blue-500">{props.heading}</h2>
            <p className="">{props.text}</p>
          </div>
        </div>
        <div className="cursor-pointer">{props.edit}</div>
      </div>
    </>
  );
}

const SelfService = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 m-10">
        {/* Header Section */}
        <div className="col-start-1 col-end-7 relative">
          {/* Background image */}
          <div
            style={{
              backgroundImage: `url(/Banner.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "300px",
            }}
          >
            {/* Empty div for background image */}{" "}
          </div>

          <div className="pb-8 pt-2 bg-white">
            {/* avatar */}
            <div className="absolute bottom-20 left-5">
              <img width={100} src={process.env.PUBLIC_URL + "/Avatar.png"} />
              <img />
            </div>

            <div className="flex justify-between ml-36 mr-8">
              {/* Name */}
              <div className="">
                <div>
                  <span className="text-2xl">Caleb Owonikoko</span>
                </div>
                <div>
                  <span className="text-sm">Lead, Backend Developer</span>
                </div>
              </div>
              <div className="flex justify-center py-6 text-blue-500 cursor-pointer">
                <h1 className="border-2 rounded-md p-2">View org chart</h1>
              </div>
            </div>
          </div>
        </div>

        {/* //---------Header Section  ------------------- //*/}

        <div className="col-span-3 bg-white">
          <div className="pl-5 my-5 text-xl">
            <h1>About</h1>
          </div>

          <div className="">
            <div className="flex justify-between">
              <About icons={icons.title} heading="Title" text="Software Lead" />
              <About
                icons={icons.title}
                heading="Department"
                text=" Development"
              />
            </div>

            <div className="flex justify-between">
              <About icons={icons.manager} heading="Manager" text="(empty)" />

              <About
                icons={icons.email}
                heading="Email"
                text="nolau@some.com "
              />
            </div>

            <div className="flex justify-between">
              <About icons={icons.location} heading="Location" text="(empty)" />
              <About icons={icons.phone} heading="Work Phone" text="(empty)" />
            </div>

            <div className="flex justify-between">
              <About
                icons={icons.phone}
                heading="Work Mobile Phone"
                text="(empty)"
              />
              <About
                icons={icons.address}
                heading="Nickname"
                text="Gee"
                edit={icons.edit}
              />
            </div>

            <div className=" ml-3 flex justify-normal items-center">
              <span className="mr-4 text-blue-600">{icons.plus}</span>
              <h1 className="text-blue-400">Add pronouciation</h1>
            </div>
            <div className=" ml-3 flex justify-normal items-center">
              <span className="mr-4 text-blue-600">{icons.plus}</span>
              <h1 className="text-blue-400">Add bio</h1>
            </div>
          </div>
        </div>

        <div className="col-span-3 bg-white">
          <div className="pl-5 my-5 text-xl">
            <h1>My Team</h1>
          </div>

          <div>
            <div className="ml-5 text-lg text">
              {" "}
              <h1>Manager</h1>
            </div>
            <div>
              <Team
                prefix="AL"
                heading="Anita Lugomer (She/Her)"
                text=" Director, Product Design"
                edit={icons.edit2}
              />
            </div>
          </div>

          <hr className="mx-10 my-5" />

          <div>
            <div className="ml-5 text-lg text">
              {" "}
              <h1>Direct reports (10)</h1>
            </div>
            <div>
              <Team
                prefix="FG"
                heading="Fred Garner"
                text=" Staff Product Designer"
                edit={icons.edit2}
              />
              <Team
                prefix="JC"
                heading="Julie Chen"
                text="Product Designer"
                edit={icons.edit2}
              />
              <Team
                prefix="SS"
                heading="Sam Sorokin (They/Them)"
                text="Sr. Product Designer"
                edit={icons.edit2}
              />
              <div className="flex justify-center py-8 text-blue-500 cursor-pointer">
                <h1>Show 7 more </h1>
              </div>
            </div>
          </div>

          <hr className="mx-10 my-5" />
          <div>
            <div className="ml-5 text-lg text">
              {" "}
              <h1>Coworkers (1)</h1>
            </div>
            <div>
              <Team
                prefix="RF"
                heading="Robert Fox"
                text="Sr. Manager, Product Design"
                edit={icons.edit2}
              />

              <div className="flex justify-center py-10 text-blue-500 cursor-pointer">
                <h1 className="border-2 rounded-md p-2">View org chart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelfService;
