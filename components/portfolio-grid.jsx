"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All" },
  { id: "web-design", label: "Web Design" },
  { id: "product-design", label: "Product Design" },
  { id: "branding", label: "Branding" },
  { id: "creative-direction", label: "Creative Direction" },
];

const projects = [
  {
    id: 1,
    title: "Digital Platform Design",
    category: "web-design",
    image: "/image/project1.png",
    avatar: "https://i.pravatar.cc/48?img=1",
    author: "BPN",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "web-design",
    image: "/image/project2.png",
    avatar: "https://i.pravatar.cc/48?img=2",
    author: "John Doe",
  },
  {
    id: 3,
    title: "Mobile App UI/UX",
    category: "product-design",
    image: "/image/project3.png",
    avatar: "https://i.pravatar.cc/48?img=3",
    author: "Jane Smith",
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "branding",
    image: "/image/project1.png",
    avatar: "https://i.pravatar.cc/48?img=4",
    author: "Alice Johnson",
  },
  {
    id: 5,
    title: "Creative Campaign",
    category: "creative-direction",
    image: "/image/project2.png",
    avatar: "https://i.pravatar.cc/48?img=5",
    author: "Bob Brown",
  },
  {
    id: 6,
    title: "Corporate Website",
    category: "web-design",
    image: "/image/project3.png",
    avatar: "https://i.pravatar.cc/48?img=6",
    author: "Charlie Davis",
  },
  {
    id: 7,
    title: "Product Prototype",
    category: "product-design",
    image: "/image/project1.png",
    avatar: "https://i.pravatar.cc/48?img=",
    author: "Dana White",
  },
  {
    id: 8,
    title: "Logo Design",
    category: "branding",
    image: "/image/project2.png",
    avatar: "https://i.pravatar.cc/48?img=1",
    author: "Eve Black",
  },
  {
    id: 9,
    title: "Marketing Strategy",
    category: "creative-direction",
    image: "/image/project3.png",
    avatar: "https://i.pravatar.cc/48?img=1",
    author: "Frank Green",
  },
  {
    id: 10,
    title: "Portfolio Website",
    category: "web-design",
    image: "/image/project1.png",
    avatar: "https://i.pravatar.cc/48?img=1",
    author: "Grace Lee",
  },
  {
    id: 11,
    title: "User Experience Design",
    category: "product-design",
    image: "/image/project2.png",
    avatar: "https://i.pravatar.cc/48?img=1",
    author: "Hank Miller",
  },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.h1
        className="text-5xl font-bold mb-12"
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
                : "bg-gray-100 hover:bg-gray-200"
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={project.avatar}
                      alt={project.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm text-white font-medium">
                    {project.author}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
