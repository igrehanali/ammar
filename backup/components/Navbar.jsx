"use client";

import { useState } from "react";
import { navigation } from "./constants";

export default function Navbar() {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      console.log(`${openNavigation} Close the menu`);
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
      console.log(`${openNavigation}  Open the menu`);
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
    { href: "#blog", label: "Blog" },
  ];

  const renderLinks = (onClick = () => {}) =>
    navLinks.map(({ href, label }) => (
      <a
        key={href}
        href={href}
        className="block relative  text-2xl lowcase   px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold "
        onClick={onClick}
      >
        {label}
      </a>
    ));

  return (
    <div className="fixed  top-0 left-0 w-full z-50  lg:backdrop-blur-sm">
      {/* Logo */}

      {/* Desktop Menu */}
      <div
        className={`relative  flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4`}
      >
        <div className="flex items-center px-5  text-2xl font-bold">LOGO</div>
        <nav
          className={` hidden fixed top-[5rem] left-0 right-0 bottom-0  lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={handleClick}
              className={`block relative font-code text-2xl uppercase text-n-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold`}
            >
              {item.title}
            </a>
          ))}
        </nav>
        <div
          className={`hidden lg:flex flex-row items-center bg-black text-white px-4 py-2 rounded-[1.7rem] hover:bg-gray-800 `}
        >
          <a href="#contact">Book a call</a>
          <div className="bg-lime-400 ml-4 h-1 w-1 rounded-[1.7rem]"></div>
        </div>

        <div
          className="flex flex-col space-y-1 md:hidden cursor-pointer absolute right-0"
          onClick={() => toggleNavigation()}
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </div>
      </div>

      {/* Mobile Menu Icon */}

      {/* Mobile Menu */}
      {openNavigation && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => handleClick()}
          ></div>

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-2/3 bg-gray-100 shadow-lg transform transition-transform duration-300 z-20 ${
              openNavigation ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={() => toggleNavigation()}
              className="absolute top-4 right-4 text-2xl"
            >
              &times;
            </button>
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {renderLinks(() => handleClick())}
              <a
                href="#contact"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                onClick={() => handleClick()}
              >
                Book a call
              </a>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
