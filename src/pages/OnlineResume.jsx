import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import qr from "../assets/resume/qr.png";

export const OnlineResume = () => {
  const resumeRef = useRef();

  //   const handleDownloadPDF = () => {
  //     const opt = {
  //       margin: 0.3,
  //       filename: 'Sanskar_Kishan_Resume.pdf',
  //       image: { type: 'pdf', quality: 0.98 },
  //       html2canvas: { scale: 2 },
  //       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  //     };
  //     html2pdf().set(opt).from(resumeRef.current).save();
  //   };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="flex justify-end gap-4 p-4 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 hover:shadow-md transition-all duration-300"
        >
          🖨 Print Resume
        </button>
      </div>
      <main
        ref={resumeRef}
        className="max-w-4xl mx-auto bg-white text-gray-800 shadow-2xl border border-gray-200 rounded-xl px-8 py-6 print:shadow-none print:border-none print:rounded-none"
      >
        {/* Header */}
        <header className="text-center relative mb-6">
          <img
            src={qr}
            alt="QR Code"
            className="hidden sm:block print:block absolute top-4 right-4 h-20"
          />
          <h1 className="text-4xl font-bold text-blue-700 tracking-wide">
            Sanskar Kishan
          </h1>
          <p className="mt-1 text-sm">
            📞 +91-6202296692 | ✉️ sanskarkishanjob@gmail.com
          </p>
          <p className="text-sm">🏠 Kuju, Ramgarh, Jharkhand – 825316</p>
          <nav className="mt-2 flex flex-wrap justify-center gap-3 text-sm">
            <a
              href="https://github.com/sanskarkishan"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sanskar-kishan-bb5910220/"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://sanskarkishan.github.io/Portfolio/"
              className="text-blue-600 hover:underline"
            >
              Portfolio
            </a>
            <a
              href="https://leetcode.com/u/SanskarKishan0701/"
              className="text-blue-600 hover:underline"
            >
              LeetCode
            </a>
          </nav>
        </header>

        {/* Career Objective */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">
            🎯 Career Objective
          </h2>
          <p className="text-sm text-justify leading-relaxed">
            Looking for an opportunity in an organization where I can implement
            my skills & knowledge to the best of my ability for the development
            of the organization & my professional career.
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">
            🎓 Education
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <div>
                <strong>B.Tech IT</strong>
                <br />
                <span>
                  University College of Engineering and Technology, VBU
                  Hazaribagh
                </span>
                <br />
                <span className="italic">(2022–2025)</span>
              </div>
              <span className="font-semibold">CGPA: 7.5</span>
            </li>
            <li className="flex justify-between">
              <div>
                <strong>Diploma (Electrical Engg)</strong>
                <br />
                <span>Govt. Polytechnic Jagannathpur</span>
                <br />
                <span className="italic">(2018–2021)</span>
              </div>
              <span className="font-semibold">76%</span>
            </li>
            <li className="flex justify-between">
              <div>
                <strong>Matriculation</strong>
                <br />
                <span>D.A.V Sr. Sec. Public School Ara</span>
                <br />
                <span className="italic">(2017–2018)</span>
              </div>
              <span className="font-semibold">69%</span>
            </li>
          </ul>
        </section>

        {/* Internship */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">
            💼 Internship
          </h2>

          {[
            {
              title: "AI/ML & Data Analytics Intern – Edunet Foundation",
              date: "Jan 2025 – Feb 2025",
              desc: "Built a Crop and Fertilizer Recommendation System using data preprocessing, OneHotEncoder, StandardScaler, and a Decision Tree Classifier. Visualized insights with Seaborn.",
              tech: "Python, scikit-learn, pandas, Seaborn, Matplotlib",
            },
            {
              title: "Web Developer Intern – Bharat Intern",
              date: "Feb 2024 – Mar 2024",
              desc: "Developed a Netflix clone, a portfolio website, and a real-time weather forecast site.",
              tech: "React.js, HTML, CSS, JavaScript",
            },
            {
              title: "Web Developer Intern – CodesOnBytes",
              date: "Jan 2024 – Feb 2024",
              desc: "Built Food Order site, Password Generator tool, and a Typing Speed Test app.",
              tech: "React.js, HTML, CSS, JavaScript",
            },
          ].map(({ title, date, desc, tech }, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between">
                <p className="font-semibold">{title}</p>
                <p className="italic text-sm">{date}</p>
              </div>
              <p className="ml-5 text-sm text-justify mt-1">{desc}</p>
              <p className="ml-5 text-xs mt-1">
                <strong>Technologies:</strong> {tech}
              </p>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">
            🛠 Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            <div>
              <strong>Languages:</strong> Java, Python, C, JavaScript, HTML, CSS
            </div>
            <div>
              <strong>Frameworks:</strong> React.js, Spring Boot, Hibernate, JPA
            </div>
            <div>
              <strong>Tools:</strong> Git, Docker, Node.js, Tailwind CSS, MS
              Office
            </div>
            <div>
              <strong>Database:</strong> MySQL
            </div>
            <div>
              <strong>Soft Skills:</strong> Communication, Teamwork, People
              Management
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">
            🚀 Projects
          </h2>
          {[
            {
              name: "Employee Management System",
              desc: "Full-stack system using Spring Boot and React. Users can view, add, update, and delete employees. REST APIs integrated with Tailwind CSS styling.",
              tech: "Spring Boot, React, REST APIs, Tailwind CSS, Axios",
            },
            {
              name: "Online Dating Web Application",
              desc: "An engaging real-time user interface built with React and API integration.",
              tech: "React.js, HTML, CSS, JavaScript",
            },
            {
              name: "Joke Generator Web Application",
              desc: "Displays jokes fetched from an external API with dynamic styling and interactivity.",
              tech: "React.js, HTML, CSS, JavaScript",
            },
          ].map(({ name, desc, tech }, idx) => (
            <div key={idx} className="mb-4">
              <p className="font-semibold">
                {name} |{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  LINK
                </a>
              </p>
              <p className="ml-5 text-sm text-justify mt-1">{desc}</p>
              <p className="ml-5 text-xs mt-1">
                <strong>Technologies:</strong> {tech}
              </p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">
            📜 Certifications
          </h2>
          <ul className="list-disc pl-6 text-sm">
            {[
              "JAVA Complete Course Using Visual Studio Code",
              "Hands On React JS From Beginner to Expert",
              "Face, Age, Gender, Emotion Recognition Using Facenet Model",
              "Mastering the Basics of Git",
              "NATS Apprentice, Tata Motors Jamshedpur Plant",
              "LOR from Sarvagya Doers Foundation",
            ].map((cert, idx) => (
              <li key={idx}>
                {cert} |{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  LINK
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Hobbies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">
            🎯 Hobbies
          </h2>
          <p className="text-sm">
            Exploring new technologies, Learning new skills, Watching YouTube
          </p>
        </section>

        {/* Declaration */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">
            📌 Declaration
          </h2>
          <p className="text-sm">
            I hereby declare that the above information is true to the best of
            my knowledge and belief.
          </p>
          <p className="text-right font-semibold mt-4">Sanskar Kishan</p>
        </section>
      </main>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 p-4 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 hover:shadow-md transition-all duration-300"
        >
          🖨 Print Resume
        </button>
      </div>
    </>
  );
};





//   {/* Resume Content */}
//   <main
//     ref={resumeRef}
//     className="max-w-5xl mx-auto px-6 text-gray-900 bg-white shadow-2xl"
//   >
//     <header className="text-center mb-2">
//       <img src={qr} alt="QR Code" className="hidden sm:block print:block absolute h-20 " />
//       <h1 className="text-4xl font-bold pt-2">Sanskar Kishan</h1>
//       <p className="mt-1">+91-6202296692 | sanskarkishanjob@gmail.com</p>
//       <p>Kuju, Ramgarh, Jharkhand, PinCode - 825316</p>
//       <nav className="space-x-4">
//         <a
//           href="https://github.com/sanskarkishan"
//           className="text-blue-600 hover:underline"
//         >
//           GitHub
//         </a>
//         <a
//           href="https://www.linkedin.com/in/sanskar-kishan-bb5910220/"
//           className="text-blue-600 hover:underline"
//         >
//           LinkedIn
//         </a>
//         <a
//           href="https://sanskarkishan.github.io/Portfolio/"
//           className="text-blue-600 hover:underline"
//         >
//           Portfolio
//         </a>
//         <a
//           href="https://leetcode.com/u/SanskarKishan0701/"
//           className="text-blue-600 hover:underline"
//         >
//           LeetCode
//         </a>
//       </nav>
//     </header>

//     <section className="mb-2">
//       <h2 className="text-2xl font-semibold border-b pb-2">
//         Career Objective
//       </h2>
//       <p className="mt-2 text-sm text-justify">
//         Looking for an opportunity in an organization where I can implement
//         my skills & knowledge to the best of my ability for the development
//         of the organization & my professional career.
//       </p>
//     </section>

//     <section className="mb-2">
//       <h2 className="text-2xl font-semibold border-b pb-2">Education</h2>
//       <ul className=" space-y-1 mt-2">
//         <li className="flex flex-rows justify-between ">
//           <div>
//             <strong>B.Tech IT</strong> <br />
//             <span className="text-sm">
//               University College of Engineering and Technology, VBU
//               Hazaribagh{" "}
//             </span>
//             <span className="italic text-sm">(2022–2025)</span>
//           </div>
//           <strong> CGPA: 7.5</strong>
//         </li>
//         <li className="flex flex-rows justify-between  ">
//           <div>
//             <strong>Diploma (Electrical Engg)</strong>
//             <br />
//             <span className="text-sm">
//               {" "}
//               Govt. Polytechnic Jagannathpur
//             </span>{" "}
//             <span className="italic text-sm">(2018–2021)</span>
//           </div>
//           <strong> 76%</strong>
//         </li>

//         <li className="flex flex-rows justify-between  ">
//           <div>
//             <strong>Matriculation:</strong>
//             <br />
//             <span className="text-sm">
//               {" "}
//               D.A.V Sr. Sec. Public School Ara{" "}
//             </span>
//             <span className="italic text-sm">(2017–2018)</span>
//           </div>
//           <strong>69%</strong>
//         </li>
//       </ul>
//     </section>

//     <section className="mb-2">
//       <h2 className="text-2xl font-semibold border-b pb-2">Internship</h2>
//       <div className="flex flex-rows justify-between ">
//         <p className="mt-2 font-semibold">
//           AI/ML & Data Analytics Intern – Edunet Foundation
//         </p>
//         <p className="italic text-sm mt-2">Jan 2025 – Feb 2025</p>
//       </div>
//       <p className="mt-1 ml-5 text-sm text-justify">
//         I built a machine learning Crop and Fertilizer Recommendation System
//         to enable sustainable agriculture. The project included data
//         preprocessing using pandas, encoding and scaling features with
//         OneHotEncoder and StandardScaIer, and training a Decision Tree
//         Classifier with scikit-learn. I used Seaborn heatmaps to visualize
//         data insights.
//         <p>
//           Technologies: Python, scikit-learn, pandas, Seaborn, Matplotlib.
//         </p>
//       </p>

//       <div className="flex flex-rows justify-between ">
//         <p className="mt-2 font-semibold">
//           Web Developer Intern – Bharat Intern
//         </p>
//         <p className="italic text-sm mt-2">Feb 2024 – Mar 2024</p>
//       </div>
//       <p className="mt-1 ml-5 text-sm text-justify">
//         I have developed a complete Netflix clone, a professional personal
//         portfolio website, and a weather forecast site that integrates
//         real-time data, using HTML, CSS, and JavaScript. This project shows
//         my technical skills as well as my ability to make interesting and
//         functional web applications.
//         <p>Technologies: React.js, HTML, CSS, and JavaScript. </p>
//       </p>

//       <div className="flex flex-rows justify-between ">
//         <p className="mt-2 font-semibold">
//           Web Developer Intern – CodesOnBytes
//         </p>
//         <p className="italic text-sm mt-2">Jan 2024 – Feb 2024</p>
//       </div>
//       <p className="mt-1 ml-5 text-sm text-justify">
//         Created an easy-to-navigate, responsive frontend, Food Order
//         website; the other being a web-based Password generator tool that
//         ensures secure yet customizable password generation; finally, an
//         Interactive Typing Speed Test website that provides instant feedback
//         round-the-clock while the user tests their typing speed and
//         accuracy. These projects illustrate my capability to design
//         functional web applications with a user- centered approach.
//         <p>Technologies: React.js, HTML, CSS, and JavaScript. </p>
//       </p>
//     </section>

//     <section className="mb-2">
//       <h2 className="text-2xl font-semibold border-b pb-2">
//         Technical Skills
//       </h2>
//       <ul className="list-disc pl-6  mt-2">
//         <li>
//           <strong>Languages:</strong> Java, JavaScript, Python, C, HTML, CSS
//         </li>
//         <li>
//           <strong>Frameworks:</strong> React.js, Spring Boot, Hibernate, JPA
//         </li>
//         <li>
//           <strong>Tools:</strong> Git, Docker, Tailwind CSS, Node.js, MS
//           Office
//         </li>
//         <li>
//           <strong>Database:</strong> MySQL
//         </li>
//         <li>
//           <strong>Soft Skills:</strong> Communication, Teamwork, People
//           Management
//         </li>
//       </ul>
//     </section>

//     <section className="mb-2">
//       <h2 className="text-2xl font-semibold border-b pb-2">Projects</h2>
//       <div className="flex flex-rows justify-between ">
//         <p className="mt-2 font-semibold">
//           Employee Management System |{" "}
//           <a href="" className="text-blue-600 hover:underline">
//             LINK
//           </a>
//         </p>
//       </div>
//       <p className="mt-1 ml-5 text-sm text-justify">
//         Developed a complete stack Employee Management System via Spring
//         Boot and React. The application gives users the ability to view,
//         add, modify, and delete employee records. Implemented RESTful APIs
//         using Spring Boot for backend services and utilized React for a
//         dynamic and responsive frontend. Integrated Tailwind CSS for styling
//         and Axios for HTTP requests. Ensured seamless navigation and state
//         management with React Router.
//         <p>
//           Technologies: Spring Boot, React, RESTful APIs, Tailwind CSS and
//           Axios{" "}
//         </p>
//       </p>

//       <div className="flex flex-rows justify-between ">
//         <p className="mt-2 font-semibold">
//           Online Dating Web Application |{" "}
//           <a href="" className="text-blue-600 hover:underline">
//             LINK
//           </a>
//         </p>
//       </div>
//       <p className="mt-1 ml-5 text-sm text-justify">
//         I have developed a complete Netflix clone, a professional personal
//         portfolio website, and a weather forecast site that integrates
//         real-time data, using HTML, CSS, and JavaScript. This project shows
//         my technical skills as well as my ability to make interesting and
//         functional web applications.
//         <p>Technologies: React.js, HTML, CSS, and JavaScript. </p>
//       </p>

//       <div className="flex flex-rows justify-between ">
//         <p className="mt-2 font-semibold">
//           Joke Generator Web Application |{" "}
//           <a href="" className="text-blue-600 hover:underline">
//             LINK
//           </a>
//         </p>
//       </div>
//       <p className="mt-1 ml-5 text-sm text-justify">
//         This particular project is a simple web application that displays
//         random jokes fetched from an external API. An HTML file provides the
//         structure; a CSS file the style; and a JavaScript file the
//         functionality. The application features a button; when clicked, it
//         fetches a new joke from the API and displays it on the page.
//         <p>Technologies: React.js, HTML, CSS, and JavaScript.</p>
//       </p>
//     </section>

//     <section className="mb-2">
//       <h2 className="text-2xl font-semibold border-b pb-2">
//         Certifications
//       </h2>
//       <ul className="list-disc pl-6 mt-2">
//         <li>
//           JAVA Complete Course Using Visual Studio Code |{" "}
//           <a href="" className="text-blue-600 hover:underline">
//             LINK
//           </a>
//         </li>
//         <li>
//           Hands On React JS From Beginner to Expert |{" "}
//           <a href="" className="text-blue-600 hover:underline">
//             LINK
//           </a>
//         </li>
//         <li>
//           Face, Age, Gender, Emotion Recognition Using Facenet Model |{" "}
//           <a href="" className="text-blue-600 hover:underline">
//             LINK
//           </a>
//         </li>
//         <li>
//           Mastering the Basics of Git |{" "}
//           <a href="" className="text-blue-600 hover:underline">
//             LINK
//           </a>
//         </li>
//         <li>
//           NATS Apprentice, Tata Motors Jamshedpur Plant |{" "}
//           <a href="" className="text-blue-600 hover:underline">
//             LINK
//           </a>
//         </li>
//         <li>
//           LOR from Sarvagya Doers Foundation |{" "}
//           <a href="" className="text-blue-600 hover:underline">
//             LINK
//           </a>
//         </li>
//       </ul>
//     </section>

//     <section className="mb-2">
//       <h2 className="text-2xl font-semibold border-b pb-2">Hobbies</h2>
//       <p className="mt-2">
//         Exploring new technologies, Learning new skills, Watching YouTube
//       </p>
//     </section>

//     <section className="mb-2">
//       <h2 className="text-2xl font-semibold border-b pb-2">Declaration</h2>
//       <p className="mt-2">
//         I hereby declare that the above information is true to the best of
//         my knowledge and belief.
//       </p>
//       <p className="text-right p-4">Sanskar Kishan</p>
//     </section>
//   </main>
//   {/* Action Buttons */}
//   <div className="flex justify-end gap-4 p-4 print:hidden">
//     {/* <button
//       onClick={handleDownloadPDF}
//       className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//     >
//       Download PDF
//     </button> */}
//     <button
//       onClick={handlePrint}
//       className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 hover:shadow-lg transition-shadow hover:scale-105 hover:cursor-pointer"
//     >
//       Print
//     </button>
//   </div>
