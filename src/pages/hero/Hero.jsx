import React from "react";
import { FaPlay } from "react-icons/fa6";

function Hero() {
  return (
    <>
      <div className="container mx-auto lg:px-20 md:px-3 px-2 flex items-center justify-between pt-10">
        <div>
          <h1 className="text-[52px] font-bold text-white w-xl leading-16 mb-10">
            <span className="text-[#F48C06]">Studying</span> Online is now much
            easier
          </h1>
          <p className="text-[16px] text-white w-xl mb-12">
            TOTC is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="flex items-center gap-11">
            <button>Join for free</button>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <FaPlay className="text-[#23BDEE]" />
              </div>
              Watch how it works
            </div>
          </div>
        </div>
        <div className="w-2xl h-[600px]">
          <img
            className="w-full h-full object-contain "
            src="imgs/hero.png"
            alt="hero_bg"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
