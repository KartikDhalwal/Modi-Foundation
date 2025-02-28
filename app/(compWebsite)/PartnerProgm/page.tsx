"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Swal from "sweetalert2";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/dailog";

const Products = [
  { id: 1, name: "seva", value: "5", photo: "/events/event1.jpeg" },
  { id: 2, name: "competent", value: "5", photo: "/events/event2.jpeg" },
  // { id: 3, name: "vipul", value: "5", photo: "/events/event3.jpeg" },
  // { id: 4, name: "rana", value: "5", photo: "/events/event4.jpeg" },
  // { id: 5, name: "pegasus", value: "5", photo: "/events/event5.jpeg" },
  { id: 6, name: "Platinum", value: "5", photo: "/events/event6.jpeg" },
  { id: 7, name: "seva", value: "5", photo: "/events/event7.jpeg" },
  { id: 8, name: "competent", value: "5", photo: "/events/event8.jpeg" },
  { id: 9, name: "vipul", value: "5", photo: "/events/event9.jpeg" },
  { id: 10, name: "rana", value: "5", photo: "/events/event10.jpeg" },
  // { id: 11, name: "pegasus", value: "5", photo: "/events/event11.jpeg" },
  { id: 12, name: "rana", value: "5", photo: "/events/event12.jpeg" },
  { id: 13, name: "pegasus", value: "5", photo: "/events/event13.jpeg" },
];

function CombinedPage() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [whatsappMessage, setWhatsappMessage] = React.useState("");
  const [IsMessageVisible, setIsMessageVisible] = React.useState("");
  const [formData, setFormData] = React.useState({
    Name: "",
    Phone: "",
    Contact_Person: "",
    RefreeName: "",
    RefreeMobileNo: "",
    RefreeMsg: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Check if RefreeMobileNo is filled with 10 digits
    if (name === "RefreeMobileNo") {
      if (value.length === 10) {
        const message = `Hello ${formData.RefreeName},

I hope you're doing well! I wanted to introduce you to a great opportunity. ${formData.Name} has referred you to us. Here’s a little message from them: "${formData.RefreeMsg}" We believe you’ll find our service/product valuable and would love for you to check it out. If you need any more details or have any queries, feel free to reach out.
Looking forward to connecting with you!

Best regards,
Vyn Automation Pvt. Ltd.

Visit us at: <a href="https://autovyn.com/" target="_blank" rel="noopener noreferrer">https://autovyn.com/</a>`;

        setWhatsappMessage(message); // Show the message if mobile number is complete
      } else {
        setWhatsappMessage(""); // Hide the message if number is incomplete
      }
    }
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
    if (!formData.Phone) {
      Swal.fire({
        icon: "info",
        title: "Please add MobileNo",
      });
      return;
    }
    if (!formData.RefreeName) {
      Swal.fire({
        icon: "info",
        title: "Please add to whow you want to refer",
      });
      return;
    }
    if (!formData.Contact_Person) {
      Swal.fire({
        icon: "info",
        title: "Please add Contant Person Name",
      });
      return;
    }
    if (!formData.RefreeMobileNo) {
      Swal.fire({
        icon: "info",
        title: "Please add Referee's Mobie No",
      });
      return;
    }
    try {
      const result = await axios.post("/api/PartnerPrgm", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      Swal.fire({
        icon: "success",
        title: "Thank you for your referral!",
      }).then(() => {
        setFormData({
          Name: "",
          Phone: "",
          Contact_Person: "",
          RefreeName: "",
          RefreeMobileNo: "",
          RefreeMsg: "",
        });
      });
      setIsDialogOpen(false)
      setWhatsappMessage("");
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
          <div className="col-span-12 mt-6 font-['Frank_Ruhl_Libre'] text-[20px] font-bold tracking-[0.12em] text-left opacity-[63%]">
            Refer, Reward, Repeat!
          </div>
          <div className="col-span-12 mt-4 font-['Frank_Ruhl_Libre'] text-[30px] md:text-[34px] lg:text-[40px] xl:text-[48px] font-bold tracking-[0.10em] text-left">
            Refer AUTO-VYN
          </div>
          <div className="col-span-12 headingtext-home font-[frank] text-[15px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold tracking-[0.09em] text-left">
            -&nbsp;work, better together
          </div>
          <p className="text-[20px] font-[frank] mt-4">
            Become an Autovyn certified Partner by Joining our referral program
            to provide your reference and help in onboarding new clients.
          </p>

          <div className=" font-[frank] font-bold text-[36px] flex justify-center mt-6">
            <button
              onClick={() => {
                setIsDialogOpen(true);
              }}
              className="text-white font-frank text-[20px] rounded-xl px-6 py-2 bg-[#34251F]"
            >
              Refer
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 col-span-12 pl-4 pr-4 lg:pt-10 lg:pb-10 md:pb-10">
          <Image
            src={"/partnerprgmNew-min.JPG"}
            alt={"Automotive Industry Solutions"}
            className="w-full h-[300px] lg:h-[450px] md:h-[450px] object-contain rounded-lg mb-2"
            width={600}
            height={600}
          />
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[550px] text-color max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <DialogHeader>
            <DialogTitle>
              <div className="col-span-12 p-3 bg-color mr-4 -mt-6  text-frank-2419 rounded-t">
                Good Things Come to Those Who Refer!
              </div>
            </DialogTitle>

            <DialogDescription>
              <div className="grid grid-cols-12 gap-x-4 gap-y-2 h-[480px] sm:h-[480px] md:h-auto lg:h-auto overflow-y-scroll overflow-x-hidden">
                <div className="col-span-12 md:col-span-12 lg:col-span-6 bg-white rounded-xl">
                  <label className="text-black flex text-left text-[16px] font-serif font-semibold">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="Name"
                    value={formData.Name}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>

                <div className="col-span-12 md:col-span-12 lg:col-span-6 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex text-left font-semibold">
                    Mobile No <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="Phone"
                    type="number"
                    value={formData.Phone}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>

                <div className="col-span-12 md:col-span-12 lg:col-span-12 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex text-left font-semibold">
                    To Whom You Want to Refer?(Company Name){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="RefreeName"
                    value={formData.RefreeName}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>

                <div className="col-span-12 md:col-span-12 lg:col-span-6 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex text-left font-semibold">
                    Contact Person Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="Contact_Person"
                    value={formData.Contact_Person}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>

                <div className="col-span-12 md:col-span-12 lg:col-span-6 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex text-left font-semibold">
                    Referee's Mobile No <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="RefreeMobileNo"
                    type="number"
                    value={formData.RefreeMobileNo}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>

                <div className="col-span-12 md:col-span-12 lg:col-span-12 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex text-left font-semibold">
                    Message to Referee
                  </label>
                  <textarea
                    name="RefreeMsg"
                    value={formData.RefreeMsg}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-24 border-2 border-gray-300"
                    placeholder="Write a message to the person you're referring"
                  />
                </div>
              </div>
            </DialogDescription>
            <div className="col-span-12 flex -mb-8  justify-center">
              <button
                onClick={handleSubmit}
                className="text-white font-serif text-sm rounded-lg px-6 py-2 bg-[#34251F]"
              >
                Submit
              </button>
            </div>
            {whatsappMessage && (
              <div className="mt-6 p-4 bg-gray-50 border border-gray-300 rounded-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Your Referral Message:
                </h3>
                <div className="text-sm text-gray-700 whitespace-pre-wrap">
                  <span dangerouslySetInnerHTML={{ __html: whatsappMessage }} />
                </div>
              </div>
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CombinedPage;
