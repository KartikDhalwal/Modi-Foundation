"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/dailog";
import axios from "axios";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";

const PortTestimonial = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [value, setValue] = React.useState(null); // Rating value
  const [hover, setHover] = React.useState(-1);
  const [formData, setFormData] = React.useState({
    Name: "",
    Email: "",
    Company: "",
    Testimonial: "",
    Rating: "", // Add Rating field
    Image: "",
  });
  const labels = {
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
  };

  const [dates, setDates] = React.useState({
    Image: null,
  });
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setDates((prevData) => ({
      ...prevData,
      Image: file,
    }));
  };

  const logos = [
    // "/portfolio/ms.png",
    // "/portfolio/Eicher.png",
    // "/portfolio/SEVA.png",
    // "/portfolio/Competent_logo.png",
    // "/portfolio/Vipul_logo.png",
    // "/portfolio/RANA_logo.png",
    // "/portfolio/PEGASUS_LOGO.png",
    // "/portfolio/Platinum.png",
    // "/portfolio/aspa.png",
    // "/portfolio/AUTONATION.png",
    // "/portfolio/Bhagwati_motors.png",
    // "/portfolio/BHATIA.png",
    // "/portfolio/city_cars.png",
    // "/portfolio/motorcraft.png",
    // "/portfolio/NIMAR.png",
    // "/portfolio/OCEAN.png",
    // "/portfolio/patelmotors_logo.png",
    // "/portfolio/Shreyas_logo.png",
    // "/portfolio/SUWALKA.png",
    // "/portfolio/UNITARA.png",
    // "/portfolio/MAGIC_logo.png",
    // "/portfolio/SHUBH_LOGO.jpg",
    // "/portfolio/Accel.png",
    // "/portfolio/AL_Logo.png",
    // "/portfolio/BA.png",
    // "/portfolio/BAJAJ.jpg",
    // "/portfolio/FORCELOGO.jpg",
    // "/portfolio/GreenGlobeName.png",
    // "/portfolio/GS_Logo.png",
    // "/portfolio/MAGNUS2new.jpg",
    // "/portfolio/MAGNUS2.jpg",
    // "/portfolio/newlogo.png",
    // "/portfolio/piaggio.png",
    // "/portfolio/Pic1.png",
    // "/portfolio/Sanghi_Logo.jpg",
    // "/portfolio/NEWLOGO1.png",
    // "/portfolio/STEPH.jpg",
  ];
  const [testimonials, setTestimonials] = useState([{}]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log(dates, "dates");
    console.log(formData, "formData");

    // Check for name and icon before proceeding
    if (!formData.Name) {
      Swal.fire({
        icon: "info",
        text: "Enter Name",
      });
      return;
    }

  
    if (!formData.Testimonial) {
      Swal.fire({
        icon: "info",
        text: "Enter Your Testimonial",
      });
      return;
    }

    if (!formData.Rating) {
      Swal.fire({
        icon: "info",
        text: "Enter Rating",
      });
      return;
    }

    try {
      const formdata2 = new FormData();

      // Check if an image is selected and append it to the FormData
      if (dates.Image) {
        formdata2.append("Image", dates.Image);
      }

      console.log(formdata2, "formdata2");

      // If there is an image, upload it
      if (dates.Image) {
        const result = await axios.post(
          `https://erp.autovyn.com/backend/Website/uploadTestimonialImage`,
          formdata2,
          {
            headers: {
              compcode: "avyn",
            },
          }
        );
        console.log(result.data, "result");

        formData.Image = result.data; // Save the image URL to formData
      }

      console.log(formData, "komo");

      // Proceed with saving the category data
      const result1 = await axios.post("/api/Testimonials", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "We appreciate your kind words! Thank you for taking the time to share your testimonial.",
      });

      // Reset the form and states
      setFormData({
        Name: "",
        Email: "",
        Testimonial: "",
        Company: "",
        Rating: "", // Add Rating field
        Image: "", // Reset the image field
      });

      setIsDialogOpen(false);
    } catch (error) {
      setIsDialogOpen(false);
      Swal.fire({
        icon: "error",
        title: `${error.response?.data.Message}`,
      });
      console.error("Error saving data:", error);
    }
  };

  const ViewTestimonial = async () => {
    try {
      const result = await axios.post(
        "/api/TestimonialView",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Form submitted successfully", result.data.Candidate);
      setTestimonials(result.data.Candidate || []);
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  useEffect(() => {
    ViewTestimonial();
  }, []);

  const [visibleTestimonials, setVisibleTestimonials] = useState(
    testimonials.slice(0, 3)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleTestimonials(
        testimonials.slice(currentIndex, currentIndex + 3)
      );
      setCurrentIndex((prevIndex) =>
        prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex, testimonials]);

  return (
    <div>
      {/* Portfolio Section */}
      <section className="mb-16">
        <div className="flex font-[Frank] text-[16px] xl:text-[28px] lg:text-[24px] md:text-[20px] font-semibold leading-8 justify-center py-4 md:py-6 text-center">
          <span className="ml-2 text-color">Join Over&nbsp;</span>
          <span className="headingtext-home">5000+</span>
          <span className="ml-2 text-color">Global Users Who Trust Us</span>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex animate-marquee"
            style={{
              display: "flex",
              width: "350%",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 xl:w-40 xl:h-40 h-16 w-16 md:h-24 md:w-24 lg:h-36 lg:w-36 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="object-contain w-full h-full "
                />
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-100%);
              }
            }

            .animate-marquee {
              animation: marquee 63s linear infinite;
            }
          `}</style>
        </div>
      </section>
      {/* Testimonials Section */}
      <section>
        <div className="relative py-4 md:py-6 flex flex-col md:flex-row md:items-center">
          {/* Heading */}
          <div className="text-center md:text-left md:flex-1 font-[Frank] text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold leading-8 custom-tracking2">
            Testimonials: Voice of Trust
          </div>
          {/* Button */}
          <button
            className=" md:mt-0 px-4 py-2 text-gray-600 font-medium bg-slate-200 rounded-lg hover:bg-slate-300 md:ml-auto"
            onClick={() => {
              setIsDialogOpen(true);
            }}
          >
            Add Your Testimonial
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg shadow-sm"
            >
              <Image
                src={
                  testimonial.Img && testimonial.Img !== ""
                    ? `https://erp.autovyn.com/backend/fetch?filePath=${testimonial.Img}`
                    : "/home.png"
                }
                alt="Testimonial image"
                className={`rounded-full h-32 w-32`}
                width={128}
                height={128}
              />

              <Rating
                name={`rating-${index}`}
                className="mt-2"
                value={parseInt(testimonial.Rating)}
                readOnly
              />
              <p className="capitalize text-lg font-serif text-center mt-2">
                {testimonial.Name}
              </p>
              <p className="capitalize text-base font-[frank] text-center -mt-4 headingtext-home">
                {testimonial.Company}
              </p>
              <p className="text-sm text-center mt-0">
                {testimonial.Testimonial}
              </p>
              {testimonial.GoogleReview === "1" && (
                <p className="text-sm text-center text-gray-500 mt-2">
                  (Google review)
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[550px] text-color max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <DialogHeader>
            <DialogTitle>
              <div className="col-span-12 p-3 bg-color mr-4 -mt-6 text-frank-2419 rounded-t">
              Your feedback matters to us!
              </div>
            </DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-12 gap-x-4 gap-y-2 overflow-x-hidden">
                <div className="col-span-12 md:col-span-12 lg:col-span-6 bg-white rounded-xl">
                  <label className="text-black flex text-left text-[16px] font-serif font-semibold mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="Name"
                    value={formData.Name}
                    onChange={handleInputChange}
                    className="text-black p-1 w-full rounded h-8 border border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-6 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex text-left font-semibold mb-1">
                    Email 
                  </label>
                  <input
                    name="Email"
                    value={formData.Email}
                    onChange={handleInputChange}
                    className="text-black p-1 w-full rounded h-8 border border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex text-left font-semibold mb-1">
                    Company
                  </label>
                  <input
                    name="Company"
                    value={formData.Company}
                    onChange={handleInputChange}
                    className="text-black p-1 w-full rounded h-8 border border-gray-300"
                  />
                </div>
                <div className="col-span-12 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex text-left font-semibold mb-1">
                    Testimonial <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="Testimonial"
                    rows={3}
                    value={formData.Testimonial}
                    onChange={handleInputChange}
                    className="text-black p-1 w-full rounded border border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-6 bg-white rounded-xl h-28">
                  <label className="text-black text-[16px] font-serif flex text-left font-semibold mb-1">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    name="Image"
                    onChange={(event) => handleFileChange(event)}
                    className="text-black p-1 w-full rounded h-20 border border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-6 bg-white rounded-xl h-28 mt-6">
                  <label className="text-black text-[16px] font-serif flex ml-52 font-semibold mb-2">
                    Rating<span className="text-red-500">*</span>
                  </label>
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                      setFormData({ ...formData, Rating: newValue }); // Update formData with rating value
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                    sx={{ textAlign: "left" }}
                  />
                  {value !== null && (
                    <Box sx={{ ml: 2 }}>
                      {labels[hover !== -1 ? hover : value]}{" "}
                      {/* Show corresponding label */}
                    </Box>
                  )}
                </div>
              </div>
            </DialogDescription>
            <div className="col-span-12 flex -mb-8 justify-center">
              <button
                onClick={handleSubmit}
                className="text-white font-serif text-sm rounded-lg px-6 py-2 bg-[#34251F]"
              >
                Submit
              </button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortTestimonial;
