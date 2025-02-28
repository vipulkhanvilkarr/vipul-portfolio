import React from "react";
import avatarImg from "../../assets/huamn.png"; // Corrected image path
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div id="Home" className="text-black dark:text-white flex w-full justify-between items-start p-10 md:p-20 pt-28 md:pt-32"> {/* Changed pt-20 to pt-28 for mobile view */}
      <div className="md:w-2/4 md:pt-12 pt-12"> 
        <br />
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <br />
        <br />
        <p className="text-sm md:text-2xl tracking-tight">
          Building robust applications with clean and efficient code.
        </p>
        <a href="#Contact"> {/* Use anchor tag with ID for linking */}
          <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>
      </div>
      <div>
        <img className="" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;