import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type {
  WorkoutDayType,
  WarmupType,
  WorkoutGroupType,
  WorkoutType,
  WorkoutDaysType,
  CoolDownType,
} from "~/types/workoutTypes";

/*
  workoutDays: [
    workoutDay: {
      name: string,
      warmups: [],
      workouts: [],
      cooldowns: [],
    }
  ]
*/
export const workoutDaysAtom = atomWithStorage<WorkoutDaysType>(
  "workoutDays",
  []
);
export const newWorkoutDayAtom = atom<WorkoutDayType>({
  name: "",
  warmups: [],
  workouts: [],
  cooldowns: [],
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
export const warmupsAtom = atomWithStorage<WarmupType[]>("warmups", []);
export const newWarmupAtom = atom<WarmupType>({
  name: "",
  reps: "",
  link: "",
});

/*
  workouts: [
    workoutGroup: {
      name: string,
      workouts: [],
    }
  ]
*/
export const workoutGroupsAtom = atomWithStorage<WorkoutGroupType[]>(
  "workoutGroups",
  []
);
export const newWorkoutGroupAtom = atom<WorkoutGroupType>({
  name: "",
  workouts: [],
});

/*
  workouts: [
    {
      name: string,
      weight: string,
      sets: string | number,
      reps: string | number,
      link: string,
    },
  ]
*/
export const workoutsAtom = atomWithStorage<WorkoutType[]>("workouts", []);
export const newWorkoutAtom = atom<WorkoutType>({
  name: "",
  weight: "",
  sets: "",
  reps: "",
  link: "",
});

/*
  cooldowns: [
    {
      name: string,
      reps: string | number,
      link: string,
    },
  ]
*/

export const cooldownsAtom = atomWithStorage<CoolDownType[]>("cooldowns", []);
export const newCooldownAtom = atom<CoolDownType>({
  name: "",
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
            workouts: [
              {
                name: string,
                sets: number,
                reps: string | number,
                link: string,
              },
            ],
          }
        ],
        cooldowns: [
          {
            name: string,
            reps: string | number,
            link: string,
          },
        ],
      }
   */
