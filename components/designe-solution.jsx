import { ArrowUpRight } from "lucide-react";
import { Button } from "../components/ui/button";

export default function DesignSolution() {
  return (
    <div className=" relative min-h-screen bg-black  bg-cover bg-center">
      <div className="absolute z-[0] w-[50%] h-[50%] rounded-full  top-[30%] left-[-50%]  bottom-20 blur-[20rem]  bg-[#C9EB42]   " />
      <div className="relative  z-[10] max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-16 md:mb-24 max-w-5xl mx-auto leading-tight">
          DESIGN SOLUTIONS THAT WORK WHERE YOU DO
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {[
            {
              title: "Brand Strategy",
              description:
                "Design as you know it is out the door. Design as you want it just arrived.",
              buttonCount: 2,
            },
            {
              title: "Visual Identity",
              description:
                "Transform your brand with distinctive visual elements that resonate and inspire.",
              buttonCount: 2,
            },
            {
              title: "Digital Design",
              description:
                "Create seamless digital experiences that engage and delight your audience.",
              buttonCount: 2,
            },
            {
              title: "UX Research",
              description:
                "Understand your users deeply and design solutions that meet their needs.",
              buttonCount: 1,
            },
            {
              title: "Development",
              description:
                "Bring your designs to life with cutting-edge development solutions.",
              buttonCount: 2,
            },
            {
              title: "Analytics",
              description:
                "Make data-driven decisions to optimize your design impact.",
              buttonCount: 2,
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`space-y-4 p-7 border-white ${
                i < 3 ? "border-b" : ""
              } ${(i + 1) % 3 !== 0 ? "border-r" : ""}`}
            >
              <div className="flex gap-2">
                {Array.from({ length: item.buttonCount }).map((_, j) => (
                  <Button
                    key={j}
                    size="icon"
                    variant="outline"
                    className="rounded-full w-12 h-12 bg-[#D1F16B] hover:bg-[#D1F16B]/90 border-0"
                  >
                    <ArrowUpRight className="h-5 w-5 text-black" />
                  </Button>
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-white">
                {item.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
