"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Discover Products
            <br />
            With the Best Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Design as you know it is out the door. Design as you want it just
            arrived.
          </p>
        </div>
        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex flex-col  md:flex-row lg:flex-row p-2 bg-black rounded-[1rem] lg:rounded-full md:rounded-full">
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

        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers[selectedCategory].map((tier, index) => (
            <Card
              key={`${tier.name}-${index}`}
              className={cn(
                "relative bg-black text-white border-0 transition-all duration-300 transform",
                isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
              )}
            >
              <CardHeader className="space-y-2">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <Circle className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="text-sm text-gray-400">{tier.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-sm text-gray-400 ml-1">
                    {tier.period}
                  </span>
                </div>
                <Button
                  className={cn(
                    "w-full transition-colors duration-300",
                    tier.highlighted
                      ? "bg-[#DEFF4E] text-black hover:bg-[#DEFF4E]/90"
                      : "bg-white/10 hover:bg-white/20"
                  )}
                >
                  Get Started
                </Button>
                <div className="space-y-4">
                  <p className="text-sm font-medium">What you will get</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <Check className="w-4 h-4 text-gray-400" />
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
