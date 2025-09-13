import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";
import MenuBar from "./MenuBar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
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

function EyesPage() {
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row w-full mx-auto ">
        {/* Sidebar */}
        <MenuBar currentPage="Eyes"  />
        {/* Hero Image */}
        <div className="relative w-full lg:w-[80%] h-[250px] sm:h-[300px] lg:h-[400px] lg:mt-13 opacity-95">
          <Image
            src="/2e2a49_cad6f2e23e5345928667147c8a695e14~mv2.avif"
            alt="Best Sellers banner"
            fill
            className="object-cover"
            priority
          />
          {/* Title */}
          <div className="absolute bottom-0 left-0 w-full bg-black/40 py-2 sm:py-4 px-3 sm:px-6">
            <h1 className={`${playfair.className} text-2xl sm:text-3xl lg:text-4xl text-white font-bold`}>
              Eyes
            </h1>
          </div>
        </div>
      </div>
      <div className="min-h-screen px-4 lg:ml-56 lg:mr-16 mt-6 lg:mt-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 transition-all duration-500">
          {myMap.map((item, index) => (
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
              <h2 className="text-lg font-extralight truncate w-full text-center text-gray-600 ">
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
                <span className="text-sm text-gray-500">({item.reviews})</span>
              </div>
              <div className=" opacity-0 group-hover:opacity-100  transition-opacity duration-500">
                <button className=" border px-12 py-2 hover:bg-black hover:text-white hover:underline cursor-pointer text-gray-500  ">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EyesPage;