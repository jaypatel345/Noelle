"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/component/Navbar";
import AnnouncementBar from "../component/AnnouncementBar";
import HeroSection from "../component/HeroSection";
import BestSellers from "../component/BestSellers";
import VibrantLips from "../component/VibrantLips";
import Trending from "../component/Trending";
import DiscoverMore from "../component/DiscoverMore";
import Sitewide from "../component/Sitewide";
import YourSkinComesFirst from "../component/YourSkinComesFirst";
import FollowUs from "../component/FollowUs";
import Footer from "../component/footer";


function Home() {
  const [hide, sethide] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const halfpage = window.innerHeight / 5;
      if (window.scrollY > halfpage) {
        sethide(true);
      } else {
        sethide(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div >
        <div
          className={` sticky top-0 left-0 w-full z-50 transition-transform duration-700 ${
            hide ? "-translate-/y-full   opacity-0" : "translate-y-0"
          }`}
        >
          <AnnouncementBar />
          <Navbar />
        </div>
        <HeroSection />
        <BestSellers/>
        <VibrantLips/>
        <Trending/>
        <DiscoverMore/>
        <Sitewide/>
        <YourSkinComesFirst/>
        <FollowUs/>
        <Footer/>
        
        
      </div>
    </>
  );
}

export default Home;
