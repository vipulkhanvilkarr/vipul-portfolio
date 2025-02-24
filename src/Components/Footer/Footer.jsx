import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { 
  RiGithubFill, 
  RiLinkedinFill, 
  RiMailFill, 
  RiTwitterFill 
} from "@remixicon/react";
import lightLogo from "../../assets/LogoLite.png";
import darkLogo from "../../assets/LogoDark.png";
import "./footer.css";

const Footer = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <footer id="Footer" className="w-full bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 text-black dark:text-white shadow-lg pt-10 pb-6 px-10 md:px-20">
      <div className="container mx-auto">
        {/* Top section with logo and navigation */}
        <div className="flex flex-col justify-center items-center mb-8">
          <div className="flex flex-col items-center mb-6">
            <img 
              src={darkMode ? darkLogo : lightLogo} 
              alt="Logo" 
              className="h-12 w-12 md:h-14 md:w-14" 
            />
            <span className="mt-2 text-xl font-bold">V I P U L</span>
          </div>

          {/* Footer Navigation */}
         
        </div>

        {/* Middle section with social links */}
        <div className="flex justify-center gap-6 my-8">
          <a 
            href="https://github.com/vipulkhanvilkarr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 effect-3d-item"
          >
            <RiGithubFill size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 effect-3d-item"
          >
            <RiLinkedinFill size={24} />
          </a>
          <a 
            href="mailto:crusher.vipul@hmail.com" 
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 effect-3d-item"
          >
            <RiMailFill size={24} />
          </a>
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 effect-3d-item"
          >
            <RiTwitterFill size={24} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 dark:bg-gray-700 my-6"></div>

        {/* Bottom section with copyright */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Vipul. All rights reserved.</p>
          <p className="mt-2">Designed and built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;