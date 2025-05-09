"use client";
import { useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";

function showSideAlert(message: string, type: string) {
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

export default function DonationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    contribution: "",
    exemption: "",
    panNo: "",
    tncCheck: "",
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
      const response = await fetch("/api/donationSubmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        showSideAlert("Form submitted successfully!", "success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          contribution: "",
          exemption: "",
          panNo: "",
          tncCheck: "",
        });
      } else {
        showSideAlert("Something went wrong.", "error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      showSideAlert("Error submitting form.", "error");
    }
  };

  const options = [
    { value: "1", label: "Yes" },
    { value: "0", label: "No" },
  ];
  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-3xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col mb-4">
          <label
            htmlFor="fullName"
            className="mb-1 text-sm font-medium text-[#219249]"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="fullName"
            placeholder="Enter your name..."
            className="input-style rounded p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            value={formData?.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-1 text-sm font-medium text-[#219249]"
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
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-1 text-sm font-medium text-[#219249]"
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
            className="mb-1 text-sm font-medium text-[#219249]"
          >
            Your Contribution
          </label>
          <input
            type="number"
            name="contribution"
            placeholder="Your Contribution"
            className="input-style rounded p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={handleChange}
            value={formData?.contribution}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-1 text-sm font-medium text-[#219249]"
          >
            Need Tax Exemption ?
          </label>
          <Select
            name="exemption"
            value={formData?.exemption?.toString()}
            onChange={(selectedOption) =>
              setFormData((prev) => ({
                ...prev,
                exemption: selectedOption?.value,
              }))
            }
            className="input-style"
            options={options}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="panNo"
            className="mb-1 text-sm font-medium text-[#219249]"
          >
            PAN Card Number
          </label>
          <input
            type="text"
            name="panNo"
            placeholder="Your PAN Card..."
            className="input-style rounded p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={handleChange}
            value={formData?.panNo}
          />
        </div>
      </div>
      <p className="text-sm text-gray-600">
        If yes, please note that providing your PAN is mandatory.
      </p>
      <p className="text-sm text-[#219249]">
        Please fill all mandatory fields*.
      </p>
      <div className="flex flex-col mb-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="tncCheck"
            name="tncCheck"
            className="rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={handleChange}
            checked={formData?.tncCheck}
          />
          <label
            htmlFor="tncCheck"
            className="text-sm font-medium text-[#219249]"
          >
            I agree to the Privacy & Policy
          </label>
        </div>
      </div>
      <div className="flex">
        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="text-2xl w-full max-w-sm bg-[#00A85F] text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            DONATE
          </button>
        </div>
      </div>
    </form>
  );
}
