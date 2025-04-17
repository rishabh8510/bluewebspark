import React from "react";

const HeroSection = () => {
  return (
    <main
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat pt-[160px]"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Main Content */}
      <div className="relative z-20 px-4 text-center flex flex-col items-center justify-center min-h-[calc(100vh-160px)] pb-10">
        {/* Badge */}
        <div className="bg-[#1A2C4E]/30 px-4 py-1.5 rounded-full text-[#0066FF] inline-block mb-4 md:mb-6 backdrop-blur-sm text-sm font-light border border-[#3A4C6C]">
          <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
            Technology that Moves Your Business Forward
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
          We Build Software<br />
          to Make Your Life &<br />
          Business Easy!
        </h1>

        {/* Description */}
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light px-2 sm:px-4">
          Bluewebspark Technologies: Pioneering IT Software, AI, and Business Solutions<br className="hidden sm:block" />
          Founded on Thursday, February 19, 2015.
        </p>
      </div>
    </main>
  );
};

export default HeroSection;
