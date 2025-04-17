import React from "react";

const teamMembers = new Array(10).fill({
  name: "John Doe",
  role: "UI/UX Designer",
  image: "/src/assets/Profile.avif",
});

const TeamShowcase = () => {
  return (
    <div className="bg-[#0b0a14] text-white py-16 px-4">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto text-center">
      <span className="inline-block text-sm px-4 py-1 rounded-full mb-4 border border-[#3A4C6C] bg-[#0D1B36]">
          <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
            Team Exellence
          </span>
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          Top Talent at <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">Bluewebspark</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm">
          Meet the brilliant minds driving innovation, excellence, and growth at
          Bluewebspark—our dedicated team of experts committed to delivering impactful
          solutions and exceeding client expectations every step of the way.
        </p>
      </div>

      <div className="relative overflow-hidden mt-12">
        <div
          className="flex gap-6 whitespace-nowrap"
          style={{
            animation: "marquee 40s linear infinite",
            width: "fit-content",
          }}
        >
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="min-w-[250px] sm:min-w-[280px] rounded-xl overflow-hidden shadow-md relative h-[350px] bg-cover bg-center"
              style={{ backgroundImage: `url(${member.image})` }}
            >
              {/* Overlay with blur and text */}
              <div className="relative z-10 h-full flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4">
                <div className="backdrop-blur-md bg-white/10 rounded-xl p-3">
                  <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-200 text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamShowcase;
