import {
  newWorkoutGroupAtom,
  workoutGroupsAtom,
  newWorkoutDayAtom,
} from "~/store.ts/workoutStore";
import { useAtom } from "jotai";
import { NewWorkoutForm } from "./newWorkoutForm";

export const NewWorkoutGroupForm = ({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) => {
  const [newWorkoutDay, setNewWorkoutDay] = useAtom(newWorkoutDayAtom);
  const [newWorkoutGroup, setNewWorkoutGroup] = useAtom(newWorkoutGroupAtom);
  const [workoutGroups, setWorkoutGroups] = useAtom(workoutGroupsAtom);

  return (
    <div className="mx-auto mt-10 flex w-11/12 flex-col justify-center">
      <form>
        <label
          htmlFor="workoutGroupName"
          className="mb-4 mt-8 text-xl font-semibold"
        >
          Workout Group Name
        </label>
        <input
          type="text"
          id="workoutGroupName"
          name="workoutGroupName"
          value={newWorkoutGroup.name}
          onChange={(e) =>
            setNewWorkoutGroup({ ...newWorkoutGroup, name: e.target.value })
          }
          className="mb-8 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <NewWorkoutForm />

        <button
          onClick={() => {
            setWorkoutGroups([...workoutGroups, newWorkoutGroup]);
            setNewWorkoutDay({
              ...newWorkoutDay,
              workouts: [...newWorkoutDay.workouts, newWorkoutGroup],
            });
            setNewWorkoutGroup({ name: "", exercises: [] });
          }}
          className="mt-8 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white"
        >
          Add Group
        </button>
      </form>

      <p className="mb-4 mt-8 text-lg font-semibold">Workout groups</p>
      {newWorkoutDay.workouts.map((workoutGroup) => (
        <div
          className="mb-5 flex items-center justify-between rounded-md border border-gray-300 px-4 py-2 last:mb-0"
          key={workoutGroup.name}
        >
          <p>{workoutGroup.name}</p>
          <button
            onClick={() => {
              setWorkoutGroups(
                workoutGroups.filter(
                  (group) => group.name !== workoutGroup.name
                )
              );
              setNewWorkoutDay({ ...newWorkoutDay, workouts: workoutGroups });
            }}
            className="rounded-md bg-red-600 px-4 py-2 font-semibold text-white"
          >
            Delete
          </button>
        </div>
      ))}

      <div className="mt-8 flex flex-row gap-5">
        <button
          onClick={() => prevStep()}
          className="w-1/2 rounded-md bg-slate-600 px-4 py-2 font-semibold text-white"
        >
          Previous
        </button>
        <button
          onClick={() => nextStep()}
          className="w-1/2 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white"
        >
          Review
        </button>
      </div>

      <pre className="mt-10">
        <code>{JSON.stringify(newWorkoutDay, null, 2)}</code>
      </pre>
    </div>
  );
};
