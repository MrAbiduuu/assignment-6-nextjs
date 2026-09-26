"use client";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkout } from "@/Types/type";
import React, { useContext } from "react";
import { HiOutlineSave } from "react-icons/hi";
import { Bounce, toast } from "react-toastify";

const SaveButton = ({ workout }: { workout: IWorkout }) => {
  const { SavedWorkouts = [], setSavedWorkouts = () => {} } = useContext(
    WorkoutContext,
  ) as {
    SavedWorkouts: IWorkout[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  const handleSavedWorkout = () => {
    setSavedWorkouts([...SavedWorkouts, workout]);
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
      onClick={() => handleSavedWorkout()}
      className="btn rounded-xl border border-white/10 bg-black px-6 font-semibold text-white transition-all duration-300 hover:border-[#CCFF00]/40 hover:bg-[#111318]"
    >
      <HiOutlineSave />
      Save for later
    </button>
  );
};

export default SaveButton;
