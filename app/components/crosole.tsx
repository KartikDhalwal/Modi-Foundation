import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useState } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Carousel1 = ({ isMobile  }) => {
  const images = [
    {
      src: "/homeBg1.png",
      alt: "image1",
      text1: "MODI FOUNDATION",
      text2: "Empowered by Hope, Inspired by Possibility",
      text3: "Your Sustainable Living = a Ecosystem’s Balance ",
    },
  ];

  return (
    <div className="h-auto w-auto">
      {!isMobile ? (
        // <Carousel
        //   infiniteLoop
        //   interval={3000}
        //   showThumbs={false}
        //   showStatus={false}
        // >
        <>
          {images.map((image, index) => (
            <div
            key={index}
            className="grid grid-cols-12 h-[650px] lg:h-[650px] xl:h-[650px] -mt-10"
            style={{
              backgroundImage: `url("${image.src}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="lg:col-span-12 col-span-12 lg:p-16 md:p-8 p-2 h-full flex flex-col items-start justify-start">
              {/* Row containing logo, text1, and text2 */}
              <div className="flex items-center">
                {/* Logo */}
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={400}
                  height={400}
                  className="object-contain"
                />
                {/* Text 1 and Text 2 */}
                <div className="text-left -mt-2">
                  <div className="text-[#00FF51] text-[14px] md:text-[20px] font-medium lg:text-[40px] font-['Inria_Serif']">
                    {image.text1}
                  </div>
                  <div className="text-[#00FF51] text-[14px] md:text-[20px]  lg:text-[15px] font-['Dubai']">
                    {image.text2}
                  </div>
                </div>
              </div>
          
              {/* Text 3 below */}
              <div className="text-[white] text-[12px] md:text-[14px] lg:text-[40px] mt-2 ml-16 text-right font-bold">
                {image.text3}
              </div>
              <div className="text-[white] text-[12px] md:text-[14px] lg:text-[20px] mt-4 ml-16 text-right font-bold">
               <button className="border-2 p-2">
                DONATE NOW <ArrowRightIcon/> 
               </button>
              </div>
            </div>
          </div>
          
          ))}
          </>
        // </Carousel>
      ) : (
        <div
          className="grid grid-cols-12 gap-2 lg:gap-6 px-2 md:px-4 h-[650px] lg:h-[650px] xl:h-[750px]"
          style={{
            backgroundImage: `url("${images[0].src}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="lg:col-span-12 col-span-12 lg:p-16 md:p-8 p-2 h-full text-center flex flex-col justify-center space-y-2">
            <div className="text-[#00FF51] text-[14px] md:text-[20px] font-bold lg:text-[30px]">
              {images[0].text1}
            </div>
            <div className="text-[#00FF51] text-[14px] md:text-[20px] font-bold lg:text-[30px]">
              {images[0].text2}
            </div>
            <div className="text-[#00FF51] text-[12px] md:text-[14px] lg:text-[25px]">
              {images[0].text3}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel1;
