# Project Structure

This document outlines the organized file structure of the Resume-Links project.

## Directory Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Common/shared components
│   ├── modals/          # Modal components
│   │   └── ImageModal.jsx
│   └── index.js         # Component exports
├── hooks/               # Custom React hooks
│   ├── useImageModal.js
│   └── index.js
├── pages/               # Page components
│   ├── certificates/    # Certificate-related pages
│   │   ├── Certification.jsx
│   │   ├── Internships.jsx
│   │   ├── Hackathons.jsx
│   │   └── index.js
│   ├── documents/       # Document-related pages
│   │   ├── Matriculation.jsx
│   │   ├── Diploma.jsx
│   │   ├── Btech.jsx
│   │   └── index.js
│   ├── Links.jsx
│   ├── OnlineResume.jsx
│   ├── Personal.jsx
│   └── PersonalDocuments.jsx
├── utils/               # Utility functions
│   ├── imageUtils.js
│   └── index.js
├── assets/              # Static assets
│   ├── certificates/
│   ├── hackathons/
│   ├── internships/
│   ├── Matric/
│   ├── Diploma/
│   ├── BTech/
│   └── resume/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Key Features

### Reusable Components
- **ImageModal**: A reusable modal component for viewing images with zoom, drag, and print functionality
- **useImageModal**: Custom hook for managing image modal state

### Organized Pages
- **Certificates**: All certificate-related pages (Certification, Internships, Hackathons)
- **Documents**: All document-related pages (Matriculation, Diploma, Btech)
- **Main Pages**: Core application pages (Links, OnlineResume, Personal, etc.)

### Utility Functions
- **imageUtils**: Helper functions for image handling and data creation

## Benefits of This Structure

1. **Maintainability**: Related files are grouped together
2. **Reusability**: Common components and hooks can be easily shared
3. **Scalability**: Easy to add new pages or components
4. **Developer Experience**: Clear separation of concerns and easy navigation
5. **Code Organization**: Logical grouping makes the codebase easier to understand

## Usage Examples

### Using the ImageModal Component
```jsx
import { ImageModal } from '../components';
import { useImageModal } from '../hooks';

const MyComponent = () => {
  const { modalImg, isModalOpen, openModal, closeModal } = useImageModal();
  
  return (
    <>
      <img onClick={() => openModal({ src, label })} />
      <ImageModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        imageData={modalImg}
        theme="cyan"
      />
    </>
  );
};
```

### Using Utility Functions
```jsx
import { createImageData, getImageClickHandler } from '../utils';

const imageData = createImageData(src, label, alt);
const handleClick = getImageClickHandler(openModal)(imageData);
```
