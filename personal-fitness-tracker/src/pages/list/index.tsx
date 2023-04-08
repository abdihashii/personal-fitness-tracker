import Link from "next/link";
import Layout from "~/components/layout";

const List = () => {
  return (
    <Layout>
      <div className="mx-auto mt-5 flex w-11/12 flex-col gap-4">
        <Link
          href="/workout-days"
          className="w-full justify-between gap-1 rounded-md border border-gray-300 bg-blue-800 px-2 py-4 text-center active:bg-blue-600"
        >
          Workout Days
        </Link>

        <Link
          href="/list/warmups"
          className="w-full justify-between gap-1 rounded-md border border-gray-300 bg-blue-800 px-2 py-4 text-center active:bg-blue-600"
        >
          Warmups
        </Link>

        <Link
          href="/list/workouts"
          className="w-full justify-between gap-1 rounded-md border border-gray-300 bg-blue-800 px-2 py-4 text-center active:bg-blue-600"
        >
          Workouts
        </Link>

        <Link
          href="/list/cooldowns"
          className="w-full justify-between gap-1 rounded-md border border-gray-300 bg-blue-800 px-2 py-4 text-center active:bg-blue-600"
        >
          Cooldowns
        </Link>
      </div>
    </Layout>
  );
};

export default List;
