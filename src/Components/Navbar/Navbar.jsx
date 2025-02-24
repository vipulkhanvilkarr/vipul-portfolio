import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import logo from "../../assets/logo.png"; // Import the logo image

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    // Add the keyframes for the fade-in animation
    const styleSheet = document.styleSheets[0];
    const keyframes =
    `@keyframes fadeIn {
      to {
        opacity: 1;
      }
    }`;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);

  const fadeInStyle = {
    opacity: 0,
    animation: 'fadeIn 3s forwards'
  };

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 relative z-50">
      <div className="flex items-center" style={fadeInStyle}>
        <img src={logo} alt="Logo" className="h-12 w-12 md:h-14 md:w-14" />
        <span className="ml-2 text-xl font-bold" style={fadeInStyle}>V I P U L</span>
      </div>

      {/* Menu List (Slides in from right) */}
      <ul
        className={`fixed top-0 h-full w-3/4 bg-black bg-opacity-90 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-6 md:static md:h-auto md:w-auto md:bg-transparent md:flex-row md:gap-6 md:mx-0 md:py-0 md:px-0 z-40 
        ${menu ? "right-0" : "-right-full"} md:justify-center`}
      >
        <li className="text-md transition-all duration-300 p-2 md:p-0 md:bg-transparent rounded-md flex items-center justify-center w-full md:w-auto">
          <a href="#About" className="w-full text-center" onClick={() => setMenu(false)}>About</a>
        </li>
        <li className="text-md transition-all duration-300 p-2 md:p-0 md:bg-transparent rounded-md flex items-center justify-center w-full md:w-auto">
          <a href="#Experience" className="w-full text-center" onClick={() => setMenu(false)}>Experience</a>
        </li>
        <li className="text-md transition-all duration-300 p-2 md:p-0 md:bg-transparent rounded-md flex items-center justify-center w-full md:w-auto">
          <a href="#Projects" className="w-full text-center" onClick={() => setMenu(false)}>Projects</a>
        </li>
        <li className="text-md transition-all duration-300 p-2 md:p-0 md:bg-transparent rounded-md flex items-center justify-center w-full md:w-auto">
          <a href="#Footer" className="w-full text-center" onClick={() => setMenu(false)}>Contact</a>
        </li>
      </ul>

      {/* Menu Toggle Button (Opens/Closes from right) */}
      <button
        className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer z-50"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
      </button>
    </nav>
  );
};

export default Navbar;