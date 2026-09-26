"use client";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkout } from "@/Types/type";
import { useContext } from "react";

const Navbar = () => {
  const { AddWorkouts = [], SavedWorkouts = [] } = (useContext(
    WorkoutContext,
  ) ?? {}) as {
    AddWorkouts?: IWorkout[];
    SavedWorkouts?: IWorkout[];
  };
  return (
    <nav className="border-b border-zinc-800">
      <div className="container mx-auto flex h-20 items-center justify-between px-5">
        <Link href="/" className="text-2xl font-black flex gap-0">
          <Image src={logo} alt="Logo" className="h-10 w-10" />
          FITLOG
        </Link>

        <div className="hidden gap-8 md:flex">
          <Link href="/" className="text-zinc-400 hover:text-white">
            Workouts
          </Link>

          <Link href="/my-plans" className="text-zinc-400 hover:text-white">
            My Plan
          </Link>
        </div>
        <div className="flex gap-5">
          <Link href="/my-plans">
            Plan{"  "}
            <span className="rounded-2xl text-black bg-amber-200 px-2">
              {AddWorkouts.length}
            </span>
          </Link>
          <Link href="/my-plans">
            Saved{"  "}
            <span className="rounded-2xl text-white border border-white px-2">
              {SavedWorkouts.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
