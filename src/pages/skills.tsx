"use client";
import { useEffect } from "react"; // Import hooks
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
} from "react-icons/fa";
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
} from "react-icons/si";
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

const skills = Object.entries(skillIcons).map(([name, icon]) => ({
  name,
  icon,
}));

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
        {/* All Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-400">🛠️ All My Skills</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="project-fade flex items-center space-x-3 bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-700 transition duration-300"
            >
              <span className="text-2xl text-blue-400">{skill.icon}</span>
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* AI Course Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-blue-300">
            🧠 AI Python Course Technologies
          </h3>
          <p className="text-gray-400 text-sm italic mt-1">
            Still learning with RAG Applications
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
            <li>Python</li>
            <li>Qdrant DB</li>
            <li>Vector Databases</li>
            <li>
              AI Concepts (Retrieval-Augmented Generation, Embeddings, RAG
              Applications)
            </li>
          </ul>
        </div>

        {/* Skills by Project Section */}
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
                      {skillIcons[tech as keyof typeof skillIcons]}
                    </span>

                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
