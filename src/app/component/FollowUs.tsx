"use client";

import React from 'react'
import Image from 'next/image'

import { Playfair_Display } from "next/font/google";
import { useInView } from "react-intersection-observer";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function FollowUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="w-full py-1  ">
      {/* Heading */}
      <div
        ref={ref}
        className={`text-center mb-10 transition-all duration-700 ${
          inView ? "animate-slideUp opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className={`${playfair.className} font-bold text-3xl md:text-5xl text-black`}>Follow Us</h2>
        <p className="text-gray-500 text-sm md:text-base">@beauty.store</p>
      </div>

      {/* Images row with horizontal scroll */}
      <div className="flex  md:flex overflow-x-auto space-x-4 no-scrollbar">
        <div className="flex-shrink-0 w-40 h-56 md:w-64 md:h-80 relative">
          <Image src="/01.jpg" alt="Brushes" layout="fill" objectFit="cover" />
        </div>
        <div className="flex-shrink-0 w-40 h-56 md:w-64 md:h-80 relative">
          <Image src="/02.jpg" alt="Model" layout="fill" objectFit="cover" />
        </div>
        <div className="flex-shrink-0 w-40 h-56 md:w-64 md:h-80 relative">
          <Image src="/03.jpg" alt="Cosmetics" layout="fill" objectFit="cover" />
        </div>
        <div className="flex-shrink-0 w-40 h-56 md:w-64 md:h-80 relative">
          <Image src="/04.jpg" alt="Models" layout="fill" objectFit="cover" />
        </div>
        <div className="flex-shrink-0 w-40 h-56 md:w-64 md:h-80 relative">
          <Image src="/05.jpg" alt="Models" layout="fill" objectFit="cover" />
        </div>
         <div className="flex-shrink-0 w-40 h-56 md:w-64 md:h-80 relative">
          <Image src="/01.jpg" alt="Brushes" layout="fill" objectFit="cover" />
        </div>
        <div className="flex-shrink-0 w-40 h-56 md:w-64 md:h-80 relative">
          <Image src="/02.jpg" alt="Model" layout="fill" objectFit="cover" />
        </div>
        <div className="flex-shrink-0 w-40 h-56 md:w-64 md:h-80 relative">
          <Image src="/03.jpg" alt="Cosmetics" layout="fill" objectFit="cover" />
        </div>
        <div className="flex-shrink-0 w-40 h-56 md:w-64 md:h-80 relative">
          <Image src="/04.jpg" alt="Models" layout="fill" objectFit="cover" />
        </div>
        
      </div>
    </div>
  )
}

export default FollowUs
