"use client";
import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "reactflow/dist/style.css"; // Import React Flow styles

const newcarstocknew = () => {
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
      data: { label: "Stock Management Process" },
      position: { x: -1100, y: -600 },
      style: {
        background: colors[0],
        color: "#fff",
        fontSize: "30px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "80px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "2",
      data: { label: "Stock Input" },
      position: { x: -550, y: -600 },
      style: {
        background: colors[2],
        color: "#fff",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "80px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "3",
      data: { label: "Excel Import" },
      position: { x: 0, y: -600 },
      style: {
        background: colors[4],
        color: "#fff",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "80px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "4",
      data: { label: "Stock data loaded into the system" },
      position: { x: 850, y: -600 },
      style: {
        background: colors[6],
        color: "#fff",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "800px",
        height: "80px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "5",
      data: { label: "Stock Movement" },
      position: { x: 700, y: -450 },
      style: {
        background: colors[7],
        color: "#fff",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    
    {
      id: "6",
      data: { label: "Stock View" },
      position: { x: -550, y: -450 },
      style: {
        background: colors[2],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },

       
    {
      id: "7",
      data: { label: "Stock Allotment" },
      position: { x: -1100, y: -300 },
      style: {
        background: colors[3],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
       
    {
      id: "8",
      data: { label: "Stock De-allotment" },
      position: { x: -550, y: -300 },
      style: {
        background: colors[5],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
       
    {
      id: "9",
      data: { label: "QR Generation" },
      position: { x: 0, y: -300 },
      style: {
        background: colors[6],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
       
    {
      id: "10",
      data: { label: "Stock Allocated" },
      position: { x: -1100, y: -110 },
      style: {
        background: colors[7],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
       
    {
      id: "11",
      data: { label: "Stock De-allocated" },
      position: { x: -550, y: -110 },
      style: {
        background: colors[8],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
       
    {
      id: "12",
      data: { label: "QR Codes Created" },
      position: { x: 0, y: -110 },
      style: {
        background: colors[6],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "13",
      data: { label: "QR Processing" },
      position: { x: 700, y: -110 },
      style: {
        background: colors[0],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "14",
      data: { label: "QR Print" },
      position: { x: 1300, y: -110 },
      style: {
        background: colors[2],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "15",
      data: { label: "QR Scan" },
      position: { x: 1300, y: 50 },
      style: {
        background: colors[4],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "16",
      data: { label: "QR-Based Oprations" },
      position: { x:-100, y: 50 },
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
      id: "17",
      data: { label: "Vechicle Audit" },
      position: { x: -1100, y: 250 },
      style: {
        background: colors[2],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "18",
      data: { label: "Internal Movement" },
      position: { x: -550, y: 250 },
      style: {
        background: colors[3],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "19",
      data: { label: "Branch Transfer" },
      position: { x: 0, y: 250 },
      style: {
        background: colors[4],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
 
     {
      id: "20",
      data: { label: "Vechcle Delivery" },
      position: { x: 700, y: 250 },
      style: {
        background: colors[5],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "21",
      data: { label: "Vechicle Data Verified" },
      position: { x: -1100, y: 420 },
      style: {
        background: colors[6],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "30px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "22",
      data: { label: "Stock Transferred Internally" },
      position: { x: -550, y: 420 },
      style: {
        background: colors[7],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "30px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      id: "23",
      data: { label: "Stock Moved to another Branch" },
      position: { x: 0, y: 420 },
      style: {
        background: colors[8],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "30px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
 
     {
      id: "24",
      data: { label: "vechicle Delivered to Customer" },
      position: { x: 700, y: 420 },
      style: {
        background: colors[6],
        color: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "30px",
        fontWeight: "bold",
        textAlign: "center",
        width: "400px",
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
      label:"",
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
      id: "e6-7",
      source: "6",
      target: "7",
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
      id: "e6-9",
      source: "6",
      target: "9",
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
      id: "e7-10",
      source: "7",
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
  
    {
      id: "e8-11",
      source: "8",
      target: "11",
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
      id: "e9-12",
      source: "9",
      target: "12",
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
      id: "e12-13",
      source: "12",
      target: "13",
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
      id: "e14-15",
      source: "14",
      target: "15",
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
      id: "e15-16",
      source: "15",
      target: "16",
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
      id: "e16-17",
      source: "16",
      target: "17",
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
      id: "e16-18",
      source: "16",
      target: "18",
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
    id: "e16-19",
      source: "16",
      target: "19",
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
      id: "e16-20",
      source: "16",
      target: "20",
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
      id: "e17-22",
      source: "17",
      target: "21",
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
      id: "e18-22",
      source: "18",
      target: "22",
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
      id: "e19-23",
      source: "19",
      target: "23",
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
      id: "e20-24",
      source: "20",
      target: "24",
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

export default newcarstocknew;
