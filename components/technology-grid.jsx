"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";

const technologies = [
  {
    id: 1,
    name: "Webflow",
    description: "Lorem ipsum dolor sit amet",
    icon: "/image/miro.png",
    categories: ["WIREFRAMING", "USER INTERFACE"],
    color: "#FFF5C2",
  },
  {
    id: 2,
    name: "Zapier",
    description: "Lorem ipsum dolor sit amet",
    icon: "/image/smile.png",
    categories: ["USER EXPERIENC", "PROTOTYPING", "WIREFRAMING"],
    color: "#825277",
  },
  {
    id: 3,
    name: "Stripe",
    description: "Lorem ipsum dolor sit amet",
    icon: "/image/xd.png",
    categories: [
      "USER INTERFACE",
      "PROTOTYPING",
      "USER EXPERIENC",
      "WIREFRAMING",
    ],
    color: "#825277",
  },
  {
    id: 4,
    name: "Google Tag",
    description: "Lorem ipsum dolor sit amet",
    icon: "/image/sketch.png",
    categories: ["USER EXPERIENC", "WIREFRAMING"],
    color: "#F9D3B2",
  },
  {
    id: 5,
    name: "Lottie",
    description: "Lorem ipsum dolor sit amet",
    icon: "/image/miro.png",
    categories: ["PROTOTYPING", "USER INTERFACE", "WIREFRAMING"],
    color: "#FFF5C2",
  },
  {
    id: 6,
    name: "Calendly",
    description: "Lorem ipsum dolor sit amet",
    icon: "/image/miro.png",
    categories: ["USER EXPERIENC", "WIREFRAMING"],
    color: "#EEEEEE",
  },
  {
    id: 7,
    name: "Calendly",
    description: "Lorem ipsum dolor sit amet",
    icon: "/image/miro.png",
    categories: ["USER EXPERIENC", "WIREFRAMING"],
    color: "#EEEEEE",
  },
];
const categories = [
  "WIREFRAMING",
  "USER EXPERIENC",
  "USER INTERFACE",
  "PROTOTYPING",
];

export default function TechnologyGrid() {
  const [activeCategory, setActiveCategory] = useState("WIREFRAMING");

  const filteredTechnologies = technologies.filter((tech) =>
    tech.categories.includes(activeCategory)
  );

  return (
    <div className="p-[6rem] min-h-full bg-gradient-to-b from-transparent  via-[#657524] to-[#C9EB42] border border-none border-b rounded-b-[2rem]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 w-full lg:flex lg:flex-row justify-between items-center">
          <h1
            className="text-white
           text-4xl lg:text-5xl font-bold mb-6"
          >
            Technologies
          </h1>
          <div className="flex flex-wrap gap-2 ">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "secondary" : "outline"}
                className={`
                  ${
                    activeCategory === category
                      ? "bg-[#C5F82A] text-black hover:bg-[#C5F82A]/90 border-none"
                      : "bg-transparent text-white  border"
                  }
                  border border-white rounded-2xl
                `}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.id}
              className=" bg-gradient-to-r from-[#090909] via-[#181818] to-[#181818] h-[5rem] border rounded-md backdrop-blur-sm p-2 flex items-center gap-4"
            >
              <div
                className={`w-[4rem] h-[4rem] rounded-md  flex items-center justify-center`}
                style={{ backgroundColor: tech.color }}
              >
                <img
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold">
                  {tech.name}
                </h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
