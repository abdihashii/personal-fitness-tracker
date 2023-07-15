import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getEmbeddedYouTubeLink } from '../utils/video';
import { isLoadingAtom } from '../store/statusAtoms';
import { LoadingSpinner } from './loadingSpinner';
import { useAtom } from 'jotai';
import type { ModalContent } from '../types/modalTypes';

type ModalProps = {
  content: ModalContent | null;
  closeModal: () => void;
};

export const Modal = ({ content, closeModal }: ModalProps) => {
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
  }, [content, setIsLoading]);

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
          <h2 className="mb-2 text-xl font-bold text-gray-700">
            {content?.name}
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
              src={getEmbeddedYouTubeLink(content?.video || '')}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {content?.sets && (
            <p className="mb-2 text-lg text-gray-700">Sets: {content.sets}</p>
          )}
          {content?.reps && (
            <p className="mb-4 text-lg text-gray-700">Reps: {content.reps}</p>
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
