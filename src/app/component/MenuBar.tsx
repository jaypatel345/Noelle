import Link from "next/link";
import React from "react";
interface menubarprop{
  currentPage:string;
}
function MenuBar({currentPage}:menubarprop) {
  return (
    <div className="w-56 ">
      {/* Header */}
      <div className="flex  text-gray-500 gap-1.5 px-7 py-5  ">
        <Link href="/" className="hover:text-gray-900 cursor-pointer">
          <div>Home</div>
        </Link>
        <div>{">"}</div>
        <h2 className="text-gray-400 mb-4  pb-2">{currentPage}</h2>
      </div>
      <h2 className="text-gray-500 font-extralight text-2xl mb-6 border-b pb-2 px-0 mx-7">
        Browse by
      </h2>

      {/* Menu Items */}
      <ul className="space-y-2 text-gray-500 mx-7 font-extralight">
        <li>
          <Link href="Allproducts" className="block hover:text-gray-900">
            All Products
          </Link>
        </li>
        <li>
          <Link href="Bestsellers" className="block hover:text-gray-900">
            Best Sellers
          </Link>
        </li>
        <li>
          <Link href="Eyes" className="block hover:text-gray-900">
            Eyes
          </Link>
        </li>
        <li>
          <Link href="Face" className="block hover:text-gray-900">
            Face
          </Link>
        </li>
        <li>
          <Link href="Lips" className="block hover:text-gray-900">
            Lips
          </Link>
        </li>
        <li>
          <Link href="New" className="block hover:text-gray-900">
            New
          </Link>
        </li>
        <li>
          <Link href="Nowtrending" className="block hover:text-gray-900">
            Now Trending
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuBar;
