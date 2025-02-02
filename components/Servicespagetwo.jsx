"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
const Servicespagetwo = () => {
  const router = useRouter();
  return (
    <div className="  p-6 lg:pt-[5rem]  md:p-12">
      <div className=" max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="relative  p-[0.1rem] rounded-3xl border-none   bg-gradient-to-t from-transparent via-[#F6F6F6] to-[#BBBBBB]">
          <div className="rounded-3xl  bg-gradient-to-r from-[#090909] via-[#181818] to-[#181818]  p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-12 max-w-md leading-tight">
              TOP-NOTCH DESIGN SERVICES
            </h1>
            <div className="w-full h-[0.1rem] bg-white mb-4"></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="space-y-2 flex flex-row">
                <div className="text-4xl text-white md:text-6xl font-medium">
                  60%
                </div>
                <div className="text-sm text-zinc-400 max-w-[200px] pl-5 ">
                  OF DESIGN-DRIVEN PRODUCT DEVELOPMENT
                </div>
              </div>

              <div className="lg:w-[0.1rem]  lg:h-[5rem] md:w-[0.1rem]   md:h-[5rem] w-full  h-[0.1rem] bg-white"></div>

              <div className="space-y-2 flex flex-row">
                <div className="text-4xl md:text-6xl text-white font-medium">
                  90%
                </div>
                <div className="text-sm text-zinc-400 max-w-[200px] pl-5">
                  OF DESIGN-DRIVEN PRODUCT DEVELOPMENT
                </div>
              </div>

              <Button className="bg-[#D3F361] text-black hover:bg-[#bfdf4d] rounded-full">
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicespagetwo;
