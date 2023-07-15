export type Warmup = {
  id: number | null;
  name: string;
  sets: number;
  reps: number | string;
  video?: string;
};

export type Exercise = {
  id: number | null;
  names: {
    name: string;
    video?: string;
  }[];
  sets: number;
  reps: number | string;
  videos?: string[];
};

export type Cooldown = {
  id: number | null;
  name: string;
  reps: number | string;
  video?: string;
};

export type Workout = {
  id: number | null;
  day: string;
  warmups: Warmup[];
  exercises: Exercise[];
  cooldowns: Cooldown[];
};
