import React from "react";
import { FaApple, FaDribbble, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="flex flex-col justify-start items-center max-h-[calc(100vh_-_4rem)]">
      <h2 className="text-7xl font-semibold">The loud voice</h2>
      <h2 className="text-7xl font-semibold">of your brand</h2>
      <div className="relative">
        <div className="w-80 h-80 rounded-full mt-8 bg-[#181818] flex justify-center items-center">
          <img src="logo-icon-no-bg.png" className="w-40 h-40 translate-y-4" />
        </div>

        <FaDribbble className="absolute top-12 -left-32 w-20 h-20 p-4 bg-[#181818] text-white rounded-full"/>
        <FaLinkedin className="absolute top-0 right-0 w-20 h-20 p-2 text-black rotate-12"/>
        <FaApple className="absolute top-70 -left-20 w-20 h-20 p-4 bg-[#181818] text-white rounded-full"/>
      </div>
    </div>
  );
}
