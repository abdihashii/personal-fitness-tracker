import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
// import type {
//   WorkoutDayType,
//   WorkoutDaysType,
//   WarmupType,
//   ExerciseType,
//   WorkoutGroupType,
// } from "~/types/workoutTypes";
// import { workoutDaysAtom } from "~/store/workoutStore";
// import { useAtom } from "jotai";
// import Layout from "~/components/layout";

const Home: NextPage = () => {
  // const [workoutDays] = useAtom(workoutDaysAtom);

  return (
    <>
      <Head>
        <title>Personal Fitness Tracker</title>
        <meta name="description" content="Track my workouts" />
      </Head>
      {/* <Layout></Layout> */}
    </>
  );
};

export default Home;
