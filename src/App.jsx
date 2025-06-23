import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { Links } from "./Links";
import { Internships } from "./Internships";
import { Certification } from "./Certification";
import { Hackathons } from "./Hackathons";
import { OnlineResume } from "./OnlineResume";

// App component (uses useLocation inside the Router context)
function App() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/resume" element={<OnlineResume />} />
        <Route path="/Internships" element={<Internships />} />
        <Route path="/Certification" element={<Certification />} />
        <Route path="/Hackathons" element={<Hackathons />} />
      </Routes>

      {/* Conditionally show footer except on /resume route */}
      {location.pathname !== "/resume" && (
        <footer className="w-full bg-gray-800 text-white flex justify-center items-center flex-col mt-10 p-4 fixed bottom-0 left-0 right-0 text-sm">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>
            Designed and Developed by{" "}
            <span className="font-semibold text-blue-200">
              Sanskar Kishan
            </span>
          </p>
          <a href="#top">
            <i className="bx bx-up-arrow-circle text-3xl mt-2 hover:text-pink-400 hover:drop-shadow-glow transition-all duration-300"></i>
          </a>
        </footer>
      )}
    </>
  );
}

// AppWrapper wraps App in Router so useLocation works
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;