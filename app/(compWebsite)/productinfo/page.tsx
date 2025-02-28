"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button, Box } from "@mui/material";

import Image from "next/image";
import { Alkatra } from "next/font/google";
import { Frank_Ruhl_Libre } from "next/font/google";
import ImageSlider from "@/app/components/imageSlider";
import { IoIosAddCircle } from "react-icons/io";
import { BsBrowserChrome } from "react-icons/bs";
import { MdMobileFriendly } from "react-icons/md";
import axios from "axios";
import AssetManagementFlow from "@/app/components/assetProcess";
import MGAApprovalFlow from "@/app/components/docketProcess";
import DemocarGatePass from "@/app/components/DemocargatepassProcess";
import Discount from "@/app/components/discount";
import Financepayout from "@/app/components/Financepayout";
import bookingrefund from "@/app/components/bookingrefund";
import newcarstocknew from "@/app/components/newcarstocknew";
import mgaProcess from "@/app/components/mgaProcess";
import newcarstockaudit from "@/app/components/newcarstockaudit";
import truevalue from "@/app/components/truevalue";
import Pickanddrop from "@/app/components/Pickanddrop";
import fuel from "@/app/components/fuel";
import Insurance from "@/app/components/Insurance";
import Bodyshopclaim from "@/app/components/Bodyshopclaim";
import Serviceoffer from "@/app/components/Serviceoffer";
import Vas from "@/app/components/Vas";
import dailycashupdation from "@/app/components/dailycashupdation";
import Incentive from "@/app/components/Incentive";
import partOrder from "@/app/components/partOrder";

const alkatra = Alkatra({
  subsets: ["latin"], // Specify subsets you need
  weight: ["400", "700"], // Specify weights you need
});
const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["latin"], // Specify subsets as needed
  weight: ["400", "500", "700"], // Specify the weights you need
});

