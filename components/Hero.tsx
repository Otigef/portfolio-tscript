import React from 'react';
import Typewriter from './Typewriter';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {


  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 relative">
       <div className="absolute inset-0 bg-grid-gray-300/[0.3] dark:bg-grid-gray-700/[0.2] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
      <div className="text-center z-10 p-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-4">
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 mb-6 font-semibold">
          <Typewriter texts={[PERSONAL_INFO.title]} />
        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          {PERSONAL_INFO.tagline}
        </p>
        <a
          href="#projects"
          className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/20"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;