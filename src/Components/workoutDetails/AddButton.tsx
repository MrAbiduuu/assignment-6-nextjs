"use client";

import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkout } from "@/Types/type";
import React, { useContext } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const AddButton = ({ workout }: { workout: IWorkout }) => {
  const { AddWorkouts, setAddWorkouts } = useContext(WorkoutContext) as {
    AddWorkouts: IWorkout[];
    setAddWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  const isAdded = AddWorkouts.some((item) => item.id === workout.id);

  const handleWorkout = () => {
    if (isAdded) return;

    setAddWorkouts((prev) => [...prev, workout]);

    toast.success("Added Workout", {
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
      onClick={handleWorkout}
      disabled={isAdded}
      className={`btn mr-2 rounded-xl border-none px-6 font-bold shadow-lg ${
        isAdded
          ? "cursor-not-allowed bg-gray-500 text-gray-300"
          : "bg-[#CCFF00] text-black hover:bg-[#d9ff4d]"
      }`}
    >
      <MdAddCircleOutline />

      {isAdded ? "Added to Plan" : "Add to Today's Plan"}
    </button>
  );
};

export default AddButton;
