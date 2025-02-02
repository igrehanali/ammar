"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ExpertiseSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Great Performance",
      content:
        "Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo.",
    },
    {
      title: "Quality Product",
      content:
        "Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo.",
    },
    {
      title: "Ask a Question",
      content:
        "This is Julia, Halo Lab's manager. Feel free to text her and get all the answers you need.",
      hasAction: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="px-4 py-16 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold mb-16">OUR EXPERTISE</h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {slides.map((slide, index) => (
              <Card
                key={index}
                className={`bg-black text-white rounded-3xl overflow-hidden transition-opacity duration-300
                  ${
                    index === currentSlide
                      ? "opacity-100"
                      : "opacity-50 md:opacity-100"
                  }`}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  {index === 2 && (
                    <div className="mb-6">
                      <Image
                        src="/placeholder.svg"
                        alt="Profile"
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                  )}
                  <h3 className="text-3xl font-semibold mb-6">{slide.title}</h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    {slide.content}
                  </p>
                  {slide.hasAction && (
                    <Button className="bg-[#d1f951] text-black hover:bg-[#b8e038] rounded-full px-6">
                      ASK A QUESTION
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex-grow h-0.5 bg-gray-200 ml-4">
              <div
                className="h-full bg-black transition-all duration-300"
                style={{
                  width: `${((currentSlide + 1) / slides.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
