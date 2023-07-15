import { Warmup, Workout, Cooldown, Exercise } from '../types/workoutTypes';
import { useAtom, atom } from 'jotai';
import { Modal } from './Modal';
import { ExerciseModal } from './excerciseModal';

const selectedWarmupAtom = atom<Warmup | null>(null);
const selectedExerciseAtom = atom<Exercise | null>(null);
const selectedCooldownAtom = atom<Cooldown | null>(null);

const WorkoutDay = ({ workout }: { workout: Workout }) => {
  const [selectedWarmup, setSelectedWarmup] = useAtom(selectedWarmupAtom);
  const [selectedExercise, setSelectedExercise] = useAtom(selectedExerciseAtom);
  const [selectedCooldown, setSelectedCooldown] = useAtom(selectedCooldownAtom);

  const handleOpenWarmup = (warmup: Warmup) => {
    setSelectedWarmup(warmup);
  };

  const handleOpenExercise = (exercise: Exercise) => {
    setSelectedExercise(exercise);
  };

  const handleOpenCooldown = (cooldown: Cooldown) => {
    setSelectedCooldown(cooldown);
  };

  const handleCloseModal = () => {
    setSelectedWarmup(null);
    setSelectedExercise(null);
    setSelectedCooldown(null);
  };

  return (
    <div className="mb-10 flex w-11/12 flex-col rounded border border-gray-300 p-5">
      <h2 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-center text-4xl font-bold text-transparent">
        {workout.day}
      </h2>

      {/* warmup, excercises, and cooldowns wrapper */}
      <div className="flex w-full flex-row justify-around gap-5">
        {/* warmup */}
        <div className="mt-10">
          <h3 className="mb-5 text-center text-lg font-bold">Warmups</h3>
          {workout.warmups.map((warmup) => (
            <div key={warmup.id}>
              <button
                className="mb-3 block text-left text-blue-500 hover:text-blue-700"
                onClick={() => handleOpenWarmup(warmup)}
              >
                {warmup.name}
              </button>
            </div>
          ))}
          {selectedWarmup && (
            <Modal content={selectedWarmup} closeModal={handleCloseModal} />
          )}
        </div>

        {/* exercises */}
        <div className="mt-10">
          <h3 className="mb-5 text-left text-lg font-bold">Exercises</h3>
          {workout.exercises.map((exercise) => (
            <button
              key={exercise.id}
              className="mb-3 text-left text-blue-500 hover:text-blue-700"
              onClick={() => handleOpenExercise(exercise)}
            >
              {exercise.names.map((nameObject) => nameObject.name).join(', ')}
            </button>
          ))}
          {selectedExercise && (
            <ExerciseModal
              exercise={selectedExercise}
              closeModal={handleCloseModal}
            />
          )}
        </div>

        {/* cooldowns */}
        <div className="mt-10">
          <h3 className="mb-5 text-left text-lg font-bold">Cooldowns</h3>
          {workout.cooldowns.map((cooldown) => (
            <button
              key={cooldown.id}
              className="mb-3 text-left text-blue-500 hover:text-blue-700"
              onClick={() => handleOpenCooldown(cooldown)}
            >
              {cooldown.name}
            </button>
          ))}
          {selectedCooldown && (
            <Modal content={selectedCooldown} closeModal={handleCloseModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutDay;
