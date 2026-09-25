import React from "react";
import Image from "next/image";
import banner from "@/assets/banner.png";

const Hero = () => {
  return (
    <div className="container mx-auto my-16 flex justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#222630] p-16 shadow-2xl shadow-black/30 md:p-20">
      <div className="grid grid-rows-4 gap-4">
        <div className="text-xl font-bold tracking-wide text-[#C2F800]">
          Workout Library
        </div>

        <div className="font-oswald text-5xl font-bold leading-tight text-white">
          Train with intent. Log <br />
          <span className="text-[#C2F800]">every set.</span>
        </div>

        <div className="font-inter leading-7 text-[#9CA3AF]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, <br />
          lock it into todays plan, and watch the weeks work add <br />
          up.
        </div>

        <div>
          <button className="btn rounded-xl border-none bg-[#C2F800] px-7 font-bold text-black shadow-lg shadow-[#C2F800]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8ff45] hover:shadow-xl hover:shadow-[#C2F800]/30">
            Browse Workouts
          </button>
        </div>
      </div>

      <div className="relative flex items-center">
        <div className="absolute right-10 h-72 w-72 rounded-full bg-[#C2F800]/10 blur-3xl" />

        <Image
          src={banner}
          alt="Hero Image"
          width={400}
          height={300}
          className="relative z-10 drop-shadow-2xl transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Hero;
