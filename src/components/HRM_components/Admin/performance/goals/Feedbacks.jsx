import React from "react";

const Feedbacks = ({ openFeedBackModal }) => {
  return (
    <div onClick={openFeedBackModal} className="px-6 text-gurugeeks-dark-600">
      <p className="font-bold ">Feedbacks</p>
      <div className="grid grid-cols-2 gap-4 p-4">
        {Array(4)
          .fill()
          .map(() => (
            <div className=" col-span-1 border flex gap-x-4  items-start p-2 min-w-[180px] rounded-lg cursor-pointer">
              <div className="pt-2">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/HRM/HorizontalKebab.png"
                  }
                  alt="feedback"
                />
              </div>
              <div>
                <p className="font-bold">Robert Doen</p>
                <p>Subject</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Feedbacks;
