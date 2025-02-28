"use client";
import * as React from "react";
import Image from "next/image";

function Whyautovyn() {
  return (
    <>
      <div className="font-[Frank] text-[#34251F] text-[32px] lg:text-[32px] text-center font-bold mb-5 mt-3">
        Privacy Policy
      </div>
      <div className="grid relative grid-cols-1 md:grid-cols-12 gap-6 px-6 md:pl-12">
        {/* Left Content */}
        <div className="lg:col-span-12 md:col-span-12 col-span-12">
          {[
            {
              title: "Information We Collect",
              content:
                "We may collect personal information such as your name, email address, contact details, and other relevant information when you interact with our software, website, or services. Additionally, we may collect usage data, device information, and cookies to improve our services and enhance your user experience.",
            },
            {
              title: "How We Use Your Information",
              content:
                "We use the information we collect to provide, maintain, and improve our software and services. This includes communicating with you, processing transactions, personalizing your experience, and ensuring the security of our systems. We may also use your information for analytics, research, and marketing purposes, with your consent where required by law.",
            },
            {
              title: "Data Security",
              content:
                "We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. We regularly review and update our security practices to ensure the integrity and confidentiality of your data.",
            },
            {
              title: "Third-party Disclosure",
              content:
                "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services. We may share your information with trusted third-party service providers who assist us in operating our business, conducting research, or servicing you.",
            },
            {
              title: "Your Rights and Choices",
              content:
                "You have the right to access, correct, or delete your personal information stored by us. You may also choose to opt-out of certain data collection and processing activities, subject to applicable laws and regulations.",
            },
            {
              title: "Changes to This Policy",
              content:
                "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes to this policy by posting the updated version on our website or through other appropriate channels.",
            },
            {
              title: "Contact Us",
              content:
                "If you have any questions or concerns about our Privacy Policy or our data practices, please contact us at vynautomation@gmail.com By using our software or services, you consent to the terms of this Privacy Policy and agree to abide by its provisions. Thank you for trusting Vyn Automation pvt ltd company with your personal information.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 hover:border-gray-300 hover:shadow-lg cursor-pointer rounded-lg transition-all"
            >
              <div className="font-[Frank] text-[18px] md:text-[18px] font-bold">
                {item.title}
              </div>
              <div className="font-[Frank] text-[12px] md:text-[17px] font-normal">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Whyautovyn;
