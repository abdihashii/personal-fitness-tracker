'use client';

import WorkoutDay from './components/workoutDay';
import { useAtom } from 'jotai';
import { workoutsAtom } from './store/workoutAtoms';

export default function Home() {
  const [workouts, setWorkouts] = useAtom(workoutsAtom);

  return (
    <main className="flex w-full flex-col items-center justify-center">
      <h1 className="my-10 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-center text-4xl font-bold text-transparent">
        My Fitness
      </h1>

      <div>
        <button
          className="mb-10 rounded bg-gradient-to-r from-blue-500 to-green-500 px-4 py-2 font-bold text-white hover:from-pink-500 hover:to-yellow-500"
          onClick={() => {
            setWorkouts([
              ...workouts,
              {
                id: workouts.length + 1,
                day: 'Monday',
                warmups: [],
                exercises: [],
                cooldowns: [],
              },
            ]);
          }}
        >
          Add Workout
        </button>
      </div>

      {/* <pre className="my-10 text-left">
        <code>{JSON.stringify(workouts.length, null, 2)}</code>
      </pre> */}

      {workouts.map((workout) => (
        <WorkoutDay key={workout.id} {...{ workout }} />
      ))}
    </main>
  );
}
