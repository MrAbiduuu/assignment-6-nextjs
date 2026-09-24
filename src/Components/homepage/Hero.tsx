import React from "react";
import Image from "next/image";
import banner from "@/assets/banner.png";

const Hero = () => {
  return (
    <div className="container mx-auto flex justify-between my-16 p-16 md:p-20 bg-[#222630] rounded-lg">
      <div className="grid grid-rows-4 gap-4">
        <div className="text-xl font-bold text-[#C2F800]">Workout Library</div>
        <div className="text-5xl font-oswald font-bold text-white">
          Train with intent. Log <br /> every set.
        </div>
        <div className="text-[#9CA3AF] font-inter">
          FitLog is a dark, no-nonsense gym companion: pick a lift, <br /> lock
          it into todays plan, and watch the weeks work add <br /> up.
        </div>
        <div>
          <button className="btn btn-success bg-[#C2F800]">
            Browse Workouts
          </button>
        </div>
      </div>
      <div>
        <Image src={banner} alt="Hero Image" width={400} height={300} />
      </div>
    </div>
  );
};

export default Hero;
