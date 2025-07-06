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
    </div>
  );
};

export default Border;
