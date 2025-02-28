"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Swal from "sweetalert2";

const Products = [
  { id: 1, name: "seva", value: "5", photo: "/events/event14-min.JPG" },
  { id: 2, name: "competent", value: "5", photo: "/events/event2.jpeg" },
  { id: 3, name: "pegasus", value: "5", photo: "/events/event18-min.JPG" },
  { id: 4, name: "pegasus", value: "5", photo: "/events/event19-min.JPG" },
  // { id: 5, name: "pegasus", value: "5", photo: "/events/event5.jpeg" },
  { id: 6, name: "Platinum", value: "5", photo: "/events/event6.jpeg" },
  { id: 7, name: "seva", value: "5", photo: "/events/event15-min.JPG" },
  { id: 8, name: "competent", value: "5", photo: "/events/event8.jpeg" },
  { id: 9, name: "vipul", value: "5", photo: "/events/event9.jpeg" },
  { id: 10, name: "rana", value: "5", photo: "/events/event10.jpeg" },
  // { id: 11, name: "pegasus", value: "5", photo: "/events/event11.jpeg" },
  { id: 12, name: "rana", value: "5", photo: "/events/event17-min.JPG" },
  { id: 13, name: "pegasus", value: "5", photo: "/events/event16-min.JPG" },
  
];

function CombinedPage() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    mobile: "",
    message: "",
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.Name) {
      Swal.fire({
        icon: "info",
        title: "Please add Name",
      });
      return;
    }
    if (!formData.email) {
      Swal.fire({
        icon: "info",
        title: "Please add Email",
      });
      return;
    }
    if (!formData.mobile) {
      Swal.fire({
        icon: "info",
        title: "Please add MobileNo",
      });
      return;
    }
    if (!formData.message) {
      Swal.fire({
        icon: "info",
        title: "Please add Message for help",
      });
      return;
    }
    try {
      const result = await axios.post("/api/SubmitContact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      Swal.fire({
        icon: "success",
        title: "Saved Successfully",
      }).then(() => {
        setFormData({
          Name: "",
          email: "",
          mobile: "",
          message: "",
          privacyPolicy: false,
        });
      });
      console.log("Form submitted successfully", result);
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <>
      {/* Contact Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-20 p-6 md:p-10 lg:p-20 bg-none md:bg-cover">
        <div className="lg:col-span-6 col-span-12 p-2 lg:p-6 md:p-4">
          <h1 className="heading-frank-4870 text-[14px] xl:text-[24px] lg:text-[22px] md:text-[18px]">
            Contact Us
          </h1>
          <p className="text-[20px] font-[frank]">
            Submit the form, and one of our specialists will contact you shortly
            to discover how AutoVyn can simplify your digital workplace.
          </p>
          <p className="text-[20px] font-[frank] mt-4 flex">
            <AiOutlineCheck className="mt-2 mr-5 headingtext-home" />
            Immediate support via chat or email
          </p>
          <p className="text-[20px] font-[frank] mt-4 flex">
            <AiOutlineCheck className="mt-2 mr-5 headingtext-home" />
            Connect with a dedicated product expert
          </p>
          <p className="text-[20px] font-[frank] mt-4 flex">
            <AiOutlineCheck className="mt-2 mr-5 headingtext-home" />
            Simple integration with your existing systems
          </p>
          <div className="headingtext-home font-[frank] font-bold text-[36px] flex justify-center mt-6">
            Our Office
          </div>
          <p className="text-black flex font-[frank] text-[20px] leading-[20px] justify-center">
            +91 90797 82505
          </p>
          <p className="text-black flex font-[frank] text-center text-[20px] leading-[20px] justify-center">
            1st Floor Swastik building, Murlipura, Jaipur.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-6 col-span-12 bg-white p-6 md:p-10 rounded-xl shadow"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
              <label className="text-black text-[16px] font-bold font-serif">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                className="text-black p-2 w-full rounded h-12 border-2 border-gray-300"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="text-black text-[16px] font-serif font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-black p-2 w-full rounded h-12 border-2 border-gray-300"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="text-black text-[16px] font-serif font-semibold">
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="text-black p-2 w-full rounded h-12 border-2 border-gray-300"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="text-black text-[16px] font-serif font-semibold">
                How Can We Help You <span className="text-red-500">*</span>
              </label>
              <input
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="text-black p-2 w-full rounded h-12 border-2 border-gray-300"
              />
            </div>

            <div className="col-span-1 text-[16px] md:col-span-2 text-black">
              <label>
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  className="mr-2"
                />
                I confirm{" "}
                <span className="underline hover:cursor-pointer text-frankRed">
                  AutoVyn Privacy Policy
                </span>{" "}
                and I agree to the use of my data in line therewith.
                <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="text-white font-serif text-[20px] rounded-xl px-6 py-2 bg-[#34251F]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Events Section */}
      <div className="p-2 md:p-6 lg:p-20">
        <div className="flex font-[Frank] text-[48px] md:text-[38px] font-semibold leading-8 justify-center  text-center">
          <span className="ml-2 text-color text-[30px] md:text-[34px] lg:text-[40px] xl:[48px]">
            Life&nbsp; At&nbsp;&nbsp;
          </span>
          <span className=" text-[30px] md:text-[34px] lg:text-[40px] xl:[48px]">
            AUTO-VYN
          </span>
        </div>
        <div className="grid grid-cols-12 gap-4 pb-12">
          <div className="col-span-12 overflow-hidden">
            <div
              className="flex animate-marqueevent"
              style={{ display: "flex", width: "calc(100% * 2)" }}
            >
              {[...Products, ...Products].map((product, index) => (
                <div
                  key={index} // Use index for repeated array elements
                  className="p-4 cursor-pointer rounded shadow-md flex-shrink-0 w-48 sm:w-60 md:w-72 lg:w-80"
                >
                  <div className="flex flex-col items-center">
                    <Image
                      src={product.photo}
                      alt={product.name}
                      className="w-full h-40 lg:h-56 object-cover mb-2"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueevent {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marqueevent {
          animation: marqueevent 20s linear infinite;
        }
      `}</style>
    </>
  );
}

export default CombinedPage;
