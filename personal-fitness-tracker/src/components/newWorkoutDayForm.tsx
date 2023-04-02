import { newWorkoutDayAtom } from "~/store.ts/workoutStore";
import { useAtom } from "jotai";

export const NewWorkoutDayForm = ({ nextStep }: { nextStep: () => void }) => {
  const [newWorkoutDay, setNewWorkoutDay] = useAtom(newWorkoutDayAtom);

  return (
    <div>
      <label htmlFor="workoutName" className="mt-8 text-lg font-semibold">
        Workout Day Name
      </label>
      <input
        type="text"
        id="workoutName"
        name="workoutName"
        value={newWorkoutDay.name}
        onChange={(e) =>
          setNewWorkoutDay({ ...newWorkoutDay, name: e.target.value })
        }
        className="block rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button
        onClick={() => nextStep()}
        className="mt-8 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white"
      >
        Next
      </button>

      <pre>
        <code>{JSON.stringify(newWorkoutDay, null, 2)}</code>
      </pre>
    </div>
  );
};
