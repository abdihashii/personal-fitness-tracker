import Layout from "~/components/layout";
import { AddNewCooldownForm } from "~/components/forms/addNewCooldownForm";
import Link from "next/link";

const NewWorkout = () => {
  return (
    <Layout>
      <AddNewCooldownForm />
      <Link
        href="/list/cooldowns"
        className="mx-auto w-11/12 justify-between gap-1 rounded-md border border-gray-300 px-2 py-4 text-center"
      >
        Show all cooldowns
      </Link>
    </Layout>
  );
};

export default NewWorkout;
