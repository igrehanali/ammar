"use client";

import { useState } from "react";
import { navigation } from "./constants";
import Link from "next/link";
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
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
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
        <Link href="/">
          <div className="flex items-center px-5 text-white  text-2xl font-bold">
            LOGO
          </div>
        </Link>
        <nav
          className={`hidden fixed top-[5rem] text-white left-0 right-0 bottom-0  lg:static lg:flex lg:mx-auto lg:bg-transparent`}
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
          className={`hidden lg:flex flex-row items-center bg-[#1A1A1A] text-white px-4 py-2 rounded-[1.7rem] hover:bg-gray-800 `}
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
// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [openNavigation, setOpenNavigation] = useState(false);

//   const toggleNavigation = () => {
//     setOpenNavigation(!openNavigation);
//   };

//   const handleClick = (href) => {
//     if (openNavigation) {
//       setOpenNavigation(false);
//     }
//     // Add navigation logic here
//     window.location.href = href;
//   };

//   const navLinks = [
//     { href: "/work", label: "Work" },
//     { href: "/services", label: "Services" },
//     { href: "/about", label: "About" },
//     { href: "/pricing", label: "Pricing" },
//     { href: "/blog", label: "Blog" },
//   ];

//   const renderLinks = () =>
//     navLinks.map(({ href, label }) => (
//       <a
//         key={href}
//         href={href}
//         className="block relative  text-2xl lowcase   px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold "
//         onClick={(e) => {
//           e.preventDefault();
//           handleClick(href);
//         }}
//       >
//         {label}
//       </a>
//     ));

//   return (
//     <div className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-sm">
//       <div className="relative flex items-center justify-between px-5 lg:px-7.5 xl:px-10 py-4">
//         <Link href="/">
//           <div className="flex items-center text-white text-2xl font-bold">
//             LOGO
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex items-center space-x-4">
//           {renderLinks()}
//           <div className="bg-[#1A1A1A] text-white px-4 py-2 rounded-[1.7rem] hover:bg-gray-800 transition-colors">
//             <a href="#contact">Book a call</a>
//             <div className="inline-block bg-lime-400 ml-4 h-1 w-1 rounded-full"></div>
//           </div>
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="lg:hidden text-white focus:outline-none"
//           onClick={toggleNavigation}
//           aria-label="Toggle navigation"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {openNavigation && (
//         <div className="lg:hidden">
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-40"
//             onClick={handleClick}
//           ></div>
//           <nav className="fixed top-0 right-0 bottom-0 w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out">
//             <div className="flex justify-end p-4">
//               <button
//                 onClick={handleClick}
//                 className="text-white focus:outline-none"
//                 aria-label="Close navigation"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <nav className="flex flex-col items-center justify-center h-full space-y-8">
//               {renderLinks()}
//               <a
//                 href="#contact"
//                 className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleClick("#contact");
//                 }}
//               >
//                 Book a call
//               </a>
//             </nav>
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// }
