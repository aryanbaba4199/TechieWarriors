import React from "react";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
        
      <div className="flex  justify-center items-center mt-16 ">
        
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-5xl text-slate-950">
            Bring Your Business Online{" "}
          </h1>
          <span className="font-bold text-3xl mt-4">
            With{" "}
            <span
              className="
            text-[#1974e9] 
            "
            >
              Alpha Tech Warriors{" "}
            </span>
            Services
          </span>
        </div>
      </div>
      <div className="mt-20 flex justify-center items-center px-4 text-lg">
        <div className=" ">
        <span  className="text-lg  text-black font-semibold text-transparent border-2 border-black px-4 py-2">Your Vision, Our Code </span>
        </div>
      </div>
      <div className="flex justify-end w-full mr-24 items-start">
            <span className="border-2 border-blue-800  font-semibold px-4 py-2 text-2xl rounded-md shadow-lg shadow-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-green-600 to-red-600 ">Starting Price : 3000/-</span>
        </div>
    </div>
  );
};

export default Intro;
