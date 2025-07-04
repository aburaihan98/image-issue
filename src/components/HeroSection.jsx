import React from "react";

const HeroSection = () => {
  return (
    <div
      className=" relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2016/11/21/16/27/laptop-1846277_1280.jpg')",
      }}
    >
      <div className="absolute top-1/2 -translate-y-1/2 -right-5 bg-[#ffaa17] w-[400px] h-[400px] rounded-full"></div>
    </div>
  );
};

export default HeroSection;
