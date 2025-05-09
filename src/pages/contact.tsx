import Header from "../components/header";
import Footer from "../components/footer";
import { FaLinkedin, FaGithub, FaWhatsapp, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white font-sans pt-10 min-h-screen">
      <Header />

      <div className="mt-16 px-4 sm:px-10 space-y-10 animate-on-scroll project-fade">
        <h2 className="text-3xl font-bold text-blue-400 text-center">📩 Contact</h2>

        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto animate-on-scroll project-fade">
          <h3 className="text-xl font-semibold text-blue-300 mb-4 text-center animate-on-scroll project-fade">Reach Out</h3>

          <form
            action="mailto:sfarz172320@gmail.com"
            method="get"
            encType="text/plain"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="query" className="block text-gray-300">
                Your Query
              </label>
              <textarea
                id="query"
                name="query"
                required
                className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg"
                placeholder="Write your message here"
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Platform Links with Colored Icons */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md mt-10 animate-on-scroll project-fade">
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/syedfaisal30/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-700 rounded-lg text-white hover:bg-blue-800 transition duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/SyedFaisal30"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg text-white hover:bg-gray-900 transition duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://wa.me/9892996342"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-500 rounded-lg text-white hover:bg-green-600 transition duration-300"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
            <a
              href="https://twitter.com/SyedFaisal30"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="mailto:sfarz172320@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-red-500 rounded-lg text-white hover:bg-red-600 transition duration-300"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
