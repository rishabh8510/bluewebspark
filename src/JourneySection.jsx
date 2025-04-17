import React from "react";

export default function JourneySection() {
  return (
    <section className="bg-[#0b0a14] text-white py-16 px-4 md:px-10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block text-sm px-4 py-1 rounded-full mb-4 border border-[#3A4C6C] bg-[#0D1B36]">
          <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
            Journey Captured
          </span>
        </span>

        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          The Story Behind <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">Bluewebspark</span>
        </h2>
        <p className="text-sm md:text-base text-gray-300">
          Take a visual journey through 10 incredible years of growth, innovation, and milestones.
          Each moment captured reflects our passion, progress, and the people who made Bluewebspark what it is today.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Left Card */}
        <div className="relative rounded-lg overflow-hidden group shadow-lg w-full max-w-xl">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            alt="Team in 2015"
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/40 p-2">
            <h3 className="text-lg font-semibold mb-1">Where It All Began</h3>
            <p className="text-sm text-gray-300">
              Our humble beginning in 2015 — a vision, a small team, and big dreams.
              This is the moment that sparked the Bluewebspark journey.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative rounded-lg overflow-hidden group shadow-lg w-full max-w-xl">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            alt="Modern team"
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/40 p-2">
            <h3 className="text-lg font-semibold mb-1">How Far We’ve Come</h3>
            <p className="text-sm text-gray-300">
              From startup to success — now a thriving tech company with 10 years of innovation,
              trusted clients, and a growing team shaping the future of software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



// image: "/src/assets/Profile.avif",