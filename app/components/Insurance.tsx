"use client";
import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "reactflow/dist/style.css"; // Import React Flow styles

const Insurance = () => {
    const router = useRouter();
  // Define nodes with improved styling
  const nodes = [
    {
      id: "1",
      data: { label: "User Login" },
      position: { x: -850, y: -250 },
      style: {
        background: "linear-gradient(90deg, #f39c12, #f1c40f)",
        color: "#fff",
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "2",
      data: { label: "Import Section" },
      position: { x: -850, y: -90 },
      style: {
        background: "linear-gradient(90deg, #2196F3, #64B5F6)",
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "90px",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "3",
      data: { label: "Excel Import" },
      position:  { x: -1150, y:140 },
      style: {
        background:"linear-gradient(90deg, #F44336, #E57373)",
        color: "#fff",
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
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
      data: { label: "Manual Entry" },
      position:{ x: -500, y: 140 },
      style: {
        background: "linear-gradient(90deg, #f39c12, #f1c40f)",
        color: "#fff",
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
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
      data: { label: "Reassign Leads To CRE" },
      position: { x: -850, y: 330 },
      style: {
        background:"linear-gradient(90deg, #800000, #A52A2A)",
        color: "#fff",
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
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
      data: { label: "CRE View" },
      position: { x: 150, y: -250 },
      style: {
        background: "linear-gradient(90deg, #2196F3, #64B5F6)",
        color: "#fff",
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
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
      data: { label: "Payment Details Section " },
      position: { x: 150, y: 50 },
      style: {
        background: "linear-gradient(90deg, #f39c12, #f1c40f)",
        color: "#fff",
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
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
      data: { label: "Delivery Section" },
      position: { x: 150, y: 350 },
      style: {
        background: "linear-gradient(90deg, #FFF176, #FFEB3B)",
        color: "#fff",
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
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
      data: { label: "Closed Entry" },
      position: { x: 750, y: -100 },
      style: {
        background:"linear-gradient(90deg, #800000, #A52A2A)",
        color: "#fff",
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
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
      data: { label: "Reports" },
      position: { x: 750, y: 210 },
      style: {
        background:  "linear-gradient(90deg, #2196F3, #64B5F6)",
        color: "#fff",
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
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
      labe:"",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 24, // Adjust font size
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
      label: "",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 24, // Adjust font size
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
      label: "",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 24, // Adjust font size
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
      id: "e3-5",
      source: "3",
      target: "5",
      label: "",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 24, // Adjust font size
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
      id: "e4-5",
      source: "4",
      target: "5",
      label: "",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 24, // Adjust font size
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
      id: "e5-6",
      source: "5",
      target: "6",
      label: "Set CRE Target",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 24, // Adjust font size
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
      id: "e6-7",
      source: "6",
      target: "7",
      label: "Pending Entries",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 24, // Adjust font size
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
      label: "Yes",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 24, // Adjust font size
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
      label: "Delivered",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 24, // Adjust font size
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
      id: "e9-10",
      source: "9",
      target: "10",
      label: "",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2, // Adjust stroke width to match the new style
      },
      labelStyle: {
        fontSize: 24, // Adjust font size
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
        'PURCHASE REQUEST': '/autovyn/asset/AssetRequest',
        'ISSUE ITEM': '/autovyn/asset/assetissue/DirectAssetIssue',
        'PURCHASE REQUEST APPROVAL': '/autovyn/asset/PurchaseRequestApproval',
        'PURCHASE REQUEST TO ORDER': '/autovyn/asset/AssetRequestToOrder',
        'CREATE PURCHASE ORDER': '/autovyn/asset/purchaseorder',
        'PURCHASE ORDER APPROVAL': '/autovyn/asset/purchaseapproval',
        'PURCHASE ENTRY': '/autovyn/asset/PurchaseEntry',
        'ALL PURCHASE ORDER VIEW': '/autovyn/asset/PurchaseView',
        'BACK ORDER VIEW': '/autovyn/asset/backOrders',
        'PURCHASED ASSET ENTRY': '/autovyn/asset/purchaseassetentry',
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

export default Insurance;
