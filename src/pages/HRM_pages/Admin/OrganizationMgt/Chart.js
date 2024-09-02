import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  updateEdge,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNodes from "../../../../components/HRM_components/Admin/organisation/CustomNodes";

const employees = [
  {
    id: "1",
    name: "CEO",
    role: "CEO",
    department: "Management",
    subordinates: ["2", "3"],
  },
  {
    id: "3",
    name: "Jane Smith",
    role: "Manager",
    department: "Sales",
    subordinates: ["6", "7", "9"],
  },
  {
    id: "2",
    name: "John Doe",
    role: "Manager",
    department: "Sales",
    subordinates: ["4"],
  },
  {
    id: "4",
    name: "Alice Johnson",
    role: "Employee",
    department: "Sales",
    subordinates: ["8", "5"],
  },
  {
    id: "5",
    name: "Bob Williams",
    role: "Employee",
    department: "Sales",
    subordinates: [],
  },
  {
    id: "6",
    name: "Michael Davis",
    role: "Employee",
    department: "Sales",
    subordinates: [],
  },
  {
    id: "7",
    name: "Sarah F Clark",
    role: "Employee",
    department: "Sales",
    subordinates: [],
  },
  {
    id: "8",
    name: "Sarah D  Clark",
    role: "Employee",
    department: "Sales",
    subordinates: [],
  },
  {
    id: "9",
    name: "Sarah G Clark",
    role: "Employee",
    department: "Sales",
    subordinates: [],
  },
  // Add more employees as needed
];

const initBgColor = "#1A192B";
const connectionLineStyle = { animated: false, style: { stroke: "#000" } };
const snapGrid = [20, 20];
const nodeTypes = {
  selectorNode: CustomNodes,
};

const defaultViewport = { x: 0, y: 0, zoom: 0.8 }; // Adjust the zoom level as needed

const Chart = () => {
  const edgeUpdateSuccessful = useRef(true);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  useEffect(() => {
    const nodeMap = new Map();
    const edgeList = [];

    employees.forEach((employee) => {
      const { id, name, role, department, subordinates } = employee;
      const node = {
        id,
        type: "employeeNode",
        data: {
          label: `${name}\n${role}\n${department}`,
          employee,
        },
        position: { x: Math.random() * 400, y: Math.random() * 400 },
      };

      nodeMap.set(id, node);

      if (subordinates && subordinates.length > 0) {
        subordinates.forEach((subordinateId) => {
          edgeList.push({
            id: `${id}-${subordinateId}`,
            source: id,
            target: subordinateId,
          });
        });
      }
    });

    const ceoNode = nodeMap.get("1"); // CEO node is the root
    ceoNode.position = { x: 500, y: 0 };

    const positionMap = {};
    positionMap["1"] = 0; // Initialize CEO position

    const arrangeTreeLayout = (node, positionMap, level) => {
      const horizontalSpacing = 200; // Adjust the spacing between nodes horizontally
      const verticalSpacing = 150; // Adjust the spacing between nodes vertically

      const children = nodeMap.get(node.id).data.employee.subordinates || [];
      const childrenCount = children.length;

      const parentPosition = positionMap[node.id];
      const totalWidth = childrenCount * horizontalSpacing;
      let startX = parentPosition - totalWidth / 2;

      children.forEach((childId) => {
        const childNode = nodeMap.get(childId);
        const childWidth =
          (nodeMap.get(childId).data.employee.subordinates.length + 1) *
          horizontalSpacing;

        startX += childWidth / 2;

        // Position the child node
        childNode.position = {
          x: startX,
          y: level * verticalSpacing,
        };

        positionMap[childId] = startX;

        startX += childWidth / 2;

        edgeList.push({
          id: `${node.id}-${childId}`,
          source: node.id,
          target: childId,
        });

        // Recursively arrange the children of the child node
        arrangeTreeLayout(childNode, positionMap, level + 1);
      });
    };

    // Start arranging the tree layout
    arrangeTreeLayout(ceoNode, positionMap, 1);

    const arrangedNodes = Array.from(nodeMap.values());
    const arrangedEdges = edgeList;

    setNodes(arrangedNodes);
    setEdges(arrangedEdges);
  }, []);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: false, style: { stroke: "#000" } }, eds)
      ),
    []
  );

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    if (oldEdge && oldEdge.id) {
      edgeUpdateSuccessful.current = true;

      // Destructure properties from oldEdge only if it is defined and has an 'id'
      const { id, source, target, ...otherProperties } = oldEdge;

      const updatedEdge = {
        id,
        source,
        target,
        ...otherProperties,
        ...newConnection,
      };

      setEdges((els) => updateEdge(oldEdge, updatedEdge, els));
    }
  }, []);

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (edge && edge.id) {
      if (!edgeUpdateSuccessful.current) {
        setEdges((eds) => eds.filter((e) => e.id !== edge.id));
      }
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onEdgeUpdate={onEdgeUpdate}
      onEdgeUpdateStart={onEdgeUpdateStart}
      onEdgeUpdateEnd={onEdgeUpdateEnd}
      // style={{ background: "#1A192B" }}
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      snapGrid={snapGrid}
      defaultViewport={defaultViewport}
      fitView
      attributionPosition="bottom-left"
    >
      {/* <MiniMap
        nodeStrokeColor={(n) => {
          if (n.type === "input") return "#0041d0";
          if (n.type === "selectorNode") return bgColor;
          if (n.type === "output") return "#ff0072";
        }}
        nodeColor={(n) => {
          if (n.type === "selectorNode") return bgColor;
          return "#fff";
        }}
      /> */}
      {/* <Controls /> */}
    </ReactFlow>
  );
};

export default Chart;
