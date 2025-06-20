import AIML from "./assets/internships/AIML.jpg";
import BH from "./assets/internships/BH.jpg";
import COB from "./assets/internships/COB.jpg";

export const Internships = () => {
  return (
    <>
      <div className="text-center text-2xl bg-blue-500 w-screen lg:min-h-screen min-h-screen ">
        <div>
          <h1 className="text-3xl font-bold text-white pt-10 lg:text-4xl ">
            Internships Certificates
          </h1>
        </div>

        <div className="flex items-stretch justify-center gap-5 flex-wrap max-sm:px-5 pb-20 ">
          <div>
            <img
              className=" lg:w-90 lg:h-110 rounded-lg shadow-lg mt-5"
              src={AIML}
              alt="Internship Certificate 1"
            />
            <p className="text-white text-center text-xl font-semibold mt-2">
              Internship at Edunet Foundation
            </p>
          </div>
        </div>

        <div className="flex items-stretch justify-center gap-5 flex-wrap max-sm:px-5 pb-20">
          <div>
            <img
              className="lg:w-120 lg:h-80 rounded-lg shadow-lg tect-c
              "
              src={BH}
              alt="Internship Certificate 1"
            />
            <p className="text-white text-xl font-semibold mt-2">
              Internship at Bharat Intern
            </p>
          </div>
          <div>
            <img
              className="lg:w-120 lg:h-80 rounded-lg shadow-lg"
              src={COB}
              alt="Internship Certificate 1"
            />
            <p className="text-white text-xl font-semibold mt-2">
              Internship at CodesOnBytes
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
