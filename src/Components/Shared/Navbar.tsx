"use client";

import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkout } from "@/Types/type";

import { useContext } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const { AddWorkouts = [], SavedWorkouts = [] } = (useContext(
    WorkoutContext,
  ) ?? {}) as {
    AddWorkouts?: IWorkout[];
    SavedWorkouts?: IWorkout[];
  };

  const isWorkoutPage = pathname === "/";
  const isMyPlanPage = pathname === "/my-plans";

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-[#111318]">
      <div className="container mx-auto flex h-20 items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0 text-2xl font-black">
          <Image src={logo} alt="Logo" className="h-10 w-10" />
          FITLOG
        </Link>

        {/* Navigation */}
        <div className="hidden gap-3 md:flex">
          <Link
            href="/"
            className={`rounded-lg px-4 py-2 font-medium transition-all duration-300 ${
              isWorkoutPage
                ? "bg-[#CCFF00] text-black"
                : "bg-transparent text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plans"
            className={`rounded-lg px-4 py-2 font-medium transition-all duration-300 ${
              isMyPlanPage
                ? "bg-[#CCFF00] text-black"
                : "bg-transparent text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            My Plans
          </Link>
        </div>

        {/* Plan & Saved */}
        <div className="flex items-center gap-5">
          <Link href="/my-plans" className="transition hover:text-[#CCFF00]">
            Plan{" "}
            <span className="rounded-2xl bg-[#CCFF00] px-2 text-black">
              {AddWorkouts.length}
            </span>
          </Link>

          <Link href="/my-plans" className="transition hover:text-[#CCFF00]">
            Saved{" "}
            <span className="rounded-2xl border border-white px-2 text-white">
              {SavedWorkouts.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
