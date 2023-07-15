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
    <div className="mb-10 flex flex-col w-full sm:w-11/12 rounded border border-gray-300 p-5">
      <h2 className="mb-5 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-center text-3xl lg:text-4xl font-bold text-transparent">
        {workout.day}
      </h2>

      {/* warmup, exercises, and cooldowns wrapper */}
      <div className="flex flex-col md:flex-row justify-around gap-5">
        {/* warmup */}
        <div className="mt-5">
          <h3 className="mb-5 text-center text-2xl font-bold">Warmups</h3>
          {workout.warmups.map((warmup) => (
            <div key={warmup.id}>
              <button
                className="w-full mb-3 text-center text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white rounded py-4 text-lg font-bold"
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
        <div className="mt-5">
          <h3 className="mb-5 text-center text-2xl font-bold">Exercises</h3>
          {workout.exercises.map((exercise) => (
            <button
              key={exercise.id}
              className="w-full mb-3 text-center text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white rounded py-4 text-lg font-bold"
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
        <div className="mt-5">
          <h3 className="mb-5 text-center text-2xl font-bold">Cooldowns</h3>
          {workout.cooldowns.map((cooldown) => (
            <button
              key={cooldown.id}
              className="w-full mb-3 text-center text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white rounded py-4 text-lg font-bold"
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
