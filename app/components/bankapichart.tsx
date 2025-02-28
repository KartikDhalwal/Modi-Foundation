"use client";
import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "reactflow/dist/style.css"; // Import React Flow styles

const MGAApprovalFlow = () => {
    const router = useRouter();
  // Define nodes with improved styling
  const nodes = [
    {
      id: "1",
      data: { label: "API Banking" },
      position: { x: -750, y: -250 },
      style: {
        background: "linear-gradient(90deg, #f39c12, #f1c40f)",
        color: "#fff",
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        width: "300px",
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
      data: { label: "Paymant Voucher Created By Accounts Team (un-post mode)" },
      position: { x: -775, y: -90 },
      style: {
        background: "linear-gradient(90deg, #2196F3, #64B5F6)",
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        width: "350px",
        height: "120px",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "3",
      data: { label: "Customer Refund Payment with approval" },
      position:  { x: -850, y:90 },
      style: {
        background: "linear-gradient(90deg, #f39c12, #f1c40f)",
        color: "#fff",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        width: "250px",
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
      data: { label: "Vendor Payment with Approval" },
      position:{ x: -500, y: 90 },
      style: {
        background: "linear-gradient(90deg, #f39c12, #f1c40f)",
        color: "#fff",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        width: "250px",
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
      data: { label: "Approver1" },
      position: { x: -650, y: 230 },
      style: {
        background: "linear-gradient(90deg, #FFF176, #FFEB3B)",
        color: "#fff",
        fontSize: "32px",
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
      data: { label: "Cancel Voucher" },
      position: {  x: -950, y: 370},
      style: {
        background: "linear-gradient(90deg, #F44336, #E57373)"  ,
        color: "#fff",
        fontSize: "28px",
        fontWeight: "bold",
        textAlign: "center",
        width: "250px",
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
      data: { label: "Approved" },
      position:{  x: -650, y: 370},
      style: {
        background: "linear-gradient(90deg, #4CAF50, #81C784)",
        color: "#fff",
        fontSize: "28px",
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
      data: { label: "Approved" },
      position: {  x: -250, y: 370},
      style: {
        background: "linear-gradient(90deg, #4CAF50, #81C784)",
        color: "#fff",
        fontSize: "28px",
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
      data: { label: "Approved" },
      position:{  x: 170, y: 370},
      style: {
        background: "linear-gradient(90deg, #4CAF50, #81C784)",
        color: "#fff",
        fontSize: "28px",
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
      data: { label: "Approver 2" },
      position:{  x:-250, y: 230},
      style: {
        background: "linear-gradient(90deg, #FFF176, #FFEB3B)",
        color: "#fff",
        fontSize: "32px",
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
      data: { label: "Approver 3" },
      position:{  x: 170, y: 230},
      style: {
        background:"linear-gradient(90deg, #FFF176, #FFEB3B)",
        color: "#fff",
        fontSize: "32px",
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
      data: { label: "Cancel Voucher" },
      position:{  x: 30, y: 90},
      style: {
        background: "linear-gradient(90deg, #F44336, #E57373)",
        color: "#fff",
        fontSize: "28px",
        fontWeight: "bold",
        textAlign: "center",
        width: "250px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "13",
      data: { label: "Reject / Failed" },
      position:{  x: 330, y: 90},
      style: {
        background:"linear-gradient(90deg, #F44336, #E57373)",
        color: "#fff",
        fontSize: "28px",
        fontWeight: "bold",
        textAlign: "center",
        width: "250px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "14",
      data: { label: "Voucher Cancelled with proper Bank remark , also messages sent all down hierarchy" },
      position:{  x: 650, y: -150},
      style: {
        background:"linear-gradient(90deg, #800000, #A52A2A)",
        color: "#fff",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        width: "200px",
        height: "200px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
  
    {
      id: "15",
      data: { label: " Data Appear at Bank CIB Portal" },
      position:{  x: 500, y: 300}, 
      style: {
        background:  "linear-gradient(90deg, #2196F3, #64B5F6)",
        color: "#fff",
        fontSize: "22px",
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
      id: "16",
      data: { label: "Message Send to Customer / accounts head with UTR no." },
      position:{  x: 800, y: 150}, 
      style: {
        background:  "linear-gradient(90deg, #f39c12, #f1c40f)",
        color: "#fff",
        fontSize: "22px",
        fontWeight: "bold",
        textAlign: "center",
        width: "200px",
        height: "200px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "17",
      data: { label: "After Approved" },
      position:{  x: 475, y: 450}, 
      style: {
        background: "linear-gradient(90deg, #800000, #A52A2A)",
        color: "#fff",
        fontSize: "28px",
        fontWeight: "bold",
        textAlign: "center",
        width: "250px",
        height: "90px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex", // Add this line
        justifyContent: "center", // Add this line for horizontal centering
        alignItems: "center",
      },
    },
    {
      id: "18",
      data: { label: "Voucher Posted" },
      position:{  x: 800, y: 450}, 
      style: {
        background:  "linear-gradient(90deg, #2196F3, #64B5F6)",
        color: "#fff",
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        width: "300px",
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
      id: "e5-6",
      source: "5",
      target: "6",
      label: "",
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
      id: "e5-7",
      source: "5",
      target: "7",
      label: "",
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
      id: "e8-9",
      source: "8",
      target: "9",
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
      id: "e10-8",
      source: "10",
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
      id: "e11-9",
      source: "11",
      target: "9",
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
      id: "e10-12",
      source: "10",
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
      id: "e11-12",
      source: "11",
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
      id: "e11-13",
      source: "11",
      target: "13",
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
      id: "e13-14",
      source: "13",
      target: "14",
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
      id: "e9-15",
      source: "9",
      target: "15",
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
      id: "e15-17",
      source: "15",
      target: "17",
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
      id: "e17-16",
      source: "17",
      target: "16",
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
      id: "e17-18",
      source: "17",
      target: "18",
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
