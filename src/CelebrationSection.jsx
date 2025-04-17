import React from "react";

const CelebrationSection = () => {
  const images = [
    "src/assets/Img.png", // replace with your own hosted image if needed
    "src/assets/Img.png",
    "src/assets/Img.png",
    "src/assets/Img.png",
  ];

  return (
    <div className="bg-[#0b0a14] text-white py-10 px-4 md:px-20 min-h-screen">
      <div className="text-center space-y-4">
        <span className="inline-block px-4 py-1 border border-[#3A4C6C] rounded-full text-xs tracking-widest bg-[#0D1B36]">
          <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
            Decade Strong
          </span>
        </span>

        <h1 className="text-3xl md:text-5xl font-bold">
          Celebrating <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">10 Years</span> of Growth and Success!
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
          Proudly marking a decade of innovation, dedication, and success—thanks to our amazing team,
          clients, and partners who’ve fueled our journey from startup to standout.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {images.map((img, idx) => (
          <div key={idx} className="bg-[#141320] rounded-2xl p-4  shadow-lg">
            <img
              src={img}
              alt={`MR HAMIN ${idx + 1}`}
              className="rounded-xl mx-auto w-full h-auto"
            />
            <h3 className="text-lg font-semibold mt-4 tracking-wide">MR HAMIN</h3>
            <p className="text-sm text-gray-400 mt-1">GITEX DUBAI EXPO</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CelebrationSection;
