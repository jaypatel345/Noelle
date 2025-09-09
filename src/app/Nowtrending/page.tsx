import React from "react";
import AnnouncementBar from "../component/AnnouncementBar";
import Navbar from "@/app/component/Navbar";
import Footer from "../component/footer";
import NowTrending from "../component/NowTrendingPage";

function Page() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
     

      <div className="flex justify-end animate-slideUp">
        <div className="w-full h-[240vh] mt-5 ">
          <NowTrending />
        </div>
      </div>
      <footer className="bg-gray-800 text-white">
        <Footer />
      </footer>
    </>
  );
}

export default Page;
