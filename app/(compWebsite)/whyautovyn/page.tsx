"use client";
import * as React from "react";
import Image from "next/image";

function Whyautovyn() {
  return (
    <>
      <div className="font-[Frank] text-[#34251F] text-[30px] md:text-[34px] lg:text-[40px] xl:[48px] text-center font-bold mb-5">
        Why Choose us ?
      </div>
      <div className="grid relative grid-cols-1 md:grid-cols-12 gap-6 px-4 md:pl-12">
        {/* Left Content */}
        <div className="lg:col-span-7 col-span-12">
          {[
            {
              title: "All-in-One Platform",
              content:
                "Autovyn offers a complete solution to streamline every aspect of your dealership operations, from HR to asset management and customer interactions.",
            },
            {
              title: "Smart Insights",
              content:
                "Gain actionable insights through advanced reporting and analytics to drive smarter business decisions.",
            },
            {
              title: "Seamless Integration",
              content:
                "Autovyn integrates seamlessly with your existing systems, ensuring smooth operations without disruption.",
            },
            {
              title: "Progressive and Risk-Free",
              content:
                "Autovyn grows with your business while safeguarding your data and ensuring compliance.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 hover:border-gray-300 hover:shadow-lg cursor-pointer rounded-lg transition-all"
            >
              <div className="font-[Frank] text-[16px] md:text-[20px] font-bold">
                {item.title}
              </div>
              <div className="font-[Frank] text-[14px] md:text-[20px] font-normal">
                {item.content}
              </div>
            </div>
          ))}
        </div>
        {/* Right Image */}
        <div className="lg:col-span-5 hidden lg:block mt-8">
          <div className="relative mb-2 mt-8 p-6  rounded-3xl w-[650px] h-[450px] flex items-center justify-center ">
            <Image
              src={"/whyautovyn.JPG"}
              alt={"Automotive Industry Solutions"}
              className="absolute object-cover rounded-full "
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Whyautovyn;
