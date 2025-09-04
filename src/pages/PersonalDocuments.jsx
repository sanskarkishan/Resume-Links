import React from "react";
import { useNavigate } from "react-router-dom";

export const PersonalDocuments = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/personal");
  };

  const handleMatriculationClick = () => {
    navigate("/matriculation");
  };

  const handleDiplomaClick = () => {
    navigate("/diploma");
  };

  const handleBtechClick = () => {
    navigate("/btech");
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-slate-800 relative pb-32">
      {/* Back button */}
      <button
        className="fixed top-4 left-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg shadow-md transition-all z-40 text-sm sm:text-base flex items-center gap-1"
        onClick={handleBackClick}
        aria-label="Back"
      >
        <span>&#8592;</span>
        <span className="hidden sm:inline-block">Back</span>
      </button>
      <button
        onClick={handleLogout}
        className="absolute top-6 right-6 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-red-300 z-10"
      >
        Logout
      </button>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-teal-400 text-center drop-shadow-lg mb-8">Personal Documents</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          className="w-40 px-6 py-3 rounded-xl bg-teal-500 text-white font-semibold text-lg shadow-lg hover:bg-teal-600 transition-all focus:outline-none focus:ring-2 focus:ring-teal-300"
          onClick={handleMatriculationClick}
        >
          Matriculation
        </button>
        <button
          className="w-40 px-6 py-3 rounded-xl bg-teal-500 text-white font-semibold text-lg shadow-lg hover:bg-teal-600 transition-all focus:outline-none focus:ring-2 focus:ring-teal-300"
          onClick={handleDiplomaClick}
        >
          Diploma
        </button>
        <button
          className="w-40 px-6 py-3 rounded-xl bg-teal-500 text-white font-semibold text-lg shadow-lg hover:bg-teal-600 transition-all focus:outline-none focus:ring-2 focus:ring-teal-300"
          onClick={handleBtechClick}
        >
          BTech
        </button>
        {['Ids'].map((label) => (
          <button
            key={label}
            className="w-40 px-6 py-3 rounded-xl bg-teal-500 text-white font-semibold text-lg shadow-lg hover:bg-teal-600 transition-all focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}; 