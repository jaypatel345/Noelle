"use client";

import Image from "next/image";
import React from "react";
import { Montez } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { useInView } from "react-intersection-observer";
const montez = Montez({
  subsets: ["latin"],
  weight: ["400"], // Montez has only one weight
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
function DiscoverMore() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <>
      <div className="relative ">
        <div
          ref={ref}
          className={`${playfair.className} flex items-center justify-center text-3xl md:text-5xl text-black pb-6 md:pb-10 font-bold transition-all duration-700 ${
            inView ? "animate-slideUp opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          {" "}
          Discover{" "}
          <span
            className={`${montez.className} text-3xl md:text-5xl font-extrabold ml-2 mt-2 md:mt-4`}
          >
            {" "}
            More
          </span>
        </div>
        <div
          className={`relative w-full h-full flex flex-col md:flex-row items-center md:justify-evenly gap-6 md:gap-0 z-40 transition-all duration-700 ${
            inView ? "animate-slideUp opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative w-72 h-[50vh] md:w-96 md:h-[70vh]">
            <Image
              src="/Discover01.avif"
              alt="SHOP EYES"
              width={500}
              height={500}
              className="w-full bg-black h-full object-cover "
            />
            <div className="text-black md:text-white pb-3  absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col justify-center items-center font-light">
              SHOP <div className= {`${playfair.className} text-3xl md:text-6xl font-bold`}> EYES </div>
            </div>
          </div>
          <div className="relative w-72 h-[50vh] md:w-96 md:h-[70vh]">
            <Image
              src="/Discover02.avif"
              alt="SHOP FACE"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="text-black md:text-white pb-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col justify-center items-center font-light">
              SHOP<div className={`${playfair.className} text-3xl md:text-6xl font-bold`}> FACE</div>
            </div>
          </div>
          <div className="relative w-72 h-[50vh] md:w-96 md:h-[70vh] ">
            <Image
              src="/Discover03.avif"
              alt="SHOP LIPS"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="text-black md:text-white pb-3 absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col justify-center items-center font-light">
              SHOP <div className={`${playfair.className} text-3xl md:text-6xl font-bold`}>LIPS</div>
            </div>
          </div>
        </div>

        <div className="bg-[#3E1616]/80 md:bg-black absolute w-full h-[30vh] md:h-[55vh] -bottom-20 md:-bottom-57 ">
         
        </div>
      </div>
    </>
  );
}

export default DiscoverMore;
