import { useState } from "react";
import Button from "../../_common/Button/Button";
import {
  addScheduleInterview,
  fetchScheduledByApplication,
} from "../../../../features/HRM_features/recruitment/scheduleInterview/scheduleInterview.slice";
import { useDispatch, useSelector } from "react-redux";

const ScheduleInterview = ({ applicantData, setShowcheduleForm }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    application_id: applicantData?.id,
    title: "",
    date: "",
    start_time: "",
    end_time: "",
    note: "",
    status: "pending",
    interview_link: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addScheduleInterview(formData))
      .unwrap()
      .then((payload) => {
        if (payload.created_at && payload.id) {
          setShowcheduleForm(false);
          dispatch(fetchScheduledByApplication(applicantData?.id));
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[500px] h-fit shadow p-4 border bg-white mt-5 rounded-md "
    >
      <div className="w-full px-3">
        <p className="text-center font-bold">Schedule Interview</p>
        <div className="my-3 flex flex-col space-y-3 items-center">
          <div className="w-full">
            <label htmlFor="title">Title</label>
            <input
              className="p-3 w-full h-12 border bg-slate-50 rounded-md"
              type="text"
              name="title"
              placeholder="E.g Administrator"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="w-full">
              <label htmlFor="start_at">Date</label>
              <input
                className="p-3 w-full h-12 border bg-slate-50 rounded-md"
                type="date"
                name="date"
                value={formData.date}
                min={new Date().toISOString().split("T")[0]}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <label htmlFor="start_time">Start Time</label>
              <input
                className="p-3 w-full h-12 border bg-slate-50 rounded-md"
                type="time"
                name="start_time"
                value={formData.start_time}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <label htmlFor="end_time">End at</label>
              <input
                className="p-3 w-full h-12 border bg-slate-50 rounded-md"
                type="time"
                name="end_time"
                value={formData.end_time}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="interview_link">Interview Link</label>
            <input
              className="p-3 w-full h-12 border bg-slate-50 rounded-md"
              type="text"
              name="interview_link"
              value={formData.interview_link}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="note">Note</label>
            <input
              className="p-3 w-full h-12 border bg-slate-50 rounded-md"
              type="text"
              name="note"
              placeholder="E.g Please prepare for a live test"
              value={formData.note}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-full flex justify-end gap-x-5 my-8">
          <div>
            <Button color={"secondary"}>Cancel</Button>
          </div>
          <div>
            <Button type={"submit"}>Submit</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ScheduleInterview;
