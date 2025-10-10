import { useMemo } from "react";
import portfolioImg from "../assets/Projects/HTML Portfolio.png";
import employeeManagementImg from "../assets/Projects/Employee Management System.png";
import onlineDatingImg from "../assets/Projects/Online Dating Web Application.png";
import jokeGeneratorImg from "../assets/Projects/Joke Generator Web Application.png";
import todoListImg from "../assets/Projects/Todo List Web Application.png";
import projectManagementImg from "../assets/Projects/Project Management System.png";
import universityUtilityImg from "../assets/Projects/University Utility Website.png";
import loginPageImg from "../assets/Projects/Login Page.png";
import calculatorWebsiteImg from "../assets/Projects/Calculator Website.png";
import weatherAppImg from "../assets/Projects/Weather App.png";
import typingSpeedTestImg from "../assets/Projects/Typing Speed Test.png";
import passwordGeneratorImg from "../assets/Projects/Password Generator.png";
import foodOrderingWebsiteImg from "../assets/Projects/Food Ordering Website.png";
import netflixCloneImg from "../assets/Projects/Netflix Clone.png";
import artworkDatabaseWebsiteImg from "../assets/Projects/Artwork Database Website.png";
import smartIssueTrackerImg from "../assets/Projects/Smart Issue Tracker.png";


