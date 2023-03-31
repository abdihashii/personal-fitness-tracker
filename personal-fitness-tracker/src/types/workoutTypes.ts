export type WarmupType = {
  name: string;
  reps?: string | number;
  link: string;
};

export type ExerciseType = {
  name: string;
  weight?: number;
  sets: number;
  reps: string | number;
  link: string;
};

export type WorkoutGroupType = {
  name: string;
  exercises: ExerciseType[];
};

export type WorkoutDayType = {
  name: string;
  warmups: WarmupType[];
  workouts: WorkoutGroupType[];
};

export type WorkoutDaysType = WorkoutDayType[];
