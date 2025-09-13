"use client";

import Image from "next/image";
import React from "react";
import { Montez } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const montez = Montez({
  subsets: ["latin"],
  weight: ["400"], // Montez has only one weight
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
function Sitewide() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between relative">
        {/*left section*/}
        <div className="w-full md:w-[65%] h-64 md:h-screen pt-10 md:pt-30">
          <Image
            src="/offer01.avif"
            alt=""
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        {/*right section*/}
        <div
          ref={ref}
          className={`w-full md:w-1/2  flex flex-col justify-center px-16 md:px-40  py-26 md:py-0 text-black gap-4 md:gap-5 transition-all duration-700 ${
            inView ? "animate-slideUp opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <div className=" md:pt-40 pt-0  ">THIS WEEKEND ONLY</div>
          <div className="text-3xl md:text-5xl flex flex-wrap items-baseline">
            <div className={`${playfair.className} font-bold  `}>15% Off</div>
            <span className={`${montez.className} mt-2 ml-3 `}>Sitewide</span>
          </div>
          <div>
            I&apos;m a paragraph. Click here to add your own text and edit me.
            I&lsquo;m a great place for you to tell a story and let your users
            know a little more about you.
          </div>
          <div className="font-bold">Use code LOVE15 at checkout</div>
          <div>
            <button className="border-black border px-4 md:px-5 py-2 md:py-3 hover:text-white hover:bg-black cursor-pointer text-sm md:text-base">
               <Link href="/Allproducts">
              Shop All
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sitewide;
