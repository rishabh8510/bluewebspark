const BackgroundImageSection = () => {
    return (
      <div
        className="relative h-screen w-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/s.png')", // Replace with actual image path
        }}
      >
        {/* Optional overlay for contrast */}
        <div className="absolute inset-0  bg-opacity-60" />
  
        {/* Foreground content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold text-center">
            Welcome to the Future
          </h1>
        </div>
      </div>
    );
  };
  
  export default BackgroundImageSection;
  