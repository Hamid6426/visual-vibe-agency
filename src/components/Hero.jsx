import React, { useEffect, useState } from "react";
import { FaApple, FaDribbble, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  const [rotateLogo, setRotateLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotateLogo(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-start items-center max-h-[calc(100vh_-_4rem)] ">
      <h2 className="text-4xl sm:text-6xl font-semibold">The loud voice</h2>
      <h2 className="text-4xl sm:text-6xl font-semibold">of your brand</h2>

      <div className="relative">
        <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-full mt-8 bg-[#181818] flex justify-center items-center">
          <img
            src="logo-icon-no-bg.png"
            className={`w-32 h-32 sm:w-40 sm:h-40 translate-y-4 ${rotateLogo ? "rotate-once" : ""}`}
            alt="Logo"
          />
        </div>

        <FaDribbble className="hidden sm:block absolute top-12 -left-32 w-20 h-20 p-4 bg-[#181818] text-white rounded-full"/>
        <FaLinkedin className="hidden sm:block absolute top-0 right-0 w-20 h-20 p-2 text-black rotate-12"/>
        <FaApple className="hidden sm:block absolute top-70 -left-20 w-20 h-20 p-4 bg-[#181818] text-white rounded-full"/>
      </div>
    </div>
  );
}
