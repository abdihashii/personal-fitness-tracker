import React, { useEffect, useRef } from 'react';
import { Exercise, ExerciseName } from '../types/workoutTypes';
import { useAtom } from 'jotai';
import { AnimatePresence, motion } from 'framer-motion';
import { getEmbeddedYouTubeLink } from '../utils/video';
import { isLoadingAtom } from '../store/statusAtoms';
import { LoadingSpinner } from './loadingSpinner';

type ExerciseModalProps = {
  exercise: Exercise;
  closeModal: () => void;
};

export const ExerciseModal = ({ exercise, closeModal }: ExerciseModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null); // This will be attached to the modal div
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  const closeModalIfClickedOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    setIsLoading(true);
  }, [exercise, setIsLoading]);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        onClick={closeModalIfClickedOutside}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70" // Tailwind CSS classes for overlay
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-lg bg-white p-4"
        >
          {exercise.names.map((nameObject) => (
            <div key={nameObject.name}>
              <h2 className="mb-2 text-xl font-bold text-gray-700">
                {nameObject.name}
              </h2>
              <div className="embed-responsive aspect-ratio-16/9 relative mb-4">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LoadingSpinner />
                  </div>
                )}
                <iframe
                  onLoad={handleVideoLoad}
                  title="Video"
                  className="embed-responsive-item"
                  src={getEmbeddedYouTubeLink(nameObject?.video || '')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}

          {exercise?.sets && (
            <p className="mb-2 text-lg text-gray-700">Sets: {exercise.sets}</p>
          )}
          {exercise?.reps && (
            <p className="mb-4 text-lg text-gray-700">Reps: {exercise.reps}</p>
          )}

          <button
            onClick={closeModal}
            className="mt-4 w-full rounded bg-gray-500 px-6 py-3 text-white transition duration-200 hover:bg-gray-400"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
