import { atom } from "jotai";
import type { ExerciseType, WorkoutDaysType } from "~/types/workoutTypes";

export const newWorkoutAtom = atom<ExerciseType>({
  name: "",
  weight: "",
  sets: "",
  reps: "",
  link: "",
});

export const workoutDaysAtom = atom<WorkoutDaysType>([]);
