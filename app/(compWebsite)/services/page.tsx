"use client";
import Image from "next/image";
import React, { useState } from "react";

const servicesData = [
  {
    title: "Automobile ERP Solution",
    imageUrl: "/service/service1.png",
    features: [
      {
        title: "Streamlined Operations",
        description:
          "We offer a centralized platform that integrates all dealership functions, ensuring smooth coordination across inventory, sales, and service processes.",
      },
      {
        title: "Advanced Analytics",
        description:
          "Our real-time analytics help dealers make data-driven decisions, optimize performance, and increase profitability, giving you a competitive edge in the market.",
      },
    ],
  },
  {
    title: "Custom Software Development",
    imageUrl: "/service/service2.png",
    features: [
      {
        title: "Personalized Solutions",
        description:
          "We create software solutions specifically designed to address the unique challenges and needs of your dealership, enhancing operational efficiency.",
      },
      {
        title: "Scalable Technology",
        description:
          "Our software solutions are built to grow with your business, providing flexibility and scalability to meet future demands and market changes.",
      },
    ],
  },
  {
    title: "Digital Marketing",
    imageUrl: "/service/service3.png",
    features: [
      {
        title: "Enhanced Online Presence",
        description:
          "We help dealerships increase visibility and reach through targeted digital marketing campaigns, ensuring you stand out in a competitive online marketplace.",
      },
      {
        title: "Lead Generation",
        description: "Our data-driven digital strategies generate high-quality leads, converting online traffic into valuable customers for your dealership.",
      },
    ],
  },
  {
    title: "Payroll & HRMS Solution",
    imageUrl: "/service/service4.png",
    features: [
      {
        title: "Automated Payroll Processing",
        description:
          "We automate your payroll processes, ensuring accurate salary calculations, timely deductions, and full compliance with labor regulations, saving you time and reducing errors.",
      },
      {
        title: "Employee Lifecycle Management",
        description: "From recruitment to exit, we simplify and centralize employee management, handling attendance, leaves, and HR processes for a seamless experience.",
      },
    ],
  },
  {
    title: "Mobile app Development",
    imageUrl: "/service/service5.png",
    features: [
      {
        title: "User-Centric Designs",
        description:
          "We create mobile apps that are intuitive and designed to simplify your dealership's operations, providing a user-friendly experience for the team.",
      },
      {
        title: "Seamless Integration",
        description: "Our apps integrate smoothly with your existing systems, ensuring real-time data sync and continuous access to vital information, whether in the showroom or on the go.",
      },
    ],
  },
  {
    title: "Fixed Asset Solution",
    imageUrl: "/service/service5.png",
    features: [
      {
        title: "Real-Time Asset Tracking",
        description:
          "Our fixed asset management system tracks your assets in real time, ensuring accurate reporting of location, status, and depreciation for better financial control.",
      },
      {
        title: "Lifecycle Management",
        description: "We manage the entire lifecycle of your assets from acquisition to disposal helping dealers maximize asset value and reduce unnecessary overheads.",
      },
    ],
  },
];

interface Services1Props {
  isMobile: boolean;
}

const Services1: React.FC<Services1Props> = ({ isMobile }) => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

  return (
    <>
      <div className="flex font-[Frank] text-[22px] md:text-[36px] font-semibold leading-8 tracking-wider justify-center py-4 md:py-6 text-center">
        <span className="headingtext-home">Services</span>
        <span className="ml-2 text-color">That Drives Success</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 px-4 md:px-16 lg:px-40">
        {/* Section Title */}
        <div className="col-span-12 flex justify-center items-center text-center font-[Fraunces] text-[15px] xl:text-[20px] lg:text-[18px] md:text-[15px] font-medium leading-4 tracking-wider w-full h-auto py-4 bg-[#DFBA97] rounded-t ">
          Turning Concepts Into Reality, Start to Finish
        </div>

        <div className="col-span-12 md:col-span-3 px-5 pt-2 bg-[#DFBA97] w-full flex flex-wrap justify-center max-h-[500px] rounded-bl">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={` rounded my-1 lg:w-80 md:w-64 w-80 px-2 py-2 h-[60px] md:h-[70px] flex items-center justify-center text-center font-[ledger] text-[12px] xl:text-[20px] lg:text-[18px] md:text-[15px] font-medium tracking-wider cursor-pointer transition-all duration-300 ${selectedServiceIndex === index
                ? "bg-[#34251F] text-white"
                : "bg-white"
                }`}
              onClick={() => setSelectedServiceIndex(index)}
            >
              {service.title}
            </div>
          ))}
        </div>

        <div
          className="col-span-12 md:col-span-9 p-4 border-2 bg-no-repeat bg-center bg-contain max-h-[500px] rounded-br"
        >
          <div className="mb-8">
            {servicesData[selectedServiceIndex].features.map((feature, fIndex) => (
              <div key={fIndex} className="mb-4">
                <h3 className="font-[Frank] text-[18px] md:text-[20px] font-semibold leading-10">
                  {feature.title}
                </h3>
                <p className="font-[Frank] -mt-4 text-[14px] md:text-[16px]">
                  {feature.description}
                </p>
              </div>
            ))}
            <div className="flex justify-center items-center h-full mt-8">
              <Image
                src={servicesData[selectedServiceIndex].imageUrl}
                alt="text"
                height={400}
                width={400}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services1;
