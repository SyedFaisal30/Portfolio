import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa"; // For social media icons
import Header from "../components/header";
import Footer from "../components/footer";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa"; 
import Faisal from "../assets/Faisal.jpeg";
import SyedFaisal from "../assets/Syed Faisal.pdf";
const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-16">
      {/* Header Section */}
      <Header />

      {/* Profile Section */}
      <div className="flex items-center justify-center py-10 px-2 md:px-16 bg-gray-900 text-white">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto space-y-6 sm:space-y-0">
          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Profile Image */}
            <div className="w-60 h-80 sm:w-48 sm:h-48 rounded-lg overflow-hidden bg-gray-200 animate-slideInLeft">
              <img
                src={Faisal}
                alt="Syed Faisal Abdul Rahman Zulfequar"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Text and Resume Button */}
            <div className="text-center sm:text-left animate-slideInRight">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Syed Faisal Abdul Rahman Zulfequar
              </h1>
              <p className="text-xl sm:text-2xl mt-2 text-gray-300">
                Full Stack Developer | 10+ Projects | 25+ Languages | 2+ Years
                Experience
              </p>

              {/* Resume Button */}
              {/* Resume Button */}
              <div className="flex justify-center mt-4">
                <a
                  href={SyedFaisal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                  View Resume
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* About Me Section */}
      <div className="text-center py-10 px-4 bg-gray-800 text-white animate-on-scroll project-fade">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400">
          About Me
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed">
          I’m{" "}
          <span className="text-white font-semibold">
            Syed Faisal Abdul Rahman Zulfequar
          </span>
          , a dedicated{" "}
          <span className="text-white font-semibold">Full Stack Developer</span>{" "}
          and Computer Science student at{" "}
          <span className="text-white font-semibold">
            Kishinchand Chellaram College, Mumbai
          </span>{" "}
          (2022–2025) with a{" "}
          <span className="text-white font-semibold">CGPA of 9.7</span>.
          <br />
          <br />
          Skilled in the{" "}
          <span className="text-white font-semibold">MERN stack</span> and over{" "}
          <span className="text-white font-semibold">25 technologies</span> like
          TypeScript, Next.js, and Docker, I’ve built scalable apps such as{" "}
          <span className="text-white font-semibold">ChefGenie</span>, an
          AI-powered recipe tool, a robust{" "}
          <span className="text-white font-semibold">e-commerce site</span>, and
          a{" "}
          <span className="text-white font-semibold">
            video progress tracker
          </span>
          .
          <br />
          <br />I love creating user-friendly solutions by combining clean UI
          with solid backend logic. Beyond tech, I enjoy{" "}
          <span className="text-white font-semibold">
            cricket, football, and tennis
          </span>{" "}
          and stay curious about{" "}
          <span className="text-white font-semibold">
            AI, Web Development, and DevOps
          </span>
          .<br />
          <br />
          Open to internships and collaborations — let’s build something
          impactful!
        </p>
      </div>

      {/* Projects Section */}
      <div className="mt-8 space-y-6 max-w-4xl mx-auto text-lg text-gray-300 animate-on-scroll project-fade px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl text-center font-semibold text-blue-400">
          Projects
        </h2>

        <div className="mt-8 space-y-6 animate-on-scroll project-fade">
          {/* ChefGenie Project */}
          <div className="animate-on-scroll project-fade">
            <h3 className="text-2xl font-semibold text-white">ChefGenie</h3>
            <p>
              ChefGenie is a dynamic recipe generation platform where users can
              generate dishes based on available ingredients. With integration
              to TheMealDB, users can fetch detailed recipes, explore food
              ideas, and post their own creations. This project is built using
              the MERN stack.
            </p>
          </div>

          {/* E-commerce Website Project */}
          <div className="animate-on-scroll project-fade">
            <h3 className="text-2xl font-semibold text-white">
              E-commerce Website
            </h3>
            <p>
              This e-commerce platform provides a seamless shopping experience
              with features such as product listings, cart management, and
              checkout functionality. Built with Next.js, Tailwind CSS, and
              ShadCN UI, it offers a modern, responsive design for a smooth user
              interface.
            </p>
          </div>

          {/* Video Progress Tracker (VPT) Project */}
          <div className="animate-on-scroll project-fade">
            <h3 className="text-2xl font-semibold text-white">
              Video Progress Tracker (VPT)
            </h3>
            <p>
              VPT is a video progress tracking web app that allows users to
              track the progress of multiple videos on a single page. It
              features a modular design and integrates individual video
              progress, saving user data for a more personalized experience.
              Developed with the MERN stack.
            </p>
          </div>
        </div>

        <div className="mt-10 mb-10 text-center">
          <Link to="/projects">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
              View All Projects
            </button>
          </Link>
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
          {/* Skill with Icon */}
          <div className="flex flex-col items-center transform hover:scale-110 transition duration-300">
            <FaReact className="text-4xl text-blue-500" />
            <p className="mt-2 text-sm">React</p>
          </div>

          <div className="flex flex-col items-center">
            <FaNodeJs className="text-4xl text-green-500" />
            <p className="mt-2 text-sm">Node.js</p>
          </div>

          <div className="flex flex-col items-center">
            <FaJs className="text-4xl text-yellow-500" />
            <p className="mt-2 text-sm">JavaScript</p>
          </div>

          <div className="flex flex-col items-center">
            <FaDatabase className="text-4xl text-green-700" />
            <p className="mt-2 text-sm">MongoDB</p>
          </div>

          <div className="flex flex-col items-center">
            <FaHtml5 className="text-4xl text-red-500" />
            <p className="mt-2 text-sm">HTML5</p>
          </div>

          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-4xl text-blue-600" />
            <p className="mt-2 text-sm">CSS3</p>
          </div>

          <div className="flex flex-col items-center">
            <FaGitAlt className="text-4xl text-orange-500" />
            <p className="mt-2 text-sm">Git</p>
          </div>
        </div>

        {/* Button to redirect to the Skills page */}
        <div className="mt-10 text-center animate-on-scroll project-fade">
          <Link to="/skills">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 shadow-md">
              View All Skills
            </button>
          </Link>
        </div>
      </div>

      {/* Connect Section (Social Icons) */}
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

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default LandingPage;
