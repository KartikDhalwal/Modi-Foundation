"use client";

import { Button, Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import ProductInfo from "../productinfo/page";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/dailog";
import axios from "axios";
import { FaArrowDown } from "react-icons/fa";
import FileDownloader from "@/app/components/FileDownloader";

const Produts = [
  {
    id: 1,
    name: "Autovyn Payroll System",
    value: "5",
    photo: "/products/payease.jpeg",
    photoInd: "/payroll_Img.png",
    HeadLine:
      "The Future of Payroll - A Must-Have for Every Dealer, Now at Your Fingertips!",
    DetHeadLine:
      "Transform your payroll with automation that ensures accuracy and saves time. Discover how seamless, error-free payroll can revolutionize your business operations!",
    content:
      "Revolutionize your payroll processing with automation that eliminates errors and reduces manual effort. Say goodbye to delays and inconsistencies, and ensure timely, accurate payouts every time. Our solution integrates seamlessly with your operations, saving you valuable time and resources. Stay compliant and transparent with real-time payroll insights. Experience hassle-free payroll management designed for dealers like you!",
    featureimg: "/payroll/Interview_process_img.jpg",
    Features: [
      {
        id: 1,
        title: "Automated Payroll & Attendance Management",
        description:
          "Streamlines payroll processing and integrates with attendance systems, ensuring accurate salary calculations and leave management.",
      },
      {
        id: 2,
        title: "Real-Time Integration & Compliance",
        description:
          "Ensures seamless integration with accounting systems for real-time updates, while managing PF/ESI calculations and legal compliance.",
      },
      {
        id: 3,
        title: "Flexible Shift, Loan, and Bonus Management",
        description:
          "Offers customizable shift management, automated loan/advance tracking, and bonus/incentive calculations to meet diverse organizational needs.",
      },
      {
        id: 4,
        title: "Employee Self Service & Pay Slip Generation",
        description:
          "Enables employees to access and manage their profiles, apply for leave, and generate pay slips via a self-service portal.",
      },
      {
        id: 5,
        title: "Comprehensive Reporting & EXCEL Import",
        description:
          "Provides customizable reports with Excel import options, making data management and analysis efficient and accessible.",
      },
      {
        id: 6,
        title: "Employee Onboarding, Exit, & Interview Process",
        description:
          "Streamlines the interview process, onboarding, and employee exit management, including gatepass issuance for smooth transitions.",
      },
    ],
    submodule: [
      {
        name: "Interview Process Management",
        desc: "Simplifies recruitment with streamlined candidate tracking and interview scheduling.",
        img: "/payroll/interview_icon.png",
      },
      {
        name: "Employee Registry-Master Requirement",
        desc: "Centralized employee record management for easy access and updates.",
        img: "/payroll/EMP_MST_I-removebg-preview.png",
      },
      {
        name: "Attendance Tracking Solution",
        desc: "Tracks and reports real-time attendance for accurate workforce management.",
        img: "/payroll/ATTENDANCE_I-removebg-preview.png",
      },
      {
        name: "Employee Gatepass Management",
        desc: "Manages employee entry/exit with gatepass tracking for security.",
        img: "/payroll/Employee_gatepass_icon.png",
      },
      {
        name: "Mispunch Fix",
        desc: "Easily corrects attendance discrepancies for accurate payroll.",
        img: "/payroll/MISSPUNCH_I2-removebg-preview.png",
      },
      {
        name: "Leave Management",
        desc: "Simplifies leave requests, approvals, and tracking.",
        img: "/payroll/leavenew.png",
      },
      {
        name: "Device Activity",
        desc: "Monitors employee activity on company devices for security.",
        img: "/payroll/DEVICELOGS_I-removebg-preview.png",
      },
      {
        name: "Attendance Punch",
        desc: "Captures real-time attendance data for payroll accuracy.",
        img: "/payroll/PUNCHING_I-removebg-preview.png",
      },
      {
        name: "Geofence Tracking",
        desc: "Tracks employee location for attendance and area compliance.",
        img: "/payroll/LOCATIONLOGS_I-removebg-preview.png",
      },
      {
        name: "Team Records",
        desc: " Centralizes team data for easy access and management.",
        img: "/payroll/TEAMSLOG_I-removebg-preview.png",
      },
      {
        name: "Budget Control",
        desc: "Manages and tracks budget allocation and spending.",
        img: "/payroll/BUDGET_I-removebg-preview.png",
      },
      {
        name: "Salary Computation",
        desc: "Automates salary calculations for timely, accurate payroll.",
        img: "/payroll/SALARYCALCULATION_I-removebg-preview.png",
      },
      {
        name: "Activity Reports",
        desc: "Generates report⁫s on employee activities and performance.",
        img: "/payroll/reports1_k-removebg-preview.png",
      },
      {
        name: "Exit Procedure",
        desc: "Streamlines the employee exit process for efficiency.",
        img: "/payroll/exit_procedure_icon.png",
      },
      {
        name: "Loan and Advance Management",
        desc: "Tracks employee loans and repayment schedules.",
        img: "/payroll/loan_icon.png",
      },
      {
        name: "Letter Maker",
        desc: "Automates the creation of employee letters for efficiency.",
        img: "/payroll/lettermaker_icon.png",
      },
      {
        name: "Activity Calendar",
        desc: "Tracks important dates and events for effective planning.",
        img: "/payroll/CALENDAR_I.png",
      },
      {
        name: "Employee Self Service",
        desc: "lets employees handle personal, professional, and administrative tasks like updating details, accessing payslips, and submitting requests independently.",
        img: "/payroll/ess.png",
      },
      {
        name: "Multiple Approvals",
        desc: "process where requests pass through several tiers of approval, ensuring compliance, accuracy, and accountability at each level.",
        img: "/payroll/multiapproval.png",
      },
      {
        name: "Auto Calculation",
        desc: "automatically computes deductions based on set rules, ensuring accuracy.",
        img: "/payroll/autocalculation.png",
      },
    ],
    screenimage: [
      "/payroll/ss5.jpeg",
      "/payroll/ss1.jpg",
      "/payroll/ss2.jpg",
      "/payroll/ss3.jpg",
      "/payroll/ss4.jpg",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A dealer struggled with managing payroll manually, leading to errors in salary calculations, tax deductions, and compliance issues. The HR team spent significant time handling work hours tracking, processing payroll, and ensuring compliance, which led to inefficiencies and increased administrative workload.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Payroll: Payroll calculations were done manually, causing errors and delays.",
          "Inefficient Time Tracking: Employee work hours were tracked manually, leading to inaccuracies.",
          "Tax & Deductions: Taxes and withholdings were calculated manually, increasing the risk of errors.",
          "Compliance Management: Manual handling of tax laws and regulations, risking penalties.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Time-Consuming: Manual processes drained HR team resources.",
          "Calculation Errors: Mistakes in pay, tax, and bonuses resulted in discrepancies.",
          "Compliance Risks: Difficulty ensuring tax law compliance.",
          "Limited Reporting: Difficulty generating accurate payroll reports.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Biometric Integration: Automated work hour tracking, reducing errors.",
          "Automated Payroll: Accurate salary calculations, including taxes and bonuses.",
          "Approval Workflow: Streamlined process with automated approvals.",
          "Compliance Automation: Ensured adherence to tax laws and regulations.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 2,
    name: "Asset Management",
    value: "5",
    photo: "/products/ASSET_FRONT_IMG.png",
    photoInd: "/asset/mainasset.png",
    HeadLine: "Smart assets, smarter business.",
    flow: "AssetManagementFlow",
    DetHeadLine:
      "Seamlessly orchestrating assets from acquisition to allocation, unlocking efficiency at every turn. Empowering your team with smarter management, faster workflows, and greater control",
    content:
      "Revolutionize your asset management with a solution that simplifies tracking, categorization, and allocation. Say goodbye to stock shortages and inefficient workflows, ensuring assets are always in the right place at the right time. Our system seamlessly integrates with your operations, automating purchase orders, approvals, and asset transfers. Stay on top of servicing and maintenance with timely reminders and notifications. Experience hassle-free asset management designed to boost efficiency and control for businesses like yours!",
    featureimg: "/asset/features.jpg",
    Features: [
      {
        id: 1,
        title: "Asset Categorization & Tracking",
        description:
          "Efficiently manage fixed and consumable assets across multiple categories and subcategories, with unique serial numbers for easy tracking.",
      },
      {
        id: 2,
        title: "Stock Management & Alerts",
        description:
          "Keep an eye on inventory levels with real-time stock views and automated purchase order requests for low-stock assets.",
      },
      {
        id: 3,
        title: "Approval Workflows",
        description:
          "Streamlined approval processes for purchase orders, asset issuance, servicing requests, and transfers, ensuring smooth decision-making.",
      },
      {
        id: 4,
        title: "Asset Pooling & Reallocation",
        description:
          "Manage asset groups under one asset for easier tracking and facilitate reallocation between departments or branches.",
      },
      {
        id: 5,
        title: "Asset Service & Maintenance",
        description:
          "Empower employees to request service for their assets, with approvals and reminders for timely maintenance.",
      },
      {
        id: 6,
        title: "Reminder & Notification System",
        description:
          "Set personalized asset reminders, with automatic notifications sent to employees via WhatsApp for critical actions or updates.",
      },
    ],
    submodule: [],
    screenimage: [
      "/asset/ss1.png",
      "/asset/ss2.PNG",
      "/asset/ss3.PNG",
      "/asset/ss4.PNG",
      "/asset/ss5.PNG",
      "/asset/ss6.jpeg",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A multi-location dealer faced inefficiencies in tracking and managing assets such as machinery, tools, and IT equipment. Manual processes resulted in asset mismanagement, increased costs and operational disruptions",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Asset Tracking: Reliance on spreadsheets and paper records led to data inaccuracies and frequent asset misplacement.",
          "Reactive Maintenance: Equipment was maintained only after failures, resulting in frequent downtime and high repair costs.",
          "Uncontrolled Procurement: A lack of real-time asset visibility caused unnecessary purchases and inventory pile-ups.",
          "Limited Reporting: Fragmented and outdated asset data delayed decision-making, negatively impacting financial planning.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Inaccurate data and frequent asset loss",
          "High costs stemming from emergency repairs and unplanned downtime",
          "Overspending due to unnecessary and poorly timed purchases",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Centralized Asset Database: Implemented real-time tracking of assets across all locations to ensure data accuracy, minimize asset loss, and increase accountability.",
          "Automated Preventive Maintenance: Introduced scheduled maintenance to proactively address equipment issues, reduce repair costs, and extend the lifespan of assets.",
          "Optimized Asset Utilization: Real-time asset tracking and management ensured efficient use of assets, reducing unnecessary purchases and improving resource allocation.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 3,
    name: "Autovyn BankConnect",
    value: "5",
    photo: "/products/banking_new.jpg",
    photoInd: "/banking/Banking inside_img.png",
    HeadLine:
      "Pay Smarter, Not Harder: Real-Time Bank Integration for Seamless Transactions!",
    DetHeadLine:
      "Autovyn’s Banking Module simplifies payment approvals and transfers with real-time processing and secure mobile app access.",
    flow: "/dailycaseupdation/flow.png",
    featureimg: "/banking/Banking_inside2_img.jpg",
    content:
      "Autovyn’s Banking Module streamlines the entire payment process by centralizing information and automating approvals. Payments are processed efficiently, with no need for manual cheques or signatures. The mobile app ensures real-time approvals, making transactions faster and more secure.",
    Features: [
      {
        id: 1,
        title: "Real-Time Payment Processing",
        description: "Instant payments without manual beneficiary addition.",
      },
      {
        id: 2,
        title: "Multi-Level Approval Workflow",
        description: "Customizable approvals before payment execution.",
      },
      {
        id: 3,
        title: "Easy Document Uploads",
        description:
          "Simplify invoice and cheque management with seamless uploads.",
      },
      {
        id: 4,
        title: "Single OTP for Multiple Payments",
        description: "Secure payments with one-time authentication.",
      },
      {
        id: 5,
        title: "Automated Bank Reconciliation",
        description: "Effortless reconciliation, eliminating manual errors.",
      },
      {
        id: 6,
        title: "Real-Time Bank Statement View",
        description:
          "Access and monitor bank statements directly within the system.",
      },
    ],
    submodule: [
      {
        name: "Vendor Payment",
        desc: "Streamline vendor payments with automated processing, ensuring timely and secure transactions.",
        img: "/banking/Vendor_Payment_Icon.png",
      },
      {
        name: "HSBC Credit Card",
        desc: "Easily manage and process payments through your HSBC credit card, with seamless integration for tracking and approvals.",
        img: "/banking/hsbc_Icon.png",
      },
      {
        name: "MSIL (Virtual ID) Payment",
        desc: "Simplify payments using MSIL virtual ID, offering a secure and anonymous transaction experience.",
        img: "/banking/MSIL.png",
      },
      {
        name: "Customer Refund Payment",
        desc: "Effortlessly process customer refunds, ensuring quick and accurate payment handling.",
        img: "/banking/Refund.png",
      },
      {
        name: "Self Bank Transfer",
        desc: "Enable employees or users to transfer funds between accounts securely, with full transaction tracking.",
        img: "/banking/bank_transfer.png",
      },
      {
        name: "Bank Statement View",
        desc: "View and analyze bank statements in real-time, making financial tracking and reconciliation easier.",
        img: "/banking/bank_statement.png",
      },
    ],
    screenimage: [
      "/banking/ss1.jpeg",
      "/banking/ss2.jpeg",
      "/banking/ss3.jpeg",
      "/banking/ss4.jpeg",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A dealer’s accounting team faces inefficiencies in processing vendor and customer refund payments, relying on manual processes for approval via emails, WhatsApp, and physical signatures for cheques, leading to delays and errors in payment processing.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Payment Preparation: Accounts team handles cheque/NEFT/RTGS creation after approval.",
          "Decentralized Approvals: Approval via email, WhatsApp, or physical signatures from managers/CEO.",
          "Cheque Signing Delays: Directors or CEO manually sign cheques, causing delays.",
          "New Beneficiary Setup: Beneficiary must be set up and approved on the bank portal before payments.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Delays in Approvals: Unavailability of signatories causes payment delays.",
          "Missed Information: Decentralized approvals lead to overlooked payment details.",
          "Manual Efforts & Errors: Manual cheque signing and email approvals result in inefficiencies.",
          "Beneficiary Setup Delays: Long approval process for new beneficiaries slows payments.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Centralized Payment Processing: Invoices and documents uploaded directly into the system.",
          "Multi-Level Approval Workflow: Payments pass through multiple levels for thorough review.",
          "Mobile Approval System: Approvals via Autovyn app, no need for physical signatures.",
          "Automated Bank Reconciliation: Automatically reconciles payments with bank data.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 4,
    name: "New Car Docket Digitalization",
    value: "4",
    photo: "/products/Presale_img.jpg",
    photoInd: "/Docket/IcmTracker1.png",
    HeadLine: "From Manual to Magical: Simplify Your Sales Journey",
    DetHeadLine:
      "AUTOVYN's New Car Sales Module transforms dealership operations by centralizing customer data, automating real-time tracking, streamlining approval workflows, and ensuring accurate invoicing—all designed to reduce errors, save time, and enhance customer satisfaction.",
    flow: "MGAApprovalFlow",
    featureimg: "/Docket/IcmTracker2.png",
    content:
      "Unlock the power of efficiency with AUTOVYN’s New Car Sales Module. Say goodbye to manual chaos and hello to a smooth, automated sales journey. From instant approvals to seamless team collaboration, this module redefines how your dealership handles every sale—faster, smarter, and more connected, ensuring both your team and customers are always ahead.",
    Features: [
      {
        id: 1,
        title: "Real-Time Sales Tracking",
        description:
          "Monitor every stage of the sales process instantly, ensuring no lead is left behind.",
      },
      {
        id: 2,
        title: "Instant Approval Workflow",
        description:
          "Streamline approvals, speeding up decision-making and eliminating delays.",
      },
      {
        id: 3,
        title: "Centralized Customer Data",
        description:
          "Access detailed customer information quickly for better relationship management and follow-ups.",
      },
      {
        id: 4,
        title: "Automated Document Handling",
        description:
          "Simplify paperwork and reduce errors with automated document creation and storage.",
      },
      {
        id: 5,
        title: "Accurate Invoicing & Pricing",
        description:
          "Ensure precise billing and pricing with built-in invoicing features.",
      },
    ],
    submodule: [],
    screenimage: [
      "/Docket/ss1.jpeg",
      "/Docket/ss2.jpeg",
      "/Docket/ss3.jpeg",
      "/Docket/ss4.jpeg",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A dealership operating across multiple locations faced challenges in managing the stages of the new car sales process. Manual workflows caused delays, errors, and customer dissatisfaction due to inefficient communication and coordination among designated personnel.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Docket Creation: Relied on paper forms and basic emails, making the process slow and prone to errors.",
          "Limited Tracking: Lack of real-time tracking made it difficult to monitor and address pending tasks.",
          "No Centralized Approval System: Approvals were inconsistent and delayed, slowing down the overall sales cycle.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Ineffective management of customer data and documents.",
          "Difficulty in tracking delivery status and following up promptly.",
          "Delayed and inconsistent approvals led to lost sales opportunities.",
          "High administrative costs and frequent errors due to manual efforts.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Real-Time Tracking: Provides instant visibility into the status of all new car sales stages, enabling faster follow-ups and lead conversions.",
          "Instant Approval Workflow: Centralizes and streamlines the approval process, reducing delays and improving response times.",
          "Accurate Pricing: Automated invoicing and billing ensure precision, eliminating errors and boosting management confidence.",
          "Customer Information Management: A centralized database stores all customer details for easy reference, enabling better customer relationship management and targeted marketing efforts.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 5,
    name: "Demo Car GatePass",
    value: "4",
    photo: "/products/DemoCARGatePass.jpg",
    photoInd: "/democar/Main Page.png",
    HeadLine: "Where security meets simplicity in every gatepass!",
    DetHeadLine:
      "Streamline your gatepass management with automation that ensures smooth approvals and enhances security. Discover how a seamless, efficient system can elevate your organizations access control and workflow!",
    flow: "DemocarGatePass",
    featureimg: "/democar/Features.png",
    content:
      "Revolutionize your gatepass management with automation that eliminates manual errors and streamlines the approval process. Say goodbye to delays and confusion, ensuring quick and secure access every time. Our solution integrates seamlessly with your operations, saving valuable time and enhancing security. Stay compliant and transparent with real-time gatepass tracking. Experience hassle-free access control designed for organizations like yours! With multi-level approvals and instant notifications, every step of the process is handled efficiently. Ensure smooth, error-free access management that empowers both employees and security teams.",
    Features: [
      {
        id: 1,
        title: "Automated Request Submission",
        description:
          "Employees can easily submit gatepass requests through a user-friendly interface, ensuring quick and hassle-free applications.",
      },
      {
        id: 2,
        title: "Multi-Level Approval Workflow",
        description:
          "The system allows requests to be routed through designated approvers, ensuring proper review and authorization at each level",
      },
      {
        id: 3,
        title: "Real-Time Notifications",
        description:
          "Employees and approvers receive instant notifications at each stage of the gatepass process, keeping everyone informed in real-time.",
      },
      {
        id: 4,
        title: "Guard Verification",
        description:
          "Once approved, the gatepass is validated by designated guards to ensure security and compliance before granting access.",
      },
      {
        id: 5,
        title: "Comprehensive Access Control",
        description:
          "The system maintains a detailed log of all gatepass requests and approvals, ensuring full transparency and compliance with access control policies.",
      },
      {
        id: 6,
        title: "Seamless Integration",
        description:
          "The gatepass system integrates with other organizational tools, enhancing operational efficiency and supporting a unified access management approach.",
      },
    ],
    submodule: [],
    screenimage: [
      "/democar/ss1.PNG",
      "/democar/ss2.PNG",
      "/democar/ss5.PNG",
      "/democar/ss6.jpg",
      "/democar/ss7.jpg",
      "/democar/ss8.jpg",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "clients who might use this module can be Automobile New Car dealers and Automobile used car dealers",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Paper Forms: Employees fill out paper forms to request a demo car.",
          "Manual Signatures: Managers and approvers physically sign paper forms to approve or deny requests",
          "Logbooks: Physical logbooks at the security or fleet management desk where details of the demo car’s check-in and check-out are recorded.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Time-Consuming: Manual processes are slow, requiring significant time for filling forms, obtaining signatures, and logging details.",
          "Delays: Approvals can be delayed due to the unavailability of approvers or communication lags.",
          "Human Error: Manual data entry and logging can lead to errors, such as incorrect car assignments or booking overlaps.",
          "Lost Forms: Paper forms and logbooks can be misplaced, leading to confusion and lack of accountability.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Online Forms: Allow employees to submit requests through a web-based or mobile application.",
          "Automated Workflows: Route requests automatically to the relevant approvers, with notifications and reminders to expedite the process.",
          "Digital Logs: Maintain a digital log of all demo car check-ins and check-outs, accessible in real-time.",
          "Centralized Database: Store all request and approval data in a centralized system, ensuring accurate and complete records",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 6,
    name: "New Car Discount Approval",
    value: "4",
    photo: "/products/discount.jpeg",
    photoInd: "/discount/dISCOUNT_FINAL_1.png",
    HeadLine: "Fuel Your Sales Engine with the Right Offers at the Right Time",
    DetHeadLine:
      "The Discount Module enables dealers to create, apply, and track discounts with ease. It offers Excel import, performance dashboards, and detailed reporting for efficient discount management.",
    flow: "Discount",
    featureimg: "/discount/Discount_inside_2.png",
    content:
      "Capture more customers and increase loyalty with our Discount Module. Create and manage personalized offers effortlessly, driving repeat business and enhancing your dealership’s profitability. Track, analyze, and optimize your discounts in real-time, ensuring every deal delivers maximum value for your business.",
    Features: [
      {
        id: 1,
        title: "User-Friendly Interface",
        description:
          "The discount approval application is easy to use, accessible on mobile, tablet, or PC.",
      },
      {
        id: 2,
        title: "Real-Time Tracking & Notifications",
        description:
          "Provides real-time tracking and instant notifications for discount requests, ensuring effective communication.",
      },
      {
        id: 3,
        title: "Role-Specific Booking Data Access",
        description:
          "RM and SRM can view and raise discount requests only for their own bookings.",
      },
      {
        id: 4,
        title: "Flexible Approval Process",
        description:
          "Dealers can define approval levels and processes as per their specific requirements.",
      },
      {
        id: 5,
        title: "Customizable Criteria Filters",
        description:
          "Dealers can set minimum criteria for MGA amount, loan type, and billing date, with color-coded indicators to show criteria matches.",
      },
      {
        id: 6,
        title: "Efficient Re-approval Process",
        description:
          "Easy comparison of previous and current request data for quick re-approval.",
      },
    ],
    submodule: [],
    screenimage: [
      "/discount/softwarescreen.jpeg",
      "/discount/softwarescreen1.png",
      "/discount/softwarescreen2.jpg",
      "/discount/softwarescreen3.png",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A Dealer group faced inefficiencies in managing additional car discount requests, leading to delays and data discrepancies.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Decentralized Request Process: Discount requests shared via WhatsApp/email, causing tracking difficulties.",
          "Manual Approvals: GM manually approved/rejected requests via the same channels.",
          "Data Discrepancies: Difficulty matching discount data with actual vehicle information during delivery.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Missed critical data and approval delays.",
          "Time-consuming search for discount requests.",
          "Incorrect discounts affecting profitability due to data misalignment.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Centralized System: All discount data stored and easily retrievable from a single platform.",
          "Automated Approvals: Three-level approval system with automated notifications.",
          "Data Validation: System cross-checks discount requests with actual data during vehicle delivery to prevent errors.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 7,
    name: "Finance Payout Tracker",
    value: "4",
    photo: "/products/finance.jpg",
    photoInd: "/payout/PAYOUT_INSIDE_IMG_1.png",
    HeadLine: "Track Payouts, Analyze Performance, Maximize Returns!",
    DetHeadLine:
      "Track finance payouts by VIN with automated GST calculations and centralized financier data. Compare monthly performance, generate invoices, and streamline communication with automatic document uploads and email notifications. Optimize your payout process for smarter business decisions.",
    flow: "Financepayout",
    featureimg: "/payout/PAYOUT_IMG2.png",
    content:
      "The Finance Payout Tracker gives dealers complete control over their finance payouts. By simplifying data tracking, automating processes, and providing real-time insights, this module helps you make informed decisions, optimize payouts, and improve financial operations—leading to enhanced profitability and efficiency.",
    Features: [
      {
        id: 1,
        title: "VIN-Based Payout Tracking",
        description:
          " Easily track payouts by VIN, ensuring accurate and detailed records.",
      },
      {
        id: 2,
        title: "Automated GST Calculation",
        description:
          "Automatically calculate GST for both GST and non-GST payouts.",
      },
      {
        id: 3,
        title: "Centralized Financier Data",
        description:
          "Access all financier-related data in one place for better analysis.",
      },
      {
        id: 4,
        title: "Monthly & Quarterly Comparison",
        description:
          "Compare payouts and performance over time for better decision-making.",
      },
      {
        id: 5,
        title: "Invoice Generation",
        description:
          "Automatically generate finance payout invoices directly from the system.",
      },
      {
        id: 6,
        title: "Document Upload & Notifications",
        description:
          "Upload documents and send real-time email notifications to financiers for smooth communication.",
      },
    ],
    submodule: [],
    screenimage: [
      "/payout/Picture1.png",
      "/payout/Picture2.png",
      "/payout/Picture3.png",
      "/payout/Picture4.png",
      "/payout/Picture5.png",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A dealer faces challenges in tracking and analyzing finance payouts, relying on manual processes in Excel, leading to inaccuracies and incomplete data.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Data Entry: Finance payouts are manually tracked in Excel, causing errors.",
          "No Comparison: Struggles with comparing payouts from different financiers.",
          "Incomplete Tracking: VIN-based tracking is not streamlined.",
          "No Performance Metrics: No clear way to evaluate finance managers' performance.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Inaccurate Data: Manual entry leads to errors.",
          "Lack of Insights: No analysis on the best payout financiers.",
          "Inconsistent Tracking: Hard to track payouts over time.",
          "Poor Decision-Making: Lack of data to choose the best financier.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "VIN-wise Tracking: Tracks payouts at the VIN level for precision.",
          "Financier Comparison: Compares payouts from different financiers.",
          "Month-End Reconciliation: Automated reconciliation of payouts.",
          "Finance Target Tracking: Monitors finance managers' performance and targets.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 8,
    name: "Employee Incentive Calculation",
    value: "4",
    photo: "/products/Incentive_img.jpg",
    photoInd: "/incentive/icentive-2.png",
    HeadLine: "Fueling Success with Smart Incentives!",
    DetHeadLine:
      "AUTOVYN's Incentive Module automates rewards, tracks performance in real-time, and boosts productivity through transparent and efficient incentive management",
    flow: "Incentive",
    featureimg: "/incentive/incentive-1.jpg",
    content:
      "Unlock the full potential of your team with AUTOVYN Incentive Module. Designed to automate rewards and track performance in real-time, it makes motivating your workforce effortless. With custom incentive plans, seamless approvals, and error-free payouts, this module transforms the way dealerships reward successâ€”driving performance, boosting morale, and eliminating the administrative hassle.",
    Features: [
      {
        id: 1,
        title: "Automated Incentive Calculations",
        description:
          "Streamlines reward distribution with accurate, rule-based calculations.",
      },
      {
        id: 2,
        title: "Real-Time Performance Tracking",
        description:
          "Monitor progress and performance with live updates and dashboards.",
      },
      {
        id: 3,
        title: "Customizable Incentive Plans",
        description:
          "Create personalized incentive structures tailored to roles, targets, and goals.",
      },
      {
        id: 4,
        title: "Seamless Approval Workflow",
        description:
          "Simplify and speed up multi-level approval processes for quick reward distribution.",
      },
      {
        id: 5,
        title: "Error-Free Payouts",
        description:
          "Ensure accurate and timely payouts with automated invoicing and tracking.",
      },
      {
        id: 5,
        title: "Centralized Reporting",
        description:
          "Generate detailed reports to analyze incentive effectiveness and team performance.",
      },
    ],
    submodule: [],
    screenimage: [
      "/incentive/ss1.jpeg",
      "/incentive/ss2.jpeg",
      "/incentive/ss3.jpeg",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A dealership faced challenges in giving incentives to RM/SRM for new car sales due to the decentralized nature of data collection. Sales data was often spread across various channels like WhatsApp groups or email threads, making it difficult to consolidate, track, and calculate incentives accurately. This fragmented approach resulted in overlooked information, data gaps, and errors.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Incentive Calculation: Dealers collected sales data manually from multiple sources and applied the policy manually to calculate incentives.",
          "Fragmented Data Collection: Data was scattered across WhatsApp groups, emails, and other informal channels, leading to inefficiencies in data gathering.",
          "Time-Consuming Processes: Gathering data for different policies (e.g., new car sales, old car purchases, extended warranties, etc.) was a manual and time-consuming process.",
          "Tracking Discrepancies: Discrepancies between actual sales data and the accounts team’s reports were difficult to reconcile, leading to delays and errors in reporting.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Decentralized data collection and fragmented sources, leading to data gaps and inefficiencies.",
          "Time-consuming manual processes to gather data for different policies.",
          "Difficulty in tracking discrepancies between sales data and accounts reports, causing delays and errors.",
          "Lack of transparency and consistency in the incentive calculation process.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Centralized Database: Autovyn consolidates all data in one unified database, ensuring easy access and efficient search capabilities across all levels.",
          "Dealer Policy Setup: Allows dealers to quickly set up different policies for incentives related to new car sales, accessories, and other criteria.",
          "Automated Incentive Calculation: The system automates the incentive calculation process, saving time and reducing the chances of errors.",
          "Streamlined Data Flow: Centralized information and real-time access to sales data ensures accurate and consistent calculations, improving transparency.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 9,
    name: "Booking Cancellation & Refund",
    value: "4",
    photo: "/products/booking_refund_img.jpg",
    photoInd: "/bookingrefund/BOOKING_REFUND-1.png",
    HeadLine: "Effortless Refunds, Transparent Processes, Happy Customers",
    DetHeadLine:
      "Manage refunds with precision through automated tracking, accurate approvals, and real-time updates, ensuring transparency and customer trust.",
    flow: "bookingrefund",
    featureimg: "/bookingrefund/BOOKING_REFUND-2.jpg",
    content:
      "Lost in refund chaos? Turn it into clarity! With automated tracking, real-time updates, and seamless approvals, our Booking Refund Process ensures accuracy and builds trust, making every refund hassle-free for you and your customers",
    Features: [
      {
        id: 1,
        title: "Automated Refund Tracking",
        description: "Monitors refund progress with real-time updates.",
      },
      {
        id: 2,
        title: "Multi-Level Approvals",
        description: "Ensures accurate and transparent refund authorizations.",
      },
      {
        id: 3,
        title: "Document Management",
        description:
          "Simplifies uploading and organizing refund-related documents.",
      },
      {
        id: 4,
        title: "Reapproval Functionality",
        description:
          "Allows corrections and resubmissions for error-free processing.",
      },
      {
        id: 5,
        title: "Integrated Reporting",
        description:
          "Provides detailed insights for better financial oversight.",
      },
      {
        id: 6,
        title: "Accounting Integration",
        description: "Links refunds directly with existing financial systems.",
      },
    ],
    submodule: [],
    screenimage: [
      "/bookingrefund/ss1.jpeg",
      "/bookingrefund/ss2.jpeg",
      "/bookingrefund/ss3.jpeg",
      "/bookingrefund/ss4.jpeg",
      "/bookingrefund/ss5.jpeg",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "Organizations frequently encounter challenges such as manual data entry errors, inconsistent refund policies, and the absence of real-time tracking in their booking refund processes. These inefficiencies result in delays, customer dissatisfaction, and financial inconsistencies.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Data Entry: Relied on spreadsheets and paper forms, leading to frequent errors and time-consuming processes.",
          "Inconsistent Refund Policies: A lack of standardized procedures caused confusion and customer grievances.",
          "No Real-Time Tracking: Absence of real-time updates hindered visibility into the refund status, leading to delayed resolutions.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "High error rates due to manual entries.",
          "Delayed refunds causing dissatisfaction among customers.",
          "Difficulty in maintaining financial accuracy and accountability.",
          "Inefficiencies in managing approvals and ensuring policy compliance.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Automated Refund Process: Reduces manual effort, minimizes errors, and ensures swift execution of refunds.",
          "Standardized Policies: Implements a uniform approach to refunds, enhancing fairness and clarity.",
          "Real-Time Tracking: Provides visibility into refund statuses and sends automated notifications for updates, ensuring transparency.",
          "Enhanced Efficiency: Streamlines approvals and document management, cutting down on processing time and improving overall workflow accuracy.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 10,
    name: "New Vehicle Stock Management",
    value: "4",
    photo: "/NEW_CAR_STOCK_MNGMT/NEW_CAR STOCK_MNGMT_INSIDE.jpg",
    photoInd: "/NEW_CAR_STOCK_MNGMT/NEW_CAR_STOCK_PRODUCT_IMG.jpg",
    HeadLine: "Your Stock, Fully Tracked, Fully Secured",
    DetHeadLine:
      "Track, manage, and secure your car stock effortlessly. With real-time updates, automated allotments, and QR code audits, our system ensures smooth operations and maximum accuracy at every stage.",
    flow: "newcarstocknew",
    featureimg: "/NEW_CAR_STOCK_MNGMT/new_car_stock_mngmt_img1.png",
    content:
      "Tired of inventory headaches? New Car Stock Management simplifies your process with real-time tracking, automated movements, and secure exits. QR code audits ensure accurate data and eliminate errors. Streamline operations, boost efficiency, and increase profits—all with complete visibility. Ready to take control?",
    Features: [
      {
        id: 1,
        title: "Real-Time Stock Tracking",
        description:
          "Monitor your inventory at every stage, from purchase to delivery, with real-time updates.  ",
      },
      {
        id: 2,
        title: "QR Code Audits",
        description:
          "Conduct periodic stock audits using QR codes to verify vehicle details and ensure data accuracy.",
      },
      {
        id: 3,
        title: "Automated Allotments",
        description:
          "Seamlessly integrate with your Dealer Management System and AutoVYN for quick, error-free allotments and sales processing.",
      },
      {
        id: 4,
        title: "Secure Exit Management",
        description:
          "Automate gate passes and updates to stock reports, ensuring full accountability during vehicle exits.",
      },
      {
        id: 5,
        title: "Streamlined Stock Movement",
        description:
          "Track the movement of vehicles across locations with advanced tools, enhancing transparency and control.",
      },
      {
        id: 6,
        title: "Comprehensive Reporting",
        description:
          "Generate real-time reports on stock status, audits, and transactions for better decision-making and operational insights.",
      },
    ],
    submodule: [],
    screenimage: [
      "/NEW_CAR_STOCK_MNGMT/ss1.jpeg",
      "/NEW_CAR_STOCK_MNGMT/ss2.jpeg",
      "/NEW_CAR_STOCK_MNGMT/ss3.jpeg",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A multi-location dealership faced challenges in managing car inventory due to manual processes. Inefficiencies in stock input, movement tracking, and vehicle allotments led to errors, delays, and operational disruptions, impacting sales and customer satisfaction.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Stock Input: Relied on spreadsheets and basic templates, resulting in data inaccuracies and mismanagement.",
          "Limited Stock Movement Tracking: Vehicle transit and stockyard status were monitored manually, leading to delays and errors.",
          "Fragmented Allotment Process: Sales data handling lacked integration, causing inaccuracies and inefficiencies.",
          "Weak Exit Management: The absence of a robust tracking system led to unauthorized vehicle movements and data gaps.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Frequent data errors and stock discrepancies.",
          "Inefficient tracking of vehicle movements across branches.",
          "Delays in allotments and inaccuracies in sales data.",
          "Security risks due to lack of accountability during vehicle exits.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Automated Stock Input: Streamlined data entry using templates to ensure consistency and accuracy.",
          "Real-Time Stock Tracking: QR codes and security scans provided real-time visibility into vehicle transit and stockyard status.",
          "Integrated Allotment and Sales: Seamlessly linked with Dealer Management System and AutoVYN for accurate, automated handling of sales and customer data.",
          "Secure Exit Management: Gate pass systems ensured accountability and automated updates to stock reports.",
          "QR-Based Stock Audits: Simplified periodic audits with QR code scanning for accurate inventory validation and real-time reporting.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 11,
    name: "MGA Approvals",
    value: "4",
    photo: "/mga/main.jpg",
    photoInd: "/mga/MGA_inside.png",
    HeadLine:
      "Where Integrity Meets Approval – Exposing Fraud, Empowering Trust!",
    DetHeadLine:
      "Empowering transparency, our process ensures every request is verified and fraud is swiftly uncovered. From customer confirmation to final approval, we protect integrity at every step.",
    flow: "mgaProcess",
    featureimg: "/mga/Features.png",
    content:
      "Revolutionize fraud detection with a seamless, transparent approval workflow. Eliminate overlooked cases and ensure every request is customer-verified. Our solution streamlines approvals, reduces delays, and ensures accurate invoicing. Stay informed with real-time reports, manage cases effortlessly, and make faster, data-driven decisions. Protect your operations, uphold trust, and empower your team with a fraud-free environment and detailed insights.",
    Features: [
      {
        id: 1,
        title: "Customer Verification",
        description:
          "Customers confirm the legitimacy of requests, distinguishing genuine cases from potential fraud.",
      },
      {
        id: 2,
        title: "Fraud Detection",
        description:
          "Automatically flags fraud cases based on customer responses to the verification request.",
      },
      {
        id: 3,
        title: "Approval Workflow",
        description:
          "Requests go through an approval process where designated approvers can approve or reject based on the case details.",
      },
      {
        id: 4,
        title: "Invoice Management",
        description:
          "After final approval, the MGA department updates the invoice number in the system for accurate records.",
      },
      {
        id: 5,
        title: "Real-time Reporting",
        description:
          "Managers can view detailed reports on fraud cases, identifying who is involved and the number of fraudulent incidents.",
      },
      {
        id: 6,
        title: "End-to-End Tracking",
        description:
          "Tracks each request from initiation to final approval, ensuring full accountability and transparency throughout the process.",
      },
    ],
    submodule: [],
    screenimage: [
      "/mga/ss1.png",
      "/mga/ss2.png",
      "/mga/ss3.png",
      "/mga/ss4.png",
      "/mga/ss5.png",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "An automobile dealer faced challenges with fraudulent MGA requests initiated without customer consent. The absence of verification and manual processes delayed fraud detection, eroding customer trust and creating operational inefficiencies.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual MGA Requests: Accessory requests were raised manually without automation, increasing the risk of unauthorized actions.",
          "Customer Verification Gaps: No system existed for customers to validate accessory requests, enabling fraudulent transactions.",
          "Lack of Fraud Detection: Management had no efficient method to track or identify fraudulent requests in a timely manner.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Frequent unauthorized MGA requests due to weak validation protocols.",
          "Delayed fraud detection and resolution due to manual processes.",
          "Inefficient approval workflows, causing bottlenecks in operations.",
          "No robust reporting or tracking system to monitor fraud cases.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Automated Requests: Enabled instant customer verification for MGA requests, reducing unauthorized transactions.",
          "Real-Time Validation: Allowed customers to approve or reject MGA requests directly, ensuring transparency.",
          "Streamlined Approvals: Introduced automated workflows to accelerate the approval process and improve efficiency.",
          "Fraud Detection System: Provided detailed reporting to flag and track suspicious cases for swift resolution.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 12,
    name: "Stock Audit(New & TV Car)",
    value: "4",
    photo: "/new_car_stock_audit/new_car_stock_audit_img_main.jpg",
    photoInd: "/new_car_stock_audit/Stock_audit_img1.jpg",
    HeadLine:
      "Smart, fast, and accurate audits – take control of your car stock with confidence",
    DetHeadLine:
      "New Car Stock Audit enhances inventory management with automated QR scanning, real-time location tracking, and synchronized data. Simplify audits, reduce errors, and improve accuracy with ease.",
    flow: "newcarstockaudit",
    featureimg: "/new_car_stock_audit/new_car_stock_audit_img3.jpg",
    content:
      "Struggling with inventory accuracy? New Car Stock Audit streamlines the process with automated QR scanning, real-time tracking, and synchronized data. It minimizes errors, ensures precise audits, and offers full visibility of vehicle conditions—plus an intuitive interface that’s easy to use. Boost efficiency and gain better control effortlessly.",
    Features: [
      {
        id: 1,
        title: "Automated QR Code Scanning",
        description:
          "Quickly scan and retrieve vehicle data, reducing manual errors and speeding up the audit process.",
      },
      {
        id: 2,
        title: "Real-Time Location Tracking",
        description:
          "Automatically capture and track vehicle locations during audits for improved asset visibility.",
      },
      {
        id: 3,
        title: "Comprehensive Audit Logging",
        description:
          "Keep detailed records of each vehicle's inspection history, condition, and maintenance status.",
      },
      {
        id: 4,
        title: "Automated Data Synchronization",
        description:
          "Ensure real-time data consistency across all devices and locations to prevent discrepancies.",
      },
      {
        id: 5,
        title: "User-Friendly Interface",
        description:
          "An intuitive, step-by-step interface that requires minimal training for quick adoption.",
      },
      {
        id: 5,
        title: "Seamless Integration",
        description:
          "Easily integrate with existing systems for smoother data management and reporting.",
      },
    ],
    submodule: [],
    screenimage: [
      "/new_car_stock_audit/ss1.jpeg",
      "/new_car_stock_audit/ss2.jpeg",
      "/new_car_stock_audit/ss3.jpeg",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A company faced challenges in efficiently auditing and tracking vehicles across multiple locations. Manual processes led to inaccuracies, delays, and inconsistent data, hindering effective management and reporting.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Auditing: Users relied on paper-based auditing, which introduced errors and delayed data processing.",
          "Inconsistent Data Collection: Location and audit data were not accurately captured in real-time, leading to gaps in the auditing process.",
          "Limited Tracking of Vehicle Condition: Information on vehicle conditions and maintenance was only available sporadically, making it difficult to assess usage and condition over time.",
          "Fragmented Reporting: Vehicle audit history and tracking were inconsistently documented, leading to delays and inefficiencies in decision-making.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Frequent data entry errors and delays due to manual QR code scanning processes.",
          "High costs and inefficiencies due to lack of real-time location tracking and delayed maintenance reporting.",
          "Lack of a centralized system for real-time updates on vehicle audits, impacting utilization and management decisions.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Automated QR Code Scanning: Integrated a camera-based QR code reader for real-time vehicle identification and details retrieval, reducing data entry errors.",
          "Geolocation Integration: Enabled automatic location data capture to improve tracking accuracy and reduce misplacement.",
          "Real-Time Audit and Maintenance Data: Implemented a system to track and display audit history, improving visibility of vehicle condition and usage.",
          "Centralized Data Logging and Reporting: Created a unified interface for managing vehicle audits, allowing for accurate and up-to-date tracking across locations.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 13,
    name: "True Value ICM",
    value: "4",
    photo: "/products/True_value_1.jpg",
    photoInd: "/truevalue/TRUEVALUE1.png",
    HeadLine:
      "From Purchase to Profit: Simplify Old Car Deals with Smart Hierarchies.",
    DetHeadLine:
      "Transform your old car transactions with easy entries, automatic tax calculations, and a streamlined approval system. Gain real-time insights with detailed reports and dashboards, improving accuracy, speeding up decisions, and boosting your bottom line.",
    flow: "truevalue",
    featureimg: "/truevalue/TRUEVALUE2.png",
    content:
      "Empower your business with our innovative modules designed to simplify processes, enhance efficiency, and drive growth. From seamless transactions to real-time insights, our solutions are crafted to meet the needs of modern dealerships. Take control, improve decision-making, and maximize profitability—start transforming your dealership today!",
    Features: [
      {
        id: 1,
        title: "Seamless Purchase & Sale Entry",
        description:
          "Simplifies the entry process for old car purchases and sales, ensuring accuracy and efficiency.",
      },
      {
        id: 2,
        title: "Automatic Tax Calculations",
        description:
          "Automatically applies relevant taxes during purchase and sale, reducing manual effort.",
      },
      {
        id: 3,
        title: "Real-Time Reports",
        description:
          "Provides up-to-date insights into transactions for informed decision-making.",
      },
      {
        id: 4,
        title: "Interactive Dashboards",
        description:
          "Visualize sales performance, tax details, and other key metrics in easy-to-read dashboards.",
      },
      {
        id: 5,
        title: "Efficient Management",
        description:
          "Centralizes all old car purchase and sale activities for streamlined operations.",
      },
      {
        id: 6,
        title: "Customizable Reporting",
        description:
          "Generate reports tailored to specific needs, such as sales summaries and tax breakdowns.",
      },
    ],
    submodule: [],
    screenimage: [
      "/truevalue/ss1.PNG",
      "/truevalue/ss2.PNG",
      "/truevalue/ss3.PNG",
      "/truevalue/ss4.PNG",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A dealer faced significant challenges in managing the purchase and sales process for old cars. Manual processes caused inefficiencies, leading to delays, errors in transaction entries, and inconsistent pricing. The lack of a defined approval hierarchy created bottlenecks, reducing operational efficiency and impacting profitability.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Transaction Recording: Sales and purchase details for old cars were manually recorded, leading to frequent data entry errors and delays in processing transactions.",
          "No Approval Hierarchy: The absence of an approval workflow caused delays and confusion, as transactions were subject to individual discretion without proper oversight.",
          "Inconsistent Valuation: Old car pricing and valuations were inconsistent, resulting in discrepancies in both customer pricing and financial reporting.",
          "Fragmented Reporting: Sales and purchase reports were not centralized, leading to challenges in tracking and managing transactions effectively.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Frequent data entry errors and delays in transaction processing.",
          "Approval delays due to a lack of structured hierarchy.",
          "Inconsistent pricing and valuation, leading to customer dissatisfaction and financial discrepancies.",
          "Limited visibility and tracking of old car transactions, impacting decision-making and operational efficiency.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Automated Transaction Management: Streamlined the process of recording old car purchases and sales, reducing manual errors and ensuring consistency.",
          "Approval Hierarchy: Introduced a structured approval workflow, allowing seamless transaction approvals at each level, improving operational efficiency.",
          "Standardized Pricing: Integrated real-time pricing and valuation tools to ensure consistency and fairness in old car pricing.",
          "Centralized Reporting: Developed a centralized reporting system to provide real-time insights into all old car transactions, improving visibility and management oversight.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 14,
    name: "Vehicle Pick & Drop Tracker",
    value: "4",
    photo: "/pickdrop/PICK&DROP2.jpg",
    photoInd: "/pickdrop/PICK&DROP_IMHHG3.jpg",
    HeadLine:
      "Seamless Old Car purchase & Sales with Fully Customizable Approval hierarchy",
    DetHeadLine:
      "Effortless Vehicle Pick & Drop Service: Real-Time Tracking, Flexible Scheduling, and Seamless Convenience at Your Fingertips!",
    flow: "Pickanddrop",
    featureimg: "/pickdrop/PICK&DROP1_IMG.jpg",
    content:
      "The Vehicle Pick and Drop module offers a convenient and efficient solution for managing transportation needs with ease. Designed to streamline the booking process, it allows users to schedule pick-up and drop-off services with real-time tracking and flexible time slots. Whether it's a single journey or multiple stops, this module ensures a seamless experience, offering route optimization for faster service and customizable options to suit individual preferences. With integrated notifications, secure payment methods, and transparent driver details, customers can enjoy peace of mind knowing they are receiving reliable service. From eco-friendly vehicles to emergency assistance, the Vehicle Pick and Drop module makes transportation hassle-free, safe, and efficient for every user.",
    Features: [
      {
        id: 1,
        title: "Real-Time Scheduling",
        description:
          "Allows users to book pick-up and drop-off services with flexible time slots.",
      },
      {
        id: 2,
        title: "GPS Tracking",
        description:
          "Provides real-time tracking of the vehicle during transit for enhanced safety and transparency.",
      },
      {
        id: 3,
        title: "Two-Way Notifications",
        description:
          "Sends automated updates to both customers and service providers regarding pick-up/drop-off timings and changes.",
      },
      {
        id: 4,
        title: "Contactless Service",
        description:
          "Enables fully digital interactions, from booking to payment, ensuring safety and convenience.",
      },
      {
        id: 5,
        title: "Driver and Vehicle Details",
        description:
          "Shares verified driver and vehicle information for customer confidence and safety.",
      },
    ],
    submodule: [],
    screenimage: [
      "/pickdrop/ss1.jpeg",
      "/pickdrop/ss2.jpeg",
      "/pickdrop/ss3.PNG",
      "/pickdrop/ss4.PNG",
      "/pickdrop/ss5.PNG",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A company struggled with tracking vehicles across locations due to manual processes, resulting in delays, errors, and inconsistent data, which hindered effective management and reporting.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual recording of vehicle details in registers.",
          "Paper forms for vehicle entry, servicing, and exit processes.",
          "Payment details logged manually, often incomplete.",
          "No real-time tracking of vehicle movement.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Time-consuming and error-prone manual processes.",
          "Misplaced or incomplete records lead to accountability issues.",
          "Lack of real-time communication between guards, service staff, and customers.",
          "Inefficient payment handling and risk of fraud.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Automates vehicle check-in/out and reduces paperwork.",
          "Real-time tracking of vehicle movements.",
          "Eliminates manual errors with centralized, accurate data.",
          "Transparent digital logs ensure better accountability.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 15,
    name: "Fuel Management System",
    value: "4",
    photo: "/products/FUEL_MANAGEMENT1.jpg",
    photoInd: "/fuel/MainImage.jpg",
    HeadLine:
      "Unlock the Power of Perfect Fuel Management – Driving Your Operations Smoothly",
    DetHeadLine:
      "Easily manage fuel slips for new deliveries, demo cars, and inter-branch transfers with our efficient system, offering precise tracking and effortless control.",
    flow: "fuel",
    featureimg: "/fuel/Features.jpg",
    content:
      "Streamline your fuel management with automation that eliminates errors and saves time. Generate accurate fuel slips for new cars, demo vehicles, and inter-branch transfers effortlessly. Our solution integrates seamlessly into your operations, ensuring smooth processes and real-time tracking. Experience efficient, hassle-free fuel management today!",
    Features: [
      {
        id: 1,
        title: "Seamless Fuel Slip Generation",
        description:
          "Automatically creates fuel slips for new cars, demo vehicles, and inter-branch transfers, reducing manual effort.",
      },
      {
        id: 2,
        title: "Real-time Tracking",
        description:
          "Provides accurate and up-to-date fuel consumption data for every vehicle, ensuring transparency and control.",
      },
      {
        id: 3,
        title: "Efficient Reporting",
        description:
          "Generates detailed reports for fuel usage, helping in monitoring and decision-making for all operations.",
      },
      {
        id: 4,
        title: "Customizable Slip Details",
        description:
          "Allows customization of fuel slip content to match specific needs for each category, including demo cars and inter-branch transfers.",
      },
      {
        id: 5,
        title: "Integrated with Delivery and Transfer Systems",
        description:
          "Automatically triggers fuel slip generation after vehicle delivery or inter-branch transfer is completed, ensuring timely and accurate documentation.",
      },
      {
        id: 6,
        title: "User-Friendly Interface",
        description:
          "Easy-to-navigate dashboard for quick access to fuel data, reports, and fuel slip generation, streamlining the process for all users.",
      },
    ],
    submodule: [],
    screenimage: [
      "/fuel/ss1.PNG",
      "/fuel/ss2.PNG",
      "/fuel/ss3.PNG",
      "/fuel/ss4.PNG",
      "/fuel/ss5.PNG",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A dealer faced challenges in managing and tracking fuel expenses for various operations, including new car deliveries, demo cars, and other tasks requiring fuel.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Cash-based Fueling: RM/SRM collects cash from the accounts department for fueling.",
          "Manual Expense Tracking: Fuel expenses are manually tracked, causing inaccuracies and inefficiencies.",
          "Time-Consuming Billing: Calculating fuel expenses at the end of the month becomes hectic and time-consuming.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Inefficient Expense Tracking: Difficulty in tracking and managing fuel expenses for different operations.",
          "Manual Calculation of Bills: At month-end, calculating fuel expenses manually creates delays and errors.",
          "Lack of Real-Time Data: No real-time tracking of fueling operations and expenses.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Integrated Fuel Management: Tracks fueling for each operation in real-time, improving accuracy and reducing manual work.",
          "DMS Billing Integration: Generates real-time fuel slips for new car deliveries, eliminating manual documentation.",
          "Real-Time Vehicle Transfer Tracking: Monitors inter-branch vehicle transfers, improving operational transparency.",
          "Category-Wise Reporting: Detailed, categorized fuel slip generation with advanced search and filter options for easy tracking and analysis.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 16,
    name: "Insurance lead Management",
    value: "4",
    photo: "/products/insurance.jpg",
    photoInd: "/Insurance/MainImage.png",
    HeadLine:
      "Lead Smarter, Work Faster, Deliver Better: The Insurance Edge for Teams",
    DetHeadLine:
      "A complete insurance solution: assign leads, set targets, and track progress effortlessly. Empower CREs to deliver results while managers monitor success with actionable reports.",
    flow: "Insurance",
    featureimg: "/Insurance/features.png",
    content:
      "Transform your insurance operations with a comprehensive solution built for efficiency and precision. Automate lead assignments, reassignments, and target setting to eliminate manual hassles and streamline workflows. Empower CREs to update lead statuses, payments, and delivery details effortlessly. Managers gain real-time visibility into team performance with intuitive dashboards and detailed reports. Simplify insurance management while enhancing productivity and driving success for your business!",
    Features: [
      {
        id: 1,
        title: "Dynamic Lead Flow",
        description:
          "Seamlessly assign, reassign, and track leads with smart tools that adapt to team changes and priorities.",
      },
      {
        id: 2,
        title: "Bulk Import & Smart Entry",
        description:
          "Import leads via Excel or manually input details with an intuitive interface designed for speed and accuracy.",
      },
      {
        id: 3,
        title: "Customizable CRE Targets",
        description:
          "Set monthly goals tailored to each CRE, empowering performance while aligning with company objectives.",
      },
      {
        id: 4,
        title: "Lead Journey Management",
        description:
          "Track every stage of a lead’s lifecycle, from assignment to status updates, payment details, and final outcomes.",
      },
      {
        id: 5,
        title: "360° Manager Insights",
        description:
          "Visualize team performance, lead distribution, and outcomes with interactive dashboards and insightful reports.",
      },
      {
        id: 6,
        title: "CRE Empowerment Hub",
        description:
          "Equip CREs with a personalized dashboard to manage leads, hit targets, and focus on driving results effortlessly.",
      },
    ],
    submodule: [],
    screenimage: [
      "/Insurance/ss1.jpg",
      "/Insurance/ss2.png",
      "/Insurance/ss3.png",
      "/Insurance/ss4.jpeg",
      "/Insurance/ss5.png",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A dealer faced inefficiencies in managing insurance data manually through Excel, leading to errors, duplicate entries, and time-consuming processes.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Insurance Tracking: Data was stored in Excel files, making it prone to errors and inconsistencies.",
          "Time-Consuming Processes: Managing records, calculating premiums, and tracking renewals was done manually.",
          "Claim Handling Issues: Claims and renewals were handled manually, leading to delays and increased administrative effort.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Data Inaccuracies: Errors due to manual data entry, leading to incorrect information and duplicate entries.",
          "Inefficient Process: High time consumption for tracking renewals, processing claims, and managing records.",
          "Lack of Real-Time Updates: Information wasn't updated in real-time, causing delays and inefficiencies.",
          "Manual Reminders: Missed or delayed reminders for renewals and premium payments.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Centralized Insurance Data: All insurance records stored in a centralized database for real-time updates and easy access.",
          "Automated Renewals & Premiums: Automation of renewals, premium calculations, and reminders.",
          "Customer Notifications: Automatic sending of insurance documents and renewal reminders to customers via WhatsApp.",
          "Detailed Reporting: Access to comprehensive reports on sales, renewals, claims, and customer data.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 17,
    name: "Bodyshop Claim Tracker",
    value: "4",
    photo: "/products/BODYSHOP CLAIM_F.png",
    photoInd: "/bodyshop_claim/BODYSHOPCLAIM1.png",
    HeadLine:
      "Smooth claims management, from repair to resolution, all in one place!",
    DetHeadLine:
      "The Body Shop Claim Module streamlines repair claims, integrates with DMS, supports insurance claims, and offers real-time tracking for efficient resolution.",
    flow: "Bodyshopclaim",
    featureimg: "/bodyshop_claim/BODYSHOPCLAIM2.png",
    content:
      "Tired of managing body shop claims manually and dealing with delays? The Body Shop Claim Module automates the entire process, from accident repairs to insurance claims. With seamless integration with your DMS, real-time claim tracking, and simplified document management, it saves you time and boosts efficiency. Ready to streamline your claims process?",
    Features: [
      {
        id: 1,
        title: "Integrated Claim Management",
        description:
          "Streamlines accident and repair claims with seamless integration into DMS.",
      },
      {
        id: 2,
        title: "Insurance Claim Support",
        description:
          "Simplifies documentation and claim submission for insurance processing.",
      },
      {
        id: 3,
        title: "Real-Time Tracking",
        description:
          "Monitors claim progress and updates in real time for better transparency.",
      },
      {
        id: 4,
        title: "Document Upload and Management",
        description:
          "Enables customers to upload, view, and manage claim-related documents efficiently.",
      },
      {
        id: 5,
        title: "Dual Case Handling",
        description:
          "Handles both BodyShop and Workshop cases, covering accident and routine repairs.",
      },
      {
        id: 6,
        title: "Comprehensive Reporting",
        description:
          "Provides detailed insights and downloadable reports for claim status and process efficiency.",
      },
    ],
    submodule: [],
    screenimage: [
      "/bodyshop_claim/ss1.jpeg",
      "/bodyshop_claim/ss2.jpeg",
      "/bodyshop_claim/ss3.jpeg",
      "/bodyshop_claim/ss4.jpeg",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "Body Shop claim coordinators struggled to manage the entire claim process alongside routine workshop tasks, leading to inefficiencies and financial losses due to miscommunication and manual handling.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Document Management: Registers for each vehicle, including bills and gate passes.",
          "Separate Workflows: Manual tracking of accidental claims and routine tasks, leading to delays.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Coordination Issues: Miscommunication between body shop and workshop teams.",
          "Financial Losses: Errors due to misunderstanding of tasks and customer demands.",
          "Inefficient Document Handling: Time-consuming process with physical records.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Centralized Data: Single platform for easy tracking of vehicle claims and tasks.",
          "Integrated Workflow: Improved coordination between body shop and workshop.",
          "Digital Document Management: Secure upload/download of documents, eliminating physical storage.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 18,
    name: "Service Offer Management",
    value: "4",
    photo: "/products/ServiceOffer1.png",
    photoInd: "/serviceoffer/serviceinsidemain.jpeg",
    HeadLine:
      "Turn every service into an opportunity with tailored offers that speak to your customers",
    DetHeadLine:
      "The Service Offer Module lets you create, apply, and track personalized service deals effortlessly, driving customer satisfaction and sales with ease.",
    flow: "Serviceoffer",
    featureimg: "/serviceoffer/feature.jpeg",
    content:
      "Boost customer loyalty and revenue with the Service Offer Module. Create tailored deals effortlessly, track performance in real-time, and redeem offers via mobile with ease. Automated data syncing and error-free management simplify operations while maximizing profitability—all in one integrated system.",
    Features: [
      {
        id: 1,
        title: "Enhanced Customer Engagement",
        description:
          "Create tailored offers to boost customer satisfaction and retention.",
      },
      {
        id: 2,
        title: "Streamlined Offer Management",
        description:
          "Automate offer creation, application, and tracking to reduce admin workload.",
      },
      {
        id: 3,
        title: "Data-Driven Insights",
        description:
          "Access comprehensive reports and dashboards for informed decision-making.",
      },
      {
        id: 4,
        title: "Mobile App Integration",
        description:
          "Easily redeem offers through the AUTOVYN mobile app for a seamless customer experience.",
      },
      {
        id: 5,
        title: "Customizable Offers",
        description:
          "Flexibility to design various promotions, from discounts to additional services.",
      },
      {
        id: 6,
        title: "Increased Dealer Revenue",
        description:
          "Drive higher profitability with targeted promotions and flexible service deals.",
      },
    ],
    submodule: [],
    screenimage: [
      "/serviceoffer/ss1.jpeg",
      "/serviceoffer/ss2.jpeg",
      "/serviceoffer/ss3.jpeg",
      "/serviceoffer/ss4.jpeg",
      "/serviceoffer/ss5.jpeg",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A multi-location dealership faced difficulties managing service offers for irregular customers, with outdated methods causing inefficiencies, missed opportunities, and dissatisfied customers.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Offer Creation: Creating and customizing offers was a slow, cumbersome process.",
          "Limited Tracking: No simple way to track which customers used the offers or their effectiveness.",
          "No Central Dashboard: Absence of real-time data made it hard to gauge offer performance and customer engagement.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Complicated Offer Management: Managing multiple service offers for customers was complex and time-consuming.",
          "Lack of Insights: No clear visibility into the performance of offers and customer interactions.",
          "Missed Sales Opportunities: Inefficient processes led to lost opportunities for upselling and customer engagement.",
          "High Administrative Costs: Manual tracking of offers increased administrative workload and costs.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Easy Offer Creation: Streamlined process for creating and customizing service offers, including discounts and special services.",
          "Streamlined Customer Management: Quick customer data import via Excel, instant offer application, and centralized tracking.",
          "Real-Time Performance Tracking: A user-friendly dashboard, integrated with the Autovyn mobile app, for monitoring offer success and customer interactions in real time.",
          "Improved Customer Experience: Simplified customer engagement and relationship-building, boosting service potential and satisfaction.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 19,
    name: "Bodyshop Part Holding",
    value: "4",
    photo: "/products/Part Holding Report_by_system_img_f.png",
    photoInd: "/bodyshoppartholding/PART_HOLDING1.jpg",
    HeadLine:
      "Never Keep a Customer Waiting: Real-Time Part Availability at Your Fingertips",
    DetHeadLine:
      "The Part Holding Report module tracks vehicles on hold due to unavailable parts, providing real-time updates to streamline repairs and improve service efficiency",
    flow: "partOrder",
    featureimg: "/bodyshoppartholding/PARTHOLDING_IMG-2.jpg",
    content:
      "Transform your service department with the Part Holding Report module keeping track of every vehicle, every part, every moment. No more delays. No more customer complaints. With real-time updates on parts availability, streamline your workflow, reduce waiting times, and deliver faster, more reliable service",
    Features: [
      {
        id: 1,
        title: "Real-time Part Status Tracking",
        description:
          "Tracks and displays the current status of parts held for vehicles in the workshop or showroom.",
      },
      {
        id: 2,
        title: "Inventory Visibility",
        description:
          "Provides visibility into the availability and quantity of parts, preventing delays in repair or service work.",
      },
      {
        id: 3,
        title: "Report Customization",
        description:
          "Allows customization of the report based on specific vehicle models, parts, and workshops.",
      },
      {
        id: 4,
        title: "Hold Duration Monitoring",
        description:
          "Monitors and reports on the duration that parts are held, ensuring timely action is taken to avoid delays.",
      },
      {
        id: 5,
        title: "Automated Alerts",
        description:
          "Sends automatic alerts for parts that have been held too long, facilitating prompt procurement or follow-up.",
      },
      {
        id: 5,
        title: "Integration with Workshop Operations",
        description:
          "Seamlessly integrates with the workshop management system to update the status of parts in real-time as they are used or released.",
      },
    ],
    submodule: [],
    screenimage: [
      "/bodyshoppartholding/ss1.jpeg",
      "/bodyshoppartholding/ss2.jpeg",
      "/bodyshoppartholding/ss3.jpeg",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A dealership struggled to manage vehicles held in workshops or showrooms due to part unavailability or parts being on hold. Manual tracking caused delays in repairs, miscommunication with customers, and inefficiencies in inventory planning, negatively affecting customer satisfaction and revenue.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Part Hold Tracking: The status of vehicles and the availability of parts were recorded manually, increasing the likelihood of errors.",
          "No Real-Time Updates: Delays in updating the part status created communication gaps between the workshop, inventory team, and customers.",
          "Unstructured Reporting: The lack of a centralized report made it difficult for management to identify bottlenecks and resolve issues promptly.",
          "Customer Communication Challenges: Customers were often not informed proactively about delays, impacting their trust and satisfaction.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Frequent delays in vehicle repairs due to mismanagement of part availability.",
          "Lack of real-time tracking, leading to operational inefficiencies.",
          "Limited insights into hold trends, preventing effective resource planning.",
          "Poor customer experience due to delayed updates on repair progress.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Automated Hold Tracking: Implemented a digital module to record and track vehicles on hold due to part unavailability in real-time.",
          "Centralized Reporting: Developed a detailed part holding report to provide insights into vehicles on hold, pending parts, and expected availability timelines.",
          "Real-Time Updates: Integrated with inventory systems to synchronize part statuses, reducing delays and improving coordination.",
          "Customer Notifications: Enabled automatic notifications to inform customers of hold status, expected resolution, and updates.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 20,
    name: "Value Added Sales",
    value: "4",
    photo: "/products/Vas2.png",
    photoInd: "/VAS/VASIMG1.png",
    HeadLine:
      "Gain full control over VAS billing and financial data at your dealership",
    DetHeadLine:
      "The VAS Module enables accurate billing for additional services at your dealership, with detailed financial reports to track performance and make informed decisions.",
    flow: "Vas",
    featureimg: "/VAS/VAS-2.png",
    content:
      "The VAS Module helps you create precise bills for value-added services with minimal effort. Real-time tracking and detailed reports give you instant access to financial insights, ensuring your dealership stays organized and profitable.",
    Features: [
      {
        id: 1,
        title: "Accurate VAS Billing",
        description:
          "Generate precise bills for value-added services at your dealership.",
      },
      {
        id: 2,
        title: "Financial Reporting",
        description:
          "Access detailed reports for better financial tracking and analysis.",
      },
      {
        id: 3,
        title: "Real-Time Data",
        description:
          "View up-to-date financial data for improved decision-making.",
      },
      {
        id: 4,
        title: "Customizable Reports",
        description:
          "Tailor reports to meet specific business needs and preferences.",
      },
      {
        id: 5,
        title: "Invoice Tracking",
        description: "Easily monitor and track VAS invoices and payments.",
      },
      {
        id: 6,
        title: "Improved Transparency",
        description:
          "Ensure clear visibility into your dealership's VAS financials.",
      },
    ],
    submodule: [],
    screenimage: [
      "/VAS/ss1.jpeg",
      "/VAS/ss2.jpeg",
      "/VAS/ss3.jpeg",
      "/VAS/ss4.jpeg",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "A multi-location dealer faced inefficiencies in generating and managing bills for Value-Added Services (VAS) across workshop and showroom operations. Manual processes led to billing delays, errors, and customer dissatisfaction. The lack of integration between sales and service data created inconsistencies in record-keeping and revenue tracking.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Bill Generation: VAS bills were created manually, increasing the risk of errors and prolonging processing times.",
          "Decentralized Records: Sales and service VAS data were maintained separately, making it difficult to track and reconcile transactions.",
          "Delayed Billing: Bills were often generated post-service or sale, causing delays and affecting customer satisfaction.",
          "Limited Reporting: Fragmented billing data restricted management's ability to analyze revenue streams and identify growth opportunities.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Frequent billing errors due to manual processes.",
          "Time-consuming bill generation, leading to customer dissatisfaction.",
          "Lack of centralized VAS billing data for sales and service.",
          "Limited insights into VAS revenue, hindering strategic decision-making.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Automated VAS Billing: Enabled seamless and error-free bill generation for VAS across workshop and showroom operations.",
          "Integrated Sales and Service Data: Unified VAS billing data for sales and service, ensuring consistency and transparency.",
          "Real-Time Billing: Introduced instant bill generation at the point of sale or service, reducing delays and improving customer satisfaction.",
          "Comprehensive Reporting: Developed a centralized reporting system for VAS revenue, providing actionable insights and supporting business growth.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
  {
    id: 21,
    name: "Daily Cash Balance",
    value: "4",
    photo: "/cash_sheet_imgs/CASH_SHEET_IMG1.jpg",
    photoInd: "/dailycaseupdation/CASH_SHEET_IMG_INSIDE.png",
    HeadLine: "Your daily cash balance, reconciled with precision",
    DetHeadLine:
      "The Cash Sheet Module automates cash tracking and reconciliation, ensuring accurate records and real-time financial insights for efficient cash flow management.",
    flow: "dailycashupdation",
    featureimg: "/dailycaseupdation/CASH_SHEET_IMG.png",
    content:
      "Autovyn DailyCash Reconcile allows dealers to efficiently manage daily cash updates and reconciliations, ensuring accuracy, seamless tracking, and better financial control with minimal effort",
    Features: [
      {
        id: 1,
        title: "Automated Opening Balance Fetch",
        description:
          "Automatically sets today’s opening balance from yesterday’s closing balance.",
      },
      {
        id: 2,
        title: "Daily Transaction Entry",
        description:
          "Easily record payments, receipts, and transactions for the day.",
      },
      {
        id: 3,
        title: "OTP-Based Submission",
        description:
          "Ensures secure submission with OTP verification for authorized users.",
      },
      {
        id: 4,
        title: "Real-Time Transaction Tracking",
        description:
          "Provides live updates on daily cash transactions for better oversight.",
      },
      {
        id: 5,
        title: "Instant Reporting",
        description:
          "Auto-generates and submits daily cash reports for quick reconciliation.",
      },
      {
        id: 6,
        title: "Audit Trail and Compliance",
        description:
          "Keeps a full transaction record for accountability and compliance.",
      },
    ],
    submodule: [],
    screenimage: [
      "/dailycaseupdation/Screenshot1.png",
      "/dailycaseupdation/Screenshot2.png",
      "/dailycaseupdation/Screenshot3.png",
      "/dailycaseupdation/Screenshot4.png",
      "/dailycaseupdation/Screenshot5.png",
    ],
    CaseStudy: [
      {
        id: 1,
        title: "Case",
        description:
          "An automobile dealership struggled with managing daily cash balance updates due to manual processes. Errors, delays, and a lack of automation led to accountability issues, increased fraud risks, and operational inefficiencies.",
      },
      {
        id: 2,
        title: "Dealer's Current Practices",
        description: [
          "Manual Cash Balance Updates: Cashiers manually recorded balances, leading to errors and opportunities for fraud.",
          "Lack of Automation: No system existed to auto-fetch and verify previous balances, causing reporting inconsistencies.",
          "No Real-Time Oversight: Management could not monitor cash balances in real-time, hampering fraud detection and operational control.",
          "Delayed Reporting: End-of-day manual reporting slowed down reconciliations and managerial oversight.",
        ],
      },
      {
        id: 3,
        title: "Challenges",
        description: [
          "Frequent errors in manual cash updates.",
          "Cash discrepancies due to the absence of automated verification.",
          "Increased fraud risk and poor accountability.",
          "Delays in reporting, creating operational inefficiencies.",
        ],
      },
      {
        id: 4,
        title: "AUTOVYN Solution",
        description: [
          "Automated Cash Balance Updates: Automatically fetches the previous day's closing balance as the current day's opening balance to ensure accuracy.",
          "Daily Transaction Entry: Simplifies the recording of daily cash payments and receipts by cashiers.",
          "Real-Time Verification: Provides real-time updates for management to monitor and verify transactions instantly.",
          "OTP Verification for Security: Secures cash balance submissions with OTP authentication, ensuring only authorized personnel finalize reports.",
        ],
      },
    ],
    Url: "https://erp.autovyn.com/backend/fetch?filePath=AVYN/Broschure/BrochurePayrool.pdf"
  },
];

const Products = ({ setDetailPage, DetailPage }) => {
  const router = useRouter();

  const [showAll, setShowAll] = useState(false);
  const [Url, setUrl] = useState();
  const [SelectedProduct, setSelectedProduct] = useState({
    id: null,
    name: "",
    value: "",
    photo: "",
    photoInd: "",
    HeadLine: "",
    DetHeadLine: "",
    flow: "",
    featureimg: "",
    content: "",
    Url: "",
    Features: [],
    CaseStudy: [],
    submodule: [],
    screenimage: [],
    EnquiryOption: [],
  }); // State to toggle showing all products
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogOpen1, setIsDialogOpen1] = useState(false);
  const [SentOtp, setSentOtp] = useState("");
  const [ProductName, setProductName] = useState([]);
  const topProducts = showAll ? Produts : Produts.slice(0, 8); // Show all or top 8 products based on state
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products dynamically based on search term
  const filteredProducts = topProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    city: "",
    company: "",
    Bro_Code: "",
    OTP: "",
  });

  const [otp, setOtp] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOtpChange = (e: any) => {
    setOtp(e.target.value);
  };

  const onsubmitbutton = async (e: any) => {
    setIsDialogOpen(false);
    const otp = Math.floor(100000 + Math.random() * 900000);
    setSentOtp(otp);
    setIsDialogOpen1(true);
    e.preventDefault();
    const result = await axios.post(
      "/api/DownloadBrochure",
      { formData, otp },
      {
        headers: {
          "Content-Type": "application/json", // Set the content type to application/json
        },
      }
    );
    console.log("Otp Sent", result);
  };

  const onsubmitbuttonotp = async (e: any) => {
    if (otp == SentOtp) {
      console.log(formData, "formDataformData");
      console.log(otp, "otpotp");
      setIsDialogOpen(false);
      setIsDialogOpen1(false);
      e.preventDefault();
      const result = await axios.post("/api/DownloadBrochureData", formData, {
        headers: {
          "Content-Type": "application/json", // Set the content type to application/json
        },
      });
      if (result) {
        console.log("agya");
        console.log(Url, "agya");
        await handleDownload()
      }
      console.log("Form submitted successfully", result);
    } else {
      alert("Invalid OTP");
    }
  };

  const handleDownload = async () => {
    console.log('dlfkffk')
    console.log('dlfkffk')
    console.log(Url,'UrlUrlUrlUrl')
    if(!Url){
        return;
    }
    try {
        const response = await axios.get(Url, {
            responseType: 'blob',
        });
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${new Date().toDateString()}.pdf`; // set default download file name or make it dynamic
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => {
        }, 500);
    } catch (error) {
        console.error('Download error:', error);
    } finally {
    }
};

  const gotoproduct = (product) => {
    setDetailPage(true);
    setSelectedProduct(product || {});
  };

  const DownloadBrochure = (product) => {
    console.log(product,'product')
    setFormData((prevData) => ({
      ...prevData,
      Bro_Code: product.name,
    }));
    console.log(SentOtp ,otp);
    if (SentOtp == otp && otp) {
    } else {
      setIsDialogOpen(true);
      setUrl(product.Url)
    }
  };

  const toggleProducts = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <>
      {!DetailPage ? (
        <>
          <div className="p-2 pb-5 grid  grid-cols-12">
            <div className=" font-[Frank]  font-bold  text-center col-span-12 ">
              <p className="text-[20px] headingtext-home leading-[5px] custom-tracking">
                SMART CREATION
              </p>
              <p className="text-[32px] text-color font-semibold -mt-4 leading-[80px] custom-tracking2">
                Where Ideas Become Reality
              </p>
            </div>
            <div className="col-span-12 -mt-6">
              <div className="flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Search products"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term dynamically
                  className="border rounded px-4 py-2 focus:outline-8 w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer rounded shadow-lg"
                  >
                    <Image
                      onClick={() => gotoproduct(product)}
                      src={product.photo}
                      alt={product.name}
                      className="w-full h-72 object-cover rounded mb-2"
                      width={1000}
                      height={1000}
                    />
                    <div className="px-2 flex justify-between items-center">
                      <div className="flex-grow">
                        <p className="text-[Lato] text-color text-[16px] font-bold pl-2">
                          {product.name}
                        </p>
                        <Rating
                          name="read-only"
                          className="mb-3 ml-1 mt-[-6px]"
                          value={parseInt(product.value)}
                          readOnly
                        />
                      </div>
                      <div
                        onClick={() => DownloadBrochure(product)}
                        className="cursor-pointer flex justify-center items-center w-20 h-8  mr-2"
                      >
                        {/* <FaFileDownload size={30} color="#854d0e"   /> */}

                        <div className="bg-[#8E653F] p-2 rounded">
                          {otp == SentOtp && otp ? (
                            <>
                              <FileDownloader
                                fileName=""
                                text=""
                                url={product.Url}
                              />
                            </>
                          ) : (
                            <>
                              <FileDownloader
                                fileName=""
                                text=""
                                url=""
                                className="text-white text-lg"
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={toggleProducts}
              className="flex justify-end mr-10 font-bold col-span-12 mt-5"
            >
              {showAll ? "Show Less ..." : "Show All ..."}
            </button>
          </div>
        </>
      ) : (
        <>
          <ProductInfo product={SelectedProduct || {}} />
        </>
      )}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-full bg-off text-color max-w-full sm:max-w-screen-sm md:max-w-screen-md xs:h-auto overflow-y-scroll overflow-x-hidden h-[500px] py-4">
          <DialogHeader>
            <DialogTitle>
              <div className="col-span-12 p-3 bg-color mr-4 mt-2 text-frank-2419 w-full rounded-t-xl">
                Download Brochure
              </div>
            </DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex text-left font-semibold">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="Name"
                    value={formData.Name}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-10 border-2 border-gray-300"
                  />
                </div>

                <div className="col-span-12 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex text-left font-semibold">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-10 border-2 border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-6 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex text-left font-semibold">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-10 border-2 border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-6 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex text-left font-semibold">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-10 border-2 border-gray-300"
                  />
                </div>
                <div className="col-span-12 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex text-left font-semibold">
                    Company
                  </label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-10 border-2 border-gray-300"
                  />
                </div>
                <div className="col-span-12 flex justify-center">
                  <button
                    onClick={onsubmitbutton}
                    className="text-white -mb-4 -mt-4 font-serif text-sm rounded-lg px-6 py-2 bg-[#34251F]"
                  >
                    Download
                  </button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={isDialogOpen1} onOpenChange={setIsDialogOpen1}>
        <DialogContent className="w-full dark:bg-primaryop bg-off text-color max-w-full sm:max-w-screen-sm xs:h-auto overflow-y-scroll overflow-x-hidden">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-12">
                <div className="col-span-12 text-black -mt-4 flex justify-center text-2xl font-serif">
                  OTP Verification
                </div>
                <hr className="col-span-12" />
                <div className="col-span-12  text-red-500 flex justify-center text-sm font-serif">
                  Your OTP Will expire in 1 minute
                </div>
                <div className="col-span-12  text-green-600 flex justify-center text-sm font-serif">
                  Please Enter the OTP Sent to your registered Phone no.
                </div>
                <div className="col-span-10 mt-4 mr-2 bg-white rounded-xl">
                  <input
                    placeholder="OTP"
                    value={otp}
                    onChange={handleOtpChange}
                    className="text-black shadow  p-2  w-full rounded h-10 border border-gray-300"
                  />
                </div>
                <div className="col-span-2 mt-4 rounded-xl">
                  <button
                    onClick={onsubmitbuttonotp}
                    className="text-black font-serif text-sm shadow px-6 py-2  h-10 bg-slate-300  rounded"
                  >
                    Submit
                  </button>
                </div>
                <div
                  className="col-span-12 mt-4 text-red-500 flex justify-center text-sm font-serif"
                  onClick={onsubmitbuttonotp}
                >
                  Resend OTP
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Products;