export const Projects = () => {
  const projects = useMemo(
    () => [
      {
        title: "Portfolio Website",
        tagline: "A polished personal brand on the web",
        description:
          "A fast, responsive portfolio built with React and Tailwind CSS to showcase projects, skills, and achievements with delightful animations.",
        link: "https://sanskarkishan.github.io/Portfolio/",
        tags: ["React", "Tailwind", "SPA"],
        img: portfolioImg,
      },
      {
        title: "Employee Management System",
        tagline: "Manage teams with ease",
        description:
          "A full‑stack employee directory with CRUD, search and sorting, built on Spring Boot APIs and a responsive React + Tailwind UI for a smooth admin workflow.",
        link: "https://emp-database-system.netlify.app/",
        tags: ["Spring Boot", "React", "REST APIs", "MySQL", "Tailwind CSS", "Axios"],
        img: employeeManagementImg,
      },
      {
        title: "Online Dating Web Application",
        tagline: "Match, chat, connect",
        description:
          "A modern React interface with playful interactions, profile cards, and API‑driven data to simulate matching and messaging flows.",
        link: "https://lithit.netlify.app/",
        tags: ["React.js", "HTML", "CSS", "JavaScript"],
        img: onlineDatingImg,
      },
      {
        title: "Artwork database website",
        tagline: "Discover art, beautifully indexed",
        description:
          "Browse and search artworks via a public API with clean cards, fast filters, and a gallery‑first experience.",
        link: "https://grow-me-organic-sanskar.netlify.app/",
        tags: ["React", "Next.js","API", "Tailwind", "SPA", "HTML", "CSS", "JavaScript"],
        img: artworkDatabaseWebsiteImg,
      },
      {
        title: "Smart Issue Tracker",
        tagline: "Track. Prioritize. Resolve.",
        description:
          "A sleek issue tracking app with Kanban boards, drag‑and‑drop task management, and real‑time updates using React and Firebase.",
        link: "https://smart-issue-tracker.netlify.app/",
        tags: ["React", "Next.js","API", "Node.js", "MySQL", "Tailwind", "SPA", "HTML", "CSS", "JavaScript"],
        img: smartIssueTrackerImg,
      },
      {
        title: "Joke Generator Web Application",
        tagline: "One click, instant laughs",
        description:
          "Fetches fresh jokes from a public API with loading states, fun theming, and share‑ready UI interactions.",
        link: "https://jokesgenerater07.netlify.app/",
        tags: ["React.js", "HTML", "CSS", "JavaScript"],
        img: jokeGeneratorImg,
      },
      {
        title: "Todo List Web Application",
        tagline: "Stay organized, effortlessly",
        description:
          "A minimalist productivity app with add/edit/complete flows, keyboard shortcuts, and clean Tailwind styling.",
        link: "https://sanskartodo.netlify.app/",
        tags: ["React", "Tailwind", "SPA"],
        img: todoListImg,
      },
      {
        title: "Project Management System",
        tagline: "Plan. Track. Ship.",
        description:
          "Lightweight boards to create tasks, set statuses and priorities, and track progress across projects with an intuitive React UI.",
        link: "https://projectmanagementsystem07.netlify.app/",
        tags: ["React", "Tailwind", "SPA"],
        img: projectManagementImg,
      },
      {
        title: "University utility website",
        tagline: "Tools students actually use",
        description:
          "A handy suite of student tools, including CGPA calculator and quick references, wrapped in a clean, mobile‑first design.",
        link: "https://vbu-cgpa-calculator.netlify.app/",
        tags: ["React", "Tailwind", "SPA"],
        img: universityUtilityImg,
      },
      {
        title: "Login Page",
        tagline: "Pixel‑perfect auth UI",
        description:
          "A polished authentication screen with accessible form controls, validation states, and micro‑interactions.",
        link: "https://ubiquitous-tarsier-a7cfff.netlify.app/",
        tags: ["React", "Tailwind", "SPA"],
        img: loginPageImg,
      },
      {
        title: "Calculator Website",
        tagline: "Compute with style",
        description:
          "A snappy calculator featuring keyboard support, clear error states, and tasteful theming.",
        link: "https://react-calculator-sanskar.netlify.app/",
        tags: ["React", "Tailwind", "SPA"],
        img: calculatorWebsiteImg,
      },
      {
        title: "Weather App",
        tagline: "Forecasts at a glance",
        description:
          "City‑based forecasts powered by OpenWeatherMap with temperature, conditions, and subtle weather‑themed visuals.",
        link: "https://cheerful-dango-e2a2a9.netlify.app/",
        tags: ["React", "Tailwind", "SPA", "API", "OpenWeatherMap", "HTML", "CSS", "JavaScript"],
        img: weatherAppImg,
      },
      {
        title: "Typing Speed Test",
        tagline: "Type. Test. Improve.",
        description:
          "Measure WPM and accuracy with real‑time stats, countdown timer, and restartable practice sessions.",
        link: "https://cozy-maamoul-2c6041.netlify.app/",
        tags: ["React", "Tailwind", "SPA", "HTML", "CSS", "JavaScript"],
        img: typingSpeedTestImg,
      },
      {
        title: "Password Generator",
        tagline: "Strong passwords, zero effort",
        description:
          "Generate secure passwords with configurable length and character sets, plus copy‑to‑clipboard convenience.",
        link: "https://imaginative-gecko-16efdb.netlify.app/",
        tags: ["React", "Tailwind", "SPA", "HTML", "CSS", "JavaScript"],
        img: passwordGeneratorImg,
      },
      {
        title: "Food Ordering Website",
        tagline: "Crave it. Click it.",
        description:
          "Menu browsing with categories, tasty visuals, and a frictionless cart experience in a responsive layout.",
        link: "https://remarkable-stroopwafel-91c923.netlify.app/",
        tags: ["React", "Tailwind", "SPA", "HTML", "CSS", "JavaScript"],
        img: foodOrderingWebsiteImg,
      },
      {
        title: "Netflix Clone",
        tagline: "Stream‑style UI experience",
        description:
          "A cinematic layout with hero banners and content rows inspired by streaming UIs, optimized for speed and responsiveness.",
        link: "https://inquisitive-bonbon-1be178.netlify.app/",
        tags: ["React", "Tailwind", "SPA", "HTML", "CSS", "JavaScript"],
        img: netflixCloneImg,
      },
      
    ],
    []
  );

  return (
    <div className="relative overflow-hidden font-[Inter] text-white min-h-screen bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 py-12">
      {/* Static tasteful background using Tailwind (no custom CSS) */}
      <div className="pointer-events-none absolute inset-0 blur-2xl saturate-150 opacity-90 bg-[radial-gradient(50%_60%_at_20%_20%,rgba(255,255,255,0.12),rgba(255,255,255,0)_55%),radial-gradient(45%_55%_at_80%_30%,rgba(255,255,255,0.10),rgba(255,255,255,0)_60%),radial-gradient(60%_70%_at_50%_80%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)]" />

      <div className="relative max-w-6xl mx-auto px-4">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-md">
            Projects
          </h1>
          <p className="text-lg mt-2 text-cyan-100">
            This is a collection of some of my projects that I have worked on.
          </p>
        </header>

        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden border-2 border-white/20 backdrop-blur-sm bg-white/10 shadow-lg focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              {/* Media area: image or gradient fallback */}
              <div className="relative h-44 sm:h-52 md:h-56">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-white/20 to-white/5" />
                )}
              </div>

              {/* Static title bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold truncate">{project.title}</h3>
                    {project.tagline ? (
                      <p className="text-xs opacity-90 mt-0.5 truncate">{project.tagline}</p>
                    ) : null}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm opacity-90 shrink-0">
                    <span className="hidden sm:inline">Open</span>
                    <i className="bx bx-link-external text-xl" />
                  </span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/70 text-white p-5 flex flex-col justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <p className="text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
                {project.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/20 border border-white/30 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

