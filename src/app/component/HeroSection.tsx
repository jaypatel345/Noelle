"use client";


import React from "react";
import Image from "next/image";
import heropageimage from "@/../public/home_image.avif";
import { Playfair_Display } from "next/font/google";
import { MessageSquareText } from "lucide-react";
import { Montez } from "next/font/google";
import Link from "next/link";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const montez = Montez({
  subsets: ["latin"],
  weight: ["400"] ,// Montez has only one weight
});

function HeroSection() {
  return (
    <div className="relative w-full h-[500px] md:h-[803px]">
      <div className="">
        <Image
          src={heropageimage}
          alt="Hero section homepage banner"
          priority
          fill
          style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        />
      </div>
      {/* Overlay text */}
      <div className="absolute left-4 md:left-1/8 bottom-[20%] md:bottom-[30%] flex items-center px-4 md:px-12 text-white max-w-xs md:max-w-md gap-4">
       <div className="animate-slideUp">
          <p className="uppercase tracking-wide text-lg pb-4 ">New Release</p>
          <div>
            <h1 className={`${playfair.className} text-4xl md:text-7xl font-bold`}>
              <div className="pb-3">Metallics </div>

              <div className={`${montez.className} mb-4 text-[48px] md:text-[80px] italic`}>
                Shine
                <span className={`${playfair.className} text-7xl font-bold `}>
                  {" "}
                  on
                </span>
              </div>
            </h1>
          </div>
          <p className="mt-4 max-w-xs md:max-w-md text-base md:text-lg text-gray-200 pb-3">
            Get to know our new eyeshadow palettes with a glossy finish, smooth
            lightweight feel and 10 hour stay-on.
          </p>
          
          <button className="mt-6 md:mt-10 px-6 md:px-10 py-2 md:py-3 border border-white text-white hover:bg-white hover:text-black transition">
            <Link href="/Allproducts">
            Shop
            </Link>
          </button>
        </div>
      </div>
      <div className="flex gap-1.5 items-center fixed z-50 bottom-5 md:bottom-7 right-5 md:right-15 bg-[#634041] border border-[#736c6cd7] px-4 md:px-5 py-2 md:py-3 text-[white]/80 cursor-pointer hover:text-gray-300/80  ">
        <MessageSquareText size="20px" />
        
      </div>
    </div>
  );
}

export default HeroSection;
