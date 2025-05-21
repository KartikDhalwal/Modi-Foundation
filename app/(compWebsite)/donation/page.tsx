"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Donation() {
  const router = useRouter()
  return (
    <div
      className="relative w-auto h-auto flex items-center justify-center text-white p-4 sm:p-2 md:p-12 lg:p-2 xl:p-36 lg:m-12 sm:m-2 mb-2"
      style={{
        backgroundImage: 'url("/donateBg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl w-full px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 border-b-2 inline-block pb-2">
          Donate For A Better Tomorrow
        </h1>

        <div className="my-6 sm:my-8 flex justify-center">
          <div className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] xl:w-[600px]">
            <Image
              src="/donationLogo.svg"
              alt="Mission of Dream India Foundation Logo"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        <button onClick={() => router.push('/donation/donationForm')} className="mt-4 px-6 sm:px-8 py-2 sm:py-3 text-white font-semibold border border-white bg-transparent hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 ease-in-out">
          DONATE NOW
        </button>
      </div>
    </div>
  );
}

export default Donation;
