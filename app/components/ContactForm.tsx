"use client";
import { useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";

function showSideAlert(message : string, type: string) {
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

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    reason: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name!]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/SubmitContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.success) {
        showSideAlert("Form submitted successfully!",'success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          enquiryType: "",
          reason: "",
          subject: "",
          message: "",
        });
      } else {
        showSideAlert("Something went wrong.",'error');
      }
    } catch (err) {
      console.error("Submit error:", err);
      showSideAlert("Error submitting form.",'error');
    }
  };
  
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-3xl mx-auto space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name..."
            className="input-style rounded p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            E-Mail
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email address..."
            className="input-style rounded p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="number"
            name="phone"
            placeholder="Enter phone number..."
            className="input-style rounded p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={handleChange}
            value={formData?.phone}
          />
        </div>
        {/* <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Enquiry Type
          </label>
          <Select
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className="input-style"
            option={options}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Reason
          </label>
          <Select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="input-style"
            option={options}
          />
        </div> */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Enter subject..."
            className="input-style rounded p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={handleChange}
            value={formData?.subject}
          />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label
          htmlFor="name"
          className="mb-1 text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          name="message"
          placeholder="Please provide details regarding your inquiry or feedback..."
          className="input-style rounded p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          onChange={handleChange}
          value={formData?.message}
        ></textarea>
      </div>
      <p className="text-sm text-gray-600">
        We appreciate you reaching out to us and will get back to you as soon as
        possible.
      </p>

      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
  );
}
