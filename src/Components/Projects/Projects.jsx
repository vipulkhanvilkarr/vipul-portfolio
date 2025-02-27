import React, { useState, useEffect, useRef } from "react";
import { FaCameraRetro, FaProjectDiagram, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const projects = [
    {
        icon: <FaProjectDiagram color="#1572B6" size={50} />,
        name: "Personal Portfolio Website",
        description: "Developed a personal portfolio website using React.js, and Tailwind CSS, hosted on Vercel.",
        learnMore: "https://github.com/vipulkhanvilkarr/vipul-portfolio",
        demo: "https://vipul-khanvilkar-portfolio.vercel.app/",
    },
    {
        icon: <FaCameraRetro color="#FF5733" size={50} />,
        name: "Canva Design",
        description: "Check out this visually engaging poster designed to capture attention with a sleek and modern layout!",
        demo: "https://www.canva.com/design/DAF_MEkSoq8/uvsZ43bCKXhzPPYyOfH9_w/edit?utm_content=DAF_MEkSoq8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
        icon: <SlNote color="#F7DF1E" size={50} />,
        name: "Canva Website UI Design",
        description: "A sleek, modern UI design with intuitive navigation and a visually appealing layout.",
        demo: "https://www.canva.com/design/DAGezsfu4dE/BVXnBS6_i2-QuV6RzukpQg/edit?utm_content=DAGezsfu4dE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
        icon: <FaProjectDiagram color="#00C4CC" size={50} />,
        name: "Canva Project 1",
        description: "A project showcasing creative designs made using Canva.",
        learnMore: "https://github.com/yourusername/canva-design",
        demo: "https://yourwebsite.com/canva-design",
    },
    {
        icon: <FaProjectDiagram color="#00C4CC" size={50} />,
        name: "Canva Project 2",
        description: "A project showcasing creative designs made using Canva.",
        learnMore: "https://github.com/yourusername/canva-design",
        demo: "https://yourwebsite.com/canva-design",
    },
];

const ProjectCard = ({ project }) => (
  <div className="project-item p-5 flex flex-col items-center justify-center rounded-2xl transition-all duration-300 hover:translate-y-[-10px] hover:shadow-lg dark:hover:shadow-white/50 h-full">
    <div className="text-5xl">{project.icon}</div>
    <span className="mt-3 text-center text-lg font-semibold text-black dark:text-white">
      {project.name}
    </span>
    <p className="mt-2 text-center text-sm text-black dark:text-white">
      {project.description}
    </p>
    <div className="mt-4 flex space-x-4">
      {project.learnMore && (
        <a href={project.learnMore} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      )}
      {project.demo && (
        <a href={project.demo} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const totalProjects = projects.length;
  
  // Calculate how many projects to show based on viewport
  const [projectsPerView, setProjectsPerView] = useState(3);
  
  // Update projects per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProjectsPerView(1);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setProjectsPerView(2);
        setIsMobile(false);
      } else {
        setProjectsPerView(3);
        setIsMobile(false);
      }
    };
    
    // Initial calculation
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const maxIndex = Math.max(0, totalProjects - projectsPerView);

  // Handle next slide
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    
    // Apply animation
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
      carouselRef.current.style.transform = `translateX(-${100 / projectsPerView}%)`;
      
      setTimeout(() => {
        // Reset position but update index
        carouselRef.current.style.transition = 'none';
        carouselRef.current.style.transform = 'translateX(0)';
        setCurrentIndex(nextIndex);
        
        // Allow time for the DOM to update
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, 500);
    }
  };

  // Handle previous slide
  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const prevIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    
    // Apply animation
    if (carouselRef.current) {
      // First move it right (outside viewport)
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = `translateX(${100 / projectsPerView}%)`;
      
      // Force reflow
      void carouselRef.current.offsetWidth;
      
      // Then animate back to center
      carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
      carouselRef.current.style.transform = 'translateX(0)';
      
      // Update the index after animation
      setTimeout(() => {
        setCurrentIndex(prevIndex);
        setIsAnimating(false);
      }, 500);
    }
  };

  // Get visible projects based on current index
  const visibleProjects = () => {
    if (currentIndex + projectsPerView <= totalProjects) {
      return projects.slice(currentIndex, currentIndex + projectsPerView);
    } else {
      const endSlice = projects.slice(currentIndex);
      const neededFromStart = projectsPerView - endSlice.length;
      const startSlice = projects.slice(0, neededFromStart);
      return [...endSlice, ...startSlice];
    }
  };

  return (
    <div id="Projects" className="text-white flex flex-col items-center shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-4 md:p-12 pt-20 md:pt-12">
      <h1 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-8">
        Projects
      </h1>
      
      {/* Mobile View - Vertical List */}
      {isMobile && (
        <div className="w-full space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="w-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
      
      {/* Desktop View - Carousel */}
      {!isMobile && (
        <div className="relative w-full max-w-5xl">
          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 z-10 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all top-1/2 transform -translate-y-1/2"
            aria-label="Previous project"
            disabled={isAnimating}
          >
            <FaChevronLeft size={20} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all top-1/2 transform -translate-y-1/2"
            aria-label="Next project"
            disabled={isAnimating}
          >
            <FaChevronRight size={20} />
          </button>
          
          {/* Carousel viewport - fixed size */}
          <div className="overflow-hidden mx-8">
            {/* Carousel track - slides within viewport */}
            <div 
              ref={carouselRef} 
              className="flex"
              style={{ transform: 'translateX(0)' }}
            >
              {visibleProjects().map((project, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className={`flex-shrink-0 transition-all px-2`}
                  style={{ width: `${100 / projectsPerView}%` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalProjects }, (_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (isAnimating) return;
                  
                  const direction = i > currentIndex ? 'next' : 'prev';
                  if (direction === 'next') {
                    carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
                    carouselRef.current.style.transform = `translateX(-${100 / projectsPerView}%)`;
                  } else {
                    carouselRef.current.style.transition = 'none';
                    carouselRef.current.style.transform = `translateX(${100 / projectsPerView}%)`;
                    void carouselRef.current.offsetWidth;
                    carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
                    carouselRef.current.style.transform = 'translateX(0)';
                  }
                  
                  setIsAnimating(true);
                  setTimeout(() => {
                    if (direction === 'next') {
                      carouselRef.current.style.transition = 'none';
                      carouselRef.current.style.transform = 'translateX(0)';
                    }
                    setCurrentIndex(i);
                    setTimeout(() => {
                      setIsAnimating(false);
                    }, 50);
                  }, 500);
                }}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-blue-500 w-6" : "bg-gray-400 w-2"
                }`}
                aria-label={`Go to project ${i + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;