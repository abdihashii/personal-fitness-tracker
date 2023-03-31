import { type NextPage } from "next";
import Head from "next/head";
import type {
  WorkoutDayType,
  WorkoutDaysType,
  WarmupType,
  ExerciseType,
  WorkoutGroupType,
} from "~/types/workoutTypes";

const Home: NextPage = () => {
  const workoutDays: WorkoutDaysType = [
    {
      name: "Workout A",
      warmups: [
        {
          name: "Squat to stand",
          reps: 10,
          link: "https://youtu.be/nyhVQKfLKWE",
        },
        {
          name: "Climber + Rotation",
          sets: 1,
          reps: "5 each side",
          link: "https://youtu.be/rNfo8M0dMTo",
        },
        {
          name: "Handcuffs",
          sets: 1,
          reps: 10,
          link: "https://youtu.be/JUsnVN_CAXs",
        },
        {
          name: "Windshield Wiper",
          sets: 1,
          reps: "10 each side",
          link: "https://youtu.be/h6AUC5JrZ3g",
        },
        {
          name: "Alternate 90/90",
          sets: 1,
          reps: "5 each side",
          link: "https://youtu.be/I1JzHCaa1Ak",
        },
      ],
      workouts: [
        {
          name: "Legs",
          exercises: [
            {
              name: "Goblet Squat",
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/X5V33YTQBcY",
            },
            {
              name: "Ball SHELC",
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/fxRSCSmymXo",
            },
          ],
        },
        {
          name: "Chest & Back",
          exercises: [
            {
              name: "DB Bench Press",
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/KpQ1TouRHNo",
            },
            {
              name: "1 Arm DB Row",
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/-zXFfe2eMA0",
            },
          ],
        },
        {
          name: "Arms",
          exercises: [
            {
              name: "Standing DB Curl",
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/d_y_7V6eTu8",
            },
            {
              name: "DB Overhead Tricep Extension",
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/D0omx6lUSpk",
            },
          ],
        },
        {
          name: "Core",
          exercises: [
            {
              name: "Front Plank",
              sets: 3,
              reps: "30s - 1min",
              link: "https://youtu.be/VSa4AUsyJ4A",
            },
            {
              name: "Side Plank",
              sets: 3,
              reps: "30s - 1min",
              link: "https://youtu.be/Lz97M6mdIt8",
            },
          ],
        },
      ],
    },
    {
      name: "Workout B",
      warmups: [
        {
          name: "Atlas lunge",
          reps: "5 each leg",
          link: "https://youtu.be/7KL3sidkwjg",
        },
        {
          name: "Yoga plex + cobra",
          reps: 10,
          link: "https://youtu.be/EWwlcKfWMus",
        },
        {
          name: "Superman + Retraction",
          reps: 10,
          link: "https://youtu.be/xPP4dRQ69sU",
        },
        {
          name: "Active Inner Leg",
          reps: "10 each leg",
          link: "https://youtu.be/HWYoKGRLjB0",
        },
        {
          name: "Triangle bridge",
          reps: "10 each leg",
          link: "https://youtu.be/Vs2ivDsout8",
        },
      ],
      workouts: [
        {
          name: "Legs",
          exercises: [
            {
              name: "DB Hip Hinge",
              weight: 20,
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/Q60i-KPepdI",
            },
            {
              name: "Bodyweight Lunge",
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/NgwW8Wf_75Q",
            },
          ],
        },
        {
          name: "Shoulders & Back",
          exercises: [
            {
              name: "Standing DB Press",
              weight: 20,
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/9J8vbaBX5S8",
            },
            {
              name: "Band Pull Apart",
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/r4Vee8cA7qE",
            },
          ],
        },
        {
          name: "Arms",
          exercises: [
            {
              name: "Standing hammer curl",
              weight: 20,
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/brg7e-1Fu1U",
            },
            {
              name: "Lying tricep extension",
              weight: 20,
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/5KRfE04LMkQ",
            },
          ],
        },
        {
          name: "Core",
          exercises: [
            {
              name: "Russian Twist",
              weight: 20,
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/kIbk6CsyFE4",
            },
            {
              name: "Leg lift",
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/w1VQYMQGwDI",
            },
          ],
        },
      ],
    },
    {
      name: "Workout C",
      warmups: [
        {
          name: "Arm Circles",
          reps: "10 each way",
          link: "https://youtu.be/eqJaq8SJD6A",
        },
        {
          name: "Torso Twist",
          reps: "10 each way",
          link: "https://youtu.be/eaWbfY4XUfk",
        },
        {
          name: "Cossack lunge",
          reps: "10 each leg",
          link: "https://youtu.be/M7xrXZPgIqs",
        },
        {
          name: "Reach through",
          reps: "5 each side",
          link: "https://youtu.be/cwKiM3Rq9p4",
        },
        {
          name: "Active Super Hip",
          reps: "10 each leg",
          link: "https://youtu.be/LHKvP_9GPGI",
        },
      ],
      workouts: [
        {
          name: "Chest & Back",
          exercises: [
            {
              name: "DB Chest Fly",
              weight: 20,
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/j2qr9vt9NJE",
            },
            {
              name: "DB Reverse Fly",
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/WhiKC0IYnWY",
            },
          ],
        },
        {
          name: "Arms",
          exercises: [
            {
              name: "Band curl",
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/59fLoQOoEKg",
            },
            {
              name: "Band pressdown",
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/DnBxZwrMEYM",
            },
          ],
        },
        {
          name: "Calfs",
          exercises: [
            {
              name: "Calf raises",
              sets: 3,
              reps: "15 - 20",
              link: "https://youtu.be/lcPCkR8rWCE",
            },
            {
              name: "Wall tib raise",
              sets: 3,
              reps: "15 - 20",
              link: "https://youtu.be/J3TOKhRDSkc",
            },
          ],
        },
        {
          name: "Core",
          exercises: [
            {
              name: "Alternate V-up",
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/gBGbbRloq_o",
            },
            {
              name: "DB Chop",
              sets: 3,
              reps: "8 - 10",
              link: "https://youtu.be/0frcbsdlczM",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Personal Fitness Tracker</title>
        <meta name="description" content="Track my workouts" />
      </Head>
      <main className="flex min-h-screen flex-col gap-10 bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {workoutDays.map((day: WorkoutDayType) => {
          return (
            <section
              key={day.name}
              className="mx-auto w-11/12 rounded-lg bg-slate-500 p-4 first:mt-4"
            >
              <div className="mb-4">
                <h1 className="mb-4 text-3xl font-bold text-white">
                  {day.name}
                </h1>
                <h2 className="mb-2 text-2xl font-semibold text-white">
                  Warmups
                </h2>
                <ul>
                  {day.warmups.map((warmup: WarmupType) => {
                    return (
                      <li key={warmup.name} className="text-white">
                        {warmup.name} - {warmup.reps} -{" "}
                        <a
                          href={warmup.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-500"
                        >
                          Video
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold text-white">
                  Workouts
                </h2>
                {day.workouts.map((workoutGroup: WorkoutGroupType) => {
                  return (
                    <div className="mb-2">
                      <h3
                        key={workoutGroup.name}
                        className="mb-2 text-xl font-medium text-white"
                      >
                        {workoutGroup.name}
                      </h3>
                      <ul>
                        {workoutGroup.exercises.map(
                          (exercise: ExerciseType) => {
                            return (
                              <li key={exercise.name} className="text-white">
                                {exercise.name} - {exercise.weight} -{" "}
                                {exercise.sets} sets - {exercise.reps} reps -{" "}
                                <a
                                  href={exercise.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-orange-500"
                                >
                                  Video
                                </a>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        <section className="mx-auto w-11/12">
          <button className="mb-4 w-full rounded-lg bg-slate-500 p-4 text-2xl font-bold text-white">
            Add a new workout day
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;
