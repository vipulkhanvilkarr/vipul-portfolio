import React from "react";
import avatarImg from "../../assets/huamn.png"; // Corrected image path
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-black dark:text-white flex w-full justify-between items-start p-10 md:p-20 pt-20 md:pt-32"> {/* Added pt-20 for mobile view and md:pt-32 for larger screens */}
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        Building robust applications with clean and efficient code.
        </p>
        <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <img className="" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;