import { Workout } from '../types/workoutTypes';

const WorkoutDay = ({ workout }: { workout: Workout }) => {
  return (
    <div
      className="mb-10 flex w-11/12 flex-col rounded border border-gray-300 p-5"
      onClick={() => {
        console.log(`clicked: ${workout.day}`);
      }}
    >
      <h2 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-center text-4xl font-bold text-transparent">
        {workout.day}
      </h2>

      {/* warmup, excercises, and cooldowns wrapper */}
      <div className="flex w-full flex-row justify-around gap-5">
        <div className="mt-10">
          <h3 className="mb-5 text-center text-lg font-bold">Warmups</h3>
          {workout.warmups.map((warmup) => (
            <div key={warmup.id}>
              <a
                href={warmup.video}
                target="_blank"
                className="mb-3 block text-blue-500 hover:text-blue-700"
              >
                {warmup.name}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="mb-5 text-center text-lg font-bold">Exercises</h3>
          {workout.exercises.map((exercise, i) => (
            <div key={exercise.id}>
              {exercise.names.map((e) => (
                <a
                  key={e.name}
                  href={e.video}
                  target="_blank"
                  className="mb-3 block text-blue-500 hover:text-blue-700"
                >
                  {e.name}
                </a>
              ))}
              {i < workout.exercises.length - 1 && <hr />}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="mb-5 text-center text-lg font-bold">Cooldowns</h3>
          {workout.cooldowns.map((cooldown) => (
            <div key={cooldown.id}>
              <a
                href={cooldown.video}
                target="_blank"
                className="mb-3 text-blue-500 hover:text-blue-700"
              >
                {cooldown.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutDay;