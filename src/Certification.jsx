import java from "./assets/certificates/java.jpg";
import react from "./assets/certificates/react.jpg";
import tata from "./assets/certificates/tata.jpg";
import lor from "./assets/certificates/lor.png";
import face from "./assets/certificates/Face.jpg";
import git from "./assets/certificates/Git.jpg";
export const Certification = () => {
  return (
    <>
      <div className="text-center m-auto text-2xl bg-cyan-700 w-screen  h-100% ">
        <div>
          <h1 className="text-3xl font-bold text-white pt-10 lg:text-4xl ">
            Certificates
          </h1>
        </div>

        <div className="flex items-stretch justify-center gap-5 flex-wrap max-sm:px-5 pb-20 ">

          <div className="w-96 h-96 flex flex-col items-center">
            <img
              className="w-96 h-96 rounded-lg shadow-lg mt-10"
              src={git}
              alt="Internship Certificate 1"
            />
            <p className="text-white text-xl font-semibold mt-2">
              Udemy Mastering Git Certification
            </p>
          </div>
          <div className="w-96 h-96 flex flex-col items-center">
            <img
              className="w-96 h-96 rounded-lg shadow-lg mt-10"
              src={face}
              alt="Internship Certificate 1"
            />
            <p className="text-white text-xl font-semibold mt-2">
              Udemy Face Recognition Certification
            </p>
          </div> 
          <div className="w-96 h-96 flex flex-col items-center">
            <img
              className="w-96 h-96 rounded-lg shadow-lg mt-10"
              src={java}
              alt="Internship Certificate 1"
            />
            <p className="text-white text-xl font-semibold mt-2">
              Udemy Java Certification
            </p>
          </div>
          <div className="w-96 h-96 flex flex-col items-center">
            <img
              className="w-96 h-96 rounded-lg shadow-lg mt-10"
              src={react}
              alt="Internship Certificate 1"
            />
            <p className="text-white text-xl font-semibold mt-2">
              Udemy React Certification{" "}
            </p>
          </div>
        </div>

        
        <div className="flex items-stretch justify-center gap-5 flex-wrap max-sm:px-5 pb-20 ">
          <div>
            <img
              className="w-110 h-150 rounded-lg shadow-lg mt-10"
              src={tata}
              alt="Internship Certificate 1"
            />
            <p className="text-white text-xl font-semibold mt-2">
              NATS TATA MOTORS Certification{" "}
            </p>
          </div>
          <div>
            <img
              className="w-110 h-150 rounded-lg shadow-lg mt-10"
              src={lor}
              alt="Internship Certificate 1"
            />
            <p className="text-white text-xl font-semibold mt-2">
              LOR from SARVAGYA DOERS FOUNDATION{" "}
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
