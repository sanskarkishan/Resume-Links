import { useNavigate } from "react-router-dom";

export const Links = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center m-auto pt-5 text-2xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 w-screen h-screen">
      <ul className="w-50 m-auto">
        <li
          className="box border-2 m-5 rounded-xl p-2 bg-blue-900 text-white hover:bg-blue-700
            hover:scale-110 transition-all cursor-pointer "
        >
          <a target="_blank" href="https://sanskarkishan.github.io/Portfolio/">
            Portfolio
          </a>
        </li>
        <li
          className="box border-2 m-5 rounded-xl p-2 bg-blue-900 text-white hover:bg-blue-700
            hover:scale-110 transition-all cursor-pointer "
        >
          <a target="_blank" href="https://github.com/sanskarkishan">
            Github
          </a>
        </li>
        <li
          className="box border-2 m-5 rounded-xl p-2 bg-blue-900 text-white hover:bg-blue-700
            hover:scale-110 transition-all cursor-pointer "
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sanskar-kishan-bb5910220/"
          >
            LinkedIn
          </a>
        </li>
        <li
          className="box border-2 m-5 rounded-xl p-2 bg-blue-900 text-white hover:bg-blue-700
            hover:scale-110 transition-all cursor-pointer "
        >
          <a target="_blank" href="https://github.com/sanskarkishan">
            Projects
          </a>
        </li>

        <li
          className="box border-2 m-5 rounded-xl p-2 bg-blue-900 text-white hover:bg-blue-700
            hover:scale-110 transition-all cursor-pointer "
        >
          <div
            onClick={() => navigate("/Internships")}
          >
            Internships
          </div>
        </li>
        <li
          className="box border-2 m-5 rounded-xl p-2 bg-blue-900 text-white hover:bg-blue-700
            hover:scale-110 transition-all cursor-pointer "
        >
          <div
            onClick={() => navigate("/Certification")}
          >
            Certification
          </div>
        </li>
        <li
          className="box border-2 m-5 rounded-xl p-2 bg-blue-900 text-white hover:bg-blue-700
            hover:scale-110 transition-all cursor-pointer "
        >
          <div
            onClick={() => navigate("/Hackathons")}
          >
            Hackathons
          </div>
        </li>

        <li
          className="box border-2 m-5 rounded-xl p-2 bg-blue-900 text-white hover:bg-blue-700
            hover:scale-110 transition-all cursor-pointer "
        >
          <a
            target="_blank"
            href="https://drive.google.com/drive/u/0/folders/10aQhlimCCvtC3CfOxRdeiOUqD9nLzwRG"
          >
            Resume
          </a>
        </li>
      </ul>
      <footer className="w-auto h-15 bg-gray-700 text-white flex justify-between items-center px-5 py-2 fixed bottom-0 left-0 right-0">
        <div></div>
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-sm">
            Designed and Developed by{" "}
            <span className="font-bold">Sanskar Kishan</span>
          </p>
        </div>
        <a>
          <i class="bx bx-up-arrow-circle text-3xl hover:scale-120 transition-all"></i>
        </a>
      </footer>
    </div>
  );
};
