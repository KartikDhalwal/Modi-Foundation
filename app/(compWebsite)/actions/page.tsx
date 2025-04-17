"use client";

import Image from "next/image";
import React from "react";

const ActionsItems = [
  {
    date: "FEBRUARY 19, 2025",
    title: "Empowering The Next Generation For Planters",
    image: "/actions1.svg",
  },
  {
    date: "FEBRUARY 19, 2025",
    title: "Empowering The Next Generation For Planters",
    image: "/actions2.svg",
  },
  {
    date: "FEBRUARY 19, 2025",
    title: "Empowering The Next Generation For Planters",
    image: "/actions3.svg",
  },
];

function Actions() {
  return (
    <div className=" p-6 text-center border-black max-w-7xl mx-auto -mt-28">
      <h2 className="text-3xl md:text-4xl font-bold font-josefin text-black mb-10">
        Small Actions Grow Big Impact
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ActionsItems.map((item, index) => (
          <div
            key={index}
            className="relative rounded overflow-hidden shadow-lg"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-[85%] bg-white bg-opacity-100 text-left p-4 m-4">
              <p className="text-green-800 font-bold mb-1 text-sm">
                {item.date}
              </p>
              <p className="text-green-700 font-medium text-base">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Actions;
