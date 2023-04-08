import { useAtom } from "jotai";
import { newCooldownAtom, cooldownsAtom } from "~/store/workoutStore";

export const AddNewCooldownForm = () => {
  const [newCooldown, setNewCooldown] = useAtom(newCooldownAtom);
  const [cooldowns, setCooldowns] = useAtom(cooldownsAtom);

  return (
    <form
      className="mx-auto mt-5 flex w-11/12 flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setCooldowns([...cooldowns, newCooldown]);
        alert(`Successfully added ${newCooldown.name}!`);
        setNewCooldown({
          name: "",
          reps: "",
          link: "",
        });
      }}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="cooldownName">Cooldown Name</label>
        <input
          className="rounded-md border border-gray-300 p-2 text-black"
          type="text"
          id="cooldownName"
          name="cooldownName"
          value={newCooldown.name}
          onChange={(e) =>
            setNewCooldown({ ...newCooldown, name: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="numReps">Number of Reps</label>
        <input
          className="rounded-md border border-gray-300 p-2 text-black"
          type="text"
          id="numReps"
          name="numReps"
          value={newCooldown.reps}
          onChange={(e) =>
            setNewCooldown({ ...newCooldown, reps: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="videoLink">Video Link</label>
        <input
          className="rounded-md border border-gray-300 p-2 text-black"
          type="text"
          id="videoLink"
          name="videoLink"
          value={newCooldown.link}
          onChange={(e) =>
            setNewCooldown({ ...newCooldown, link: e.target.value })
          }
        />
      </div>

      <button className="mt-3 rounded-md bg-blue-500 p-2 text-white">
        Save
      </button>
    </form>
  );
};