const componentMap = {
  AssetManagementFlow: AssetManagementFlow,
  MGAApprovalFlow: MGAApprovalFlow,
  DemocarGatePass: DemocarGatePass,
  Discount: Discount,
  Financepayout: Financepayout,
  bookingrefund: bookingrefund,
  newcarstocknew: newcarstocknew,
  mgaProcess: mgaProcess,
  newcarstockaudit: newcarstockaudit,
  truevalue: truevalue,
  Pickanddrop: Pickanddrop,
  fuel: fuel,
  Insurance: Insurance,
  Bodyshopclaim: Bodyshopclaim,
  Serviceoffer: Serviceoffer,
  Vas: Vas,
  dailycashupdation: dailycashupdation,
  Incentive: Incentive,
  partOrder: partOrder,
};
const ProductInfo = ({ product }) => {
  if (!product) {
    return <div>Error loading product</div>;
  }

  const ComponentToRender = componentMap[product?.flow];

  const options1 = [{ value: "1", label: product.name }];
  const options2 = [
    { value: "buy", label: "Buy Module" },
    { value: "try", label: "Try Module" },
    { value: "demo", label: "Have a Demo of Module" },
  ];

  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleClick = (item: any) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === item ? null : item
    );
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    company: "",
    option1: "",
    option2: "",
    address: "",
    additionalComment: "",
  });

  // Handle input change
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await axios.post("/api/SubmitEnquiry", formData, {
      headers: {
        "Content-Type": "application/json", // Set the content type to application/json
      },
    });
    console.log("Form submitted successfully", formData);
  };

  const showdata = async () => {
    try {
      window.location.href = `https://erp.autovyn.com/backend/fetch?filePath=hrms.apk`;
    } catch (error) {
      console.error("Error occurred while making the get request:", error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" color="black">
      <div className="grid grid-cols-12 gap-6 lg:px-2 p-0 mb-5">
        {/* Text Section */}
        <div className="lg:col-span-5 md:col-span-6 col-span-12 lg:p-16 mt-6 lg:mt-20 md:p-16 p-4">
          <div
            className={`mb-2 text-frankRed font-semibold font-[frank] text-[17px]`}
          >
            {product?.HeadLine}
          </div>

          <div className="heading-frank-4870">{product?.name}</div>
          <div className={`mb-2  font-[frank] text-[18px]`}>
            {product?.DetHeadLine}
          </div>
          <div className="flex gap-3 mt-10 md:mr-24 lg:mr-32">
            <a
              href="https://erp.autovyn.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                sx={{
                  background: "#34251F",
                  color: "white",
                  fontSize: "16px",
                  textTransform: "none",
                  height: { lg: "47px", md: "40px", sm: "35px" },
                  width: { lg: "196px", md: "160px", sm: "130px" },
                  fontFamily: "heading-frank-2592",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Add shadow
                  border: "none",
                  "&:hover": {
                    backgroundColor: "#713f12",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
                  },
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 16px",
                }}
              >
                <span>Visit Web</span>
              </Button>
            </a>
            <Button
              variant="outlined"
              sx={{
                background: "#34251F",
                color: "white",
                fontSize: "16px",
                textTransform: "none",
                height: { lg: "47px", md: "40px", sm: "35px" },
                width: { lg: "196px", md: "160px", sm: "130px" },
                fontFamily: "heading-frank-2592",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Add shadow
                border: "none",
                "&:hover": {
                  backgroundColor: "#713f12",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
                },
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 16px",
              }}
              onClick={showdata}
            >
              <span>Get App</span>
            </Button>
          </div>
        </div>
        <div className="relative lg:col-span-6 md:col-span-6 col-span-12 pl-4 pr-4 lg:pt-10 lg:pb-10 md:pb-10">
          {/* First Image (Half of Yeah.png displayed, moved to the right) */}
          <Image
            src={"/Yeah.png"}
            alt="home"
            className="absolute lg:top-[-20%] lg:left-[49%] lg:w-[510px] lg:h-[800px] object-cover  w-[190px] h-[300px] left-[49%] top-[-20%]"
            width={1000}
            height={1000}
          />

          {/* Second Image (Placed above Yeah.png) */}
          <Image
            src={product?.photoInd}
            alt="home"
            className="relative w-full h-[300px]  lg:h-[500px] md:h-[500px] rounded-lg  object-cover shadow-2xl mb-2"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className=" font-[Frank]  font-bold  text-center col-span-12 mt-5 ">
        <p className="text-[20px] md:text-[26px] lg:text-[30px] headingtext-home leading-[5px] tracking-[3%]">
          CASE&nbsp; STUDY
        </p>
        <p className="text-[14px] md:text-[18px] lg:text-[22px] text-color font-semibold -mt-4 leading-[60px] tracking-[4%]">
          Real-world problems, real-world solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-6 sm:px-5 md:px-10 lg:px-20 h-[650px] lg:mb-10 ">
        <div className="lg:col-span-8 md:col-span-6 col-span-12 p-4 sm:p-6 md:p-10 -mt-16 md:mt-2">
          {product.CaseStudy.map((caseItem) => (
            <div key={caseItem.id} className="mb-6">
              <h3 className="text-[16px] md:text-[26px] lg:text-[30px] font-semibold font-[Frank] mt-2">
                {caseItem.title}
              </h3>
              {Array.isArray(caseItem.description) ? (
                <ul className="list-disc pl-6 text-gray-600 text-[15px] font-[Frank]">
                  {caseItem.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-[15px] font-[Frank]">
                  {caseItem.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 flex align-middle md:col-span-6  col-span-12 relative items-center hidden md:block mt-5">
          <Image
            src={"/casestudy.png"}
            alt={"Automotive Industry Solutions"}
            className="  mb-5 ml-10"
            width={400}
            height={400}
          />
        </div>
      </div>

      <div className=" font-[Frank]  font-bold  text-center col-span-12 lg:mt-16 mt-8 hidden lg:block">
        <p className="text-[15px] headingtext-home leading-[8px] tracking-[3%]">
          INTERACTIVE&nbsp; DISPLAY
        </p>
        <p className="text-[26px] text-color font-semibold -mt-4 leading-[60px] tracking-[4%]">
          Elegance In Every Move
        </p>
      </div>

      <div className="container mx-auto  mb-8 h-[450px] w-full hidden lg:block">
        <ImageSlider images={product?.screenimage} />
      </div>

      <div className=" font-[Frank]  font-bold  text-center col-span-12 mt-18 hidden lg:block">
        <p className="text-[17px] headingtext-home leading-[8px] tracking-[3%]">
          WHAT’S&nbsp; INSIDE
        </p>
        <p className="text-[26px] text-color font-semibold -mt-4 mb-5 leading-[60px] tracking-[4%]">
          See the Magic of Technology's Features in Action
        </p>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 px-6 sm:px-10 md:px-20 lg:px-40 h-[650px] hidden lg:block">
        <div className="lg:col-span-6 md:col-span-6 col-span-6 p-4 sm:p-6 md:p-10">
          <Image
            src={`${product?.featureimg}`}
            alt={"home"}
            className=" rounded-bl-[150px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded mb-2"
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12 p-4 sm:p-6 md:p-10 -mt-16 ">
          {product?.Features.map((item) => (
            <div key={item.id}>
              <div
                className="bg-slate-100 flex px-4 sm:px-6 md:px-8 relative items-center my-2 text-center h-[70px] font-[Frank] text-[20px] sm:text-[20px] md:text-[20px] font-medium leading-8 tracking-wider cursor-pointer"
                onClick={() => handleClick(item)}
              >
                <div>{item.title}</div>
                <div className="absolute right-4">
                  <IoIosAddCircle className="text-orange-500" />
                </div>
              </div>
              {selectedItem?.id === item.id && (
                <div className="p-4 sm:p-6 border-2">
                  <p className="text-[18px] sm:text-[18px] md:text-[18px] font-[Frank] font-extralight">
                    {selectedItem.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div> */}

      <div className="grid grid-cols-12 px-12 gap-4 mb-8 h-[650px]">
        <div className="lg:col-span-6 md:col-span-6 sm:col-span-12">
          <Image
            src={`${product?.featureimg}`}
            alt={"home"}
            className=" rounded-bl-[150px] h-[200px] w-full sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded mb-2"
            width={1000}
            height={1000}
          />
        </div>

        <div className="lg:col-span-6 md:col-span-6 sm:col-span-12">
          {product?.Features.map((item) => (
            <div key={item.id}>
              <div
                className="bg-slate-100 flex px-4 sm:px-6 md:px-8 relative items-center my-2 text-center h-[70px] font-[Frank] text-[20px] sm:text-[20px] md:text-[20px] font-medium leading-8 tracking-wider cursor-pointer"
                onClick={() => handleClick(item)}
              >
                <div>{item.title}</div>
                <div className="absolute right-4">
                  <IoIosAddCircle className="text-orange-500" />
                </div>
              </div>
              {selectedItem?.id === item.id && (
                <div className="p-4 sm:p-6 border-2">
                  <p className="text-[18px] sm:text-[18px] md:text-[18px] font-[Frank] font-extralight">
                    {selectedItem.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {product &&
      Array.isArray(product.submodule) &&
      product.submodule?.length > 0 ? (
        <div className="grid grid-cols-12 gap-2 lg:pl-16 lg:p-8 lg:pr-16 mt-20  ">
          <div className=" font-[Frank]  font-bold  text-center col-span-12 hidden md:block">
            <p className="text-[17px] headingtext-home leading-[8px] tracking-[3%]">
              MODULAR&nbsp; SYSTEM&nbsp; SOLUTION
            </p>
            <p className="text-[26px] text-color font-semibold -mt-4 leading-[60px] tracking-[4%]">
              Designed for efficiency, built for growth
            </p>
          </div>

          {product.submodule.map((item: any, index: number) => (
            <div
              key={index}
              className="mt-20 md:mt-0 lg:col-span-3 col-span-12 md:col-span-4 min-h-72 transform transition-all duration-300 hover:-mt-5 hover:mb-5 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl relative group"
            >
              <Image
                className="h-24 w-24 object-cover mx-auto mt-4 transition-transform duration-300 transform group-hover:scale-125"
                src={`${item?.img}`}
                alt={item?.name}
                width={1000}
                height={1000}
              />

              <div className="p-4 text-center">
                <h2 className="font-[frank] text-[20px] font-bold">
                  {item?.name}
                </h2>
                <p className="text-frank-1619 ">{item?.desc}</p>
              </div>

              <div className="absolute w-full h-1 bottom-0 left-0 bg-[#B0743B] text-white text-center hover:cursor-pointer transform translate-y-full group-hover:translate-y-0 flex justify-center items-center transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {product?.flow ? (
            <div className="grid grid-cols-12 relative gap-4">
              <div className="col-span-12 text-center h-[70px] font-[Frank] text-[20px] sm:text-[20px] md:text-[36px] font-semibold ">
                <p className="text-[17px] headingtext-home leading-[8px] tracking-[3%]">
                  PROCESS&nbsp; FLOW&nbsp;
                </p>
                <p className="text-[26px] text-color font-semibold -mt-4 leading-[60px] tracking-[4%]">
                  Designed for efficiency, built for growth
                </p>
              </div>
              <div className="col-span-12">
                {ComponentToRender && <ComponentToRender />}
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      )}

      <div
        className={`p-4 flex font-[Frank] font-semibold text-[#34251F] lg:text-[24px] text-[20px] text-center ${frankRuhlLibre.className}`}
      >
        {product?.content}
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-12 gap-6 p-6 lg:pl-20 lg:pr-20 lg:pb-20 enq-bg"
      >
        <div className="col-span-12 flex text-[#604B38] font-[Frank] text-[24px] font-semibold justify-center">
          PRODUCT&nbsp; ENQUIRY
        </div>
        <div className="lg:col-span-4 col-span-12">
          <input
            className="w-full h-14 border-slate-400 px-4"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <input
            className="w-full h-14 border-slate-400 px-4"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <input
            className="w-full h-14 border-slate-400 px-4"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <input
            className="w-full h-14 border-slate-400 px-4"
            placeholder="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <input
            className="w-full h-14 border-slate-400 px-4"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <input
            className="w-full h-14 border-slate-400 px-4"
            placeholder="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <select
            className="w-full h-14 px-4"
            name="option1"
            value={formData.option1}
            onChange={handleChange}
          >
            {options1.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="lg:col-span-6 col-span-12">
          <select
            className="w-full h-14 px-4"
            name="option2"
            value={formData.option2}
            onChange={handleChange}
          >
            {options2.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="lg:col-span-12 col-span-12">
          <textarea
            className="w-full px-4 py-1 h-20"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="lg:col-span-12 col-span-12">
          <input
            className="w-full h-14 border-slate-400 px-4"
            placeholder="Additional Comment"
            name="additionalComment"
            value={formData.additionalComment}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12 flex justify-center text-center">
          <button
            type="submit"
            className="rounded  text-white font-[Frank] bg-[#34251F] py-2.5 text-[28px] md:text-[16px] font-semibold  px-4"
          >
            Submit
          </button>
        </div>
      </form>
    </Box>
  );
};

export default ProductInfo;
