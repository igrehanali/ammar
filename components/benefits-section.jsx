import { Users2, Infinity } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";
export default function BenefitsSection() {
  return (
    <section className="py-12 px-4 md:px-6 bg-gradient-to-b from-transparent  via-[#657524] to-[#C9EB42] border border-none border-b rounded-b-[2rem]">
      <div className="max-w-7xl mx-auto space-y-6 ">
        <div className="space-y-4 lg:mb-[5rem] md:mb-[3rem] grid gap-16 md:grid-cols-2 items-center ">
          <h2 className="lg:text-7xl text-white  md:text-6xl text-5xl font-bold tracking-tight">
            Our
            <br />
            BENEFITS
          </h2>
          <p className="text-4xl text-white md:text-5xl lg:text-3xl font-medium leading-tight">
            Over the past 10 years, we’ve perfected our Design & Development
            game and are eager to help
          </p>
        </div>

        <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-4">
          <div className="  border bg-white  rounded-[1rem]">
            <div className="p-6 ">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold pb-[1.6rem]">$530M</h3>

                <p className="text-xl font-medium pt-[1rem] text-black ">
                  Our team consists of skilled developers and designers who
                  create immersive and pleasant experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="border  bg-transparent  border-white rounded-[1rem]">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <h4 className="font-semibold text-white  text-5xl">$530M</h4>
                <div className="w-15 h-[0.1rem]  bg-white rounded-md " />
                <h4 className="font-semibold text-white  text-2xl">
                  Affordable and Reliable
                </h4>
                <p className="text-sm text-white   ">
                  With 14+ years of experience, I deliver top-notch solutions
                  using the latest technologies, ensuring modern, scalable, and
                  efficient results.
                </p>
              </div>
            </CardContent>
          </div>

          <div className="border  bg-transparent  border-white rounded-[1rem]">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <h4 className="font-semibold text-white  text-5xl">100+</h4>
                <div className="w-15 h-[0.1rem]  bg-white rounded-md " />
                <h4 className="font-semibold text-white  text-2xl">
                  Seamless User Experience
                </h4>
                <p className="text-sm text-white  ">
                  My focus on UI/UX ensures your projects have intuitive designs
                  that engage users and enhance customer satisfaction.
                </p>
              </div>
            </CardContent>
          </div>

          <div className="border  bg-transparent  border-white rounded-[1rem]">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <img
                  src="/image/I.png"
                  fill
                  className="object-cover  pb-[2rem]"
                  width={64}
                  height={64}
                />
                <div className="w-15 h-[0.1rem]  bg-white rounded-md " />
                <h4 className="font-semibold text-white  text-2xl">
                  Affordable and Reliable
                </h4>
                <p className="text-sm text-white  pt-[1rem]">
                  As a freelancer, I offer cost-effective services with a
                  commitment to timely delivery, ensuring quality without
                  breaking your budget.
                </p>
              </div>
            </CardContent>
          </div>
        </div>
      </div>
    </section>
  );
}
