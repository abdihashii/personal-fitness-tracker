import { workoutDaysAtom, newWorkoutAtom } from "~/store.ts/workoutStore";
import { useAtom } from "jotai";

const NewWorkout = () => {
  const [newWorkout, setNewWorkout] = useAtom(newWorkoutAtom);
  const [workoutDays, setWorkoutDays] = useAtom(workoutDaysAtom);

  return (
    <form
      className="mx-auto flex w-10/12 flex-col gap-4"
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   setWorkoutDays([...workoutDays, newWorkout]);
      // }}
    >
      <label htmlFor="workoutName" className="mt-8 text-lg font-semibold">
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

      <label htmlFor="weight" className="mt-8 text-lg font-semibold">
        Weight
      </label>
      <input
        type="text"
        id="weight"
        name="weight"
        value={newWorkout.weight}
        onChange={(e) =>
          setNewWorkout({ ...newWorkout, weight: e.target.value })
        }
        className="block rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <label htmlFor="sets" className="mt-8 text-lg font-semibold">
        Sets
      </label>
      <input
        type="text"
        id="sets"
        name="sets"
        value={newWorkout.sets}
        onChange={(e) => setNewWorkout({ ...newWorkout, sets: e.target.value })}
        className="block rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <label htmlFor="reps" className="mt-8 text-lg font-semibold">
        Reps
      </label>
      <input
        type="text"
        id="reps"
        name="reps"
        value={newWorkout.reps}
        onChange={(e) => setNewWorkout({ ...newWorkout, reps: e.target.value })}
        className="block rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <label htmlFor="link" className="mt-8 text-lg font-semibold">
        Video Link
      </label>
      <input
        type="text"
        id="link"
        name="link"
        value={newWorkout.link}
        onChange={(e) => setNewWorkout({ ...newWorkout, link: e.target.value })}
        className="block rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <button
        type="submit"
        className="block rounded-md border border-gray-300 bg-blue-500 px-4 py-2 text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Add
      </button>

      <pre>
        <code>{JSON.stringify(newWorkout, null, 2)}</code>
      </pre>
    </form>
  );
};

export default NewWorkout;
