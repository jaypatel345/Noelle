"use client";
import React, {  useState } from "react";
import { Instagram, Search, Youtube, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBar() {
  // Sample data for search functionality
  const data = [
    { id: 1, name: "Lipstick" },
    { id: 2, name: "Foundation" },
    { id: 3, name: "Eyeliner" },
    { id: 4, name: "Mascara" }
  ];

  const [searchTerm, setsearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<typeof data>([]);

  const handleSearchClick = () => {
    const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  };

  return (
    <>
      <header className="bg-black py-4 px-9  flex flex-col sm:flex-row  items-center justify-between gap-2 text-white">
        <div className="sm:block  hidden  ">
          <div className="flex gap-2 justify-center  items-center  ">
            <Search color="white" size={18} />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setsearchTerm(e.target.value);
              }}
              onClick={handleSearchClick}
              className="border-none focus:outline-none"
            />
          </div>
        </div>
        <div className="text-center">
          <span className="font-bold">15% sitewide!</span>
          <span className="ml-1 text-gray-300">Use promo code LOVE15</span>
        </div>
        <div className="flex gap-3.5">
          <Link href="https://instagram.com" aria-label="Instagram" target="_blank">
            <Instagram size={17} />
          </Link>
          <Link href="https://facebook.com" aria-label="Facebook" target="_blank">
            <Facebook size={17} />
          </Link>
          <Link href="https://youtube.com" aria-label="YouTube" target="_blank">
            <Youtube size={17} />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter" target="_blank">
            <Twitter size={17} />
          </Link>
        </div>
      </header>
      {filteredData.length > 0 && (
        <div className="bg-white text-black p-2">
          <ul>
            {filteredData.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
