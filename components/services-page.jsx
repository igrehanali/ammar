"use client";
import React from "react";
import { Button } from "./ui/button";
import ArticleCards from "./article-cards";
import { useRouter } from "next/navigation";
const Servicespage = () => {
  const router = useRouter();
  return (
    <div className=" relative z-[10] p-6 lg:pt-[5rem]  md:p-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="relative  p-[0.1rem] rounded-3xl border-none   bg-gradient-to-t from-transparent via-[#F6F6F6] to-[#BBBBBB]">
          <div className="rounded-3xl bg-gradient-to-r from-[#090909] via-[#181818] to-[#181818]   p-8 md:p-12">
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

        {/* Content Section */}
        {/* <div className="grid md:grid-cols-2 gap-12 md:gap-24">
         
          <div className="space-y-6">
            {[
              "UI/UX Desigin",
              "Web Design",
              "Mobile App Design",
              "Branding",
              "Landing page Design",
            ].map((item, index) => (
              <div
                key={index}
                className="border-t-[0.1rem] border-black text-lg hover:text-[#D3F361] cursor-pointer transition-colors pt-5"
                onClick={() => router.push("/devservice")}
              >
                {item}
              </div>
            ))}
          </div>


          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">DESIGN SERVICES</h2>

            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>

            <p className="text-black">
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
              imperdiet augue. Vestibulum auctor ornare leo.
            </p>

            <p className="text-black">
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
              amet. Pellentesque commodo lacus at sodales sodales.
            </p>
            <Button className="bg-black text-white font-medium hover:bg-[#bfdf4d] hover:text-black rounded-full">
              get in touch
              <span>
                <div className="w-[5px] h-[5px] bg-white hover:bg-black rounded-full">
            
                </div>
              </span>
            </Button>
            <Button
              variant="ghost"
              className="bg-black text-[#D3F361] hover:text-[#bfdf4d] hover:bg-transparent p-0 flex items-center gap-2"
            >
              get in touch
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Servicespage;
