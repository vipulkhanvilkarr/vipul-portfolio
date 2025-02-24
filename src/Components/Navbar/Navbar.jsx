import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line, RiMoonLine, RiSunLine } from "@remixicon/react";
import darkLogo from "../../assets/logo.png"; // Import the dark mode logo image
import lightLogo from "../../assets/lite logo.jpg"; // Import the light mode logo image

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "enabled");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-black dark:text-white px-10 pt-6 md:px-20 relative z-50">
      <div className="flex items-center">
        <img src={darkMode ? darkLogo : lightLogo} alt="Logo" className="h-12 w-12 md:h-14 md:w-14" />
        <span className="ml-2 text-xl font-bold">V I P U L</span>
      </div>

      {/* Menu List */}
      <ul className={`fixed top-0 h-full w-3/4 bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-6 md:static md:h-auto md:w-auto md:bg-transparent md:flex-row md:gap-6 md:mx-0 md:py-0 md:px-0 z-40 
        ${menu ? "right-0" : "-right-full"} md:justify-center`}>
        <li className="text-black dark:text-white"><a href="#About" onClick={() => setMenu(false)}>About</a></li>
        <li className="text-black dark:text-white"><a href="#Experience" onClick={() => setMenu(false)}>Experience</a></li>
        <li className="text-black dark:text-white"><a href="#Projects" onClick={() => setMenu(false)}>Projects</a></li>
        <li className="text-black dark:text-white"><a href="#Footer" onClick={() => setMenu(false)}>Contact</a></li>
      </ul>

      <div className="flex items-center">
        {/* Dark Mode Toggle Button */}
        <button 
          className="p-2 rounded-md transition-all duration-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 mr-4" 
          onClick={toggleDarkMode}
        >
          {darkMode ? <RiSunLine size={24} /> : <RiMoonLine size={24} />}
        </button>

        {/* Menu Toggle Button */}
        <button className="md:hidden transition-all duration-300 cursor-pointer z-50" onClick={() => setMenu(!menu)}>
          {menu ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;