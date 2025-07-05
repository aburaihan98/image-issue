import React from "react";

const Landing = () => {
  return (
    <div className=" relative">
      {/* Top Statistics Bar */}
      <div
        className=" relative bg-cover h-[700px] bg-center text-white "
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2019/04/25/14/43/workplace-4155023_640.jpg')", // Replace with your actual background image
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0  bg-black/70"></div>
        {/* Number Content Area */}
        <div className=" relative z-50 py-20 lg:py-[157px]  grid grid-cols-1 gap-8 lg:flex justify-between divide-x divide-white text-center">
          {/* Stat 1 */}
          <div className="flex-1 px-6 mb-10 md:mb-0">
            <h3 className="text-5xl font-bold mb-2">99.99</h3>
            <p className="text-lg uppercase tracking-wider">
              Accurate Scheduled Campaign
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex-1 px-6 mb-10 md:mb-0">
            <h3 className="text-5xl font-bold mb-2">79</h3>
            <p className="text-lg uppercase tracking-wider">
              Of Traffic Increased
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex-1 px-6 mb-10 md:mb-0">
            <h3 className="text-5xl font-bold mb-2">86</h3>
            <p className="text-lg uppercase tracking-wider">Retention Rate</p>
          </div>

          {/* Stat 4 */}
          <div className="flex-1 px-6 ">
            <h3 className="text-5xl font-bold mb-2">100</h3>
            <p className="text-lg uppercase tracking-wider">Happy Clients</p>
          </div>
        </div>
        {/* Main Content Area */}
        <div className="relative z-50 container mx-auto px-4 pb-12 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Section: Orange Box and Core Features */}
          <div className="flex flex-col space-y-8">
            {/* Orange Box with angled top-left corner */}
            <div className="relative bg-[#ffaa17] p-8 md:p-12 text-white font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight rounded-lg shadow-lg">
              {/* Pseudo-element for the angle (custom CSS needed or a more complex Tailwind shape) */}
              {/* For simplicity with Tailwind only, we'll approximate with border tricks if pure Tailwind */}
              {/* A more precise angle might require a separate div with rotate or clip-path */}
              <h2 className="z-10">
                WE PROMISE HIGH- <br className="md:hidden" /> END PROJECTS FOR{" "}
                <br /> ANY PURPOSE
              </h2>
              {/* This is a simple triangle; for a more complex cut, consider SVG or more advanced CSS */}
              {/* <div className="absolute bottom-0 left-0 w-0 h-0 border-t-[30px] border-l-[30px] border-t-[#ffaa17] border-l-transparent -translate-x-full"></div> */}
              {/* To cover the corner of the rounded box */}
              <div className="absolute rotate-180 -bottom-5 left-0 w-0 h-0 border-b-[30px] border-l-[30px] border-b-[#ffaa17] border-l-transparent"></div>
            </div>

            {/* Core Features */}
            <div className="space-y-6 pt-4">
              {/* Feature 1 */}
              <div className="flex items-start pb-4 border-b border-gray-200">
                <span className="text-xl md:text-2xl font-bold text-[#ffaa17] mr-4">
                  01
                </span>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-1">
                    In-depth understanding of your criteria
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    CORE FEATURES
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex items-start pb-4 border-b border-gray-200">
                <span className="text-xl md:text-2xl font-bold text-[#ffaa17] mr-4">
                  02
                </span>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-1">
                    On Time delivery, in your budget
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    CORE FEATURES
                  </p>
                </div>
              </div>
              {/* Add more features as needed following this pattern */}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              WE HELP YOU GROW <br /> YOUR OWN WAY
              <span className="text-[#ffaa17]">.</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-8">
              All business starts with small steps. As an online digital
              marketing agency, we assist with powerful tools to take you step
              ahead. No matter where you are, we always have your back to push
              forward.
            </p>
            <div className="mb-8">
              <img
                src="https://cdn.pixabay.com/photo/2019/04/25/14/43/workplace-4155023_640.jpg" // Replace with your MOU Signing Ceremony image
                alt="MOU Signing Ceremony"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-3">
              {/* Checklist items */}
              <div className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-[#ffaa17] mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Build a business from scratch</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-[#ffaa17] mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Launch your business.</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-[#ffaa17] mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Grow your business.</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-[#ffaa17] mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Create a brand image of your business.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
