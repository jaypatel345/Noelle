"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Montez } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montez = Montez({
  subsets: ["latin"],
  weight: ["400"], // Montez has only one weight
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function BestSellers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const myMap = [
    {
      image: "/bestseller01.jpg",
      hoverImage: "/bestseller11.jpg",
      text: "Black Power Eye Pencil",
      price: "$59.99",
      rating: 4.5,
      reviews: 120,
    },
    {
      image: "/bestseller02.jpg",
      hoverImage: "/bestseller16.jpg",
      text: "Luxe Velvet Lipstick",
      price: "$149.99",
      rating: 4.8,
      reviews: 85,
    },
    {
      image: "/bestseller03.jpg",
      hoverImage: "/bestseller13.jpg",
      text: "Glossy Rose",
      price: "$39.99",
      rating: 4.2,
      reviews: 45,
    },
    {
      image: "/bestseller04.jpg",
      hoverImage: "/bestseller12.jpg",
      text: "Full Coverage Slick Fluid Foundation",
      price: "$39.99",
      rating: 4.2,
      reviews: 45,
    },
    {
      image: "/bestseller05.jpg",
      hoverImage: "/bestseller15.jpg",
      text: "Dazzle Pink Eyeshadow",
      price: "$39.99",
      rating: 4.2,
      reviews: 45,
    },
    {
      image: "/bestseller06.jpg",
      hoverImage: "/bestseller14.jpg",
      text: "Multipack Eyeshadow",
      price: "$39.99",
      rating: 4.2,
      reviews: 45,
    },
    {
      image: "/bestseller01.jpg",
      hoverImage: "/bestseller11.jpg",
      text: "Travel Bag",
      price: "$39.99",
      rating: 4.2,
      reviews: 45,
    },
    {
      image: "/bestseller02.jpg",
      hoverImage: "/bestseller16.jpg",
      text: "Luxe Velvet Lipstick",
      price: "$149.99",
      rating: 4.8,
      reviews: 85,
    },
    {
      image: "/bestseller03.jpg",
      hoverImage: "/bestseller13.jpg",
      text: "Glossy Rose",
      price: "$39.99",
      rating: 4.2,
      reviews: 45,
    },
    {
      image: "/bestseller04.jpg",
      hoverImage: "/bestseller12.jpg",
      text: "Full Coverage Slick Fluid Foundation",
      price: "$39.99",
      rating: 4.2,
      reviews: 45,
    },
  ];
  const visiblecard = myMap.slice(currentIndex, currentIndex + 5);

  const handleNext = useCallback(() => {
  setCurrentIndex((prev) =>
    prev + 6 >= myMap.length ? 0 : prev + 1
  );
}, [myMap.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? myMap.length - 6 : prev - 1));
  };

  useEffect(() => {
  const interval = setInterval(handleNext, 7000);
  return () => clearInterval(interval);
}, [handleNext]);

  return (
    <>
      <div className="w-full min-h-screen text-black px-4 md:px-8 py-10 md:py-20">
        <div
          ref={ref}
          className={`flex flex-col items-center pt-25 transition-all duration-700 ${
            inView ? "animate-slideUp opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="pb-4">MUST HAVES</div>
          <div className="flex gap-1">
            <div className={`${playfair.className} text-6xl font-bold  `}>
              Best{" "}
            </div>
            <span className={`${montez.className} text-6xl m-2 `}>
              {" "}
              Sellers
            </span>
          </div>
        </div>
        <div>
          <div className="relative mt-6">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/3 -translate-y-1/2 bg-white border px-2 py-2 md:px-3 md:py-4 shadow z-10 cursor-pointer hover:border-gray-600/50 text-sm md:text-base"
            >
              ◀
            </button>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 transition-all duration-500">
              {visiblecard.map((item, index) => (
                <div
                  key={index}
                  className="w-40 md:w-60 p-2 md:p-4 flex flex-col items-center overflow-hidden group relative"
                >
                  <div className="relative group  ">
                    <Image
                      src={item.image}
                      alt={item.text}
                      width={500}
                      height={300}
                      className="w-32 h-48 md:w-42 md:h-65 object-cover mb-2 flex-shrink-0 "
                    />
                    <Image
                      src={item.hoverImage}
                      alt={item.text}
                      width={500}
                      height={300}
                      className="w-32 h-48 md:w-42 md:h-65 mb-2 flex-shrink-0 absolute inset-0 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-700"
                    />
                  </div>
                  <h2 className="text-lg font-extralight truncate w-full text-center ">
                    {item.text}
                  </h2>
                  <p className="text-gray-600">{item.price}</p>
                  <div className="flex items-center pt-6 pb-3">
                    <span className=" text-gray-500 mr-2 flex gap-1 items-center ">
                      <div aria-hidden="true" className="flex opacity-70 ">
                        <svg
                          viewBox="3 2 18 18"
                          width="15"
                          height="15"
                          className="fne1F1"
                        >
                          <path
                            d="M20.9502,8.8922 C20.8322,8.5282 20.5222,8.2672 20.1432,8.2112 L15.1362,7.4842 L12.8962,2.9472 C12.5572,2.2592 11.4422,2.2592 11.1032,2.9472 L8.8642,7.4842 L3.8562,8.2112 C3.4772,8.2672 3.1682,8.5282 3.0492,8.8922 C2.9312,9.2562 3.0282,9.6502 3.3022,9.9172 L6.9262,13.4492 L6.0712,18.4362 C6.0062,18.8142 6.1582,19.1882 6.4682,19.4132 C6.7782,19.6412 7.1812,19.6692 7.5212,19.4912 L11.9992,17.1352 L16.4792,19.4912 C16.6262,19.5692 16.7862,19.6072 16.9452,19.6072 C17.1512,19.6072 17.3572,19.5412 17.5322,19.4132 C17.8422,19.1882 17.9942,18.8142 17.9292,18.4362 L17.0742,13.4502 L20.6982,9.9172 C20.9722,9.6502 21.0692,9.2562 20.9502,8.8922"
                            fillRule="evenodd"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <svg
                          viewBox="3 2 18 18"
                          width="15"
                          height="15"
                          className="fne1F1"
                        >
                          <path
                            d="M20.9502,8.8922 C20.8322,8.5282 20.5222,8.2672 20.1432,8.2112 L15.1362,7.4842 L12.8962,2.9472 C12.5572,2.2592 11.4422,2.2592 11.1032,2.9472 L8.8642,7.4842 L3.8562,8.2112 C3.4772,8.2672 3.1682,8.5282 3.0492,8.8922 C2.9312,9.2562 3.0282,9.6502 3.3022,9.9172 L6.9262,13.4492 L6.0712,18.4362 C6.0062,18.8142 6.1582,19.1882 6.4682,19.4132 C6.7782,19.6412 7.1812,19.6692 7.5212,19.4912 L11.9992,17.1352 L16.4792,19.4912 C16.6262,19.5692 16.7862,19.6072 16.9452,19.6072 C17.1512,19.6072 17.3572,19.5412 17.5322,19.4132 C17.8422,19.1882 17.9942,18.8142 17.9292,18.4362 L17.0742,13.4502 L20.6982,9.9172 C20.9722,9.6502 21.0692,9.2562 20.9502,8.8922"
                            fillRule="evenodd"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <svg
                          viewBox="3 2 18 18"
                          width="15"
                          height="15"
                          className="fne1F1"
                        >
                          <path
                            d="M20.9502,8.8922 C20.8322,8.5282 20.5222,8.2672 20.1432,8.2112 L15.1362,7.4842 L12.8962,2.9472 C12.5572,2.2592 11.4422,2.2592 11.1032,2.9472 L8.8642,7.4842 L3.8562,8.2112 C3.4772,8.2672 3.1682,8.5282 3.0492,8.8922 C2.9312,9.2562 3.0282,9.6502 3.3022,9.9172 L6.9262,13.4492 L6.0712,18.4362 C6.0062,18.8142 6.1582,19.1882 6.4682,19.4132 C6.7782,19.6412 7.1812,19.6692 7.5212,19.4912 L11.9992,17.1352 L16.4792,19.4912 C16.6262,19.5692 16.7862,19.6072 16.9452,19.6072 C17.1512,19.6072 17.3572,19.5412 17.5322,19.4132 C17.8422,19.1882 17.9942,18.8142 17.9292,18.4362 L17.0742,13.4502 L20.6982,9.9172 C20.9722,9.6502 21.0692,9.2562 20.9502,8.8922"
                            fillRule="evenodd"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <svg
                          viewBox="3 2 18 18"
                          width="15"
                          height="15"
                          className="fne1F1"
                        >
                          <path
                            d="M20.9502,8.8922 C20.8322,8.5282 20.5222,8.2672 20.1432,8.2112 L15.1362,7.4842 L12.8962,2.9472 C12.5572,2.2592 11.4422,2.2592 11.1032,2.9472 L8.8642,7.4842 L3.8562,8.2112 C3.4772,8.2672 3.1682,8.5282 3.0492,8.8922 C2.9312,9.2562 3.0282,9.6502 3.3022,9.9172 L6.9262,13.4492 L6.0712,18.4362 C6.0062,18.8142 6.1582,19.1882 6.4682,19.4132 C6.7782,19.6412 7.1812,19.6692 7.5212,19.4912 L11.9992,17.1352 L16.4792,19.4912 C16.6262,19.5692 16.7862,19.6072 16.9452,19.6072 C17.1512,19.6072 17.3572,19.5412 17.5322,19.4132 C17.8422,19.1882 17.9942,18.8142 17.9292,18.4362 L17.0742,13.4502 L20.6982,9.9172 C20.9722,9.6502 21.0692,9.2562 20.9502,8.8922"
                            fillRule="evenodd"
                            fill="currentColor"
                          ></path>
                        </svg>

                        <svg
                          viewBox="3 2 18 18"
                          width="15"
                          height="15"
                          className="Ks5wj9 fne1F1"
                        >
                          <path
                            d="M20.9502,8.8922 C20.8322,8.5282 20.5222,8.2672 20.1432,8.2112 L15.1362,7.4842 L12.8962,2.9472 C12.5572,2.2592 11.4422,2.2592 11.1032,2.9472 L8.8642,7.4842 L3.8562,8.2112 C3.4772,8.2672 3.1682,8.5282 3.0492,8.8922 C2.9312,9.2562 3.0282,9.6502 3.3022,9.9172 L6.9262,13.4492 L6.0712,18.4362 C6.0062,18.8142 6.1582,19.1882 6.4682,19.4132 C6.7782,19.6412 7.1812,19.6692 7.5212,19.4912 L11.9992,17.1352 L16.4792,19.4912 C16.6262,19.5692 16.7862,19.6072 16.9452,19.6072 C17.1512,19.6072 17.3572,19.5412 17.5322,19.4132 C17.8422,19.1882 17.9942,18.8142 17.9292,18.4362 L17.0742,13.4502 L20.6982,9.9172 C20.9722,9.6502 21.0692,9.2562 20.9502,8.8922"
                            fillRule="evenodd"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      {item.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({item.reviews})
                    </span>
                  </div>
                  <div className=" opacity-0 group-hover:opacity-100  transition-opacity duration-500">
                    <button className=" border px-12 py-2 hover:bg-black hover:text-white hover:underline cursor-pointer  ">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/3 -translate-y-1/2 bg-white border px-2 py-2 md:px-3 md:py-4 shadow z-10 cursor-pointer hover:border-gray-600/50 text-sm md:text-base"
            >
              ▶
            </button>
          </div>
          <div
            className={`relative flex justify-center pt-28 z-50 transition-all duration-1000 ${
              inView
                ? "animate-slideUp opacity-100"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="border px-6 py-2.5 hover:bg-black hover:text-white cursor-pointer font-semibold transition duration-200">
             <Link href="/Bestsellers">
              Shop Best Seller
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSellers;
