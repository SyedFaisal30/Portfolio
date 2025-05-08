"use client";

import { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../components/footer";
import Header from "../components/header";
import chefgenieImg from "../assets/chefgenie.png";
import vptImg from "../assets/vpt.png";
import todImg from "../assets/tod.png";
import socialmediaImg from "../assets/socialmedia.png";
import restreview from "../assets/restreview.png";
import fastpiks from "../assets/fastpiks.png";
import mystrymessages from "../assets/mystrymessages.png";
import ecommerce from "../assets/ecommerce.png";
import videotube from "../assets/videotube.png";
import ptai from "../assets/ptai.png";
import resturant from "../assets/resturant.png";
import counter from "../assets/counter.png";

// Add your projects here with image and fullDesc
const projects = [
  {
    name: "PTAI",
    image: ptai,
    desc: "AI-based fitness app with Next.js.",
    fullDesc:
      "PTAI (Personal Trainer AI) is a smart fitness web app built using Next.js and Tailwind CSS. It offers personalized workout routines and nutrition plans powered by AI. Users can input preferences and fitness goals to get customized fitness strategies and health tracking.",
    github: "https://github.com/SyedFaisal30/PTAI",
    live: "https://ptai.vercel.app/",
  },
  {
    name: "ChefGenie",
    image: chefgenieImg,
    desc: "AI-based recipe generator.",
    fullDesc:
      "ChefGenie is a full-stack AI recipe generator that suggests dishes based on the ingredients you have. Built with the MERN stack and integrated with TheMealDB API, it also features a social section where users can post and explore creative meals.",
    github: "https://github.com/SyedFaisal30/ChefGenie",
    live: "https://chefgenie.vercel.app/",
  },
  {
    name: "FastPiks",
    image: fastpiks,
    desc: "Next.js e-commerce platform.",
    fullDesc:
      "FastPiks is a scalable e-commerce platform built with Next.js, ShadCN UI, and Tailwind CSS. It includes features like user authentication, dynamic product listings, a shopping cart, and a functional checkout system—all optimized for performance and responsiveness.",
    github: "https://github.com/SyedFaisal30/FastPiks",
    live: "https://fastpiks.vercel.app/",
  },
  {
    name: "RestReview",
    image: restreview,
    desc: "Restaurant review platform.",
    fullDesc:
      "RestReview enables restaurant owners to manage customer reviews with ease. It supports Google OAuth login, review posting, and responses. Built with the MERN stack and Passport.js, the app also ensures secure session handling and clean UI interactions with React and CSS Modules.",
    github: "https://github.com/SyedFaisal30/RestReview",
  },
  {
    name: "VPT",
    image: vptImg,
    desc: "Video progress tracker.",
    fullDesc:
      "VPT (Video Progress Tracker) is a responsive MERN stack app that tracks playback of multiple videos on a single page. It uses React hooks and localStorage to remember each video’s progress, ideal for educational content and learning platforms.",
    github: "https://github.com/SyedFaisal30/Video-Progress-Tracker",
    live: "https://videomilestone.vercel.app/",
  },
  {
    name: "Mystry Messages",
    image: mystrymessages,
    desc: "Secure messaging platform.",
    fullDesc:
      "Mystry Messages is a secure and anonymous messaging platform built with Next.js and TypeScript. It features JWT authentication, message encryption, and user-friendly interfaces for sending, receiving, and reading hidden messages.",
    github: "https://github.com/SyedFaisal30/unknownmsgs",
  },
  {
    name: "Video-Tube",
    image: videotube,
    desc: "Video hosting backend.",
    fullDesc:
      "Video-Tube is a Node.js and Express-based backend service that handles video uploads, streaming, metadata management, and user access control. It is designed to power a lightweight YouTube-like platform.",
    github: "https://github.com/SyedFaisal30/Video-Tube",
  },
  {
    name: "E-commerce Website",
    image: ecommerce,
    desc: "Simple shopping cart.",
    fullDesc:
      "This React-based e-commerce frontend allows users to browse fashion items, manage their cart, and calculate prices dynamically. It demonstrates a clean UI with intuitive item filtering and cart handling logic.",
  },
  {
    name: "Restaurant Website",
    image: resturant,
    desc: "Responsive food site.",
    fullDesc:
      "A responsive and modern food ordering site with a visually rich UI. It includes user login, menu browsing, dynamic cart features, and is fully optimized for mobile and desktop screens.",
  },
  {
    name: "Simple Social-Media",
    image: socialmediaImg,
    desc: "Basic social media site.",
    fullDesc:
      "A minimal social media application built with React and Firebase. Users can sign up, create profiles, post content, follow/unfollow others, and interact in real-time via Firebase’s live database.",
  },
  {
    name: "Todo App",
    image: todImg,
    desc: "Task manager app.",
    fullDesc:
      "This advanced Todo App helps users manage tasks with priorities, categories, and due dates. Built with React, it includes features like filtering, status toggling, and localStorage-based persistence.",
  },
  {
    name: "Simple Counter",
    image: counter,
    desc: "Basic counter app.",
    fullDesc:
      "A beginner-friendly counter app made with React. It features increment, decrement, and reset functions, with a minimalist UI and clean component structure.",
  },
];

const Projects = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [modalData, setModalData] = useState<any>(null);

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
      { threshold: 1.0 }
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
        <h2 className="text-4xl font-bold text-center text-blue-400">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              ref={(el) => void (projectRefs.current[index] = el)}
              className="project-fade bg-gray-800 p-4 rounded-xl shadow-lg hover:bg-gray-700 transition duration-500"
              onClick={() => setModalData(proj)}
            >
              <img
                src={proj.image}
                alt={proj.name}
                className="rounded-lg w-full h-40 object-cover mb-3"
              />
              <h3 className="text-xl font-semibold">{proj.name}</h3>
              <p className="text-sm text-gray-300">{proj.desc}</p>
              <div className="flex gap-4 mt-3">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-lg"
                  >
                    <FaGithub />
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 text-lg"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white bg-opacity-90 backdrop-blur-md text-black rounded-lg p-6 max-w-lg w-full relative">
            <button
              onClick={() => setModalData(null)}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-500"
            >
              &times;
            </button>
            <img
              src={modalData.image}
              alt={modalData.name}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{modalData.name}</h3>
            <p className="text-sm">{modalData.fullDesc}</p>
            <div className="flex gap-4 mt-4">
              {modalData.github && (
                <a
                  href={modalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  <FaGithub size={20} />
                </a>
              )}
              {modalData.live && (
                <a
                  href={modalData.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;
