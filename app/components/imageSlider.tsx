// components/ImageSlider.js
import Image from "next/image";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the center image

  const changeImage = (direction) => {
    if (direction === "prev") {
      setCurrentIndex(
        currentIndex === 0 ? images.length - 1 : currentIndex - 1
      );
    } else {
      setCurrentIndex(
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-96 overflow-hidden">
      {/* Prev Button */}
      <div className=" top-1/2 left-0 transform -translate-y-1/2 z-10 mt-5">
        <button
          className="bg-[#B57B45] bg-opacity-100 hover:bg-opacity-70 px-2 py-2 rounded-full shadow-lg"
          onClick={() => changeImage("prev")}
        >
          <GrFormPreviousLink size={24} />
        </button>
      </div>
      {/* Left Image */}
      <div className="flex justify-center items-center w-1/4 opacity-50 transform scale-75 transition-transform duration-500">
        <Image
          width={300}
          height={300}
          src={images[(currentIndex - 1 + images.length) % images.length]}
          alt="Left Image"
          className="rounded-lg object-contain max-w-full max-h-full"
        />
      </div>

      

      {/* Center Image */}
      <div className="flex justify-center items-center h-96 w-3/5 transform scale-100 transition-transform duration-500 hover:scale-110 hover:z-20">
  <Image
    src={images[currentIndex]}
    fill
    className="object-contain"
    alt="Left Image"
  />
</div>


    

      {/* Right Image */}
      <div className="flex justify-center items-center w-1/4 opacity-50 transform scale-75 transition-transform duration-500">
        <Image
          width={300}
          height={300}
          src={images[(currentIndex + 1) % images.length]}
          alt="Right Image"
          className="rounded-lg object-contain max-w-full max-h-full"
        />
      </div>
        {/* Next Button */}
        <div className=" top-1/2 right-4 transform -translate-y-1/2 z-10 mt-5">
        <button
          className="bg-[#B57B45] bg-opacity-100 hover:bg-opacity-70 px-2 py-2 rounded-full shadow-lg"
          onClick={() => changeImage("next")}
        >
          <GrFormNextLink size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
