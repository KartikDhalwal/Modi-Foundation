'use client'

import { useState } from "react";

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

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Enter your name..."
          className="input-style"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email address..."
          className="input-style"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number..."
          className="input-style"
          onChange={handleChange}
        />
        <select
          name="enquiryType"
          className="input-style"
          onChange={handleChange}
        >
          <option>Your concern</option>
          <option>Feedback</option>
          <option>Support</option>
          <option>Partnership</option>
        </select>
        <select
          name="reason"
          className="input-style"
          onChange={handleChange}
        >
          <option>Enter reason...</option>
          <option>Donation</option>
          <option>Volunteer</option>
          <option>Other</option>
        </select>
        <input
          type="text"
          name="subject"
          placeholder="Enter subject..."
          className="input-style"
          onChange={handleChange}
        />
      </div>

      <textarea
        name="message"
        placeholder="Please provide details regarding your inquiry or feedback..."
        className="input-style h-32"
        onChange={handleChange}
      ></textarea>

      <p className="text-sm text-gray-600">
        We appreciate you reaching out to us and will get back to you as soon as possible.
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
