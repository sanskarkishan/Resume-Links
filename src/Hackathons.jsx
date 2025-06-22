import Eurogrip from "./assets/hackathons/Eurogrip.jpg";
import isro from "./assets/hackathons/isro.jpg";
import Nestle from "./assets/hackathons/Nestle.png";
import ucet from "./assets/hackathons/ucet.jpg";
import Zuno from "./assets/hackathons/Zuno.jpg";
import HPCL from "./assets/hackathons/HPCL.jpg";

export const Hackathons = () => {

  return (
    <div className="font-[Inter] bg-gradient-to-br from-cyan-600 to-blue-900 min-h-screen w-full text-white">
      <header className="pt-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-md">
          Hackathons & Workshops
        </h1>
        <p className="text-lg mt-2 text-cyan-100">
          Pushing limits, solving real-world challenges 💡
        </p>
      </header>

      <section className="flex flex-wrap justify-center gap-10 px-6 mt-10 pb-28">
        {[
          { src: Eurogrip, label: "Eurogrip Hackathon Certificate" },
          { src: isro, label: "ISRO Workshop Certificate" },
          { src: Nestle, label: "Nestle Workshop Certificate" },
          { src: ucet, label: "UCET Workshop Certificate" },
          { src: Zuno, label: "Zuno Appreciation Certificate" },
          { src: HPCL, label: "HPCL Hackathon Certificate" },
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
