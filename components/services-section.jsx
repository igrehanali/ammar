"use client";
import { Card, CardContent } from "../components/ui/card";
import { Layers, Palette, Monitor, Smartphone } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ServicesSection() {
  const router = useRouter();
  const services = [
    {
      title: "Branding",
      icon: Layers,
      description:
        "Design as you know it is out the door. Design as you want it just arrived.",
      onClick: "",
    },
    {
      title: "Design",
      icon: Palette,
      description:
        "Design as you know it is out the door. Design as you want it just arrived.",
      onClick: "",
    },
    {
      title: "Web Development",
      icon: Monitor,
      description:
        "Design as you know it is out the door. Design as you want it just arrived.",
      onClick: "/devservice",
    },
    {
      title: "App Development",
      icon: Smartphone,
      description:
        "Design as you know it is out the door. Design as you want it just arrived.",
      onClick: "/devservice",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-transparent  via-[#657524] to-[#C9EB42] border border-none border-b rounded-b-[2rem]">
      <div className="max-w-7xl text-white mx-auto px-4 py-12">
        <div className="space-y-6 ">
          <div className="space-y-4 lg:mb-[5rem] md:mb-[3rem] grid gap-16 md:grid-cols-2 items-center ">
            <h2 className="lg:text-7xl md:text-6xl text-5xl font-bold tracking-tight">
              Our
              <br />
              Services
            </h2>
            <p className="text-4xl md:text-5xl lg:text-3xl font-medium leading-tight">
              Over the past 10 years, we’ve perfected our Design & Development
              game and are eager to help
            </p>
          </div>

          <div className="grid lg:grid-cols-2 sm:grid-rows-2  gap-5 md:gap-6 ">
            {services.map((service, index) => (
              <div
                key={index}
                className=" p-[0.1rem] rounded-[1.7rem] bg-gradient-to-t from-[#BBBBBB] via-[#F6F6F6] to-[#F6F6F6]"
                onClick={() => router.push(service.onClick)}
              >
                <div className="bg-gradient-to-r from-[#090909] via-[#181818] to-[#181818] relative  rounded-[1.7rem]  lg:min-h-[14rem] md:h-[10rem] h-[10rem]  mx-auto hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:border-gray-100/10 hover:text-black  hover:scale-[1.02] hover:shadow-lg group">
                  <CardContent className=" md:p-6 lg:p-8 p-3">
                    <div className="flex lg:flex-row md:flex-row  flex-col items-start">
                      <div className="flex flex-row ">
                        <div className="lg:h-[3.5rem] lg:w-[3.5rem] md:h-[3rem] md:w-[3rem] h-[2.5rem] w-[2.5rem]  flex justify-center items-center p-2 bg-[#C9EB42] rounded-full transition-transform duration-300 group-hover:rotate-12">
                          <service.icon className="w-6 h-6 text-black" />
                        </div>
                        <div className="lg:ml-4 md:ml-3 ml-2 lg:h-[3.5rem] lg:w-[3.5rem] md:h-[3rem] md:w-[3rem] h-[2.5rem] w-[2.5rem]   flex justify-center items-center bg-[#C9EB42] rounded-full transition-transform duration-300 group-hover:rotate-12">
                          <svg
                            width="16"
                            height="16"
                            color="black"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transform rotate-45 transition-transform duration-300 group-hover:rotate-90"
                          >
                            <path
                              d="M3.33337 12.6667L12.6667 3.33333M12.6667 3.33333H3.33337M12.6667 3.33333V12.6667"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className=" lg:ml-4 md:ml-2 ml-0  mt-2 flex flex-col  items-start ">
                        <div>
                          <h3 className="lg:text-3xl md:text-3xl text-xl   font-semibold">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-white lg:text-xl text-0.10xl   lg:mt-4 sm:mt-1 lg:max-w-[20rem]  group-hover:text-black ">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
