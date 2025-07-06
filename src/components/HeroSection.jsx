import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const HeroSection = () => {
  return (
    <>
      <div
        className=" relative w-full h-[500px] md:h-[527px] bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/11/21/16/27/laptop-1846277_1280.jpg')",
        }}
      >
        <div className="hidden md:block absolute md:top-10 md:right-[350px] lg:top-10 lg:right-1/4 z-50">
          <div className="p-2 w-28 h-28 border border-[#222429] rounded-full flex justify-center items-center">
            <div className="text-white flex justify-center items-center w-24 h-24  rounded-full bg-[#222429]">
              <PlayCircleOutlineIcon className="text-white" fontSize="large" />
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 md:-right-5 right-2.5 bg-[#ffaa17] mr-8 w-[350px] h-[400px] md:w-[500px] md:h-[500px] rounded-3xl md:rounded-full flex items-center px-16">
          <div className="w-full space-y-6 md:space-y-0 flex flex-col items-center md:block ">
            <div className="block md:hidden ">
              <div className="p-2 w-28 h-28 border border-[#222429] rounded-full flex justify-center items-center">
                <div className="flex justify-center items-center text-white z-50 w-24 h-24 rounded-full bg-[#222429] ">
                  <PlayCircleOutlineIcon fontSize="large" />
                </div>
              </div>
            </div>
            <h2 className="md:text-[34px] text-[24px] text-center font-bold leading-8 text-[#696b70] md:mb-2">
              Agency that gets <br className=" hidden md:block" /> excited about
            </h2>
            <p className=" text-xl underline underline-offset-6 cursor-pointer md:text-right">
              Read More
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
