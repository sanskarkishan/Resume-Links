# Resume-Links Portfolio

A modern, responsive portfolio website showcasing academic documents, certificates, internships, and hackathons with interactive image viewing capabilities.

## 🚀 Features

- **Interactive Image Viewer**: Zoom, drag, and print functionality for all documents
- **Organized Sections**: 
  - Academic Documents (Matriculation, Diploma, BTech)
  - Certificates (Udemy, NATS, etc.)
  - Internship Certificates
  - Hackathons & Workshops
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradients and smooth animations
- **Print Support**: Direct printing of certificates and documents
- **Protected Routes**: Secure access to personal documents

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **PDF Generation**: html2pdf.js
- **Icons**: Boxicons

## 📁 Project Structure

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

## 🎯 Key Components

### ImageModal Component
A reusable modal component that provides:
- **Zoom Functionality**: Mouse wheel scrolling (50% - 300%)
- **Drag to Move**: Click and drag when zoomed in
- **Print Support**: Direct printing with proper formatting
- **Theme Support**: Customizable colors for different sections

### Custom Hooks
- **useImageModal**: Manages modal state and provides open/close functionality

### Utility Functions
- **imageUtils**: Helper functions for image data creation and click handlers

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Resume-Links
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Usage

### Navigation
- **Home**: Main landing page with navigation links
- **Resume**: Interactive online resume with PDF download
- **Certificates**: View and interact with all certificates
- **Documents**: Access academic documents (protected route)
- **Personal**: Login page for document access

### Image Interaction
1. **Click** any image to open in full-screen modal
2. **Scroll** mouse wheel to zoom in/out
3. **Drag** to move around when zoomed in
4. **Print** button to print the document
5. **Close** with X button or click outside

## 🔐 Authentication

The application includes a simple authentication system:
- Personal documents are protected routes
- Login required to access academic documents
- Session stored in localStorage

## 🎨 Customization

### Adding New Certificates
1. Add images to appropriate `assets/` folder
2. Import images in the respective page component
3. Add to the certificates array with proper labels

### Styling
- Uses Tailwind CSS for styling
- Custom gradients and animations
- Responsive design with mobile-first approach

### Themes
The ImageModal component supports different themes:
- `cyan` (default)
- `blue`
- `indigo`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sanskar Kishan**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn URL]
- Email: [Your Email]

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the fast build tool
- Tailwind CSS for the utility-first CSS framework
- All the open-source libraries used in this project

---

⭐ If you found this project helpful, please give it a star!