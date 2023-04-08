import { useAtom } from "jotai";
import { newWorkoutAtom, workoutsAtom } from "~/store/workoutStore";

export const AddNewWorkoutForm = () => {
  const [newWorkout, setNewWorkout] = useAtom(newWorkoutAtom);
  const [workouts, setWorkouts] = useAtom(workoutsAtom);

  return (
    <form
      className="mx-auto mt-5 flex w-11/12 flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setWorkouts([...workouts, newWorkout]);
        alert(`Successfully added ${newWorkout.name}!`);
        setNewWorkout({
          name: "",
          weight: "",
          sets: "",
          reps: "",
          link: "",
        });
      }}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="workoutName">Workout Name</label>
        <input
          className="rounded-md border border-gray-300 p-2 text-black"
          type="text"
          id="workoutName"
          name="workoutName"
          value={newWorkout.name}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, name: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="weight">Weight</label>
        <input
          className="rounded-md border border-gray-300 p-2 text-black"
          type="text"
          id="weight"
          name="weight"
          value={newWorkout.weight}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, weight: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="numSets">Number of Sets</label>
        <input
          className="rounded-md border border-gray-300 p-2 text-black"
          type="text"
          id="numSets"
          name="numSets"
          value={newWorkout.sets}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, sets: e.target.value })
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
          value={newWorkout.reps}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, reps: e.target.value })
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
          value={newWorkout.link}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, link: e.target.value })
          }
        />
      </div>

      <button className="mt-3 rounded-md bg-blue-500 p-2 text-white">
        Save
      </button>
    </form>
  );
};
