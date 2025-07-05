import React from "react";

const HeroSection = () => {
  return (
    <>
      <div
        className=" relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/11/21/16/27/laptop-1846277_1280.jpg')",
        }}
      >
        <div className="m-5 border border-white  hidden md:block z-50 w-20 h-20 absolute top-32 right-1/5 rounded-full bg-black"></div>
        <div className="absolute top-1/2 -translate-y-1/2 md:-right-5 right-2.5 bg-[#ffaa17] w-[400px] h-[400px] rounded-3xl md:rounded-full flex items-center px-16">
          <div className="w-full space-y-6 md:space-y-0 flex flex-col items-center md:block ">
            <div className="block md:hidden z-50 w-20 h-20 rounded-full bg-black "></div>
            <h2 className="text-xl font-bold text-white md:mb-2">
              Agency that gets <br /> excited about
            </h2>
            <p className="text-white underline underline-offset-6 cursor-pointer md:text-right">
              Read More
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
