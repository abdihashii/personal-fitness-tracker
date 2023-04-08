import { useAtom } from "jotai";
import Link from "next/link";
import Layout from "~/components/layout";
import { workoutsAtom } from "~/store/workoutStore";

const Workouts = () => {
  const [workouts, setWorkouts] = useAtom(workoutsAtom);

  return (
    <Layout>
      <div className="mx-auto mt-5 flex w-11/12 flex-col gap-4">
        <Link
          href="/add/new-workout"
          className="w-full justify-between gap-1 rounded-md border border-gray-300 bg-green-800 px-2 py-4 text-center active:bg-green-600"
        >
          Add New Workout
        </Link>
        {workouts.map((workout) => {
          return (
            <div
              key={workout.name}
              className="flex w-full flex-row justify-between gap-1 rounded-md border border-gray-300 px-2 py-4"
            >
              <p className="  text-2xl">{workout.name}</p>

              <button
                className="rounded-md bg-red-500 px-2 py-1 text-white"
                onClick={() => {
                  setWorkouts(workouts.filter((w) => w.name !== workout.name));
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Workouts;
