"use client";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkout } from "@/Types/type";
import React, { useContext } from "react";
import { HiOutlineSave } from "react-icons/hi";
import { toast } from "react-toastify";

const SaveButton = ({ workout }: { workout: IWorkout }) => {
  const { SavedWorkouts, setSavedWorkouts } = useContext(WorkoutContext);
  const handleSavedWorkout = () => {
    setSavedWorkouts([...SavedWorkouts, workout]);
    toast.success(`${workout.name} has been added to your saved workouts!`);
  };
  return (
    <button
      onClick={() => handleSavedWorkout()}
      className="btn rounded-xl border border-white/10 bg-black px-6 font-semibold text-white transition-all duration-300 hover:border-[#CCFF00]/40 hover:bg-[#111318]"
    >
      <HiOutlineSave />
      Save for later
    </button>
  );
};

export default SaveButton;
