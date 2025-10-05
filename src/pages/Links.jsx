import { useNavigate } from "react-router-dom";

export const Links = () => {
  const navigate = useNavigate();

  return (
    <div className="font-poppins tracking-wide text-center m-auto pt-5 text-2xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 min-h-screen">
      <ul className="pb-25 grid grid-cols-1 sm:grid-cols-2 font-bold md:grid-cols-3 gap-6 m-auto w-11/12 max-w-screen-md mt-8 animate-fade-in-down transition-all duration-700">
        {[
          {
            name: "Portfolio",
            href: "https://sanskarkishan.github.io/Portfolio/",
          },
          { name: "Github", href: "https://github.com/sanskarkishan" },
          {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/sanskar-kishan-bb5910220/",
          },
        ].map(({ name, href, isInternal, path }) => (
          <li
            key={name}
            className="backdrop-blur-sm bg-white/10 border-white/30 border-2 rounded-xl p-4 text-white hover:bg-white/20 hover:scale-110 transition-all cursor-pointer shadow-lg"
            onClick={isInternal ? () => navigate(href) : undefined}
          >
            {isInternal ? (
              <span>{name}</span>
            ) : (
              <a
                target="_blank"
                href={href}
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                {name}
              </a>
            )}
          </li>
        ))}

        {[
          { name: "Projects", path: "/projects" },
          { name: "Resume", path: "/resume" },
          { name: "Internships", path: "/Internships" },
          { name: "Certification", path: "/Certification" },
          { name: "Hackathons", path: "/Hackathons" },
          { name: "Personal", path: "/personal" }, // Added Personal button
        ].map(({ name, path }) => (
          <li
            key={name}
            className="backdrop-blur-sm bg-white/10 border-white/30 border-2 rounded-xl p-4 text-white hover:bg-white/20 hover:scale-110 transition-all cursor-pointer shadow-lg"
            onClick={() => navigate(path)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
