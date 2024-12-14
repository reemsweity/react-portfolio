import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet
import HTMLLogo from "../assets/HTML5_logo_and_wordmark.svg";
import CSSLogo from "../assets/CSS3_logo.svg";
import JavaScriptLogo from "../assets/icons8-javascript.svg";
import BootstrapLogo from "../assets/icons8-bootstrap.svg";
import reactlogo from "../assets/React-icon.svg";
import PHPLogo from "../assets/php.png";
import LaravelLogo from "../assets/icons8-laravel-64.png";
import MySQLLogo from "../assets/data-server.png";

const Skills = ({ darkMode }) => {
  const skills = [
    { id: 1, name: "HTML5", logo: HTMLLogo, category: "Front-end Development" },
    { id: 2, name: "CSS3", logo: CSSLogo, category: "Front-end Development" },
    { id: 3, name: "JavaScript", logo: JavaScriptLogo, category: "Front-end Development" },
    { id: 4, name: "Bootstrap", logo: BootstrapLogo, category: "Front-end Development" },
    { id: 5, name: "React JS", logo: reactlogo, category: "Front-end Development" },
    { id: 6, name: "PHP", logo: PHPLogo, category: "Back-End Development" },
    { id: 7, name: "Laravel", logo: LaravelLogo, category: "Back-End Development" },
    { id: 8, name: "MySQL", logo: MySQLLogo, category: "Database Management" },
  ];

  return (
    <section
      name="Skills"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Helmet component to modify metadata */}
      <Helmet>
        <title>My Skills</title> {/* Set the page title */}
        <meta name="description" content="A list of my development skills in front-end, back-end, and database management." />
      </Helmet>

      <div className="max-w-screen-xl mx-auto px-4">
        <h1
          className={`text-4xl font-bold text-center mb-8 ${
            darkMode ? "text-yellow-300" : "text-gray-800"
          }`}
        >
          Skills
        </h1>

        {/* Cards */}
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map(({ id, name, logo }) => (
            <div
              key={id}
              className={`rounded-lg shadow-lg transition-transform transform hover:scale-105 relative min-w-[200px] md:min-w-[250px] max-w-[250px] flex-shrink-0 border ${
                darkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300"
              }`}
            >
              <div className="p-4 flex flex-col items-center text-center">
                {/* Logo */}
                <div
                  className={`w-16 h-16 mb-4 flex items-center justify-center rounded-full ${
                    darkMode
                      ? "bg-gradient-to-br from-gray-600 to-gray-700"
                      : "bg-gradient-to-br from-gray-300 to-gray-100"
                  }`}
                >
                  <img src={logo} alt={name} className="w-10 h-10" />
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  {name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
