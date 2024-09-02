import React from "react";
import KanbanCard from "./KanbanCard";
import { useDroppable } from "@dnd-kit/core";

const KanbanColumn = ({ title, items }) => {
  const { setNodeRef } = useDroppable({
    id: title,
  });
  return (
    <div className="flex-1 m-4 p-4 bg-gray-200 rounded-lg">
      <h2
        className={`text-lg font-bold text-center mb-2 ${
          title === "Pending"
            ? "text-[#D58001]"
            : title === "In Progress"
            ? "text-[#128438]"
            : "text-[#0351B4]"
        }`}
      >
        {title}
      </h2>
      <div ref={setNodeRef} className="bg-white p-2 rounded-lg">
        {items.map(({ title: cardTitle }, key) => (
          <KanbanCard title={cardTitle} key={key} index={key} parent={title} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
