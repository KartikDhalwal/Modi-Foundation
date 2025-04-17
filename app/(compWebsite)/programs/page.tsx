"use client";

import Image from "next/image";
import React from "react";

const programItems = [
  {
    title: "How To Preserve",
    image: "/protect1.svg",
  },
  {
    title: "How We Can Protect",
    image: "/protect2.svg",
  },
  {
    title: "Donate For Our Mission",
    image: "/protect3.svg",
    highlight: true,
  },
  {
    title: "Volunteer",
    image: "/protect4.svg",
  },
];

function Programs() {
  return (
    <div className="bg-white py-16 px-4 text-center">
      <h2 className="text-4xl font-bold font-josefin text-black mb-6">
        Protect and Preserve the Environment
      </h2>
      <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-7 mb-12">
        There are so many ways you can get involved and do your part to support a world where people and nature thrive together. There are so many ways you can get involved and do your part to support a world where people and nature thrive together.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {programItems.map((item, index) => (
          <div
            key={index}
            className={`relative rounded overflow-hidden group shadow-lg ${
              item.highlight ? "ring-4 ring-green-300" : ""
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={300}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-opacity-100 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold text-center px-4">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
