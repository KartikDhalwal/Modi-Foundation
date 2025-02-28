"use client";
import Image from "next/image";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/dailog";
import axios from "axios";
import Swal from "sweetalert2";

function showSideAlert(message, type) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    customClass: {
      container: "side-alert-container",
      popup: `side-alert-${type}`,
      title: "side-alert-title",
      icon: "side-alert-icon",
    },
  });

  Toast.fire({
    icon: type,
    title: message,
  });
}

const Careers = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    Name: "",
    Phone: "",
    Email: "",
    Address: "",
    City: "",
    State: "",
    PositionApplied: "",
    AvailabilityToStart: "",
    YearsOfExp: "",
    PreJobTitle: "",
    Resume: "", // Placeholder for file upload, adjust based on how you want to handle files
  });

  // Handle input change
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

  const handleSubmit = async () => {
    console.log(dates,'dates')
    console.log(formData,'formData')
  
    // Check for name and icon before proceeding
    if (!formData.Name) {
      Swal.fire({
        icon: "info",
        text: "Enter Name",
      });
      return;
    }
   
    if (!formData.Phone) {
      Swal.fire({
        icon: "info",
        text: "Enter Your PhoneNo",
      });
      return;
    }
    if (!formData.Email) {
      Swal.fire({
        icon: "info",
        text: "Enter Your Email",
      });
      return;
    }
    if (!formData.Address) {
       Swal.fire({
        icon: "info",
        text: "Enter Your Address",
      });
      return;
    }
    if (!formData.City) {
       Swal.fire({
        icon: "info",
        text: "Enter Your City",
      });
      return;
    }
    if (!formData.State) {
       Swal.fire({
        icon: "info",
        text: "Enter Your State",
      });
      return;
    }
    if (!formData.PositionApplied) {
       Swal.fire({
        icon: "info",
        text: "Enter Position you have applied for",
      });
      return;
    }
    if (!formData.YearsOfExp) {
       Swal.fire({
        icon: "info",
        text: "Enter year of experience",
      });
      return;
    }
    if (!dates.Image) {
      showSideAlert("Please add an image", "info");
      return;
    }

    try {
      const formdata2 = new FormData();
      formdata2.append("Image", dates.Image);

      console.log(formdata2,'formdata2')
      const result = await axios.post(
        `https://erp.autovyn.com/backend/Website/uploadedResume`,
        formdata2,
        {
          headers: {
            compcode: "avyn",
          },
        }
      );
      console.log(result.data, "result");
      // esa ka esa hi na 
      formData.Resume=result.data

      console.log(formData,'komo')

      // Proceed with saving the category data
      const result1 = await axios.post("/api/CareersForm", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Applied successfully.",
      });

      // Reset the form and states
      setFormData({
        Name: "",
        Phone: "",
        Email: "",
        Address: "",
        City: "",
        State: "",
        PositionApplied: "",
        AvailabilityToStart: "",
        YearsOfExp: "",
        PreJobTitle: "",
        Resume: "",
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

  return (
    <>
      <div className="grid grid-cols-12   gap-6 ml-8">
        <div className="font-[Frank] col-span-12 text-[#34251F] text-[30px] md:text-[34px] lg:text-[40px] xl:[48px] text-center font-bold ">
          Careers
        </div>
        <div className="font-[Alkatra] -mt-8  text-[#B0743B] text-[14px] xl:text-[24px] lg:text-[22px] md:text-[18px] text-center font-medium col-span-12">
          Great things are accomplished by those who believe they can
        </div>

        {/* Image Section */}
        <div className="lg:col-span-5 md:col-span-6 col-span-12 ">
          <Image
            src={"/careers.JPG"}
            alt={"careers"}
            className="w-full rounded-tl-[150px] h-[300px] sm:h-[400px] md:h-[500px] object-cover mb-2"
            width={500}
            height={500}
          />
        </div>

        {/* Text Section */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12 mt-6">
          <div className="font-[Frank] col-span-12 font-bold text-[#34251F] text-[26px] md:text-[32px] lg:text-[36px] xl:[42px] ">
            Why Work With Us?
          </div>
          <div className="font-[Frank] col-span-12 text-[#34251F] text-[20px]">
            Imagine a place where your passion for technology meets the thrill
            of the automotive world—welcome to{" "}
            <span className="font-bold">AUTO-VYN.</span> Our team is redefining
            what’s possible in mobility, and every idea, every project you
            contribute to here brings us one step closer to a future that’s more
            intelligent, efficient, and connected.
          </div>
          <div className="flex justify-center  mt-6 ">
            <button
              onClick={() => {
                setIsDialogOpen(true);
              }}
              className="text-white font-serif bg-[#34251F] rounded px-8 py-2"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Additional Section */}
      </div>

      {/* Section with vertical lines */}
      <div className="grid lg:-mt-36 md:-mt-32 mb-10 grid-cols-12">
        <div className="col-span-12  lg:col-span-3">
          {/* Optional content can go here */}
        </div>
        <>
          <div className="bg-white h-28 w-full lg:p-2 md:p-2 p-4 rounded-xl shadow col-span-12  lg:col-span-9 relative">
            {/* Blurred Border Effect */}
            <div
              className="absolute inset-0 rounded-xl -z-10"
              style={{
                filter: "blur(20px)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.1)",
              }}
            ></div>

            <div className=" flex-wrap justify-evenly items-center font-bold lg:text-sm hidden md:flex w-full h-full space-x-2 md:space-x-6">
              {[
                "Trailblazing Projects",
                "Growth Opportunities",
                "Inclusive Culture",
                "Advanced Tools",
                "Eco - Commitment",
              ].map((phrase, index) => {
                const [firstWord, ...restWords] = phrase.split(" ");
                const secondWord = restWords.join(" ");
                return (
                  <div
                    key={index}
                    className="text-frank-2025 border-gray-300 flex flex-col text-center"
                  >
                    <span>{firstWord}</span>
                    <span>{secondWord}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-full text-color max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <DialogHeader>
            <DialogTitle>
              <div className="col-span-12 p-3 bg-color mr-4 -mt-6  text-frank-2419 rounded-t">
                Career Form
              </div>
            </DialogTitle>

            <DialogDescription>
              <div className="grid grid-cols-12 gap-x-4 gap-y-2  h-[400px] sm:h-[400px] md:h-auto lg:h-auto overflow-y-scroll overflow-x-hidden">
                <div className="col-span-12 md:col-span-12 lg:col-span-12 bg-white rounded-xl">
                  <label className="text-black flex  text-left text-[16px] font-serif font-semibold">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="Name"
                    value={formData.Name}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-6 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex  text-left font-semibold">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="Phone"
                    value={formData.Phone}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-6 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex  text-left font-semibold">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="Email"
                    value={formData.Email}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>
                <div className="col-span-12 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex  text-left font-semibold">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="Address"
                    value={formData.Address}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-6 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex  text-left font-semibold">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="City"
                    value={formData.City}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-6 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex  text-left font-semibold">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="State"
                    value={formData.State}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex  text-left font-semibold">
                    Position applied <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="PositionApplied"
                    value={formData.PositionApplied}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex  text-left font-semibold">
                    Availability to start{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="AvailabilityToStart"
                    type="number"
                    value={formData.AvailabilityToStart}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex  text-left font-semibold">
                    Year of Experiences <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="YearsOfExp"
                    type="number"
                    value={formData.YearsOfExp}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex  text-left font-semibold">
                    Previous job title <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="PreJobTitle"
                    value={formData.PreJobTitle}
                    onChange={handleInputChange}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
                  />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4 bg-white rounded-xl">
                  <label className="text-black text-[16px] font-serif flex  text-left font-semibold">
                    Upload Resume<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    name="Resume"
                    onChange={(event) => handleFileChange(event)}
                    className="text-black p-2 w-full rounded h-9 border-2 border-gray-300"
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
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Careers;
