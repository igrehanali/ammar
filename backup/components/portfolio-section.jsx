"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  "Wordpress",
  "Webflow",
  "Mobile app",
  "Branding",
  "Social media",
  "Landing pages",
  "Logos",
  "Blog Graphic",
  "Brand Guides",
];

const portfolioItems = [
  {
    title: "E-commerce Platform",
    image: "/image/project1.png",
    categories: ["Wordpress", "Landing pages"],
  },
  {
    title: "Vision to Venture",
    image: "/image/project2.png",
    categories: ["Branding", "Blog Graphic"],
  },
  {
    title: "Web Infrastructure",
    image: "/image/project3.png",
    categories: ["Webflow", "Landing pages"],
  },
  {
    title: "Airnautic Brand",
    image: "/image/project1.png",
    categories: ["Branding", "Logos"],
  },
  {
    title: "Lifestyle Platform",
    image: "/image/project2.png",
    categories: ["Mobile app", "Social media"],
  },
  {
    title: "Jet Gen Identity",
    image: "/image/project3.png",
    categories: ["Branding", "Logos"],
  },
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredItems = selectedCategory
    ? portfolioItems.filter((item) =>
        item.categories.includes(selectedCategory)
      )
    : portfolioItems;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="lg:text-7xl md:text-6xl text-5xl font-bold tracking-tight">
            Apps, websites,
            <br />
            logos & more
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 justify-center  max-w-lg items-center mx-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className={cn(
                "h-10 rounded-full bg-black text-zinc-300 hover:bg-[#DEFF4E] hover:text-black transition-all duration-300",
                selectedCategory === category && "bg-[#DEFF4E] text-black"
              )}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? null : category
                )
              }
            >
              {category}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="h-10 rounded-full bg-[#DEFF4E] text-black hover:bg-[#DEFF4E]/80 transition-all duration-300"
          >
            + View more
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
