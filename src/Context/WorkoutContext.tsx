"use client";

import React, { createContext, ReactNode, useState } from "react";

import { IWorkout } from "@/Types/type";

export const WorkoutContext = createContext({});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [AddWorkouts, setAddWorkouts] = useState<IWorkout[]>([]);
  const [SavedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);

  const sharedState = {
    AddWorkouts,
    setAddWorkouts,

    SavedWorkouts,
    setSavedWorkouts,
  };

  return (
    <WorkoutContext.Provider value={sharedState}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
