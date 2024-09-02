import React from "react";
import { RiDragHandleLine } from "react-icons/ri";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { NameTag, StatusPill } from "../../../HRM_components";

const KanbanCard = ({ title, index, parent }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
    data: {
      title,
      index,
      parent,
    },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      className="flex items-center p-4 my-2  rounded-lg h-full border-2 bg-white"
      style={{ transform: style.transform }}
    >
      <div className=" space-y-3 w-full">
        <h1 className=" font-bold">#102</h1>

        <p className=" font-medium"> {title}</p>
        <div className="flex items-center justify-between text-gurugeeks-dark-500">
          <p>23-08-2023</p>
          <p>Medium</p>
        </div>
        <div className="flex items-center justify-between">
          <StatusPill status={"pending"} text={"Pending"} />
          <NameTag />
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
