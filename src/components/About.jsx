import React from "react";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

const About = ({ darkMode }) => {
  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>About Me - Reem Alswaiti</title>
        <meta
          name="description"
          content="Learn more about Reem Alswaiti, a Computer Engineering graduate passionate about full-stack web development, with expertise in HTML, CSS, JavaScript, PHP, Laravel, and MySQL."
        />
        <meta
          name="keywords"
          content="Reem Alswaiti, web developer, full-stack development, HTML, CSS, JavaScript, PHP, Laravel, MySQL"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Reem Alswaiti" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>

      <section
        name="About"
        className={`py-20 px-6 md:px-12 py-12 md:py-16 transition-colors duration-300 ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
        }`}
      >
        {/* Section Title */}
        <h1
          className={` text-4xl md:text-5xl font-bold text-center mb-10 ${
            darkMode ? "text-yellow-300" : "text-gray-800"
          }`}
        >
          About Me
        </h1>

        {/* Personal Info Section */}
        <div
          className={`shadow-lg rounded-xl p-8 border ${
            darkMode
              ? "bg-gray-800 border-gray-600"
              : "bg-gradient-to-r from-white to-gray-50 border-gray-300"
          } flex flex-col justify-between`}
        >
          <div className="text-center">
            <span className="text-xl">
              I’m a Computer Engineering graduate passionate about full-stack web development, with expertise in HTML, CSS, JavaScript, PHP, Laravel, and MySQL. I enjoy tackling new challenges to create innovative, user-friendly solutions. In my free time, I explore new technologies and collaborate on open-source projects.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {/* Download CV Button */}
            <a
              href="https://drive.google.com/file/d/1_fTavui0nxG8xh4BoRDTLvk58k1Eyyck/view?usp=sharing"
              download
              className={`group relative inline-block px-6 py-3 font-medium rounded-full shadow-md transition-all duration-300 ${
                darkMode
                  ? "text-gray-900 bg-yellow-400 hover:bg-yellow-500"
                  : "text-white bg-green-500 hover:bg-green-700"
              }`}
            >
              <span className="relative flex items-center gap-2">📄 Download CV</span>
            </a>

            {/* Get In Touch Button */}
            <button
              className={`group relative inline-block px-6 py-3 font-medium border rounded-full shadow-md transition-all duration-300 ${
                darkMode
                  ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                  : "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
              }`}
            >
              <span className="relative flex items-center gap-2">
                <Link
                  to="Contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  💬 Get In Touch
                </Link>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
