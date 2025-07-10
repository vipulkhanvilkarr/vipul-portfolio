import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiCloseLine, RiMenu2Line, RiMoonLine, RiSunLine } from "@remixicon/react";
import { toggleDarkMode } from "../../redux/themeSlice";
import lightLogo from "../../assets/LogoLite.png"; // Import the light mode logo image
import darkLogo from "../../assets/LogoDark.png"; // Import the dark mode logo image
import name from "../../assets/name.png"; // Import the name logo image
import "../Navbar/navbar.css"; // Import the CSS file for 3D effects

const Navbar = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);

  const handleToggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-wrap justify-between md:items-center text-black dark:text-white px-[2.5rem] pt-[1.5rem] md:px-[5rem] bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 shadow-lg z-50">
      <div className="flex items-center">
        <a href="#Home">
          <img src={darkMode ? darkLogo : lightLogo} alt="Logo" className="h-[2rem] w-[2rem] md:h-[3rem] md:w-[2.75rem]" />
        </a>
        <a href="#Home">
          <img src={name} alt="Name" className="h-[3.75rem] w-[3.9rem] md:h-[4.5rem] d:w-[8.75rem]" />
        </a>
      </div>

      <ul className={`fixed top-0 h-full w-[75vw] bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-[1.5rem] md:static md:h-auto md:w-auto md:bg-transparent md:dark:bg-transparent md:flex-row md:gap-[1.5rem] md:mx-0 md:py-0 md:px-0 z-40 
        ${menu ? "right-0" : "-right-full"} md:justify-center effect-3d`}>
        <li className="text-black dark:text-white effect-3d-item"><a href="#Home" onClick={() => setMenu(false)}><b>Home</b></a></li>
        <li className="text-black dark:text-white effect-3d-item"><a href="#About" onClick={() => setMenu(false)}>About</a></li>
        <li className="text-black dark:text-white effect-3d-item"><a href="#Experience" onClick={() => setMenu(false)}>Experience</a></li>
        <li className="text-black dark:text-white effect-3d-item"><a href="#Projects" onClick={() => setMenu(false)}>Projects</a></li>
        <li className="text-black dark:text-white effect-3d-item"><a href="#Contact" onClick={() => setMenu(false)}>Contact</a></li>
      </ul>

      <div className="flex items-center">
        <button 
          className="p-[0.5rem] rounded-md transition-all duration-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 mr-[1rem]" 
          onClick={handleToggleTheme}
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