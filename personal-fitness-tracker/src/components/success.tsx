import { useAtom } from "jotai";
import { newWorkoutDayAtom } from "~/store.ts/workoutStore";

export const Success = ({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) => {
  const [newWorkoutDay] = useAtom(newWorkoutDayAtom);

  return (
    <div className="mx-auto mt-10 flex w-11/12 flex-col justify-center">
      <h1 className="text-2xl font-semibold">Success!</h1>

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
          Complete
        </button>
      </div>

      <pre>
        <code>{JSON.stringify(newWorkoutDay, null, 2)}</code>
      </pre>
    </div>
  );
};
