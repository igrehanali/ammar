"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
const AboutUsSection = () => {
  const router = useRouter();
  return (
    <div className=" relative z-[10] p-6 lg:pt-[5rem]  md:p-12">
      <div className=" max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="relative  p-[0.1rem] rounded-3xl border-none   bg-gradient-to-t from-transparent via-[#F6F6F6] to-[#BBBBBB]">
          <div className="rounded-3xl  bg-gradient-to-r from-[#090909] via-[#181818] to-[#181818]  p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-12 max-w-3xl leading-tight">
              DESCRIBE WHY YOUR COMPANY EXISTS [MISSION STATEMENT]
            </h1>
            <div className="text-sm text-zinc-400 max-w-2xl  ">
              Explain what your company is working on and the value you provide
              to your customers. Explain what your company is working on .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
