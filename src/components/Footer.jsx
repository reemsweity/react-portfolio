import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
  <>
  <hr />
  <footer className='py-12'>
    <div className="max-w-screen-2xl container max-auto px-4  md:px-20 ">
       
    <div className='flex flex-col items-center justify-center'>
    
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
                href="alswiti.reem@gmail.com"
                className="text-white-700 dark:text-white hover:text-yellow-400"
              >
                <MdEmail />
              </a>
            </div>
    <div className='mt-2 border-t border-gray-700 pt-5 flex flex-col items-center'>
    <p className='text-sm'> &copy; 2024 All Right Reserved To Reem Alswaiti</p>
   
    </div>
   </div>
    </div>
  </footer>
  
  </>
  )
}

export default Footer
