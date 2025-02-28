"use client";
import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "reactflow/dist/style.css"; // Import React Flow styles

const MGAApprovalFlow = () => {
    const router = useRouter();
  // Define nodes with improved styling
  
  const colors = [
    "linear-gradient(90deg, #e74c3c, #c0392b)", // Red
    "linear-gradient(90deg, #3498db, #2980b9)", // Blue
    "linear-gradient(90deg, #2ecc71, #27ae60)", // Green
    "linear-gradient(90deg, #f39c12, #e67e22)", // Orange
    "linear-gradient(90deg, #8e44ad, #9b59b6)", // Violet
    "linear-gradient(90deg, #34495e, #2c3e50)", // Navy
    "linear-gradient(90deg, #ff5733, #ffbd69)", // Sunset Orange
    "linear-gradient(90deg, #16a085, #1abc9c)", // Teal
    "linear-gradient(90deg, #bdc3c7, #ecf0f1)", // Light Gray
    "linear-gradient(90deg, #7d3c98, #6c3483)", // Dark Purple
    "linear-gradient(90deg, #d35400, #e74c3c)", // Maroon
    "linear-gradient(90deg, #95a5a6, #7f8c8d)", // Gray
    "linear-gradient(90deg, #c0392b, #e74c3c)", // Crimson
  ];
  const nodes = [
    {
      id: "1",
      data: { label: "DATA CALL" },
      position: { x: -1100, y: 200 },
      style: {
        background: "linear-gradient(90deg, #f39c12, #f1c40f)",
        color: "#fff",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "600px",
        height: "100px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "2",
      data: { label: "First Save" },
      position: { x: -200, y: -100 },
      style: {
        background: colors[0],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "600px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "3",
      data: { label: "DATA FILLING" },
      position: { x: -200, y: 500 },
      style: {
        background: colors[4],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "600px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "4",
      data: { label: "DOCKET VERIFICATION" },
      position: { x: 650,y: 200 },
      style: {
        background: colors[7],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "600px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "5",
      data: { label: "VECHICLE READY FOR DELIVERY" },
      position: { x: 1000, y: 500 },
      style: {
        background: colors[10],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
       width: "800px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
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
      label:"Enter Booking Id",
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
      label: "DSE Save the Docket",
      animated: true,
      type: "smoothstep",
      style: {
        stroke: "#4CAF50",
        strokeWidth: 2,
         // Adjust stroke width to match the new style
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
      id: "e3-4",
      source: "3",
      target: "4",
      label: "Track Sales",
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
      label: "Account Head Observes and verify",
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

export default MGAApprovalFlow;
