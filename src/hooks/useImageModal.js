import { useState } from 'react';

export const useImageModal = () => {
  const [modalImg, setModalImg] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageData) => {
    setModalImg(imageData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImg(null);
  };

  return {
    modalImg,
    isModalOpen,
    openModal,
    closeModal
  };
};
