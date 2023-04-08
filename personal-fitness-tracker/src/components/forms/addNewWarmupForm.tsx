import { useAtom } from "jotai";
import { newWarmupAtom, warmupsAtom } from "~/store/workoutStore";

export const AddNewWarmupForm = () => {
  const [newWarmup, setNewWarmup] = useAtom(newWarmupAtom);
  const [warmups, setWarmups] = useAtom(warmupsAtom);

  return (
    <form
      className="mx-auto mt-5 flex w-11/12 flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setWarmups([...warmups, newWarmup]);
        alert(`Successfully added ${newWarmup.name}!`);
        setNewWarmup({
          name: "",
          reps: "",
          link: "",
        });
      }}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="warmupName">Warmup Name</label>
        <input
          className="rounded-md border border-gray-300 p-2 text-black"
          type="text"
          id="warmupName"
          name="warmupName"
          value={newWarmup.name}
          onChange={(e) => setNewWarmup({ ...newWarmup, name: e.target.value })}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="numReps">Number of Reps</label>
        <input
          className="rounded-md border border-gray-300 p-2 text-black"
          type="text"
          id="numReps"
          name="numReps"
          value={newWarmup.reps}
          onChange={(e) => setNewWarmup({ ...newWarmup, reps: e.target.value })}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="videoLink">Video Link</label>
        <input
          className="rounded-md border border-gray-300 p-2 text-black"
          type="text"
          id="videoLink"
          name="videoLink"
          value={newWarmup.link}
          onChange={(e) => setNewWarmup({ ...newWarmup, link: e.target.value })}
        />
      </div>

      <button className="mt-3 rounded-md bg-blue-500 p-2 text-white">
        Save
      </button>
    </form>
  );
};
