"use client";

import React, { createContext, ReactNode, useState } from "react";

export const WorkoutContext = createContext({});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [AddWorkouts, setAddWorkouts] = useState([]);
  const [SavedWorkouts, setSavedWorkouts] = useState([]);

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
