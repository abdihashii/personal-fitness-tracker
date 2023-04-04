import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import type {
  WorkoutDayType,
  WorkoutDaysType,
  WarmupType,
  ExerciseType,
  WorkoutGroupType,
} from "~/types/workoutTypes";
import { workoutDaysAtom } from "~/store.ts/workoutStore";
import { useAtom } from "jotai";
import Layout from "~/components/layout";

const Home: NextPage = () => {
  const [workoutDays] = useAtom(workoutDaysAtom);

  return (
    <>
      <Head>
        <title>Personal Fitness Tracker</title>
        <meta name="description" content="Track my workouts" />
      </Head>
      <Layout>
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
                    <div key={workoutGroup.name} className="mb-2">
                      <h3 className="mb-2 text-xl font-medium text-white">
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

        <Link
          href="/new-workout"
          className="mx-auto mb-4 w-11/12 rounded-lg bg-slate-500 p-4 text-center text-2xl font-bold text-white"
        >
          Add a new workout day
        </Link>
      </Layout>
    </>
  );
};

export default Home;
