"use client";
import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "reactflow/dist/style.css"; // Import React Flow styles

const mgaProcess = () => {
    const router = useRouter();
  // Define nodes with improved styling
  const nodes = [
    {
      id: "1",
      data: { label: "MGA APPROVAL (POST DELIVERY)" },
      position: { x: -700, y: 100 },
      style: {
        background: "linear-gradient(90deg, #4CAF50, #81C784)",
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        width: "250px",
        height: "120px",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "2",
      data: { label: "MGA REQUEST FORM" },
      position: { x: -300, y: 100 },
      style: {
        background: "linear-gradient(90deg, #f39c12, #f1c40f)",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        width: "200px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "3",
      data: { label: "MGA VIEW" },
      position: { x: 0, y: 100 },
      style: {
        background: "linear-gradient(90deg, #3498db, #5dade2)",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        width: "200px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "4",
      data: { label: "MGA APPROVAL" },
      position: { x: 300, y: 100 },
      style: {
        background: "linear-gradient(90deg, #16a085, #16a085)",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        width: "200px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "5",
      data: { label: "CUSTOMER ACTION (YES/NO)" },
      position: { x: -300, y: 300 },
      style: {
        background: "linear-gradient(90deg, #e67e22, #e67e22)",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        width: "200px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "6",
      data: { label: "APPROVER NOTIFICATION" },
      position: { x: -300, y: -100 },
      style: {
        background: "linear-gradient(90deg, #8e44ad, #8e44ad)",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        width: "200px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "7",
      data: { label: "APPROVER NOTIFICATION" },
      position: { x: 400, y: 300 },
      style: {
        background: "linear-gradient(90deg, #8e44ad, #8e44ad)",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        width: "200px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "8",
      data: { label: "MGA DETAILS" },
      position: { x: 500, y: -100 },
      style: {
        background: "linear-gradient(90deg, #3498db, #5dade2)",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        width: "200px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "9",
      data: { label: "EMPLOYEE NOTIFICATION" },
      position: { x: 700, y: 200 },
      style: {
        background: "linear-gradient(90deg, #4CAF50, #81C784)",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        width: "200px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "10",
      data: { label: "MGA UPDATE FORM" },
      position: { x: 0, y: 300 },
      style: {
        background: "linear-gradient(90deg, #4CAF50, #81C784)",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        width: "200px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "11",
      data: { label: "REPORT" },
      position: { x: -700, y: 300 },
      style: {
        background: "linear-gradient(90deg, #4CAF50, #81C784)",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        width: "200px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "12",
      data: { label: "DASHBOARD" },
      position: { x: -700, y: -100 },
      style: {
        background: "linear-gradient(90deg, #4CAF50, #81C784)",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        width: "200px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
  ];

  // Define edges with arrows and flow direction
  const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      label: "Starts Process",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 12, // Adjust font size
        fontWeight: "500", // Adjust font weight
        fill: "#000",
        textShadow: "1px 1px 2px #fff", // Add text shadow for better readability
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#FF6347",
      },
    },
    {
      id: "e1-11",
      source: "1",
      target: "11",
      label: "",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 12, // Adjust font size
        fontWeight: "500", // Adjust font weight
        fill: "#000",
        textShadow: "1px 1px 2px #fff", // Add text shadow for better readability
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#FF6347",
      },
    },
    {
      id: "e1-12",
      source: "1",
      target: "12",
      label: "",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 12, // Adjust font size
        fontWeight: "500", // Adjust font weight
        fill: "#000",
        textShadow: "1px 1px 2px #fff", // Add text shadow for better readability
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#FF6347",
      },
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      label: "Request Raise",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 12, // Adjust font size
        fontWeight: "500", // Adjust font weight
        fill: "#000",
        textShadow: "1px 1px 2px #fff", // Add text shadow for better readability
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#FF6347",
      },
    },
    {
      id: "e2-4",
      source: "2",
      target: "4",
      label: "Approval Needed",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 12, // Adjust font size
        fontWeight: "500", // Adjust font weight
        fill: "#000",
        textShadow: "1px 1px 2px #fff", // Add text shadow for better readability
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#FF6347",
      },
    },

    {
      id: "e4-9",
      source: "4",
      target: "9",
      label: "Approve/Reject",
      animated: true,
      type: "smoothstep", // Use smoothstep for smooth curved lines
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 12, // Adjust font size
        fontWeight: "500", // Adjust font weight
        fill: "#000",
        textShadow: "1px 1px 2px #fff", // Add text shadow for better readability
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#FF6347",
      },
    },
    {
      id: "e4-10",
      source: "4",
      target: "10",
      label: "Update Invoice No",
      animated: true,
      type: "smoothstep", // Use smoothstep for smooth curved lines
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 12, // Adjust font size
        fontWeight: "500", // Adjust font weight
        fill: "#000",
        textShadow: "1px 1px 2px #fff", // Add text shadow for better readability
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#FF6347",
      },
    },
    {
      id: "e2-5",
      source: "2",
      target: "5",
      label: "WhatsApp Notification",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 12, // Adjust font size
        fontWeight: "500", // Adjust font weight
        fill: "#000",
        textShadow: "1px 1px 2px #fff", // Add text shadow for better readability
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#FF6347",
      },
    },
    {
      id: "e2-6",
      source: "2",
      target: "6",
      label: "Notify Approver",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 12, // Adjust font size
        fontWeight: "500", // Adjust font weight
        fill: "#000",
        textShadow: "1px 1px 2px #fff", // Add text shadow for better readability
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#FF6347",
      },
    },
    {
      id: "e6-8",
      source: "6",
      target: "8",
      label: "",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 12, // Adjust font size
        fontWeight: "500", // Adjust font weight
        fill: "#000",
        textShadow: "1px 1px 2px #fff", // Add text shadow for better readability
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#FF6347",
      },
    },
    {
      id: "e7-8",
      source: "7",
      target: "8",
      label: "",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 12, // Adjust font size
        fontWeight: "500", // Adjust font weight
        fill: "#000",
        textShadow: "1px 1px 2px #fff", // Add text shadow for better readability
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#FF6347",
      },
    },
    {
      id: "e4-7",
      source: "4",
      target: "7",
      label: "Notify Approver",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 12, // Adjust font size
        fontWeight: "500", // Adjust font weight
        fill: "#000",
        textShadow: "1px 1px 2px #fff", // Add text shadow for better readability
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#FF6347",
      },
    },
    {
      id: "e8-9",
      source: "8",
      target: "9",
      label: "Approve/Reject",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 12, // Adjust font size
        fontWeight: "500", // Adjust font weight
        fill: "#000",
        textShadow: "1px 1px 2px #fff", // Add text shadow for better readability
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#FF6347",
      },
    },
  ];

  const onClickNode = (event, node) => {
    const pageMapping = {
        'MGA APPROVAL (POST DELIVERY)': '/autovyn/MGA/MGAApproval/Processflow',
        'MGA REQUEST FORM': '/autovyn/MGA/MGAApproval',
        'MGA VIEW': '/autovyn/MGA/MGAApproval/MGAView',
        'MGA APPROVAL': '/autovyn/MGA/MGAApproval/ApproverGrid',
        'MGA DETAILS': '/autovyn/MGA/MGAApproval/MGADetails',
        'MGA UPDATE FORM': '/autovyn/MGA/MGAApproval/MGAUpdate',
        'REPORT': '/autovyn/MGA/MGAApproval/Reports',
        'DASHBOARD': '/autovyn/MGA/MGAApproval/Dashboards',

    };
    router.push(pageMapping[node.data.label] || '/default-page');
};

  return (
    <div className="bg-white dark:bg-dark">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ height: "75vh", width: "90vw" }} // Full page visibility
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodeClick={onClickNode}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          style={{ width: "100%", height: "100%" }} // Make the flowchart visible on the full page
        >
          <Controls />
          <Background color="#888" gap={16} />
        </ReactFlow>
      </motion.div>
    </div>
  );
};

export default mgaProcess;
