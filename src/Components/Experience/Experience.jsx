import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaPython, FaGit, FaGithub, FaLinux } from "react-icons/fa";
import { SiRedis, SiMongodb, SiDjango, SiFlask, SiRubyonrails, SiMysql, SiPostgresql, SiSqlite, SiMicrosoftsqlserver, SiNetlify, SiVercel, SiPowerbi, SiRedux, SiBootstrap, SiTailwindcss } from "react-icons/si";
import '../Experience/Experience.css'; // Import the CSS file for additional styles
import { IoLogoVercel } from "react-icons/io5";

const Experience = () => {
  const technologies = [
    { icon: <FaHtml5 color="#E34F26" size={50} />, name: "HTML5" },
    { icon: <FaCss3 color="#1572B6" size={50} />, name: "CSS3" },
    { icon: <FaReact color="#61DAFB" size={50} />, name: "React.js" },
    { icon: <FaJs color="#F7DF1E" size={50} />, name: "JavaScript" },
    { icon: <FaFigma color="#F24E1E" size={50} />, name: "Figma" },
    { icon: <FaPython color="#3776AB" size={50} />, name: "Python" },
    { icon: <SiDjango style={{ color: "var(--icon-color-django)" }} size={50} />, name: "Django" },
    { icon: <SiFlask style={{ color: "var(--icon-color-flask)" }} size={50} />, name: "Flask" },
    { icon: <SiRubyonrails color="#CC0000" size={50} />, name: "Ruby on Rails" },
    { icon: <SiMysql color="#4479A1" size={50} />, name: "MySQL" },
    { icon: <SiPostgresql color="#336791" size={50} />, name: "PostgreSQL" },
    { icon: <SiSqlite color="#003B57" size={50} />, name: "SQLite" },
    { icon: <SiMicrosoftsqlserver color="#CC2927" size={50} />, name: "SQL Server" },
    { icon: <FaGit color="#F05032" size={50} />, name: "Git" },
    { icon: <FaGithub style={{ color: "var(--icon-color-github)" }} size={50} />, name: "GitHub" },
    { icon: <SiNetlify color="#00C7B7" size={50} />, name: "Netlify" },
    { icon: <IoLogoVercel style={{ color: "var(--icon-color-vercel)" }} size={50} />, name: "Vercel" },
    { icon: <SiPowerbi color="#F2C811" size={50} />, name: "Power BI" },
    { icon: <SiRedux color="#764ABC" size={50} />, name: "Redux" },
    { icon: <SiBootstrap color="#7952B3" size={50} />, name: "Bootstrap" },
    { icon: <SiTailwindcss color="#06B6D4" size={50} />, name: "Tailwind CSS" },
    { icon: <FaLinux color="#FCC624" size={50} />, name: "Linux" },
  ];

  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl font-bold text-black dark:text-white">
        Experience
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:p-12 py-10">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="tech-item p-5 flex flex-col items-center justify-center rounded-2xl transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg dark:hover:shadow-white/50"
          >
            <div className="text-5xl">{tech.icon}</div>
            <span className="mt-3 text-center text-lg font-semibold text-black dark:text-white">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Experience;