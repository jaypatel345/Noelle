"use client";

import React, { useState, useEffect } from "react";
import { CircleUserRound, ShoppingCart, Menu } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { Montez } from "next/font/google";
import { usePathname } from "next/navigation"; 

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const montez = Montez({
  subsets: ["latin"],
  weight: ["400"], // Montez has only one weight
});

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [userExists, setUserExists] = useState(false);

  // Example: check if user exists in localStorage (you can replace this logic)
  useEffect(() => {
    const user = localStorage.getItem("user"); // e.g., {name: "John"}
    setUserExists(!!user); // true if user exists
  }, []);

  return (
    <>
      <div className="bg-[#634041] flex justify-between items-center py-6 px-4 md:px-10">
        <a href="/" >
          <div className={`${montez.className} text-4xl font-bold `}>
            Noelle
          </div>
        </a>
        {/* Desktop menu */}
        <div className="hidden md:flex gap-10 font-extralight">
          <a href="/Allproducts" className="hover:text-white/70 cursor-pointer">
            SHOP ALL
          </a>
          <a href="/New" className="hover:text-white/70 cursor-pointer">
            NEW
          </a>
          <a href="/Bestsellers" className="hover:text-white/70 cursor-pointer">
            BEST SELLERS
          </a>
          <a href="/Face" className="hover:text-white/70 cursor-pointer">
            FACE
          </a>
          <a href="/Lips" className="hover:text-white/70 cursor-pointer">
            LIPS
          </a>
          <a href="/Eyes" className="hover:text-white/70 cursor-pointer">
            EYES
          </a>
        </div>

        {/* Right icons */}
        <div className="flex gap-3 justify-center items-center">
          {userExists && (
            <div className="cursor-pointer">
              <CircleUserRound size="28px" />
            </div>
          )}
          <div className=" cursor-pointer hover:text-white/70">
            <a href="/Login">Log In </a>
          </div>
          <div className=" opacity-90 cursor-pointer hover:text-white/80">
            <ShoppingCart />
          </div>
          <div className="md:hidden flex justify-center items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu size="28px" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="flex flex-col bg-[#634041] text-white px-6 py-4 space-y-3 md:hidden">
          <a href="/shop-all" className="hover:text-white/70 cursor-pointer">
            SHOP ALL
          </a>
          <a href="/new" className="hover:text-white/70 cursor-pointer">
            NEW
          </a>
          <a
            href="/best-sellers"
            className="hover:text-white/70 cursor-pointer"
          >
            BEST SELLERS
          </a>
          <a href="/face" className="hover:text-white/70 cursor-pointer">
            FACE
          </a>
          <a href="/lips" className="hover:text-white/70 cursor-pointer">
            LIPS
          </a>
          <a href="/eyes" className="hover:text-white/70 cursor-pointer">
            EYES
          </a>
        </div>
      )}
    </>
  );
}

export default Page;
