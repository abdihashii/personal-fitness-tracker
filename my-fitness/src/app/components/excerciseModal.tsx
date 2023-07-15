import React from 'react';
import { Exercise, ExerciseName } from '../types/workoutTypes';
import { Modal } from './Modal';
import { atom, useAtom } from 'jotai';

const selectedExerciseNameAtom = atom<ExerciseName | null>(null);

type ExerciseModalProps = {
  exercise: Exercise;
  closeModal: () => void;
};

export const ExerciseModal = ({ exercise, closeModal }: ExerciseModalProps) => {
  const [selectedExerciseName, setSelectedExerciseName] = useAtom(
    selectedExerciseNameAtom
  );

  const handleSelectExerciseName = (e: ExerciseName) => {
    setSelectedExerciseName(e);
  };

  const handleCloseModal = () => {
    setSelectedExerciseName(null);
    closeModal();
  };

  return (
    <div>
      <h2 className="mb-2 text-xl font-bold text-gray-700">Exercise</h2>
      <div>
        {exercise.names.map((nameObject) => (
          <button
            key={nameObject.name}
            onClick={() => handleSelectExerciseName(nameObject)}
            className="mb-3 block text-blue-500 hover:text-blue-700"
          >
            {nameObject.name}
          </button>
        ))}
      </div>
      {selectedExerciseName && (
        <Modal content={selectedExerciseName} closeModal={handleCloseModal} />
      )}
    </div>
  );
};
