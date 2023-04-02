import {
  newWarmupAtom,
  newWorkoutDayAtom,
  warmupsAtom,
} from "~/store.ts/workoutStore";
import { useAtom } from "jotai";

export const NewWarmupForm = ({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) => {
  const [newWorkoutDay, setNewWorkoutDay] = useAtom(newWorkoutDayAtom);
  const [newWarmup, setNewWarmup] = useAtom(newWarmupAtom);
  const [warmups, setWarmups] = useAtom(warmupsAtom);

  return (
    <div className="mx-auto mt-10 flex w-11/12 flex-col justify-center">
      <label htmlFor="warmupName" className="mt-8 text-lg font-semibold">
        Warmup Name
      </label>
      <input
        type="text"
        id="warmupName"
        name="warmupName"
        value={newWarmup.name}
        onChange={(e) => setNewWarmup({ ...newWarmup, name: e.target.value })}
        className="block rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <label htmlFor="warmupReps" className="mt-8 text-lg font-semibold">
        Warmup Reps
      </label>
      <input
        type="text"
        id="warmupReps"
        name="warmupReps"
        value={newWarmup.reps}
        onChange={(e) => setNewWarmup({ ...newWarmup, reps: e.target.value })}
        className="block rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <label htmlFor="warmupLink" className="mt-8 text-lg font-semibold">
        Video Link
      </label>
      <input
        type="text"
        id="warmupLink"
        name="warmupLink"
        value={newWarmup.link}
        onChange={(e) => setNewWarmup({ ...newWarmup, link: e.target.value })}
        className="block rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <button
        onClick={() => {
          setWarmups([...warmups, newWarmup]);
          setNewWorkoutDay({
            ...newWorkoutDay,
            warmups: [...newWorkoutDay.warmups, newWarmup],
          });
          setNewWarmup({ name: "", reps: "", link: "" });
        }}
        className="mt-8 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white"
      >
        Add Warmup
      </button>

      {warmups.map((warmup) => (
        <div key={warmup.name}>
          <p>{warmup.name}</p>
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
          Next
        </button>
      </div>

      <pre>
        <code>{JSON.stringify(newWorkoutDay, null, 2)}</code>
      </pre>
    </div>
  );
};
