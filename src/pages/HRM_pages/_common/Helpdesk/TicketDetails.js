import React, { useEffect, useState } from "react";
import {
  BreadCrumbs,
  Button,
  CustomInput,
  Spinner,
  TopTab,
} from "../../../../components/HRM_components";
import { FaChevronDown } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

import CustomDropdown from "../../../../components/HRM_components/_common/CustomDropDown";
import { useDispatch } from "react-redux";
import {
  addHelpdeskComment,
  deleteHelpdeskTicket,
  editHelpdeskTicket,
  fetchCommentsByTicketId,
  fetchHelpDesk,
  fetchHelpDeskTicketById,
} from "../../../../features/HRM_features/helpdesk/helpdesk.slice";
import Thread from "../../../../components/HRM_components/_common/helpdesk/Thread";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectHelpdeskSlice } from "../../../../features/HRM_features/helpdesk/helpdesk.selectors";
import { collapseToast } from "react-toastify";

const TicketDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [commentLoader, setCommentLoader] = useState(false);
  const [commentFormData, setcommentFormData] = useState({
    ticket_id: id,
    message: "",
  });

  const { ticketComment, ticket, isLoading } = useSelector(selectHelpdeskSlice);
  const [helpdeskTicket, setHelpdeskTicket] = useState(ticket);
  const breadcrumbItems = ["Helpdesk", "Ticket# 2023-CS123"];
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setcommentFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setCommentLoader(true);
    dispatch(addHelpdeskComment(commentFormData))
      .unwrap()
      .then((payload) => {
        if (payload.created_at && payload.id) {
          setcommentFormData({
            ticket_id: id,
            message: "",
          });
          setCommentLoader(false);
          dispatch(fetchCommentsByTicketId(id));
        }
        setCommentLoader(false);
      });
  };

  //handle delete helpdesk ticket
  const handleDeleteTicket = () => {
    dispatch(deleteHelpdeskTicket(id))
      .unwrap()
      .then((payload) => {
        if (payload.created_at && payload.id) {
          navigate(-1);
          dispatch(fetchHelpDesk());
        }
      });
  };

  const handleCloseTicket = () => {
    setHelpdeskTicket((prev) => ({ ...prev, is_active: false }));
    console.log(helpdeskTicket);
    dispatch(editHelpdeskTicket(helpdeskTicket));
  };

  useEffect(() => {
    dispatch(fetchCommentsByTicketId(id));
    dispatch(fetchHelpDeskTicketById(id))
      .unwrap()
      .then((payload) => {
        console.log(payload);
        setHelpdeskTicket({
          ...payload.data,
          department_ids: payload.data.departments.map((item) => item.id),
        });
      });
  }, []);

  return (
    <div>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}
      <TopTab
        leftComponent={
          <h1 className="font-bold text-xl text-[#161E54]">5 Applicants</h1>
        }
      />
      <div className="flex items-start gap-x-3 w-full">
        <div className="w-[70%] bg-white p-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-3">
              <div className=" h-5 w-5 rounded-full bg-red-500"></div>
              <h1>Ticket# {ticket?.ticket_unique_id}</h1>
            </div>
            <div className="items-center flex gap-x-3">
              <Button onClick={handleCloseTicket} color={"secondary"}>
                Close Ticket
              </Button>
              <Button
                onClick={handleDeleteTicket}
                icon={
                  <>
                    <FaTrashCan className="text-red-500" />
                  </>
                }
                color={"secondary"}
              >
                Delete Ticket
              </Button>
            </div>
          </div>
          <div>
            <h1 className=" text-lg py-3">{ticket?.subject}</h1>
            <p className="w-[80%] text-gurugeeks-dark-500 text-sm">
              {ticket?.details}
            </p>
          </div>
          <h1 className=" text-lg py-3">Replies</h1>
          <div className={"max-h-52 overflow-y-auto"}>
            {ticketComment.map((item, index) => (
              <Thread comment={item} />
            ))}
          </div>
          <div className="p-3 my-6 bg-[#FCFCFC] border-2">
            <h1 className="text-lg font-semibold py-3">Reply to Ticket</h1>
            <div className="flex items-center gap-x-2">
              {/* <div className="w-full">
                <CustomInput label={"Employee Email"} />
              </div>
              <div className="w-full">
                <CustomDropdown label="Category" />
              </div>
              <div className="w-full">
                <CustomDropdown label="Request Ticket Type" />
              </div> */}
            </div>
            <div className="my-3">
              <CustomInput
                value={commentFormData.message}
                name={"message"}
                label={"Reply Body"}
                placeholder={"type a comment"}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="flex gap-x-3 my-3">
              <Button onClick={handleSubmit}>
                {" "}
                {commentLoader ? (
                  <div className="w-14">
                    <Spinner />
                  </div>
                ) : (
                  "Submit Reply"
                )}
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[30%] p-4 bg-white">
          <div className="bg-[#E6E6E6] p-2 text-center">
            <p className=" font-semibold text-gurugeeks-dark-600">
              Ticket ID: 2023-CS123
            </p>
          </div>
          <div className="py-2 border-b space-y-2">
            <div>
              <div className="flex items-center gap-x-2">
                <p className="">Assigned to:</p>
                <p className=" font-semibold flex items-center gap-x-2">
                  {" "}
                  Mary Maduka <FaChevronDown />
                </p>
              </div>
              <p className="w-[80%] text-[#ED722B]">
                (Last Ticket from Patrick Doe was handled by Seye Olaniyan)
              </p>
            </div>
            <div className="text-sm space-y-3 border-b py-2">
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <p>Status:</p>
                </div>
                <div className="w-full">
                  <p>New</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <p>Priority:</p>
                </div>
                <div className="w-full">
                  <p>New</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <p>From:</p>
                </div>
                <div className="w-full">
                  <p>New</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <p>Category:</p>
                </div>
                <div className="w-full">
                  <p>New</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <p>Start Date:</p>
                </div>
                <div className="w-full">
                  <p>New</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <p>Due Date:</p>
                </div>
                <div className="w-full">
                  <p>New</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <p>Recurring:</p>
                </div>
                <div className="w-full">
                  <p>New</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <p>Status:</p>
                </div>
                <div className="w-full">
                  <p>New</p>
                </div>
              </div>
            </div>
            <div className="p-3 text-sm border-b ">
              <p className="text-base font-medium">Contact</p>
              <p>Phone Number: +234 234 4567 890</p>
              <p>Email: jd@hfbc.info</p>
            </div>
            <div className="pt-3 text-sm">
              <p className="text-base font-medium">Contact</p>
              <p>Phone Number: +234 234 4567 890</p>
              <p>Email: jd@hfbc.info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
