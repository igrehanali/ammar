"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const fadeInOut = "transition-opacity duration-300 ease-in-out";
const testimonials = [
  {
    rating: 5.0,
    text: "We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly translate our needs into a digital experience that seamlessly aligns with the modern employer and jobseeker.We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly .",
    author: {
      name: "Nadir Mea",
      title: "CEO and co-founder of Vacature Via",
      image: "",
    },
  },
  {
    rating: 5.0,
    text: "We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly translate our needs into a digital experience that seamlessly aligns with the modern employer and jobseeker.We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly .",
    author: {
      name: "Nadir Mea",
      title: "CEO at Black Bite",
      image: "",
    },
  },
  {
    rating: 5.0,
    text: "We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly translate our needs into a digital experience that seamlessly aligns with the modern employer and jobseeker.We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly .",
    author: {
      name: "Nadir Mea",
      title: "CEO at Black Elite",
      image: "",
    },
  },
  {
    rating: 5.0,
    text: "We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly translate our needs into a digital experience that seamlessly aligns with the modern employer and jobseeker.We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly .",
    author: {
      name: "Nadir Mea",
      title: "CEO at Black Elite",
      image: "",
    },
  },
  {
    rating: 5.0,
    text: "We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly translate our needs into a digital experience that seamlessly aligns with the modern employer and jobseeker.We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly .",
    author: {
      name: "Nadir Mea",
      title: "CEO at Black Elite",
      image: "",
    },
  },
];
// interface Testimonial {
//   rating: number
//   text: string
//   author: {
//     name: string
//     title: string
//     image: string
//   }
// }

// const testimonials: Testimonial[] = [
//   {
//     rating: 5.0,
//     text: "We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly translate our needs into a digital experience that seamlessly aligns with the modern employer and jobseeker.We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly .",
//     author: {
//       name: "Nadir Mea",
//       title: "CEO and co-founder of Vacature Via",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-13%20at%205.12.58%E2%80%AFPM-kN4yFwlRG4lnm7b1YTblsrxxP8JhSN.png"
//     }
//   },
//   {
//     rating: 5.0,
//     text: "We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly translate our needs into a digital experience that seamlessly aligns with the modern employer and jobseeker.We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly .",
//     author: {
//       name: "Nadir Mea",
//       title: "CEO at Black Bite",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-13%20at%205.12.58%E2%80%AFPM-kN4yFwlRG4lnm7b1YTblsrxxP8JhSN.png"
//     }
//   },
//   {
//     rating: 5.0,
//     text: "We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly translate our needs into a digital experience that seamlessly aligns with the modern employer and jobseeker.We were looking for an agency that would help design and build the job platform of the future with us. Out the Code was able to perfectly .",
//     author: {
//       name: "Nadir Mea",
//       title: "CEO at Black Elite",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-13%20at%205.12.58%E2%80%AFPM-kN4yFwlRG4lnm7b1YTblsrxxP8JhSN.png"
//     }
//   }
// ]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
      <span className="ml-2 text-xl font-semibold">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function TestimonialSectionTwo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const showPrevious = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Calculate visible testimonials based on screen size and current index
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section className="w-full py-12 bg-gradient-to-br from-black to-black/90">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            500 projects done
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            with 4.9 <span className="text-primary">★</span> AVG
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, i) => (
              <Card
                key={`${currentIndex}-${i}`}
                className="bg-gray-900/50 border-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <CardContent
                  className={`p-6 ${fadeInOut} ${
                    i === currentIndex ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <StarRating rating={testimonial.rating} />
                  <blockquote className="mt-4 text-gray-300">
                    {testimonial.text}
                  </blockquote>
                  <div className="flex items-center gap-4 mt-6">
                    <Image
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.author.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.author.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-800/50 border-gray-700 hover:bg-gray-700/50"
              onClick={showPrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-800/50 border-gray-700 hover:bg-gray-700/50"
              onClick={showNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
