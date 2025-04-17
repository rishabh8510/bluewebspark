import { FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";

const partners = [
  {
    name: "Think Aisle",
    logo: "/src/assets/image 25.png",
  },
  {
    name: "Pinio",
    logo: "/src/assets/Group 5.png",
  },
  {
    name: "Nventurs",
    logo: "/src/assets/Frame 5.png",
  },
  {
    name: "Trucking Techs",
    logo: "/src/assets/Group 6.png",
  },
];

export default function AssociatePartners() {
  return (
    <div className="bg-[#0b0a14] text-white py-16 px-16 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="text-center mb-12 px-2">
      <span className="inline-block px-4 py-1 border border-[#3A4C6C] rounded-full text-xs tracking-widest bg-[#0D1B36]">
                    <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
                        Decade Strong
                    </span>
                </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">Bluewebspark</span>
         
          <span className="text-white">’s Associate Partners</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-3xl mx-auto">
          Proudly marking a decade of innovation, dedication, and success—thanks to our amazing team, clients, and partners who’ve fueled our journey from startup to standout.
        </p>
      </div>

      {/* Partner Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-[#120f23] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition duration-300 w-full"
          >
            {/* Logo container */}
            <div className="bg-white rounded-xl w-full aspect-[4/3] flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-[80%] object-contain"
              />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center items-center gap-4 text-lg text-white flex-wrap">
              <div className="bg-[#0b61d6] p-2 rounded-full hover:scale-105 transition cursor-pointer">
                <FaLinkedin />
              </div>
              <div className="bg-[#e1306c] p-2 rounded-full hover:scale-105 transition cursor-pointer">
                <FaInstagram />
              </div>
              <div className="bg-[#2e2eec] p-2 rounded-full hover:scale-105 transition cursor-pointer">
                <FaGlobe />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


