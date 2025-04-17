import React from 'react';

const industries = [
  { icon: 'src/icons/logistics.png', title: "logistics" },
  { icon: 'src/icons/jewellery.png', title: "Jewellery" },
  { icon: 'src/icons/budget.png', title: "Finance & Banking" },
  { icon: 'src/icons/dish.png', title: "FMCG" },
  { icon: 'src/icons/manufacturing.png', title: "Manufacture" },
  { icon: 'src/icons/house.png', title: "Real Estate" },
  { icon: 'src/icons/protection.png', title: "Healthcare" },
  { icon: 'src/icons/oil.png', title: "Oil & Gas" },
  { icon: 'src/icons/automobile.png', title: "Automotive" },
  { icon: 'src/icons/online-shop.png', title: "E-commerce & Retail" },
];

const IndustrySolutions = () => {
  return (
    <div className="bg-[#0b0a14] text-white py-16 px-6 text-center">
      <div className="mb-4">
        <span className="text-sm border border-[#3A4C6C] px-3 py-1 rounded-full bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
          Universal Solutions
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
        For <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">Every Industry</span> We have Solution
      </h2>
      <p className="max-w-2xl mx-auto text-gray-400 text-sm mb-10">
        We deliver tailored software solutions for every industry—enhancing productivity, streamlining operations, and driving growth with innovative, reliable, and scalable technology built to meet your unique business needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {industries.map((item, index) => (
          <div
            key={index}
            className="bg-[#0e0e1a] border border-gray-700 rounded-lg p-6 flex flex-col items-center hover:bg-blue-900 transition"
          >
            <div className="mb-4">
              <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain filter invert" />
            </div>
            <h3 className="text-white font-medium">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrySolutions;
