import React from "react";

const Border = () => {
  return (
    <div className="p-40">
      <div className="p-2 w-20 h-20 border rounded-full">
        <div className="w-20 h-20 rounded-full bg-amber-800"></div>
      </div>
      <div className="mt-20">
        <div className="p-2 w-24 h-24 border rounded-full flex justify-center items-center">
          <div className="w-20 h-20 rounded-full bg-amber-800"></div>
        </div>
      </div>
      <button className="relative mt-20 overflow-hidden px-6 py-3 font-semibold text-white bg-yellow-500 group rounded-md">
        <span className="relative z-10">Hover Me</span>
        <span className="absolute inset-0 bg-gray-900 translate-x-full group-hover:translate-x-0 group-hover:transition-transform group-hover:duration-500 transition-all duration-500 ease-in-out"></span>
      </button>

      <button className="relative mt-20 overflow-hidden px-6 py-3 font-semibold text-white bg-yellow-500 group rounded-md">
        <span className="relative z-10">Hover Me</span>
        <span className="absolute inset-0 bg-gray-900 translate-x-full group-hover:translate-x-0 group-hover:transition-transform group-hover:duration-500 transition-all duration-500 ease-in-out"></span>
      </button>
    </div>
  );
};

export default Border;
