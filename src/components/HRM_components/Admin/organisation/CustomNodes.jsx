import React from "react";
import { Handle, Position } from "react-flow-renderer";

const CustomNode = ({ data }) => {
  const { employee } = data;

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        isConnectable={false}
      />
      <div
        style={{
          padding: "10px",
          border: "1px solid #aaa",
          borderRadius: "5px",
          background: "#f9f9f9",
        }}
      >
        <strong>{employee.name}</strong>
        <br />
        {employee.role}
        <br />
        {employee.department}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#555" }}
        isConnectable={true}
      />
    </>
  );
};

export default CustomNode;
