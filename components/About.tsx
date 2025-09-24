
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (!targetId) return;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80; // Offset to account for fixed header
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-600 dark:text-teal-400">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <img
              src={PERSONAL_INFO.profileImage}
              alt="Geoffrey Nehemiah Otieno"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-teal-500 shadow-xl"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
            <div className="mt-8 flex justify-start space-x-4">
               <a 
                href={PERSONAL_INFO.resumeUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-teal-500 text-white font-bold py-3 px-6 rounded-md hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/20"
              >
                Download CV
              </a>
               <a 
                href="#contact"
                onClick={handleSmoothScroll}
                className="bg-gray-600 dark:bg-gray-700 text-white font-bold py-3 px-6 rounded-md hover:bg-gray-500 dark:hover:bg-gray-600 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;