import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const JobKanbanCard = ({ title, index, parent }) => {
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
      className="flex items-center p-2 my-2 bg-gray-100 rounded-lg"
      style={{ transform: style.transform }}
    >
      <div>{title}</div>
    </div>
  );
};

export default JobKanbanCard;
