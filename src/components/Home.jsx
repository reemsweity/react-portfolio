import React from "react";
import { Helmet } from "react-helmet";
import Profile from "../assets/profile.png"; // Ensure this path is correct
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ReactTyped } from "react-typed";

const Home = ({ darkMode }) => {
  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Welcome to Reem Alswaiti's Portfolio</title>
        <meta
          name="description"
          content="Reem Alswaiti is a skilled web developer with experience in React, JavaScript, HTML, and CSS. Check out my portfolio to know more about my skills and projects."
        />
        <meta
          name="keywords"
          content="Reem Alswaiti, web developer, React, JavaScript, front-end development, portfolio, programmer"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Reem Alswaiti" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Helmet>

      <div
        name="Home"
        className={`max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          {/* Left Section */}
          <div className="md:w-1/2 mt-0 md:mt-24 space-y-4 order-2 md:order-1">
            <span className="text-xl">Welcome to my Feed</span>
            <div className="flex justify-center md:justify-start space-x-3 text-2xl md:text-4xl">
              <h2>Hello, I'm a</h2>
              <ReactTyped
                className="text-red-600 font-bold"
                strings={["Coder", "Programmer", "Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6 text-3xl">
              <a
                href="https://github.com/reemsweity/portfolio-reem/settings/pages"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-700 dark:text-white hover:text-yellow-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://github.com/reemsweity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-700 dark:text-white hover:text-yellow-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:alswiti.reem@gmail.com"
                className="text-white-700 dark:text-white hover:text-yellow-400"
              >
                <MdEmail />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 mt-4 md:mt-16 order-1 md:ml-20 flex justify-center">
            <div
              className={`rounded-full w-48 md:w-[400px] md:h-[400px] ${
                darkMode ? "filter drop-shadow-[0_0_0.7rem_rgb(240,143,130)]" : ""
              }`}
            >
              <img
                src={Profile}
                alt="Profile"
                className="rounded-full w-full h-full"
              />
            </div>
          </div>
        </div>

        <hr className={darkMode ? "border-gray-700" : "border-gray-300"} />
      </div>
    </>
  );
};

export default Home;
