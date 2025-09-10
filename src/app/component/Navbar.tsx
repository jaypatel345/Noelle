"use client";
import React, { useState, useEffect } from "react";
import { CircleUserRound, ShoppingCart, Menu } from "lucide-react";
import { Montez } from "next/font/google";
import Link from "next/link";


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
        <Link href="/" >
          <div className={`${montez.className} text-4xl font-bold `}>
            Noelle
          </div>
        </Link>
        {/* Desktop menu */}
        <div className="hidden md:flex gap-10 font-extralight">
          <Link href="/Allproducts" className="hover:text-white/70 cursor-pointer">
            SHOP ALL
          </Link>
          <Link href="/New" className="hover:text-white/70 cursor-pointer">
            NEW
          </Link>
          <Link href="/Bestsellers" className="hover:text-white/70 cursor-pointer">
            BEST SELLERS
          </Link>
          <Link href="/Face" className="hover:text-white/70 cursor-pointer">
            FACE
          </Link>
          <Link href="/Lips" className="hover:text-white/70 cursor-pointer">
            LIPS
          </Link>
          <Link href="/Eyes" className="hover:text-white/70 cursor-pointer">
            EYES
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex gap-3 justify-center items-center">
          {userExists && (
            <div className="cursor-pointer">
              <CircleUserRound size="28px" />
            </div>
          )}
          <div className=" cursor-pointer hover:text-white/70">
            <Link href="/Login">Log In </Link>
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
          <Link href="/shop-all" className="hover:text-white/70 cursor-pointer">
            SHOP ALL
          </Link>
          <Link href="/new" className="hover:text-white/70 cursor-pointer">
            NEW
          </Link>
          <Link
            href="/best-sellers"
            className="hover:text-white/70 cursor-pointer"
          >
            BEST SELLERS
          </Link>
          <Link href="/face" className="hover:text-white/70 cursor-pointer">
            FACE
          </Link>
          <Link href="/lips" className="hover:text-white/70 cursor-pointer">
            LIPS
          </Link>
          <Link href="/eyes" className="hover:text-white/70 cursor-pointer">
            EYES
          </Link>
        </div>
      )}
    </>
  );
}

export default Page;
