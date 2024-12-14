import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useMenuToggle from "../hooks/useMenuToggle";
import { CgMenuRound } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menu, toggleMenu] = useMenuToggle();

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-16 shadow-md transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          <div>
            <h2 className="font-semibold text-xl cursor-pointer">
              Reem{" "}
              <span
                className={`text-2xl ${
                  darkMode ? "text-yellow-400" : "text-green-500"
                }`}
              >
                Alswaiti
              </span>
            </h2>
            <p className="text-sm">Web Developer</p>
          </div>
        </div>

        <ul className="hidden md:flex space-x-8">
          {["Home", "About", "Skills", "Project", "Contact"].map((item) => (
            <li
              key={item}
              className={`list-none hover:scale-110 duration-300 cursor-pointer ${
                darkMode ? "hover:text-yellow-400" : "hover:text-green-500"
              }`}
            >
              <RouterLink to={`/${item.toLowerCase()}`} className="text-lg">
                {item}
              </RouterLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <div onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl">
            {darkMode ? <BsSun className="text-yellow-400" /> : <BsMoon className="text-gray-800" />}
          </div>

          <div onClick={toggleMenu} className="md:hidden cursor-pointer">
            {menu ? (
              <MdCancel size={28} className="hover:text-red-500" />
            ) : (
              <CgMenuRound size={28} />
            )}
          </div>
        </div>
      </div>

      {menu && (
        <div
          className={`absolute top-16 left-0 right-0 transition-all duration-300 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
          }`}
        >
          <ul className="flex flex-col items-center justify-center h-screen space-y-8 font-bold">
            {["Home", "About", "Skills", "Project", "Contact"].map((item) => (
              <li
                key={item}
                className={`hover:scale-110 duration-300 cursor-pointer ${
                  darkMode ? "hover:text-yellow-400" : "hover:text-green-500"
                }`}
              >
                <Link to={item} smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
