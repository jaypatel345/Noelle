"use client";
import React from "react";
import { Instagram, Search, Youtube, Facebook, Twitter } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <>
      <header className="bg-black py-4 px-9  flex flex-col sm:flex-row  items-center justify-between gap-2 text-white">
        <div className="sm:block  hidden ">
          <Search color="white" size={20} />
        </div>
        <div className="text-center">
          <span className="font-bold">15% sitewide!</span>
          <span className="ml-1 text-gray-300">Use promo code LOVE15</span>
        </div>
        <div className="flex gap-3.5">
          <a href="https://instagram.com" aria-label="Instagram">
            <Instagram size={17} />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <Facebook size={17} />
          </a>
          <a href="https://youtube.com" aria-label="YouTube">
            <Youtube size={17} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <Twitter size={17} />
          </a>
        </div>
      </header>
    </>
  );
}
