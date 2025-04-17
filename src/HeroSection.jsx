import React from "react";

const HeroSection = () => {
  return (
    <>

      <main className=" container mx-auto px-4 mt-12 md:mt-24 text-center relative">
        {/* Background Effects */}
        <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-80 sm:h-80 bg-[#0066FF]/10 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/4 -right-20 w-72 h-72 sm:w-80 sm:h-80 bg-[#0066FF]/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Badge */}
        <div className="bg-[#1A2C4E]/30 px-4 py-1.5 rounded-full text-[#0066FF] inline-block mb-6 md:mb-8 backdrop-blur-sm text-sm font-light border border-[#3A4C6C]">
          <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
            Technology that Moves Your Business Forward
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
          We Build Software<br />
          to Make Your Life &<br />
          Business Easy!
        </h1>

        {/* Description */}
        <p className="text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg font-light px-4">
          Bluewebspark Technologies: Pioneering IT Software, AI, and Business Solutions Founded on Thursday, February 19, 2015.
        </p>
      </main>



    </>
  );
};

export default HeroSection;
