import React from "react";
import AboutImg from "../../assets/human3.png"; // Updated image path
import Card from "../../Components/Card/Card"; // Import the Card component

const About = () => {
  const cardData = {
    gradient: "bg-gradient-to-br from-gray-700 via-gray-900 to-black", // Unique gradient color for dark mode
    title: "Vipul Khanvilkar",
    titleColor: "#0D6EFD", // Added title color
    description: "I'm a full-stack developer with skills in both front-end and back-end development, using languages like HTML, CSS, JavaScript, and technologies such as PHP or Python. I specialize in creating user-friendly and high-performance web applications, offering end-to-end solutions for diverse online experiences. My commitment is to deliver seamless and responsive projects that contribute to a positive user journey.",
    icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="rgb(13,110,253)">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
          </svg>
  };

  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row overflow-hidden items-center justify-center shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 pt-20 md:pt-12" // Added pt-20 for mobile view
    >
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">SELF-SUMMARY</h2>
        <img className="md:h-80 md:w-80 w-full h-auto mb-4 md:mb-0" src={AboutImg} alt="About img" />
      </div>

      {/* Place the Card component here with dynamic content */}
      <div className="md:ml-8 mt-4 md:mt-0 w-full md:w-auto">
        <Card {...cardData} />
      </div>
    </div>
  );
};

export default About;