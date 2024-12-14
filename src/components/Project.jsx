import React from "react";
import { Helmet } from "react-helmet";
import news from "../assets/WhatsApp Image 2024-12-14 at 3.38.20 PM.jpeg";
import Simon from "../assets/Capture.jpeg";
import tic from "../assets/WhatsApp Image 2024-12-14 at 3.43.33 PM.jpeg";
import port from "../assets/WhatsApp Image 2024-12-14 at 3.42.55 PM.jpeg";

const Project = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      technologies: ["HTML5", "CSS3"],
      description:
        "Designed a personal portfolio showcasing skills and projects with a responsive design for both mobile and desktop.",
      logo: Simon,
      sourceLink: "https://github.com/reemsweity/portfolio-reem",
    },
    {
      id: 2,
      title: "Job Heaven",
      technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
      description:
        "A web platform for job seekers and employers, Collaborated with team members to overcome challenges and deliver a user-friendly experience",
      logo: tic,
      sourceLink: "https://github.com/reemsweity/job_heaven",
    },
    {
      id: 3,
      title: "Moments Giftshop",
      technologies: ["JavaScript", "HTML5", "CSS3", "PHP", "SQL"],
      description:
        "Developed an e-commerce platform for a gift shop specializing in flowers, plants, chocolates, and packages, focusing on a user-friendly design and efficient functionality.",
      logo: port,
      sourceLink: "https://github.com/reemsweity/gift_shop",
    },
    {
      id: 4,
      title: "Jo Best",
      technologies: ["React", "HTML5", "CSS3", "PHP", "SQL", "Laravel"],
      description:
        "A movie platform with AI-assisted search, interactive ratings, and personalized watchlists. Designed a responsive interface and structured database for user and movie data management.",
      logo: news,
      sourceLink: "https://github.com/HaneenAbumazrou/movie-webapp",
    },
  ];

  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Projects - Reem Alswaiti</title>
        <meta
          name="description"
          content="Explore the projects developed by Reem Alswaiti, including personal portfolio, job portal, e-commerce gift shop, and movie platform with AI features."
        />
        <meta
          name="keywords"
          content="Reem Alswaiti, web development, portfolio, job platform, gift shop, movie platform, React, JavaScript, PHP"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Reem Alswaiti" />
        <link rel="canonical" href="https://yourdomain.com/projects" />
      </Helmet>

      <div
        name="Project"
        className={`py-20 font-sans min-h-screen py-8 ${
          darkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-900"
        }`}
      >
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold drop-shadow-lg text-yellow-400">Projects</h1>
        </header>

        {/* Projects Section */}
        <section className="py-8">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`relative p-5 rounded-lg shadow-lg ${
                    darkMode
                      ? "bg-gray-800 bg-opacity-50 border-gray-700"
                      : "bg-white bg-opacity-50 border border-gray-200"
                  } hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Project Logo with Hover Effect */}
                  <div className="relative h-36 mb-4 overflow-hidden rounded-lg shadow-sm flex justify-center items-center group">
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="w-45 h-45 object-contain transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-500"
                    />
                  </div>

                  {/* Project Title */}
                  <h2 className="text-lg font-bold text-center mb-4">
                    {project.title}
                  </h2>

                  {/* Project Content */}
                  <p className="text-sm mb-3 text-center">{project.description}</p>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          darkMode
                            ? "text-gray-200 bg-gray-700"
                            : "text-gray-800 bg-gray-100"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`py-2 px-4 rounded-lg text-sm font-medium shadow-md transform hover:scale-105 transition-all duration-300 ${
                        darkMode
                          ? "bg-gray-600 hover:bg-gray-700 text-white"
                          : "bg-gray-700 hover:bg-gray-800 text-white"
                      }`}
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;
