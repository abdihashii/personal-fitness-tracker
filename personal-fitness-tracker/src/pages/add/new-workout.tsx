import Layout from "~/components/layout";
import { AddNewWorkoutForm } from "~/components/forms/addNewWorkoutForm";
import Link from "next/link";

const NewWorkout = () => {
  return (
    <Layout>
      <AddNewWorkoutForm />
      <Link
        href="/list/workouts"
        className="mx-auto w-11/12 justify-between gap-1 rounded-md border border-gray-300 px-2 py-4 text-center"
      >
        Show all workouts
      </Link>
    </Layout>
  );
};

export default NewWorkout;
