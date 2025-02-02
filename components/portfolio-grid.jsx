"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { useRouter } from "next/navigation";
import casestudy from "../data/caseStudy.json";
import Link from "next/link";
const categories = [
  { id: "all", label: "All" },
  { id: "web-design", label: "Web Design" },
  { id: "product-design", label: "Product Design" },
  { id: "branding", label: "Branding" },
  { id: "creative-direction", label: "Creative Direction" },
];

// const projects = [
//   {
//     id: 1,
//     title: "Digital Platform Design",
//     category: "web-design",
//     image: "/image/p1.png",
//     image1: "/image/Slide1.svg",
//     avatar: "/image/p11.png",
//     author: "BPN",
//     height: 18,
//   },
//   {
//     id: 2,
//     title: "E-commerce Website",
//     category: "web-design",
//     image: "/image/p2.png",
//     image1: "/image/Slide1.svg",
//     avatar: "/image/p11.png",
//     author: "John Doe",
//     height: 17,
//   },
//   {
//     id: 3,
//     title: "Mobile App UI/UX",
//     category: "product-design",
//     image: "/image/p3.png",
//     image1: "/image/Slide1.svg",
//     avatar: "/image/p11.png",
//     author: "Jane Smith",
//     height: 16,
//   },
//   {
//     id: 4,
//     title: "Brand Identity",
//     category: "branding",
//     image: "/image/p4.png",
//     image1: "/image/Slide1.svg",
//     avatar: "/image/p11.png",
//     author: "Alice Johnson",
//     height: 14,
//   },
//   {
//     id: 5,
//     title: "Creative Campaign",
//     category: "creative-direction",
//     image: "/image/p5.png",
//     image1: "/image/Slide1.svg",
//     avatar: "/image/p11.png",
//     author: "Bob Brown",
//     height: 16,
//   },
//   {
//     id: 6,
//     title: "Corporate Website",
//     category: "web-design",
//     image: "/image/p6.png",
//     image1: "/image/Slide1.svg",
//     avatar: "/image/p11.png",
//     author: "Charlie Davis",
//     height: 14,
//   },
//   {
//     id: 7,
//     title: "Product Prototype",
//     category: "product-design",
//     image: "/image/p7.png",
//     image1: "/image/Slide1.svg",
//     avatar: "/image/p11.png",
//     author: "Dana White",
//     height: 16,
//   },
//   {
//     id: 8,
//     title: "Logo Design",
//     category: "branding",
//     image: "/image/p8.png",
//     image1: "/image/Slide1.svg",
//     avatar: "/image/p11.png",
//     author: "Eve Black",
//     height: 14,
//   },
//   {
//     id: 9,
//     title: "Marketing Strategy",
//     category: "creative-direction",
//     image: "/image/p9.png",
//     image1: "/image/Slide1.svg",
//     avatar: "/image/p11.png",
//     author: "Frank Green",
//     height: 16,
//   },
//   {
//     id: 10,
//     title: "Portfolio Website",
//     category: "web-design",
//     image: "/image/p10.png",
//     image1: "/image/Slide1.svg",
//     avatar: "/image/p11.png",
//     author: "Grace Lee",
//     height: 14,
//   },
//   {
//     id: 11,
//     title: "User Experience Design",
//     category: "product-design",
//     image: "/image/p1.png",
//     image1: "/image/Slide1.svg",
//     avatar: "/image/p11.png",
//     author: "Hank Miller",
//     height: 16,
//   },
// ];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = casestudy.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );
  const router = useRouter();
  return (
    <div className="max-w-7xl mx-auto p-6 lg:pt-[5rem] px-4 py-16">
      <motion.h1
        className="text-5xl text-white font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        OUR BEST WORKS
      </motion.h1>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm transition-colors",
              activeCategory === category.id
                ? "bg-black text-white"
                : "bg-[#F0F1EA] border border-black"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </div>
      {/* Project Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/caseStudy/${project.id}`}>
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                // onClick={() => {
                //   router.push(`/caseStudy/${encodeURIComponent(project.image1)}`);
                // }}
                onClick={() => router.push("/caseStudy")}
              >
                <div
                  className="relative h-[18rem] w-full "
                  // style={{ height: `${project.height}rem` || "16rem " }}
                >
                  {/* <Link
                  href={{
                    pathname: "/caseStudy",
                    query: { image1: `${encodeURIComponent(project.image1)}` },
                  }}
                > */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-sm"
                  />
                  {/* </Link> */}
                </div>

                {/* Overlay */}

                {/* Content */}
                <div className="inset-0  pt-4 flex flex-col justify-end  ">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative border border-gray-500 w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={project.avatar}
                        alt={project.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-md text-white font-medium">
                        {project.author}
                      </span>
                      <h3 className="text-sm font-normal text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
