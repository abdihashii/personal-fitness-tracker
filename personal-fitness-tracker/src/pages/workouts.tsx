import { useAtom } from "jotai";
import Layout from "~/components/layout";
import { workoutsAtom } from "~/store/workoutStore";

const Workouts = () => {
  const [workouts, setWorkouts] = useAtom(workoutsAtom);

  return (
    <Layout>
      <div className="mx-auto mt-5 flex w-11/12 flex-col gap-4">
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