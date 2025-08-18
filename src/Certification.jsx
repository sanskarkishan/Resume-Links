import java1 from "./assets/certificates/java1.jpg";
import react from "./assets/certificates/react.jpg";
import tata from "./assets/certificates/tata.jpg";
import lor from "./assets/certificates/lor.png";
import face from "./assets/certificates/Face.jpg";
import git from "./assets/certificates/GIt.jpg";
import java2 from "./assets/certificates/java2.jpg";
import sql1 from "./assets/certificates/sql1.jpg"

export const Certification = () => {

  return (
    <div className="font-[Inter] bg-gradient-to-br from-cyan-600 to-blue-800 min-h-screen w-full text-white">
      <header className="pt-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-md">
          Certificates
        </h1>
        <p className="text-lg mt-2 text-cyan-100">
          Udemy, NATS, and more—your learning journey on display 🎓
        </p>
      </header>

      <section className="flex flex-wrap justify-center gap-10 px-6 mt-10 pb-24">
        {[
          { src: sql1, label: "Udemy SQL Certification" },
          { src: java2, label: "Udemy Core Java Certification" },
          { src: git, label: "Udemy Mastering Git Certification" },
          { src: face, label: "Udemy Face Recognition Certification" },
          { src: java1, label: "Udemy Java Certification" },
          { src: react, label: "Udemy React Certification" },
          { src: tata, label: "NATS TATA MOTORS Certification" },
          { src: lor, label: "LOR from SARVAGYA DOERS FOUNDATION" },
        ].map(({ src, label }, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl p-4 max-w-sm"
          >
            <img
              className="rounded-lg object-contain w-full h-64 md:h-80"
              src={src}
              alt={label}
            />
            <p className="mt-3 text-center font-semibold text-lg">{label}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
