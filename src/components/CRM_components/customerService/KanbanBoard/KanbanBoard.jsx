import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import { DndContext, rectIntersection } from "@dnd-kit/core";

const KanbanBoard = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [inProgressItems, setInProgressItems] = useState([]);
  const [uItems, setuItems] = useState([
    { title: "Received a broken phone" },
    { title: "Can’t login to my account" },
    { title: "Wrong order was delivered" },
  ]);

  const handleDragAndDrop = (e) => {
    const container = e.over?.id;
    const title = e.active.data.current?.title ?? "";
    const index = e.active.data.current?.index ?? 0;
    const parent = e.active.data.current?.parent ?? "ToDo";
    if (container === "ToDo") {
      setTodoItems([...todoItems, { title }]);
    } else if (container === "Done") {
      setDoneItems([...doneItems, { title }]);
    } else if (container === "Unassigned") {
      setuItems([...uItems, { title }]);
    } else {
      setInProgressItems([...inProgressItems, { title }]);
    }
    if (parent === "ToDo") {
      setTodoItems([
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1),
      ]);
    } else if (parent === "Done") {
      setDoneItems([
        ...doneItems.slice(0, index),
        ...doneItems.slice(index + 1),
      ]);
    } else if (parent === "Unassigned") {
      setuItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
    } else {
      setInProgressItems([
        ...inProgressItems.slice(0, index),
        ...inProgressItems.slice(index + 1),
      ]);
    }
  };

  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={handleDragAndDrop}
    >
      <div className="flex">
        <KanbanColumn title="Unassigned" items={uItems} />
        <KanbanColumn title="ToDo" items={todoItems} />
        <KanbanColumn title="In Progress" items={inProgressItems} />
        <KanbanColumn title="Done" items={doneItems} />
      </div>
    </DndContext>
  );
};

export default KanbanBoard;
