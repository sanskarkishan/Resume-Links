import AIML from "./assets/internships/AIML.jpg";
import BH from "./assets/internships/BH.jpg";
import COB from "./assets/internships/COB.jpg";

export const Internships = () => {

  return (
    <div className="font-[Inter] bg-gradient-to-r from-sky-500 to-indigo-600 min-h-screen w-full text-white">
      <header className="pt-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-md">
          Internship Certificates
        </h1>
        <p className="text-lg mt-2 text-blue-100">
          Proof of dedication and growth 🌱
        </p>
      </header>

      <section className="flex flex-wrap justify-center gap-10 px-6 mt-10 pb-40">
        {[
          {
            src: AIML,
            alt: "Internship at Edunet Foundation",
            label: "Internship at Edunet Foundation",
          },
          {
            src: BH,
            alt: "Internship at Bharat Intern",
            label: "Internship at Bharat Intern",
          },
          {
            src: COB,
            alt: "Internship at CodesOnBytes",
            label: "Internship at CodesOnBytes",
          },
        ].map(({ src, alt, label }, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl p-4 max-w-sm"
          >
            <img
              className="rounded-lg object-contain w-full h-64 md:h-80"
              src={src}
              alt={alt}
            />
            <p className="mt-3 text-center font-semibold text-lg">{label}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
