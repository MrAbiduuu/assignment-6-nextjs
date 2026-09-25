import WorkoutCard from "../Shared/WorkoutCard";
import { IWorkout } from "@/Types/type";

const getWorkouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const Workouts = async () => {
  const workouts = await getWorkouts();

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="mb-10">
        <span className="text-3xl font-bold">The Library</span> <br />{" "}
        <span className="text-xl text-gray-400">
          Twelve lifts covering every major muscle group.
        </span>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {workouts.map((workout: IWorkout) => {
          return <WorkoutCard key={workout.id} workout={workout} />;
        })}
      </div>
    </div>
  );
};

export default Workouts;
