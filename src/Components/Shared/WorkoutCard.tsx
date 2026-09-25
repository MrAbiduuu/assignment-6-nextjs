import { IWorkout } from "@/Types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <div
      key={workout.id}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-[#222630] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {workout.difficulty}
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-black">
          ⭐ {workout.rating}
        </span>
      </div>
      <div className="p-5">
        <h2 className="mb-3 text-xl font-bold text-white">{workout.name}</h2>

        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
            ⏱️ {workout.duration} min
          </span>

          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
            🏋️ {workout.sets} sets
          </span>

          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
            🔁 {workout.reps} reps
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
            >
              {muscle}
            </span>
          ))}
        </div>
        <hr className="my-4 border-gray-600" />
        <div className="flex justify-center">
          <Link href={`/Workouts/${workout.id}`}>
            <button className="flex justify-center mt-5 btn-wide rounded-xl bg-black hover:bg-gray-700 text-white py-4 px-4 transition-colors duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
