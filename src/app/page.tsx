import Hero from "@/Components/homepage/Hero";
import Workouts from "@/Components/homepage/Workouts";

const getWorkouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Workouts />
    </div>
  );
}
