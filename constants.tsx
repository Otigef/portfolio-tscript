
import React from 'react';
import type { Project, Skill } from './types';

// SVG Icons for Skills
const HtmlIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const CssIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const JsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a1 1 0 100-2H7zM9 9a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zm4-3a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
  </svg>
);

const WebDevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 019-9m-9 9a9 9 0 009 9m-9-9h18" />
  </svg>
);

const PROFILE_IMAGE_DATA = 'https://scontent.fnbo2-1.fna.fbcdn.net/v/t39.30808-6/481770649_630927166337028_4599393354229782662_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHqRZf-3JM1TbxQCRMfgD-YJ73bg8VzQ6YnvduDxXNDpo1vloB5X3c6tC-ra4PUtK52viPfaUdK4q6yDQXzfD9C&_nc_ohc=FGfM9dRIuFUQ7kNvwEyjbo6&_nc_oc=Adl4EgNv5Iav5B0Ts9av8W9F3AmOZYxfPJ3a6iZ2X7yg2lgEP5v3rS4isfcm_Y5QEjo&_nc_zt=23&_nc_ht=scontent.fnbo2-1.fna&_nc_gid=sc0eLzJ_UR714NlE1Fjp5g&oh=00_Afb_0qGthk5L_d6oPRsOU0GPnkBeCOxoP_c2oOqZOXFQRQ&oe=68DA08AC';

export const PERSONAL_INFO = {
  name: "Geoffrey Nehemiah Otieno",
  title: "Software Engineer & Web Developer",
  tagline: "Building functional and visually appealing digital solutions.",
  about: "A diligent and adaptable Software Engineer with a background in operations and logistics. My journey into technology was driven by a passion for problem-solving and creating efficient, elegant solutions. I thrive on turning complex challenges into user-friendly web experiences, leveraging my skills in modern web technologies. My past experience has honed my ability to manage projects, adapt to new environments quickly, and maintain a keen eye for detail—qualities I now bring to every line of code I write.",
  email: "otigef@yahoo.com",
  phone: "+254723570446",
  linkedin: "https://www.linkedin.com/in/geoffrey-nehemiah-otieno-a79a296b/",
  github: "https://github.com/Otigef",
  resumeUrl: "/geoffrey-otieno-resume.pdf",
  profileImage: PROFILE_IMAGE_DATA,
};


export const SKILLS: Skill[] = [
  {
    name: 'JavaScript',
    icon: <JsIcon />,
  },
  {
    name: 'HTML5',
    icon: <HtmlIcon />,
  },
  {
    name: 'CSS3',
    icon: <CssIcon />,
  },
  {
    name: 'Web Design',
    icon: <WebDevIcon />,
  },
  {
    name: 'Web Development',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  },
  {
    name: 'Responsive UI',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  },
];


export const PROJECTS: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A modern, responsive e-commerce front-end with a product catalog, shopping cart, and checkout process.',
    image: 'https://picsum.photos/seed/ecomm/600/400',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/geoffreyotieno/ecommerce-project',
    liveUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style task management application to organize workflows and improve productivity.',
    image: 'https://picsum.photos/seed/taskapp/600/400',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/geoffreyotieno/task-manager',
    liveUrl: '#',
  },
  {
    title: 'Personal Blog',
    description: 'A clean and minimalist personal blog platform built to be fast, accessible, and easy to manage.',
    image: 'https://picsum.photos/seed/blog/600/400',
    tags: ['Web Design', 'Responsive UI', 'SEO'],
    githubUrl: 'https://github.com/geoffreyotieno/personal-blog',
    liveUrl: '#',
  },
    {
    title: 'Weather Dashboard',
    description: 'A web application that fetches and displays real-time weather data from a third-party API for any city.',
    image: 'https://picsum.photos/seed/weather/600/400',
    tags: ['JavaScript', 'API', 'HTML/CSS'],
    githubUrl: 'https://github.com/geoffreyotieno/weather-app',
    liveUrl: '#',
  },
  {
    title: 'Portfolio Website V1',
    description: 'The first iteration of my personal portfolio, showcasing my initial projects and skills in web development.',
    image: 'https://picsum.photos/seed/portfolio/600/400',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/geoffreyotieno/portfolio-v1',
    liveUrl: '#',
  },
  {
    title: 'Recipe Finder',
    description: 'An app that helps users find new recipes based on ingredients they have on hand, using an external recipe API.',
    image: 'https://picsum.photos/seed/recipe/600/400',
    tags: ['React', 'API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/geoffreyotieno/recipe-finder',
    liveUrl: '#',
  },
];
