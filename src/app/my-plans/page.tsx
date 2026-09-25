"use client";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkout } from "@/Types/type";
import Link from "next/link";
import React, { useContext } from "react";

const myPlansPage = () => {
  const { AddWorkouts, SavedWorkouts } = useContext(WorkoutContext);
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Todays Plan"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {AddWorkouts.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-2xl">Nothing Here yet.</p>
              <p className="text-gray-400">
                Browse the library and add a lift to get more moving
              </p>
              <Link href="/workouts" className="btn btn-primary">
                Go to Workouts
              </Link>
            </div>
          ) : (
            AddWorkouts.map((workout: IWorkout, index: number) => (
              <div
                key={index}
                className="mb-4 rounded-lg border border-white/10 bg-[#191c23] p-5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {workout.name}
                </h3>
              </div>
            ))
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {SavedWorkouts.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-2xl">Nothing Here yet.</p>
              <p className="text-gray-400">
                Your saved workouts will appear here
              </p>
              <Link href="/workouts" className="btn btn-primary">
                Go to Workouts
              </Link>
            </div>
          ) : (
            SavedWorkouts.map((workout: { name: string }, index: number) => (
              <div
                key={index}
                className="mb-4 rounded-lg border border-white/10 bg-[#191c23] p-5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {workout.name}
                </h3>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default myPlansPage;
