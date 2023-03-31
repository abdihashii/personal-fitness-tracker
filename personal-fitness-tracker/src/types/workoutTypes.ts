export type WarmupType = {
  name: string;
  reps?: string;
  link: string;
};

export type ExerciseType = {
  name: string;
  weight?: string;
  sets: string;
  reps: string;
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
