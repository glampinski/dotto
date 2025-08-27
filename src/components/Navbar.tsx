"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-100 shadow-[0_2px_8px_rgba(60,64,67,0.08)] min-h-[64px]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-12 h-16 md:h-[72px]">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/images/Dotto_icon_transparent_background.png"
            alt="Dotto Logo"
            width={38}
            height={38}
            className="object-contain rounded-lg bg-white shadow-[0_1px_4px_rgba(60,64,67,0.08)]"
          />
          <span className="text-[1.4rem] md:text-[1.7rem] font-bold text-[#1a73e8] tracking-[1px] font-google">
            Dotto
          </span>
        </Link>

        <button
          className="lg:hidden flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-50"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`w-full h-0.5 bg-gray-800 rounded-sm transition-all duration-300 transform-origin-center ${
              isMenuOpen ? "rotate-45 translate-x-1.5 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-gray-800 rounded-sm transition-all duration-300 transform-origin-center ${
              isMenuOpen ? "-rotate-45 translate-x-1.5 -translate-y-1.5" : ""
            }`}
          />
        </button>

        <ul
          className={`
            list-none flex gap-9 m-0 p-0
            lg:flex lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:flex-row lg:justify-start lg:items-center lg:gap-9 lg:p-0 lg:shadow-none lg:border-none lg:transition-none lg:z-auto
            ${
              isMenuOpen
                ? "fixed top-18 right-0 w-70 h-screen-minus-18 bg-white flex-col justify-start items-center gap-0 pt-8 shadow-lg border-l border-gray-200 transition-right duration-300 z-50"
                : "fixed top-18 -right-full w-70 h-screen-minus-18 bg-white flex-col justify-start items-center gap-0 pt-8 shadow-lg border-l border-gray-200 transition-right duration-300 z-50 lg:right-0"
            }
          `}
        >
          {["Home", "Nano", "Ultra", "Big data", "Contact"].map((item) => (
            <li key={item} className="w-full text-center mb-2 lg:w-auto lg:mb-0">
              <Link
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="block w-4/5 mx-auto py-4 px-6 text-lg rounded-xl no-underline text-[#202124] font-medium text-[1.08rem] px-[18px] py-[8px] rounded-[22px] transition-all duration-200 hover:bg-[#f1f3f4] hover:text-[#1a73e8] lg:w-auto lg:py-2 lg:px-4.5 lg:text-base lg:rounded-3xl"
                onClick={closeMenu}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
}
