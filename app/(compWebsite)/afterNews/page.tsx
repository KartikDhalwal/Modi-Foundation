"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

function AfterNews() {
  const theme = useTheme();

  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isMobile ? (
        <div className="relative p-4 md:p-6 lg:p-10">
          {/* Centered Text */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    flex flex-col items-center justify-center 
    bg-white/50 text-black 
    p-4 md:p-6 rounded-lg w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%]
    h-auto max-h-[80vh] overflow-y-auto
    transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl
    z-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-dubai font-semibold mb-2 sm:mb-3 md:mb-4">
              HOW WE ARE AFFECTING <br className="hidden sm:block" /> THE
              ECOSYSTEM AND BIODIVERSITY
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-center tracking-wide leading-6 sm:leading-7 md:leading-8"
              style={{ wordSpacing: "0.5rem" }}
            >
              Globally, humans are significantly impacting ecosystems and
              biodiversity through activities like deforestation, habitat
              destruction for agriculture and urban development, pollution,
              overexploitation of species, invasive species introduction, and
              climate change, leading to a decline in species diversity and
              disruption of natural ecological balance across the planet; with
              the most prominent impact being the loss of natural habitats due
              to expanding human land use, particularly in areas like tropical
              rainforests.
            </p>
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {[1, 2].map((item) => (
              <div key={item} className="p-1 sm:p-2">
                <div className="relative aspect-square w-full">
                  <Image
                    src={`/afterNews${item}.svg`}
                    alt={`Image ${item}`}
                    className="w-full h-full object-cover"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="relative p-10">
            {/* Centered Text */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        flex flex-col items-center justify-center 
        bg-white/50 text-black 
        p-6 rounded-lg w-[90%] md:w-[70%] lg:w-[80%] lg:h-[50%]
        transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-2xl md:text-4xl text-center font-dubai font-semibold mb-4">
                HOW WE ARE AFFECTING <br /> THE ECOSYSTEM AND BIODIVERSITY
              </h2>
              <p
                className="text-xl text-center tracking-wide leading-8"
                style={{ wordSpacing: "1rem" }}
              >
                Globally, humans are significantly impacting ecosystems and
                biodiversity <br />
                through activities like deforestation, habitat destruction for
                agriculture <br />
                and urban development, pollution, overexploitation of species,
                invasive <br />
                species introduction, and climate change, leading to a decline
                in species
                <br /> diversity and disruption of natural ecological balance
                across the <br />
                planet; with the most prominent impact being the loss of natural
                habitats <br />
                due to expanding human land use, particularly in areas like
                tropical rainforests.
              </p>
            </div>

            {/* Grid of Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-2">
                <Image
                  src={"/afterNews1.svg"}
                  alt={"Image 1"}
                  className="w-full h-[300px] lg:h-[380px] md:h-[450px] object-cover"
                  width={600}
                  height={600}
                />
              </div>
              <div className="p-2">
                <Image
                  src={"/afterNews2.svg"}
                  alt={"Image 2"}
                  className="w-full h-[300px] lg:h-[380px] md:h-[450px] object-cover"
                  width={600}
                  height={600}
                />
              </div>
              <div className="p-2">
                <Image
                  src={"/afterNews3.svg"}
                  alt={"Image 3"}
                  className="w-full h-[300px] lg:h-[380px] md:h-[450px] object-cover"
                  width={600}
                  height={600}
                />
              </div>
              <div className="p-2">
                <Image
                  src={"/afterNews4.svg"}
                  alt={"Image 4"}
                  className="w-full h-[300px] lg:h-[380px] md:h-[450px] object-cover"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AfterNews;
