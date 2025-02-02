"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Check, Circle } from "lucide-react";
import { cn } from "../lib/utils";

const categories = ["Design", "Web development", "App development"];

const pricingTiers = {
  Design: [
    {
      name: "Basic",
      price: "Free",
      period: "",
      description: "Best for personal use.",
      features: [
        "Employee directory",
        "Task management",
        "Calendar integration",
        "File storage",
        "Communication tools",
        "Reporting and analytics",
      ],
    },
    {
      name: "Enterprise",
      price: "$200",
      period: "/ per month",
      description: "Best for personal use.",
      features: [
        "Employee directory",
        "Task management",
        "Calendar integration",
        "File storage",
        "Communication tools",
        "Reporting and analytics",
      ],
      highlighted: true,
    },
    {
      name: "Business",
      price: "$300",
      period: "/ per month",
      description: "Best for personal use.",
      features: [
        "Employee directory",
        "Task management",
        "Calendar integration",
        "File storage",
        "Communication tools",
        "Reporting and analytics",
      ],
    },
  ],
  "Web development": [
    {
      name: "Basic",
      price: "$99",
      period: "/ per month",
      description: "Best for personal use.",
      features: [
        "Employee directory",
        "Task management",
        "Calendar integration",
        "File storage",
        "Communication tools",
        "Reporting and analytics",
      ],
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/ per month",
      description: "Best for personal use.",
      features: [
        "Employee directory",
        "Task management",
        "Calendar integration",
        "File storage",
        "Communication tools",
        "Reporting and analytics",
      ],
      highlighted: true,
    },
    {
      name: "Business",
      price: "$499",
      period: "/ per month",
      description: "Best for personal use.",
      features: [
        "Employee directory",
        "Task management",
        "Calendar integration",
        "File storage",
        "Communication tools",
        "Reporting and analytics",
      ],
    },
  ],
  "App development": [
    {
      name: "Basic",
      price: "$199",
      period: "",
      description: "Best for personal use.",
      features: [
        "Employee directory",
        "Task management",
        "Calendar integration",
        "File storage",
        "Communication tools",
        "Reporting and analytics",
      ],
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/ per month",
      description: "Best for personal use.",
      features: [
        "Employee directory",
        "Task management",
        "Calendar integration",
        "File storage",
        "Communication tools",
        "Reporting and analytics",
      ],
      highlighted: true,
    },
    {
      name: "Business",
      price: "$599",
      period: "",
      description: "Best for personal use.",
      features: [
        "Employee directory",
        "Task management",
        "Calendar integration",
        "File storage",
        "Communication tools",
        "Reporting and analytics",
      ],
    },
  ],
};

export default function PricingSection() {
  const [selectedCategory, setSelectedCategory] = useState("Design");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCategoryChange = (category) => {
    if (category === selectedCategory) return;
    setIsAnimating(true);
    setSelectedCategory(category);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className=" relative space-y-12">
        <div className="absolute z-[0] w-[60%] h-[60%] rounded-full  top-[30%] left-[20%]  bottom-20 blur-[10rem]  bg-[#C9EB42] bg-opacity-50  " />
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl text-white font-bold tracking-tight">
            Discover Products
            <br />
            With the Best Pricing
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Design as you know it is out the door. Design as you want it just
            arrived.
          </p>
        </div>
        <div className=" relative z-[10] flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex flex-col  md:flex-row lg:flex-row p-2 border border-white bg-[#090909] rounded-[1rem] lg:rounded-full md:rounded-full">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className={cn(
                  "rounded-full px-4 py-2 text-xs sm:text-sm lg:text-base transition-colors duration-300",
                  selectedCategory === category
                    ? "bg-[#DEFF4E] text-black hover:bg-[#DEFF4E]/90 hover:text-black"
                    : "text-white"
                )}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        {/* <div className="flex justify-center">
          <div className="inline-flex p-1 lg:flex-row md:flex-row flex-col bg-black rounded-full">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className={cn(
                  "rounded-full px-6 transition-colors duration-300",
                  selectedCategory === category
                    ? "bg-[#DEFF4E] text-black hover:bg-[#DEFF4E]/90 hover:text-black"
                    : "text-white"
                )}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div> */}

        <div className="grid md:grid-cols-3 gap-1">
          {pricingTiers[selectedCategory].map((tier, index) => (
            <Card
              key={`${tier.name}-${index}`}
              className={cn(
                "relative w-[23rem] bg-gradient-to-r from-[#090909] via-[#181818] to-[#181818] text-white border-0 transition-all duration-300 transform hover:border-white hover:border",
                isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
              )}
            >
              <CardHeader className="space-y-2">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <Circle className="w-4 h-4" />
                </div>
                <h3 className="text-xl pt-5 font-semibold">{tier.name}</h3>
                <p className="text-sm text-gray-400">{tier.description}</p>
              </CardHeader>
              <CardContent className="space-y-6 pt-5 ">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-sm text-gray-400 ml-1">
                    {tier.period}
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <Button
                    className={cn(
                      "w-[19rem] h-[2.7rem]  transition-colors duration-300 rounded-full ",
                      tier.highlighted
                        ? "bg-[#DEFF4E] text-black hover:bg-[#DEFF4E]/90"
                        : "bg-white/10 hover:bg-white/20"
                    )}
                  >
                    Get Started
                  </Button>
                </div>
                <div className="space-y-4 pt-10 ">
                  <p className="text-lg font-medium">What you will get</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-lg text-gray-400"
                      >
                        <div className="w-5 h-5 border border-gray-400 rounded-full flex justify-center items-center  ">
                          <Check className="w-3.5 h-3.5 ] text-gray-400" />
                        </div>

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
