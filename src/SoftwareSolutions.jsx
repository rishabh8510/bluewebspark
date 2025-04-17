const SoftwareSolutions = () => {
  const solutions = [
    {
      title: "Transport & Logistic Management Software",
      description: "Streamline Operations, Optimize Deliveries, and Drive Efficiency",
    },
    {
      title: "Inventory POS Solution",
      description: "Streamline Operations, Optimize Deliveries, and Drive Efficiency",
    },
    {
      title: "Ecommerce Solution",
      description: "Streamline Operations, Optimize Deliveries, and Drive Efficiency",
    },
    {
      title: "Warehouse Management Software",
      description: "Streamline Operations, Optimize Deliveries, and Drive Efficiency",
    },
    {
      title: "EdTech Solution & School Management Software",
      description: "Streamline Operations, Optimize Deliveries, and Drive Efficiency",
    },
  ];

  return (
    <section className=" mt-12 md:mt-24 px-4 sm:px-6 lg:px-8 ">
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12">
        <span className="inline-block px-4 py-1 border border-[#3A4C6C] rounded-full text-xs tracking-widest bg-[#0D1B36]">
          <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
            Effortless Tech
          </span>
        </span>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">Software</span> Solution
        </h2>
        <p className="mt-3 md:mt-4 text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm">
          Empowering businesses with innovative, scalable, and user-friendly software solutions designed to streamline
          operations, boost productivity, and drive digital transformation across various industries and operations.
        </p>
      </div>

      {/* Solutions List */}
      <div className="space-y-3 sm:space-y-4 flex flex-col items-center">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="w-full max-w-4xl lg:max-w-7xl p-3 sm:p-4 md:p-6 border-grey-800 rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-[#1F2235]"
          >
            <div className="flex flex-row justify-between items-center gap-4 flex-wrap">
              {/* Image + Text */}
              <div className="flex items-center gap-3 flex-1 min-w-[250px]">
                <img
                  src="/src/assets/image.png"
                  alt="software"
                  className="rounded-md w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 text-white">
                    {solution.title}
                  </h3>
                  <p className="text-xs text-white">{solution.description}</p>
                </div>
              </div>

              {/* Button */}
              <button className="px-4 py-1.5 sm:px-5 sm:py-2 border border-blue-500 text-blue-500 text-xs sm:text-sm rounded mt-3 sm:mt-0 hover:bg-blue-500 hover:text-white transition">
                View
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftwareSolutions;
