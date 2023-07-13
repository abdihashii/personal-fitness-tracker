import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { Workout, Cooldown } from '../types/workoutTypes';

export const workoutAtom = atom<Workout | null>(null);

const cooldowns: Cooldown[] = [
  {
    id: 0,
    name: 'Calves',
    reps: '30 - 60 seconds',
    video: 'https://youtu.be/STcQYc60JKg',
  },
  {
    id: 1,
    name: 'Quads',
    reps: '30 - 60 seconds',
    video: 'https://youtu.be/PmwME4bDmRc',
  },
  {
    id: 2,
    name: 'IT Band',
    reps: '30 - 60 seconds',
    video: 'https://youtu.be/rK_ADaSZF84',
  },
  {
    id: 3,
    name: 'Sides and Back',
    reps: '30 - 60 seconds',
    video: 'https://youtu.be/sQUKd0OTWgM',
  },
];

export const workoutsAtom = atomWithStorage<Workout[]>('workouts', [
  {
    id: 0,
    day: 'Day 1',
    warmups: [
      {
        id: 0,
        name: 'Squat to Stand',
        sets: 1,
        reps: 10,
        video: 'https://youtu.be/nyhVQKfLKWE',
      },
      {
        id: 1,
        name: 'Climber + Rotation',
        sets: 1,
        reps: '5 per side',
        video: 'https://youtu.be/rNfo8M0dMTo',
      },
      {
        id: 2,
        name: 'Handcuffs',
        sets: 1,
        reps: 10,
        video: 'https://youtu.be/JUsnVN_CAXs',
      },
      {
        id: 3,
        name: 'Windshield Wipers',
        sets: 1,
        reps: '10 per side',
        video: 'https://youtu.be/h6AUC5JrZ3g',
      },
      {
        id: 4,
        name: 'Alternate 90/90',
        sets: 1,
        reps: '5 per side',
        video: 'https://youtu.be/I1JzHCaa1Ak',
      },
    ],
    exercises: [
      {
        id: 0,
        names: [
          {
            name: 'Goblet Squat',
            video: 'https://youtu.be/X5V33YTQBcY',
          },
          {
            name: 'Ball SHELC',
            video: 'https://youtu.be/fxRSCSmymXo',
          },
        ],
        sets: 3,
        reps: '8 - 10',
      },
      {
        id: 1,
        names: [
          {
            name: 'DB Bench Press',
            video: 'https://youtu.be/KpQ1TouRHNo',
          },
          {
            name: '1 Arm DB Row',
            video: 'https://youtu.be/-zXFfe2eMA0',
          },
        ],
        sets: 3,
        reps: '8 - 10',
      },
      {
        id: 2,
        names: [
          {
            name: 'Standing DB Curl',
            video: 'https://youtu.be/d_y_7V6eTu8',
          },
          {
            name: 'DB Overhead Tri Extension',
            video: 'https://youtu.be/D0omx6lUSpk',
          },
        ],
        sets: 3,
        reps: '8 - 10',
      },
      {
        id: 3,
        names: [
          {
            name: 'Front Plank',
            video: 'https://youtu.be/VSa4AUsyJ4A',
          },
          {
            name: 'Side Plank',
            video: 'https://youtu.be/Lz97M6mdIt8',
          },
        ],
        sets: 3,
        reps: '30 - 60 seconds',
      },
    ],
    cooldowns: cooldowns,
  },
  {
    id: 1,
    day: 'Day 2',
    warmups: [
      {
        id: 0,
        name: 'Atlas Lunge',
        sets: 1,
        reps: '5 per side',
        video: 'https://youtu.be/7KL3sidkwjg',
      },
      {
        id: 1,
        name: 'Yoga Plex + Cobra',
        sets: 1,
        reps: 10,
        video: 'https://youtu.be/EWwlcKfWMus',
      },
      {
        id: 2,
        name: 'Superman + Retraction',
        sets: 1,
        reps: 10,
        video: 'https://youtu.be/xPP4dRQ69sU',
      },
      {
        id: 3,
        name: 'Active Inner Leg',
        sets: 1,
        reps: '10 per side',
        video: 'https://youtu.be/HWYoKGRLjB0',
      },
      {
        id: 4,
        name: 'Triangle Bridge',
        sets: 1,
        reps: '10 per side',
        video: 'https://youtu.be/Vs2ivDsout8',
      },
    ],
    exercises: [
      {
        id: 0,
        names: [
          {
            name: 'DB Hip Hinge',
            video: 'https://youtu.be/Q60i-KPepdI',
          },
          {
            name: 'Bodyweight Lunge',
            video: 'https://youtu.be/NgwW8Wf_75Q',
          },
        ],
        sets: 3,
        reps: '8 - 10',
      },
      {
        id: 1,
        names: [
          {
            name: 'Standing DB Press',
            video: 'https://youtu.be/9J8vbaBX5S8',
          },
          {
            name: 'Band Pull Apart',
            video: 'https://youtu.be/r4Vee8cA7qE',
          },
        ],
        sets: 3,
        reps: '8 - 10',
      },
      {
        id: 2,
        names: [
          {
            name: 'Standing Hammer Curl',
            video: 'https://youtu.be/brg7e-1Fu1U',
          },
          {
            name: 'Lying Tricep Extension',
            video: 'https://youtu.be/5KRfE04LMkQ',
          },
        ],
        sets: 3,
        reps: '8 - 10',
      },
      {
        id: 3,
        names: [
          {
            name: 'Russian Twist',
            video: 'https://youtu.be/kIbk6CsyFE4',
          },
          {
            name: 'Leg Lift',
            video: 'https://youtu.be/w1VQYMQGwDI',
          },
        ],
        sets: 3,
        reps: '8 - 10',
      },
    ],
    cooldowns: cooldowns,
  },
  {
    id: 2,
    day: 'Day 3',
    warmups: [
      {
        id: 0,
        name: 'Arm Circles',
        sets: 1,
        reps: '10 each way',
        video: 'https://youtu.be/eqJaq8SJD6A',
      },
      {
        id: 1,
        name: 'Torso Twist',
        sets: 1,
        reps: '10 each way',
        video: 'https://youtu.be/eaWbfY4XUfk',
      },
      {
        id: 2,
        name: 'Cossack Lunge',
        sets: 1,
        reps: '10 per side',
        video: 'https://youtu.be/M7xrXZPgIqs',
      },
      {
        id: 3,
        name: 'Reach Thru',
        sets: 1,
        reps: '5 per side',
        video: 'https://youtu.be/cwKiM3Rq9p4',
      },
      {
        id: 4,
        name: 'Active Super Hip',
        sets: 1,
        reps: '10 per side',
        video: 'https://youtu.be/LHKvP_9GPGI',
      },
    ],
    exercises: [
      {
        id: 0,
        names: [
          {
            name: 'DB Chest Fly',
            video: 'https://youtu.be/j2qr9vt9NJE',
          },
          {
            name: 'DB Reverse Fly',
            video: 'https://youtu.be/WhiKC0IYnWY',
          },
        ],
        sets: 3,
        reps: '8 - 10',
      },
      {
        id: 1,
        names: [
          {
            name: 'Band Curl',
            video: 'https://youtu.be/59fLoQOoEKg',
          },
          {
            name: 'Band Pressdown',
            video: 'https://youtu.be/DnBxZwrMEYM',
          },
        ],
        sets: 3,
        reps: '8 - 10',
      },
      {
        id: 2,
        names: [
          {
            name: 'Calf Raises',
            video: 'https://youtu.be/lcPCkR8rWCE',
          },
          {
            name: 'Wall Tib Raise',
            video: 'https://youtu.be/J3TOKhRDSkc',
          },
        ],
        sets: 3,
        reps: '15 - 20',
      },
      {
        id: 3,
        sets: 3,
        reps: '8 - 10',
        names: [
          {
            name: 'Alternate V-Up',
            video: 'https://youtu.be/gBGbbRloq_o',
          },
          {
            name: 'DB Chop',
            video: 'https://youtu.be/0frcbsdlczM',
          },
        ],
      },
    ],
    cooldowns: cooldowns,
  },
]);
