import AddButton from "@/Components/workoutDetails/AddButton";
import SaveButton from "@/Components/workoutDetails/SaveButton";
import { IWorkout } from "@/Types/type";
import Image from "next/image";
import React from "react";

interface WorkoutDetailsPage {
  params: Promise<{
    id: string;
  }>;
}

const getWorkouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const WorkDetailsPage = async ({ params }: WorkoutDetailsPage) => {
  const { id } = await params;
  const workouts = await getWorkouts();
  const workout = workouts.find(
    (workout: IWorkout) => String(workout.id) === String(id),
  );

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="card card-side overflow-hidden rounded-3xl border border-white/10 bg-[#222630] shadow-2xl shadow-black/30">
        <figure className="relative overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            width={500}
            height={300}
            className="h-full min-h-150 w-125 object-cover transition-transform duration-500 hover:scale-105"
          />
        </figure>

        <div className="card-body p-8">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-[#CCFF00]">
              Workout Details
            </p>

            <h2 className="card-title text-4xl font-extrabold leading-tight text-white">
              {workout.name}
            </h2>
          </div>

          <div>
            <p className="mt-3 max-w-2xl text-base leading-7 text-gray-400">
              {workout.description}
            </p>
          </div>

          <div className="mt-2">
            {workout.muscleGroups.map((muscle: string, index: number) => (
              <span
                key={index}
                className="mr-2 inline-flex rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10 px-4 py-1.5 text-sm font-semibold text-[#CCFF00] transition hover:bg-[#CCFF00] hover:text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-[#191c23] p-5">
            <div className="flex justify-between border-b border-white/10 py-3 text-gray-400">
              Equipment
              <span className="font-semibold text-white">
                {workout.equipment}
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 py-3 text-gray-400">
              Difficulty
              <span className="font-semibold text-[#CCFF00]">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 py-3 text-gray-400">
              Sets
              <span className="font-semibold text-white">{workout.sets}</span>
            </div>

            <div className="flex justify-between border-b border-white/10 py-3 text-gray-400">
              Reps
              <span className="font-semibold text-white">{workout.reps}</span>
            </div>

            <div className="flex justify-between border-b border-white/10 py-3 text-gray-400">
              Duration
              <span className="font-semibold text-white">
                {workout.duration} min
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 py-3 text-gray-400">
              Calories
              <span className="font-semibold text-white">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex justify-between py-3 text-gray-400">
              Rating
              <span className="font-semibold text-yellow-400">
                ★ {workout.rating}
              </span>
            </div>
          </div>

          <div>
            <h1 className="mt-5 text-2xl font-bold text-white">Instructions</h1>

            <div className="mt-3 space-y-3">
              {workout.instructions.map(
                (instruction: string, index: number) => (
                  <p
                    key={index}
                    className="rounded-xl border border-white/5 bg-[#191c23] px-4 py-3 text-sm leading-6 text-gray-300 transition hover:border-[#CCFF00]/30 hover:text-white"
                  >
                    <span className="mr-2 font-bold text-[#CCFF00]">
                      {index + 1}.
                    </span>
                    {instruction}
                  </p>
                ),
              )}
            </div>
          </div>

          <div className="mt-4">
            <AddButton workout={workout} />

            <SaveButton workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailsPage;
