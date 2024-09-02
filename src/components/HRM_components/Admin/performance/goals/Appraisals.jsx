import React from "react";
import StarRating from "../../jobs/StartRating";

const Appraisals = ({ openFeedBackModal }) => {
  const tableHeader = [
    "KPIs",
    "Avg. Rating",
    "Manager",
    "Subject",
    "Peer",
    "Peer",
    "Peer",
  ];

  return (
    <div className="absolute w-full">
      <table className="w-full">
        <thead className="h-6 bg-[#F0F0F0]">
          <tr>
            {tableHeader?.map((heading, i) => (
              <th className=" font-medium" key={i}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="pb-10 bg-white">
          <tr className=" h-[55px] bg-[#E6E6E6] text-center">
            <td>Leadership skills</td>
            <td>
              <div className="flex item-center justify-center">
                <div className=" h-8 w-20 rounded-full text-white flex items-center justify-center bg-gurugeeks-green-600">
                  4.5/5
                </div>
              </div>
            </td>
            <td className="">
              <div className="flex item-center justify-center">
                <StarRating totalStars={5} initialRating={2} />
              </div>
            </td>
            <td>
              <div className="flex item-center justify-center">
                <StarRating totalStars={5} initialRating={3} />
              </div>
            </td>
            <td>-- --</td>
            <td>-- --</td>
            <td>-- --</td>
          </tr>
          <tr className="h-[40px] bg-white text-center">
            <td></td>
            <td></td>
            <td className="min-w-[160px] border">
              <div
                onClick={openFeedBackModal}
                className="w-full h-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/HRM/Feedback.png"}
                  alt="feedback"
                />
              </div>
            </td>
            <td className="min-w-[160px]  border">
              <div className="w-full h-full flex justify-center items-center cursor-pointer">
                <img
                  src={process.env.PUBLIC_URL + "/images/HRM/Feedback.png"}
                  alt="feedback"
                />
              </div>
            </td>
            <td className="min-w-[160px]  border">
              <div className="w-full h-full flex justify-center items-center cursor-pointer">
                <img
                  src={process.env.PUBLIC_URL + "/images/HRM/Feedback.png"}
                  alt="feedback"
                />
              </div>
            </td>
            <td className="min-w-[160px]  border">
              <div className="w-full h-full flex justify-center items-center cursor-pointer">
                <img
                  src={process.env.PUBLIC_URL + "/images/HRM/Feedback.png"}
                  alt="feedback"
                />
              </div>
            </td>
            <td className="min-w-[160px] border">
              <div className="w-full h-full flex justify-center items-center cursor-pointer">
                <img
                  src={process.env.PUBLIC_URL + "/images/HRM/Feedback.png"}
                  alt="feedback"
                />
              </div>
            </td>
          </tr>
          <tr className="h-[55px] bg-white">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Appraisals;
