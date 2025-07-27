"use client";
import { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaLinux,
  FaDocker,
  FaDatabase,
  FaProjectDiagram,
  FaGithub,
  FaHandshake,
} from "react-icons/fa";
import { BiTransferAlt } from "react-icons/bi";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPhp,
  SiDotnet,
  SiAndroid,
  SiAirtable,
  SiNeo4J,
  SiLangchain,
} from "react-icons/si";
import { PiGraphDuotone } from "react-icons/pi";

import Header from "../components/header";
import Footer from "../components/footer";

const skillIcons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJsSquare />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  PHP: <SiPhp />,
  ".NET": <SiDotnet />,
  Python: <FaPython />,
  Java: <FaJava />,
  Android: <SiAndroid />,
  Git: <FaGitAlt />,
  Linux: <FaLinux />,
  Docker: <FaDocker />,
  "Qdrant DB": <FaDocker />,
  "Vector DB": <SiAirtable />,
};

const genAITools = [
  {
    name: "LangChain",
    icon: <SiLangchain />,
    note: "Framework for chaining LLMs, tools & memory (used in RAG)",
  },
  {
    name: "LangGraph",
    icon: <PiGraphDuotone />,
    note: "Graph-based orchestration of LLM agents and tool calls",
  },
  {
    name: "Neo4j",
    icon: <SiNeo4J />,
    note: "Graph DB used to store Knowledge Graphs & relationships",
  },
  {
    name: "Vector DB",
    icon: <FaDatabase />,
    note: "Stores embeddings, used in RAG for semantic search",
  },
  {
    name: "Qdrant DB",
    icon: <FaDocker />,
    note: "Production-grade Vector DB used for RAG retrieval",
  },
  {
    name: "LangSmith",
    icon: <FaProjectDiagram />,
    note: "Used for tracing, testing, debugging LLM/RAG flows",
  },
  {
    name: "MCP",
    icon: <BiTransferAlt />,
    note: "Used to coordinate tools, agents, retrieval modules",
  },
  {
    name: "A2A Protocol",
    icon: <FaHandshake  />,
    note: "Agent-to-Agent communication protocol for modular AI",
  },
  {
    name: "Embeddings",
    icon: <SiAirtable />,
    note: "Used to convert text into vector format for similarity search",
  },
];

const fullStackSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "PHP",
  ".NET",
  "Git",
  "Linux",
  "Docker",
  "Android",
  "Java",
  "Python",
];

const projects = [
  {
    name: "FastPiks",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "React",
      "Node.js",
      "Express.js",
    ],
  },
  {
    name: "ChefGenie",
    tech: [
      "React",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Python",
      "Qdrant DB",
    ],
  },
  {
    name: "Video-Tube",
    tech: ["React", "Tailwind CSS", "JavaScript", "Node.js"],
  },
  {
    name: "Simple Social-Media",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
  },
  {
    name: "Restaurant Website",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("project-visible");
        } else {
          entry.target.classList.remove("project-visible");
        }
      });
    });

    const fadeInElements = document.querySelectorAll(".project-fade");
    fadeInElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <div className="px-6 sm:px-10 py-10 space-y-10">
        {/* GenAI Tools */}
        {/* GenAI Tools */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-400">
            🧠 GenAI Tools & Frameworks
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {genAITools.map((tool, index) => (
            <div
              key={index}
              className="project-fade flex items-center space-x-3 bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
            >
              <span className="text-2xl text-blue-400">{tool.icon}</span>
              <span className="text-lg font-medium">{tool.name}</span>
            </div>
          ))}
        </div>

        {/* Full Stack Skills */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-400">
            🛠️ Full Stack Development Skills
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {fullStackSkills.map((skill, index) => (
            <div
              key={index}
              className="project-fade flex items-center space-x-3 bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-700 transition duration-300"
            >
              <span className="text-2xl text-blue-400">
                {skillIcons[skill as keyof typeof skillIcons]}
              </span>
              <span className="text-lg font-medium">{skill}</span>
            </div>
          ))}
        </div>

        {/* Project Skills */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-400">
            🧩 Skills Used in My Projects
          </h2>
        </div>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-fade bg-gray-800 p-5 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-blue-300">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-3 mt-3">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="flex items-center space-x-2 bg-gray-700 px-3 py-2 rounded-md"
                  >
                    <span className="text-blue-400 text-xl">
                      {skillIcons[tech as keyof typeof skillIcons] || (
                        <FaPython />
                      )}
                    </span>
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
            📘 GenAI Expertise
          </h2>
          <div className="bg-gray-800 border border-blue-600 rounded-xl p-6 shadow-lg">
            <ul className="list-none text-gray-200 text-base space-y-3">
              <li>
                🚀{" "}
                <span className="font-medium text-blue-300">
                  LangChain & LangGraph
                </span>{" "}
                — LLM orchestration and agent flow
              </li>
              <li>
                📊{" "}
                <span className="font-medium text-blue-300">Vector DBs:</span>{" "}
                Qdrant, Chroma, FAISS for semantic search
              </li>
              <li>
                🧠{" "}
                <span className="font-medium text-blue-300">Embeddings:</span>{" "}
                OpenAI, Google, SBERT
              </li>
              <li>
                📂{" "}
                <span className="font-medium text-blue-300">
                  RAG Pipelines:
                </span>{" "}
                loaders, chunking, retrievers, chains
              </li>
              <li>
                🔍 <span className="font-medium text-blue-300">LangSmith:</span>{" "}
                tracing, debugging, performance tracking
              </li>
              <li>
                🕸️ <span className="font-medium text-blue-300">Neo4j:</span>{" "}
                Knowledge Graph-based context retrieval
              </li>
              <li>
                ⚙️ <span className="font-medium text-blue-300">Tuning:</span>{" "}
                LoRA, Prompt Engineering, Eval strategies
              </li>
              <li>
                🔗 <span className="font-medium text-blue-300">Protocols:</span>{" "}
                MCP, A2A for modular agent systems
              </li>
            </ul>
          </div>
        </div>

        {/* GitHub Repo */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/SyedFaisal30/Gen-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg text-white px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:scale-105 transition transform shadow-lg"
          >
            <FaGithub className="text-2xl" />
            View My GenAI Journey Repo
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
