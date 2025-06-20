import Eurogrip from "./assets/hackathons/Eurogrip.jpg";
import isro from "./assets/hackathons/isro.jpg";
import Nestle from "./assets/hackathons/Nestle.png";
import ucet from "./assets/hackathons/ucet.jpg";
import Zuno from "./assets/hackathons/Zuno.jpg";

export const Hackathons = () => {
  return (
    <>
      <div className="text-center m-auto text-2xl bg-cyan-700 w-screen  h-100% ">
        <div>
          <h1 className="text-2xl font-bold text-white pt-10 lg:text-4xl ">
            Hackathons and Workshop Certificates
          </h1>
        </div>

        <div className="flex items-stretch justify-center gap-5 flex-wrap max-sm:px-5 pb-20 ">
          <div>
            <img
              className="w-110 h-70 rounded-lg shadow-lg mt-10"
              src={Eurogrip}
              alt="Internship Certificate 1"
            />
            <p className="text-white text-xl font-semibold mt-2">
                Eurogrip Hackathon Certificate
            </p>
          </div>
          <div>
            <img
              className="w-110 h-70 rounded-lg shadow-lg mt-10"
              src={isro}
              alt="Internship Certificate 1"
            />
            <p className="text-white text-xl font-semibold mt-2">
              ISRO Workshop Certificate{" "}
            </p>
          </div>
          <div>
            <img
              className="w-110 h-70 rounded-lg shadow-lg mt-10"
              src={Nestle}
              alt="Internship Certificate 1"
            />
            <p className="text-white text-xl font-semibold mt-2">
              Nestle Workshop Certificate{" "}
            </p>
          </div>
          <div>
            <img
              className="w-110 h-70 rounded-lg shadow-lg mt-10"
              src={ucet}
              alt="Internship Certificate 1"
            />
            <p className="text-white text-xl font-semibold mt-2">
              UCET Workshop Certificate{" "}
            </p>
          </div>
          <div>
            <img
              className="w-110 h-70 rounded-lg shadow-lg mt-10"
              src={Zuno}
              alt="Internship Certificate 1"
            />
            <p className="text-white text-xl font-semibold mt-2">
              Zuno Appreciation Certificate{" "}
            </p>
          </div>
        </div>
        <footer
          className="w-auto h-15 bg-gray-700 text-white flex justify-between 
                  items-center px-5 py-2 fixed bottom-0 left-0 right-0"
        >
          <div className="m-auto">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-sm">
              Designed and Developed by{" "}
              <span className="font-bold">Sanskar Kishan</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
