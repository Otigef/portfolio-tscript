
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

const PROFILE_IMAGE_DATA = 'data:image/jpeg;base64,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';

export const PERSONAL_INFO = {
  name: "Geoffrey Nehemiah Otieno",
  title: "Software Engineer & Web Developer",
  tagline: "Building functional and visually appealing digital solutions.",
  about: "A diligent and adaptable Software Engineer with a background in operations and logistics. My journey into technology was driven by a passion for problem-solving and creating efficient, elegant solutions. I thrive on turning complex challenges into user-friendly web experiences, leveraging my skills in modern web technologies. My past experience has honed my ability to manage projects, adapt to new environments quickly, and maintain a keen eye for detail—qualities I now bring to every line of code I write.",
  email: "geoffrey.n.otieno@example.com",
  phone: "+1 (555) 123-4567",
  linkedin: "https://www.linkedin.com/in/geoffreyotieno",
  github: "https://github.com/geoffreyotieno",
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
