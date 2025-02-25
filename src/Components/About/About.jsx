import React from "react";
import AboutImg from "../../assets/human3.png"; // Updated image path
import Card from "../../Components/Card/Card"; // Import the Card component
import "./About.css"; // Import CSS file

const About = () => {
  const cardData = {
    gradient: "bg-gradient-to-br from-gray-700 via-gray-900 to-black",
    title: "Vipul Khanvilkar",
    titleColor: "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500",
    description:
"Experienced full-stack developer specializing in web application development and API integration. Proficient in React.js, Redux Toolkit, Tailwind CSS, Django, and MySQL, delivering responsive, scalable, and secure solutions with a focus on modern UI/UX and performance optimization.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="rgb(13,110,253)">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    ),
    customClass: "custom-card-class",
    customAnimation: "custom-animation-class" // Flip animation remains
  };

  const educationCardData = {
    gradient: "bg-gradient-to-br from-gray-700 via-gray-900 to-black",
    title: "EDUCATION",
    titleColor: "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500",
    description: (
      <>
        <p className="mb-2">2021 - 2024</p>
        <p className="font-bold">B.Tech in Information Technology</p>
        <p><i>Ramrao Adik Institute Of Technology </i></p>
        <br />
        <p className="font-bold">Complete React Developer </p>
        <p><i>Udemy </i></p>
        <br />
        <p className="font-bold">JavaScript Essentials</p>
        <p><i>Cisco Networking Academy </i></p>
      </>
    ),
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="rgb(13,110,253)">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l-6-3 6-3 6 3-6 3zm0 0v6" />
      </svg>
    ),
    customClass: "education-card"
  };

  const experienceCardData = {
    gradient: "bg-gradient-to-br from-gray-700 via-gray-900 to-black",
    title: "EXPERIENCE",
    titleColor: "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500",
    description: (
      <>
        <p className="font-bold">Full-Stack Web Developer</p>
        <p><i>"Delivering end-to-end web solutions with seamless integration"</i></p>
        <br />
        <p className="font-bold">Front-End Developer</p>
        <p><i>"Crafting sleek, responsive, and dynamic user interfaces"</i></p>
        <br />
        <p className="font-bold">Backend-End Developer</p>
        <p><i>"Building robust, scalable, and secure web architectures"</i></p>
        <br />
      </>
    ),
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="rgb(252,211,77)">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    customClass: "experience-card"
  };

  return (
    <div id="About" className="text-white flex flex-col items-center shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 pt-20 md:pt-12">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-left w-full text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#0f172a]">
        SELF-SUMMARY
      </h1>

      {/* Flex container for Image & About Card */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl">
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center">
          <img className="md:h-80 md:w-80 w-full h-auto mb-4 md:mb-0 rounded-lg" src={AboutImg} alt="About" />
        </div>

        {/* About Card with Flip Animation */}
        <div className="md:w-2/3 flex justify-center md:justify-start">
          <Card {...cardData} />
        </div>
      </div>

      {/* Flex container for Education & Experience cards */}
      <div className="w-full flex flex-col md:flex-row justify-center mt-6 gap-6">
        {/* Education Card */}
        <div className="w-full md:w-1/2">
          <Card {...educationCardData} />
        </div>

        {/* Experience Card */}
        <div className="w-full md:w-1/2">
          <Card {...experienceCardData} />
        </div>
      </div>
    </div>
  );
};

export default About;
