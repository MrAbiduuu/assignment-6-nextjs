"use client";

import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkout } from "@/Types/type";
import React, { useContext } from "react";
import { HiOutlineSave } from "react-icons/hi";
import { Bounce, toast } from "react-toastify";

const SaveButton = ({ workout }: { workout: IWorkout }) => {
  const { SavedWorkouts, setSavedWorkouts } = useContext(WorkoutContext) as {
    SavedWorkouts: IWorkout[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  const isSaved = SavedWorkouts.some((item) => item.id === workout.id);

  const handleSavedWorkout = () => {
    if (isSaved) return;

    setSavedWorkouts((prev) => [...prev, workout]);

    toast.success("Saved Workout", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <button
      onClick={handleSavedWorkout}
      disabled={isSaved}
      className={`btn rounded-xl border px-6 font-semibold transition-all duration-300 ${
        isSaved
          ? "cursor-not-allowed border-white/10 bg-gray-600 text-gray-300"
          : "border-white/10 bg-black text-white hover:border-[#CCFF00]/40 hover:bg-[#111318]"
      }`}
    >
      <HiOutlineSave />

      {isSaved ? "Saved" : "Save for later"}
    </button>
  );
};

export default SaveButton;
