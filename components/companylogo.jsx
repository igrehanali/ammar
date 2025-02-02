import Image from "next/image";
import { Card, CardContent } from "../components/ui/card";

export default function CompanySection() {
  return (
    <div className=" relative  bg-black text-white px-4 py-0 md:py-24 object-cover">
      <div className="absolute z-[0] w-[60%] h-[60%] rounded-full  top-[-10%] right-[-40%]  bottom-20 blur-[10rem]  bg-[#C9EB42] opacity-40 " />
      <div className=" relative z-[10] max-w-7xl mx-auto">
        <div className=" grid gap-16 md:grid-cols-2 items-center">
          {/* Founders Section */}
          <div className="space-y-6">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative w-20 h-20 rounded-full border-2 border-black overflow-hidden"
                >
                  <Image
                    src="/image/avatar1.png"
                    alt="Founder"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-medium tracking-tight">
              FOUNDERS
              <br />
              OF BLACK BIT
            </h2>
          </div>

          {/* Mission Statement */}
          <div className="text-4xl md:text-5xl lg:text-3xl font-medium leading-tight">
            Over the past 10 years, we've perfected our Design & Development
            game and are eager to help passionate Founders perfect theirs.
            Success is a team play, right? Let's aim for the top together!
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {[
            { number: "14+", label: "Years of Experience" },
            { number: "1,300", label: "Projects Completed" },
            { number: "100%", label: "Job Success on Upwork" },
            { number: "50+", label: "Covered Locations" },
          ].map((stat, i) => (
            <Card
              key={i}
              className="relative  p-[0.1rem] rounded-lg border-none   bg-gradient-to-t from-black via-[#F6F6F6] to-[#BBBBBB]"
            >
              <div className="  p-6  rounded-lg bg-gradient-to-r from-[#090909] via-[#181818] to-[#181818]">
                <div className="text-5xl text-white text-center font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white text-center text-lg">
                  {stat.label}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
