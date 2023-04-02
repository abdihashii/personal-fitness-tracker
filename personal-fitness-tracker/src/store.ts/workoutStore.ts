import { atom } from "jotai";
import type {
  WorkoutDayType,
  WarmupType,
  WorkoutGroupType,
  ExerciseType,
  WorkoutDaysType,
} from "~/types/workoutTypes";

/*
  workoutDays: [
    workoutDay: {
      name: string,
      warmups: [],
      workouts: [],
    }
  ]
*/
export const workoutDaysAtom = atom<WorkoutDaysType>([]);
export const newWorkoutDayAtom = atom<WorkoutDayType>({
  name: "",
  warmups: [],
  workouts: [],
});

/*
  warmups: [
    {
      name: string,
      reps: string | number,
      link: string,
    },
  ]
*/
export const warmupsAtom = atom<WarmupType[]>([]);
export const newWarmupAtom = atom<WarmupType>({
  name: "",
  reps: "",
  link: "",
});

/*
  workouts: [
    workoutGroup: {
      name: string,
      exercises: [],
    }
  ]
*/
export const workoutGroupsAtom = atom<WorkoutGroupType[]>([]);
export const newWorkoutGroupAtom = atom<WorkoutGroupType>({
  name: "",
  exercises: [],
});

/*
  exercises: [
    {
      name: string,
      weight: string,
      sets: string | number,
      reps: string | number,
      link: string,
    },
  ]
*/
export const workoutsAtom = atom<ExerciseType[]>([]);
export const newWorkoutAtom = atom<ExerciseType>({
  name: "",
  weight: "",
  sets: "",
  reps: "",
  link: "",
});

/**  
    workoutDays: [
      workoutDay: {
        name: string,
        warmups: [
          {
            name: string,
            reps: string | number,
            link: string,
          },
        ],
        workouts: [
          workoutGroup: {
            name: string,
            exercises: [
              {
                name: string,
                sets: number,
                reps: string | number,
                link: string,
              },
            ],
          }
        ]
      }
   */
