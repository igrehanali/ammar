"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    rating: 5.0,
    text: "Cut the Code transformed our outdated platform into a cutting-edge solution. Their team's expertise and attention to detail were truly exceptional.",
    author: {
      name: "Emily Carter",
      title: "CTO at TechSolutions",
      avatar: "https://i.pravatar.cc/48?img=1",
    },
  },
  {
    rating: 4.8,
    text: "The team at Cut the Code delivered beyond expectations. Our e-commerce platform is now faster, more secure, and user-friendly.",
    author: {
      name: "Michael Harris",
      title: "Founder of ShopEase",
      avatar: "https://i.pravatar.cc/48?img=2",
    },
  },
  {
    rating: 5.0,
    text: "Their understanding of modern design trends helped us create a mobile app that our customers love. Highly recommended!",
    author: {
      name: "Sophia Lee",
      title: "Head of Product at Clickly",
      avatar: "https://i.pravatar.cc/48?img=3",
    },
  },
  {
    rating: 4.9,
    text: "Working with Cut the Code was seamless. They quickly grasped our requirements and delivered a robust and scalable solution.",
    author: {
      name: "Liam Smith",
      title: "CEO of InnovateX",
      avatar: "https://i.pravatar.cc/48?img=4",
    },
  },
  {
    rating: 5.0,
    text: "We received tremendous value from their insights. They improved our digital presence and customer engagement dramatically.",
    author: {
      name: "Ava Patel",
      title: "Marketing Director at BrightIdeas",
      avatar: "https://i.pravatar.cc/48?img=5",
    },
  },
  {
    rating: 4.7,
    text: "Cut the Code provided top-notch support throughout the project. Our website is now visually stunning and highly functional.",
    author: {
      name: "Ethan Nguyen",
      title: "Owner of CraftWorks",
      avatar: "https://i.pravatar.cc/48?img=6",
    },
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  const scrollTo = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth / 3;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % testimonials.length;
      scrollTo(next);
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const next = (prev - 1 + testimonials.length) % testimonials.length;
      scrollTo(next);
      return next;
    });
  };

  useEffect(() => {
    if (isHovered) {
      autoScrollIntervalRef.current = setInterval(nextSlide, 2000);
    }
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isHovered]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <h2 className="text-5xl font-bold tracking-tight">
            Customers
            <br />
            Feedback
          </h2>
          <p className="text-xl text-muted-foreground">
            Helped hundreds of partners, ranging from startups to medium-sized
            businesses to achieve their goals. And stellar feedback — is our
            reward!
          </p>
        </div>

        <div
          ref={scrollContainerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-[calc(100%/3)] px-3">
                <Card className="bg-black text-white p-8 space-y-6 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">
                      {testimonial.rating.toFixed(1)}
                    </span>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#DEFF4E] text-[#DEFF4E]"
                      />
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed">{testimonial.text}</p>

                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">
                        {testimonial.author.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.author.title}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full hover:bg-[#DEFF4E] hover:text-black transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full hover:bg-[#DEFF4E] hover:text-black transition-colors duration-300"
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
