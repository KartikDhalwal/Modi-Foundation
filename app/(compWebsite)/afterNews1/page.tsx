"use client";

import Image from "next/image";
import React from "react";
import AfterNews from "../afterNews/page";

function AfterNews1() {
  return (
    <div className="bg-[#DAFFC8] p-6 m-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-josefin text-black">
            Rooted In Sustainability, <br /> Driven By Change
          </h2>
          <h4 className="text-xl font-semibold text-black font-dubai">
            Save Tomorrow
          </h4>
          <p
            className="text-lg leading-8 text-black"
            style={{ wordSpacing: "1rem" }}
          >
            Globally, humans are significantly impacting ecosystems and
            biodiversity through activities like deforestation, habitat
            destruction for agriculture and urban development, pollution,
            overexploitation of species, invasive species introduction, and
            climate change, leading to a decline in species diversity and
            disruption of natural ecological balance across the planet;
          </p>
          <div className="border border-black w-fit px-4 py-3 uppercase font-bold text-sm tracking-wider">
            Protect the future generation by taking a step today
          </div>
        </div>
        {/* Right Section: Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left side - large image */}
          <div className="row-span-2">
            <Image
              src="/afterNews11.svg"
              alt="Kid Gardening"
              width={40} // super small
              height={40}
              className="w-auto h-auto object-cover rounded mt-56"
            />
          </div>

          {/* Top right small image */}
          <div>
            <Image
              src="/afterNews12.svg"
              alt="Tall Trees"
              width={40}
              height={40}
              className="w-auto h-auto object-cover rounded"
            />
          </div>

          {/* Bottom right small image */}
          <div>
            <Image
              src="/afterNews13.svg"
              alt="Plant in Hands"
              width={40}
              height={100}
              className="w-auto h-auto object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterNews1;
