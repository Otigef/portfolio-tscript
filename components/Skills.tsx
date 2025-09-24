import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-600 dark:text-teal-400">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-lg"
            >
              <div className="text-teal-500 dark:text-teal-400 mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;