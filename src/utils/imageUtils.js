// Utility functions for image handling

export const createImageData = (src, label, alt = null) => ({
  src,
  label,
  alt: alt || label
});

export const getImageClickHandler = (openModal) => (imageData) => {
  return () => openModal(imageData);
};

export const getImageClassName = (baseClasses = "") => {
  return `${baseClasses} cursor-pointer hover:scale-105 transition-transform`;
};
