import WorkoutCard from "../Shared/WorkoutCard";
import { IWorkout } from "@/Types/type";

const getWorkouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const Workouts = async () => {
  const workouts = await getWorkouts();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 container mx-auto px-5 py-10">
      {workouts.map((workout: IWorkout) => {
        return <WorkoutCard key={workout.id} workout={workout} />;
      })}
    </div>
  );
};

export default Workouts;
