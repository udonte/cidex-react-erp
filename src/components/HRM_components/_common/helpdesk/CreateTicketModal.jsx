import React, { useEffect, useState } from "react";
import CustomDropdown from "../CustomDropDown";
import CustomInput from "../CustomInput";
import Button from "../Button/Button";
import Modal from "../ModalContainer/ModalConatiner";
import { useSelector } from "react-redux";
import {
  selectHekdeskSettings,
  selectSettings,
} from "../../../../features/HRM_features/settings/settings.selector";
import { selectDepartment } from "../../../../features/HRM_features/organisation/departments/department.selector";
import EmployeeSearchDropdown from "../EmployeeSearchDropdown";
import { useDispatch } from "react-redux";
import {
  addHelpdeskTicket,
  fetchHelpDesk,
} from "../../../../features/HRM_features/helpdesk/helpdesk.slice";
import { fetchEmployees } from "../../../../features/HRM_features/employee/employee.slice";
import { selectUserType } from "../../../../features/common/auth/auth.selector";
import { closeAllModals } from "../../../../features/common/modals/modals.slice";

const CreateTicketModal = ({ isOpen, title }) => {
  const userType = useSelector(selectUserType);
  const dispatch = useDispatch();
  const { heldeskCategory } = useSelector(selectSettings);
  const { departments } = useSelector(selectDepartment);
  const [formdata, setFormData] = useState({
    ticket_unique_id: "",
    subject: "",
    details: "",
    helpdesk_category_id: "",
    priority: "",
    recurring: "",
    assignee_id: "",
    department_ids: "",
    start_date: "",
    attachment_url: "",
  });
  const period = [
    { value: "repeat_once", label: "Repeat once" },
    { value: "repeat_weekly", label: "Repeat weekly" },
    { value: "repeat_biweekly", label: "Repeat biweekly" },
    { value: "repeat_monthly", label: "Repeat monthly" },
    { value: "repeat_yearly", label: "Repeat yearly" },
  ];
  const priority = [
    { value: "low", label: "Low" },
    { value: "normal", label: "Normal" },
    { value: "high", label: "High" },
    { value: "urgent", label: "Urgent" },
  ];

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const handleDropdownSelect = (name, selectedOption) => {
    setFormData((prevState) => ({ ...prevState, [name]: selectedOption }));
  };
  const handleDropdownSelectDepartment = (name, selectedOption) => {
    setFormData((prevState) => ({ ...prevState, [name]: [selectedOption] }));
  };
  const handleEmployeeSelect = (selectedOption) => {
    setFormData((prevState) => ({ ...prevState, assignee_id: selectedOption }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formdata);
    dispatch(addHelpdeskTicket(formdata))
      .unwrap()
      .then((payload) => {
        console.log(payload);
        if (payload.created_at && payload.id) {
          dispatch(closeAllModals());
          dispatch(fetchHelpDesk());
        }
      });
  };
  return (
    <div>
      <Modal title={title} width={"sm"} isOpen={isOpen}>
        <div className="h-[90%] overflow-y-scroll space-y-4 p-10">
          <CustomInput
            label={"Subject"}
            type="text"
            name="subject"
            value={formdata.subject}
            handleInputChange={handleInputChange}
          />
          <div>
            <label className="font-semibold">Details</label>
            <textarea
              className={`p-3 w-full min-h-14 border bg-slate-50 rounded-md`}
              id="myTextArea"
              name="details"
              value={formdata.details}
              rows="4" // Specify the number of visible text lines
              cols="50" // Specify the visible width of the text area
              onChange={handleInputChange}
            />
          </div>{" "}
          {userType === "admin" && (
            <div className="flex items-top gap-x-2">
              <div className="flex items-center justify-center">
                <p className="min-w-[80px] font-semibold">Assign to:</p>{" "}
              </div>
              <EmployeeSearchDropdown callback={handleEmployeeSelect} />
            </div>
          )}
          <CustomDropdown
            options={heldeskCategory?.map((items) => ({
              value: items.id,
              label: items.name,
            }))}
            onSelect={(selectedOption) => {
              handleDropdownSelect("helpdesk_category_id", selectedOption);
            }}
            label="Category"
          />
          <CustomDropdown
            label="Priority"
            options={priority}
            onSelect={(selectedOption) => {
              handleDropdownSelect("priority", selectedOption);
            }}
          />
          <CustomDropdown
            label="Period"
            options={period}
            onSelect={(selectedOption) => {
              handleDropdownSelect("recurring", selectedOption);
            }}
          />
          <CustomDropdown
            label="Department"
            options={departments?.map((items) => ({
              value: items.id,
              label: items.name,
            }))}
            onSelect={(selectedOption) => {
              handleDropdownSelectDepartment("department_ids", selectedOption);
            }}
          />
          <CustomInput
            label={"Start date"}
            type="date"
            name="start_date"
            value={formdata.start_date}
            handleInputChange={handleInputChange}
          />
          <CustomInput
            label={"Attachment"}
            type="file"
            name="attachment_url"
            value={formdata.attachment_url}
            handleInputChange={handleInputChange}
          />
          <Button
            onClick={() => {
              handleSubmit();
            }}
          >
            Create Ticket
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default CreateTicketModal;
