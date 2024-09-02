import React from "react";
import { Link } from "react-router-dom";

const Ticket = ({ ticket }) => {
  return (
    <div className="bg-white p-6 border my-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <div className=" h-5 w-5 rounded-full bg-red-500"></div>
          <h1>Ticket# {ticket?.ticket_unique_id}</h1>
          <div className="py-2 px-3 bg-red-100 rounded capitalize text-red-500">
            {ticket.priority} Priority
          </div>
        </div>
        <div className=" text-gurugeeks-dark-500">
          Posted at 12:45AM 16/04/2024
        </div>
      </div>
      <div className="border-b">
        <div>
          <h1 className="py-2 capitalize">{ticket?.subject}</h1>
          <p className="text-sm w-[80%] text-gurugeeks-dark-500 pb-1">
            {ticket?.details}
          </p>
        </div>
        <div className="py-3">
          <p className=" text-gurugeeks-dark-500 capitalize">
            {ticket.category?.name}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center py-3">
        <div className=" text-gurugeeks-dark-500">
          {ticket.assignees[0]
            ? `${ticket.assignees[0]?.first_name} ${ticket.assignees[0]?.last_name}`
            : "Unassigned"}
        </div>
        <Link to={`${"/HRM/helpdesk"}/${ticket.id}`}>
          <div className=" underline text-gurugeeks-orange-600">
            Open Ticket
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Ticket;
