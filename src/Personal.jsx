import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Personal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
    if (username === "Sanskar07" && password === "S@nskar07") {
      setError("");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/personal-documents");
    } else {
      setError("Invalid username or password.");
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 px-2 sm:px-0">
      {/* Back button */}
      <button
        className="fixed top-4 left-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg shadow-md transition-all z-40 text-sm sm:text-base flex items-center gap-1"
        onClick={handleBackClick}
        aria-label="Back"
      >
        <span>&#8592;</span>
        <span className="hidden sm:inline-block">Back</span>
      </button>
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md flex flex-col items-center animate-fade-in mx-auto sm:mx-0">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-600 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-2 shadow-lg">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.67 0-8 1.337-8 4v2a1 1 0 001 1h14a1 1 0 001-1v-2c0-2.663-5.33-4-8-4z" /></svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1 text-center">Sign in</h1>
          <p className="text-gray-500 text-xs sm:text-sm text-center">to access your personal documents</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 w-full">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 sm:p-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-base sm:text-lg"
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 sm:p-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-base sm:text-lg"
            autoComplete="current-password"
          />
          {error && <div className="text-red-600 text-xs sm:text-sm text-center font-medium">{error}</div>}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all mt-2 shadow-md text-base sm:text-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}; 