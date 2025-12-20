import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaTwitter,
  FaEnvelope,
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaGitAlt } from "react-icons/fa";
import { SiFastapi, SiNextdotjs, SiRedis, SiTypescript } from "react-icons/si";
import { TbBrain } from "react-icons/tb";
import { FaCode, FaRocket } from "react-icons/fa6";
import Header from "../components/header";
import Footer from "../components/footer";
import Faisal from "../assets/Faisal.jpeg";
import Resume from "../assets/Syed Faisal.pdf";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-16">
      <Header />

      {/* Profile Section */}
      <div className="flex items-center justify-center py-10 px-4 md:px-16 bg-gray-900 text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between  mx-auto space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Profile Image with Glow Effect */}
          <div className="relative group animate-slideInLeft">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative w-72 h-96 lg:w-80 lg:h-[450px] rounded-2xl overflow-hidden bg-gray-800 shadow-2xl transform group-hover:scale-105 transition duration-500">
              <img
                src={Faisal}
                alt="Syed Faisal Abdul Rahman Zulfequar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left lg:w-[60%] animate-slideInRight">
            <div className="space-y-4">
              <h1 className="sm:text-5xl text-3xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r text-white bg-clip-text ">
                  Syed Faisal Abdul Rahman Zulfequar
                </span>
              </h1>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm lg:text-base">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold shadow-lg transform hover:scale-110 transition duration-300 cursor-pointer">
                  💻 Full Stack Developer
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full font-semibold shadow-lg transform hover:scale-110 transition duration-300 cursor-pointer">
                  🤖 RAG Developer
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full font-semibold shadow-lg transform hover:scale-110 transition duration-300 cursor-pointer">
                  🧠 GenAI Enthusiast
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300 shadow-lg transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>📄 View Resume</span>
                <span className="group-hover:translate-x-1 transition duration-300">
                  →
                </span>
              </a>
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-purple-800 transition duration-300 shadow-lg transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>💬 Let's Connect</span>
                <span className="group-hover:translate-x-1 transition duration-300">
                  →
                </span>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-700">
              <div className="text-center transform hover:scale-110 transition duration-300 cursor-pointer">
                <p className="text-3xl font-bold text-blue-400">9.7</p>
                <p className="text-sm text-gray-400">CGPA</p>
              </div>
              <div className="text-center transform hover:scale-110 transition duration-300 cursor-pointer">
                <p className="text-3xl font-bold text-purple-400">25+</p>
                <p className="text-sm text-gray-400">Technologies</p>
              </div>
              <div className="text-center transform hover:scale-110 transition duration-300 cursor-pointer">
                <p className="text-3xl font-bold text-green-400">10+</p>
                <p className="text-sm text-gray-400">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="flex justify-center py-2 sm:py-10 scroll-animate animate-on-scroll project-fade ">
        <div className="w-[95%] items-center px-2 sm:px-10 bg-gray-900 text-white text-center bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-blue-500/20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-400 animate-pulse">
            About <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed space-y-4">
            <span className="block transform hover:scale-105 transition-transform duration-300 hover:translate-x-2">
              I'm a passionate{" "}
              <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                Computer Science Graduate
              </span>{" "}
              from{" "}
              <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                Kishinchand Chellaram College, Mumbai
              </span>{" "}
              (2022–2025) with a stellar{" "}
              <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300 cursor-pointer animate-bounce inline-block">CGPA of 9.7</span>.
            </span>

            <span className="block transform hover:scale-105 transition-transform duration-300 hover:translate-x-2 delay-100">
              With expertise in{" "}
              <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                25+ technologies
              </span>{" "}
              including TypeScript, Next.js, Docker, LangGraph, and LangChain,
              I've crafted innovative solutions like{" "}
              <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300 cursor-pointer">ChefGenie</span>{" "}
              (AI-powered recipe generator),{" "}
              <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300 cursor-pointer">CricAIlytics</span>{" "}
              (cricket analytics), and robust e-commerce platforms.
            </span>

            <span className="block transform hover:scale-105 transition-transform duration-300 hover:translate-x-2 delay-200">
              As a{" "}
              <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300 cursor-pointer">RAG Developer</span>{" "}
              and{" "}
              <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                GenAI Enthusiast
              </span>
              , I bridge the gap between cutting-edge AI and practical
              full-stack applications, creating seamless user experiences backed
              by powerful technology.
            </span>

            <span className="block transform hover:scale-105 transition-transform duration-300 hover:translate-x-2 delay-300">
              Beyond coding, I'm passionate about cricket, football, tennis, and
              staying at the forefront of AI, Web Development, and DevOps
              innovations.
            </span>

            <span className="block text-center mt-6 text-xl text-blue-400 font-bold animate-pulse transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              🚀 Open to Internships, Jobs, and Freelance Collaborations!
            </span>
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 animate-on-scroll project-fade">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-400 text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl border border-gray-700 hover:border-blue-500 transition duration-300 cursor-pointer transform hover:scale-105">
              <div className="flex items-center mb-4">
                <TbBrain className="text-3xl text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">CricAIlytics</h3>
              </div>
              <p className="text-gray-300 mb-4">
                AI-powered RAG application delivering advanced cricket
                analytics, personalized player insights, and match stats using
                real-time data retrieval and LLM-based summarization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 rounded-full text-xs">
                  RAG
                </span>
                <span className="px-3 py-1 bg-purple-600 rounded-full text-xs">
                  LangChain
                </span>
                <span className="px-3 py-1 bg-pink-600 rounded-full text-xs">
                  AI
                </span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl border border-gray-700 hover:border-purple-500 transition duration-300 cursor-pointer transform hover:scale-105">
              <div className="flex items-center mb-4">
                <FaCode className="text-3xl text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Scrapeboard</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Intelligent web scraping platform with real-time data
                extraction, automated workflows, and customizable scrapers for
                diverse data sources.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-600 rounded-full text-xs">
                  Python
                </span>
                <span className="px-3 py-1 bg-cyan-600 rounded-full text-xs">
                  Automation
                </span>
                <span className="px-3 py-1 bg-green-600 rounded-full text-xs">
                  Data
                </span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl border border-gray-700 hover:border-green-500 transition duration-300 cursor-pointer transform hover:scale-105">
              <div className="flex items-center mb-4">
                <FaRocket className="text-3xl text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">PTAI</h3>
              </div>
              <p className="text-gray-300 mb-4">
                AI-powered fitness app built with Next.js that delivers
                personalized workout routines and nutrition plans based on
                health metrics, dietary preferences, and fitness goals.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 rounded-full text-xs">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-green-600 rounded-full text-xs">
                  AI
                </span>
                <span className="px-3 py-1 bg-orange-600 rounded-full text-xs">
                  Fitness
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300 cursor-pointer shadow-lg transform hover:scale-105">
                View All Projects →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16 px-4 bg-gray-800 text-white animate-on-scroll project-fade">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 text-center">
          Skills
        </h2>
        <p className="text-center mt-4 text-lg text-gray-300 max-w-3xl mx-auto animate-on-scroll project-fade">
          These are the core technologies I use in my projects. You can explore
          more skills in detail on the
          <Link to="/skills" className="text-blue-400 underline ml-1">
            Skills page
          </Link>
          .
        </p>

        <div className="flex flex-wrap justify-center mt-8 gap-8 animate-on-scroll project-fade">
          <div className="flex flex-col items-center transform hover:scale-110 hover:-rotate-3 transition duration-300 cursor-pointer group">
            <TbBrain className="text-4xl text-pink-400 group-hover:animate-bounce" />
            <p className="mt-2 text-sm">GenAI</p>
          </div>

          <div className="flex flex-col items-center transform hover:scale-110 hover:rotate-3 transition duration-300 cursor-pointer group">
            <SiNextdotjs className="text-4xl text-white group-hover:animate-pulse" />
            <p className="mt-2 text-sm">Next.js</p>
          </div>

          <div className="flex flex-col items-center transform hover:scale-110 hover:-rotate-3 transition duration-300 cursor-pointer group">
            <FaReact className="text-4xl text-blue-500 group-hover:animate-spin" />
            <p className="mt-2 text-sm">React</p>
          </div>

          <div className="flex flex-col items-center transform hover:scale-110 hover:rotate-3 transition duration-300 cursor-pointer group">
            <FaNodeJs className="text-4xl text-green-500 group-hover:animate-bounce" />
            <p className="mt-2 text-sm">Node.js</p>
          </div>

          <div className="flex flex-col items-center transform hover:scale-110 hover:-rotate-3 transition duration-300 cursor-pointer group">
            <FaPython className="text-4xl text-yellow-500 group-hover:animate-pulse" />
            <p className="mt-2 text-sm">Python</p>
          </div>

          <div className="flex flex-col items-center transform hover:scale-110 hover:rotate-3 transition duration-300 cursor-pointer group">
            <SiFastapi className="text-4xl text-green-500 group-hover:animate-bounce" />
            <p className="mt-2 text-sm">FastAPI</p>
          </div>

          <div className="flex flex-col items-center transform hover:scale-110 hover:-rotate-3 transition duration-300 cursor-pointer group">
            <FaJs className="text-4xl text-yellow-500 group-hover:animate-pulse" />
            <p className="mt-2 text-sm">JavaScript</p>
          </div>

          <div className="flex flex-col items-center transform hover:scale-110 hover:rotate-3 transition duration-300 cursor-pointer group">
            <SiTypescript className="text-4xl text-blue-400 group-hover:animate-bounce" />
            <p className="mt-2 text-sm">TypeScript</p>
          </div>

          <div className="flex flex-col items-center transform hover:scale-110 hover:-rotate-3 transition duration-300 cursor-pointer group">
            <FaDatabase className="text-4xl text-green-700 group-hover:animate-pulse" />
            <p className="mt-2 text-sm">MongoDB</p>
          </div>

          <div className="flex flex-col items-center transform hover:scale-110 hover:rotate-3 transition duration-300 cursor-pointer group">
            <FaDocker className="text-4xl text-blue-500 group-hover:animate-spin" />
            <p className="mt-2 text-sm">Docker</p>
          </div>

          <div className="flex flex-col items-center transform hover:scale-110 hover:-rotate-3 transition duration-300 cursor-pointer group">
            <SiRedis className="text-4xl text-red-500 group-hover:animate-bounce" />
            <p className="mt-2 text-sm">Redis</p>
          </div>

          <div className="flex flex-col items-center transform hover:scale-110 hover:rotate-3 transition duration-300 cursor-pointer group">
            <FaAws className="text-4xl text-orange-500 group-hover:animate-pulse" />
            <p className="mt-2 text-sm">AWS</p>
          </div>

          <div className="flex flex-col items-center transform hover:scale-110 hover:rotate-3 transition duration-300 cursor-pointer group">
            <FaGitAlt className="text-4xl text-orange-500 group-hover:animate-spin" />
            <p className="mt-2 text-sm">Git & GitHub</p>
          </div>
        </div>

        <div className="mt-10 text-center animate-on-scroll project-fade">
          <Link to="/skills">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer shadow-md">
              View All Skills
            </button>
          </Link>
        </div>
      </div>

      {/* Connect Section */}
      <div className="py-10 px-4 bg-gray-900 text-center animate-on-scroll project-fade">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400">
          Connect With Me
        </h2>
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://www.linkedin.com/in/syedfaisal30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/syedfaisal30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/9892996342"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-3xl"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://x.com/SyedFaisal30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-3xl"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:sfarz172320@gmail.com"
            className="text-gray-600 text-3xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
