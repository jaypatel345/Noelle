"use client";

import React, { useState, useEffect } from "react";
import { CircleUserRound, ShoppingCart, Menu } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <div className="bg-[#634041] flex justify-between items-center py-6 px-6 md:px-10">
        <div className={`${playfair.className} text-3xl font-bold `}>Noelle</div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-10 font-extralight">
          <div className="hover:text-white/70 cursor-pointer">SHOP ALL</div>
          <div className="hover:text-white/70 cursor-pointer">NEW</div>
          <div className="hover:text-white/70 cursor-pointer">BEST SELLERS</div>
          <div className="hover:text-white/70 cursor-pointer">FACE</div>
          <div className="hover:text-white/70 cursor-pointer">LIPS</div>
          <div className="hover:text-white/70 cursor-pointer">EYES</div>
        </div>

        {/* Right icons */}
        <div className="flex gap-3 justify-center items-center">
          {userExists && (
            <div className="cursor-pointer">
              <CircleUserRound size="28px" />
            </div>
          )}
          <div className=" cursor-pointer hover:text-white/70">Log In</div>
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
          <div className="hover:text-white/70 cursor-pointer">SHOP ALL</div>
          <div className="hover:text-white/70 cursor-pointer">NEW</div>
          <div className="hover:text-white/70 cursor-pointer">BEST SELLERS</div>
          <div className="hover:text-white/70 cursor-pointer">FACE</div>
          <div className="hover:text-white/70 cursor-pointer">LIPS</div>
          <div className="hover:text-white/70 cursor-pointer">EYES</div>
        </div>
      )}
    </>
  );
}

export default Page;