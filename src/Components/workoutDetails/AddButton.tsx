"use client";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkout } from "@/Types/type";
import React, { useContext } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { toast } from "react-toastify";

const AddButton = ({ workout }: { workout: IWorkout }) => {
  const { AddWorkouts, setAddWorkouts } = useContext(WorkoutContext);
  const handleWorkout = () => {
    setAddWorkouts([...AddWorkouts, workout]);
    toast.success(`${workout.name} has been added to your plan!`);
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
