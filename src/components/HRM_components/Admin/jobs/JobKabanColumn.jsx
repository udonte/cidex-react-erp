import JobKanbanCard from "./JobKanbanCard";
import { useDroppable } from "@dnd-kit/core";

const JobKanbanColumn = ({ title, items }) => {
  const { setNodeRef } = useDroppable({
    id: title,
  });
  return (
    <div className="flex-1 m-4 p-4 bg-gray-200 rounded-lg">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div ref={setNodeRef} className="bg-white p-2 rounded-lg">
        {items.map(({ title: cardTitle }, key) => (
          <JobKanbanCard title={cardTitle} key={key} index={key} parent={title} />
        ))}
      </div>
    </div>
  );
};

export default JobKanbanColumn;