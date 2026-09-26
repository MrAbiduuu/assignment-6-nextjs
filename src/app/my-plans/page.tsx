"use client";

import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkout } from "@/Types/type";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

import { RxCross1 } from "react-icons/rx";
import { IoMdStar, IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const MyPlansPage = () => {
  const { AddWorkouts = [], SavedWorkouts = [] } = (useContext(
    WorkoutContext,
  ) ?? {}) as {
    AddWorkouts?: IWorkout[];
    SavedWorkouts?: IWorkout[];
  };

  const [activeTab, setActiveTab] = useState("today");

  const [todayWorkouts, setTodayWorkouts] = useState<IWorkout[]>(
    () => AddWorkouts,
  );

  const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>(
    () => SavedWorkouts,
  );

  const currentWorkouts = activeTab === "today" ? todayWorkouts : savedWorkouts;

  // Total minutes
  const totalMinutes = currentWorkouts.reduce(
    (total: number, workout: IWorkout) => total + workout.duration,
    0,
  );

  // Total calories
  const totalCalories = currentWorkouts.reduce(
    (total: number, workout: IWorkout) => total + workout.caloriesBurned,
    0,
  );

  // Mark as done
  const handleDone = (id: number, type: "today" | "saved") => {
    alert("Work done good job");

    if (type === "today") {
      setTodayWorkouts((prev) => prev.filter((workout) => workout.id !== id));
    } else {
      setSavedWorkouts((prev) => prev.filter((workout) => workout.id !== id));
    }
  };

  // Delete exercise
  const handleDelete = (id: number, type: "today" | "saved") => {
    alert("Exercise deleted");

    if (type === "today") {
      setTodayWorkouts((prev) => prev.filter((workout) => workout.id !== id));
    } else {
      setSavedWorkouts((prev) => prev.filter((workout) => workout.id !== id));
    }
  };

  return (
    <div className="container mx-auto px-5 py-10">
      {/* Header */}
      <div>
        <h1 className="mb-5 text-4xl font-bold text-white">My Plans</h1>

        <p className="text-gray-400">
          Cap of 5 lifts for today, Finish them, then load more.
        </p>
      </div>

      {/* Summary */}
      <div className="my-5 grid grid-cols-3 gap-5 rounded-xl border border-white/10 bg-[#191c23] p-5">
        {/* Exercises */}
        <div className="text-center">
          <p className="text-sm text-gray-400">Exercises</p>

          <p className="mt-1 text-2xl font-bold text-[#CCFF00]">
            {currentWorkouts.length}
          </p>
        </div>

        {/* Minutes */}
        <div className="border-x border-white/10 text-center">
          <p className="text-sm text-gray-400">Minutes</p>

          <p className="mt-1 flex items-center justify-center gap-2 text-2xl font-bold text-white">
            <IoMdTime />
            {totalMinutes}
          </p>
        </div>

        {/* Calories */}
        <div className="text-center">
          <p className="text-sm text-gray-400">Calories</p>

          <p className="mt-1 flex items-center justify-center gap-2 text-2xl font-bold text-white">
            <FaFire />
            {totalCalories}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-border">
        {/* ================= TODAY TAB ================= */}

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Today's Plan"
          checked={activeTab === "today"}
          onChange={() => setActiveTab("today")}
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {todayWorkouts.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-2xl">Nothing Here yet.</p>

              <p className="text-gray-400">
                Browse the library and add a lift to get more moving
              </p>

              <Link href="/" className="btn btn-primary">
                Go to Workouts
              </Link>
            </div>
          ) : (
            todayWorkouts.map((workout: IWorkout, index: number) => (
              <div
                key={workout.id ?? index}
                className="mb-4 flex items-center gap-5 rounded-2xl border border-white/10 bg-[#191c23] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-xl"
              >
                {/* Image */}
                <div className="shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    height={100}
                    width={100}
                    className="h-24 w-24 object-cover"
                  />
                </div>

                {/* Workout Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    {workout.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Equipment: {workout.equipment}
                  </p>

                  {/* Stats */}
                  <div className="mt-4 flex gap-6 text-sm">
                    {/* Duration */}
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>

                      <p className="flex items-center gap-1 font-medium text-white">
                        <IoMdTime />
                        {workout.duration} min
                      </p>
                    </div>

                    {/* Calories */}
                    <div>
                      <p className="text-xs text-gray-500">Calories</p>

                      <p className="flex items-center gap-1 font-medium text-white">
                        <FaFire />
                        {workout.caloriesBurned} kcal
                      </p>
                    </div>

                    {/* Rating */}
                    <div>
                      <p className="text-xs text-gray-500">Rating</p>

                      <p className="flex items-center gap-1 font-medium text-yellow-400">
                        <IoMdStar />
                        {workout.rating}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Link href={`/Workouts/${workout.id}`}>
                    <button className="rounded-lg border border-white/10 bg-[#242832] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#303540]">
                      View Details
                    </button>
                  </Link>

                  {/* Mark Done */}
                  <button
                    onClick={() => handleDone(workout.id, "today")}
                    className="flex items-center gap-1 rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-600"
                  >
                    <MdDone />
                    Mark As Done
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(workout.id, "today")}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-500/10 hover:text-red-400"
                  >
                    <RxCross1 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ================= SAVED TAB ================= */}

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Saved"
          checked={activeTab === "saved"}
          onChange={() => setActiveTab("saved")}
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {savedWorkouts.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-2xl">Nothing Here yet.</p>

              <p className="text-gray-400">
                Your saved workouts will appear here
              </p>

              <Link href="/" className="btn btn-primary">
                Go to Workouts
              </Link>
            </div>
          ) : (
            savedWorkouts.map((workout: IWorkout, index: number) => (
              <div
                key={workout.id ?? index}
                className="mb-4 flex items-center gap-5 rounded-2xl border border-white/10 bg-[#191c23] p-5 shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-xl"
              >
                {/* Image */}
                <div className="shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    height={100}
                    width={100}
                    className="h-24 w-24 object-cover"
                  />
                </div>

                {/* Workout Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    {workout.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Equipment: {workout.equipment}
                  </p>

                  {/* Stats */}
                  <div className="mt-4 flex gap-6 text-sm">
                    {/* Duration */}
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>

                      <p className="flex items-center gap-1 font-medium text-white">
                        <IoMdTime />
                        {workout.duration} min
                      </p>
                    </div>

                    {/* Calories */}
                    <div>
                      <p className="text-xs text-gray-500">Calories</p>

                      <p className="flex items-center gap-1 font-medium text-white">
                        <FaFire />
                        {workout.caloriesBurned} kcal
                      </p>
                    </div>

                    {/* Rating */}
                    <div>
                      <p className="text-xs text-gray-500">Rating</p>

                      <p className="flex items-center gap-1 font-medium text-yellow-400">
                        <IoMdStar />
                        {workout.rating}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Link href={`/Workouts/${workout.id}`}>
                    <button className="rounded-lg border border-white/10 bg-[#242832] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#303540]">
                      View Details
                    </button>
                  </Link>

                  {/* Mark Done */}
                  <button
                    onClick={() => handleDone(workout.id, "saved")}
                    className="flex items-center gap-1 rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-600"
                  >
                    <MdDone />
                    Mark As Done
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(workout.id, "saved")}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-500/10 hover:text-red-400"
                  >
                    <RxCross1 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlansPage;
