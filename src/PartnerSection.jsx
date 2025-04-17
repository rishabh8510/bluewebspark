import React from 'react';


const PartnerSection = () => {
  return (
    <div className="bg-[#0A0614] text-white font-sans px-4 sm:px-8 md:px-16 py-8 sm:py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#021226] via-[#0066FF] to-[#021226] rounded-xl p-6 sm:p-8 md:p-12 max-w-7xl mx-auto text-center shadow-lg">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4">
          10 Years. $1M+ in Projects. One Trusted Team.
        </h2>
        <p className="text-xs sm:text-sm md:text-base  mx-auto">
          We have a proven track record of delivering over 10 high-impact software solutions to prominent clients across top industries,
          including Logistics, Real Estate, FMCG, Jewelry, and more, each valued at nearly $50K - $100K, over the past 10 years.
          This demonstrates our expertise in managing and executing large-scale projects with exceptional results.
        </p>
        <button className="mt-4 sm:mt-6 bg-white text-blue-600 font-semibold px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-md hover:bg-blue-100 transition text-sm sm:text-base">
          Let's Discuss the Project
        </button>
      </div>

      {/* Partner Section */}
      <div className="mt-12 sm:mt-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 sm:gap-10">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-between bg-transparent">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">
              OUR <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">Partner</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mb-6 sm:mb-8">
              Empowering businesses through strategic partnerships with leading platforms like ZOHO, Shopify, ERPNext, and ODOO —
              delivering integrated, scalable, and efficient software solutions tailored to your industry needs.
            </p>
            {/* Feature Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-[#120E1E] px-4 sm:px-6 py-2 sm:py-3 rounded-md flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-purple-400"><img src='src/assets/p90 1.png'/></span>
                <span><strong>ZOHO</strong> – Smarter Business</span>
              </div>
              <div className="bg-[#120E1E] px-4 sm:px-6 py-2 sm:py-3 rounded-md flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-purple-400"><img src='src/assets/p90 1.png'/></span>
                <span><strong>Shopify</strong> – Sell Seamlessly</span>
              </div>
              <div className="bg-[#120E1E] px-4 sm:px-6 py-2 sm:py-3 rounded-md flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-purple-400"><img src='src/assets/p90 1.png'/></span>
                <span><strong>ERP Next</strong> – Process Perfected</span>
              </div>
              <div className="bg-[#120E1E] px-4 sm:px-6 py-2 sm:py-3 rounded-md flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-purple-400"><img src='src/assets/p90 1.png'/></span>
                <span><strong>ODOO</strong> – Operate Smarter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Logo Grid */}
        <div className="flex-1 mt-6 sm:mt-0">
          <div className="bg-[#120E1E] h-full rounded-xl p-4 sm:p-6 md:p-8 flex flex-col justify-center gap-4 sm:gap-6 items-center">
            {/* Logo Grid - Responsive */}
            <div className="w-full grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Top Row */}
              <div className="flex justify-center">
                <img 
                  src="src/assets/image 1.png" 
                  alt="ZOHO" 
                  className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] h-auto object-contain"
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="src/assets/image 5.1.png" 
                  alt="Shopify" 
                  className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] h-auto object-contain"
                />
              </div>
              
              {/* Bottom Row */}
              <div className="flex justify-center">
                <img 
                  src="src/assets/image 6.png" 
                  alt="ERPNext" 
                  className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] h-auto object-contain"
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="src/assets/image 2.png" 
                  alt="Odoo" 
                  className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;