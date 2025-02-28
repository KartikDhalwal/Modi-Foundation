"use client";
import React from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import 'reactflow/dist/style.css'; // Import React Flow styles

const AssetManagementFlow = () => {
    const router = useRouter();
    // Define nodes with colors and adjust their positions to start from the top
    const nodes = [
        { id: '1', data: { label: 'Asset Management' }, position: { x: -800, y: -50 }, style: { background: 'linear-gradient(90deg, #4CAF50, #81C784)', color: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', fontSize: '40px', fontWeight: 'bold', textAlign: 'center', width: '290px', height: '150px', transition: 'all 0.3s ease' } },
        { id: '2', data: { label: 'Fixed Asset' }, position: { x: -300, y: 0 }, style: { background: 'linear-gradient(90deg, #f39c12, #f1c40f)', color: '#fff', fontSize: '18px', fontWeight: 'bold', textAlign: 'center', width: '180px', height: '90px', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', transition: 'all 0.3s ease' } },
        { id: '3', data: { label: 'Consumable Asset' }, position: { x: -300, y: 300 }, style: { background: 'linear-gradient(90deg, #3498db, #5dade2)', color: '#fff', fontSize: '18px', fontWeight: 'bold', textAlign: 'center', width: '180px', height: '90px', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', transition: 'all 0.3s ease' } },
        {
            id: '4',
            data: { label: 'Emp. Asset Request' },
            position: { x: -50, y: 100 },
            style: {
                background: 'linear-gradient(90deg, #16a085, #16a085)', // Same color but with gradient styles
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '5',
            data: { label: 'Issue Approval Process' },
            position: { x: 300, y: 100 },
            style: {
                background: 'linear-gradient(90deg, #16a085, #16a085)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '6',
            data: { label: 'Asset In Stock' },
            position: { x: 700, y: 50 },
            style: {
                background: 'linear-gradient(90deg, #16a085, #16a085)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '7',
            data: { label: 'Asset Out Of Stock' },
            position: { x: 700, y: 300 },
            style: {
                background: 'linear-gradient(90deg, #16a085, #16a085)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },

        {
            id: '8',
            data: { label: 'Raise Purchase Order' },
            position: { x: 1000, y: 300 },
            style: {
                background: 'linear-gradient(90deg, #16a085, #16a085)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '9',
            data: { label: 'Purchase Entry' },
            position: { x: 1250, y: 300 },
            style: {
                background: 'linear-gradient(90deg, #16a085, #16a085)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '10',
            data: { label: 'Fixed Asset Creation' },
            position: { x: 1250, y: 0 },
            style: {
                background: 'linear-gradient(90deg, #16a085, #16a085)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '11',
            data: { label: 'Asset Issued' },
            position: { x: 1600, y: 200 },
            style: {
                background: 'linear-gradient(90deg, #16a085, #16a085)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '12',
            data: { label: 'Asset Transfer' },
            position: { x: 1250, y: -150 },
            style: {
                background: 'linear-gradient(90deg, #2ecc71, #2ecc71)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '13',
            data: { label: 'Transfer Request' },
            position: { x: 1050, y: -350 },
            style: {
                background: 'linear-gradient(90deg, #2ecc71, #2ecc71)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '14',
            data: { label: 'Direct Transfer' },
            position: { x: 1400, y: -350 },
            style: {
                background: 'linear-gradient(90deg, #2ecc71, #2ecc71)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '16',
            data: { label: 'Asset Transferred' },
            position: { x: 1700, y: -400 },
            style: {
                background: 'linear-gradient(90deg, #2ecc71, #2ecc71)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '17',
            data: { label: 'Asset Manager' },
            position: { x: 1400, y: -500 },
            style: {
                background: 'linear-gradient(90deg, #2ecc71, #2ecc71)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '18',
            data: { label: 'Service / Maintenance' },
            position: { x: -50, y: -100 },
            style: {
                background: 'linear-gradient(90deg, #f39c12, #f39c12)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '19',
            data: { label: 'Emp. Service Request' },
            position: { x: 300, y: -300 },
            style: {
                background: 'linear-gradient(90deg, #f39c12, #f39c12)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '20',
            data: { label: 'Approval Process' },
            position: { x: 700, y: -300 },
            style: {
                background: 'linear-gradient(90deg, #f39c12, #f39c12)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '21',
            data: { label: 'Service / Maintenance Entry' },
            position: { x: 700, y: -100 },
            style: {
                background: 'linear-gradient(90deg, #f39c12, #f39c12)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '22',
            data: { label: 'Asset Reminders' },
            position: { x: 300, y: -100 },
            style: {
                background: 'linear-gradient(90deg, #f39c12, #f39c12)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '23',
            data: { label: 'Dashboards' },
            position: { x: -750, y: 400 },
            style: {
                background: 'linear-gradient(90deg, #f39c12, #f39c12)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '24',
            data: { label: 'Reports' },
            position: { x: -725, y: -400 },
            style: {
                background: 'linear-gradient(90deg, #e74c3c, #e74c3c)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '25',
            data: { label: 'Emp. Asset Issue Report' },
            position: { x: -50, y: -300 },
            style: {
                background: 'linear-gradient(90deg, #e74c3c, #e74c3c)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '26',
            data: { label: 'Asset Wise Issue Report' },
            position: { x: -50, y: -400 },
            style: {
                background: 'linear-gradient(90deg, #e74c3c, #e74c3c)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '27',
            data: { label: 'Location wise Assets' },
            position: { x: -50, y: -500 },
            style: {
                background: 'linear-gradient(90deg, #e74c3c, #e74c3c)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '28',
            data: { label: 'Asset Pooling' },
            position: { x: 0, y: 400 },
            style: {
                background: 'linear-gradient(90deg, #f1c40f, #f39c12)', // yellow gradient
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '29',
            data: { label: 'Asset Pooling View' },
            position: { x: 400, y: 300 },
            style: {
                background: 'linear-gradient(90deg, #f1c40f, #f39c12)', // yellow gradient
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        },
        {
            id: '30',
            data: { label: 'Asset Reallocation' },
            position: { x: 400, y: 450 },
            style: {
                background: 'linear-gradient(90deg, #f1c40f, #f39c12)', // yellow gradient
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '180px',
                height: '90px',
                borderRadius: '15px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }
        }

    ];
    // Define edges with labels
    const edges = [
        {
            id: 'e1-2', source: '1', target: '2', label: 'Main / Sub Category', animated: true,
            type: 'smoothstep',
            style: { stroke: '#FF6347', strokeWidth: 2 }, // Smooth curved lines
            labelStyle: { fontSize: 16, fontWeight: '500', fill: '#000', textShadow: '1px 1px 2px #fff' },
            markerEnd: { type: 'arrowclosed', color: '#FF6347' },
        },
        {
            id: 'e1-3',
            source: '1',
            target: '3',
            label: 'Main / Sub Category',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#3498db',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e2-4',
            source: '2',
            target: '4',
            label: 'Request',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e3-4',
            source: '3',
            target: '4',
            label: 'Request',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e4-5',
            source: '4',
            target: '5',
            label: 'Approval Process',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#8e44ad',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e5-6',
            source: '5',
            target: '6',
            label: 'In Stock',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e5-7',
            source: '5',
            target: '7',
            label: 'Out of Stock',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e7-8',
            source: '7',
            target: '8',
            label: 'PO',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e8-9',
            source: '8',
            target: '9',
            label: 'Purchase',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e9-10',
            source: '9',
            target: '10',
            label: 'Fixed / Consumable Asset',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e10-11',
            source: '10',
            target: '11',
            label: 'Direct Asset Issued',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-13',
            source: '12',
            target: '13',
            label: 'Request',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-14',
            source: '12',
            target: '14',
            label: 'Direct',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-16',
            source: '6',
            target: '11',
            label: 'Asset Issued',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-17',
            source: '10',
            target: '12',
            label: 'Branch Transfer',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-18',
            source: '14',
            target: '16',
            label: 'Transferred',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-19',
            source: '17',
            target: '16',
            label: 'Transferred',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        }
        ,
        {
            id: 'e12-20',
            source: '2',
            target: '18',
            label: 'Transferred',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-21',
            source: '19',
            target: '20',
            label: 'Approval Process',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-22',
            source: '20',
            target: '21',
            label: 'Service/Maintenance',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-23',
            source: '22',
            target: '21',
            label: 'Service/Maintenance',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-24',
            source: '18',
            target: '19',
            label: 'Service/Maintenance',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-25',
            source: '18',
            target: '22',
            label: 'Service/Maintenance',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        }
        ,
        {
            id: 'e12-26',
            source: '1',
            target: '23',
            label: 'Asset Dashboard',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-27',
            source: '1',
            target: '24',
            label: 'Reports',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-28',
            source: '24',
            target: '25',
            label: 'Reports',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-29',
            source: '24',
            target: '26',
            label: 'Reports',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-30',
            source: '24',
            target: '27',
            label: 'Reports',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-31',
            source: '13',
            target: '17',
            label: 'Request',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-32',
            source: '2',
            target: '28',
            label: 'Asset Pooling',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-33',
            source: '28',
            target: '29',
            label: 'Asset Pooling View',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
        {
            id: 'e12-34',
            source: '29',
            target: '30',
            label: 'Asset Reallocation',
            animated: true,
            type: 'smoothstep', // Use smoothstep for smooth curved lines
            style: {
                stroke: '#4CAF50',
                strokeWidth: 2, // Adjust stroke width to match the new style
            },
            labelStyle: {
                fontSize: 16, // Adjust font size
                fontWeight: '500', // Adjust font weight
                fill: '#000',
                textShadow: '1px 1px 2px #fff' // Add text shadow for better readability
            },
            markerEnd: {
                type: 'arrowclosed',
                color: '#FF6347'
            },
        },
    ];

    const onClickNode = (event, node) => {
        const pageMapping = {
            'Asset Management': '/autovyn/asset/processflow',
            'Fixed Asset': '/autovyn/asset',
            'Consumable Asset': '/autovyn/asset/Consumableasset',
            'Dashboards': '/autovyn/asset/processflow',
            'Reports': '/autovyn/asset/processflow',
            'Location wise Assets': '/autovyn/asset/Reports/LocationWise',
            'Asset Wise Issue Report': '/autovyn/asset/Reports/AssetWiseIssue',
            'Emp. Asset Issue Report': '/autovyn/asset/Reports',
            'Service / Maintenance': '/autovyn/asset/processflow',
            'Emp. Asset Request': '/autovyn/asset/assetissue',
            'Emp. Service Request': '/autovyn/asset/assetservice/EmployeeAssetService',
            'Asset Reminders': '/autovyn/asset/assetreminder/addreminder',
            'Issue Approval Process': '/autovyn/asset/assetissue/assetissueapproval',
            'Approval Process': '/autovyn/asset/assetservice/ApproverGrid',
            'Service / Maintenance Entry': '/autovyn/asset/assetservice',
            'Asset In Stock': '/autovyn/asset/processflow',
            'Asset Out Of Stock': '/autovyn/asset/processflow',
            'Raise Purchase Order': '/autovyn/asset/processflow',
            'Purchase Entry': '/autovyn/asset/PurchaseEntry',
            'Fixed Asset Creation': '/autovyn/asset/ManagerView',
            'Asset Issued': '/autovyn/asset/assetissue/StoreManager',
            'Asset Transfer': '/autovyn/asset/processflow',

            'Transfer Request': '/autovyn/asset/branchtransfer',
            'Asset Manager': '/autovyn/asset/orderview',
            'Direct Transfer': '/autovyn/asset/branchtransfer/Assettransfer',
            'Asset Transferred': '/autovyn/asset/branchtransfer/DirectTransferredAsset',
            'Asset Pooling': '/autovyn/asset/assetpooling',
            'Asset Pooling View': '/autovyn/asset/assetpollingview',
            'Asset Reallocation': '/autovyn/asset/assetreallocation'

        };
        router.push(pageMapping[node.data.label] || '/default-page');
    };

    return (
        <div className='bg-white dark:bg-dark'>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} style={{ height: '75vh', width: '90vw' }}>

            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {/* Red border container */}
                <div style={{
                    position: 'absolute',
                    top: '450px',
                    left: '1050px',
                    width: '320px',
                    height: '120px'
                }}>
                </div>

                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodeClick={onClickNode}
                    fitView
                    fitViewOptions={{ padding: 0.2 }}
                    style={{ width: '100%', height: '100%' }}
                >
                    <Controls />
                    <Background color="#888" gap={16} />
                </ReactFlow>
            </div>

        </motion.div>
    </div>


    );
};

export default AssetManagementFlow;
