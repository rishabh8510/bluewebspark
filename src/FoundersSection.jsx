import React from "react";

const FoundersSection = () => {
  return (
    <section className="w-full mt-10 md:mt-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12">
        {/* Left Content */}
        <div className="w-full ml-2 md:ml-4 text-white text-center md:text-left border-t border-b border-r border-[#4B5E7A] rounded-tr-lg rounded-br-lg p-6 md:p-8 md:flex md:flex-col md:justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Built by{" "}
            <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">
              Brothers
            </span>
            ,<br />
            Driven by Purpose
          </h2>
          <p className="text-gray-400 mt-4 md:mt-6 text-sm md:text-base">
            Manish & Shekhar, both brothers, started Bluewebspark Technologies
            with a vision To Deliver IT Solutions.
          </p>
        </div>

        {/* Right Cards */}
        <div className="w-full flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
          {/* Manish Card */}
          <div
            className="relative bg-cover bg-center rounded-xl aspect-square min-w-[160px] flex-1 max-w-[220px] overflow-hidden"
            style={{ backgroundImage: "url('/src/assets/Profile.avif')" }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-[#1A2C4E]/50 backdrop-blur-md p-3">
              <h3 className="text-white text-lg font-semibold">
                Manish Shukla
              </h3>
              <p className="text-white text-sm">Co-Founder & Director</p>
            </div>
          </div>

          {/* Shekhar Card */}
          <div
            className="relative bg-cover bg-center rounded-xl aspect-square min-w-[160px] flex-1 max-w-[220px] overflow-hidden"
            style={{ backgroundImage: "url('/src/assets/Profile.avif')" }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-[#1A2C4E]/50 backdrop-blur-md p-3">
              <h3 className="text-white text-lg font-semibold">
                Shekhar Shukla
              </h3>
              <p className="text-white text-sm">Co-Founder & Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
