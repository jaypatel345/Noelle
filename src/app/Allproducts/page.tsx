import React from "react";
import AnnouncementBar from "../component/AnnouncementBar";
import Navbar from "@/app/component/Navbar";
import Footer from "../component/footer";
import AllProductPage from "../component/AllProductPage";

function Page() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
     

      <div className="flex justify-end animate-slideUp ">
        <div className="w-full min-h-screen mt-2 sm:mt-3 lg:mt-5">
          <AllProductPage />
        </div>
      </div>
      <footer className="bg-gray-800 text-white">
        <Footer />
      </footer>
    </>
  );
}

export default Page;
