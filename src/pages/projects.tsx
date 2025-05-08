"use client";

import { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../components/footer";
import Header from "../components/header";

// Add your projects here
const projects = [
  {
    name: "PTAI",
    desc: "AI-based fitness app with Next.js, offering personalized workouts and nutrition plans.",
    github: "https://github.com/SyedFaisal30/PTAI",
    live: "https://ptai.vercel.app/",
  },
  {
    name: "ChefGenie",
    desc: "AI-based recipe generator where users can generate recipe, share their unique recipe.",
    github: "https://github.com/SyedFaisal30/ChefGenie",
    live: "https://chefgenie.vercel.app/",
  },
  {
    name: "FastPiks",
    desc: "A dynamic e-commerce platform using Next.js, ShadCN UI, and Tailwind CSS.",
    github: "https://github.com/SyedFaisal30/FastPiks",
    live: "https://fastpiks.vercel.app/",
  },
  {
    name: "VPT",
    desc: "A MERN stack web app that displays multiple videos on a single page with individual playback tracking.",
    github: "https://github.com/SyedFaisal30/Video-Progress-Tracker",
    live: "https://videomilestone.vercel.app/",
  },
  {
    name: "Mystry Messages",
    desc: "A user messaging platform built with Next.js and TypeScript, featuring secure user authentication.",
    github: "https://github.com/SyedFaisal30/unknownmsgs",
  },
  {
    name: "Video-Tube",
    desc: "Backend system for video hosting and management, handling uploads, streaming, and interactions.",
    github: "https://github.com/SyedFaisal30/Video-Tube",
  },
  {
    name: "E-commerce Website",
    desc: "An online store where users can add & remove clothes to their cart using React.",
  },
  {
    name: "Restaurant Website",
    desc: "A dynamic and responsive restaurant website with login and add-to-cart features.",
  },
  {
    name: "Simple Social-Media",
    desc: "Basic social media platform built to create, share posts, and follow users.",
  },
  {
    name: "Todo App",
    desc: "Task manager app to organize activities with due dates and priorities.",
  },
  {
    name: "Calculator",
    desc: "Functional calculator for basic arithmetic operations, designed with a clean UI.",
  },
];

const Projects = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            entry.target.classList.add("project-visible");
          } else {
            entry.target.classList.remove("project-visible");
          }
        });
      },
      {
        threshold: 1.0, 
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <div className="px-6 sm:px-10 pt-28 pb-10 space-y-10">
        <h2 className="text-4xl font-bold text-center text-blue-400">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="project-fade bg-gray-800 p-6 rounded-xl shadow-lg transition duration-500 hover:bg-gray-700"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{proj.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{proj.desc}</p>
              <div className="flex space-x-4">
                {proj.github && (
                  <a
                    href={proj.github}
                    className="text-blue-500 text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    className="text-green-400 text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
