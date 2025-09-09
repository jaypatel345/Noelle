import React from "react";
interface menubarprop{
  currentPage:string;
}
function MenuBar({currentPage}:menubarprop) {
  return (
    <div className="w-56 ">
      {/* Header */}
      <div className="flex  text-gray-500 gap-1.5 px-7 py-5  ">
        <a href="/" className="hover:text-gray-900 cursor-pointer">
          <div>Home</div>
        </a>
        <div>{">"}</div>
        <h2 className="text-gray-400 mb-4  pb-2">{currentPage}</h2>
      </div>
      <h2 className="text-gray-500 font-extralight text-2xl mb-6 border-b pb-2 px-0 mx-7">
        Browse by
      </h2>

      {/* Menu Items */}
      <ul className="space-y-2 text-gray-500 mx-7 font-extralight">
        <li>
          <a href="Allproducts" className="block hover:text-gray-900">
            All Products
          </a>
        </li>
        <li>
          <a href="Bestsellers" className="block hover:text-gray-900">
            Best Sellers
          </a>
        </li>
        <li>
          <a href="Eyes" className="block hover:text-gray-900">
            Eyes
          </a>
        </li>
        <li>
          <a href="Face" className="block hover:text-gray-900">
            Face
          </a>
        </li>
        <li>
          <a href="Lips" className="block hover:text-gray-900">
            Lips
          </a>
        </li>
        <li>
          <a href="New" className="block hover:text-gray-900">
            New
          </a>
        </li>
        <li>
          <a href="Nowtrending" className="block hover:text-gray-900">
            Now Trending
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MenuBar;
