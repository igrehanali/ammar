"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Twitter,
  Globe,
} from "lucide-react";
import { Button } from "../components/ui/button";

const teamMembers = [
  {
    name: "Full name",
    title: "Job title",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "/image/p1.png",
  },
  {
    name: "Full name",
    title: "Job title",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",

    image: "/image/p2.png",
  },
  {
    name: "Full name",
    title: "Job title",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "/image/p3.png",
  },
  {
    name: "Full name",
    title: "Job title",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",

    image: "/image/p4.png",
  },
  {
    name: "Full name",
    title: "Job title",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "/image/p5.png",
  },
  // Add more team members as needed
];

export default function TeamSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3;
  const totalSlides = Math.ceil(teamMembers.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="bg-black text-white px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">OUR TEAM</h2>
          <p className="text-2xl md:text-3xl text-gray-300">
            Over the past 10 years, we've perfected our Design & Development
            game and are eager to help
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers
              .slice(
                currentSlide * slidesToShow,
                currentSlide * slidesToShow + slidesToShow
              )
              .map((member, index) => (
                <div key={index} className="space-y-4">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-400">{member.title}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                    <div className="flex gap-4 pt-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-gray-300"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-gray-300"
                      >
                        <Twitter className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-gray-300"
                      >
                        <Globe className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex items-center justify-center gap-8 mt-12">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="hover:text-gray-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-white" : "bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="hover:text-gray-300"
              aria-label="Next slide"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
