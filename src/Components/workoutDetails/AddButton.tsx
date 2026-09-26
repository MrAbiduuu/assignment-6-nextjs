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

  const handleWorkout = () => {
    setAddWorkouts([...AddWorkouts, workout]);
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
      onClick={() => handleWorkout()}
      className="btn mr-2 rounded-xl border-none bg-[#CCFF00] px-6 font-bold text-black shadow-lg hover:bg-[#d9ff4d]"
    >
      <MdAddCircleOutline />
      Add to todays Plan
    </button>
  );
};

export default AddButton;
