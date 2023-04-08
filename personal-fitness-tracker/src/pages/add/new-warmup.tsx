import Layout from "~/components/layout";
import { AddNewWarmupForm } from "~/components/forms/addNewWarmupForm";
import Link from "next/link";

const NewWorkout = () => {
  return (
    <Layout>
      <AddNewWarmupForm />
      <Link
        href="/list/warmups"
        className="mx-auto w-11/12 justify-between gap-1 rounded-md border border-gray-300 px-2 py-4 text-center"
      >
        Show all warmups
      </Link>
    </Layout>
  );
};

export default NewWorkout;
