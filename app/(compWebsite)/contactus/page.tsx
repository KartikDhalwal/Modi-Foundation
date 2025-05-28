"use client"

import ContactForm from "@/app/components/ContactForm";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d3f1e8] to-white p-8">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">CONTACT US</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="col-span-1 flex flex-col items-center">
          <div className="text-left uppercase text-gray-400 font-bold tracking-widest text-2xl transform -rotate-90">
            Donate Now
          </div>
          <img src="/birdsImage.png" width={100} height={100} alt="Birds" className="w-48  -ml-48" />
        </div>
        <div className="col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;