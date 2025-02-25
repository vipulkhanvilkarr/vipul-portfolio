import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiCloseLine, RiMenu2Line, RiMoonLine, RiSunLine } from "@remixicon/react";
import lightLogo from "../../assets/LogoLite.png"; // Import the light mode logo image
import darkLogo from "../../assets/LogoDark.png"; // Import the dark mode logo image
import { toggleDarkMode } from "../../redux/themeSlice";
import "../Navbar/navbar.css"; // Import the CSS file for 3D effects

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-wrap justify-between md:items-center text-black dark:text-white px-10 pt-6 md:px-20 bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 shadow-lg z-50">
      <div className="flex items-center">
        <img src={darkMode ? darkLogo : lightLogo} alt="Logo" className="h-12 w-12 md:h-14 md:w-14" />
        <span className="ml-2 text-xl font-bold">V I P U L</span>
      </div>

      {/* Menu List */}
      <ul className={`fixed top-0 h-full w-3/4 bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-6 md:static md:h-auto md:w-auto md:bg-transparent md:dark:bg-transparent md:flex-row md:gap-6 md:mx-0 md:py-0 md:px-0 z-40 
        ${menu ? "right-0" : "-right-full"} md:justify-center effect-3d`}>
        <li className="text-black dark:text-white effect-3d-item"><a href="#Home" onClick={() => setMenu(false)}><b>Home</b></a></li>
        <li className="text-black dark:text-white effect-3d-item"><a href="#About" onClick={() => setMenu(false)}>About</a></li>
        <li className="text-black dark:text-white effect-3d-item"><a href="#Experience" onClick={() => setMenu(false)}>Experience</a></li>
        <li className="text-black dark:text-white effect-3d-item"><a href="#Projects" onClick={() => setMenu(false)}>Projects</a></li>
        <li className="text-black dark:text-white effect-3d-item"><a href="#Footer" onClick={() => setMenu(false)}>Contact</a></li>
      </ul>

      <div className="flex items-center">
        {/* Dark Mode Toggle Button */}
        <button 
          className="p-2 rounded-md transition-all duration-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 mr-4" 
          onClick={handleToggleDarkMode}
        >
          {darkMode ? <RiSunLine size={25} /> : <RiMoonLine size={24} />}
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