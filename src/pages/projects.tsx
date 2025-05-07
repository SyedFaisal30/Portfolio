"use client";

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Footer from '../components/footer';
import Header from '../components/header';

const Projects = () => {
  const projects = [
    {
      name: 'PTAI',
      desc: 'AI-based fitness app with Next.js, offering personalized workouts and nutrition plans.',
      github: 'https://github.com/SyedFaisal30/PTAI',
      live: 'https://ptai.vercel.app/'
    },
    {
      name: 'ChefGenie',
      desc: 'AI-based recipe generator where user can generate recipe, share their unique recipe.',
      github: 'https://github.com/SyedFaisal30/ChefGenie',
      live: 'https://chefgenie.vercel.app/'
    },
    {
      name: 'FastPiks',
      desc: 'A dynamic e-commerce platform using Next.js, ShadCN UI, and Tailwind CSS.',
      github: 'https://github.com/SyedFaisal30/FastPiks',
      live: 'https://fastpiks.vercel.app/'
    },
    {
      name: 'VPT',
      desc: 'A MERN stack web app that displays multiple videos on a single page with individual playback tracking.',
      github: 'hhttps://github.com/SyedFaisal30/Video-Progress-Tracker',
      live: 'https://videomilestone.vercel.app/'
    },
    {
      name: 'Mystry Messages',
      desc: 'A user messaging platform built with Next.js and TypeScript, featuring secure user authentication.',
      github: 'https://github.com/SyedFaisal30/unknownmsgs'
    },
    {
      name: 'Video-Tube',
      desc: 'Backend system for video hosting and management, handling uploads, streaming, and interactions.',
      github: 'https://github.com/SyedFaisal30/Video-Tube'
    },
    {
      name: 'E-commerce Website',
      desc: 'An online store where users can add & remove clothes to their cart using React.'
    },
    {
      name: 'Restaurant Website',
      desc: 'A dynamic and responsive restaurant website with login and add-to-cart features.'
    },
    {
      name: 'Simple Social-Media',
      desc: 'Basic social media platform built to create, share posts, and follow users.'
    },
    {
      name: 'Todo App',
      desc: 'Task manager app to organize activities with due dates and priorities.'
    },
    {
      name: 'Calculator',
      desc: 'Functional calculator for basic arithmetic operations, designed with a clean UI.'
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <div className="px-6 sm:px-10 pt-28 pb-10 space-y-10">
        <h2 className="text-4xl font-bold text-center text-blue-400">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition duration-300">
              <h3 className="text-2xl font-semibold text-white mb-2">{proj.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{proj.desc}</p>
              <div className="flex space-x-4">
                {proj.github && (
                  <a href={proj.github} className="text-blue-500 text-xl" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                )}
                {proj.live && (
                  <a href={proj.live} className="text-green-400 text-xl" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
