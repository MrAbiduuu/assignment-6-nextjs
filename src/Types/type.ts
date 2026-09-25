export interface IWorkout {
  id: number;
  name: string;
  description: string;
  image: string;
  difficulty: string;
  rating: number;
  muscleGroups: string[];
  duration: number;
  caloriesBurned: number;
  sets: number;
  equipment: string;
  reps: number;
}
