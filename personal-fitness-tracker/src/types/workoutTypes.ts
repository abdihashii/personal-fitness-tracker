export type WarmupType = {
  name: string;
  reps?: string;
  link: string;
};

export type WorkoutType = {
  name: string;
  weight?: string;
  sets: string;
  reps: string;
  link: string;
};

export type CoolDownType = {
  name: string;
  reps?: string;
  link: string;
};

export type WorkoutGroupType = {
  name: string;
  workouts: WorkoutType[];
};

export type WorkoutDayType = {
  name: string;
  warmups: WarmupType[];
  workouts: WorkoutGroupType[];
  cooldowns: CoolDownType[];
};

export type WorkoutDaysType = WorkoutDayType[];
