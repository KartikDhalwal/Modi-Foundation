"use client";
import * as React from "react";
import Image from "next/image";
import Carousel from "@/app/components/crosole";
import Carousel1 from "@/app/components/crosole";

function Home1({ isMobile  }) {
  return (
    <>
      <Carousel1 isMobile={isMobile} />
    </>
  );
}
export default Home1;
