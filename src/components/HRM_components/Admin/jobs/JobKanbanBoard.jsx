import { useState } from "react";
import JobKanbanColumn from "./JobKanbanColumn";
import { DndContext, rectIntersection } from "@dnd-kit/core";

const JobKanbanBoard = () => {
  const [newAppliedItems, setNewAppliedItems] = useState([]);
  const [screeningItems, setScreeningItems] = useState([]);
  const [interviewItems, setInterviewItems] = useState([]);
  const [offerItems, setOfferItems] = useState([]);
  const [hiredItems, setHiredItems] = useState([]);
  const [uItems, setuItems] = useState([
    { title: "candidate abc" },
    { title: "candidate def2" },
    { title: "candidate ghi3" },
  ]);

  const handleDragAndDrop = (e) => {
    const container = e.over?.id;
    const title = e.active.data.current?.title ?? "";
    const index = e.active.data.current?.index ?? 0;
    const parent = e.active.data.current?.parent ?? "New Applied";
    if (container === "New Applied") {
      setNewAppliedItems([...newAppliedItems, { title }]);
    } else if (container === "Screening") {
      setScreeningItems([...screeningItems, { title }]);
    } else if (container === "Interview") {
      setInterviewItems([...interviewItems, { title }]);
    } else if (container === "Offer") {
      setOfferItems([...offerItems, { title }]);
    } else if (container === "New Applied") {
      setuItems([...uItems, { title }]);
    } else if (container === "Hired") {
      setHiredItems([...hiredItems, { title }]);
    } else {
      setNewAppliedItems([...newAppliedItems, { title }]);
    }
    if (parent === "New Applied") {
      setNewAppliedItems([
        ...newAppliedItems.slice(0, index),
        ...newAppliedItems.slice(index + 1),
      ]);
    } else if (parent === "Screening") {
      setScreeningItems([
        ...screeningItems.slice(0, index),
        ...screeningItems.slice(index + 1),
      ]);
    } else if (parent === "Interview") {
      setInterviewItems([
        ...interviewItems.slice(0, index),
        ...interviewItems.slice(index + 1),
      ]);
    } else if (parent === "Offer") {
      setOfferItems([
        ...offerItems.slice(0, index),
        ...offerItems.slice(index + 1),
      ]);
    } else if (parent === "New Applied") {
      setuItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
    } else {
      setInterviewItems([
        ...interviewItems.slice(0, index),
        ...interviewItems.slice(index + 1),
      ]);
    }
  };

  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={handleDragAndDrop}
    >
      <div className="flex">
        <JobKanbanColumn title="New Applied" items={uItems} />
        <JobKanbanColumn title="New Applied" items={newAppliedItems} />
        <JobKanbanColumn title="Screening" items={screeningItems} />
        <JobKanbanColumn title="Interview" items={interviewItems} />
        <JobKanbanColumn title="Offer" items={offerItems} />
        <JobKanbanColumn title="Hired" items={hiredItems} />
      </div>
    </DndContext>
  );
};

export default JobKanbanBoard;
