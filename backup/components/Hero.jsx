import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-8 xl:p-20">
      <h1 className="font-inter  font-semibold   text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
        <p className="mb-3">Branding, Web</p>
        <p className="mb-3">& App Design</p>
        <p>And Development</p>
      </h1>
      <p className="mt-6 text-xl sm:text-2xl lg:text-[20px]  sm:max-w-xl lg:max-w-[32rem] font-normal">
        I help companies and startups craft compelling digital brand
        experiences, inspire people, and achieve ambitious goals through
        first-class design, animation, and expert web, app, and branding
        solutions.
      </p>
    </div>
  );
};

export default Hero;
