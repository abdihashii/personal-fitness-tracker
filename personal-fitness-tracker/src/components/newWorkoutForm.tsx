import {
  newWorkoutAtom,
  newWorkoutGroupAtom,
  workoutGroupsAtom,
} from "~/store.ts/workoutStore";
import { useAtom } from "jotai";

export const NewWorkoutForm = () => {
  const [newWorkout, setNewWorkout] = useAtom(newWorkoutAtom);
  const [newWorkoutGroup, setNewWorkoutGroup] = useAtom(newWorkoutGroupAtom);
  const [workoutGroups, setWorkoutGroups] = useAtom(workoutGroupsAtom);

  return (
    <div className="flex flex-col items-center justify-between gap-8 rounded-md border border-gray-300 px-4 py-8">
      <label htmlFor="workoutName" className="text-lg font-semibold">
        Workout Name
      </label>
      <input
        type="text"
        id="workoutName"
        name="workoutName"
        value={newWorkout.name}
        onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })}
        className="block rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <label htmlFor="workoutSets" className="text-lg font-semibold">
        # of Sets
      </label>
      <input
        type="text"
        id="workoutSets"
        name="workoutSets"
        value={newWorkout.sets}
        onChange={(e) => setNewWorkout({ ...newWorkout, sets: e.target.value })}
        className="block rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <label htmlFor="workoutReps" className="text-lg font-semibold">
        # of Reps
      </label>
      <input
        type="text"
        id="workoutReps"
        name="workoutReps"
        value={newWorkout.reps}
        onChange={(e) => setNewWorkout({ ...newWorkout, reps: e.target.value })}
        className="block rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <label htmlFor="workoutWeight" className="text-lg font-semibold">
        Weight
      </label>
      <input
        type="text"
        id="workoutWeight"
        name="workoutWeight"
        value={newWorkout.weight}
        onChange={(e) =>
          setNewWorkout({ ...newWorkout, weight: e.target.value })
        }
        className="block rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <label htmlFor="workoutLink" className="text-lg font-semibold">
        Video Link
      </label>
      <input
        type="text"
        id="workoutLink"
        name="workoutLink"
        value={newWorkout.link}
        onChange={(e) => setNewWorkout({ ...newWorkout, link: e.target.value })}
        className="block rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <button
        onClick={() => {
          setNewWorkoutGroup({
            ...newWorkoutGroup,
            exercises: [...newWorkoutGroup.exercises, newWorkout],
          });
          setWorkoutGroups([...workoutGroups, newWorkoutGroup]);
          setNewWorkout({ name: "", weight: "", reps: "", sets: "", link: "" });
        }}
        className="rounded-md bg-yellow-600 px-4 py-2 font-semibold text-white"
      >
        Add Workout To Group
      </button>

      {/* <pre className="mt-10">
        <code>{JSON.stringify(newWorkout, null, 2)}</code>
      </pre> */}
    </div>
  );
};
