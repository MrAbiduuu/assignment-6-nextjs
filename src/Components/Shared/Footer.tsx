import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#222630] ">
      <div className="container mx-auto flex justify-between px-5 py-8 text-sm text-zinc-500">
        <p className="flex items-center gap-2 text-white text-2xl">
          <Image src={logo} alt="FitLog Logo" className="h-6 w-6" />
          FitLog
        </p>

        <p className="font-semibold">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
