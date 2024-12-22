"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        className="text-gray-800 hover:text-black text-xl"
        onClick={onClick}
      >
        {label}
      </a>
    ));

  return (
    <header className="flex justify-between items-center px-6 py-4 sticky  top-0 z-10 backdrop-blur-md">
      {/* Logo */}
      <div className="text-2xl font-bold">LOGO</div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        {renderLinks()}
        <a
          href="#contact"
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          Book a call
        </a>
      </nav>

      {/* Mobile Menu Icon */}
      <div
        className="flex flex-col space-y-1 md:hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-2/3 bg-gray-100 shadow-lg transform transition-transform duration-300 z-20 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-2xl"
            >
              &times;
            </button>
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {renderLinks(() => setIsOpen(false))}
              <a
                href="#contact"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Book a call
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
