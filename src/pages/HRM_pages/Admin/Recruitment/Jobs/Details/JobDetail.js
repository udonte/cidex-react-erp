import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditJobDetails from "./EditJobDetails";
import SavedJobDetail from "./SavedJobDetail";

const JobDetail = ({ editable, editedJobData, setEditedJobData, job }) => {
  return (
    <div className="w-full">
      <div className="flex justify-end items-center my-1"></div>
      <div>
        {editable ? (
          <EditJobDetails
            editedJobData={editedJobData}
            job={job}
            setEditedJobData={setEditedJobData}
          />
        ) : (
          <SavedJobDetail editedJobData={editedJobData} job={job} />
        )}
      </div>
    </div>
  );
};

export default JobDetail;
