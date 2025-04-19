"use client";
import Image from "next/image";
import React from "react";

function Donation() {
  return (
    <div
      className="relative w-auto h-auto flex items-center justify-center text-white p-8 mx-36 mb-10"
      style={{
        backgroundImage: 'url("/donateBg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-opacity-30" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 border-b-2 inline-block pb-2">
          Donate For A Better Tomorrow
        </h1>
        <div className="my-8 flex justify-center">
          <Image
            src="/donationLogo.svg"
            alt="Mission of Dream India Foundation Logo"
            width={600}
            height={600}
          />
        </div>
        <button className="mt-4 px-8 py-3 text-white font-semibold border border-white bg-transparent hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 ease-in-out">
          DONATE NOW
        </button>
      </div>
    </div>
  );
}

export default Donation;
