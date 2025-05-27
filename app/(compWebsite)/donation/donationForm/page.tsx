"use client";
import ContactForm from "@/app/components/ContactForm";
import DonationForm from "@/app/components/DonationForm";
import { useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

export default function ContactPage() {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div
        className={`min-h-screen bg-gradient-to-b p-4 sm:p-6 md:p-8 ${
          isMobile ? "" : "lg:p-12"
        }`}
      >
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {/* Hero Image - Full width on all screens */}
          {isMobile ? (
            <>
              <div className="col-span-12">
                <img
                  src="/donationPage.svg"
                  alt="Birds"
                  className="w-full max-w-2xl mx-auto"
                />
              </div>

              {/* Centered Text Box */}
              <div
                className="col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3
              flex flex-col items-center justify-center 
              bg-white/50 text-black rounded-lg
              p-4 sm:p-6 md:p-8
              transition-all duration-300 ease-in-out scale-[1.01] shadow-xl
              my-4 sm:my-6 md:my-8 mx-auto
              w-full max-w-4xl"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-dubai font-semibold mb-3 md:mb-4 text-[#006145] capitalize underline">
                  Be A Part Of The Green Solution
                </h2>
                <p
                  className="text-base sm:text-lg md:text-xl text-center tracking-wide leading-6 sm:leading-7 md:leading-8"
                  style={{ wordSpacing: "0.5rem" }}
                >
                  Your donation will directly support our efforts to reforest
                  critical areas around the world. Every tree planted helps
                  combat climate change, protect biodiversity, and provide vital
                  resources for communities. Thank you for your generosity.
                </p>
              </div>
            </>
          ) : (
            <>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                flex flex-col items-center justify-center 
                bg-white/50 text-black 
                 rounded-lg w-[90%] md:w-[70%] lg:w-[80%] lg:h-[30%]
                transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl mt-20"
              >
                <h2 className="text-2xl md:text-4xl text-center font-dubai font-semibold mb-4 text-[#006145] capitalize underline">
                  Be a Part of the Green Solution
                </h2>
                <p
                  className="text-xl text-center tracking-wide leading-8"
                  style={{ wordSpacing: "1rem" }}
                >
                  Your donation will directly support our efforts to reforest
                  critical areas around the world. Every tree planted helps
                  combat climate change, protect biodiversity, and provide vital
                  resources for communities. Thank you for your generosity.
                </p>
              </div>
              <div className="col-span-12 flex flex-col items-center">
                <img
                  src="/donationPage.svg"
                  width={100}
                  height={100}
                  alt="Birds"
                  className="w-full"
                />
              </div>
            </>
          )}

          {/* FAQ Section - Responsive layout */}
         

          {/* Donation Form */}
          <div className="col-span-12 bg-[#d3f1e8] rounded-lg p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 md:mt-8 mx-auto w-full max-w-4xl">
            <DonationForm />
          </div>
        </div>
      </div>
    </>
  );
}
