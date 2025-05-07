import { Link } from 'react-router-dom';
import {
  FaHome,
  FaProjectDiagram,
  FaCode,
  FaGraduationCap,
  FaEnvelope,
} from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent text-white z-50 backdrop-blur-md shadow-lg w-full">
      <div className="container mx-auto flex justify-center items-center py-4 px-6 sm:px-10">
        <nav className="flex space-x-6 sm:space-x-8 text-lg sm:text-xl">
          <Link
            to="/"
            className="hover:text-blue-400 transition flex items-center"
          >
            <FaHome />
            <span className="ml-2 hidden sm:inline-block">Home</span>
          </Link>
          <Link
            to="/projects"
            className="hover:text-blue-400 transition flex items-center"
          >
            <FaProjectDiagram />
            <span className="ml-2 hidden sm:inline-block">Projects</span>
          </Link>
          <Link
            to="/skills"
            className="hover:text-blue-400 transition flex items-center"
          >
            <FaCode />
            <span className="ml-2 hidden sm:inline-block">Skills</span>
          </Link>
          <Link
            to="/education"
            className="hover:text-blue-400 transition flex items-center"
          >
            <FaGraduationCap />
            <span className="ml-2 hidden sm:inline-block">Education</span>
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-400 transition flex items-center"
          >
            <FaEnvelope />
            <span className="ml-2 hidden sm:inline-block">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
