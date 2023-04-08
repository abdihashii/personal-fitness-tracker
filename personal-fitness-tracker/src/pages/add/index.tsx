import Link from "next/link";
import Layout from "~/components/layout";

const Add = () => {
  return (
    <Layout>
      <div className="mx-auto mt-5 flex w-11/12 flex-col gap-4">
        <Link
          href="/add/new-workout-day"
          className="w-full justify-between gap-1 rounded-md border border-gray-300 bg-green-800 px-2 py-4 text-center active:bg-green-600"
        >
          Add New Workout Day
        </Link>

        <Link
          href="/add/new-warmup"
          className="w-full justify-between gap-1 rounded-md border border-gray-300 bg-green-800 px-2 py-4 text-center active:bg-green-600"
        >
          Add New Warmup
        </Link>

        <Link
          href="/add/new-workout"
          className="w-full justify-between gap-1 rounded-md border border-gray-300 bg-green-800 px-2 py-4 text-center active:bg-green-600"
        >
          Add New Workout
        </Link>

        <Link
          href="/add/new-cooldown"
          className="w-full justify-between gap-1 rounded-md border border-gray-300 bg-green-800 px-2 py-4 text-center active:bg-green-600"
        >
          Add New Cool Down
        </Link>
      </div>
    </Layout>
  );
};

export default Add;
