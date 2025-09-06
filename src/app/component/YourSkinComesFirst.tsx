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
function YourSkinComesFirst() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <>
      <div className="relative pb-20 md:pb-40">
        <div className="relative w-full h-[60vh] md:h-screen">
          <Image
            src="/2e2a49_37afad752477458cbc7a9b205e02caae~mv2.avif"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div
          ref={ref}
          className={`absolute top-10 md:top-1/6 left-4 md:left-1/5 z-50 text-white flex flex-col md:flex-row gap-6 md:gap-10 items-start transition-all duration-700 ${
            inView ? "animate-slideUp opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col gap-5 max-w-md">
            <div className="font-extralight">WE BELIEVE</div>
            <div
              className={`${playfair.className} font-bold w-60 md:w-80 text-3xl md:text-5xl`}
            >
              Your <span className={`${montez.className} mt-2 ml-1`}>Skin</span>{" "}
              Comes First
            </div>
          </div>
          <div className="flex flex-col md:pl-15 pt-4 md:pt-0">
            <div className="max-w-sm md:max-w-md text-sm md:text-[15px] leading-relaxed pt-3 md:pt-5 pb-3 md:pb-5 hidden sm:block md:block">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </div>
            <div className="max-w-sm md:max-w-md text-sm md:text-[15px] leading-relaxed pt-3 md:pt-5 pb-3 md:pb-5">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </div>
            <div className="underline cursor-pointer text-sm md:text-base">
              Join Noelle&apos;s Club
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourSkinComesFirst;
