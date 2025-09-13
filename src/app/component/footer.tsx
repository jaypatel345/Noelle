"use client";

import React from 'react'

import { Playfair_Display } from "next/font/google";
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";
import Link from 'next/link';


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Footer() {
  return (
    <footer className="bg-black text-white py-16 ">
      {/* Top section: Newsletter */}
      <div className="text-center mb-12">
        <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold mb-2`}>
          Are you on the list?
        </h2>
        <p className="mb-5">Join to get exclusive offers & discounts</p>
        <div className="flex flex-col sm:flex-row justify-center items-center pb-10 md:pb-20 gap-2 w-full px-4">
          <input
            type="email"
            placeholder="Email*"
            className="px-4 py-2 border border-gray-300 focus:outline-none w-full sm:w-auto"
          />
          <button className="bg-white text-black px-5 py-2  hover:bg-gray-300 cursor-pointer">
            Join
          </button>
        </div>
      </div>

      <div className="border-t border-white w-3/4 mx-auto mb-12"></div>

      {/* Middle section: Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-16 px-6 md:px-47">
        {/* Shop */}
        <div>
          <h3 className={ `${playfair.className} font-extrabold text-2xl mb-3 md:mb-6`}>Shop</h3>
          <ul className="space-y-2">
            <li >All Products</li>
            <li>New</li>
            <li>Best Sellers</li>
            <li>Lips</li>
           
            
          </ul>
        </div>

        {/* Our Store */}
        <div>
          <h3 className={ `${playfair.className} font-extrabold text-2xl mb-3 md:mb-5`}>Our Store</h3>
          <p>500 Terry Francine Street</p>
          <p>San Francisco, CA 94158</p>
          <p className="mt-2">Monday-Friday : 11am-10pm</p>
          <p>Saturday-Sunday: 11am-12pm</p>
          <p className="mt-2">Tel: 123-456-7890</p>
          <p>Email: info@mysite.com</p>
        </div>

        {/* Policy */}
        <div>
          <h3 className={ `${playfair.className} font-extrabold text-2xl mb-3 md:mb-6`}>Policy</h3>
          <ul className="space-y-2">
            <li>Shipping & Returns</li>
            <li>Store Policy</li>
            <li>Payment Methods</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className={ `${playfair.className} font-extrabold text-2xl mb-3 md:mb-6 `}>Customer Service</h3>
          <p>Tel: 123-456-7890</p>
          <p>Email: info@mysite.com</p>
          <div className="flex space-x-4 mt-3 justify-center md:justify-start">
            <Link href="https://instagram.com" aria-label="Instagram">
            <Instagram size={17} />
          </Link>
          <Link href="https://facebook.com" aria-label="Facebook">
            <Facebook size={17} />
          </Link>
          <Link href="https://youtube.com" aria-label="YouTube">
            <Youtube size={17} />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter">
            <Twitter size={17} />
          </Link>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-xs text-gray-500">
        © 2035 by Noelle. Powered and secured by Wix
      </div>
    </footer>
  )
}

export default Footer
